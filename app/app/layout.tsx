"use client";
import './globals.css';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Estado para controlar si el menú del móvil está abierto o cerrado
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <html lang="es">
      <body className="bg-[#fcfcfc] text-slate-950 antialiased font-sans">
        <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-xl border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-5 md:px-8 h-20 md:h-24 flex justify-between items-center">
            
            {/* LOGO (Siempre visible) */}
            <Link href="/" className="group flex items-center gap-1 md:gap-2 z-50" onClick={() => setMenuAbierto(false)}>
              <span className="bg-slate-950 text-white px-3 py-1.5 rounded-sm font-black text-xl tracking-tighter">
                SACRO
              </span>
              <span className="text-cyan-500 font-black text-2xl">.</span>
            </Link>
            
            {/* MENÚ ORDENADOR (Oculto en móvil) */}
            <div className="hidden md:flex gap-12 items-center text-[11px] font-black uppercase tracking-[3px] text-slate-950">
              <Link href="/servicios" className="hover:text-cyan-600 transition-colors border-b-2 border-transparent hover:border-cyan-500 pb-1">
                Servicios_
              </Link>
              <Link href="/reserva" className="bg-cyan-500 text-white px-8 py-3.5 rounded-full hover:bg-slate-950 transition-all shadow-xl shadow-cyan-100">
                Reserva Online
              </Link>
            </div>

            {/* BOTÓN HAMBURGUESA MÓVIL (Oculto en ordenador) */}
            <button 
              className="md:hidden z-50 p-2 text-slate-950"
              onClick={() => setMenuAbierto(!menuAbierto)}
            >
              {menuAbierto ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>

          {/* DESPLEGABLE PANTALLA COMPLETA MÓVIL */}
          {menuAbierto && (
            <div className="md:hidden fixed inset-0 w-full h-screen bg-white flex flex-col items-center justify-center gap-12 z-40">
              <Link 
                href="/" 
                onClick={() => setMenuAbierto(false)}
                className="text-2xl font-black tracking-widest text-slate-950 uppercase"
              >
                Inicio
              </Link>
              <Link 
                href="/servicios" 
                onClick={() => setMenuAbierto(false)}
                className="text-2xl font-black tracking-widest text-slate-950 uppercase"
              >
                Servicios
              </Link>
              <Link 
                href="/reserva" 
                onClick={() => setMenuAbierto(false)}
                className="bg-cyan-500 text-white px-12 py-5 rounded-full shadow-xl shadow-cyan-100 text-xl font-black uppercase tracking-widest mt-4"
              >
                Reservar Sesión
              </Link>
            </div>
          )}
        </nav>
        {children}
      </body>
    </html>
  )
}