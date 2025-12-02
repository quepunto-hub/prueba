"use client"

import { useAuth } from "@/contexts/AuthContext"
import { Crown } from "lucide-react"
import Link from "next/link"
import { ReactNode, useEffect, useState } from "react"

interface LegendContentProps {
  children: ReactNode
  className?: string
  showUpgradeMessage?: boolean
}

export default function LegendContent({ 
  children, 
  className = "",
  showUpgradeMessage = true 
}: LegendContentProps) {
  const { userType } = useAuth()
  const [isMounted, setIsMounted] = useState(false)

  // Evitar problemas de hidratación
  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Si no está montado aún, no mostrar nada (evita flashes)
  if (!isMounted) {
    return null
  }

  // Si es Legend, mostrar contenido SIN ningún bloqueo
  if (userType === 'legends') {
    return <div className={className}>{children}</div>
  }

  // Si es Amateur o Guest, mostrar contenido borroso con overlay
  return (
    <div className={`relative ${className}`}>
      {/* Contenido borroso */}
      <div className="blur-md pointer-events-none select-none">
        {children}
      </div>
      
      {/* Overlay de bloqueo */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/10 backdrop-blur-sm">
        {showUpgradeMessage && (
          <div className="rounded-lg bg-white/95 p-6 text-center shadow-xl max-w-sm mx-4">
            <div className="mb-3 flex justify-center">
              <div className="rounded-full bg-[#d4af37]/10 p-3">
                <Crown className="h-8 w-8 text-[#d4af37]" />
              </div>
            </div>
            <h3 className="mb-2 text-lg font-bold">Contenido Exclusivo LEGEND</h3>
            <p className="mb-4 text-sm text-neutral-600">
              Este contenido solo está disponible para usuarios Legend
            </p>
            <Link
              href="/legends"
              className="inline-flex items-center gap-2 rounded-full bg-[#d4af37] px-6 py-2.5 text-sm font-medium text-white hover:bg-[#b8941f] transition-colors"
            >
              <Crown className="h-4 w-4" />
              Únete a LEGEND
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}