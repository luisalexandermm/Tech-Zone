
/* ============ ICON LIBRARY ============ */
const icon = (name, size=24) => {
  const s = 'fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"';
  const icons = {
    audio:`<svg width="${size}" height="${size}" viewBox="0 0 24 24" ${s}><path d="M3 14v-2a9 9 0 0 1 18 0v2"/><rect x="2" y="14" width="6" height="7" rx="2"/><rect x="16" y="14" width="6" height="7" rx="2"/></svg>`,
    mic:`<svg width="${size}" height="${size}" viewBox="0 0 24 24" ${s}><rect x="9" y="2" width="6" height="12" rx="3"/><path d="M5 10v1a7 7 0 0 0 14 0v-1"/><line x1="12" y1="18" x2="12" y2="22"/><line x1="8" y1="22" x2="16" y2="22"/></svg>`,
    parlante:`<svg width="${size}" height="${size}" viewBox="0 0 24 24" ${s}><rect x="6" y="2" width="12" height="20" rx="6"/><circle cx="12" cy="9" r="2.4"/><circle cx="12" cy="16" r="1"/></svg>`,
    teclado:`<svg width="${size}" height="${size}" viewBox="0 0 24 24" ${s}><rect x="2" y="6" width="20" height="12" rx="2"/><path d="M6 10h.01M9 10h.01M12 10h.01M15 10h.01M18 10h.01M6 14h12"/></svg>`,
    mouse:`<svg width="${size}" height="${size}" viewBox="0 0 24 24" ${s}><rect x="6" y="2" width="12" height="20" rx="6"/><line x1="12" y1="2" x2="12" y2="9"/></svg>`,
    mousepad:`<svg width="${size}" height="${size}" viewBox="0 0 24 24" ${s}><rect x="2" y="6" width="20" height="12" rx="3"/><line x1="7" y1="6" x2="7" y2="18"/></svg>`,
    standlaptop:`<svg width="${size}" height="${size}" viewBox="0 0 24 24" ${s}><path d="M6 16 9 6h6l3 10"/><path d="M4 16h16l-2 4H6l-2-4Z"/></svg>`,
    standmonitor:`<svg width="${size}" height="${size}" viewBox="0 0 24 24" ${s}><rect x="7" y="3" width="10" height="7" rx="1"/><path d="M9 17h6M12 10v7M8 21h8"/></svg>`,
    wristrest:`<svg width="${size}" height="${size}" viewBox="0 0 24 24" ${s}><path d="M2 14c0-3 4-5 10-5s10 2 10 5-4 5-10 5-10-2-10-5Z"/></svg>`,
    cableorg:`<svg width="${size}" height="${size}" viewBox="0 0 24 24" ${s}><circle cx="12" cy="12" r="9"/><path d="M7 12c1.5-2 3.5-2 5 0s3.5 2 5 0"/></svg>`,
    powerbank:`<svg width="${size}" height="${size}" viewBox="0 0 24 24" ${s}><rect x="6" y="2" width="12" height="20" rx="3"/><rect x="10" y="0" width="4" height="3" rx="1"/><path d="M13 8l-3 4h3l-3 4"/></svg>`,
    charger:`<svg width="${size}" height="${size}" viewBox="0 0 24 24" ${s}><rect x="7" y="4" width="10" height="16" rx="2"/><path d="M13 8l-3 4h3l-3 4"/></svg>`,
    hub:`<svg width="${size}" height="${size}" viewBox="0 0 24 24" ${s}><rect x="3" y="8" width="18" height="8" rx="2"/><line x1="7" y1="16" x2="7" y2="20"/><line x1="12" y1="16" x2="12" y2="20"/><line x1="17" y1="16" x2="17" y2="20"/></svg>`,
    cable:`<svg width="${size}" height="${size}" viewBox="0 0 24 24" ${s}><path d="M6 4v4a4 4 0 0 0 4 4h4a4 4 0 0 1 4 4v4"/><circle cx="6" cy="4" r="2"/><circle cx="18" cy="20" r="2"/></svg>`,
    hdmi:`<svg width="${size}" height="${size}" viewBox="0 0 24 24" ${s}><path d="M4 9h13l3 3-3 3H4Z"/></svg>`,
    disk:`<svg width="${size}" height="${size}" viewBox="0 0 24 24" ${s}><rect x="3" y="6" width="18" height="12" rx="2"/><circle cx="12" cy="12" r="2.4"/></svg>`,
    usbdrive:`<svg width="${size}" height="${size}" viewBox="0 0 24 24" ${s}><rect x="8" y="2" width="8" height="6" rx="1"/><rect x="6" y="8" width="12" height="14" rx="2"/></svg>`,
    sdcard:`<svg width="${size}" height="${size}" viewBox="0 0 24 24" ${s}><path d="M6 2h9l3 3v17H6Z"/><line x1="9" y1="2" x2="9" y2="6"/><line x1="12" y1="2" x2="12" y2="6"/></svg>`,
    gaming:`<svg width="${size}" height="${size}" viewBox="0 0 24 24" ${s}><path d="M6 12h4M8 10v4M15 11h.01M18 13h.01"/><rect x="2" y="7" width="20" height="10" rx="5"/></svg>`,
    rgb:`<svg width="${size}" height="${size}" viewBox="0 0 24 24" ${s}><path d="M12 3v10M8 21h8l-1-6H9l-1 6Z"/></svg>`,
    coolingpad:`<svg width="${size}" height="${size}" viewBox="0 0 24 24" ${s}><rect x="3" y="7" width="18" height="10" rx="2"/><circle cx="9" cy="12" r="2"/><circle cx="15" cy="12" r="2"/></svg>`,
    lamp:`<svg width="${size}" height="${size}" viewBox="0 0 24 24" ${s}><path d="M12 2 4 9h16Z"/><line x1="12" y1="9" x2="12" y2="18"/><line x1="8" y1="22" x2="16" y2="22"/></svg>`,
    calculator:`<svg width="${size}" height="${size}" viewBox="0 0 24 24" ${s}><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="8" y1="7" x2="16" y2="7"/><circle cx="8" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="16" cy="12" r="1"/><circle cx="8" cy="16" r="1"/><circle cx="12" cy="16" r="1"/><circle cx="16" cy="16" r="1"/></svg>`,
    escritorio:`<svg width="${size}" height="${size}" viewBox="0 0 24 24" ${s}><rect x="2" y="4" width="20" height="10" rx="1"/><path d="M6 20l1-6M18 20l-1-6M4 20h16"/></svg>`
  };
  return icons[name] || icons.escritorio;
};

const fmt = n => '$' + Math.max(0,Math.round(n)).toLocaleString('es-CO') + ' COP';
const starRow = (r) => '★'.repeat(Math.round(r)) + '<span>' + '★'.repeat(5-Math.round(r)) + '</span> (' + r + ')';

function showToast(msg){
  const t = document.getElementById('toast');
  t.textContent = msg; t.classList.add('show');
  clearTimeout(t._timer); t._timer = setTimeout(()=>t.classList.remove('show'), 2400);
}

