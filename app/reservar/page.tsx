"use client";
import Cal from "@calcom/embed-react";

export default function ReservarPage() {
  return (
    <div className="pt-32 pb-20 bg-[#F8FAFC] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        
        {/* LADO IZQUIERDO: Branding y Refuerzo de Confianza */}
        <div className="space-y-16 pr-10">
          <div className="text-center md:text-left space-y-4">
            <h1 className="text-5xl md:text-6xl font-black tracking-tighter text-slate-950 leading-[1.1]">
              Elige el <br />
              <span className="italic font-light text-[#00C4CC]">momento</span>.
            </h1>
            <p className="text-[#64748B] text-lg max-w-sm mx-auto md:mx-0 leading-relaxed">
              Selecciona tu especialidad y horario en nuestro calendario. Recibirás una confirmación inmediata y un recordatorio antes de tu cita.
            </p>
          </div>

          {/* ELEMENTOS AÑADIDOS PARA EL ESPACIO VACÍO */}
          {/* Un grid sutil de beneficios clínicos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            <div className="space-y-3">
              <div className="w-12 h-px bg-[#00C4CC]"></div>
              <h3 className="font-black text-slate-950 uppercase tracking-widest text-[11px]">SIN ESPERAS_</h3>
              <p className="text-sm text-[#64748B]">Su hora de cita es sagrada. Cumplimos tiempos para que su día no se altere.</p>
            </div>
            <div className="space-y-3">
              <div className="w-12 h-px bg-[#00C4CC]"></div>
              <h3 className="font-black text-slate-950 uppercase tracking-widest text-[11px]">DIAGNÓSTICO 3D_</h3>
              <p className="text-sm text-[#64748B]">Tecnología de escaneado avanzado para un plan preciso desde la primera visita.</p>
            </div>
            <div className="space-y-3">
              <div className="w-12 h-px bg-[#00C4CC]"></div>
              <h3 className="font-black text-slate-950 uppercase tracking-widest text-[11px]">URGENCIAS_</h3>
              <p className="text-sm text-[#64748B]">Si tiene dolor agudo, llame al 915 00 36 99. Atendemos en el acto.</p>
            </div>
          </div>
          
          {/* Llama al 11111111 */}
          <div className="mt-16 pt-8 border-t border-slate-200">
             <a href="tel:915003699" className="text-lg font-bold text-[#00C4CC]">Llama al 915 00 36 99</a>
          </div>
        </div>

        {/* LADO DERECHO: El Calendario Blanco (Mismo diseño pero en su columna) */}
        <div className="bg-white rounded-2xl border border-[#F1F5F9] shadow-sm overflow-hidden p-4">
          <Cal
            calLink="/asier-lopez-garcia-qsznxs" // CAMBIAR POR EL REAL
            style={{ width: "100%", height: "100%", minHeight: "650px" }}
            config={{ 
              layout: "month_view",
              locale: "es",
              theme: "light"
            }}
          />
        </div>

      </div>
    </div>
  );
}