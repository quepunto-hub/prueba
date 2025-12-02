"use client"

import { Lock } from "lucide-react"
import { useState } from "react"
import LegendsAccessModal from "./LegendsAccessModal"

interface LegendsCardProps {
  title?: string
  description?: string
  redirectTo?: string
}

export default function LegendsCard({ 
  title = "ANÁLISIS AVANZADO",
  description = "Este contenido está reservado exclusivamente para LEGEND",
  redirectTo
}: LegendsCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <div className="rounded-lg border-2 border-[#d4af37] bg-gradient-to-br from-[#d4af37]/10 to-transparent p-6">
        <div className="mb-4 flex items-center gap-2">
          <Lock className="h-5 w-5 text-[#d4af37]" />
          <span className="font-bold text-[#d4af37]">SOLO PARA LEGEND</span>
        </div>
        <h3 className="mb-2 text-xl font-bold">{title}</h3>
        <p className="mb-4 text-sm text-neutral-600">{description}</p>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="inline-block rounded-full bg-[#d4af37] px-6 py-2 text-sm font-medium text-white hover:bg-[#b8941f] transition-colors"
        >
          Acceder a LEGEND
        </button>
      </div>

      <LegendsAccessModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        redirectTo={redirectTo}
      />
    </>
  )
}