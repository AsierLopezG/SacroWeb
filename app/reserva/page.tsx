"use client";
import Cal from "@calcom/embed-react";
import { CheckCircle2 } from "lucide-react";

export default function Reserva() {
  return (
    <main className="pt-40 pb-20 px-8 min-h-screen">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-16">
        
{/* Lado Izquierdo: El "Checklist" */}
<div className="lg:col-span-4 space-y-12">
  <div>
    <h1 className="text-5xl font-bold tracking-tighter text-white mb-6 leading-none">
      Reserva tu <br/> <span className="text-cyan-400">espacio.</span>
    </h1>
    <p className="text-lg text-slate-300 font-medium italic">
      En solo 3 clics tendrás tu cita confirmada.
    </p>
  </div>

  <div className="space-y-8">
    {[
      { t: "Selecciona el servicio", d: "Elige entre osteopatía o fisioterapia." },
      { t: "Busca tu hueco", d: "El calendario muestra nuestra agenda real." },
      { t: "Confirmación", d: "Recibe los detalles en tu correo al instante." }
    ].map((step, i) => (
      <div key={i} className="flex gap-6 items-start">
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-100 text-cyan-900 flex items-center justify-center font-black text-xs shadow-[0_0_15px_rgba(34,211,238,0.3)]">
          {i + 1}
        </div>
        <div>
          {/* Título del paso en BLANCO */}
          <h5 className="font-bold text-white uppercase text-[11px] tracking-widest mb-1">{step.t}</h5>
          {/* Descripción en GRIS CLARO para que se lea perfecto sobre negro */}
          <p className="text-slate-300 text-sm leading-snug font-medium">{step.d}</p>
        </div>
      </div>
    ))}
  </div>

  <div className="pt-8 border-t border-slate-700">
    <p className="text-[10px] font-black uppercase tracking-widest text-cyan-400 mb-4 italic">Ubicación Actual_</p>
    <p className="text-white font-bold">C. de Ramón Luján, 45, Usera, Madrid.</p>
  </div>
</div>

        {/* Lado Derecho: El Calendario (Protagonista) */}
        <div className="lg:col-span-8">
          <div className="bg-white rounded-[3.5rem] p-6 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.08)] border border-slate-100 min-h-[750px] overflow-hidden">
            <Cal 
              calLink="asier-lopez-garcia-qsznxs" 
              style={{ width: "100%", height: "100%" }}
              config={{ theme: "light" }} 
            />
          </div>
        </div>

      </div>
    </main>
  );
}