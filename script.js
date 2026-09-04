/* =========================================================
   DATA
========================================================= */
const PRODUCTS = [
  {
    id: "air-motion",
    name: "SOLEVA Air Motion",
    category: "running",
    price: 289,
    rating: 4.7,
    colors: ["#111111", "#e5e5e5", "#8c2f2f"],
    img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80",
    desc: "A lightweight running shoe built for daily mileage, with a responsive midsole that keeps every stride quick and controlled."
  },
  {
    id: "velocity-x",
    name: "SOLEVA Velocity X",
    category: "running",
    price: 319,
    rating: 4.8,
    colors: ["#ffffff", "#111111", "#2f4f8c"],
    img: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=800&q=80",
    desc: "Engineered for speed sessions and race day, Velocity X pairs a snug knit upper with a propulsive foam stack."
  },
  {
    id: "street-pro",
    name: "SOLEVA Street Pro",
    category: "lifestyle",
    price: 249,
    rating: 4.6,
    colors: ["#111111", "#c9a24b", "#ffffff"],
    img: "https://images.unsplash.com/photo-1465453869711-7e174808ace9?auto=format&fit=crop&w=800&q=80",
    desc: "A city-ready silhouette with clean lines and a durable outsole, made to move from the sidewalk to the studio."
  },
  {
    id: "sprint-one",
    name: "SOLEVA Sprint One",
    category: "running",
    price: 269,
    rating: 4.5,
    colors: ["#e5e5e5", "#111111"],
    img: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=800&q=80",
    desc: "An everyday trainer with a breathable mesh upper and a stable ride for easy runs and long walks alike."
  },
  {
    id: "urban-flex",
    name: "SOLEVA Urban Flex",
    category: "lifestyle",
    price: 229,
    rating: 4.4,
    colors: ["#111111", "#ffffff", "#5c6b73"],
    img: "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=800&q=80",
    desc: "Flexible, low-profile and easy to wear, Urban Flex is the go-to shoe for full days on your feet."
  },
  {
    id: "core-runner",
    name: "SOLEVA Core Runner",
    category: "running",
    price: 259,
    rating: 4.6,
    colors: ["#111111", "#8c2f2f", "#e5e5e5"],
    img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=800&q=80",
    desc: "Balanced cushioning and a supportive frame make Core Runner a reliable choice for building weekly mileage."
  },
  {
    id: "elevate",
    name: "SOLEVA Elevate",
    category: "training",
    price: 279,
    rating: 4.7,
    colors: ["#111111", "#ffffff"],
    img: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=800&q=80",
    desc: "A stable training shoe with a wide base for lateral movement, built for the gym floor and everything on it."
  },
  {
    id: "aero-max",
    name: "SOLEVA Aero Max",
    category: "basketball",
    price: 349,
    rating: 4.9,
    colors: ["#111111", "#c9a24b", "#8c2f2f"],
    img: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?auto=format&fit=crop&w=800&q=80",
    desc: "High-top support and responsive cushioning for explosive first steps, hard cuts and soft landings on court."
  }
];

const SIZES = ["6","7","8","9","10","11","12"];

const FAQS = [
  { q: "How long does delivery take?", a: "Standard delivery within Malaysia takes 2–4 working days. Express delivery, where available at checkout, arrives within 1–2 working days." },
  { q: "Can I return my shoes?", a: "Yes — unworn shoes in original packaging can be returned within 30 days of delivery for a full refund or exchange." },
  { q: "How can I track my order?", a: "Once your order ships, you'll receive a tracking link by email and SMS so you can follow it every step of the way." },
  { q: "What payment methods are available?", a: "We accept major credit and debit cards, FPX online banking, and popular e-wallets at checkout." },
  { q: "How do I choose my shoe size?", a: "Use the size guide on each product page. If you're between sizes, we generally recommend sizing up for a roomier fit." }
];