/* ============ CATEGORY & PRODUCT DATA ============ */
const CATS = [
  {id:'audio', name:'Audio', icon:'audio', subs:[
    {name:'Audífonos Bluetooth', icon:'audio', base:129900, count:3},
    {name:'Audífonos Gamer', icon:'audio', base:189900, count:3},
    {name:'Audífonos Traductor IA', icon:'mic', base:349900, count:2},
    {name:'Diademas Gamer', icon:'audio', base:219900, count:2},
    {name:'Parlantes Bluetooth', icon:'parlante', base:149900, count:2},
    {name:'Micrófonos USB', icon:'mic', base:179900, count:2}
  ]},
  {id:'setup', name:'Setup', icon:'teclado', subs:[
    {name:'Teclados Mecánicos', icon:'teclado', base:229900, count:2},
    {name:'Mouse Gamer', icon:'mouse', base:159900, count:2},
    {name:'Mouse Office', icon:'mouse', base:79900, count:2},
    {name:'Mouse Pads XL', icon:'mousepad', base:59900, count:2},
    {name:'Soportes para Laptop', icon:'standlaptop', base:89900, count:2},
    {name:'Soportes para Monitor', icon:'standmonitor', base:99900, count:2},
    {name:'Reposamuñecas', icon:'wristrest', base:39900, count:2},
    {name:'Organizadores de Cables', icon:'cableorg', base:29900, count:2}
  ]},
  {id:'carga', name:'Carga & Conectividad', icon:'charger', subs:[
    {name:'Power Bank', icon:'powerbank', base:99900, count:1},{name:'Cargadores Rápidos', icon:'charger', base:69900, count:1},
    {name:'Cubos USB', icon:'hub', base:49900, count:1},{name:'Cables Tipo C', icon:'cable', base:24900, count:1},
    {name:'Cables Lightning', icon:'cable', base:29900, count:1},{name:'Cables Micro USB', icon:'cable', base:19900, count:1},
    {name:'Hub USB', icon:'hub', base:79900, count:1},{name:'Adaptadores HDMI', icon:'hdmi', base:49900, count:1},
    {name:'Adaptadores USB-C', icon:'cable', base:34900, count:1},{name:'Bases de Carga', icon:'charger', base:59900, count:1}
  ]},
  {id:'almacenamiento', name:'Almacenamiento', icon:'disk', subs:[
    {name:'SSD Externos', icon:'disk', base:249900, count:2},{name:'SSD Internos', icon:'disk', base:229900, count:2},
    {name:'Discos Duros Externos', icon:'disk', base:199900, count:2},{name:'Memorias USB', icon:'usbdrive', base:39900, count:2},
    {name:'Tarjetas MicroSD', icon:'sdcard', base:44900, count:2},{name:'Lectores de Memoria', icon:'usbdrive', base:29900, count:2}
  ]},
  {id:'gaming', name:'Gaming', icon:'gaming', subs:[
    {name:'Controles', icon:'gaming', base:279900, count:2},{name:'Bases para Controles', icon:'gaming', base:49900, count:2},
    {name:'Luces RGB', icon:'rgb', base:69900, count:2},{name:'Cooling Pads', icon:'coolingpad', base:89900, count:2},
    {name:'Accesorios Nintendo', icon:'gaming', base:59900, count:2},{name:'Accesorios Xbox', icon:'gaming', base:59900, count:2},
    {name:'Accesorios PlayStation', icon:'gaming', base:59900, count:2},{name:'Kits Gamer', icon:'gaming', base:349900, count:2}
  ]},
  {id:'oficina', name:'Oficina', icon:'escritorio', subs:[
    {name:'Lámparas LED', icon:'lamp', base:69900, count:2},{name:'Bases para Portátil', icon:'standlaptop', base:89900, count:2},
    {name:'Organizadores', icon:'cableorg', base:34900, count:2},{name:'Mouse Inalámbricos', icon:'mouse', base:69900, count:2},
    {name:'Teclados Inalámbricos', icon:'teclado', base:129900, count:1},{name:'Calculadoras', icon:'calculator', base:24900, count:1},
    {name:'Accesorios de Escritorio', icon:'escritorio', base:39900, count:1}
  ]}
];

const variantWords = ['Pro','Lite','Max','Air','Plus','X1','Elite','Core','Mini','V2','Neo','Go'];
function generateProducts(){
  let list = []; let uid = 0;
  CATS.forEach(cat=>{
    cat.subs.forEach(sub=>{
      for(let i=0;i<sub.count;i++){
        uid++;
        const word = variantWords[(uid*3+i)%variantWords.length];
        let price = sub.base + (i*18000) + ((uid%5)*6000);
        const hasOffer = uid%6===0;
        const isNew = !hasOffer && uid%9===0;
        const isPopular = !hasOffer && !isNew && uid%11===0;
        const outOfStock = uid%14===0;
        const old = hasOffer ? price : null;
        if(hasOffer) price = Math.round((price*0.85)/100)*100;
        list.push({
          id:uid, catId:cat.id, catName:cat.name, sub:sub.name, icon:sub.icon,
          name:`${sub.name} ${word}`, price, old,
          rating:(3.8 + (uid%5)*0.25).toFixed(1), reviews:20 + (uid*7)%300,
          stock: outOfStock ? 0 : (6 + (uid*5)%40),
          delivery: uid%3===0 ? '2-3 días hábiles' : '3-5 días hábiles',
          warranty: uid%4===0 ? '6 meses' : '12 meses',
          compat: cat.id==='gaming' ? 'PC, PS5, Xbox Series' : (cat.id==='audio' ? 'Android, iOS, PC' : 'Universal / USB-C'),
          badge: hasOffer?'oferta': isNew?'nuevo': isPopular?'popular': outOfStock?'agotado': null,
          badgeText: hasOffer?'Oferta': isNew?'Nuevo': isPopular?'Popular': outOfStock?'Agotado':''
        });
      }
    });
  });
  return list;
}
let allProducts = generateProducts();

// ==== Productos importados del usuario (placeholders y precios sugeridos) ====
const userData = [
  {name:'Soporte Para Portatil Con Ventilador', provider:'GOOTECH'},
  {name:'Parlante Inteligente Alexa Radio Bluetooth', provider:'Todonovedad'},
  {name:'Batidora Scarlett', provider:'Bodega P&G'},
  {name:'Teclado Rgb Transparente T10', provider:'Heidy'},
  {name:'Audifonos Inalambricos Ultra Pods Max', provider:'Stom Accesorios'},
  {name:'Audifonos Inalambricos M10', provider:'Stom Accesorios'},
  {name:'Audifonos Inalambricos K11', provider:'Stom Accesorios'},
  {name:'Mouse Cw905 Pink', provider:'TOTEM TECNOLOGIA'},
  {name:'Manos Libres Tipo Iphone Original 3.5', provider:'Stom Accesorios'},
  {name:'Cargador Xiaomi V8', provider:'Stom Accesorios'},
  {name:'Combo Teclado Mouse Kt 988', provider:'Ventas Margarita'},
  {name:'Super Combo Smart Watch airpods Parlante', provider:'One tech'},
  {name:'Audifono Gamer Inalambrico Q6s', provider:'Igniz Technology'},
  {name:'Mouse Gamer M20', provider:'Igniz Technology'},
  {name:'Serum Crecimiento De Pestanas Bioaqua X4', provider:'ITM Comercializadora'},
  {name:'Lampara Led Proyectora Redonda', provider:'One tech'},
  {name:'Brillo Labial Llavero Magico X 2 Und', provider:'FERRETEROS DIGITALES'},
  {name:'Combo Diadema Reloj 7 Manillas P9', provider:'One tech'},
  {name:'Audifonos Inalambricos I12', provider:'Stom Accesorios'},
  {name:'Smart Watch S1000 Pro 7 Manillas', provider:'One tech'},
  {name:'Lapiz Optico Universal', provider:'Estrategias tecnológicas redes 11'},
  {name:'Combo 7 Pulsos Reloj Audifonos D8000', provider:'DTech Tecnologia'},
  {name:'Audifonos Inalambricos X30', provider:'DTech Tecnologia'},
  {name:'Smart Watch Redondo Amoled V36', provider:'DTech Tecnologia'},
  {name:'Audifonos Bluetooth Galaxy Buds Pro 3', provider:'One tech'},
  {name:'Rasuradora Geemy 6146', provider:'One tech'},
  {name:'Audifonos Gamer Vsg Shake Alambricos Rgb', provider:'Grupo control'},
  {name:'Ra022 Mouse Gamer V16 6400dpi', provider:'Commagic'},
  {name:'Audifonos Inalambricos Clipon F50', provider:'DTech Tecnologia'},
  {name:'Mouse Ergonomico Recargable', provider:'ONIX TECH'},
  {name:'Teclado Gamer Fantech K613l Sakura Editi', provider:'Grupo GAJ'},
  {name:'Teclado Mecanico Gamer Blanco Rgb Switch', provider:'EXONICA SAS'},
  {name:'Teclado Gamer Mecanico Usb Anti Ghosting', provider:'Cambio Systems'},
  {name:'Reloj Y Audifonos Combo X8', provider:'One tech'},
  {name:'Pad Mouse Gaming Led Negro Antideslizant', provider:'EXONICA SAS'},
  {name:'Combo Smart Watch S10 7 Manillas M10', provider:'One tech'},
  {name:'Combo Teclado Y Mouse Retroiluminado M4', provider:'3 Tiendas SAS'},
  {name:'T900s Ultra 2', provider:'TECNO HOGAR (JHONATAN ALONSO)'},
  {name:'Smart Watch T10 Ultra', provider:'One tech'},
  {name:'Smart Watch Useultra 18', provider:'One tech'},
  {name:'Parlante Philip Black Days', provider:'One tech'},
  {name:'Diaema Tipo Max I13', provider:'Bod-shipping'},
  {name:'Jbl Diaema 510 1.1', provider:'Bod-shipping'},
  {name:'Base Soporte Portatil Plegable Funda', provider:'Grupo GAJ'},
  {name:'Teclado Y Mouse Gamer Weibo Wb550', provider:'ANDRES'},
  {name:'Smartwatch Inteligente T900 Ultra', provider:'One tech'},
  {name:'Audifonos Gamer Kotion G2000', provider:'BCOMPANY'}
];

