import './globals.css'
import Link from 'next/link'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-[#fcfcfc] text-slate-950 antialiased font-sans">
        <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-xl border-b border-slate-100">
          {/* Ajustamos el padding y la altura para móvil (h-20) y PC (md:h-24) */}
          <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 md:h-24 flex justify-between items-center">
            
            <Link href="/" className="group flex items-center gap-1 md:gap-2">
              <span className="bg-slate-950 text-white px-3 py-1 md:px-4 md:py-1.5 rounded-sm font-black text-lg md:text-xl tracking-tighter">
                SACRO
              </span>
              <span className="text-cyan-500 font-black text-xl md:text-2xl">.</span>
            </Link>
            
            <div className="flex gap-4 md:gap-12 items-center text-[10px] md:text-[11px] font-black uppercase tracking-[2px] md:tracking-[3px] text-slate-950">
              {/* Ocultamos "Servicios" en móvil (hidden sm:block) para que no se aplaste */}
              <Link href="/servicios" className="hidden sm:block hover:text-cyan-600 transition-colors border-b-2 border-transparent hover:border-cyan-500 pb-1">
                Servicios_
              </Link>
              {/* Ajustamos el tamaño del botón en móvil */}
              <Link href="/reserva" className="bg-cyan-500 text-white px-5 py-2.5 md:px-8 md:py-3.5 rounded-full hover:bg-slate-950 transition-all shadow-md md:shadow-xl shadow-cyan-100 text-center">
                Reserva Online
              </Link>
            </div>

          </div>
        </nav>
        {children}
      </body>
    </html>
  )
}