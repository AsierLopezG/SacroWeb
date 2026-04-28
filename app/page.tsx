import Link from "next/link";

export default function Home() {
  return (
    <div className="overflow-hidden bg-white">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          display: flex;
          width: 200%;
          animation: scroll 30s linear infinite;
        }
      `}} />

      {/* HERO */}
      <section className="pt-20 pb-32 px-6 text-center">
        <h1 className="text-6xl md:text-[8rem] font-medium tracking-tighter text-slate-900 leading-[0.85] mb-6">
          Tu mejor <br />
          <span className="text-[#00C4CC] italic font-serif">versión.</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-500 max-w-xl mx-auto mb-12 font-light">
          Odontología avanzada y diseño de sonrisa adaptado a ti. <br/>
          Tecnología clínica de alto rendimiento.
        </p>
        <Link href="/reservar" className="bg-[#00C4CC] text-white px-12 py-5 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-[#00A3A8] transition-all">
          Solicitar Diagnóstico
        </Link>
      </section>

      {/* TICKER MÓVIL */}
      <div className="relative h-24 mb-32 w-[110%] -left-[5%] transform -rotate-1 bg-[#F8FAFC] border-y border-slate-100 flex items-center overflow-hidden">
        <div className="animate-scroll items-center text-slate-900 text-2xl md:text-4xl font-black tracking-tighter uppercase whitespace-nowrap">
          <span className="mx-12 text-[#00C4CC]">✦</span> IMPLANTOLOGÍA
          <span className="mx-12 text-[#00C4CC]">✦</span> ESTÉTICA DENTAL
          <span className="mx-12 text-[#00C4CC]">✦</span> ORTODONCIA INVISIBLE
          <span className="mx-12 text-[#00C4CC]">✦</span> HIGIENE AVANZADA
          <span className="mx-12 text-[#00C4CC]">✦</span> IMPLANTOLOGÍA
          <span className="mx-12 text-[#00C4CC]">✦</span> ESTÉTICA DENTAL
          <span className="mx-12 text-[#00C4CC]">✦</span> ORTODONCIA INVISIBLE
          <span className="mx-12 text-[#00C4CC]">✦</span> HIGIENE AVANZADA
        </div>
      </div>

      {/* TESTIMONIOS */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-center mb-20">
        <span className="text-[10px] font-bold tracking-[0.3em] text-[#00C4CC] uppercase mb-4 block">TESTIMONIOS</span>
        <h2 className="text-4xl md:text-5xl font-light italic text-slate-900 mb-16">Lo que dicen nuestros pacientes</h2>
        
        <div className="bg-[#F8FAFC] rounded-[2rem] p-12 shadow-sm max-w-2xl mx-auto border border-slate-100 relative">
          <div className="text-[#00C4CC] flex justify-center gap-1 mb-6 text-xl">★★★★★</div>
          <p className="text-xl italic text-slate-700 leading-relaxed mb-8">
            Increíble trato. Entré con un dolor de muelas insoportable y en una sesión soy otra persona. El mejor equipo médico que he visitado.
          </p>
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-400">— CARLOS R.</span>
        </div>
      </section>

      {/* CONTACTO Y MAPA GENÉRICO */}
      <section className="py-24 px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <span className="text-[10px] font-bold tracking-[0.3em] text-[#00C4CC] uppercase mb-4 block">LOCALIZACIÓN_</span>
          <h2 className="text-5xl md:text-6xl font-medium tracking-tighter italic text-slate-900 mb-8">
            Tu clínica en el centro.
          </h2>
          <div className="space-y-8">
            <p className="text-slate-500 text-lg leading-relaxed">
              Ubicados en pleno centro, nuestras instalaciones cuentan con la última tecnología en radiología y cirugía dental.
            </p>
            <div className="flex gap-4 items-start">
              <div className="text-2xl text-[#00C4CC]">⚲</div>
              <div>
                <p className="font-bold text-slate-900">Calle Principal, 123</p>
                <p className="text-slate-500">28000, Tu Ciudad</p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[450px] bg-slate-100 rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-100">
           <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d194348.13981035548!2d-3.819619475765518!3d40.43786975924767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422997800a3c81%3A0xc436dec1618c2269!2sMadrid!5e0!3m2!1ses!2ses!4v1710000000000!5m2!1ses!2ses" 
            width="100%" 
            height="100%" 
            style={{border:0}} 
            allowFullScreen 
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  );
}