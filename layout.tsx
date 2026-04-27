import './globals.css'
import Link from 'next/link'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-[#fcfcfc] text-slate-950 antialiased font-sans">
        <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-xl border-b border-slate-100">
          {/* Bajamos el padding horizontal en móvil (px-3) para ganar espacio a los lados */}
          <div className="max-w-7xl mx-auto px-3 sm:px-8 h-20 md:h-24 flex justify-between items-center">
            
            {/* LOGO: Un pelín más pequeño en móvil */}
            <Link href="/" className="group flex items-center gap-0.5 md:gap-2">
              <span className="bg-slate-950 text-white px-2.5 py-1 md:px-4 md:py-1.5 rounded-sm font-black text-base md:text-xl tracking-tighter">
                SACRO
              </span>
              <span className="text-cyan-500 font-black text-lg md:text-2xl">.</span>
            </Link>
            
            {/* MENÚ: Textos un poco más pequeños y márgenes reducidos en móvil */}
            <div className="flex gap-3 sm:gap-6 md:gap-12 items-center text-[9px] md:text-[11px] font-black uppercase tracking-[1px] md:tracking-[3px] text-slate-950">
              
              {/* SERVICIOS: Ya NO está oculto */}
              <Link href="/servicios" className="hover:text-cyan-600 transition-colors border-b-2 border-transparent hover:border-cyan-500 pb-0.5 md:pb-1">
                Servicios_
              </Link>
              
              {/* BOTÓN: En móvil dice "Reserva", en PC dice "Reserva Online" */}
              <Link href="/reserva" className="bg-cyan-500 text-white px-4 py-2.5 md:px-8 md:py-3.5 rounded-full hover:bg-slate-950 transition-all shadow-md md:shadow-xl shadow-cyan-100 text-center whitespace-nowrap">
                Reserva<span className="hidden sm:inline"> Online</span>
              </Link>
              
            </div>

          </div>
        </nav>
        {children}
      </body>
    </html>
  )
}