"use client"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { TrendingUp, Target, Zap, Activity, Award, MapPin, Lock, Crown, ChevronLeft, ChevronRight, Clock, Footprints, TrendingDown } from "lucide-react"
import { useAuth } from "@/contexts/AuthContext"
import Link from "next/link"
import LegendsBadge from "@/components/LegendsBadge"
import { useState } from "react"

const relatedArticles = [
  {
    title: "Lamine Yamal: El Récord de Precocidad que Marca Época",
    image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&h=600&fit=crop",
    category: "ANÁLISIS",
    date: "Hace 3 días"
  },
  {
    title: "Los Números del Fenómeno: Yamal vs Messi a los 17",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=600&fit=crop",
    category: "COMPARATIVA",
    date: "Hace 1 semana"
  },
  {
    title: "Banda Derecha: El Dominio Total de Lamine Yamal",
    image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=800&h=600&fit=crop",
    category: "TÁCTICA",
    date: "Hace 2 semanas"
  }
]

export default function LamineYamalPage() {
  const { userType } = useAuth()
  const isLegends = userType === 'legends'
  const [currentArticle, setCurrentArticle] = useState(0)

  const nextArticle = () => {
    setCurrentArticle((prev) => (prev + 1) % relatedArticles.length)
  }

  const prevArticle = () => {
    setCurrentArticle((prev) => (prev - 1 + relatedArticles.length) % relatedArticles.length)
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Player Header */}
        <div className="mb-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Player Photo */}
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/edcada77-6be0-4456-8471-5c5223fafc7d/generated_images/professional-football-player-portrait-la-d7b98ca2-20251130225123.jpg"
                alt="Lamine Yamal"
                fill
                className="object-cover"
              />
            </div>

            {/* Player Info */}
            <div className="md:col-span-2">
              <div className="mb-4 flex items-center gap-4">
                <div className="relative h-16 w-16">
                  <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/barcelona-1764596043358.png"
                    alt="FC Barcelona"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <h1 className="text-4xl font-bold">Lamine Yamal</h1>
                  <p className="text-xl text-neutral-600">FC Barcelona • #19</p>
                </div>
              </div>

              <div className="mb-6 grid grid-cols-2 gap-4 md:grid-cols-4">
                <div>
                  <p className="text-sm text-neutral-600">Posición</p>
                  <p className="text-lg font-bold">Extremo Derecho</p>
                </div>
                <div>
                  <p className="text-sm text-neutral-600">Edad</p>
                  <p className="text-lg font-bold">17 años</p>
                </div>
                <div>
                  <p className="text-sm text-neutral-600">Nacionalidad</p>
                  <p className="text-lg font-bold">España</p>
                </div>
                <div>
                  <p className="text-sm text-neutral-600">Altura</p>
                  <p className="text-lg font-bold">1.80 m</p>
                </div>
              </div>

              {/* Season Stats */}
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                <Card className="p-4 text-center">
                  <p className="text-3xl font-bold text-[#d4af37]">9</p>
                  <p className="text-sm text-neutral-600">Goles</p>
                </Card>
                <Card className="p-4 text-center">
                  <p className="text-3xl font-bold text-[#d4af37]">9</p>
                  <p className="text-sm text-neutral-600">Asistencias</p>
                </Card>
                <Card className="p-4 text-center">
                  <p className="text-3xl font-bold text-[#d4af37]">8.7</p>
                  <p className="text-sm text-neutral-600">xA</p>
                </Card>
                <Card className="p-4 text-center">
                  <p className="text-3xl font-bold text-[#d4af37]">9.2</p>
                  <p className="text-sm text-neutral-600">xG</p>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Articles Carousel */}
        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-bold">Artículos Relacionados</h2>
          <div className="relative">
            <Card className="overflow-hidden">
              <div className="relative h-64 md:h-80">
                {relatedArticles.map((article, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      index === currentArticle ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <div className="relative h-full w-full">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <div className="mb-3 flex items-center gap-3">
                          <Badge className="bg-white text-black">{article.category}</Badge>
                          <span className="text-sm text-white/80">{article.date}</span>
                        </div>
                        <h3 className="text-2xl font-bold">{article.title}</h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
            
            <button
              onClick={prevArticle}
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-2 backdrop-blur-sm hover:bg-white/30"
              aria-label="Artículo anterior"
            >
              <ChevronLeft className="h-5 w-5 text-white" />
            </button>
            <button
              onClick={nextArticle}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-2 backdrop-blur-sm hover:bg-white/30"
              aria-label="Siguiente artículo"
            >
              <ChevronRight className="h-5 w-5 text-white" />
            </button>

            <div className="mt-4 flex justify-center gap-2">
              {relatedArticles.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentArticle(index)}
                  className={`h-2 w-2 rounded-full transition-all ${
                    index === currentArticle ? "w-8 bg-[#d4af37]" : "bg-neutral-300"
                  }`}
                  aria-label={`Ir al artículo ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Advanced Metrics - LEGENDS Only */}
        {isLegends ? (
          <>
            <div className="mb-12">
              <div className="mb-6 flex items-center gap-3">
                <TrendingUp className="h-6 w-6 text-[#d4af37]" />
                <h2 className="text-2xl font-bold">Métricas Avanzadas</h2>
                <LegendsBadge />
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card className="p-6 border-2 border-[#d4af37]">
                  <div className="mb-4 flex items-center gap-2">
                    <Zap className="h-5 w-5 text-[#d4af37]" />
                    <h3 className="font-bold">xThreat</h3>
                  </div>
                  <p className="text-4xl font-bold text-[#d4af37]">0.89</p>
                  <p className="mt-2 text-sm text-neutral-600">
                    Amenaza esperada por acción. Líder de LaLiga.
                  </p>
                </Card>

                <Card className="p-6 border-2 border-[#d4af37]">
                  <div className="mb-4 flex items-center gap-2">
                    <Activity className="h-5 w-5 text-[#d4af37]" />
                    <h3 className="font-bold">Progresión</h3>
                  </div>
                  <p className="text-4xl font-bold text-[#d4af37]">124 m</p>
                  <p className="mt-2 text-sm text-neutral-600">
                    Metros progresados con el balón por partido.
                  </p>
                </Card>

                <Card className="p-6 border-2 border-[#d4af37]">
                  <div className="mb-4 flex items-center gap-2">
                    <Target className="h-5 w-5 text-[#d4af37]" />
                    <h3 className="font-bold">Impacto de Pases</h3>
                  </div>
                  <p className="text-4xl font-bold text-[#d4af37]">0.62</p>
                  <p className="mt-2 text-sm text-neutral-600">
                    xA generado por pase clave realizado.
                  </p>
                </Card>

                <Card className="p-6 border-2 border-[#d4af37]">
                  <div className="mb-4 flex items-center gap-2">
                    <Award className="h-5 w-5 text-[#d4af37]" />
                    <h3 className="font-bold">Duelos Ganados</h3>
                  </div>
                  <p className="text-4xl font-bold text-[#d4af37]">68%</p>
                  <p className="mt-2 text-sm text-neutral-600">
                    Porcentaje de duelos ofensivos ganados.
                  </p>
                </Card>

                <Card className="p-6 border-2 border-[#d4af37]">
                  <div className="mb-4 flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-[#d4af37]" />
                    <h3 className="font-bold">Toques en Área</h3>
                  </div>
                  <p className="text-4xl font-bold text-[#d4af37]">6.8</p>
                  <p className="mt-2 text-sm text-neutral-600">
                    Toques en área rival por partido.
                  </p>
                </Card>

                <Card className="p-6 border-2 border-[#d4af37]">
                  <div className="mb-4 flex items-center gap-2">
                    <Zap className="h-5 w-5 text-[#d4af37]" />
                    <h3 className="font-bold">Creación de Ocasiones</h3>
                  </div>
                  <p className="text-4xl font-bold text-[#d4af37]">3.2</p>
                  <p className="mt-2 text-sm text-neutral-600">
                    Ocasiones claras creadas por partido.
                  </p>
                </Card>
              </div>
            </div>

            {/* New Advanced Visual Stats Modules */}
            <div className="mb-12">
              <div className="mb-6 flex items-center gap-3">
                <Activity className="h-6 w-6 text-[#d4af37]" />
                <h2 className="text-2xl font-bold">Estadísticas Específicas del Jugador</h2>
                <LegendsBadge />
              </div>

              <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                {/* Minutos por Acción */}
                <Card className="p-6 border-2 border-[#d4af37]">
                  <div className="mb-4 flex items-center gap-2">
                    <Clock className="h-5 w-5 text-[#d4af37]" />
                    <h3 className="font-bold">Minutos por Acción Clave</h3>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <div className="mb-2 flex justify-between">
                        <span className="text-sm">Gol</span>
                        <span className="font-bold text-[#d4af37]">94 min</span>
                      </div>
                      <div className="h-3 overflow-hidden rounded-full bg-neutral-100">
                        <div className="h-full bg-[#d4af37]" style={{ width: '80%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="mb-2 flex justify-between">
                        <span className="text-sm">Asistencia</span>
                        <span className="font-bold text-[#d4af37]">89 min</span>
                      </div>
                      <div className="h-3 overflow-hidden rounded-full bg-neutral-100">
                        <div className="h-full bg-[#d4af37]" style={{ width: '85%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="mb-2 flex justify-between">
                        <span className="text-sm">Pase Clave</span>
                        <span className="font-bold text-[#d4af37]">28 min</span>
                      </div>
                      <div className="h-3 overflow-hidden rounded-full bg-neutral-100">
                        <div className="h-full bg-[#d4af37]" style={{ width: '95%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="mb-2 flex justify-between">
                        <span className="text-sm">Regate Exitoso</span>
                        <span className="font-bold text-[#d4af37]">19 min</span>
                      </div>
                      <div className="h-3 overflow-hidden rounded-full bg-neutral-100">
                        <div className="h-full bg-[#d4af37]" style={{ width: '100%' }}></div>
                      </div>
                    </div>
                  </div>
                  <p className="mt-4 text-xs text-neutral-500 italic">
                    Intervalos promedio de tiempo entre acciones decisivas
                  </p>
                </Card>

                {/* Zonas de Influencia */}
                <Card className="p-6 border-2 border-[#d4af37]">
                  <div className="mb-4 flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-[#d4af37]" />
                    <h3 className="font-bold">Zonas de Influencia</h3>
                  </div>
                  <div className="relative aspect-[3/2] overflow-hidden rounded-lg border border-[#d4af37]/20 bg-gradient-to-b from-green-700 to-green-600">
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iIzIyOGI1NSIvPjxsaW5lIHgxPSIwIiB5MT0iMjAwIiB4Mj0iNjAwIiB5Mj0iMjAwIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiLz48Y2lyY2xlIGN4PSIzMDAiIGN5PSIyMDAiIHI9IjUwIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiIGZpbGw9Im5vbmUiLz48L3N2Zz4=')] bg-contain bg-center bg-no-repeat opacity-20" />
                    {/* Zona derecha ataque */}
                    <div className="absolute right-[10%] top-[20%] h-32 w-32 rounded-full bg-red-500/70 blur-3xl" />
                    {/* Zona derecha media */}
                    <div className="absolute right-[25%] top-[35%] h-24 w-24 rounded-full bg-orange-500/60 blur-2xl" />
                    {/* Zona central */}
                    <div className="absolute right-[40%] top-[45%] h-20 w-20 rounded-full bg-yellow-500/50 blur-xl" />
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs">
                    <div>
                      <div className="mb-1 h-3 w-full rounded bg-red-500"></div>
                      <span className="font-bold">Alta</span>
                      <p className="text-neutral-600">Banda derecha</p>
                    </div>
                    <div>
                      <div className="mb-1 h-3 w-full rounded bg-orange-500"></div>
                      <span className="font-bold">Media</span>
                      <p className="text-neutral-600">Centro ataque</p>
                    </div>
                    <div>
                      <div className="mb-1 h-3 w-full rounded bg-yellow-500"></div>
                      <span className="font-bold">Baja</span>
                      <p className="text-neutral-600">Otras zonas</p>
                    </div>
                  </div>
                </Card>

                {/* Mapa de Conducciones */}
                <Card className="p-6 border-2 border-[#d4af37]">
                  <div className="mb-4 flex items-center gap-2">
                    <Footprints className="h-5 w-5 text-[#d4af37]" />
                    <h3 className="font-bold">Mapa de Conducciones</h3>
                  </div>
                  <div className="relative aspect-[3/2] overflow-hidden rounded-lg border border-[#d4af37]/20 bg-gradient-to-b from-green-700 to-green-600">
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iIzIyOGI1NSIvPjxsaW5lIHgxPSIwIiB5MT0iMjAwIiB4Mj0iNjAwIiB5Mj0iMjAwIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiLz48Y2lyY2xlIGN4PSIzMDAiIGN5PSIyMDAiIHI9IjUwIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiIGZpbGw9Im5vbmUiLz48L3N2Zz4=')] bg-contain bg-center bg-no-repeat opacity-20" />
                    
                    {/* Líneas de conducción */}
                    <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#d4af37" stopOpacity="0.3" />
                          <stop offset="100%" stopColor="#d4af37" stopOpacity="0.9" />
                        </linearGradient>
                      </defs>
                      {/* Conducción 1 */}
                      <path d="M 50 200 Q 200 150, 400 100" stroke="url(#lineGradient1)" strokeWidth="4" fill="none" />
                      {/* Conducción 2 */}
                      <path d="M 80 250 Q 220 200, 420 150" stroke="url(#lineGradient1)" strokeWidth="4" fill="none" />
                      {/* Conducción 3 */}
                      <path d="M 60 180 Q 180 120, 380 80" stroke="url(#lineGradient1)" strokeWidth="3" fill="none" />
                      {/* Conducción 4 */}
                      <path d="M 70 220 Q 200 180, 390 120" stroke="url(#lineGradient1)" strokeWidth="3" fill="none" />
                    </svg>
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-bold text-[#d4af37]">4.8</p>
                      <p className="text-xs text-neutral-600">Conducciones/partido</p>
                    </div>
                    <div>
                      <p className="font-bold text-[#d4af37]">124m</p>
                      <p className="text-xs text-neutral-600">Distancia promedio</p>
                    </div>
                  </div>
                </Card>

                {/* Secuencias que Terminan en Tiro */}
                <Card className="p-6 border-2 border-[#d4af37]">
                  <div className="mb-4 flex items-center gap-2">
                    <Target className="h-5 w-5 text-[#d4af37]" />
                    <h3 className="font-bold">Secuencias que Terminan en Tiro</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-3xl font-bold text-[#d4af37]">67%</p>
                        <p className="text-sm text-neutral-600">Tasa de conversión a tiro</p>
                      </div>
                      <div className="h-20 w-20 rounded-full border-8 border-[#d4af37] flex items-center justify-center">
                        <span className="text-lg font-bold">1°</span>
                      </div>
                    </div>
                    <div className="space-y-2 pt-4 border-t">
                      <div className="flex justify-between text-sm">
                        <span>Pases → Tiro</span>
                        <span className="font-bold">42%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Regates → Tiro</span>
                        <span className="font-bold">38%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Conducciones → Tiro</span>
                        <span className="font-bold">20%</span>
                      </div>
                    </div>
                  </div>
                  <p className="mt-4 text-xs text-neutral-500 italic">
                    Líder de LaLiga en acciones que generan tiros
                  </p>
                </Card>
              </div>
            </div>
          </>
        ) : (
          <Card className="mb-12 border-2 border-[#d4af37] bg-gradient-to-br from-[#d4af37]/10 to-transparent p-12 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#d4af37]/20">
              <Lock className="h-8 w-8 text-[#d4af37]" />
            </div>
            <div className="mb-4 flex items-center justify-center gap-2">
              <Crown className="h-6 w-6 text-[#d4af37]" />
              <h3 className="text-2xl font-bold">Métricas Avanzadas Bloqueadas</h3>
            </div>
            <p className="mx-auto mb-6 max-w-xl text-neutral-600">
              Accede a métricas premium como xThreat, progresión del balón, impacto de pases, minutos por acción, zonas de influencia, mapa de conducciones y secuencias exclusivas para suscriptores LEGENDS.
            </p>
            <Link
              href="/legends"
              className="inline-block rounded-full bg-[#d4af37] px-8 py-3 font-bold text-white hover:bg-[#b8941f]"
            >
              Unirse a LEGENDS
            </Link>
          </Card>
        )}

        {/* Heat Map - LEGENDS Only */}
        {isLegends ? (
          <div className="mb-12">
            <div className="mb-6 flex items-center gap-3">
              <MapPin className="h-6 w-6 text-[#d4af37]" />
              <h2 className="text-2xl font-bold">Mapa de Calor</h2>
              <LegendsBadge />
            </div>
            <Card className="p-6 border-2 border-[#d4af37]">
              <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-gradient-to-br from-green-900 to-green-700">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/edcada77-6be0-4456-8471-5c5223fafc7d/generated_images/football-pitch-heat-map-showing-player-p-ddb34dd0-20251201132912.jpg"
                  alt="Heat Map"
                  fill
                  className="object-cover opacity-90"
                />
              </div>
              <div className="mt-4 flex items-center justify-between">
                <p className="text-sm text-neutral-600">Últimos 5 partidos</p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 rounded bg-yellow-500"></div>
                    <span className="text-xs">Baja actividad</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 rounded bg-red-500"></div>
                    <span className="text-xs">Alta actividad</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        ) : (
          <Card className="mb-12 border-2 border-[#d4af37] bg-gradient-to-br from-[#d4af37]/10 to-transparent p-12 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#d4af37]/20">
              <Lock className="h-8 w-8 text-[#d4af37]" />
            </div>
            <div className="mb-4 flex items-center gap-2 justify-center">
              <MapPin className="h-6 w-6 text-[#d4af37]" />
              <h3 className="text-2xl font-bold">Mapa de Calor Bloqueado</h3>
            </div>
            <p className="mx-auto mb-6 max-w-xl text-neutral-600">
              Visualiza el mapa de calor completo de Lamine Yamal con todas las zonas de actividad, pases, regates y toques en área exclusivo para suscriptores LEGENDS.
            </p>
            <Link
              href="/legends"
              className="inline-block rounded-full bg-[#d4af37] px-8 py-3 font-bold text-white hover:bg-[#b8941f]"
            >
              Unirse a LEGENDS
            </Link>
          </Card>
        )}

        {/* Performance by Zone */}
        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-bold">Rendimiento por Zona</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <Card className="p-6">
              <h3 className="mb-4 font-bold">Ataque</h3>
              <div className="space-y-3">
                <div>
                  <div className="mb-1 flex justify-between text-sm">
                    <span>Goles</span>
                    <span className="font-bold">9</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-neutral-100">
                    <div className="h-full w-[90%] bg-[#d4af37]"></div>
                  </div>
                </div>
                <div>
                  <div className="mb-1 flex justify-between text-sm">
                    <span>Tiros</span>
                    <span className="font-bold">54</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-neutral-100">
                    <div className="h-full w-[85%] bg-[#d4af37]"></div>
                  </div>
                </div>
                <div>
                  <div className="mb-1 flex justify-between text-sm">
                    <span>Precisión</span>
                    <span className="font-bold">67%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-neutral-100">
                    <div className="h-full w-[67%] bg-[#d4af37]"></div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="mb-4 font-bold">Creación</h3>
              <div className="space-y-3">
                <div>
                  <div className="mb-1 flex justify-between text-sm">
                    <span>Asistencias</span>
                    <span className="font-bold">9</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-neutral-100">
                    <div className="h-full w-[90%] bg-[#d4af37]"></div>
                  </div>
                </div>
                <div>
                  <div className="mb-1 flex justify-between text-sm">
                    <span>Pases Clave</span>
                    <span className="font-bold">3.2/p</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-neutral-100">
                    <div className="h-full w-[80%] bg-[#d4af37]"></div>
                  </div>
                </div>
                <div>
                  <div className="mb-1 flex justify-between text-sm">
                    <span>Regates</span>
                    <span className="font-bold">4.8/p</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-neutral-100">
                    <div className="h-full w-[95%] bg-[#d4af37]"></div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="mb-4 font-bold">Físico</h3>
              <div className="space-y-3">
                <div>
                  <div className="mb-1 flex justify-between text-sm">
                    <span>Distancia</span>
                    <span className="font-bold">10.2 km/p</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-neutral-100">
                    <div className="h-full w-[85%] bg-[#d4af37]"></div>
                  </div>
                </div>
                <div>
                  <div className="mb-1 flex justify-between text-sm">
                    <span>Sprints</span>
                    <span className="font-bold">12.4/p</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-neutral-100">
                    <div className="h-full w-[88%] bg-[#d4af37]"></div>
                  </div>
                </div>
                <div>
                  <div className="mb-1 flex justify-between text-sm">
                    <span>Duelos</span>
                    <span className="font-bold">68%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-neutral-100">
                    <div className="h-full w-[68%] bg-[#d4af37]"></div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Recent Form */}
        <div>
          <h2 className="mb-6 text-2xl font-bold">Últimos Partidos</h2>
          <div className="space-y-4">
            {[
              { opponent: "Real Madrid", result: "W 3-1", rating: 9.2, goals: 1, assists: 1 },
              { opponent: "Atlético Madrid", result: "W 2-1", rating: 8.8, goals: 1, assists: 0 },
              { opponent: "Real Sociedad", result: "D 1-1", rating: 7.5, goals: 0, assists: 1 },
              { opponent: "Sevilla", result: "W 4-0", rating: 9.5, goals: 2, assists: 2 },
              { opponent: "Valencia", result: "W 2-0", rating: 8.3, goals: 1, assists: 0 }
            ].map((match, index) => (
              <Card key={index} className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Badge className={match.result.startsWith('W') ? 'bg-green-600' : match.result.startsWith('D') ? 'bg-yellow-600' : 'bg-red-600'}>
                      {match.result}
                    </Badge>
                    <span className="font-semibold">vs {match.opponent}</span>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-[#d4af37]">{match.rating}</p>
                      <p className="text-xs text-neutral-600">Rating</p>
                    </div>
                    <div className="text-center">
                      <p className="text-lg font-bold">{match.goals}</p>
                      <p className="text-xs text-neutral-600">Goles</p>
                    </div>
                    <div className="text-center">
                      <p className="text-lg font-bold">{match.assists}</p>
                      <p className="text-xs text-neutral-600">Asist.</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}