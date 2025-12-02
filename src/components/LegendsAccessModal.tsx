"use client"

import { useState } from "react"
import { X, Crown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useRouter } from "next/navigation"

interface LegendsAccessModalProps {
  isOpen: boolean
  onClose: () => void
  redirectTo?: string
}

// Demo passwords shown for documentation only - NOT used in demo mode
const DEMO_PASSWORDS = ["Legend2025!", "TE-LEGEND-Access", "golden_entry2025"]

export default function LegendsAccessModal({ isOpen, onClose, redirectTo }: LegendsAccessModalProps) {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleDirectAccess = () => {
    setIsLoading(true)

    // Simulate brief loading for UX
    setTimeout(() => {
      // Store demo session (for logout functionality)
      localStorage.setItem("legends_session", JSON.stringify({
        timestamp: Date.now(),
        demo: true
      }))

      // Redirect or close
      if (redirectTo) {
        router.push(redirectTo)
      } else {
        router.push("/legends")
      }
      onClose()
      setIsLoading(false)
    }, 500)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <Card className="relative z-10 w-full max-w-md border-2 border-[#d4af37] bg-white p-8 shadow-2xl mx-4">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-neutral-400 transition-colors hover:text-neutral-600"
          aria-label="Cerrar modal"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="mb-6 flex justify-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#d4af37] to-[#b8941f]">
            <Crown className="h-10 w-10 text-white" />
          </div>
        </div>

        <h2 className="mb-2 text-center text-2xl font-bold">Acceso LEGEND - Demo</h2>
        <p className="mb-6 text-center text-sm text-neutral-600">
          Haz clic para acceder directamente al contenido exclusivo
        </p>

        <Button
          onClick={handleDirectAccess}
          disabled={isLoading}
          className="w-full bg-[#d4af37] py-6 text-base font-semibold hover:bg-[#b8941f] disabled:opacity-50"
        >
          {isLoading ? "Accediendo..." : "Iniciar Sesión"}
        </Button>

        <div className="mt-6 rounded-lg bg-neutral-50 p-4">
          <p className="mb-2 text-xs font-semibold text-neutral-700">
            📋 Contraseñas de ejemplo (solo documentación):
          </p>
          <ul className="space-y-1 text-xs text-neutral-600">
            {DEMO_PASSWORDS.map((pwd, idx) => (
              <li key={idx} className="font-mono">• {pwd}</li>
            ))}
          </ul>
          <p className="mt-3 text-xs italic text-neutral-500">
            ⚠️ En modo demo: el acceso es directo sin necesidad de contraseña.
            En producción, esto será reemplazado por autenticación real con usuarios y roles.
          </p>
        </div>

        <div className="mt-6 text-center">
          <a href="/legends" onClick={onClose} className="text-sm text-[#d4af37] hover:underline">
            Más información sobre LEGEND
          </a>
        </div>
      </Card>
    </div>
  )
}