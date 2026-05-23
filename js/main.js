// ===== Product Database =====
const products = [
  // Engine Parts
  { id:1, name:'Complete Engine Assembly 1ZZ-FE', brand:'toyota', category:'engine', sku:'ENG-TOY-1ZZFE', model:'Corolla 2000-2008', badge:'hot' },
  { id:2, name:'Engine Rebuild Kit 2KD-FTV', brand:'toyota', category:'engine', sku:'ENG-TOY-RBK-2KD', model:'Hilux 2005-2015', badge:'' },
  { id:3, name:'Timing Chain Kit K24', brand:'honda', category:'engine', sku:'ENG-HON-TCK-K24', model:'Accord/CR-V 2003-2012', badge:'' },
  { id:4, name:'Complete Cylinder Head 4D56', brand:'mitsubishi', category:'engine', sku:'ENG-MIT-CH-4D56', model:'L200/Pajero 2006-2015', badge:'hot' },
  { id:5, name:'Timing Belt Kit M15A', brand:'suzuki', category:'engine', sku:'ENG-SUZ-TBK-M15A', model:'Swift 1.5L 2005-2011', badge:'' },
  { id:6, name:'Oil Pump Assembly QR25DE', brand:'nissan', category:'engine', sku:'ENG-NIS-OP-QR25', model:'X-Trail/Altima 2007-2013', badge:'new' },
  { id:7, name:'Head Gasket Set EJ20', brand:'subaru', category:'engine', sku:'ENG-SUB-HG-EJ20', model:'Impreza/Forester 2002-2012', badge:'' },
  { id:8, name:'Piston Ring Set L3-VE', brand:'mazda', category:'engine', sku:'ENG-MAZ-PR-L3VE', model:'Mazda3/Mazda6 2.0L', badge:'' },

  // Brake Systems
  { id:9, name:'Front Brake Pads Set', brand:'honda', category:'brakes', sku:'BRK-HON-FBP-CV16', model:'Civic 2016-2021', badge:'hot' },
  { id:10, name:'Rear Brake Shoes Set', brand:'toyota', category:'brakes', sku:'BRK-TOY-RBS-CR14', model:'Corolla 2014-2019', badge:'' },
  { id:11, name:'Front Brake Disc Rotors Pair', brand:'nissan', category:'brakes', sku:'BRK-NIS-FDR-XT31', model:'X-Trail T31 2007-2013', badge:'hot' },
  { id:12, name:'Brake Master Cylinder', brand:'mitsubishi', category:'brakes', sku:'BRK-MIT-BMC-L200', model:'L200 2010-2019', badge:'' },
  { id:13, name:'Brake Caliper Front Left', brand:'toyota', category:'brakes', sku:'BRK-TOY-BCFL-HL', model:'Hilux Vigo 2005-2015', badge:'new' },
  { id:14, name:'Complete Brake Pad Set', brand:'suzuki', category:'brakes', sku:'BRK-SUZ-BPS-VIT', model:'Vitara 2015-2022', badge:'' },

  // Suspension
  { id:15, name:'Front Shock Absorber Pair', brand:'nissan', category:'suspension', sku:'SUS-NIS-FSA-XT31', model:'X-Trail T31 2007-2013', badge:'new' },
  { id:16, name:'Complete Strut Assembly Front', brand:'toyota', category:'suspension', sku:'SUS-TOY-CSAF-CR14', model:'Corolla 2014-2019', badge:'' },
  { id:17, name:'Lower Control Arm Front Right', brand:'honda', category:'suspension', sku:'SUS-HON-LCAF-CR12', model:'CR-V 2012-2016', badge:'hot' },
  { id:18, name:'Stabilizer Link Front Pair', brand:'mitsubishi', category:'suspension', sku:'SUS-MIT-SLFP-PAJ', model:'Pajero Sport 2010-2017', badge:'' },
  { id:19, name:'Shock Absorber Rear Pair', brand:'toyota', category:'suspension', sku:'SUS-TOY-SARP-HL', model:'Hilux Revo 2015-2022', badge:'hot' },
  { id:20, name:'Ball Joint Set Front Lower', brand:'mazda', category:'suspension', sku:'SUS-MAZ-BJFL-CX5', model:'CX-5 2012-2017', badge:'' },

  // Electrical
  { id:21, name:'Alternator Assembly 2KD-FTV', brand:'toyota', category:'electrical', sku:'ELE-TOY-ALT-HL2KD', model:'Hilux 2005-2015', badge:'hot' },
  { id:22, name:'Starter Motor Assembly K24', brand:'honda', category:'electrical', sku:'ELE-HON-SM-K24', model:'Accord/CR-V 2003-2012', badge:'' },
  { id:23, name:'Ignition Coil Set (4 pcs)', brand:'nissan', category:'electrical', sku:'ELE-NIS-ICS-QR25', model:'X-Trail T31 2.5L', badge:'new' },
  { id:24, name:'Oxygen Sensor Set Front+Rear', brand:'toyota', category:'electrical', sku:'ELE-TOY-OS-CR14', model:'Corolla 2014-2019', badge:'' },
  { id:25, name:'Alternator 100A', brand:'mitsubishi', category:'electrical', sku:'ELE-MIT-ALT-L200', model:'L200 4D56 2010-2019', badge:'' },
  { id:26, name:'Engine ECU / ECM', brand:'suzuki', category:'electrical', sku:'ELE-SUZ-ECU-SW10', model:'Swift 1.0L 2010-2017', badge:'' },

  // Transmission
  { id:27, name:'Clutch Kit 3-Piece', brand:'mitsubishi', category:'transmission', sku:'TRA-MIT-CK3-L200', model:'L200 4D56 2006-2015', badge:'hot' },
  { id:28, name:'Complete Clutch Set', brand:'toyota', category:'transmission', sku:'TRA-TOY-CCS-CR14', model:'Corolla 1.6L Manual', badge:'' },
  { id:29, name:'CV Joint Outer Front', brand:'honda', category:'transmission', sku:'TRA-HON-CVJO-CV16', model:'Civic 2016-2021', badge:'new' },
  { id:30, name:'Drive Shaft Front Left', brand:'nissan', category:'transmission', sku:'TRA-NIS-DSFL-NV', model:'Navara D40 2005-2015', badge:'' },
  { id:31, name:'Transmission Mount Set', brand:'subaru', category:'transmission', sku:'TRA-SUB-TMS-FOR', model:'Forester 2009-2018', badge:'' },
  { id:32, name:'Flywheel Assembly', brand:'toyota', category:'transmission', sku:'TRA-TOY-FWA-HL', model:'Hilux 2KD Manual', badge:'hot' },

  // Body Parts
  { id:33, name:'Headlight Assembly Pair', brand:'nissan', category:'body', sku:'BOD-NIS-HLPA-PTY62', model:'Patrol Y62 2010-2021', badge:'new' },
  { id:34, name:'Front Bumper Complete', brand:'toyota', category:'body', sku:'BOD-TOY-FBC-CR14', model:'Corolla 2014-2016', badge:'' },
  { id:35, name:'Side Mirror Electric Right', brand:'honda', category:'body', sku:'BOD-HON-SMER-CR12', model:'CR-V 2012-2016', badge:'' },
  { id:36, name:'Tail Light Assembly Rear Right', brand:'mitsubishi', category:'body', sku:'BOD-MIT-TLRR-PAJ', model:'Pajero Sport 2016-2022', badge:'' },
  { id:37, name:'Radiator Grille', brand:'toyota', category:'body', sku:'BOD-TOY-RG-HL', model:'Hilux Revo 2015-2020', badge:'hot' },
  { id:38, name:'Front Fender Left', brand:'mazda', category:'body', sku:'BOD-MAZ-FFL-CX5', model:'CX-5 2012-2017', badge:'' },

  // Filters & Fluids
  { id:39, name:'Oil Filter (Pack of 10)', brand:'toyota', category:'filters', sku:'FIL-TOY-OF10-90915', model:'Universal Japanese Models', badge:'hot' },
  { id:40, name:'Air Filter Element', brand:'honda', category:'filters', sku:'FIL-HON-AF-CV16', model:'Civic 1.5T 2016-2021', badge:'' },
  { id:41, name:'Fuel Filter Assembly', brand:'nissan', category:'filters', sku:'FIL-NIS-FFA-NP300', model:'NP300/Hardbody Diesel', badge:'' },
  { id:42, name:'Cabin/AC Filter', brand:'toyota', category:'filters', sku:'FIL-TOY-CF-CR14', model:'Corolla 2014-2019', badge:'' },
  { id:43, name:'Engine Oil 5W-30 (4L)', brand:'toyota', category:'filters', sku:'FIL-TOY-EO530-4L', model:'Genuine Toyota Oil', badge:'new' },
  { id:44, name:'Complete Filter Service Kit', brand:'suzuki', category:'filters', sku:'FIL-SUZ-CFK-SW15', model:'Swift 1.5L Service Kit', badge:'' },

  // Cooling System
  { id:45, name:'Radiator Assembly', brand:'toyota', category:'cooling', sku:'COL-TOY-RAD-CR14', model:'Corolla 1ZZ-FE 2000-2008', badge:'hot' },
  { id:46, name:'Water Pump with Gasket', brand:'honda', category:'cooling', sku:'COL-HON-WPWG-K24', model:'Accord/CR-V K24 Engine', badge:'' },
  { id:47, name:'Radiator Complete', brand:'nissan', category:'cooling', sku:'COL-NIS-RC-XT31', model:'X-Trail T31 2.0L', badge:'' },
  { id:48, name:'Thermostat Assembly', brand:'mitsubishi', category:'cooling', sku:'COL-MIT-TA-4D56', model:'L200/Strada 4D56 Diesel', badge:'' },
  { id:49, name:'Radiator Cooling Fan Assembly', brand:'toyota', category:'cooling', sku:'COL-TOY-RCFA-HL', model:'Hilux Vigo 2005-2015', badge:'new' },
  { id:50, name:'Coolant Expansion Tank', brand:'suzuki', category:'cooling', sku:'COL-SUZ-CET-VIT', model:'Vitara 2015-2022', badge:'' }
];

