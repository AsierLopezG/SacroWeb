import './globals.css'
import Link from 'next/link'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-[#fcfcfc] text-slate-950 antialiased font-sans">
        <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-8 h-24 flex justify-between items-center">
            {/* LOGO TIPO CÁPSULA: Imposible no verlo */}
            <Link href="/" className="group flex items-center gap-2">
              <span className="bg-slate-950 text-white px-4 py-1.5 rounded-sm font-black text-xl tracking-tighter transition-transform group-hover:scale-105">
                SACRO
              </span>
              <span className="text-cyan-500 font-black text-2xl">.</span>
            </Link>
            
            <div className="flex gap-12 items-center text-[11px] font-black uppercase tracking-[3px] text-slate-950">
              <Link href="/servicios" className="hover:text-cyan-600 transition-colors border-b-2 border-transparent hover:border-cyan-500 pb-1">
                Servicios_
              </Link>
              <Link href="/reserva" className="bg-cyan-500 text-white px-8 py-3.5 rounded-full hover:bg-slate-950 transition-all shadow-xl shadow-cyan-100">
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