const STORES = [
  { region: "Kuala Lumpur", name: "Pavilion Kuala Lumpur", address: "Bukit Bintang, Kuala Lumpur", hours: "10:00 AM – 10:00 PM daily" },
  { region: "Selangor", name: "1 Utama Shopping Centre", address: "Petaling Jaya, Selangor", hours: "10:00 AM – 10:00 PM daily" },
  { region: "Penang", name: "Gurney Plaza", address: "George Town, Penang", hours: "10:00 AM – 10:00 PM daily" },
  { region: "Johor", name: "Mid Valley Southkey", address: "Johor Bahru, Johor", hours: "10:00 AM – 10:00 PM daily" }
];

const fmt = (n) => `RM ${n.toFixed(2)}`;

/* =========================================================
   STATE
========================================================= */
let cart = JSON.parse(localStorage.getItem("soleva_cart") || "[]");
let favourites = new Set(JSON.parse(localStorage.getItem("soleva_favs") || "[]"));
let activeFilter = "all";
let modalState = { product: null, color: null, size: null, qty: 1 };

function saveCart(){ localStorage.setItem("soleva_cart", JSON.stringify(cart)); }
function saveFavs(){ localStorage.setItem("soleva_favs", JSON.stringify([...favourites])); }

/* =========================================================
   RENDER: PRODUCT CARDS
========================================================= */
function productCard(p){
  const isFav = favourites.has(p.id);
  const colorDots = p.colors.map(c => `<span class="swatch-dot" style="background:${c}"></span>`).join("");
  return `
  <article class="card" data-id="${p.id}" data-category="${p.category}">
    <div class="card-media">
      <img src="${p.img}" alt="${p.name}" loading="lazy">
      <button class="card-fav ${isFav ? "active" : ""}" data-fav="${p.id}" aria-label="Toggle favourite">
        <svg viewBox="0 0 24 24"><path d="M12.1 20.3c-.1.1-.2.1-.3 0C8.5 17.8 3 13.7 3 9.3 3 6.4 5.2 4.5 7.7 4.5c1.6 0 3.1.8 4 2.1.9-1.3 2.4-2.1 4-2.1 2.5 0 4.7 1.9 4.7 4.8 0 4.4-5.5 8.5-8.3 11z"/></svg>
      </button>
    </div>
    <div class="card-body">
      <p class="card-cat">${p.category}</p>
      <h3 class="card-name">${p.name}</h3>
      <p class="card-rating">★ ${p.rating.toFixed(1)}</p>
      <div class="card-colors">${colorDots}</div>
      <div class="card-bottom">
        <span class="card-price">${fmt(p.price)}</span>
        <button class="card-view" data-view="${p.id}">View Product</button>
      </div>
    </div>
    <div class="card-actions">
      <button class="card-add" data-quickadd="${p.id}">Add to Cart</button>
    </div>
  </article>`;
}

function renderArrivals(){
  const grid = document.getElementById("arrivalsGrid");
  if(!grid) return;
  grid.innerHTML = PRODUCTS.slice(0,4).map(productCard).join("");
}

function renderProducts(){
  const grid = document.getElementById("productsGrid");
  if(!grid) return;
  grid.innerHTML = PRODUCTS.map(productCard).join("");
  applyFilter();

  // Deep link from search: products.html?id=air-motion opens the modal directly
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  if(id && PRODUCTS.some(p => p.id === id)) openModal(id);
}

function applyFilter(){
  document.querySelectorAll("#productsGrid .card").forEach(card => {
    const match = activeFilter === "all" || card.dataset.category === activeFilter;
    card.classList.toggle("hidden", !match);
  });
}

function initFilterFromURL(){
  const params = new URLSearchParams(window.location.search);
  const cat = params.get("category");
  if(!cat) return;
  const btn = document.querySelector(`.filter-btn[data-filter="${cat}"]`);
  if(!btn) return;
  activeFilter = cat;
  document.querySelectorAll(".filter-btn").forEach(b => b.classList.toggle("active", b === btn));
  applyFilter();
}

