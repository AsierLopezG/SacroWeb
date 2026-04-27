"use client";
import { useState } from "react";
import Cal from "@calcom/embed-react";
import { User, Users, ArrowLeft } from "lucide-react";

export default function Reserva() {
  const [profesional, setProfesional] = useState<string | null>(null);

  return (
    <main className="pt-28 md:pt-40 pb-20 px-4 md:px-8 min-h-screen bg-slate-50">
      <div className="max-w-6xl mx-auto">
        
        {!profesional ? (
          /* PASO 1: SELECCIÓN DE PROFESIONAL */
          <div className="max-w-3xl mx-auto text-center space-y-12">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-[4px] text-cyan-500 mb-4">Paso 1</h2>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-slate-950">
                ¿Con quién quieres <br/> <span className="italic font-light">tu sesión?</span>
              </h1>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* PROFESIONAL 1 */}
              <button 
                onClick={() => setProfesional("asier-lopez-garcia-qsznxs")}
                className="group bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 hover:border-cyan-500 transition-all text-left"
              >
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                  <User size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-950 mb-2">Asier López</h3>
                <p className="text-slate-500 font-medium italic">Especialista en Osteopatía Estructural</p>
              </button>

              {/* PROFESIONAL 2 */}
              <button 
                onClick={() => setProfesional("segundo-masajista-link")}
                className="group bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 hover:border-cyan-500 transition-all text-left"
              >
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                  <User size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-950 mb-2">Nombre Segundo</h3>
                <p className="text-slate-500 font-medium italic">Fisioterapia Deportiva y Punción Seca</p>
              </button>
            </div>
          </div>
        ) : (
          /* PASO 2: EL CALENDARIO DEL PROFESIONAL ELEGIDO */
          <div className="space-y-8">
            <button 
              onClick={() => setProfesional(null)}
              className="flex items-center gap-2 text-slate-400 hover:text-cyan-500 font-bold uppercase text-[10px] tracking-widest transition-colors"
            >
              <ArrowLeft size={16} /> Volver a selección
            </button>
            
            <div className="bg-white rounded-2xl md:rounded-[3.5rem] p-2 md:p-6 shadow-xl border border-slate-100 min-h-[700px] overflow-hidden">
              <Cal 
                calLink={profesional} 
                style={{ width: "100%", height: "100%" }}
                config={{ theme: "light" }} 
              />
            </div>
          </div>
        )}

      </div>
    </main>
  );
}