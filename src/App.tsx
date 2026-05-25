import React from 'react';
import { motion } from 'framer-motion';
import { SalesAdvisorWidget } from './components/SalesAdvisorWidget';
import { NeuralFeed } from './components/NeuralFeed';

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-pink-500/30">
      <SalesAdvisorWidget 
        nodeName="Euro - Arkadia" 
        adn="&quot;{\&quot;google_place_id\&quot;:\&quot;ChIJaaTdGpkpRI4RX4r0gmXpBqs\&quot;,\&quot;opportunity_score\&quot;:90,\&quot;place_types\&quot;:\&quot;store\&quot;,\&quot;rating\&quot;:4.6,\&quot;location\&quot;:{\&quot;latitude\&quot;:6.2126076,\&quot;longitude\&quot;:-75.5945282},\&quot;report\&quot;:\&quot;# 🏥 EXPEDIENTE DE INTELIGENCIA: Euro - Arkadia\\n**Nombre:** Euro - Arkadia\\n**Ubicación:** Dg. 75B #1-80, Medellín, Belén, Medellín, Antioquia, Colombia\\n**Rating:** 4.6 ⭐\\n**Resumen Ejecutivo:** Euro - Arkadia es un centro comercial y supermercado de alta gama ubicado en Medellín, Colombia. Con un rating de 4.6 estrellas y más de 3.700 reseñas, se destaca por su gran variedad de productos frescos, carnes, pescados y artículos para el hogar. Los clientes elogian la limpieza, la organización y la amabilidad del personal. Sin embargo, algunos clientes mencionan que los precios pueden ser altos y que falta un poco de atmósfera de vida en la calle.\\n\\nSOCIAL_INSTAGRAM: null\\nSOCIAL_FACEBOOK: null\\n\\n## 🧬 ADN DEL CLIENTE\\nLos clientes de Euro - Arkadia buscan una experiencia de compras de alta calidad, con una gran variedad de productos frescos y artículos para el hogar. Valorizan la limpieza, la organización y la amabilidad del personal. Sin embargo, algunos clientes también buscan una atmósfera más animada y vivaz, similar a la que se encuentra en la calle. Para abordar estos puntos de dolor, se podría considerar la creación de eventos y actividades en el centro comercial que atraigan a los clientes y les ofrezcan una experiencia más dinámica y emocionante.\\n\\n## 🏗️ ESTRUCTURA NEURAL SUGERIDA\\n- **Sección de Alimentos Frescos**: Ampliar la sección de alimentos frescos para incluir más opciones de productos orgánicos y locales.\\n- **Sección de Productos para el Hogar**: Crear una sección dedicada a productos para el hogar, incluyendo artículos de decoración, limpieza y organización.\\n- **Zona de Restaurantes y Bares**: Ampliar la zona de restaurantes y bares para ofrecer más opciones gastronómicas y crear un ambiente más animado y vivaz.\\n\\n## 🦅 CAZA DE COMPETENCIA\\nURL_COMPETENCIA: https://www.wholefoodsmarket.com/ (Whole Foods Market)\\nWhole Foods Market es un competidor de élite en el mercado de supermercados de alta gama. Su enfoque en la calidad y la frescura de los productos, así como su compromiso con la sostenibilidad y la responsabilidad social, lo convierten en un modelo a seguir para Euro - Arkadia. La estética y la experiencia de compra en Whole Foods Market son también un ejemplo a seguir, con un enfoque en la creación de un ambiente agradable y acogedor para los clientes.\\n\\n## 🏗️ DIRECTIVAS PARA EL ARQUITECTO\\n* **Diseño de Interiores**: Crear un diseño de interiores que sea moderno, limpio y organizado, con un enfoque en la creación de un ambiente agradable y acogedor para los clientes.\\n* **Iluminación y Sonido**: Diseñar un sistema de iluminación y sonido que sea atractivo y animado, pero que no sea demasiado intenso o abrumador para los clientes.\\n* **Señalización y Navegación**: Crear un sistema de señalización y navegación claro y fácil de seguir, para que los clientes puedan encontrar fácilmente lo que buscan.\\n* **Áreas de Descanso**: Diseñar áreas de descanso y relajación para los clientes, como zonas de asientos y áreas de juegos para niños.\&quot;,\&quot;investigation_status\&quot;:\&quot;completed\&quot;,\&quot;updated_at\&quot;:\&quot;2026-05-24T22:48:14.783Z\&quot;}\n\n🚨 FOTOS REALES DEL NEGOCIO (USAR OBLIGATORIAMENTE): [\&quot;https://lkctxyoyajqrhaavnzrv.supabase.co/storage/v1/object/public/business-assets/92991cb0-fc50-48df-9bfd-1c1ab1042239/gallery/evidencia_1.jpg\&quot;,\&quot;https://lkctxyoyajqrhaavnzrv.supabase.co/storage/v1/object/public/business-assets/92991cb0-fc50-48df-9bfd-1c1ab1042239/gallery/evidencia_2.jpg\&quot;,\&quot;https://lkctxyoyajqrhaavnzrv.supabase.co/storage/v1/object/public/business-assets/92991cb0-fc50-48df-9bfd-1c1ab1042239/gallery/evidencia_3.jpg\&quot;,\&quot;https://lkctxyoyajqrhaavnzrv.supabase.co/storage/v1/object/public/business-assets/92991cb0-fc50-48df-9bfd-1c1ab1042239/gallery/evidencia_4.jpg\&quot;,\&quot;https://lkctxyoyajqrhaavnzrv.supabase.co/storage/v1/object/public/business-assets/92991cb0-fc50-48df-9bfd-1c1ab1042239/gallery/evidencia_5.jpg\&quot;]&quot;" 
      />
      
      const accentColor = "#f97316";