const guessCategory = (name) => {
  const n = name.toLowerCase();
  if(/audif|parlante|airpods|earbuds|headphone|diadema|audio|audífono|audifono/.test(n)) return 'audio';
  if(/teclado|mouse|pad|gaming|gamer|pad mouse|retroiluminado/.test(n)) return 'setup';
  if(/cargador|cable|xiaomi|charger|usb|tipo c|power bank/.test(n)) return 'carga';
  if(/batidora|rasuradora|lampara|hogar|base soporte|base plegable|brillo labial|serum|pestanas/.test(n)) return 'oficina';
  if(/smart watch|smartwatch|reloj|combo smart|t900|s1000|useultra/.test(n)) return 'audio';
  return 'oficina';
};

const startId = allProducts.length + 1;
const userProducts = userData.map((item, i) => {
  const catId = guessCategory(item.name);
  const catObj = CATS.find(c=>c.id===catId) || CATS[0];
  const base = (catObj && catObj.subs && catObj.subs[0]) ? catObj.subs[0].base : 69900;
  const price = Math.round((base + (i%5)*15000)/100)*100;
  const id = startId + i;
  const img = `https://via.placeholder.com/600x600?text=${encodeURIComponent(item.name)}`;
  return {
    id, catId, catName: (catObj && catObj.name) || 'Varios', sub: catObj.subs ? catObj.subs[0].name : 'General',
    icon: catObj.icon || 'escritorio', name: item.name, price, old: null,
    provider: item.provider || 'Proveedor desconocido',
    rating: (4 + (i%3)*0.1).toFixed(1), reviews: 10 + (i*7)%90, stock: 12, delivery: '3-5 días hábiles', warranty: '12 meses',
    compat: 'Universal', badge: null, badgeText:'', img
  };
});
allProducts.push(...userProducts);

const destacados = allProducts.filter(p=>p.badge && p.badge!=='agotado').slice(0,5);
const customProducts = {
  'offer-gamer': {id:'offer-gamer', name:'Combo Gamer', price:399900, old:499900, sub:'Oferta', catName:'Ofertas', icon:'gaming', stock:1},
  'offer-audio': {id:'offer-audio', name:'Audio Premium', price:679900, old:799900, sub:'Oferta', catName:'Ofertas', icon:'audio', stock:1},
  'offer-setup': {id:'offer-setup', name:'Setup Completo', price:1499900, old:1699900, sub:'Oferta', catName:'Ofertas', icon:'teclado', stock:1}
};
const byId = (id) => {
  if(typeof id === 'string') return customProducts[id] || allProducts.find(p=>p.id===Number(id));
  return allProducts.find(p=>p.id===id);
};

/* ============ GLOBAL STATE ============ */
let cart = {};          // id -> qty
let wishlist = new Set();
let compareSet = new Set();
let couponPct = 0;
let shipCost = 0;
const storedTheme = window.localStorage.getItem('tzTheme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
let theme = storedTheme || (prefersDark ? 'dark' : 'light');
document.body.setAttribute('data-theme', theme);
document.documentElement.classList.toggle('dark', theme === 'dark');

const header = document.getElementById('siteHeader');
const searchWrap = document.getElementById('searchWrap');
const searchInput = document.getElementById('searchInput');
const searchSuggestions = document.getElementById('searchSuggestions');
const searchToggleBtn = document.getElementById('searchToggle');
const themeToggleBtn = document.getElementById('themeToggle');
const burgerBtn = document.getElementById('burgerBtn');
const navOverlay = document.getElementById('navOverlay');
const megaMenu = document.getElementById('megaMenu');
const accountBtnElement = document.getElementById('accountBtn');
const announcementBar = document.getElementById('announcementBar');
const announcementClose = document.getElementById('announcementClose');

function setHeaderScrolled(){
  header.classList.toggle('scrolled', window.scrollY > 20);
}

function closeSearch(){
  searchWrap.classList.remove('open');
  searchSuggestions.innerHTML = '';
}

function closeMega(){
  megaMenu.classList.remove('show');
  megaMenu.setAttribute('aria-hidden','true');
  navOverlay.classList.remove('show');
}

function buildMegaMenu(catId){
  const cat = CATS.find(c=>c.id===catId);
  if(!cat) return '';
  const popular = allProducts.filter(p=>p.catId===catId && p.stock>0).slice(0,4);
  return `
    <div class="mega-menu-inner" role="menu">
      <div class="mega-menu-col">
        <h4>${cat.name}</h4>
        <ul>
          ${cat.subs.map(sub=>`<li><button type="button" class="mega-link" data-navcat="${cat.id}" data-sub="${sub.name}">${sub.name}</button></li>`).join('')}
        </ul>
      </div>
      <div class="mega-menu-col">
        <h4>Productos destacados</h4>
        <div class="mega-products">
          ${popular.map(p=>`
            <button type="button" class="mega-product" data-id="${p.id}">
              <span>${p.name}</span><strong>${fmt(p.price)}</strong>
            </button>`).join('')}
        </div>
      </div>
    </div>`;
}

function openMegaMenu(catId){
  megaMenu.innerHTML = buildMegaMenu(catId);
  megaMenu.classList.add('show');
  megaMenu.setAttribute('aria-hidden','false');
  navOverlay.classList.add('show');
  megaMenu.querySelectorAll('.mega-link').forEach(btn => btn.addEventListener('click', () => {
    setFilter(btn.dataset.navcat);
    document.getElementById('catalogo').scrollIntoView({behavior:'smooth'});
    closeMega();
  }));
  megaMenu.querySelectorAll('.mega-product').forEach(btn => btn.addEventListener('click', () => {
    openProductModal(Number(btn.dataset.id));
  }));
}

async function fetchSearchSuggestions(query){
  if(!query) return [];
  try {
    const res = await fetch(`/search/suggest.json?q=${encodeURIComponent(query)}&resources[type]=product&resources[limit]=4`);
    if(res.ok){
      const data = await res.json();
      return (data.resources?.results?.products || []).map(p => ({ name:p.title, url:p.url, price:p.price || '' })).slice(0,4);
    }
  } catch (err) { }
  return allProducts.filter(p => p.name.toLowerCase().includes(query.toLowerCase())).slice(0,4).map(p => ({name:p.name,url:'#catalogo',price:fmt(p.price)}));
}

function renderSearchSuggestions(query){
  if(!query){ searchSuggestions.innerHTML = ''; return; }
  fetchSearchSuggestions(query).then(items => {
    searchSuggestions.innerHTML = items.map(item => `<button type="button" class="suggestion-item" data-q="${item.name}" data-url="${item.url}"><span>${item.name}</span><small>${item.price || ''}</small></button>`).join('');
    searchSuggestions.querySelectorAll('.suggestion-item').forEach(button => button.addEventListener('click', () => {
      searchInput.value = button.dataset.q;
      searchTerm = button.dataset.q.toLowerCase();
      renderCatalog();
      closeSearch();
    }));
  });
}

function openMobileMenu(){
  const navLinks = document.getElementById('mainNavLinks');
  const open = !navLinks.classList.contains('mobile-open');
  navLinks.classList.toggle('mobile-open', open);
  burgerBtn.classList.toggle('active', open);
  burgerBtn.setAttribute('aria-expanded', String(open));
  navOverlay.classList.toggle('show', open);
  if(open) navLinks.querySelector('a')?.focus(); else closeMega();
}

function closeMobileMenu(){
  document.getElementById('mainNavLinks').classList.remove('mobile-open');
  burgerBtn.classList.remove('active');
  burgerBtn.setAttribute('aria-expanded', 'false');
  navOverlay.classList.remove('show');
  closeMega();
}

window.addEventListener('scroll', setHeaderScrolled);
setHeaderScrolled();

document.addEventListener('click', (event) => {
  if(searchWrap.classList.contains('open') && !searchWrap.contains(event.target) && event.target !== searchToggleBtn){
    closeSearch();
  }
  if(megaMenu.classList.contains('show') && !megaMenu.contains(event.target) && !event.target.closest('[data-navcat]')){
    closeMega();
  }
  if(burgerBtn.classList.contains('active') && !document.getElementById('mainNavLinks').contains(event.target) && event.target !== burgerBtn){
    closeMobileMenu();
  }
});

document.addEventListener('keydown', (event) => {
  if(event.key === 'Escape'){
    closeSearch();
    closeMega();
    closeMobileMenu();
  }
});

if(announcementBar && announcementClose){
  const dismissed = window.localStorage.getItem('tzAnnouncementClosed');
  if(dismissed === 'true') announcementBar.style.display = 'none';
  announcementClose.addEventListener('click', () => {
    announcementBar.style.display = 'none';
    window.localStorage.setItem('tzAnnouncementClosed', 'true');
  });
}

/* ============ RENDER: CATEGORY GRID ============ */
const catGridEl = document.getElementById('catGrid');
if(catGridEl){
  catGridEl.innerHTML = CATS.map(c => `
  <div class="cat-card" data-cat="${c.id}"><div class="cat-icon">${icon(c.icon)}</div><h4>${c.name}</h4><span>${allProducts.filter(p=>p.catId===c.id).length} productos</span></div>`).join('');
  catGridEl.querySelectorAll('.cat-card').forEach(el => el.addEventListener('click', () => { setFilter(el.dataset.cat); const target = document.getElementById('catalogo'); if(target) target.scrollIntoView({behavior:'smooth'}); }));
} else console.warn('catGrid element not found');
const headerLinks = document.querySelectorAll('.nav-links a');
headerLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href');
    if (!href || !href.startsWith('#')) return;
    e.preventDefault();
    if (href === '#siteHeader') {
      window.scrollTo({top:0, behavior:'smooth'});
    } else {
      const target = document.querySelector(href);
      if (target) target.scrollIntoView({behavior:'smooth'});
    }
    headerLinks.forEach(l => l.classList.toggle('active', l===link));
    if (link.dataset.navcat) setFilter(link.dataset.navcat);
    closeMobileMenu();
  });
  if (link.dataset.navcat){
    link.addEventListener('pointerenter', () => openMegaMenu(link.dataset.navcat));
    link.addEventListener('focus', () => openMegaMenu(link.dataset.navcat));
  }
});
document.querySelectorAll('#footCatList a').forEach(el => el.addEventListener('click', (e) => { e.preventDefault(); setFilter(el.dataset.navcat); document.getElementById('catalogo').scrollIntoView({behavior:'smooth'}); document.querySelectorAll('.nav-links a').forEach(link => link.classList.toggle('active', link.dataset.navcat===el.dataset.navcat)); document.querySelector('.nav-links')?.classList.remove('mobile-open'); document.querySelector('.burger')?.classList.remove('active'); }));
const footCatListEl = document.getElementById('footCatList');
if(footCatListEl){
  footCatListEl.innerHTML = CATS.map(c => `<li><a href="#catalogo" data-navcat="${c.id}">${c.name}</a></li>`).join('');
  footCatListEl.querySelectorAll('a').forEach(el => el.addEventListener('click', (e) => { e.preventDefault(); setFilter(el.dataset.navcat); const target = document.getElementById('catalogo'); if(target) target.scrollIntoView({behavior:'smooth'}); document.querySelectorAll('.nav-links a').forEach(link => link.classList.toggle('active', link.dataset.navcat===el.dataset.navcat)); document.querySelector('.nav-links')?.classList.remove('mobile-open'); document.querySelector('.burger')?.classList.remove('active'); }));
} else console.warn('footCatList element not found');
if(burgerBtn){
  burgerBtn.addEventListener('click', openMobileMenu);
}

