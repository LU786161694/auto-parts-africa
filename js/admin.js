// AutoParts Africa - Admin Panel JS

const API = '/api';
let token = localStorage.getItem('admin_token');

function $(id) { return document.getElementById(id); }

// ===== Auth =====
async function login() {
  const pw = $('loginPassword').value;
  try {
    const res = await fetch(API + '/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password: pw })
    });
    const data = await res.json();
    if (data.success) {
      token = data.token;
      localStorage.setItem('admin_token', token);
      showDashboard();
    } else {
      $('loginError').style.display = 'block';
    }
  } catch (e) {
    $('loginError').style.display = 'block';
  }
}

function logout() {
  localStorage.removeItem('admin_token');
  token = null;
  $('dashboard').classList.remove('active');
  $('loginWrap').style.display = 'flex';
}

function showDashboard() {
  $('loginWrap').style.display = 'none';
  $('dashboard').classList.add('active');
  loadProducts();
}

// ===== API Helpers =====
async function api(path, method = 'GET', body = null) {
  const opts = {
    method,
    headers: { 'Authorization': 'Bearer ' + token }
  };
  if (body) {
    opts.headers['Content-Type'] = 'application/json';
    opts.body = JSON.stringify(body);
  }
  const res = await fetch(API + path, opts);
  return res.json();
}

// ===== Products =====
let products = [];

async function loadProducts() {
  try {
    products = await api('/products');
    renderTable();
  } catch (e) {
    showToast('Failed to load products', 'error');
  }
}

function renderTable() {
  const search = ($('adminSearch').value || '').toLowerCase();
  const filtered = products.filter(p => {
    if (!search) return true;
    return (p.name || '').toLowerCase().includes(search) ||
           (p.brand || '').toLowerCase().includes(search) ||
           (p.sku || '').toLowerCase().includes(search) ||
           (p.category || '').toLowerCase().includes(search);
  });

  const tbody = document.querySelector('#productTable tbody');
  tbody.innerHTML = filtered.map(p => `
    <tr>
      <td>${p.id}</td>
      <td><strong>${esc(p.name)}</strong>${p.description ? '<br><small style="color:#999;">'+esc(p.description).substring(0,60)+'...</small>' : ''}</td>
      <td>${capitalize(p.brand)}</td>
      <td>${capitalize(p.category)}</td>
      <td><code>${esc(p.sku)}</code></td>
      <td>${p.badge ? '<span class="badge-status badge-'+p.badge+'">'+ (p.badge==='hot'?'Hot':'New') +'</span>' : '-'}</td>
      <td>
        <button class="btn-sm btn-edit" onclick="editProduct(${p.id})">Edit</button>
        <button class="btn-sm btn-del" onclick="deleteProduct(${p.id})">Delete</button>
      </td>
    </tr>
  `).join('');
}

function openModal(productId) {
  $('modalOverlay').classList.add('active');
  if (!productId) {
    $('modalTitle').textContent = 'Add Product';
    $('productForm').reset();
    $('prodId').value = '';
  }
}

function closeModal() {
  $('modalOverlay').classList.remove('active');
}

function editProduct(id) {
  const p = products.find(x => x.id === id);
  if (!p) return;
  $('prodId').value = p.id;
  $('prodName').value = p.name || '';
  $('prodBrand').value = p.brand || 'toyota';
  $('prodCat').value = p.category || 'engine';
  $('prodSku').value = p.sku || '';
  $('prodModel').value = p.model || '';
  $('prodBadge').value = p.badge || '';
  $('prodPrice').value = p.price || 'Inquiry for Price';
  $('prodDesc').value = p.description || '';
  $('modalTitle').textContent = 'Edit Product';
  $('modalOverlay').classList.add('active');
}

async function saveProduct(e) {
  e.preventDefault();
  const id = $('prodId').value;
  const data = {
    name: $('prodName').value,
    brand: $('prodBrand').value,
    category: $('prodCat').value,
    sku: $('prodSku').value,
    model: $('prodModel').value,
    badge: $('prodBadge').value,
    price: $('prodPrice').value,
    description: $('prodDesc').value
  };

  try {
    if (id) {
      await api('/products/' + id, 'PUT', data);
      showToast('Product updated!', 'success');
    } else {
      await api('/products', 'POST', data);
      showToast('Product added!', 'success');
    }
    closeModal();
    loadProducts();
  } catch (e) {
    showToast('Error saving product', 'error');
  }
}

async function deleteProduct(id) {
  if (!confirm('Delete this product? This cannot be undone.')) return;
  try {
    await api('/products/' + id, 'DELETE');
    showToast('Product deleted', 'success');
    loadProducts();
  } catch (e) {
    showToast('Error deleting product', 'error');
  }
}

// ===== Helpers =====
function esc(str) {
  if (!str) return '';
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

function capitalize(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function showToast(msg, type) {
  const t = $('toast');
  t.textContent = msg;
  t.className = 'toast ' + type;
  t.style.display = 'block';
  setTimeout(() => { t.style.display = 'none'; }, 3000);
}

// ===== Init =====
if (token) {
  // Verify token is still valid
  api('/products').then(data => {
    if (Array.isArray(data)) {
      showDashboard();
    } else {
      localStorage.removeItem('admin_token');
      token = null;
    }
  }).catch(() => {
    localStorage.removeItem('admin_token');
    token = null;
  });
}