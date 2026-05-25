import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ArrowRight = ({ size }: { size: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const SalesAdvisorWidget = ({ nodeName, adn }: { nodeName: string; adn: string }) => {
  return <div className="hidden">{nodeName}{adn}</div>;
};

const NeuralFeed = ({ nodeId }: { nodeId: string }) => {
  const accentColor = "#f97316";
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

  return (
    <section className="py-20 px-8 max-w-6xl mx-auto">
      <div className="flex items-center gap-4 mb-12">
        <div className="h-1 w-12 rounded-full" style={{ backgroundColor: accentColor }} />
        <h2 className="text-3xl font-black uppercase tracking-tighter italic">Neural <span style={{ color: accentColor }}>Feed</span></h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {posts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-[2rem] bg-white/5 backdrop-blur-md border border-white/10 p-8 hover:border-white/20 transition-all duration-500 hover:scale-[1.02]"
          >
            <div className="aspect-video rounded-2xl overflow-hidden mb-6 relative">
              <img src={post.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80" alt={post.title} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest border border-white/20">Neural Update</span>
              </div>
            </div>
            <h3 className="text-2xl font-black uppercase tracking-tighter mb-4" style={{ color: accentColor }}>{post.title}</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">{post.content}</p>
            <div className="flex justify-between items-center">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{post.date}</span>
              <button className="flex items-center gap-2 text-xs font-black uppercase tracking-widest hover:opacity-70 transition-opacity" style={{ color: accentColor }}>
                Leer Más <ArrowRight size={14} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const App = () => {
  const accentColor = "#f97316";
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

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-orange-500/30">
      <SalesAdvisorWidget
        nodeName="Euro - Arkadia"
        adn='{"google_place_id":"ChIJaaTdGpkpRI4RX4r0gmXpBqs","opportunity_score":90,"place_types":[]}'
      />
      <NeuralFeed nodeId="arkadia-luxe-feed" />

      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-orange-600" />
            <span className="text-xl font-bold tracking-wider">EURO <span className="text-orange-500">ARKADIA</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#" className="hover:text-orange-500 transition-colors">Inicio</a>
            <a href="#" className="hover:text-orange-500 transition-colors">Colecciones</a>
            <a href="#" className="hover:text-orange-500 transition-colors">Experiencias</a>
            <a href="#" className="hover:text-orange-500 transition-colors">Eventos</a>
            <a href="#" className="hover:text-orange-500 transition-colors">Ubicación</a>
          </div>
          <a
            href="https://wa.me/+576044440366?text=Hola!%20Vengo%20desde%20su%20sitio%20web."
            className="px-6 py-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-sm font-bold rounded-full transition-all shadow-lg hover:shadow-orange-500/30"
          >
            Reservar
          </a>
        </div>
      </nav>

      <header className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black z-10" />
        <img
          src="https://lkctxyoyajqrhaavnzrv.supabase.co/storage/v1/object/public/business-assets/92991cb0-fc50-48df-9bfd-1c1ab1042239/gallery/evidencia_hero.jpg"
          className="absolute inset-0 w-full h-full object-cover"
          alt="Luxury experience at Arkadia"
        />
        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-orange-500 font-bold">⭐ 4.6</span>
              <span className="text-sm text-gray-300">(120 reseñas)</span>
            </div>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6"
            style={{ textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}
          >
            <span className="bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">Lujo</span> Premium<br />
            en Medellín
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto"
          >
            Descubre una experiencia de compra exclusiva con las marcas más prestigiosas y servicios personalizados para clientes exigentes.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <a
              href="https://wa.me/+576044440366?text=Hola!%20Vengo%20desde%20su%20sitio%20web."
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold rounded-full text-lg transition-all hover:scale-105 shadow-lg hover:shadow-orange-500/40"
            >
              Reservar Experiencia <ArrowRight size={20} />
            </a>
          </motion.div>
        </div>
      </header>

      <NeuralFeed nodeId="arkadia-luxe-feed" />

      <section className="py-20 px-8 max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-1 w-12 rounded-full" style={{ backgroundColor: accentColor }} />
          <h2 className="text-3xl font-black uppercase tracking-tighter italic">Ubicación <span style={{ color: accentColor }}>Premium</span></h2>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-[2rem] overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 p-8"
        >
          <div className="aspect-video rounded-2xl overflow-hidden mb-6 relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.08123456789!2d-75.59671692480468!3d6.212607627045678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4429a3aae113f7%3A0x3d86468f2a3e5a9b!2sEuro%20Arkadia!5e0!3m2!1sen!2sco!4v1652380000000!5m2!1sen!2sco"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex flex-col md:flex-row justify-between items-center">
              <div>
                <h3 className="text-xl font-bold">Euro Arkadia</h3>
                <p className="text-gray-300 text-sm">Centro Comercial Premium - Medellín</p>
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=6.2126076,-75.5945282"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 md:mt-0 px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold rounded-full transition-all shadow-lg hover:shadow-orange-500/30"
              >
                Cómo Llegar
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      <footer className="bg-black/80 backdrop-blur-md border-t border-white/10 py-16 px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start">
            <span className="font-bold text-white tracking-wider">EURO - ARKADIA</span>
            <p className="text-[10px] text-slate-500 mt-1">&copy; 2026 Todos los derechos reservados.</p>
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-orange-500 transition-colors text-sm">
              Instagram
            </a>
            <a href="#" className="hover:text-orange-500 transition-colors text-sm">
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
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full shadow-lg transition-all hover:scale-110 active:scale-95"
        style={{ boxShadow: '0 0 20px rgba(37, 211, 102, 0.4)' }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
      </a>
    </div>
  );
};

export default App;