/* =========================================================
   FAQ
========================================================= */
function renderFAQ(){
  const wrap = document.getElementById("faq");
  if(!wrap) return;
  wrap.innerHTML = FAQS.map((f,i) => `
    <div class="faq-item" data-i="${i}">
      <button class="faq-q">
        <span>${f.q}</span>
        <span class="plus">+</span>
      </button>
      <div class="faq-a"><p>${f.a}</p></div>
    </div>
  `).join("");

  wrap.querySelectorAll(".faq-item").forEach(item => {
    const q = item.querySelector(".faq-q");
    const a = item.querySelector(".faq-a");
    q.addEventListener("click", () => {
      const isOpen = item.classList.contains("open");
      wrap.querySelectorAll(".faq-item.open").forEach(o => {
        o.classList.remove("open");
        o.querySelector(".faq-a").style.maxHeight = null;
      });
      if(!isOpen){
        item.classList.add("open");
        a.style.maxHeight = a.scrollHeight + "px";
      }
    });
  });
}

/* =========================================================
   STORES
========================================================= */
function renderStores(){
  const grid = document.getElementById("storeGrid");
  if(!grid) return;
  grid.innerHTML = STORES.map(s => `
    <div class="store-card">
      <p class="store-region">${s.region}</p>
      <p class="store-name">${s.name}</p>
      <p class="store-address">${s.address}</p>
      <p class="store-hours">${s.hours}</p>
      <a class="store-link" href="https://www.google.com/maps/search/${encodeURIComponent(s.name + ' ' + s.address)}" target="_blank" rel="noopener">Get Directions</a>
    </div>
  `).join("");
}

/* =========================================================
   NAV
========================================================= */
const nav = document.getElementById("nav");
window.addEventListener("scroll", () => {
  nav.classList.toggle("scrolled", window.scrollY > 12);
}, { passive:true });

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  navLinks.classList.toggle("open");
});
navLinks.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
  hamburger.classList.remove("open");
  navLinks.classList.remove("open");
}));

// active nav link — based on which page is currently loaded
const currentPage = document.body.dataset.page;
document.querySelectorAll(".nav-links a[data-page]").forEach(a => {
  a.classList.toggle("active", a.dataset.page === currentPage);
});

/* Search */
const searchToggle = document.getElementById("searchToggle");
const searchPanel = document.getElementById("searchPanel");
const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");
searchToggle.addEventListener("click", () => {
  searchPanel.classList.toggle("open");
  if(searchPanel.classList.contains("open")) setTimeout(() => searchInput.focus(), 200);
});
searchInput.addEventListener("input", () => {
  const q = searchInput.value.trim().toLowerCase();
  if(!q){ searchResults.innerHTML = ""; return; }
  const matches = PRODUCTS.filter(p => p.name.toLowerCase().includes(q) || p.category.includes(q));
  searchResults.innerHTML = matches.length
    ? matches.map(p => `<a class="search-chip" href="products.html?id=${p.id}">${p.name}</a>`).join("")
    : `<span class="search-chip">No products found</span>`;
});

/* =========================================================
   FAVOURITES
========================================================= */
function updateFavBadge(){
  const badge = document.getElementById("favBadge");
  badge.textContent = favourites.size;
  badge.classList.toggle("show", favourites.size > 0);
}
function toggleFav(id){
  favourites.has(id) ? favourites.delete(id) : favourites.add(id);
  saveFavs();
  updateFavBadge();
  document.querySelectorAll(`[data-fav="${id}"]`).forEach(btn => btn.classList.toggle("active", favourites.has(id)));
}

/* =========================================================
   CART
========================================================= */
const cartDrawer = document.getElementById("cartDrawer");
const drawerOverlay = document.getElementById("drawerOverlay");

function openCart(){ cartDrawer.classList.add("open"); drawerOverlay.classList.add("show"); }
function closeCart(){ cartDrawer.classList.remove("open"); drawerOverlay.classList.remove("show"); }

document.getElementById("cartToggle").addEventListener("click", openCart);
document.getElementById("cartClose").addEventListener("click", closeCart);
drawerOverlay.addEventListener("click", () => { closeCart(); closeModal(); });

function addToCart({ id, color, size, qty }){
  const product = PRODUCTS.find(p => p.id === id);
  if(!product) return;
  const key = `${id}__${color}__${size}`;
  const existing = cart.find(i => i.key === key);
  if(existing){
    existing.qty += qty;
  } else {
    cart.push({ key, id, name: product.name, img: product.img, price: product.price, color, size, qty });
  }
  saveCart();
  renderCart();
  showToast(`${product.name} added to your bag`);
}