// ===== State =====
const state = {
  brand: 'all',
  category: 'all',
  search: '',
  filteredProducts: [...products]
};

// ===== DOM Helpers =====
function $(sel) { return document.querySelector(sel); }
function $$(sel) { return document.querySelectorAll(sel); }

// ===== Navigation =====
function initNav() {
  const nav = $('#nav');
  const toggle = $('#navToggle');
  const links = $('#navLinks');
  if (!toggle || !links) return;

  toggle.addEventListener('click', () => links.classList.toggle('active'));

  document.addEventListener('click', (e) => {
    if (!nav.contains(e.target)) links.classList.remove('active');
  });

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  });
}

// ===== Product Filtering =====
function filterProducts() {
  state.filteredProducts = products.filter(p => {
    if (state.brand !== 'all' && p.brand !== state.brand) return false;
    if (state.category !== 'all' && p.category !== state.category) return false;
    if (state.search) {
      const s = state.search.toLowerCase();
      return p.name.toLowerCase().includes(s) || p.sku.toLowerCase().includes(s) || p.model.toLowerCase().includes(s) || p.brand.toLowerCase().includes(s);
    }
    return true;
  });
  renderProducts();
}

function renderProducts() {
  const grid = $('#productsGrid');
  const noResults = $('#noResults');
  const count = $('#resultCount');
  if (!grid) return;

  grid.innerHTML = state.filteredProducts.map(p => `
    <div class="product-card" data-brand="${p.brand}" data-category="${p.category}">
      <div class="product-card-img"><span class="placeholder">${getCategoryEmoji(p.category)}</span></div>
      ${p.badge ? `<span class="product-card-badge ${p.badge==='hot'?'hot':'new'}">${p.badge==='hot'?'Hot Seller':'New Arrival'}</span>` : ''}
      <div class="product-info">
        <span class="brand-tag">${p.brand.charAt(0).toUpperCase()+p.brand.slice(1)}</span>
        <h3>${p.name}</h3>
        <p class="sku">SKU: ${p.sku}</p>
        <p style="font-size:0.85rem;color:var(--text-muted);margin-bottom:6px;">Fits: ${p.model}</p>
        <p class="price">Inquiry for Price</p>
        <a href="contact.html" class="btn btn-primary btn-small">Inquire Now</a>
      </div>
    </div>
  `).join('');

  if (noResults) noResults.style.display = state.filteredProducts.length === 0 ? 'block' : 'none';
  if (count) count.textContent = `Showing ${state.filteredProducts.length} of ${products.length} products`;
}