/* ============ CARD TEMPLATE ============ */
function cardHTML(p){
  const isFav = wishlist.has(p.id);
  const isCmp = compareSet.has(p.id);
  return `
  <div class="prod-card" data-id="${p.id}">
    <div class="prod-media" data-open="${p.id}">
      ${p.badge ? `<span class="badge ${p.badge}">${p.badgeText}</span>` : ''}
      <span class="cat-tag">${p.catName}</span>
      ${p.img ? `<div class="media-img"><img src="${p.img}" alt="${p.name}" style="max-width:140px;max-height:120px;object-fit:contain;display:block;margin:0 auto;">` : `<div style="color:#c7c7c5;">${icon(p.icon)}</div>`}
      <label class="compare-check" onclick="event.stopPropagation()"><input type="checkbox" data-compare="${p.id}" ${isCmp?'checked':''}> Comparar</label>
      <button class="fav-btn ${isFav?'active':''}" data-fav="${p.id}" onclick="event.stopPropagation()"><svg width="14" height="14" viewBox="0 0 24 24" fill="${isFav?'currentColor':'none'}" stroke="currentColor" stroke-width="2"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8Z"/></svg></button>
    </div>
    <div class="prod-body">
      <span class="sub-label">${p.sub}</span>
      <h4 data-open="${p.id}">${p.name}</h4>
      <div class="stars">${starRow(p.rating)} <span style="color:#9a9a9a;">(${p.reviews})</span></div>
      <div class="price-row">
        <div class="price">${fmt(p.price)}${p.old ? `<small>${fmt(p.old)}</small>` : ''}</div>
        ${p.stock>0 ? `<button class="add-btn" data-add="${p.id}"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg></button>` : `<span class="stock-note">Agotado</span>`}
      </div>
    </div>
  </div>`;
}

function bindCardEvents(container){
  container.querySelectorAll('[data-open]').forEach(el => el.addEventListener('click', () => openProductModal(Number(el.dataset.open))));
  container.querySelectorAll('[data-add]').forEach(el => el.addEventListener('click', (e) => { e.stopPropagation(); addToCart(Number(el.dataset.add)); }));
  container.querySelectorAll('[data-fav]').forEach(el => el.addEventListener('click', () => toggleWishlist(Number(el.dataset.fav))));
  container.querySelectorAll('[data-compare]').forEach(el => el.addEventListener('change', () => toggleCompare(Number(el.dataset.compare))));
  container.querySelectorAll('.prod-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const r = card.getBoundingClientRect();
      const x = e.clientX - r.left, y = e.clientY - r.top;
      const rx = ((y / r.height) - .5) * -10, ry = ((x / r.width) - .5) * 10;
      card.style.transform = `perspective(700px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`;
      card.style.setProperty('--x', x+'px'); card.style.setProperty('--y', y+'px');
    });
    card.addEventListener('mouseleave', () => { card.style.transform = ''; });
  });
}

const prodGridEl = document.getElementById('prodGrid');
if(prodGridEl){
  prodGridEl.innerHTML = destacados.map(cardHTML).join('');
  bindCardEvents(prodGridEl);
} else console.warn('prodGrid element not found');

/* ============ CATALOG: FILTERS + LOAD MORE + SEARCH ============ */
let currentFilter = 'todos';
let visibleCount = 12;
let searchTerm = '';
const PAGE_SIZE = 12;