function changeQty(key, delta){
  const item = cart.find(i => i.key === key);
  if(!item) return;
  item.qty += delta;
  if(item.qty <= 0) cart = cart.filter(i => i.key !== key);
  saveCart();
  renderCart();
}
function removeItem(key){
  cart = cart.filter(i => i.key !== key);
  saveCart();
  renderCart();
}
function clearCart(){
  cart = [];
  saveCart();
  renderCart();
}

function renderCart(){
  const wrap = document.getElementById("cartItems");
  const totalEl = document.getElementById("cartTotal");
  const badge = document.getElementById("cartBadge");
  const count = cart.reduce((sum,i) => sum + i.qty, 0);

  badge.textContent = count;
  badge.classList.toggle("show", count > 0);

  if(cart.length === 0){
    wrap.innerHTML = `<p class="cart-empty">Your bag is empty.</p>`;
  } else {
    wrap.innerHTML = cart.map(i => `
      <div class="cart-item">
        <img src="${i.img}" alt="${i.name}">
        <div>
          <p class="cart-item-name">${i.name}</p>
          <p class="cart-item-meta">Color: ${i.color || "—"} · Size: ${i.size || "—"}</p>
          <div class="cart-item-qty">
            <button data-qty-minus="${i.key}">−</button>
            <span>${i.qty}</span>
            <button data-qty-plus="${i.key}">+</button>
          </div>
          <p class="cart-item-remove" data-remove="${i.key}">Remove</p>
        </div>
        <p class="cart-item-price">${fmt(i.price * i.qty)}</p>
      </div>
    `).join("");
  }

  const total = cart.reduce((sum,i) => sum + i.price * i.qty, 0);
  totalEl.textContent = fmt(total);
}

document.getElementById("cartItems").addEventListener("click", (e) => {
  const plus = e.target.dataset.qtyPlus;
  const minus = e.target.dataset.qtyMinus;
  const remove = e.target.dataset.remove;
  if(plus) changeQty(plus, 1);
  if(minus) changeQty(minus, -1);
  if(remove) removeItem(remove);
});
document.getElementById("clearCartBtn").addEventListener("click", clearCart);
document.getElementById("checkoutBtn").addEventListener("click", () => {
  if(cart.length === 0){ showToast("Your bag is empty"); return; }
  showToast("Checkout is coming soon — thanks for shopping SOLEVA");
});

/* =========================================================
   PRODUCT MODAL
========================================================= */
const modalOverlay = document.getElementById("modalOverlay");

function openModal(id){
  const product = PRODUCTS.find(p => p.id === id);
  if(!product) return;
  modalState = { product, color: product.colors[0], size: null, qty: 1 };

  document.getElementById("modalImage").src = product.img;
  document.getElementById("modalImage").alt = product.name;
  document.getElementById("modalCategory").textContent = product.category;
  document.getElementById("modalName").textContent = product.name;
  document.getElementById("modalPrice").textContent = fmt(product.price);
  document.getElementById("modalDesc").textContent = product.desc;
  document.getElementById("qtyValue").textContent = "1";

  document.getElementById("modalColors").innerHTML = product.colors.map((c,i) => `
    <button class="swatch ${i===0 ? "selected" : ""}" data-color="${c}" aria-label="Color ${c}">
      <span style="background:${c}"></span>
    </button>`).join("");

  document.getElementById("modalSizes").innerHTML = SIZES.map(s => `
    <button class="size-btn" data-size="${s}">${s}</button>`).join("");

  modalOverlay.classList.add("show");
  document.body.style.overflow = "hidden";
}

function closeModal(){
  modalOverlay.classList.remove("show");
  document.body.style.overflow = "";
}

document.getElementById("modalClose").addEventListener("click", closeModal);
modalOverlay.addEventListener("click", (e) => { if(e.target === modalOverlay) closeModal(); });

