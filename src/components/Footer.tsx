import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <p className="text-sm text-neutral-600">
              Análisis futbolístico basado en datos y métricas avanzadas
            </p>
          </div>
          <div>
            <h4 className="mb-4 font-semibold">Secciones</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-[#d4af37]">Inicio</Link></li>
              <li><Link href="/los-mas" className="hover:text-[#d4af37]">Los Más</Link></li>
              <li><Link href="/diccionario" className="hover:text-[#d4af37]">Diccionario</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-semibold">LEGEND</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/legends" className="hover:text-[#d4af37]">Área LEGEND</Link></li>
              <li><Link href="/legends/suscribirse" className="hover:text-[#d4af37]">Suscribirse</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-semibold">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacidad" className="hover:text-[#d4af37]">Privacidad</Link></li>
              <li><Link href="/terminos" className="hover:text-[#d4af37]">Términos</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-neutral-200 pt-8 text-center text-sm text-neutral-600">
          © {new Date().getFullYear()} The Expected. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}