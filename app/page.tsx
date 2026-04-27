"use client";
import { useState } from "react";
import Link from 'next/link';
import { Star, ChevronLeft, ChevronRight, Quote, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";

const reseñas = [
  { autor: "CARLOS R.", texto: "Increíble trato. Entré con un dolor lumbar insoportable y en tres sesiones soy otra persona.", estrellas: 5 },
  { autor: "ELENA M.", texto: "Grandes profesionales. Se nota que saben lo que hacen y te explican todo el proceso.", estrellas: 5 },
  { autor: "JAVI G.", texto: "La mejor clínica de Usera sin duda. El sistema de cita online es comodísimo.", estrellas: 5 }
];

export default function Home() {
  const [index, setIndex] = useState(0);
  const siguiente = () => setIndex((prev) => (prev + 1) % reseñas.length);
  const anterior = () => setIndex((prev) => (prev - 1 + reseñas.length) % reseñas.length);

  return (
    <main className="pt-32 md:pt-40 bg-white overflow-hidden">
      
      {/* SECCIÓN PRINCIPAL CON EFECTO "APPLE" */}
      <section className="px-4 md:px-8 text-center mb-24 md:mb-32 max-w-4xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight mb-6 md:mb-8 text-slate-950 leading-[1.1]"
        >
          Vuelve a moverte <br/> <span className="italic font-light text-cyan-500">sin dolor.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="max-w-xl mx-auto text-lg md:text-xl text-slate-700 leading-relaxed mb-10 md:mb-12 font-medium"
        >
          Especialistas en osteopatía y fisioterapia avanzada en Usera. Diseñamos un plan adaptado a tu ritmo de vida.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link href="/reserva" className="inline-block bg-cyan-500 text-white px-8 py-4 md:px-10 md:py-5 rounded-full font-bold text-base md:text-lg hover:bg-slate-950 transition-all shadow-2xl shadow-cyan-100">
            Comenzar tratamiento
          </Link>
        </motion.div>
      </section>

      {/* CINTA INFINITA (MARQUEE) */}
      <div className="bg-slate-950 py-4 md:py-6 transform -rotate-2 scale-105 shadow-2xl overflow-hidden mb-24 md:mb-32">
        <motion.div 
          animate={{ x: [0, -1035] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
          className="flex whitespace-nowrap gap-8 md:gap-16 items-center"
        >
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex gap-8 md:gap-16 items-center text-white text-sm md:text-base font-black uppercase tracking-[4px]">
              <span>Osteopatía</span>
              <span className="text-cyan-500 text-2xl">•</span>
              <span>Fisioterapia Invasiva</span>
              <span className="text-cyan-500 text-2xl">•</span>
              <span>Readaptación Deportiva</span>
              <span className="text-cyan-500 text-2xl">•</span>
              <span>Punción Seca</span>
              <span className="text-cyan-500 text-2xl">•</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* SECCIÓN CARROUSEL DE RESEÑAS */}
      <section className="bg-slate-50 py-24 px-4 border-t border-slate-100 overflow-hidden">
        <div className="max-w-4xl mx-auto relative">
          
          <div className="text-center mb-12">
            <h2 className="text-sm font-bold uppercase tracking-[4px] text-cyan-500 mb-4">Testimonios</h2>
            <p className="text-3xl md:text-4xl font-medium text-slate-950 italic">Lo que dicen nuestros pacientes</p>
          </div>

          <div className="relative h-[500px] md:h-[400px] flex flex-col items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="absolute w-[95%] max-w-lg bg-white p-8 md:p-10 rounded-[2.5rem] shadow-xl border border-slate-100 text-center md:text-left"
              >
                <Quote className="hidden md:block absolute top-6 right-8 text-slate-50" size={60} />
                <div className="flex justify-center md:justify-start text-yellow-400 mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="text-lg md:text-xl text-slate-900 leading-relaxed italic mb-8 font-medium">{reseñas[index].texto}</p>
                <p className="font-bold text-xs uppercase tracking-widest text-slate-950 pt-6 border-t border-slate-50">
                  — {reseñas[index].autor}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="absolute bottom-0 md:top-1/2 md:-translate-y-1/2 w-full flex justify-center md:justify-between gap-6 px-4 pointer-events-none">
              <button onClick={anterior} className="pointer-events-auto p-4 bg-white rounded-full shadow-lg hover:bg-slate-50 border border-slate-200 transition-all">
                <ChevronLeft size={24} className="text-slate-950" />
              </button>
              <button onClick={siguiente} className="pointer-events-auto p-4 bg-white rounded-full shadow-lg hover:bg-slate-50 border border-slate-200 transition-all">
                <ChevronRight size={24} className="text-slate-950" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* NUEVA SECCIÓN: MAPA Y LOCALIZACIÓN */}
      <section className="bg-white py-24 px-4 md:px-8 border-t border-slate-100">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-8">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-[4px] text-cyan-500 mb-4">Dónde encontrarnos</h2>
              <h3 className="text-4xl md:text-5xl font-medium text-slate-950 italic leading-tight">Tu clínica en el <br/> corazón de Usera</h3>
            </div>
            
            <p className="text-lg text-slate-600 leading-relaxed max-w-md">
              Estamos a pie de calle, en unas instalaciones modernas y preparadas para ofrecerte el mejor entorno de recuperación.
            </p>

            <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-3xl border border-slate-100 max-w-sm">
               <div className="bg-white p-3 rounded-full shadow-sm">
                   <MapPin className="text-cyan-600" size={24} />
               </div>
               <div>
                  <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1">Dirección</p>
                  <p className="text-slate-950 font-bold text-lg leading-snug">C. de Ramón Luján, 45<br/>28026, Madrid</p>
               </div>
            </div>
          </div>

          {/* EL MAPA INCRUSTADO */}
          <div className="h-[400px] md:h-[500px] w-full rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white relative bg-slate-100">
            <iframe 
              src="https://maps.google.com/maps?q=C.%20de%20Ram%C3%B3n%20Luj%C3%A1n,%2045,%20Usera,%20Madrid&t=&z=16&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 grayscale-[20%] contrast-125"
            ></iframe>
          </div>

        </div>
      </section>

    </main>
  );
}