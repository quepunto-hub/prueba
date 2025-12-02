"use client"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import LegendsBadge from "@/components/LegendsBadge"
import { Check, X, Lock, Crown, MapPin, Users, TrendingUp, Activity, Wind, Thermometer } from "lucide-react"
import { useAuth } from "@/contexts/AuthContext"
import Link from "next/link"
import Image from "next/image"

export default function MatchPreviewPage() {
  const { userType } = useAuth()
  const isLegend = userType === 'legends'

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Match Header */}
        <div className="mb-8">
          {/* Camp Nou Info - MEJORADO con datos inventados */}
          <Card className="mb-6 overflow-hidden border-2 border-[#d4af37]">
            <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-red-900 p-6">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
                <div className="flex items-center gap-3 rounded-lg bg-white/10 p-3 backdrop-blur-sm">
                  <MapPin className="h-6 w-6 text-[#d4af37]" />
                  <div>
                    <p className="text-xs uppercase text-white/80">Estadio</p>
                    <p className="font-bold text-white">Camp Nou</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 rounded-lg bg-white/10 p-3 backdrop-blur-sm">
                  <Users className="h-6 w-6 text-[#d4af37]" />
                  <div>
                    <p className="text-xs uppercase text-white/80">Aforo</p>
                    <p className="font-bold text-white">98,754</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 rounded-lg bg-white/10 p-3 backdrop-blur-sm">
                  <Thermometer className="h-6 w-6 text-[#d4af37]" />
                  <div>
                    <p className="text-xs uppercase text-white/80">Temperatura</p>
                    <p className="font-bold text-white">18°C</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 rounded-lg bg-white/10 p-3 backdrop-blur-sm">
                  <Wind className="h-6 w-6 text-[#d4af37]" />
                  <div>
                    <p className="text-xs uppercase text-white/80">Viento</p>
                    <p className="font-bold text-white">12 km/h SO</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 flex items-center justify-center gap-4 rounded-lg bg-[#d4af37]/20 p-3 backdrop-blur-sm">
                <Activity className="h-5 w-5 text-[#d4af37]" />
                <p className="text-sm font-medium text-white">
                  🏟️ Ventaja local: <span className="text-[#d4af37]">+12% xG</span> • Césped: Natural • Estado: Óptimo
                </p>
              </div>
            </div>
          </Card>
          
          <Card className="mb-6 overflow-hidden">
            <div className="bg-gradient-to-r from-neutral-900 to-neutral-800 p-8 text-white">
              <h1 className="mb-8 text-center text-3xl font-bold">PRÓXIMO PARTIDO</h1>
              
              <div className="mb-8 flex items-center justify-center gap-12">
                <div className="text-center">
                  <div className="relative mx-auto mb-3 h-20 w-20">
                    <Image
                      src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/barcelona-1764596043358.png"
                      alt="FC Barcelona"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="text-xl font-bold">FC BARCELONA</p>
                </div>
                <div className="text-4xl font-bold">VS</div>
                <div className="text-center">
                  <div className="relative mx-auto mb-3 h-20 w-20">
                    <Image
                      src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/athletic-1764596047133.png"
                      alt="Athletic Club"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="text-xl font-bold">ATHLETIC CLUB</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-6 text-center">
                <div className="rounded-lg bg-white/10 p-4">
                  <div className="mb-2 flex items-center justify-center gap-2">
                    <Check className="h-6 w-6 text-green-400" />
                    <span className="text-2xl font-bold text-green-400">63%</span>
                  </div>
                  <p className="text-xs uppercase">Victoria</p>
                </div>
                <div className="rounded-lg bg-white/10 p-4">
                  <div className="mb-2 text-2xl font-bold">17%</div>
                  <p className="text-xs uppercase">Empate</p>
                </div>
                <div className="rounded-lg bg-white/10 p-4">
                  <div className="mb-2 flex items-center justify-center gap-2">
                    <X className="h-6 w-6 text-red-400" />
                    <span className="text-2xl font-bold text-red-400">20%</span>
                  </div>
                  <p className="text-xs uppercase">Derrota</p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Head to Head - MEJORADO */}
            <Card className="p-6">
              <h2 className="mb-6 text-2xl font-bold">Análisis Head to Head</h2>
              
              {/* Estadísticas Generales */}
              <div className="mb-6 grid grid-cols-3 gap-4 rounded-lg bg-gradient-to-br from-[#d4af37]/10 to-transparent p-4">
                <div className="text-center">
                  <div className="mb-2 text-3xl font-bold text-[#d4af37]">7</div>
                  <p className="text-xs text-neutral-600">Victorias Barça</p>
                </div>
                <div className="text-center">
                  <div className="mb-2 text-3xl font-bold text-neutral-500">2</div>
                  <p className="text-xs text-neutral-600">Empates</p>
                </div>
                <div className="text-center">
                  <div className="mb-2 text-3xl font-bold text-neutral-700">1</div>
                  <p className="text-xs text-neutral-600">Victorias Athletic</p>
                </div>
              </div>
              
              {/* Últimos 5 Enfrentamientos */}
              <div className="mb-6">
                <h3 className="mb-3 text-sm font-bold text-neutral-700">Últimos 5 Enfrentamientos</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between rounded-lg bg-neutral-50 p-3">
                    <div className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-600" />
                      <span className="text-sm">Barcelona 3-1 Athletic</span>
                    </div>
                    <span className="text-xs text-neutral-500">J10 • 23/24</span>
                  </div>
                  <div className="flex items-center justify-between rounded-lg bg-neutral-50 p-3">
                    <div className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-600" />
                      <span className="text-sm">Athletic 0-2 Barcelona</span>
                    </div>
                    <span className="text-xs text-neutral-500">J28 • 22/23</span>
                  </div>
                  <div className="flex items-center justify-between rounded-lg bg-neutral-50 p-3">
                    <div className="flex items-center gap-2">
                      <X className="h-5 w-5 text-red-600" />
                      <span className="text-sm">Barcelona 0-1 Athletic</span>
                    </div>
                    <span className="text-xs text-neutral-500">J5 • 22/23</span>
                  </div>
                  <div className="flex items-center justify-between rounded-lg bg-neutral-50 p-3">
                    <div className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-600" />
                      <span className="text-sm">Barcelona 4-0 Athletic</span>
                    </div>
                    <span className="text-xs text-neutral-500">J18 • 21/22</span>
                  </div>
                  <div className="flex items-center justify-between rounded-lg bg-neutral-50 p-3">
                    <div className="flex items-center gap-2">
                      <div className="h-5 w-5 rounded-full bg-neutral-300" />
                      <span className="text-sm">Athletic 1-1 Barcelona</span>
                    </div>
                    <span className="text-xs text-neutral-500">J2 • 21/22</span>
                  </div>
                </div>
              </div>
              
              {/* Comparativa de Métricas */}
              <div>
                <h3 className="mb-3 text-sm font-bold text-neutral-700">Comparativa de Métricas (Últimos 10 Enfrentamientos)</h3>
                <div className="space-y-3">
                  <div>
                    <div className="mb-1 flex justify-between text-xs">
                      <span>Goles Promedio Barcelona</span>
                      <span className="font-bold text-[#d4af37]">2.6</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-neutral-100">
                      <div className="h-full bg-[#d4af37]" style={{ width: '65%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="mb-1 flex justify-between text-xs">
                      <span>Goles Promedio Athletic</span>
                      <span className="font-bold">0.8</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-neutral-100">
                      <div className="h-full bg-neutral-400" style={{ width: '20%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="mb-1 flex justify-between text-xs">
                      <span>xG Promedio Barcelona</span>
                      <span className="font-bold text-[#d4af37]">2.8</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-neutral-100">
                      <div className="h-full bg-[#d4af37]" style={{ width: '70%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="mb-1 flex justify-between text-xs">
                      <span>xG Promedio Athletic</span>
                      <span className="font-bold">1.1</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-neutral-100">
                      <div className="h-full bg-neutral-400" style={{ width: '27.5%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Forma Reciente */}
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div>
                  <h4 className="mb-2 text-xs font-bold text-neutral-700">Forma FC Barcelona (Últimos 5)</h4>
                  <div className="flex items-center gap-2">
                    <Check className="h-6 w-6 text-green-600" />
                    <Check className="h-6 w-6 text-green-600" />
                    <Check className="h-6 w-6 text-green-600" />
                    <div className="h-6 w-6 rounded-full bg-neutral-300" />
                    <Check className="h-6 w-6 text-green-600" />
                  </div>
                </div>
                <div>
                  <h4 className="mb-2 text-xs font-bold text-neutral-700">Forma Athletic Club (Últimos 5)</h4>
                  <div className="flex items-center gap-2">
                    <Check className="h-6 w-6 text-green-600" />
                    <X className="h-6 w-6 text-red-600" />
                    <div className="h-6 w-6 rounded-full bg-neutral-300" />
                    <Check className="h-6 w-6 text-green-600" />
                    <X className="h-6 w-6 text-red-600" />
                  </div>
                </div>
              </div>
            </Card>

            {/* Most Probable Result - LEGENDS EXCLUSIVE */}
            <Card className={`p-6 ${!isLegend ? 'border-2 border-[#d4af37]' : ''}`}>
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-2xl font-bold">Resultado Más Probable</h2>
                <LegendsBadge />
              </div>
              
              {isLegend ? (
                <>
                  <div className="rounded-lg bg-neutral-50 p-8 text-center">
                    <p className="mb-2 text-6xl font-bold text-[#d4af37]">3-1</p>
                    <p className="text-sm text-neutral-600">Probabilidad del 54%</p>
                  </div>
                  
                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <div>
                      <p className="mb-2 text-sm font-semibold">Barcelona</p>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>xG Esperado</span>
                          <span className="font-bold text-[#d4af37]">2.4</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Goles Favor</span>
                          <span className="font-bold text-[#d4af37]">3.1</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <p className="mb-2 text-sm font-semibold">Athletic Club</p>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>xG Esperado</span>
                          <span className="font-bold">1.2</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Goles Favor</span>
                          <span className="font-bold">1.5</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <div className="rounded-lg bg-neutral-50 p-12 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="rounded-full bg-[#d4af37]/10 p-6">
                      <Lock className="h-12 w-12 text-[#d4af37]" />
                    </div>
                  </div>
                  <h3 className="mb-2 text-xl font-bold">Contenido Exclusivo LEGEND</h3>
                  <p className="mb-6 text-sm text-neutral-600">
                    Accede al resultado más probable basado en análisis predictivo avanzado
                  </p>
                  <Link
                    href="/legends"
                    className="inline-flex items-center gap-2 rounded-full bg-[#d4af37] px-6 py-3 font-medium text-white hover:bg-[#b8941f]"
                  >
                    <Crown className="h-5 w-5" />
                    Acceder a LEGEND
                  </Link>
                </div>
              )}
            </Card>

            {/* Goals by Minute */}
            <Card className="p-6">
              <h2 className="mb-4 text-2xl font-bold">Goles por Minuto</h2>
              <div className="mb-4 text-sm text-neutral-600">
                Distribución temporal de goles esperados
              </div>
              
              <div className="flex items-end justify-between gap-2" style={{ height: '200px' }}>
                {[
                  { min: '0-10', pct: 6 },
                  { min: '11-20', pct: 6 },
                  { min: '21-30', pct: 15 },
                  { min: '31-40', pct: 15 },
                  { min: '41-50', pct: 17 },
                  { min: '51-60', pct: 11 },
                  { min: '61-70', pct: 11 },
                  { min: '71-80', pct: 4 },
                  { min: '81-90', pct: 15 }
                ].map((data, i) => (
                  <div key={i} className="flex flex-1 flex-col items-center">
                    <div 
                      className="w-full rounded-t-lg bg-gradient-to-t from-[#d4af37] via-orange-400 to-yellow-300"
                      style={{ height: `${data.pct * 10}px` }}
                    />
                    <p className="mt-2 text-xs">{data.min}'</p>
                    <p className="text-xs font-bold">{data.pct}%</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Probability Matrix */}
            <Card className="bg-neutral-50 p-6">
              <h2 className="mb-4 text-2xl font-bold">Matriz de Probabilidad</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-center text-xs">
                  <thead>
                    <tr>
                      <th className="p-2"></th>
                      <th className="p-2">0</th>
                      <th className="p-2">1</th>
                      <th className="p-2">2</th>
                      <th className="p-2">3</th>
                      <th className="p-2">4</th>
                      <th className="p-2">5</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      [10.0, 9.0, 8.0, 7.0, 6.0, 5.0],
                      [9.1, 10.1, 9.1, 8.0, 7.0, 6.0],
                      [8.0, 9.0, 10.0, 9.0, 8.0, 7.0],
                      [7.0, 8.0, 9.1, 11.1, 9.0, 8.0],
                      [6.0, 7.1, 8.2, 9.0, 10.0, 9.0],
                      [5.0, 6.0, 7.0, 8.0, 9.0, 10.0]
                    ].map((row, i) => (
                      <tr key={i}>
                        <td className="p-2 font-bold">{i}</td>
                        {row.map((val, j) => (
                          <td 
                            key={j} 
                            className={`p-2 ${
                              val > 10 ? 'bg-[#d4af37] font-bold text-white' : 
                              val > 9 ? 'bg-[#d4af37]/60' : 
                              'bg-white'
                            }`}
                          >
                            {val.toFixed(1)}%
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-4 flex justify-between text-xs">
                <span className="text-neutral-600">Goles Barcelona →</span>
                <span className="text-neutral-600">↑ Goles Athletic</span>
              </div>
            </Card>

            {/* Advanced Tactical Analysis - LEGENDS EXCLUSIVE */}
            <Card className={`p-6 ${!isLegend ? 'border-2 border-[#d4af37]' : ''}`}>
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-2xl font-bold">Análisis Táctico Profundo</h2>
                <LegendsBadge />
              </div>

              {isLegend ? (
                <>
                  <div className="mb-6 rounded-lg bg-[#d4af37]/10 p-6">
                    <h3 className="mb-4 font-bold text-lg">Sistema Esperado</h3>
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <p className="mb-2 text-sm font-semibold text-[#d4af37]">FC Barcelona</p>
                        <p className="mb-1 text-3xl font-bold">4-3-3</p>
                        <p className="text-xs text-neutral-600">Dominio de posesión con presión alta</p>
                      </div>
                      <div>
                        <p className="mb-2 text-sm font-semibold">Athletic Club</p>
                        <p className="mb-1 text-3xl font-bold">4-4-2</p>
                        <p className="text-xs text-neutral-600">Bloque medio-bajo compacto</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    <div className="rounded-lg bg-neutral-50 p-4 text-center">
                      <p className="mb-1 text-2xl font-bold text-[#d4af37]">87%</p>
                      <p className="text-xs text-neutral-600">Presión Alta Barça</p>
                    </div>
                    <div className="rounded-lg bg-neutral-50 p-4 text-center">
                      <p className="mb-1 text-2xl font-bold text-[#d4af37]">4.2 seg</p>
                      <p className="text-xs text-neutral-600">Transiciones Rápidas</p>
                    </div>
                    <div className="rounded-lg bg-neutral-50 p-4 text-center">
                      <p className="mb-1 text-2xl font-bold text-[#d4af37]">68%</p>
                      <p className="text-xs text-neutral-600">Dominio Tercio Final</p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h4 className="mb-3 font-bold">Claves del Encuentro</h4>
                    <ul className="space-y-2 text-sm text-neutral-700">
                      <li className="flex items-start gap-2">
                        <span className="text-[#d4af37]">•</span>
                        <span>Barcelona buscará explotar los espacios en las bandas con Yamal y Raphinha</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#d4af37]">•</span>
                        <span>Athletic intentará contener con bloque bajo y salir al contraataque</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#d4af37]">•</span>
                        <span>La presión alta del Barça será clave en los primeros 30 minutos</span>
                      </li>
                    </ul>
                  </div>
                </>
              ) : (
                <div className="rounded-lg bg-neutral-50 p-12 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="rounded-full bg-[#d4af37]/10 p-6">
                      <Lock className="h-12 w-12 text-[#d4af37]" />
                    </div>
                  </div>
                  <h3 className="mb-2 text-xl font-bold">Contenido Exclusivo LEGEND</h3>
                  <p className="mb-6 text-sm text-neutral-600">
                    Accede al análisis táctico completo: sistemas, presión, transiciones y claves estratégicas
                  </p>
                  <Link
                    href="/legends"
                    className="inline-flex items-center gap-2 rounded-full bg-[#d4af37] px-6 py-3 font-medium text-white hover:bg-[#b8941f]"
                  >
                    <Crown className="h-5 w-5" />
                    Acceder a LEGEND
                  </Link>
                </div>
              )}
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Match Stats */}
            <Card className="bg-[#d4af37] p-6 text-white">
              <h3 className="mb-4 font-bold">POR PARTIDO</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm opacity-90">GOLES ESPERADOS</p>
                  <p className="text-3xl font-bold">3,1</p>
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
                <div>
                  <p className="text-sm opacity-90">CÓRNERS</p>
                  <p className="text-3xl font-bold">7,8</p>
                </div>
                <div>
                  <p className="text-sm opacity-90">SAQUES DE BANDA</p>
                  <p className="text-3xl font-bold">45,5</p>
                </div>
                <div>
                  <p className="text-sm opacity-90">PASES COMPLETADOS</p>
                  <p className="text-3xl font-bold">654</p>
                </div>
              </div>
            </Card>

            {/* Key Players - AMPLIADO CON LAMINE YAMAL */}
            <Card className="p-6">
              <h3 className="mb-4 font-bold">Jugadores Clave</h3>
              <div className="space-y-4">
                {/* Lamine Yamal - DESTACADO Y AMPLIADO */}
                <div className="rounded-lg border-2 border-[#d4af37] bg-[#d4af37]/5 p-3">
                  <div className="mb-2 flex items-center gap-2">
                    <div className="relative h-10 w-10 overflow-hidden rounded-full">
                      <Image
                        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/edcada77-6be0-4456-8471-5c5223fafc7d/generated_images/professional-football-player-portrait-la-d7b98ca2-20251130225123.jpg"
                        alt="Lamine Yamal"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-bold">Lamine Yamal</p>
                      <p className="text-xs text-neutral-600">⭐ Jugador a seguir</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="rounded bg-white/50 p-2">
                      <p className="text-[10px] text-neutral-600">xG</p>
                      <p className="font-bold text-[#d4af37]">0.8</p>
                    </div>
                    <div className="rounded bg-white/50 p-2">
                      <p className="text-[10px] text-neutral-600">xA</p>
                      <p className="font-bold text-[#d4af37]">1.2</p>
                    </div>
                    <div className="rounded bg-white/50 p-2">
                      <p className="text-[10px] text-neutral-600">Regates</p>
                      <p className="font-bold text-[#d4af37]">7.4</p>
                    </div>
                    <div className="rounded bg-white/50 p-2">
                      <p className="text-[10px] text-neutral-600">Pases Clave</p>
                      <p className="font-bold text-[#d4af37]">3.8</p>
                    </div>
                  </div>
                  <p className="mt-2 text-[10px] italic text-neutral-600">
                    💫 Mejor rendimiento en banda derecha • 89% precisión últimos 3 partidos
                  </p>
                </div>
                
                <div className="flex items-center justify-between border-b pb-2">
                  <span className="text-sm">Lewandowski</span>
                  <span className="text-sm font-bold text-[#d4af37]">xG: 1.2</span>
                </div>
                <div className="flex items-center justify-between border-b pb-2">
                  <span className="text-sm">Pedri</span>
                  <span className="text-sm font-bold text-[#d4af37]">xA: 1.1</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Raphinha</span>
                  <span className="text-sm font-bold text-[#d4af37]">xG+xA: 1.5</span>
                </div>
              </div>
            </Card>

            {/* Datos Adicionales - NUEVA SECCIÓN */}
            <Card className="p-6">
              <h3 className="mb-4 flex items-center gap-2 font-bold">
                <TrendingUp className="h-5 w-5 text-[#d4af37]" />
                Datos del Partido
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between rounded-lg bg-neutral-50 p-2">
                  <span className="text-neutral-600">Posesión Esperada</span>
                  <span className="font-bold">67% - 33%</span>
                </div>
                <div className="flex justify-between rounded-lg bg-neutral-50 p-2">
                  <span className="text-neutral-600">Tiros Totales</span>
                  <span className="font-bold">18 - 9</span>
                </div>
                <div className="flex justify-between rounded-lg bg-neutral-50 p-2">
                  <span className="text-neutral-600">Pases Esperados</span>
                  <span className="font-bold">654 - 387</span>
                </div>
                <div className="flex justify-between rounded-lg bg-neutral-50 p-2">
                  <span className="text-neutral-600">Duelos Aéreos</span>
                  <span className="font-bold">12 - 18</span>
                </div>
                <div className="flex justify-between rounded-lg bg-neutral-50 p-2">
                  <span className="text-neutral-600">Tarjetas Amarillas</span>
                  <span className="font-bold">2.1 - 2.8</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}