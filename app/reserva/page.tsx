"use client";
import Cal from "@calcom/embed-react";

export default function Reserva() {
  return (
    <main className="pt-28 md:pt-40 pb-20 px-4 md:px-8 min-h-screen bg-slate-50">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 md:gap-16">
        
        {/* Lado Izquierdo: El "Checklist" (Textos oscurecidos para que se lean en blanco) */}
        <div className="lg:col-span-4 space-y-10">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-slate-950 mb-4 md:mb-6 leading-none">
              Reserva tu <br/> <span className="text-cyan-500">espacio.</span>
            </h1>
            <p className="text-base md:text-lg text-slate-500 font-medium italic">
              En solo 3 clics tendrás tu cita confirmada.
            </p>
          </div>

          <div className="space-y-6 md:space-y-8">
            {[
              { t: "Selecciona el servicio", d: "Elige entre osteopatía o fisioterapia." },
              { t: "Busca tu hueco", d: "El calendario muestra nuestra agenda real." },
              { t: "Confirmación", d: "Recibe los detalles en tu correo al instante." }
            ].map((step, i) => (
              <div key={i} className="flex gap-4 md:gap-6 items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-100 text-cyan-600 flex items-center justify-center font-black text-xs shadow-sm">
                  {i + 1}
                </div>
                <div>
                  <h5 className="font-bold text-slate-900 uppercase text-[10px] md:text-[11px] tracking-widest mb-1">{step.t}</h5>
                  <p className="text-slate-500 text-sm leading-snug font-medium">{step.d}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-6 md:pt-8 border-t border-slate-200">
            <p className="text-[10px] font-black uppercase tracking-widest text-cyan-500 mb-2 md:mb-4 italic">Ubicación Actual_</p>
            <p className="text-slate-900 font-bold text-sm md:text-base">C. de Ramón Luján, 45, Usera, Madrid.</p>
          </div>
        </div>

        {/* Lado Derecho: El Calendario (Optimizado para móvil) */}
        <div className="lg:col-span-8">
          {/* En móvil: poco padding (p-2) y menos borde (rounded-2xl). En PC: mucho padding y borde redondo. */}
          <div className="bg-white rounded-2xl md:rounded-[3.5rem] p-2 md:p-6 shadow-xl border border-slate-100 min-h-[600px] md:min-h-[750px] overflow-hidden w-full">
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