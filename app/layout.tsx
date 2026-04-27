"use client";
import './globals.css';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <html lang="es">
      <body className="bg-[#fcfcfc] text-slate-950 antialiased font-sans flex flex-col min-h-screen">
        
        {/* NAVEGACIÓN */}
        <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-xl border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-5 md:px-8 h-20 md:h-24 flex justify-between items-center">
            
            <Link href="/" className="group flex items-center gap-1 md:gap-2 z-50" onClick={() => setMenuAbierto(false)}>
              <span className="bg-slate-950 text-white px-3 py-1.5 rounded-sm font-black text-xl tracking-tighter">
                SACRO
              </span>
              <span className="text-cyan-500 font-black text-2xl">.</span>
            </Link>
            
            <div className="hidden md:flex gap-12 items-center text-[11px] font-black uppercase tracking-[3px] text-slate-950">
              <Link href="/servicios" className="hover:text-cyan-600 transition-colors border-b-2 border-transparent hover:border-cyan-500 pb-1">
                Servicios_
              </Link>
              <Link href="/reserva" className="bg-cyan-500 text-white px-8 py-3.5 rounded-full hover:bg-slate-950 transition-all shadow-xl shadow-cyan-100">
                Reserva Online
              </Link>
            </div>

            <button 
              className="md:hidden z-50 p-2 text-slate-950"
              onClick={() => setMenuAbierto(!menuAbierto)}
            >
              {menuAbierto ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>

          {menuAbierto && (
            <div className="md:hidden fixed inset-0 w-full h-screen bg-white flex flex-col items-center justify-center gap-12 z-40">
              <Link href="/" onClick={() => setMenuAbierto(false)} className="text-2xl font-black tracking-widest text-slate-950 uppercase">
                Inicio
              </Link>
              <Link href="/servicios" onClick={() => setMenuAbierto(false)} className="text-2xl font-black tracking-widest text-slate-950 uppercase">
                Servicios
              </Link>
              <Link href="/reserva" onClick={() => setMenuAbierto(false)} className="bg-cyan-500 text-white px-12 py-5 rounded-full shadow-xl shadow-cyan-100 text-xl font-black uppercase tracking-widest mt-4">
                Reservar Sesión
              </Link>
            </div>
          )}
        </nav>

        {/* CONTENIDO DE LAS PÁGINAS */}
        <div className="flex-grow">
          {children}
        </div>

        {/* BOTÓN FLOTANTE DE WHATSAPP */}
        {/* Cambia el número 34600000000 por el real de la clínica */}
        <a 
          href="https://wa.me/34600000000?text=Hola,%20quería%20información%20sobre%20las%20sesiones" 
          target="_blank" 
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 md:bottom-10 md:right-10 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform z-50 flex items-center justify-center"
        >
          <MessageCircle size={32} />
        </a>

        {/* FOOTER (PIE DE PÁGINA) */}
        <footer className="bg-slate-950 text-slate-400 py-12 text-center text-[10px] md:text-xs tracking-[3px] uppercase mt-auto">
          <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="text-white font-black text-lg tracking-tighter">SACRO.</span>
              <span>© {new Date().getFullYear()}</span>
            </div>
            <div className="flex gap-6">
              <Link href="/servicios" className="hover:text-cyan-500 transition-colors">Tratamientos</Link>
              <Link href="/reserva" className="hover:text-cyan-500 transition-colors">Citas</Link>
            </div>
            <p className="opacity-50">C. de Ramón Luján, 45, Usera</p>
          </div>
        </footer>

      </body>
    </html>
  )
}