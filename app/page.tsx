"use client";
import { useState } from "react";
import Link from 'next/link';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
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
    <main className="pt-40">
      <section className="px-8 text-center mb-32">
        <h1 className="text-6xl md:text-8xl font-medium tracking-tight mb-8 text-slate-950">
          Vuelve a moverte <br/> <span className="italic font-light text-cyan-500">sin dolor.</span>
        </h1>
        <p className="max-w-xl mx-auto text-xl text-slate-700 leading-relaxed mb-12">
          Especialistas en osteopatía y fisioterapia avanzada en Usera. Diseñamos un plan adaptado a tu ritmo de vida.
        </p>
        <Link href="/reserva" className="inline-block bg-cyan-500 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-slate-950 transition-all shadow-2xl shadow-cyan-100">
          Comenzar tratamiento
        </Link>
      </section>

      <section className="bg-slate-50 py-32 px-8 border-y border-slate-100 overflow-hidden">
        <div className="max-w-4xl mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold uppercase tracking-[4px] text-cyan-500 mb-4">Testimonios</h2>
            <p className="text-4xl font-medium text-slate-950 italic">Lo que dicen nuestros pacientes</p>
          </div>

          <div className="relative h-[400px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="absolute w-full max-w-lg bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-100"
              >
                <Quote className="absolute top-6 right-8 text-slate-50" size={60} />
                <div className="flex text-yellow-400 mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="text-xl text-slate-900 leading-relaxed italic mb-8 font-medium">{reseñas[index].texto}</p>
                <p className="font-bold text-xs uppercase tracking-widest text-slate-950 pt-6 border-t border-slate-50">
                  — {reseñas[index].autor}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="absolute w-full flex justify-between items-center px-4 pointer-events-none">
              <button onClick={anterior} className="pointer-events-auto p-4 bg-white rounded-full shadow-lg hover:bg-slate-50 border border-slate-100 transition-all">
                <ChevronLeft size={24} className="text-slate-950" />
              </button>
              <button onClick={siguiente} className="pointer-events-auto p-4 bg-white rounded-full shadow-lg hover:bg-slate-50 border border-slate-100 transition-all">
                <ChevronRight size={24} className="text-slate-950" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}