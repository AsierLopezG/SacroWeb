import Link from "next/link";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="bg-white text-slate-900 antialiased font-sans selection:bg-[#00C4CC] selection:text-white">
        
        {/* NAVEGACIÓN ESTILO PREMIUM */}
        <nav className="fixed top-0 w-full z-[100] bg-white/90 backdrop-blur-md px-6 md:px-12 py-6 flex justify-between items-center border-b border-slate-100">
          <Link href="/" className="flex items-end gap-1 group">
            <div className="text-slate-900 text-2xl font-black tracking-tighter uppercase">
              CLÍNICA
            </div>
            <div className="w-2.5 h-2.5 bg-[#00C4CC] mb-1.5"></div>
          </Link>

          <div className="flex items-center gap-8">
            <Link href="/servicios" className="hidden md:block text-xs font-bold tracking-[0.2em] uppercase text-slate-900 hover:text-[#00C4CC] transition-colors">
              SERVICIOS_
            </Link>
            <Link href="/reservar" className="bg-[#00C4CC] text-white px-8 py-3 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-[#00A3A8] transition-all shadow-lg shadow-[#00C4CC]/30">
              RESERVA ONLINE
            </Link>
          </div>
        </nav>
        
        <main className="pt-28">{children}</main>
        
        {/* FOOTER GENÉRICO */}
        <footer className="bg-[#F8FAFC] text-slate-900 py-16 px-6 md:px-12 border-t border-slate-200">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="flex items-end gap-1 mb-8 md:mb-0">
              <span className="text-2xl font-black tracking-tighter uppercase">CLÍNICA</span>
              <div className="w-2 h-2 bg-[#00C4CC] mb-1.5"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
              <div>
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-400 mb-4">UBICACIÓN</p>
                <p className="text-sm font-medium leading-relaxed">
                  Calle Principal, 123<br />
                  Tu Ciudad, 28000
                </p>
              </div>
              <div>
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-400 mb-4">CONTACTO</p>
                <p className="text-sm font-medium">900 00 00 00</p>
                <p className="text-sm font-medium text-slate-500">contacto@tuclinica.com</p>
              </div>
            </div>
          </div>
        </footer>

        {/* BOTÓN WHATSAPP */}
        <a 
          href="https://wa.me/34600000000" 
          target="_blank" 
          rel="noopener noreferrer"
          className="fixed bottom-8 right-8 bg-[#25D366] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform z-[100]"
        >
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.031 0C5.408 0 .041 5.372.041 11.986c0 2.12.553 4.186 1.6 6.002L.003 24l6.155-1.614a11.914 11.914 0 005.873 1.53h.005c6.621 0 11.988-5.374 11.988-11.988 0-3.21-1.251-6.227-3.52-8.497A11.942 11.942 0 0012.03 0zm0 21.905c-1.802 0-3.567-.484-5.114-1.401l-.367-.216-3.8.995 1.01-3.7-.238-.378a9.92 9.92 0 01-1.516-5.218c0-5.485 4.464-9.948 9.953-9.948 2.658 0 5.155 1.036 7.034 2.916a9.89 9.89 0 012.91 7.032c0 5.484-4.466 9.948-9.952 9.948zm5.45-7.447c-.299-.15-1.77-.874-2.045-.974-.275-.101-.476-.15-.676.15-.2.3-.775.975-.95 1.176-.176.2-.351.225-.65.075-.299-.15-1.263-.466-2.406-1.488-.89-.794-1.49-1.775-1.666-2.075-.176-.3-.019-.462.13-.611.135-.135.299-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.676-1.625-.925-2.225-.242-.582-.488-.503-.676-.513-.174-.009-.374-.009-.575-.009a1.11 1.11 0 00-.8.375c-.275.3-1.05 1.025-1.05 2.5 0 1.475 1.075 2.9 1.225 3.1.15.2 2.115 3.226 5.12 4.525 2.13 1.025 2.766 1.045 3.325.992.57-.054 1.77-.723 2.02-1.423.25-.7.25-1.301.175-1.425-.075-.125-.275-.2-.575-.35z"></path>
          </svg>
        </a>
      </body>
    </html>
  );
}