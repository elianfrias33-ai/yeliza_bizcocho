import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource-variable/fraunces';
import '@fontsource/great-vibes';
import './style.css';
import { negocio, productos, menu } from './datos.js';

const waLink = (m) => `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(m)}`;
const mapaUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(negocio.busquedaMapa)}`;

// Rellenar datos del negocio
document.querySelectorAll('[data-dato]').forEach((el) => { el.textContent = negocio[el.dataset.dato]; });
document.querySelectorAll('[data-link="instagram"]').forEach((a) => (a.href = negocio.instagram));
document.querySelectorAll('[data-link="mapa"]').forEach((a) => (a.href = mapaUrl));

// Galería por categorías
const chips = document.getElementById('chips');
const gal = document.getElementById('gallery');
const cats = [...new Set(productos.map((p) => p.categoria))];
gal.innerHTML = productos.map((p) => `
  <article class="card rv" data-c="${p.categoria}">
    <div class="ph"><span class="cat">${p.categoria}</span><img src="/fotos/${p.foto}" alt="${p.nombre}, ${p.categoria.toLowerCase()} de Yeliza Bizcochos y Algo Más" loading="lazy"></div>
    <div class="info">
      <div><h3>${p.nombre}</h3><small>Pídelo para tu ocasión</small></div>
      <a class="ask" target="_blank" rel="noopener" aria-label="Pedir ${p.nombre} por WhatsApp" href="${waLink(`Hola Yeliza, me interesa: ${p.nombre} (${p.categoria}). ¿Me das información?`)}"><svg viewBox="0 0 24 24"><use href="#i-wa"/></svg></a>
    </div>
  </article>`).join('');
chips.setAttribute('role', 'group');
chips.setAttribute('aria-label', 'Filtrar productos por categoría');
chips.innerHTML = cats.map((c, k) => `<button type="button" class="chip${k ? '' : ' on'}" aria-pressed="${k ? 'false' : 'true'}">${c}</button>`).join('');
function mostrar(c, animar) {
  gal.querySelectorAll('.card').forEach((el) => {
    const oculto = el.dataset.c !== c;
    el.classList.toggle('hide', oculto);
    if (!oculto && animar) { el.classList.remove('in'); void el.offsetWidth; requestAnimationFrame(() => el.classList.add('in')); }
  });
  [...gal.querySelectorAll('.card:not(.hide)')].forEach((el, k) => el.style.setProperty('--d', k * 0.06 + 's'));
}
mostrar(cats[0], false);
chips.addEventListener('click', (e) => {
  if (!e.target.classList.contains('chip')) return;
  chips.querySelectorAll('.chip').forEach((c) => { c.classList.toggle('on', c === e.target); c.setAttribute('aria-pressed', c === e.target ? 'true' : 'false'); });
  mostrar(e.target.textContent, true);
});

// Menú completo
document.getElementById('menuList').innerHTML = menu.map((g) => g.subcategorias
  ? `<div class="mcol mcol-buffet rv"><h3>${g.titulo}</h3><div class="menu-buffet-grid">${g.subcategorias.map((s) => `
    <section class="menu-subgroup"><h4>${s.titulo}</h4><ul>${s.items.map((i) => `<li>${i}</li>`).join('')}</ul></section>`).join('')}</div></div>`
  : `<div class="mcol rv"><h3>${g.titulo}</h3><ul>${g.items.map((i) => `<li>${i}</li>`).join('')}</ul></div>`).join('');

// Botones de WhatsApp
document.querySelectorAll('.wa').forEach((a) => {
  a.href = waLink(a.dataset.msg || negocio.mensajeWhatsApp);
  a.target = '_blank';
  a.rel = 'noopener';
});

// Formulario de pedido → WhatsApp
document.getElementById('orderForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const d = Object.fromEntries(new FormData(e.target));
  const fecha = d.fecha ? new Date(d.fecha + 'T12:00').toLocaleDateString('es-DO', { weekday: 'long', day: 'numeric', month: 'long' }) : '';
  const msg = `Hola Yeliza 👋 Quiero hacer un pedido:\n\n• Nombre: ${d.nombre}\n• Tipo: ${d.tipo}\n• Fecha: ${fecha}\n• Personas: ${d.personas || '-'}\n• Sabor: ${d.sabor}\n• Entrega: ${d.entrega}\n• Detalles: ${d.detalles || '-'}`;
  window.open(waLink(msg), '_blank');
});

// ===== Animaciones al hacer scroll =====
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

// Divide los títulos en palabras para que suban una a una
function split(el) {
  const out = [];
  let i = 0;
  el.childNodes.forEach((n) => {
    if (n.nodeType === 3) {
      n.textContent.split(/(\s+)/).forEach((t) => {
        if (!t) return;
        if (/^\s+$/.test(t)) { out.push(document.createTextNode(' ')); return; }
        const w = document.createElement('span'); w.className = 'w';
        w.innerHTML = `<span style="--i:${i++}">${t}</span>`; out.push(w);
      });
    } else {
      const w = document.createElement('span'); w.className = 'w';
      const s = document.createElement('span'); s.style.setProperty('--i', i++);
      s.appendChild(n.cloneNode(true)); w.appendChild(s); out.push(w);
    }
  });
  el.setAttribute('aria-label', el.textContent.replace(/\s+/g, ' ').trim());
  out.forEach((n) => n.nodeType === 1 && n.setAttribute('aria-hidden', 'true'));
  el.replaceChildren(...out);
  el.classList.add('split');
}
document.querySelectorAll('h1, h2').forEach(split);
requestAnimationFrame(() => requestAnimationFrame(() => document.querySelector('.hero h1')?.classList.add('in')));

// Escalonado dentro de cada grupo
document.querySelectorAll('.grid:not(#gallery), .mgrid').forEach((g) => [...g.children].forEach((el, k) => el.style.setProperty('--d', k * 0.07 + 's')));
const io = new IntersectionObserver((es) => es.forEach((x) => {
  if (x.isIntersecting) { x.target.classList.add('in'); io.unobserve(x.target); }
}), { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
document.querySelectorAll('.rv, #strip, h2.split').forEach((el) => io.observe(el));

// Contador del 4.8
const cio = new IntersectionObserver((es) => es.forEach((x) => {
  if (!x.isIntersecting) return;
  cio.unobserve(x.target);
  const el = x.target, to = +el.dataset.to;
  if (reduce) return;
  const t0 = performance.now();
  (function f(t) { const p = Math.min((t - t0) / 900, 1); el.textContent = (to * (1 - Math.pow(1 - p, 3))).toFixed(1); if (p < 1) requestAnimationFrame(f); })(t0);
}), { threshold: 0.6 });
document.querySelectorAll('.count').forEach((el) => cio.observe(el));

// Barra de progreso, menú y parallax de la portada
const bar = document.getElementById('progress');
const nav = document.querySelector('nav');
const art = document.querySelector('.hero-art .slot img');
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.getElementById('navLinks');
const mobileNav = matchMedia('(max-width: 960px)');
const smallScreen = matchMedia('(max-width: 767px)');
function setMenuOpen(open, restoreFocus = false) {
  nav.classList.toggle('menu-open', open);
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Cerrar menú de navegación' : 'Abrir menú de navegación');
  if (restoreFocus) menuToggle.focus();
}
menuToggle.addEventListener('click', () => setMenuOpen(menuToggle.getAttribute('aria-expanded') !== 'true'));
navLinks.addEventListener('click', (e) => {
  if (e.target.closest('a') && mobileNav.matches) setMenuOpen(false);
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && nav.classList.contains('menu-open')) setMenuOpen(false, true);
});
mobileNav.addEventListener('change', () => setMenuOpen(false));
let ticking = false;
function onScroll() {
  const y = scrollY, h = document.documentElement.scrollHeight - innerHeight;
  bar.style.transform = `scaleX(${h > 0 ? y / h : 0})`;
  nav.classList.toggle('scrolled', y > 10);
  if (art) art.style.transform = !smallScreen.matches && !reduce && y < 900 ? `translateY(${y * 0.08}px) scale(1.08)` : 'none';
  ticking = false;
}
addEventListener('scroll', () => { if (!ticking) { requestAnimationFrame(onScroll); ticking = true; } }, { passive: true });
onScroll();

// Mapa de Google: solo se carga si el visitante lo pide (sin cookies antes de su permiso)
document.getElementById('verMapa')?.addEventListener('click', () => {
  const box = document.querySelector('.map');
  const f = document.createElement('iframe');
  f.src = `https://www.google.com/maps?q=${encodeURIComponent(negocio.busquedaMapa)}&output=embed`;
  f.title = 'Mapa de Google con la ubicación de Yeliza Bizcochos y Algo Más';
  f.loading = 'lazy';
  f.referrerPolicy = 'no-referrer-when-downgrade';
  box.querySelector('.pin').remove();
  box.appendChild(f);
  f.focus();
});

// ===== Accesibilidad =====
document.querySelectorAll('svg').forEach((s) => { s.setAttribute('aria-hidden', 'true'); s.setAttribute('focusable', 'false'); });
document.querySelectorAll('a[target="_blank"]').forEach((a) => {
  if (a.querySelector('.sr')) return;
  const s = document.createElement('span'); s.className = 'sr'; s.textContent = ' (se abre en una pestaña nueva)'; a.appendChild(s);
});
