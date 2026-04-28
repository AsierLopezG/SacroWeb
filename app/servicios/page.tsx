"use client";
import { useState } from "react";
import Link from "next/link";

// Definimos el tipo de datos para TypeScript
type Tratamiento = {
  id: string;
  title: string;
  desc: string;
  extendedDesc: string;
  image: string;
};

export default function ServiciosPage() {
  // Aquí ampliamos la información con el texto para el pop-up y una imagen
  const tratamientos: Tratamiento[] = [
    { 
      id: "01", 
      title: "CIRUGÍA E IMPLANTES", 
      desc: "Recuperación ósea y funcional con sistemas de carga inmediata.",
      extendedDesc: "Utilizamos tecnología de escaneado 3D para planificar cada intervención con precisión milimétrica. Nuestros implantes de titanio de alta gama garantizan una biocompatibilidad total, reduciendo los tiempos de recuperación y ofreciendo resultados estéticos y funcionales definitivos.",
      image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop"
    },
    { 
      id: "02", 
      title: "DISEÑO DE SONRISA", 
      desc: "Carillas de alta gama y blanqueamiento clínico personalizado.",
      extendedDesc: "Analizamos tus facciones para diseñar una sonrisa que respete la armonía de tu rostro. Empleamos carillas ultrafinas de porcelana y tratamientos de blanqueamiento con luz fría que protegen el esmalte mientras devuelven la luminosidad natural a tus dientes.",
      image: "https://images.unsplash.com/photo-1598256989800-fea5ce5146f2?q=80&w=800&auto=format&fit=crop"
    },
    { 
      id: "03", 
      title: "ORTODONCIA DIGITAL", 
      desc: "Sistemas invisibles alineados mediante escaneado intraoral 3D.",
      extendedDesc: "Olvídate de los brackets tradicionales. Con nuestro sistema de alineadores transparentes, corregimos la posición de tus dientes de forma cómoda, removible y casi imperceptible. Podrás ver el resultado final en 3D antes de empezar.",
      image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=800&auto=format&fit=crop"
    }
  ];

  // Estado para controlar qué servicio está abierto en el pop-up
  const [activeService, setActiveService] = useState<Tratamiento | null>(null);

  return (
    <div className="bg-white min-h-screen pt-12 pb-32 px-6">
      <div className="max-w-5xl mx-auto">
        <header className="mb-24">
          <span className="text-[10px] font-bold tracking-[0.3em] text-[#00C4CC] uppercase mb-4 block">TRATAMIENTOS_</span>
          <h1 className="text-6xl md:text-[8rem] font-medium tracking-tighter text-slate-900 leading-[0.85]">
            Precisión <br />
            <span className="italic font-light text-[#00C4CC]">clínica.</span>
          </h1>
        </header>

        {/* LISTA DE SERVICIOS */}
        <div className="space-y-6">
          {tratamientos.map((t) => (
            <div 
              key={t.id} 
              onClick={() => setActiveService(t)}
              className="relative bg-[#F8FAFC] border border-slate-200 rounded-[2.5rem] p-12 md:p-16 overflow-hidden group hover:border-[#00C4CC]/50 hover:shadow-xl transition-all duration-500 cursor-pointer"
            >
              <div className="absolute -right-6 -bottom-12 text-[15rem] font-black text-slate-200/40 select-none group-hover:-translate-y-4 transition-transform duration-500">
                {t.id}
              </div>
              <div className="relative z-10">
                {/* Título en negro fuerte para que destaque perfectamente */}
                <h2 className="text-3xl font-black tracking-tight text-slate-900 mb-4 group-hover:text-[#00C4CC] transition-colors duration-300">
                  {t.title}
                </h2>
                <p className="text-slate-600 text-lg max-w-md mb-8">{t.desc}</p>
                {/* Botón convertido en un '+' para indicar que se abre algo */}
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-slate-900 shadow-md group-hover:bg-[#00C4CC] group-hover:text-white transition-all duration-300">
                  <span className="text-3xl font-light mt-[-2px]">+</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL / POP-UP */}
      {activeService && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6">
          {/* Fondo oscuro desenfocado que cierra el pop-up al hacer clic */}
          <div 
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
            onClick={() => setActiveService(null)}
          ></div>
          
          {/* Contenedor principal del pop-up */}
          <div className="relative bg-white w-full max-w-4xl rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col md:flex-row animate-in fade-in zoom-in-95 duration-300">
            
            {/* Botón de cerrar */}
            <button 
              onClick={() => setActiveService(null)} 
              className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-slate-900 hover:bg-[#00C4CC] hover:text-white z-10 transition-colors shadow-sm font-bold"
            >
              ✕
            </button>

            {/* Mitad izquierda: Imagen */}
            <div className="w-full md:w-5/12 h-64 md:h-auto bg-slate-100 relative">
              <img 
                src={activeService.image} 
                alt={activeService.title} 
                className="absolute inset-0 w-full h-full object-cover" 
              />
            </div>

            {/* Mitad derecha: Contenido y CTA */}
            <div className="w-full md:w-7/12 p-8 md:p-14 flex flex-col justify-center bg-white">
              <span className="text-[10px] font-bold tracking-[0.3em] text-[#00C4CC] uppercase mb-4 block">
                TRATAMIENTO {activeService.id}
              </span>
              <h3 className="text-3xl md:text-4xl font-black tracking-tighter text-slate-900 mb-6 leading-tight">
                {activeService.title}
              </h3>
              <p className="text-slate-600 leading-relaxed mb-10">
                {activeService.extendedDesc}
              </p>
              
              <Link 
                href="/reservar" 
                className="inline-flex items-center justify-center bg-[#00C4CC] text-white px-8 py-4 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-[#00A3A8] transition-all shadow-[0_8px_30px_rgba(0,196,204,0.3)] w-full md:w-auto"
              >
                Reservar Consulta
              </Link>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}