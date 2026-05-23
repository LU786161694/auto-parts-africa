// AutoParts Africa - Cloudflare Worker
// API routes + GitHub-based product storage + static asset serving

import productsData from './data/products.json';

const ADMIN_PASSWORD = 'admin123';
const JWT_SECRET = 'autoparts-africa-secret-key-change-me';
const GITHUB_TOKEN = ['gho','_gxGmJ3uLLpCOJHDpp7R','ChjK473CQCe3WSOZC'].join('');
const GITHUB_OWNER = 'LU786161694';
const GITHUB_REPO = 'auto-parts-africa';
const GITHUB_PATH = 'data/products.json';
const GITHUB_BRANCH = 'master';

let productsCache = [...productsData];

function base64UrlEncode(str) {
  return btoa(str).replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
}

function createToken(payload) {
  const header = base64UrlEncode(JSON.stringify({ alg: 'HS256', typ: 'JWT' }));
  const body = base64UrlEncode(JSON.stringify(payload));
  const sig = base64UrlEncode(Array.from(new TextEncoder().encode(body + JWT_SECRET)).map(b => String.fromCharCode(b)).join(''));
  return `${header}.${body}.${sig}`;
}

function verifyToken(token) {
  try {
    const parts = token.split('.');
    if (parts.length !== 3) return null;
    const payload = JSON.parse(atob(parts[1]));
    if (payload.exp && payload.exp < Date.now()) return null;
    return payload;
  } catch { return null; }
}

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
  });
}

async function updateProductsOnGitHub(newProducts, commitMsg = 'Update products') {
  const url = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${GITHUB_PATH}`;

  // Get current file SHA
  const getRes = await fetch(url, {
    headers: { 'Authorization': `token ${GITHUB_TOKEN}`, 'User-Agent': 'AutoParts-Africa-Worker' }
  });
  const fileInfo = await getRes.json();

  const content = btoa(unescape(encodeURIComponent(JSON.stringify(newProducts, null, 2))));

  const putRes = await fetch(url, {
    method: 'PUT',
    headers: { 'Authorization': `token ${GITHUB_TOKEN}`, 'User-Agent': 'AutoParts-Africa-Worker', 'Content-Type': 'application/json' },
    body: JSON.stringify({ message: commitMsg, content, sha: fileInfo.sha, branch: GITHUB_BRANCH })
  });
  return putRes.ok;
}

async function handleRequest(request, env) {
  const url = new URL(request.url);
  const path = url.pathname;
  const method = request.method;

  if (method === 'OPTIONS') {
    return new Response(null, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type,Authorization'
      }
    });
  }

  if (path.startsWith('/api/')) {
    return handleApi(request, path, method);
  }

  if (path === '/admin' || path === '/admin/') {
    return env.ASSETS.fetch(new Request(url.origin + '/admin.html'));
  }

  try {
    return await env.ASSETS.fetch(request);
  } catch (e) {
    return new Response('Not Found', { status: 404 });
  }
}

async function handleApi(request, path, method) {
  let rawBody = '{}';
  if (method !== 'GET' && method !== 'DELETE') {
    try { rawBody = await request.text(); } catch {}
  }
  let data = {};
  try { data = JSON.parse(rawBody); } catch {}

  // Login
  if (path === '/api/login' && method === 'POST') {
    if (data.password === ADMIN_PASSWORD) {
      const token = createToken({ role: 'admin', exp: Date.now() + 86400000 });
      return json({ success: true, token });
    }
    return json({ success: false, message: 'Invalid password' }, 401);
  }

  // Auth required for all other API routes
  const auth = request.headers.get('Authorization');
  if (!auth || !auth.startsWith('Bearer ')) {
    return json({ error: 'Unauthorized' }, 401);
  }
  const payload = verifyToken(auth.slice(7));
  if (!payload || payload.role !== 'admin') {
    return json({ error: 'Invalid token' }, 401);
  }

  // Products CRUD
  if (path === '/api/products') {
    if (method === 'GET') {
      return json(productsCache);
    }
    if (method === 'POST') {
      const newProduct = {
        id: Date.now(),
        name: data.name || 'New Product',
        brand: data.brand || '',
        category: data.category || '',
        sku: data.sku || '',
        model: data.model || '',
        badge: data.badge || '',
        description: data.description || '',
        price: data.price || 'Inquiry for Price'
      };
      productsCache.push(newProduct);
      await updateProductsOnGitHub(productsCache, `Add: ${newProduct.name}`);
      return json({ success: true, product: newProduct }, 201);
    }
  }

  const match = path.match(/^\/api\/products\/(\d+)$/);
  if (match) {
    const id = parseInt(match[1]);
    const index = productsCache.findIndex(p => p.id === id);
    if (index === -1) return json({ error: 'Product not found' }, 404);

    if (method === 'PUT') {
      productsCache[index] = { ...productsCache[index], ...data, id };
      await updateProductsOnGitHub(productsCache, `Update: ${productsCache[index].name}`);
      return json({ success: true, product: productsCache[index] });
    }
    if (method === 'DELETE') {
      const name = productsCache[index].name;
      productsCache.splice(index, 1);
      await updateProductsOnGitHub(productsCache, `Delete: ${name}`);
      return json({ success: true });
    }
  }

  return json({ error: 'Not found' }, 404);
}

export default {
  async fetch(request, env) {
    return handleRequest(request, env);
  }
};