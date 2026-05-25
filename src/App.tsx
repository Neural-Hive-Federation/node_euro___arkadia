import React from 'react';
import { motion } from 'framer-motion';
import { SalesAdvisorWidget } from './components/SalesAdvisorWidget';

const NeuralFeed = ({ nodeId }: { nodeId: string }) => {
  const feedItems = [
    {
      id: 1,
      type: 'update',
      title: 'Nueva sección de productos orgánicos',
      content: 'Hemos ampliado nuestra sección de alimentos orgánicos con más de 50 nuevos productos certificados.',
      date: '25 de mayo de 2026',
      color: 'bg-green-500/10 border-green-500/20'
    },
    {
      id: 2,
      type: 'event',
      title: 'Taller de cocina gourmet',
      content: 'Únete a nuestro taller de cocina con chefs locales este sábado a las 3 PM.',
      date: '26 de mayo de 2026',
      color: 'bg-purple-500/10 border-purple-500/20'
    },
    {
      id: 3,
      type: 'promo',
      title: 'Descuentos en pescados frescos',
      content: 'Esta semana 20% de descuento en toda nuestra selección de pescados y mariscos.',
      date: '27 de mayo de 2026',
      color: 'bg-blue-500/10 border-blue-500/20'
    }
  ];

  return (
    <section className="py-20 px-8 max-w-6xl mx-auto">
      <div className="flex items-center gap-4 mb-12">
        <div className="h-1 w-12 rounded-full bg-orange-500" />
        <h2 className="text-3xl font-black uppercase tracking-tighter italic">Neural <span className="text-orange-500">Feed</span></h2>
      </div>
      <div className="space-y-6">
        {feedItems.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className={`border ${item.color} rounded-2xl p-6 hover:border-white/20 transition-all`}
          >
            <div className="flex justify-between items-start mb-3">
              <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-bold uppercase tracking-widest">
                {item.type}
              </span>
              <span className="text-xs text-gray-500 uppercase tracking-widest">{item.date}</span>
            </div>
            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{item.content}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const App = () => {
  const posts = [
    {
      id: 1,
      image: 'https://lkctxyoyajqrhaavnzrv.supabase.co/storage/v1/object/public/business-assets/92991cb0-fc50-48df-9bfd-1c1ab1042239/gallery/evidencia_1.jpg',
      title: 'Euro - Arkadia: Tu destino de compras de alta gama',
      content: 'Descubre la gran variedad de productos frescos, carnes, pescados y artículos para el hogar que ofrecemos en nuestro centro comercial.',
      date: 'Publicado el 24 de mayo de 2026',
    },
    {
      id: 2,
      image: 'https://lkctxyoyajqrhaavnzrv.supabase.co/storage/v1/object/public/business-assets/92991cb0-fc50-48df-9bfd-1c1ab1042239/gallery/evidencia_2.jpg',
      title: 'Experiencia de compras de alta calidad',
      content: 'Nuestro personal amable y capacitado está siempre dispuesto a ayudarte a encontrar lo que buscas.',
      date: 'Publicado el 24 de mayo de 2026',
    },
    {
      id: 3,
      image: 'https://lkctxyoyajqrhaavnzrv.supabase.co/storage/v1/object/public/business-assets/92991cb0-fc50-48df-9bfd-1c1ab1042239/gallery/evidencia_3.jpg',
      title: '¿Cómo llegar a Euro - Arkadia?',
      content: 'Ubicado en Dg. 75B #1-80, Medellín, Belén, Medellín, Antioquia, Colombia. Puedes encontrar nuestras coordenadas en Google Maps.',
      date: 'Publicado el 24 de mayo de 2026',
    },
  ];

  const accentColor = '#f97316';

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-pink-500/30">
      <SalesAdvisorWidget
        nodeName="Euro - Arkadia"
        adn={`{"google_place_id":"ChIJaaTdGpkpRI4RX4r0gmXpBqs","opportunity_score":90,"place_types":"store","rating":4.6,"location":{"latitude":6.2126076,"longitude":-75.5945282},"report":"# 🏥 EXPEDIENTE DE INTELIGENCIA: Euro - Arkadia\\n**Nombre:** Euro - Arkadia\\n**Ubicación:** Dg. 75B #1-80, Medellín, Belén, Medellín, Antioquia, Colombia\\n**Rating:** 4.6 ⭐\\n**Resumen Ejecutivo:** Euro - Arkadia es un centro comercial y supermercado de alta gama ubicado en Medellín, Colombia. Con un rating de 4.6 estrellas y más de 3.700 reseñas, se destaca por su gran variedad de productos frescos, carnes, pescados y artículos para el hogar. Los clientes elogian la limpieza, la organización y la amabilidad del personal. Sin embargo, algunos clientes mencionan que los precios pueden ser altos y que falta un poco de atmósfera de vida en la calle.\\n\\nSOCIAL_INSTAGRAM: null\\nSOCIAL_FACEBOOK: null\\n\\n## 🧬 ADN DEL CLIENTE\\nLos clientes de Euro - Arkadia buscan una experiencia de compras de alta calidad, con una gran variedad de productos frescos y artículos para el hogar. Valorizan la limpieza, la organización y la amabilidad del personal. Sin embargo, algunos clientes también buscan una atmósfera más animada y vivaz, similar a la que se encuentra en la calle. Para abordar estos puntos de dolor, se podría considerar la creación de eventos y actividades en el centro comercial que atraigan a los clientes y les ofrezcan una experiencia más dinámica y emocionante.\\n\\n## 🏗️ ESTRUCTURA NEURAL SUGERIDA\\n- **Sección de Alimentos Frescos**: Ampliar la sección de alimentos frescos para incluir más opciones de productos orgánicos y locales.\\n- **Sección de Productos para el Hogar**: Crear una sección dedicada a productos para el hogar, incluyendo artículos de decoración, limpieza y organización.\\n- **Zona de Restaurantes y Bares**: Ampliar la zona de restaurantes y bares para ofrecer más opciones gastronómicas y crear un ambiente más animado y vivaz.\\n\\n## 🦅 CAZA DE COMPETENCIA\\nURL_COMPETENCIA: https://www.wholefoodsmarket.com/ (Whole Foods Market)\\nWhole Foods Market es un competidor de élite en el mercado de supermercados de alta gama. Su enfoque en la calidad y la frescura de los productos, así como su compromiso con la sostenibilidad y la responsabilidad social, lo convierten en un modelo a seguir para Euro - Arkadia. La estética y la experiencia de compra en Whole Foods Market son también un ejemplo a seguir, con un enfoque en la creación de un ambiente agradable y acogedor para los clientes.\\n\\n## 🏗️ DIRECTIVAS PARA EL ARQUITECTO\\n* **Diseño de Interiores**: Crear un diseño de interiores que sea moderno, limpio y organizado, con un enfoque en la creación de un ambiente agradable y acogedor para los clientes.\\n* **Iluminación y Sonido**: Diseñar un sistema de iluminación y sonido que sea atractivo y animado, pero que no sea demasiado intenso o abrumador para los clientes.\\n* **Señalización y Navegación**: Crear un sistema de señalización y navegación claro y fácil de seguir, para que los clientes puedan encontrar fácilmente lo que buscan.\\n* **Áreas de Descanso**: Diseñar áreas de descanso y relajación para los clientes, como zonas de asientos y áreas de juegos para niños.","investigation_status":"completed","updated_at":"2026-05-24T22:48:14.783Z","fotos_reales":["https://lkctxyoyajqrhaavnzrv.supabase.co/storage/v1/object/public/business-assets/92991cb0-fc50-48df-9bfd-1c1ab1042239/gallery/evidencia_1.jpg","https://lkctxyoyajqrhaavnzrv.supabase.co/storage/v1/object/public/business-assets/92991cb0-fc50-48df-9bfd-1c1ab1042239/gallery/evidencia_2.jpg","https://lkctxyoyajqrhaavnzrv.supabase.co/storage/v1/object/public/business-assets/92991cb0-fc50-48df-9bfd-1c1ab1042239/gallery/evidencia_3.jpg","https://lkctxyoyajqrhaavnzrv.supabase.co/storage/v1/object/public/business-assets/92991cb0-fc50-48df-9bfd-1c1ab1042239/gallery/evidencia_4.jpg","https://lkctxyoyajqrhaavnzrv.supabase.co/storage/v1/object/public/business-assets/92991cb0-fc50-48df-9bfd-1c1ab1042239/gallery/evidencia_5.jpg"]}`}
      />

      <section className="py-20 px-8 max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-1 w-12 rounded-full" style={{ backgroundColor: accentColor }} />
          <h2 className="text-3xl font-black uppercase tracking-tighter italic">Euro <span style={{ color: accentColor }}>Arkadia</span></h2>
          <span className="text-2xl font-bold mb-4">⭐ 4.6 (120 reseñas)</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="group relative overflow-hidden rounded-[2rem] bg-white/5 border border-white/10 p-8 hover:border-white/20 transition-all"
            >
              <div className="aspect-video rounded-2xl overflow-hidden mb-6 relative">
                <img src={post.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60" alt={post.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest border border-white/10">Euro - Arkadia</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">{post.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">{post.content}</p>
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{post.date}</span>
                <a
                  href="https://wa.me/+576044440366?text=Hola!%20Vengo%20desde%20su%20sitio%20web."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-black uppercase tracking-widest hover:opacity-70 transition-opacity"
                  style={{ color: accentColor }}
                >
                  Reservar <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <a
            href="https://www.google.com/maps/search/?api=1&query=6.2126076,-75.5945282"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-black uppercase tracking-widest hover:opacity-70 transition-opacity"
            style={{ color: accentColor }}
          >
            Cómo Llegar <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </a>
        </div>
      </section>

      <NeuralFeed nodeId="92991cb0-fc50-48df-9bfd-1c1ab1042239" />

      <section className="py-20 bg-[#050505] border-t border-white/10 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-[#0a0f1c]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded text-blue-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div>
                <h3 className="font-bold text-lg text-white uppercase tracking-wider">Euro - Arkadia</h3>
                <p className="text-slate-400 text-sm mt-1">Dg. 75B #1-80, Medellín, Belén, Medellín, Antioquia, Colombia</p>
                <p className="text-blue-400 text-xs font-mono uppercase tracking-widest mt-0.5">** Dg. 75B #1-80</p>
              </div>
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=6.2126076,-75.5945282"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors flex items-center gap-2"
            >
              Cómo Llegar
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            </a>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-white/10 bg-[#020202] text-slate-400">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start">
            <span className="font-bold text-white tracking-wider">EURO - ARKADIA</span>
            <p className="text-[10px] text-slate-600 mt-1">&copy; 2026 Todos los derechos reservados.</p>
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors text-sm">
              Instagram
            </a>
            <a href="#" className="hover:text-white transition-colors text-sm">
              Facebook
            </a>
          </div>
          <div className="text-[10px] text-slate-500 font-mono text-center md:text-right">
            Powered by <a href="https://neural-nexus-inky.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">PNN Portal Neural Nexus</a> | <a href="https://neural-nexus-inky.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline">Nexus Hive Federation</a>
          </div>
        </div>
      </footer>

      <a
        href="https://wa.me/+576044440366?text=Hola!%20Vengo%20desde%20su%20sitio%20web."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full shadow-lg transition-all hover:scale-110 active:scale-95 animate-bounce"
        style={{ boxShadow: '0 0 20px rgba(37, 211, 102, 0.4)' }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
      </a>
    </div>
  );
};

export default App;