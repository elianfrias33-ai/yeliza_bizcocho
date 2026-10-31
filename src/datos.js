// ================================================
//  DATOS DEL NEGOCIO — edita SOLO este archivo
//  para cambiar horario, teléfono, fotos, etc.
// ================================================
export const negocio = {
  nombre: 'Yeliza Bizcochos y Algo Más',
  whatsapp: '18096689191',            // con el 1 delante, sin espacios ni guiones
  telefono: '(809) 668-9191',
  direccion: 'Calle Luis Brito #1, Bonao 42000',
  horario: 'Todos los días · 8:00 AM – 8:00 PM',
  entrega: 'Para llevar y delivery',
  instagram: 'https://www.instagram.com/yeliza_bizcocho/',
  instagramUsuario: '@yeliza_bizcocho',
  busquedaMapa: 'Yeliza bizcocho y algo más, Luis Brito 1, Bonao',
  mensajeWhatsApp: 'Hola Yeliza, quiero encargar un bizcocho 🎂',
};

// Galería: la foto va en /public/fotos con el mismo nombre.
// El orden de las categorías es el orden de los botones.
export const productos = [
  // Bizcochos
  { nombre: 'Bizcocho floral de tres pisos', categoria: 'Bizcochos', foto: 'biz-1.jpg' },
  { nombre: 'Happy Birthday con flores rosadas', categoria: 'Bizcochos', foto: 'biz-2.jpg' },
  { nombre: 'Happy Birthday temática fitness', categoria: 'Bizcochos', foto: 'biz-3.jpg' },
  { nombre: 'Infantil con arcoíris', categoria: 'Bizcochos', foto: 'biz-4.jpg' },
  { nombre: 'Leslie · temática infantil', categoria: 'Bizcochos', foto: 'biz-5.jpg' },
  { nombre: 'Boda con rosas azules', categoria: 'Bizcochos', foto: 'biz-6.jpg' },
  // Postres
  { nombre: 'Brownies y postres en vaso', categoria: 'Postres', foto: 'postre-1.jpg' },
  { nombre: 'Mini bizcochos', categoria: 'Postres', foto: 'postre-2.jpg' },
  { nombre: 'Carlota de limón', categoria: 'Postres', foto: 'postre-3.jpg' },
  { nombre: 'Brownies', categoria: 'Postres', foto: 'postre-4.jpg' },
  { nombre: 'Tres leches en vaso', categoria: 'Postres', foto: 'postre-5.jpg' },
  { nombre: 'Cake pops', categoria: 'Postres', foto: 'postre-6.jpg' },
  // Cupcakes y galletas
  { nombre: 'Cupcakes de princesa', categoria: 'Cupcakes y galletas', foto: 'galleta-1.jpg' },
  { nombre: 'Cupcakes con orejitas y corona', categoria: 'Cupcakes y galletas', foto: 'galleta-2.jpg' },
  { nombre: 'Galletas glaseadas', categoria: 'Cupcakes y galletas', foto: 'galleta-3.jpg' },
  { nombre: 'Galletas rellenas', categoria: 'Cupcakes y galletas', foto: 'galleta-4.jpg' },
  { nombre: 'Mantecados', categoria: 'Cupcakes y galletas', foto: 'galleta-5.jpg' },
  { nombre: 'Alfajores', categoria: 'Cupcakes y galletas', foto: 'galleta-6.jpg' },
  // Picaderas
  { nombre: 'Pastelitos y croquetas', categoria: 'Picaderas', foto: 'picadera-1.jpg' },
  { nombre: 'Mini hamburguesas', categoria: 'Picaderas', foto: 'picadera-2.jpg' },
  { nombre: 'Wraps de jamón y queso', categoria: 'Picaderas', foto: 'picadera-3.jpg' },
  { nombre: 'Bollos de yuca y papa', categoria: 'Picaderas', foto: 'picadera-4.jpg' },
  { nombre: 'Quipes', categoria: 'Picaderas', foto: 'picadera-5.jpg' },
  // Buffet para todos los eventos
  { nombre: 'Buffet para eventos', categoria: 'Buffet para todos los eventos', foto: 'evento-1.jpg' },
  { nombre: 'Pollo salteado con vegetales', categoria: 'Buffet para todos los eventos', foto: 'evento-2.jpg' },
  { nombre: 'Pastelón', categoria: 'Buffet para todos los eventos', foto: 'evento-3.jpg' },
  { nombre: 'Guineítos con cebolla', categoria: 'Buffet para todos los eventos', foto: 'evento-4.jpg' },
  { nombre: 'Bandejas para eventos', categoria: 'Buffet para todos los eventos', foto: 'evento-5.jpg' },
  { nombre: 'Ensalada verde', categoria: 'Buffet para todos los eventos', foto: 'evento-6.jpg' },
];

// Menú completo (lista de texto)
export const menu = [
  { titulo: 'Picaderas', items: ['Pastelitos', 'Quipes', 'Croquetas', 'Bollos de yuca', 'Bollos de papa', 'Sándwiches', 'Mini hot dogs', 'Mini hamburguesas', 'Deditos de mozzarella', 'Tacos', 'Abuelos', 'Canapés'] },
  { titulo: 'Postres', items: ['Bizcochos', 'Tres leches', 'Cheesecake', 'Carlota de limón', 'Brownies', 'Cupcakes', 'Alfajores', 'Mantecados', 'Shot de chinola', 'Shot de fresas', 'Galletas glaseadas', 'Galletas con chispas de chocolate'] },
  {
    titulo: 'Buffet',
    subcategorias: [
      { titulo: 'Arroces', items: ['Arroz navideño', 'Arroz con puerro, tocineta y plátano maduro', 'Moro de guandules', 'Moro negro', 'Arroz primaveral', 'Moro de habichuela roja', 'Arroz amarillo'] },
      { titulo: 'Carnes', items: ['Pechuga a la crema', 'Pechuga a la Cordon Bleu', 'Fajita de pollo', 'Fajita de res', 'Fajitas de cerdo', 'Pollo horneado', 'Pechuga al limón', 'Cerdo horneado', 'Cerdo en su jugo', 'Chuleta natural a la BBQ', 'Bistec encebollado'] },
      { titulo: 'Pastelones', items: ['De plátano', 'De berenjena', 'De papa', 'De yuca'] },
      { titulo: 'Lasañas', items: ['De pollo', 'De res', 'Mixta'] },
      { titulo: 'Ensaladas', items: ['Rusa', 'Mixta', 'Verde', 'De vegetales salteados', 'De pasta', 'Capresa'] },
      { titulo: 'Guarniciones', items: ['Guineo', 'Yuca', 'Arepitas de yuca y maíz', 'Pan', 'Torrejas'] },
    ],
  },
];