const App = () => {
  const [posts] = useState([
    {
      id: 1,
      title: "Nueva Colección de Lujo Otoño-Invierno 2026",
      content: "Descubre nuestra exclusiva colección de moda premium con diseños únicos y materiales de la más alta calidad. Piezas seleccionadas para clientes que buscan elegancia y distinción en cada detalle.",
      image: "https://lkctxyoyajqrhaavnzrv.supabase.co/storage/v1/object/public/business-assets/92991cb0-fc50-48df-9bfd-1c1ab1042239/gallery/evidencia_1.jpg",
      date: "MAYO 2026"
    },
    {
      id: 2,
      title: "Experiencia Gourmet en Arkadia",
      content: "Presentamos nuestra nueva sección de alimentos premium con productos orgánicos y locales. Disfruta de una experiencia de compra única con los mejores cortes, pescados frescos y delicatessen importados.",
      image: "https://lkctxyoyajqrhaavnzrv.supabase.co/storage/v1/object/public/business-assets/92991cb0-fc50-48df-9bfd-1c1ab1042239/gallery/evidencia_2.jpg",
      date: "MAYO 2026"
    },
    {
      id: 3,
      title: "Joyería de Autor: Piezas Únicas",
      content: "Explora nuestra colección de joyería artesanal con diseños exclusivos en oro, plata y piedras preciosas. Cada pieza es creada por maestros joyeros para clientes que valoran la artesanía y el lujo.",
      image: "https://lkctxyoyajqrhaavnzrv.supabase.co/storage/v1/object/public/business-assets/92991cb0-fc50-48df-9bfd-1c1ab1042239/gallery/evidencia_3.jpg",
      date: "JUNIO 2026"
    },
    {
      id: 4,
      title: "Eventos Exclusivos en Arkadia",
      content: "Únete a nuestros eventos privados con degustaciones, lanzamientos de colecciones y experiencias VIP. Vive la esencia del lujo en un ambiente sofisticado y acogedor.",
      image: "https://lkctxyoyajqrhaavnzrv.supabase.co/storage/v1/object/public/business-assets/92991cb0-fc50-48df-9bfd-1c1ab1042239/gallery/evidencia_4.jpg",
      date: "JUNIO 2026"
    }
  ]);

  
    <div className="min-h-screen bg-black text-white">
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full" style={{ backgroundColor: accentColor }} />
            <span className="text-xl font-bold">EURO <span className="font-light">ARKADIA</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm font-medium hover:text-orange-500 transition-colors">Colecciones</a>
            <a href="#" className="text-sm font-medium hover:text-orange-500 transition-colors">Joyería</a>
            <a href="#" className="text-sm font-medium hover:text-orange-500 transition-colors">Gourmet</a>
            <a href="#" className="text-sm font-medium hover:text-orange-500 transition-colors">Eventos</a>
          </div>
          <a
            href="https://wa.me/+576044440366?text=Hola!%20Vengo%20desde%20su%20sitio%20web."
            className="px-6 py-2 rounded-full text-sm font-bold hover:bg-white/10 transition-colors"
            style={{ backgroundColor: accentColor }}
          >
            Reservar
          </a>
        </div>
      </nav>

      <section className="py-20 px-8 max-w-6xl mx-auto pt-32">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-1 w-12 rounded-full" style={{ backgroundColor: accentColor }} />
          <h2 className="text-3xl font-black uppercase tracking-tighter italic">Neural <span style={{ color: accentColor }}>Feed</span></h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map(post => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="group relative overflow-hidden rounded-[2rem] bg-white/10 backdrop-blur-md border border-white/20 hover:border-orange-500/30 transition-all duration-500"
            >
              <div className="aspect-video rounded-2xl overflow-hidden mb-6 relative">
                <img
                  src={post.image}
                  className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-1 transition-transform duration-700"
                  alt={post.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest border border-white/20">
                    Neural Update
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">{post.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">{post.content}</p>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{post.date}</span>
                  <button
                    className="flex items-center gap-2 text-xs font-black uppercase tracking-widest hover:opacity-70 transition-opacity bg-gradient-to-r from-orange-500/20 to-orange-600/20 px-4 py-2 rounded-full"
                    style={{ color: accentColor }}
                  >
                    Leer Más <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <a
            href="https://www.google.com/maps/search/?api=1&query=6.2126076,-75.5945282"
            className="px-8 py-3 rounded-full text-sm font-bold hover:bg-white/10 transition-colors bg-gradient-to-r from-orange-500/20 to-orange-600/20 border border-white/20"
          >
            Cómo Llegar a Arkadia
          </a>
        </div>
      </section>

      <footer className="py-20 px-8 bg-black border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-full" style={{ backgroundColor: accentColor }} />
                <span className="text-xl font-bold">EURO <span className="font-light">ARKADIA</span></span>
              </div>
              <p className="text-gray-400 mb-6">
                Experiencia de lujo en el corazón de Medellín. Moda, joyería y gastronomía premium en un ambiente sofisticado y acogedor.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-6">Enlaces Rápidos</h3>
              <div className="flex flex-col gap-3">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Colecciones</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Joyería</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Gourmet</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Eventos</a>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10">
            <div className="text-sm text-gray-500 mb-4 md:mb-0">
              Powered by <a href="https://neural-nexus-inky.vercel.app/" className="hover:text-white transition-colors">PNN Portal Neural Nexus</a> | <a href="https://neural-nexus-inky.vercel.app/" className="hover:text-white transition-colors">Nexus Hive Federation</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

      {/* --- SECCIONES INTERMEDIAS DINÁMICAS --- */}
      // ... [SECCIONES INTERMEDIAS...]

      <NeuralFeed nodeId="92991cb0-fc50-48df-9bfd-1c1ab1042239" />

      {/* Sección de Ubicación Física */}
      
      <section className="py-20 bg-[#050505] border-t border-white/10 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-[#0a0f1c]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded text-blue-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
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
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
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
            
            <a href="null\nSOCIAL_FACEBOOK:" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors text-sm">
              Instagram
            </a>
            
            
            <a href="null\n\n##" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors text-sm">
              Facebook
            </a>
            
            
            
          </div>
          <div className="text-[10px] text-slate-500 font-mono text-center md:text-right">
            Powered by <a href="https://neural-nexus-inky.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">PNN Portal Neural Nexus</a> | <a href="https://neural-nexus-inky.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline">Nexus Hive Federation</a>
          </div>
        </div>
      </footer>

      
      {/* Botón Flotante de WhatsApp */}
      <a
        href="https://wa.me/+57 604 4440366?text=Hola! Vengo desde su sitio web."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full shadow-lg transition-all hover:scale-110 active:scale-95 animate-bounce"
        style={{ boxShadow: '0 0 20px rgba(37, 211, 102, 0.4)' }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
      </a>
      
    </div>
  );
}

// --- NEURAL_INJECTION_POINT ---

export default App;