function filteredList(){
  let list = currentFilter === 'todos' ? allProducts : allProducts.filter(p=>p.catId===currentFilter);
  if(searchTerm) list = list.filter(p => (p.name+p.sub+p.catName).toLowerCase().includes(searchTerm));
  return list;
}
function renderChips(){
  const chips = [{id:'todos', name:'Todos'}, ...CATS.map(c=>({id:c.id, name:c.name}))];
  const chipsEl = document.getElementById('filterChips');
  if(chipsEl){
    chipsEl.innerHTML = chips.map(c => `<button class="chip ${currentFilter===c.id?'active':''}" data-chip="${c.id}">${c.name}</button>`).join('');
    chipsEl.querySelectorAll('.chip').forEach(el => el.addEventListener('click', () => setFilter(el.dataset.chip)));
  } else console.warn('filterChips element not found');
}
function setFilter(id){ currentFilter = id; visibleCount = PAGE_SIZE; renderChips(); renderCatalog(); }
function renderCatalog(){
  const list = filteredList();
  const shown = list.slice(0, visibleCount);
  const grid = document.getElementById('catalogGrid');
  if(grid){
    grid.innerHTML = shown.map(cardHTML).join('');
    bindCardEvents(grid);
  } else console.warn('catalogGrid element not found');
  const catalogCountEl = document.getElementById('catalogCount');
  if(catalogCountEl) catalogCountEl.textContent = `Mostrando ${shown.length} de ${list.length} productos`;
  const catLabel = currentFilter==='todos' ? 'todas las categorías' : (CATS.find(c=>c.id===currentFilter)||{}).name;
  const catalogSubEl = document.getElementById('catalogSub');
  if(catalogSubEl) catalogSubEl.textContent = searchTerm ? `Resultados para "${searchTerm}"` : `Explorando ${catLabel}`;
  const loadMoreBtnEl = document.getElementById('loadMoreBtn');
  if(loadMoreBtnEl) loadMoreBtnEl.style.display = visibleCount >= list.length ? 'none' : 'inline-flex';
}
const loadMoreBtnEl = document.getElementById('loadMoreBtn');
if(loadMoreBtnEl) loadMoreBtnEl.addEventListener('click', () => { visibleCount += PAGE_SIZE; renderCatalog(); });
renderChips(); renderCatalog();

if(searchInput) searchInput.addEventListener('input', (e) => {
  searchTerm = e.target.value.trim().toLowerCase(); visibleCount = PAGE_SIZE; renderCatalog(); renderSearchSuggestions(searchTerm);
});
searchToggleBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  if(searchWrap.classList.contains('open')) closeSearch();
  else { searchWrap.classList.add('open'); searchInput.focus(); renderSearchSuggestions(searchInput.value.trim().toLowerCase()); }
});

function updateThemeIcon(){
  const icon = document.getElementById('themeIcon');
  if(!icon) return;
  if(theme==='dark'){
    icon.innerHTML = '<circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/>';
  } else {
    icon.innerHTML = '<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.2" y1="4.2" x2="5.6" y2="5.6"/><line x1="18.4" y1="18.4" x2="19.8" y2="19.8"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.2" y1="19.8" x2="5.6" y2="18.4"/><line x1="18.4" y1="5.6" x2="19.8" y2="4.2"/>';
  }
}
document.getElementById('themeToggle').addEventListener('click', () => {
  theme = theme==='light' ? 'dark' : 'light';
  document.body.setAttribute('data-theme', theme);
  window.localStorage.setItem('tzTheme', theme);
  updateThemeIcon();
});
updateThemeIcon();

/* ============ WISHLIST ============ */
function toggleWishlist(id){
  wishlist.has(id) ? wishlist.delete(id) : wishlist.add(id);
  document.getElementById('wishCount').textContent = wishlist.size;
  showToast(wishlist.has(id) ? 'Añadido a favoritos' : 'Eliminado de favoritos');
  renderCatalog(); document.getElementById('prodGrid').innerHTML = destacados.map(cardHTML).join(''); bindCardEvents(document.getElementById('prodGrid'));
}

/* ============ COMPARE ============ */
function toggleCompare(id){
  if(compareSet.has(id)) compareSet.delete(id);
  else { if(compareSet.size>=3){ showToast('Máximo 3 productos para comparar'); renderCatalog(); return; } compareSet.add(id); }
  const bar = document.getElementById('compareBar');
  bar.classList.toggle('show', compareSet.size>0);
  document.getElementById('compareItems').textContent = `${compareSet.size} producto(s) seleccionados para comparar`;
}
document.getElementById('clearCompare').addEventListener('click', () => { compareSet.clear(); document.getElementById('compareBar').classList.remove('show'); renderCatalog(); });
document.getElementById('openCompare').addEventListener('click', () => {
  const items = [...compareSet].map(byId);
  const rows = ['Precio','Categoría','Rating','Garantía','Compatibilidad','Stock'];
  let html = '<tr><th>Producto</th>' + items.map(p=>`<th>${p.name}</th>`).join('') + '</tr>';
  html += `<tr><td>Precio</td>${items.map(p=>`<td>${fmt(p.price)}</td>`).join('')}</tr>`;
  html += `<tr><td>Categoría</td>${items.map(p=>`<td>${p.catName}</td>`).join('')}</tr>`;
  html += `<tr><td>Rating</td>${items.map(p=>`<td>${p.rating} ★</td>`).join('')}</tr>`;
  html += `<tr><td>Garantía</td>${items.map(p=>`<td>${p.warranty}</td>`).join('')}</tr>`;
  html += `<tr><td>Compatibilidad</td>${items.map(p=>`<td>${p.compat}</td>`).join('')}</tr>`;
  html += `<tr><td>Stock</td>${items.map(p=>`<td>${p.stock>0?p.stock+' unidades':'Agotado'}</td>`).join('')}</tr>`;
  document.getElementById('compareTable').innerHTML = html;
  document.getElementById('compareOverlay').classList.add('show');
});
document.getElementById('closeCompare').addEventListener('click', () => document.getElementById('compareOverlay').classList.remove('show'));

/* ============ PRODUCT MODAL ============ */
let currentGalleryIdx = 0;
function openProductModal(id){
  const p = byId(id);
  currentGalleryIdx = 0;
  const gallery = (p.gallery && p.gallery.length) ? p.gallery : (p.img ? [p.img, p.img, p.img] : []);
  const mainMedia = gallery.length ? `<img src="${gallery[0]}" alt="${p.name}" style="max-width:360px;max-height:360px;object-fit:contain;display:block;margin:0 auto;">` : icon(p.icon,90);
  const thumbs = gallery.length ? gallery.map((g,i) => `<div class="gthumb ${i===0?'active':''}" data-g="${i}"><img src="${g}" alt="thumb" style="width:36px;height:36px;object-fit:contain;border-radius:6px;"></div>`).join('') : [0,1,2].map(i=>`<div class="gthumb ${i===0?'active':''}" data-g="${i}">${icon(p.icon,26)}</div>`).join('');
  document.getElementById('pmodalCatName').textContent = p.catName + ' / ' + p.sub;
  document.getElementById('pmodalBody').innerHTML = `
    <div>
      <div class="gallery-main" id="galleryMain">${mainMedia}<span class="view360">360° · Video</span></div>
      <div class="gallery-thumbs">${thumbs}</div>
    </div>
    <div class="pmodal-info">
      <span class="sub-label">${p.sub}</span>
      <h2>${p.name}</h2>
      <div class="stars" style="margin-top:6px;">${starRow(p.rating)} <span style="color:#9a9a9a;">(${p.reviews} reseñas)</span></div>
      <div class="price" style="font-size:22px;margin-top:12px;">${fmt(p.price)} ${p.old?`<small>${fmt(p.old)}</small>`:''}</div>
      <div class="stock-line"><span class="stock-dot ${p.stock===0?'out':''}"></span>${p.stock>0 ? p.stock+' unidades disponibles · entrega '+p.delivery : 'Agotado temporalmente'}</div>
      <div class="pmodal-tabs">
        <div class="pmodal-tab active" data-t="desc">Descripción</div>
        <div class="pmodal-tab" data-t="specs">Especificaciones</div>
        <div class="pmodal-tab" data-t="compat">Compatibilidad</div>
        <div class="pmodal-tab" data-t="warranty">Garantía</div>
      </div>
      <div class="pmodal-tabcontent active" data-c="desc">${p.name} de la línea ${p.sub}, pensado para acompañar tu setup con un balance entre rendimiento y estilo. Ideal para uso diario, trabajo y gaming.</div>
      <div class="pmodal-tabcontent" data-c="specs">
        <div class="spec-row"><span>Categoría</span><span>${p.catName}</span></div>
        <div class="spec-row"><span>Subcategoría</span><span>${p.sub}</span></div>
        <div class="spec-row"><span>Rating</span><span>${p.rating} / 5</span></div>
        <div class="spec-row"><span>Reseñas</span><span>${p.reviews}</span></div>
      </div>
      <div class="pmodal-tabcontent" data-c="compat">Compatible con: ${p.compat}</div>
      <div class="pmodal-tabcontent" data-c="warranty">Garantía oficial de ${p.warranty}. Cambios por defecto de fábrica dentro de los primeros 30 días.</div>
      <div style="display:flex;gap:10px;margin-top:20px;">
        ${p.stock>0 ? `<button class="btn btn-primary" style="flex:1;" id="pmodalAdd">Agregar al carrito</button>` : `<button class="btn btn-ghost" style="flex:1;" id="pmodalNotify">Notificarme cuando llegue</button>`}
        <button class="fav-btn ${wishlist.has(p.id)?'active':''}" id="pmodalFav" style="position:static;width:44px;height:44px;">${icon('escritorio',0)}<svg width="18" height="18" viewBox="0 0 24 24" fill="${wishlist.has(p.id)?'currentColor':'none'}" stroke="currentColor" stroke-width="2"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8Z"/></svg></button>
      </div>
    </div>`;
  document.getElementById('pmodalBody').querySelectorAll('.pmodal-tab').forEach(t => t.addEventListener('click', () => {
    document.querySelectorAll('.pmodal-tab').forEach(x=>x.classList.remove('active'));
    document.querySelectorAll('.pmodal-tabcontent').forEach(x=>x.classList.remove('active'));
    t.classList.add('active'); document.querySelector(`.pmodal-tabcontent[data-c="${t.dataset.t}"]`).classList.add('active');
  }));
  document.getElementById('galleryMain').addEventListener('click', function(){ this.classList.toggle('zoomed'); });
  document.querySelectorAll('.gthumb').forEach(g => g.addEventListener('click', () => { document.querySelectorAll('.gthumb').forEach(x=>x.classList.remove('active')); g.classList.add('active'); const idx = Number(g.dataset.g); if(gallery.length) document.getElementById('galleryMain').querySelector('img').src = gallery[idx]; }));
  const addBtn = document.getElementById('pmodalAdd'); if(addBtn) addBtn.addEventListener('click', () => { addToCart(p.id); });
  const notifyBtn = document.getElementById('pmodalNotify'); if(notifyBtn) notifyBtn.addEventListener('click', () => showToast('Te avisaremos cuando ' + p.name + ' vuelva a stock'));
  document.getElementById('pmodalFav').addEventListener('click', () => { toggleWishlist(p.id); openProductModal(p.id); });
  document.getElementById('productOverlay').classList.add('show');
}
document.getElementById('closeProduct').addEventListener('click', () => document.getElementById('productOverlay').classList.remove('show'));