function getCategoryEmoji(cat) {
  const map = { engine:'&#9881;', brakes:'&#128737;', suspension:'&#128296;', electrical:'&#9889;', transmission:'&#9881;', body:'&#128663;', filters:'&#128168;', cooling:'&#128167;' };
  return map[cat] || '&#9881;';
}

function initFilters() {
  const brandBtns = $$('#brandFilter .brand-filter-btn');
  const catBtns = $$('#categoryFilter .filter-tab');
  const searchInput = $('#searchInput');
  const searchBtn = $('#searchBtn');

  if (brandBtns.length) {
    brandBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        brandBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.brand = btn.dataset.brand;
        filterProducts();
      });
    });
  }

  if (catBtns.length) {
    catBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        catBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.category = btn.dataset.category;
        filterProducts();
      });
    });
  }

  function doSearch() {
    state.search = searchInput ? searchInput.value.trim() : '';
    filterProducts();
  }

  if (searchBtn) searchBtn.addEventListener('click', doSearch);
  if (searchInput) searchInput.addEventListener('keyup', (e) => { if (e.key==='Enter') doSearch(); });

  const params = new URLSearchParams(window.location.search);
  if (params.has('brand')) {
    const brand = params.get('brand').toLowerCase();
    const match = [...(brandBtns||[])].find(b => b.dataset.brand === brand);
    if (match) match.click();
  }
}

// ===== Scroll Animation =====
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.1 });

  $$('.feature-card, .product-card, .category-card, .testimonial-card, .market-card, .value-card').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
  });
}

// ===== Contact Form =====
function initContactForm() {
  const form = $('#contactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn.textContent;

    btn.textContent = 'Sending...';
    btn.disabled = true;

    setTimeout(() => {
      btn.textContent = 'Inquiry Sent Successfully!';
      btn.style.background = '#00A86B';
      form.reset();

      setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
        btn.disabled = false;
      }, 3000);
    }, 1000);
  });
}

// ===== Smooth Scroll for anchor links =====
function initSmoothScroll() {
  $$('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href === '#') return;
      const target = $(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

// ===== Init =====
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initFilters();
  if ($('#productsGrid')) renderProducts();
  initScrollAnimations();
  initContactForm();
  initSmoothScroll();
});