document.getElementById("modalColors").addEventListener("click", (e) => {
  const btn = e.target.closest("[data-color]");
  if(!btn) return;
  modalState.color = btn.dataset.color;
  document.querySelectorAll("#modalColors .swatch").forEach(s => s.classList.remove("selected"));
  btn.classList.add("selected");
});
document.getElementById("modalSizes").addEventListener("click", (e) => {
  const btn = e.target.closest("[data-size]");
  if(!btn) return;
  modalState.size = btn.dataset.size;
  document.querySelectorAll("#modalSizes .size-btn").forEach(s => s.classList.remove("selected"));
  btn.classList.add("selected");
});
document.getElementById("qtyMinus").addEventListener("click", () => {
  modalState.qty = Math.max(1, modalState.qty - 1);
  document.getElementById("qtyValue").textContent = modalState.qty;
});
document.getElementById("qtyPlus").addEventListener("click", () => {
  modalState.qty = Math.min(10, modalState.qty + 1);
  document.getElementById("qtyValue").textContent = modalState.qty;
});
document.getElementById("modalAddToCart").addEventListener("click", () => {
  if(!modalState.size){
    showToast("Please select a size");
    return;
  }
  addToCart({ id: modalState.product.id, color: modalState.color, size: modalState.size, qty: modalState.qty });
  closeModal();
});

/* Delegate: view / quick add / favourite clicks from grids */
document.addEventListener("click", (e) => {
  const view = e.target.closest("[data-view]");
  const quick = e.target.closest("[data-quickadd]");
  const fav = e.target.closest("[data-fav]");
  if(view) openModal(view.dataset.view);
  if(quick){
    const product = PRODUCTS.find(p => p.id === quick.dataset.quickadd);
    addToCart({ id: product.id, color: product.colors[0], size: SIZES[2], qty: 1 });
  }
  if(fav) toggleFav(fav.dataset.fav);
});

/* =========================================================
   FILTERS
========================================================= */
const filtersEl = document.getElementById("filters");
if(filtersEl){
  filtersEl.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-btn");
    if(!btn) return;
    activeFilter = btn.dataset.filter;
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.toggle("active", b === btn));
    applyFilter();
  });
}

/* =========================================================
   CONTACT FORM
========================================================= */
const contactForm = document.getElementById("contactForm");
if(contactForm){
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let valid = true;
    const fields = {
      fullName: { value: contactForm.fullName.value.trim(), test: v => v.length > 1, msg: "Please enter your name" },
      email: { value: contactForm.email.value.trim(), test: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v), msg: "Please enter a valid email" },
      phone: { value: contactForm.phone.value.trim(), test: v => /^[0-9+\-\s]{7,15}$/.test(v), msg: "Please enter a valid phone number" },
      subject: { value: contactForm.subject.value.trim(), test: v => v.length > 1, msg: "Please enter a subject" },
      message: { value: contactForm.message.value.trim(), test: v => v.length > 5, msg: "Message should be a little longer" }
    };

    Object.entries(fields).forEach(([name, f]) => {
      const fieldEl = contactForm[name].closest(".field");
      const errorEl = contactForm.querySelector(`[data-error="${name}"]`);
      const ok = f.test(f.value);
      fieldEl.classList.toggle("invalid", !ok);
      errorEl.textContent = ok ? "" : f.msg;
      if(!ok) valid = false;
    });

    if(!valid) return;

    document.getElementById("formSuccess").classList.add("show");
    contactForm.reset();
    setTimeout(() => document.getElementById("formSuccess").classList.remove("show"), 5000);
  });
}

/* Newsletter */
document.getElementById("newsletterForm").addEventListener("submit", (e) => {
  e.preventDefault();
  e.target.reset();
  const msg = document.getElementById("newsletterSuccess");
  msg.classList.add("show");
  setTimeout(() => msg.classList.remove("show"), 4000);
});

/* =========================================================
   TOAST
========================================================= */
let toastTimer;
function showToast(text){
  const toast = document.getElementById("toast");
  toast.textContent = text;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
}

/* =========================================================
   SCROLL REVEAL
========================================================= */
function initReveal(){
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add("in-view");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll(".card, .section-head").forEach(el => {
    el.classList.add("reveal");
    io.observe(el);
  });
}

/* =========================================================
   INIT
========================================================= */
renderArrivals();
renderProducts();
initFilterFromURL();
renderFAQ();
renderStores();
updateFavBadge();
renderCart();
initReveal();

// Re-run reveal for cards after they render (they're added after initial query)
setTimeout(initReveal, 50);