/* ============ CART ============ */
function addToCart(id){
  const p = byId(id); if(p.stock<=0) return;
  cart[id] = (cart[id]||0) + 1;
  renderCartCount(); renderCart();
  showToast(p.name + ' agregado al carrito');
  document.getElementById('cartOverlay').classList.add('show');
  document.getElementById('cartDrawer').classList.add('show');
}
function changeQty(id, delta){
  cart[id] = (cart[id]||0) + delta;
  if(cart[id]<=0) delete cart[id];
  renderCartCount(); renderCart();
}
function removeFromCart(id){ delete cart[id]; renderCartCount(); renderCart(); }
function cartTotals(){
  const subtotal = Object.entries(cart).reduce((s,[id,q]) => s + byId(id).price*q, 0);
  const discount = subtotal * couponPct;
  const ship = subtotal>250000 ? 0 : shipCost;
  const total = subtotal - discount + ship;
  return {subtotal, discount, ship, total};
}
function renderCartCount(){
  const count = Object.values(cart).reduce((a,b)=>a+b,0);
  document.getElementById('cartCount').textContent = count;
}
function renderCart(){
  const ids = Object.keys(cart);
  const wrap = document.getElementById('cartItems');
  if(ids.length===0){ wrap.innerHTML = '<div class="empty-note">Tu carrito está vacío</div>'; }
  else {
    wrap.innerHTML = ids.map(idStr => {
      const p = byId(idStr), q = cart[idStr];
      return `<div class="cart-item">
        <div class="thumb">${icon(p.icon,26)}</div>
        <div class="info"><h5>${p.name}</h5><div class="sub">${p.sub}</div>
          <div class="qty-ctrl"><button data-qty="-1" data-id="${idStr}">−</button><span>${q}</span><button data-qty="1" data-id="${idStr}">+</button></div>
          <div class="remove" data-remove="${idStr}">Eliminar</div>
        </div>
        <div class="right">${fmt(p.price*q)}</div>
      </div>`;
    }).join('');
    wrap.querySelectorAll('[data-qty]').forEach(b => b.addEventListener('click', () => changeQty(b.dataset.id, Number(b.dataset.qty))));
    wrap.querySelectorAll('[data-remove]').forEach(b => b.addEventListener('click', () => removeFromCart(b.dataset.remove)));
  }
  const rec = allProducts.filter(p => !cart[p.id] && p.stock>0).slice(0,6);
  document.getElementById('recRow').innerHTML = rec.map(p => `<div class="rec-card" data-add="${p.id}"><div class="ic">${p.img?`<img src="${p.img}" alt="${p.name}" style="width:44px;height:44px;object-fit:contain;border-radius:8px;">`:icon(p.icon,22)}</div><h6>${p.name}</h6><p>${fmt(p.price)}</p></div>`).join('');
  document.querySelectorAll('#recRow [data-add]').forEach(el => el.addEventListener('click', () => addToCart(Number(el.dataset.add))));
  const {subtotal, discount, ship, total} = cartTotals();
  document.getElementById('cartSubtotal').textContent = fmt(subtotal);
  document.getElementById('cartDiscount').textContent = '-' + fmt(discount);
  document.getElementById('cartShip').textContent = subtotal>250000 ? 'Gratis' : fmt(ship);
  document.getElementById('cartTotal').textContent = fmt(total);
}
document.getElementById('cartBtn').addEventListener('click', () => { renderCart(); document.getElementById('cartOverlay').classList.add('show'); document.getElementById('cartDrawer').classList.add('show'); });
document.getElementById('closeCart').addEventListener('click', closeCart);
document.getElementById('cartOverlay').addEventListener('click', closeCart);
function closeCart(){ document.getElementById('cartOverlay').classList.remove('show'); document.getElementById('cartDrawer').classList.remove('show'); }
document.getElementById('clearCartBtn').addEventListener('click', () => { cart = {}; couponPct = 0; document.getElementById('couponMsg').textContent=''; renderCartCount(); renderCart(); showToast('Carrito vaciado'); });
document.getElementById('applyCoupon').addEventListener('click', () => {
  const val = document.getElementById('couponInput').value.trim().toUpperCase();
  const msg = document.getElementById('couponMsg');
  if(val === 'TZ10'){ couponPct = 0.10; msg.textContent = 'Cupón aplicado: 10% de descuento'; msg.className='coupon-msg ok'; }
  else { couponPct = 0; msg.textContent = 'Cupón no válido'; msg.className='coupon-msg err'; }
  renderCart();
});
document.getElementById('shipCity').addEventListener('change', (e) => { shipCost = Number(e.target.value); renderCart(); });
document.getElementById('goCheckoutBtn').addEventListener('click', () => {
  if(Object.keys(cart).length===0){ showToast('Tu carrito está vacío'); return; }
  closeCart(); openCheckout();
});

function addSetupToCart(){
  const setupMap = {teclado:'builder-teclado', mouse:'builder-mouse', diadema:'builder-diadema', parlante:'builder-parlante', control:'builder-control'};
  Object.entries(selection).forEach(([key,item]) => {
    const productId = setupMap[key];
    if(!customProducts[productId]){
      customProducts[productId] = {id:productId, name:item.name, price:item.price, sub:tabLabels[key], catName:'Setup', icon:key==='diadema' ? 'audio' : key==='control' ? 'gaming' : key, stock:1};
    }
    addToCart(productId);
  });
}
document.getElementById('addSetupBtn').addEventListener('click', addSetupToCart);
document.querySelectorAll('[data-offer-add]').forEach(el => el.addEventListener('click', () => addToCart(el.dataset.offerAdd)));

