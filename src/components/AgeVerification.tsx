"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { X } from "lucide-react"

export default function AgeVerification() {
  const [isVisible, setIsVisible] = useState(false)
  const [isRejected, setIsRejected] = useState(false)

  useEffect(() => {
    const ageVerified = localStorage.getItem("ageVerified")
    if (!ageVerified) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("ageVerified", "true")
    setIsVisible(false)
  }

  const handleReject = () => {
    setIsRejected(true)
  }

  const handleClose = () => {
    setIsVisible(false)
    setIsRejected(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 animate-in slide-in-from-bottom-5 duration-500">
      <Card className="mx-auto max-w-5xl border-t-4 border-[#d4af37] bg-white shadow-2xl">
        {!isRejected ? (
          <div className="flex flex-col items-center gap-4 p-6 sm:flex-row sm:justify-between">
            <div className="flex-1 text-center sm:text-left">
              <h3 className="mb-1 text-lg font-bold">🔞 Verificación de Edad</h3>
              <p className="text-sm text-neutral-600">
                Este sitio contiene contenido relacionado con análisis estadístico de fútbol. 
                <span className="font-semibold"> ¿Eres mayor de 18 años?</span>
              </p>
            </div>

            <div className="flex gap-3">
              <button
                onClick={handleAccept}
                className="rounded-lg bg-[#d4af37] px-6 py-2.5 font-bold text-white transition-colors hover:bg-[#b8941f]"
              >
                Sí, soy mayor de edad
              </button>
              <button
                onClick={handleReject}
                className="rounded-lg border-2 border-neutral-300 bg-white px-6 py-2.5 font-bold text-black transition-colors hover:bg-neutral-50"
              >
                No
              </button>
            </div>
          </div>
        ) : (
          <div className="relative p-6">
            <button
              onClick={handleClose}
              className="absolute right-4 top-4 text-neutral-400 hover:text-neutral-600"
              aria-label="Cerrar"
            >
              <X className="h-5 w-5" />
            </button>
            
            <div className="text-center">
              <h3 className="mb-2 text-xl font-bold text-red-600">❌ Acceso Denegado</h3>
              <p className="text-sm text-neutral-600">
                Lo sentimos, debes ser mayor de 18 años para acceder a este sitio. Por favor, vuelve cuando cumplas la edad requerida.
              </p>
            </div>
          </div>
        )}
      </Card>
    </div>
  )
}