"use client"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { Lock } from "lucide-react"
import LegendsBadge from "@/components/LegendsBadge"
import LegendsCard from "@/components/LegendsCard"

const playerData = {
  name: "LAMINE YAMAL",
  number: "10",
  team: "FC Barcelona",
  teamLogo: "⚽",
  image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=600&h=600&fit=crop",
  stats: {
    goals: 7,
    assists: 9,
    successfulDribbles: "63%",
    expectedGoals: "0-5",
    expectedAssists: "3,5",
    shotAccuracy: 56
  }
}

export default function PlayerPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Player Header */}
        <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="md:col-span-1">
            <Card className="overflow-hidden">
              <div className="relative">
                <Image
                  src={playerData.image}
                  alt={playerData.name}
                  width={400}
                  height={400}
                  className="w-full object-cover"
                />
                <div className="absolute right-4 top-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#d4af37] text-2xl font-bold text-white">
                  {playerData.number}
                </div>
              </div>
            </Card>
          </div>

          <div className="md:col-span-2">
            <div className="mb-4 flex items-center gap-3">
              <span className="text-4xl">{playerData.teamLogo}</span>
              <div>
                <Badge className="mb-2">{playerData.team}</Badge>
                <h1 className="text-4xl font-bold">{playerData.name}</h1>
              </div>
            </div>

            {/* Basic Stats */}
            <div className="grid grid-cols-3 gap-4">
              <Card className="p-4 text-center">
                <p className="text-3xl font-bold text-[#d4af37]">{playerData.stats.goals}</p>
                <p className="text-sm text-neutral-600">GOLES</p>
              </Card>
              <Card className="p-4 text-center">
                <p className="text-3xl font-bold text-[#d4af37]">{playerData.stats.assists}</p>
                <p className="text-sm text-neutral-600">ASISTENCIAS</p>
              </Card>
              <Card className="p-4 text-center">
                <p className="text-3xl font-bold text-[#d4af37]">{playerData.stats.successfulDribbles}</p>
                <p className="text-sm text-neutral-600">% REGATES EXITOSOS</p>
              </Card>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Heat Map */}
            <Card className="p-6">
              <h2 className="mb-4 text-xl font-bold">Mapa de Calor</h2>
              <div className="relative aspect-[3/2] overflow-hidden rounded-lg bg-gradient-to-b from-green-600 via-yellow-500 to-red-600">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iIzIyOGI1NSIvPjxsaW5lIHgxPSIwIiB5MT0iMjAwIiB4Mj0iNjAwIiB5Mj0iMjAwIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiLz48Y2lyY2xlIGN4PSIzMDAiIGN5PSIyMDAiIHI9IjUwIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiIGZpbGw9Im5vbmUiLz48L3N2Zz4=')] bg-contain bg-center bg-no-repeat opacity-20" />
                </div>
                <div className="absolute right-1/4 top-1/4 h-32 w-32 rounded-full bg-red-500/60 blur-3xl" />
                <div className="absolute right-1/3 top-1/3 h-24 w-24 rounded-full bg-orange-500/50 blur-2xl" />
                <div className="absolute bottom-1/4 right-1/3 h-20 w-20 rounded-full bg-yellow-500/40 blur-xl" />
              </div>
              <p className="mt-4 text-sm text-neutral-600">
                Zona de mayor influencia: banda derecha y último tercio
              </p>
            </Card>

            {/* Actions - Detailed */}
            <Card className="p-6">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-xl font-bold">Acciones Decisivas</h2>
                <span className="text-4xl">{playerData.teamLogo}</span>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {/* Field Actions */}
                <div>
                  <h3 className="mb-3 font-semibold">Acciones en el Campo</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-blue-500" />
                      <span className="text-sm">Ganadas</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-red-500" />
                      <span className="text-sm">Perdidas</span>
                    </div>
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <div className="rounded-lg bg-neutral-50 p-3">
                      <p className="text-sm text-neutral-600">1° TIEMPO</p>
                      <div className="mt-2 flex gap-2">
                        <div className="flex flex-wrap gap-1">
                          {[...Array(8)].map((_, i) => (
                            <div key={i} className="h-2 w-2 rounded-full bg-blue-500" />
                          ))}
                          {[...Array(3)].map((_, i) => (
                            <div key={i} className="h-2 w-2 rounded-full bg-red-500" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="rounded-lg bg-neutral-50 p-3">
                      <p className="text-sm text-neutral-600">2° TIEMPO</p>
                      <div className="mt-2 flex gap-2">
                        <div className="flex flex-wrap gap-1">
                          {[...Array(6)].map((_, i) => (
                            <div key={i} className="h-2 w-2 rounded-full bg-blue-500" />
                          ))}
                          {[...Array(4)].map((_, i) => (
                            <div key={i} className="h-2 w-2 rounded-full bg-red-500" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Passes */}
                <div>
                  <h3 className="mb-3 font-semibold">Pases</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-purple-500" />
                      <span className="text-sm">Precisos</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-blue-600" />
                      <span className="text-sm">Jugadas clave</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-red-500" />
                      <span className="text-sm">No precisos</span>
                    </div>
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <div className="rounded-lg bg-neutral-50 p-3">
                      <p className="text-sm text-neutral-600">1° TIEMPO</p>
                      <div className="mt-2 flex gap-2">
                        <div className="flex flex-wrap gap-1">
                          {[...Array(10)].map((_, i) => (
                            <div key={i} className="h-2 w-2 rounded-full bg-purple-500" />
                          ))}
                          {[...Array(2)].map((_, i) => (
                            <div key={i} className="h-2 w-2 rounded-full bg-blue-600" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="rounded-lg bg-neutral-50 p-3">
                      <p className="text-sm text-neutral-600">2° TIEMPO</p>
                      <div className="mt-2 flex gap-2">
                        <div className="flex flex-wrap gap-1">
                          {[...Array(8)].map((_, i) => (
                            <div key={i} className="h-2 w-2 rounded-full bg-purple-500" />
                          ))}
                          {[...Array(3)].map((_, i) => (
                            <div key={i} className="h-2 w-2 rounded-full bg-blue-600" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Shot Accuracy - LEGEND */}
            <Card className="p-6">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-xl font-bold">Precisión de Tiro</h2>
                <LegendsBadge />
              </div>
              
              <LegendsCard
                title="ANÁLISIS DE PRECISIÓN"
                description="Mapa detallado de zonas de tiro, distribución por áreas y efectividad comparada"
              />
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Per Match Stats */}
            <Card className="bg-[#d4af37] p-6 text-white">
              <h3 className="mb-4 font-bold">POR PARTIDO</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm opacity-90">GOLES ESPERADOS</p>
                  <p className="text-3xl font-bold">{playerData.stats.expectedGoals}</p>
                </div>
                <div>
                  <p className="text-sm opacity-90">GOLES A FAVOR</p>
                  <p className="text-3xl font-bold">3,5</p>
                </div>
                <div>
                  <p className="text-sm opacity-90">GOLES EN CONTRA ESPERADOS</p>
                  <p className="text-3xl font-bold">1,2</p>
                </div>
                <div>
                  <p className="text-sm opacity-90">GOLES EN CONTRA</p>
                  <p className="text-3xl font-bold">2,8</p>
                </div>
              </div>
            </Card>

            {/* Advanced Metrics - LEGEND Locked */}
            <Card className="border-2 border-[#d4af37] p-6">
              <div className="mb-4 flex items-center gap-2">
                <Lock className="h-5 w-5 text-[#d4af37]" />
                <h3 className="font-bold">Coberturas Defensivas</h3>
              </div>
              
              <div className="rounded-full bg-[#d4af37] px-6 py-8 text-center">
                <Lock className="mx-auto mb-2 h-8 w-8 text-white" />
                <p className="font-bold text-white">SOLO PARA<br />LEGEND</p>
              </div>
            </Card>

            {/* More Stats */}
            <Card className="p-6">
              <h3 className="mb-4 font-bold">Estadísticas Avanzadas</h3>
              <div className="space-y-3">
                <div className="flex justify-between border-b pb-2">
                  <span className="text-sm">Asistencias esperadas</span>
                  <span className="font-bold">{playerData.stats.expectedAssists}</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="text-sm">Precisión de tiro</span>
                  <div className="flex items-center gap-2">
                    <Lock className="h-4 w-4 text-[#d4af37]" />
                    <LegendsBadge />
                  </div>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Pases con éxito</span>
                  <span className="font-bold">{playerData.stats.shotAccuracy}</span>
                </div>
              </div>
            </Card>

            {/* Entry Card */}
            <Card className="p-4">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm font-semibold">ENTRADAS P.P.</span>
                <span className="text-xl font-bold">2,3</span>
              </div>
              <div className="mb-2">
                <span className="text-sm font-semibold">ACCIONES VALOR GOL P.P.</span>
                <p className="text-xl font-bold">4,7</p>
              </div>
              <p className="font-bold">{playerData.name}</p>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}