/* ============ CHECKOUT (multi-step) ============ */
let checkoutStep = 1;
let checkoutData = {shipping:'estandar', payment:'nequi'};
const shippingOptions = [
  {id:'estandar', name:'Estándar', desc:'4-6 días hábiles', price:15000},
  {id:'express', name:'Express', desc:'1-2 días hábiles', price:28000},
  {id:'contraentrega', name:'Contra entrega', desc:'Pagas al recibir', price:20000}
];
const paymentOptions = [
  {id:'nequi', name:'Nequi'}, {id:'daviplata', name:'Daviplata'}, {id:'pse', name:'PSE'},
  {id:'tarjeta', name:'Tarjeta de crédito/débito'}, {id:'mercadopago', name:'Mercado Pago'}, {id:'wompi', name:'Wompi'}, {id:'contraentrega', name:'Contra entrega'}
];
function openCheckout(){ checkoutStep = 1; renderCheckout(); document.getElementById('checkoutOverlay').classList.add('show'); }
document.getElementById('closeCheckout').addEventListener('click', () => document.getElementById('checkoutOverlay').classList.remove('show'));

function renderCheckout(){
  document.getElementById('checkoutSteps').innerHTML = [1,2,3,4].map(s => `<div class="step-pill ${s<=checkoutStep?'done':''}"></div>`).join('');
  const {subtotal} = cartTotals();
  const iva = subtotal * 0.19;
  const shipSel = shippingOptions.find(s=>s.id===checkoutData.shipping) || shippingOptions[0];
  const ship = subtotal>250000 ? 0 : shipSel.price;
  const discount = subtotal*couponPct;
  const total = subtotal + iva - discount + ship;
  const content = document.getElementById('checkoutContent');

  if(checkoutStep===1){
    content.innerHTML = `<h3 style="margin-bottom:14px;">Información de contacto y envío</h3>
      <div class="form-grid">
        <div class="field"><label>Nombre</label><input type="text" id="ckNombre"></div>
        <div class="field"><label>Apellido</label><input type="text" id="ckApellido"></div>
        <div class="field"><label>Correo</label><input type="email" id="ckCorreo"></div>
        <div class="field"><label>Teléfono</label><input type="tel" id="ckTelefono"></div>
        <div class="field"><label>Documento (opcional)</label><input type="text" id="ckDoc"></div>
        <div class="field"><label>Código postal</label><input type="text" id="ckCP"></div>
        <div class="field"><label>Departamento</label><input type="text" id="ckDepto"></div>
        <div class="field"><label>Ciudad</label><input type="text" id="ckCiudad"></div>
        <div class="field"><label>Municipio</label><input type="text" id="ckMunicipio"></div>
        <div class="field"><label>Barrio</label><input type="text" id="ckBarrio"></div>
        <div class="field" style="grid-column:1/-1;"><label>Dirección</label><input type="text" id="ckDireccion"></div>
        <div class="field"><label>Apartamento / Complemento</label><input type="text" id="ckApto"></div>
        <div class="field"><label>Punto de referencia</label><input type="text" id="ckRef"></div>
      </div>
      <div class="modal-nav"><span></span><button class="btn btn-primary" id="ckNext1">Continuar →</button></div>`;
    document.getElementById('ckNext1').addEventListener('click', () => { checkoutStep=2; renderCheckout(); });
  }
  else if(checkoutStep===2){
    content.innerHTML = `<h3 style="margin-bottom:14px;">Método de envío</h3>` +
      shippingOptions.map(s => `<div class="radio-card ${checkoutData.shipping===s.id?'selected':''}" data-ship="${s.id}"><div class="rdot"></div><div class="rinfo"><h5>${s.name}</h5><span>${s.desc}</span></div><b>${fmt(subtotal>250000?0:s.price)}</b></div>`).join('') +
      `<div class="modal-nav"><button class="btn btn-ghost" id="ckBack2">← Atrás</button><button class="btn btn-primary" id="ckNext2">Continuar →</button></div>`;
    content.querySelectorAll('[data-ship]').forEach(el => el.addEventListener('click', () => { checkoutData.shipping = el.dataset.ship; renderCheckout(); }));
    document.getElementById('ckBack2').addEventListener('click', () => { checkoutStep=1; renderCheckout(); });
    document.getElementById('ckNext2').addEventListener('click', () => { checkoutStep=3; renderCheckout(); });
  }
  else if(checkoutStep===3){
    content.innerHTML = `<h3 style="margin-bottom:14px;">Método de pago</h3>` +
      paymentOptions.map(p => `<div class="radio-card ${checkoutData.payment===p.id?'selected':''}" data-pay="${p.id}"><div class="rdot"></div><div class="rinfo"><h5>${p.name}</h5></div></div>`).join('') +
      `<div class="modal-nav"><button class="btn btn-ghost" id="ckBack3">← Atrás</button><button class="btn btn-primary" id="ckNext3">Continuar →</button></div>`;
    content.querySelectorAll('[data-pay]').forEach(el => el.addEventListener('click', () => { checkoutData.payment = el.dataset.pay; renderCheckout(); }));
    document.getElementById('ckBack3').addEventListener('click', () => { checkoutStep=2; renderCheckout(); });
    document.getElementById('ckNext3').addEventListener('click', () => { checkoutStep=4; renderCheckout(); });
  }
  else if(checkoutStep===4){
    content.innerHTML = `<h3 style="margin-bottom:14px;">Confirmación</h3>
      <div class="summary-box">
        <div class="row"><span>Subtotal</span><span>${fmt(subtotal)}</span></div>
        <div class="row"><span>IVA (19%)</span><span>${fmt(iva)}</span></div>
        <div class="row"><span>Envío (${shipSel.name})</span><span>${subtotal>250000?'Gratis':fmt(ship)}</span></div>
        <div class="row"><span>Descuento</span><span>-${fmt(discount)}</span></div>
        <div class="row total"><span>Total</span><span>${fmt(total)}</span></div>
      </div>
      <div class="terms-row"><input type="checkbox" id="ckTerms"><label for="ckTerms">Acepto los términos y condiciones y la política de tratamiento de datos</label></div>
      <div class="modal-nav"><button class="btn btn-ghost" id="ckBack4">← Atrás</button><button class="btn btn-primary" id="ckConfirm">Confirmar pedido</button></div>`;
    document.getElementById('ckBack4').addEventListener('click', () => { checkoutStep=3; renderCheckout(); });
    document.getElementById('ckConfirm').addEventListener('click', () => {
      if(!document.getElementById('ckTerms').checked){ showToast('Debes aceptar los términos y condiciones'); return; }
      content.innerHTML = `<div class="success-box"><div class="check"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3"><path d="M20 6 9 17l-5-5"/></svg></div><h3>¡Pedido confirmado!</h3><p style="color:var(--text-soft);margin-top:8px;font-size:13.5px;">Recibirás un correo con los detalles de tu compra y el seguimiento del envío.</p><button class="btn btn-primary" style="margin-top:20px;" id="ckFinish">Volver a la tienda</button></div>`;
      cart = {}; couponPct = 0; renderCartCount();
      document.getElementById('ckFinish').addEventListener('click', () => document.getElementById('checkoutOverlay').classList.remove('show'));
    });
  }
}

/* ============ ACCOUNT MODAL ============ */
if(accountBtnElement){
  const isLoggedIn = accountBtnElement.dataset.loggedIn === 'true';
  const targetUrl = accountBtnElement.dataset.accountUrl || '/account/login';
  accountBtnElement.addEventListener('click', () => {
    if(isLoggedIn){
      document.getElementById('accountOverlay').classList.add('show');
    } else {
      window.location.href = targetUrl;
    }
  });
}
document.getElementById('closeAccount').addEventListener('click', () => document.getElementById('accountOverlay').classList.remove('show'));
document.querySelectorAll('.acc-tab, .acc-panel .link').forEach(el => el.addEventListener('click', () => {
  const target = el.dataset.acc;
  document.querySelectorAll('.acc-tab').forEach(t => t.classList.toggle('active', t.dataset.acc===target));
  document.querySelectorAll('.acc-panel').forEach(p => p.classList.toggle('active', p.id==='acc-'+target));
}));
document.getElementById('loginBtn').addEventListener('click', () => { showToast('Inicio de sesión (demo) exitoso'); document.getElementById('accountOverlay').classList.remove('show'); });
document.getElementById('registerBtn').addEventListener('click', () => { showToast('Cuenta creada (demo)'); document.getElementById('accountOverlay').classList.remove('show'); });
document.getElementById('recoverBtn').addEventListener('click', () => showToast('Enlace de recuperación enviado (demo)'));

