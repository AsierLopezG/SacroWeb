import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Servicios() {
  const servicios = [
    { n: "01", t: "Osteopatía avanzada", d: "Enfoque estructural y visceral para devolver la movilidad perdida.", color: "bg-cyan-50" },
    { n: "02", t: "Fisioterapia invasiva", d: "Punción seca y neuromodulación para lesiones persistentes.", color: "bg-slate-50" },
    { n: "03", t: "Readaptación", d: "Planes de ejercicio terapéutico para evitar que el dolor regrese.", color: "bg-blue-50" }
  ]

  return (
    <main className="pt-48 pb-24 px-8 max-w-7xl mx-auto">
      <div className="mb-24">
        <h2 className="text-[10px] font-black uppercase tracking-[6px] text-cyan-600 mb-6 underline decoration-2 underline-offset-8">Especialidades</h2>
        <h3 className="text-6xl md:text-8xl font-medium tracking-tighter leading-[0.9]">Soluciones <br/> <span className="italic font-light">reales.</span></h3>
      </div>

      <div className="grid gap-4">
        {servicios.map((s) => (
          <div key={s.n} className={`group relative overflow-hidden rounded-[3rem] p-12 transition-all hover:shadow-2xl hover:-translate-y-1 ${s.color} border border-slate-100`}>
            <span className="absolute -right-4 -bottom-10 text-[15rem] font-black opacity-5 text-slate-950 tracking-tighter leading-none select-none">
              {s.n}
            </span>
            
            <div className="relative z-10 grid md:grid-cols-2 items-center gap-12">
              <div>
                <h4 className="text-4xl font-bold text-slate-900 mb-6 uppercase tracking-tight">{s.t}</h4>
                <p className="text-xl text-slate-600 leading-relaxed max-w-sm">{s.d}</p>
              </div>
              <div className="flex justify-end">
                <Link href="/reserva" className="w-20 h-20 rounded-full bg-white border border-slate-200 flex items-center justify-center group-hover:bg-cyan-500 group-hover:text-white transition-all shadow-sm">
                  <ArrowUpRight size={32} />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}