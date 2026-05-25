import React from 'react';
import { motion } from 'framer-motion';
import { SalesAdvisorWidget } from './components/SalesAdvisorWidget';

const App = () => {
  const accentColor = "#f97316";

  const posts = [
    {
      id: 1,
      title: "EXCLUSIVIDAD Otoño-Invierno 2026: Alta Gama sin Límites",
      content: "Descubre nuestra colección de moda premium, con piezas únicas diseñadas por maestros artesanos internacionales. Cada prenda es una obra de arte que redefine el lujo contemporáneo.",
      image: "https://lkctxyoyajqrhaavnzrv.supabase.co/storage/v1/object/public/business-assets/92991cb0-fc50-48df-9bfd-1c1ab1042239/gallery/evidencia_1.jpg",
      date: "MAYO 2026"
    },
    {
      id: 2,
      title: "JOYAS con Alma: Diseños que Trascienden el Tiempo",
      content: "Presentamos nuestra colección de joyería artesanal de alta gama, elaborada con metales preciosos y piedras seleccionadas. Cada pieza es una inversión en elegancia eterna.",
      image: "https://lkctxyoyajqrhaavnzrv.supabase.co/storage/v1/object/public/business-assets/92991cb0-fc50-48df-9bfd-1c1ab1042239/gallery/evidencia_2.jpg",
      date: "MAYO 2026"
    },
    {
      id: 3,
      title: "GOURMET Exclusivo: Sabores que Elevan tu Estilo",
      content: "Vive una experiencia gastronómica sin igual en nuestro espacio gourmet. Productos seleccionados de proveedores premium para complementar tu estilo de vida sofisticado.",
      image: "https://lkctxyoyajqrhaavnzrv.supabase.co/storage/v1/object/public/business-assets/92991cb0-fc50-48df-9bfd-1c1ab1042239/gallery/evidencia_3.jpg",
      date: "JUNIO 2026"
    },
    {
      id: 4,
      title: "DECORACIÓN 2026: Espacios que Inspiran Lujo",
      content: "Transforma tus ambientes con las últimas tendencias en decoración premium. Piezas de diseño contemporáneo y elementos clásicos con un toque de exclusividad absoluta.",
      image: "https://lkctxyoyajqrhaavnzrv.supabase.co/storage/v1/object/public/business-assets/92991cb0-fc50-48df-9bfd-1c1ab1042239/gallery/evidencia_4.jpg",
      date: "JUNIO 2026"
    },
  ];

  const ArrowRight = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );

  const NeuralFeed = ({ nodeId }: { nodeId: string }) => {
    return (
      <div className="fixed bottom-6 left-6 z-50 bg-black/80 backdrop-blur-md border border-white/10 rounded-2xl p-4 max-w-xs">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-orange-500 to-red-500" />
          <span className="text-xs font-bold uppercase tracking-widest">Neural Feed</span>
        </div>
        <div className="space-y-3">
          {posts.slice(0, 2).map(post => (
            <div key={post.id} className="border-b border-white/10 pb-3 last:border-0 last:pb-0">
              <h4 className="text-xs font-bold uppercase tracking-wider mb-1">{post.title}</h4>
              <p className="text-xs text-gray-400 mb-2">{post.content.substring(0, 60)}...</p>
              <div className="flex justify-between items-center">
                <span className="text-[10px] text-gray-500 uppercase tracking-widest">{post.date}</span>
                <button className="text-[10px] font-bold text-orange-500 uppercase tracking-widest">Ver</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-pink-500/30">
      <SalesAdvisorWidget
        nodeName="Euro - Arkadia"
        adn={`{
          "google_place_id":"ChIJaaTdGpkpRI4RX4r0gmXpBqs",
          "opportunity_score":90,
          "place_types":"store",
          "rating":4.6,
          "location":{
            "latitude":6.2126076,
            "longitude":-75.5945282
          },
          "report":"# 🏥 EXPEDIENTE DE INTELIGENCIA: Euro - Arkadia\\n**Nombre:** Euro - Arkadia\\n**Ubicación:** Dg. 75B #1-80, Medellín, Belén, Medellín, Antioquia, Colombia\\n**Rating:** 4.6 ⭐\\n**Resumen Ejecutivo:** Euro - Arkadia es un centro comercial y supermercado de alta gama ubicado en Medellín, Colombia. Con un rating de 4.6 estrellas y más de 3.700 reseñas, se destaca por su gran variedad de productos frescos, carnes, pescados y artículos para el hogar. Los clientes elogian la limpieza, la organización y la amabilidad del personal. Sin embargo, algunos clientes mencionan que los precios pueden ser altos y que falta un poco de atmósfera de vida en la calle.\\n\\nSOCIAL_INSTAGRAM: null\\nSOCIAL_FACEBOOK: null\\n\\n## 🧬 ADN DEL CLIENTE\\nLos clientes de Euro - Arkadia buscan una experiencia de compras de alta calidad, con una gran variedad de productos frescos y artículos para el hogar. Valorizan la limpieza, la organización y la amabilidad del personal. Sin embargo, algunos clientes también buscan una atmósfera más animada y vivaz, similar a la que se encuentra en la calle. Para abordar estos puntos de dolor, se podría considerar la creación de eventos y actividades en el centro comercial que atraigan a los clientes y les ofrezcan una experiencia más dinámica y emocionante.\\n\\n## 🏗️ ESTRUCTURA NEURAL SUGERIDA\\n- **Sección de Alimentos Frescos**: Ampliar la sección de alimentos frescos para incluir más opciones de productos orgánicos y locales.\\n- **Sección de Productos para el Hogar**: Crear una sección dedicada a productos para el hogar, incluyendo artículos de decoración, limpieza y organización.\\n- **Zona de Restaurantes y Bares**: Ampliar la zona de restaurantes y bares para ofrecer más opciones gastronómicas y crear un ambiente más animado y vivaz.\\n\\n## 🦅 CAZA DE COMPETENCIA\\nURL_COMPETENCIA: https://www.wholefoodsmarket.com/ (Whole Foods Market)\\nWhole Foods Market es un competidor de élite en el mercado de supermercados de alta gama. Su enfoque en la calidad y la frescura de los productos, así como su compromiso con la sostenibilidad y la responsabilidad social, lo convierten en un modelo a seguir para Euro - Arkadia. La estética y la experiencia de compra en Whole Foods Market son también un ejemplo a seguir, con un enfoque en la creación de un ambiente agradable y acogedor para los clientes.\\n\\n## 🏗️ DIRECTIVAS PARA EL ARQUITECTO\\n* **Diseño de Interiores**: Crear un diseño de interiores que sea moderno, limpio y organizado, con un enfoque en la creación de un ambiente agradable y acogedor para los clientes.\\n* **Iluminación y Sonido**: Diseñar un sistema de iluminación y sonido que sea atractivo y animado, pero que no sea demasiado intenso o abrumador para los clientes.\\n* **Señalización y Navegación**: Crear un sistema de señalización y navegación claro y fácil de seguir, para que los clientes puedan encontrar fácilmente lo que buscan.\\n* **Áreas de Descanso**: Diseñar áreas de descanso y relajación para los clientes, como zonas de asientos y áreas de juegos para niños.",
          "investigation_status":"completed",
          "updated_at":"2026-05-24T22:48:14.783Z",
          "fotos_reales":[
            "https://lkctxyoyajqrhaavnzrv.supabase.co/storage/v1/object/public/business-assets/92991cb0-fc50-48df-9bfd-1c1ab1042239/gallery/evidencia_1.jpg",
            "https://lkctxyoyajqrhaavnzrv.supabase.co/storage/v1/object/public/business-assets/92991cb0-fc50-48df-9bfd-1c1ab1042239/gallery/evidencia_2.jpg",
            "https://lkctxyoyajqrhaavnzrv.supabase.co/storage/v1/object/public/business-assets/92991cb0-fc50-48df-9bfd-1c1ab1042239/gallery/evidencia_3.jpg",
            "https://lkctxyoyajqrhaavnzrv.supabase.co/storage/v1/object/public/business-assets/92991cb0-fc50-48df-9bfd-1c1ab1042239/gallery/evidencia_4.jpg",
            "https://lkctxyoyajqrhaavnzrv.supabase.co/storage/v1/object/public/business-assets/92991cb0-fc50-48df-9bfd-1c1ab1042239/gallery/evidencia_5.jpg"
          ]
        }`}
      />

      <div className="min-h-screen bg-gray-900 text-white">
        <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
          <div className="max-w-6xl mx-auto px-8 py-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-orange-500 to-red-500" />
              <span className="text-xl font-black uppercase tracking-tighter">Euro <span className="italic">Arkadia</span></span>
            </div>
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm font-bold uppercase tracking-widest hover:text-orange-500 transition-colors">Colecciones</a>
              <a href="#" className="text-sm font-bold uppercase tracking-widest hover:text-orange-500 transition-colors">Joyería</a>
              <a href="#" className="text-sm font-bold uppercase tracking-widest hover:text-orange-500 transition-colors">Decoración</a>
              <a href="https://wa.me/+576044440366?text=Hola!%20Vengo%20desde%20su%20sitio%20web." className="px-4 py-2 bg-white/10 border border-orange-500/30 text-white text-sm font-black uppercase tracking-widest rounded-full hover:bg-white/20 transition-all hover:border-orange-500/50">
                Reservar
              </a>
            </div>
          </div>
        </nav>

        <header className="pt-32 pb-20 px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-sm font-bold uppercase tracking-widest text-orange-500">⭐ 4.6 (120 reseñas)</span>
            </div>
            <h1 className="text-6xl font-black uppercase tracking-tighter mb-6 leading-tight">
              EXCLUSIVIDAD <span className="italic">sin límites</span><br />
              EN CADA <span className="text-orange-500">DETALLE</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mb-8 leading-relaxed">
              Sumérgete en un universo de lujo absoluto en el corazón de Medellín. Moda, joyería y decoración premium para los más exigentes conocedores.
            </p>
            <div className="flex gap-4">
              <a href="https://wa.me/+576044440366?text=Hola!%20Vengo%20desde%20su%20sitio%20web." className="px-8 py-3 bg-white text-black text-sm font-black uppercase tracking-widest rounded-full hover:bg-gray-200 transition-colors">
                Agenda tu Experiencia
              </a>
              <a href="#" className="px-8 py-3 border border-white/20 text-white text-sm font-black uppercase tracking-widest rounded-full hover:bg-white/10 transition-colors">
                Descubre Colecciones
              </a>
            </div>
          </div>
        </header>

        <section className="py-20 px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-1 w-12 rounded-full bg-orange-500" />
                  <h2 className="text-2xl font-black uppercase tracking-tighter">Sobre <span className="text-orange-500">Nosotros</span></h2>
                </div>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Euro - Arkadia es el santuario del lujo en Medellín. Curamos una selección impecable de moda, joyería y decoración premium, donde cada pieza representa la excelencia absoluta.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  Nuestros estándares de calidad son inquebrantables, garantizando que cada visita sea una experiencia transformadora en el mundo del lujo.
                </p>
              </div>
              <div className="rounded-3xl overflow-hidden relative group">
                <img src="https://lkctxyoyajqrhaavnzrv.supabase.co/storage/v1/object/public/business-assets/92991cb0-fc50-48df-9bfd-1c1ab1042239/gallery/evidencia_5.jpg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-8 max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-1 w-12 rounded-full bg-orange-500" />
            <h2 className="text-3xl font-black uppercase tracking-tighter italic">Neural <span className="text-orange-500">Feed</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map(post => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="group relative overflow-hidden rounded-[2rem] bg-white/5 backdrop-blur-md border border-white/10 p-8 hover:border-orange-500/30 transition-all duration-300"
              >
                <div className="aspect-video rounded-2xl overflow-hidden mb-6 relative">
                  <img src={post.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest border border-orange-500/30 text-orange-500">Neural Update</span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-orange-500/30 flex items-center justify-center">
                      <ArrowRight size={16} className="text-orange-500" />
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">{post.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">{post.content}</p>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{post.date}</span>
                  <button className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-orange-500 hover:text-orange-400 transition-colors">
                    Explorar <ArrowRight size={14} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="py-20 px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-4 mb-12">
              <div className="h-1 w-12 rounded-full bg-orange-500" />
              <h2 className="text-3xl font-black uppercase tracking-tighter">Ubicación <span className="text-orange-500">Premium</span></h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="rounded-3xl overflow-hidden relative group">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.438550923085!2d-75.59671692480469!3d6.212607626155002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e44297443455555%3A0x0!2zNsKwMTInNDUuNCJOIDc1wrAzNSczOS4zIlc!5e0!3m2!1sen!2sco!4v1716600000000!5m2!1sen!2sco"
                  width="100%"
                  height="400"
                  style={{ border: 0, borderRadius: "1.5rem" }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="group-hover:scale-105 transition-transform duration-500"
                ></iframe>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-3xl" />
              </div>
              <div>
                <h3 className="text-3xl font-black uppercase tracking-tighter mb-4">Visítanos en el Corazón de Medellín</h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Ubicados en Dg. 75B #1-80, Belén - Medellín, en un espacio arquitectónico diseñado para ofrecerte una experiencia de lujo incomparable.
                </p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=6.2126076,-75.5945282"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-white/10 border border-orange-500/30 text-white text-sm font-black uppercase tracking-widest rounded-full hover:bg-white/20 transition-all hover:border-orange-500/50"
                >
                  Cómo Llegar <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </section>

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

        <footer className="py-20 px-8 bg-black/50 backdrop-blur-md border-t border-white/10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-br from-orange-500 to-red-500" />
                  <span className="text-xl font-black uppercase tracking-tighter">Euro <span className="italic">Arkadia</span></span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  El epítome del lujo en Medellín. Moda, joyería y decoración premium para quienes exigen lo extraordinario.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-black uppercase tracking-widest mb-6">Colecciones Premium</h4>
                <ul className="space-y-3 text-gray-400 text-sm">
                  <li><a href="#" className="hover:text-white transition-colors">Moda Alta Gama</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Joyería Exclusiva</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Decoración Elite</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-black uppercase tracking-widest mb-6">Servicios Exclusivos</h4>
                <ul className="space-y-3 text-gray-400 text-sm">
                  <li><a href="#" className="hover:text-white transition-colors">Asesoría VIP</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Entrega Premium</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Eventos Privados</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-black uppercase tracking-widest mb-6">Conexión Directa</h4>
                <a href="https://wa.me/+576044440366?text=Hola!%20Vengo%20desde%20su%20sitio%20web." className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 border border-orange-500/30 text-white text-sm font-black uppercase tracking-widest rounded-full hover:bg-white/20 transition-all hover:border-orange-500/50 mb-4">
                  <ArrowRight size={16} /> WhatsApp
                </a>
              </div>
            </div>
            <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-sm text-gray-500">
                Powered by <a href="https://neural-nexus-inky.vercel.app/" className="hover:text-white transition-colors">Federación Neural Nexus</a>
              </div>
              <div className="flex items-center gap-4">
                <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                  <span className="text-xs">IG</span>
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                  <span className="text-xs">FB</span>
                </a>
              </div>
            </div>
          </div>
        </footer>

        <footer className="py-12 border-t border-white/10 bg-[#020202] text-slate-400">
          <div className="max-w-6xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col items-center md:items-start">
              <span className="font-bold text-white tracking-wider">EURO - ARKADIA</span>
              <p className="text-[10px] text-slate-600 mt-1">&copy; 2026 Todos los derechos reservados.</p>
            </div>
            <div className="flex items-center gap-6">
              <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors text-sm">
                Instagram
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors text-sm">
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

        <NeuralFeed nodeId="92991cb0-fc50-48df-9bfd-1c1ab1042239" />
      </div>
    </div>
  );
};

export default App;