/* ============ OFFERS / BENEFITS ============ */
const offers = [
  {name:'Combo Gamer', desc:'Teclado + Mouse', price:399900, old:499900, tag:'-20%', icon:'gaming'},
  {name:'Audio Premium', desc:'Diadema + Parlante', price:679900, old:799900, tag:'-15%', icon:'audio'},
  {name:'Setup Completo', desc:'5 productos incluidos', price:1499900, old:1699900, tag:'-10%', icon:'teclado'}
];
document.getElementById('offersGrid').innerHTML = offers.map((o, index) => {
  const offerId = index === 0 ? 'offer-gamer' : index === 1 ? 'offer-audio' : 'offer-setup';
  return `
  <div class="offer-card"><div class="offer-media"><span class="badge oferta">${o.tag}</span><div style="color:#c7c7c5;">${icon(o.icon)}</div></div>
    <div class="offer-body"><h4>${o.name}</h4><p>${o.desc}</p><div class="offer-price"><b>${fmt(o.price)}</b><small>${fmt(o.old)}</small></div><button class="btn btn-ghost" data-offer-add="${offerId}">Comprar ahora</button></div></div>`;
}).join('');

const benefits = [
  {icon:'M12 2 3 7v6c0 5 4 9 9 9s9-4 9-9V7l-9-5Z', title:'Compra segura', text:'Tus compras están protegidas con los más altos estándares de seguridad.'},
  {icon:'M12 2 3 7v6c0 5 4 9 9 9s9-4 9-9V7l-9-5Z', title:'Garantía oficial', text:'Todos nuestros productos cuentan con garantía oficial del fabricante.'},
  {icon:'M3 7h13v10H3zM16 10h3l2 3v4h-5', title:'Envíos a todo el país', text:'Recibe tus productos en cualquier ciudad de Colombia.'},
  {icon:'M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0', title:'Atención personalizada', text:'Nuestro equipo está listo para ayudarte en lo que necesites.'}
];
document.getElementById('benefitsGrid').innerHTML = benefits.map(b => `<div class="benefit"><div class="b-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="${b.icon}"/></svg></div><h4>${b.title}</h4><p>${b.text}</p></div>`).join('');

/* ============ SETUP BUILDER ============ */
const setupData = {
  teclado: [{name:'Redragon K552', price:229900},{name:'Logitech G Pro', price:589900},{name:'Keychron K8', price:489900}],
  mouse: [{name:'Logitech G502', price:339900},{name:'Razer DeathAdder', price:259900},{name:'Redragon M711', price:129900}],
  diadema: [{name:'HyperX Cloud II', price:299900},{name:'JBL Quantum 100', price:189900},{name:'Sony Inzone H3', price:459900}],
  parlante: [{name:'JBL Flip 6', price:499900},{name:'Sony SRS-XB13', price:229900}],
  control: [{name:'Xbox Series X', price:279900},{name:'DualSense PS5', price:319900}]
};
const tabLabels = {teclado:'Teclado', mouse:'Mouse', diadema:'Diadema', parlante:'Parlante', control:'Control'};
const tabKeys = Object.keys(setupData);
let activeTab = 'teclado';
const selection = {}; selection.teclado = {...setupData.teclado[0]};
function renderTabs(){
  document.getElementById('tabs').innerHTML = tabKeys.map(k => `<button class="tab ${k===activeTab?'active':''}" data-tab="${k}">${icon(k==='diadema'?'audio':k==='control'?'gaming':k)} ${tabLabels[k]}</button>`).join('');
  document.querySelectorAll('.tab').forEach(btn => btn.addEventListener('click', () => { activeTab = btn.dataset.tab; renderTabs(); renderOptions(); }));
}
function renderOptions(){
  document.getElementById('optionList').innerHTML = setupData[activeTab].map(o => {
    const isSelected = selection[activeTab] && selection[activeTab].name === o.name;
    return `<div class="option ${isSelected?'selected':''}" data-name="${o.name}" data-price="${o.price}"><div class="swatch">${icon(activeTab==='diadema'?'audio':activeTab==='control'?'gaming':activeTab)}</div><div class="info"><h5>${o.name}</h5><span>${fmt(o.price)}</span></div><div class="dot"></div></div>`;
  }).join('');
  document.querySelectorAll('.option').forEach(el => el.addEventListener('click', () => { selection[activeTab] = {name: el.dataset.name, price: Number(el.dataset.price)}; renderOptions(); renderSummary(); }));
}
function renderSummary(){
  const keys = Object.keys(selection);
  document.getElementById('sumItems').innerHTML = keys.map(k => `<div class="sum-item"><span>${tabLabels[k]}<br><b>${selection[k].name}</b></span><span>${fmt(selection[k].price)}</span></div>`).join('') || '<div class="sum-item"><span>Selecciona tus productos</span></div>';
  const total = keys.reduce((s,k)=> s + selection[k].price, 0);
  document.getElementById('sumTotal').textContent = fmt(total);
}
renderTabs(); renderOptions(); renderSummary();
document.getElementById('addSetupBtn').addEventListener('click', () => showToast('Setup agregado al carrito'));

/* ============ COUNTDOWN ============ */
const countdownTarget = Date.now() + 1000*60*60*6; // 6 horas desde que se carga la página
function renderCountdown(){
  let diff = Math.max(0, countdownTarget - Date.now());
  const h = String(Math.floor(diff/3600000)).padStart(2,'0');
  const m = String(Math.floor((diff%3600000)/60000)).padStart(2,'0');
  const s = String(Math.floor((diff%60000)/1000)).padStart(2,'0');
  document.getElementById('countdownTimer').innerHTML = `<div><b>${h}</b><span>Horas</span></div><div><b>${m}</b><span>Min</span></div><div><b>${s}</b><span>Seg</span></div>`;
}
renderCountdown(); setInterval(renderCountdown, 1000);

/* ============ NEWSLETTER ============ */
document.getElementById('newsletterBtn').addEventListener('click', () => {
  const val = document.getElementById('newsletterInput').value.trim();
  if(val.includes('@')){ showToast('¡Gracias por suscribirte!'); document.getElementById('newsletterInput').value=''; }
  else showToast('Ingresa un correo válido');
});

/* ============ SCROLL: HEADER, REVEAL, BACK TOP, PARALLAX ============ */
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 30);
  document.getElementById('backTop').classList.toggle('show', window.scrollY > 500);
  const stage = document.getElementById('heroStage');
  if(stage) stage.style.transform = `translateY(${Math.min(window.scrollY*0.08,40)}px)`;
});
const observer = new IntersectionObserver((entries) => { entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); }); }, {threshold:.12});
document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el));
document.getElementById('backTop').addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));

/* ============ CUSTOM CURSOR ============ */
const cursorDot = document.getElementById('cursorDot');
window.addEventListener('mousemove', (e) => { cursorDot.style.left = e.clientX+'px'; cursorDot.style.top = e.clientY+'px'; });
document.querySelectorAll('a, button, .prod-card').forEach(el => {
  el.addEventListener('mouseenter', () => cursorDot.classList.add('grow'));
  el.addEventListener('mouseleave', () => cursorDot.classList.remove('grow'));
});

/* ============ MOBILE BOTTOM NAV ============ */
document.querySelectorAll('.bottom-nav button').forEach(btn => btn.addEventListener('click', () => {
  document.querySelectorAll('.bottom-nav button').forEach(b=>b.classList.remove('active')); btn.classList.add('active');
  const t = btn.dataset.bn;
  if(t==='inicio') window.scrollTo({top:0,behavior:'smooth'});
  else if(t==='categorias') document.getElementById('categorias').scrollIntoView({behavior:'smooth'});
  else if(t==='carrito'){ renderCart(); document.getElementById('cartOverlay').classList.add('show'); document.getElementById('cartDrawer').classList.add('show'); }
  else if(t==='cuenta') document.getElementById('accountOverlay').classList.add('show');
}));

/* ============ PARTICLES (hero) ============ */
(function(){
  const stage = document.getElementById('heroStage');
  for(let i=0;i<10;i++){
    const p = document.createElement('div'); p.className='particle';
    p.style.width = p.style.height = (2+Math.random()*4)+'px';
    p.style.left = Math.random()*100+'%'; p.style.top = Math.random()*100+'%';
    p.style.animationDelay = (Math.random()*4)+'s'; p.style.animationDuration = (7+Math.random()*4)+'s';
    stage.appendChild(p);
  }
})();
