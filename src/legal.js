import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource-variable/fraunces';
import './style.css';
import { negocio } from './datos.js';

document.querySelectorAll('[data-dato]').forEach((el) => { el.textContent = negocio[el.dataset.dato]; });
document.querySelectorAll('[data-link="whatsapp"]').forEach((a) => (a.href = `https://wa.me/${negocio.whatsapp}`));
