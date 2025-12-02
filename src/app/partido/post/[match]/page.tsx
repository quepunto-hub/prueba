"use client"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { TrendingUp, TrendingDown, Minus, Crown, Lock } from "lucide-react"
import LegendsBadge from "@/components/LegendsBadge"
import { useAuth } from "@/contexts/AuthContext"
import Link from "next/link"

// Estado de forma: últimos 5 partidos (W=Victoria, D=Empate, L=Derrota)
const barcelonaForm = [
  { result: 'W', score: '3-1' },
  { result: 'W', score: '2-0' },
  { result: 'D', score: '1-1' },
  { result: 'W', score: '4-2' },
  { result: 'W', score: '2-1' }
]

const athleticForm = [
  { result: 'L', score: '1-3' },
  { result: 'W', score: '2-1' },
  { result: 'D', score: '0-0' },
  { result: 'L', score: '0-2' },
  { result: 'W', score: '3-2' }
]

export default function PostMatchPage() {
  const { userType } = useAuth()
  const isLegend = userType === 'legends'

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Match Result Header - MEJORADO VISUALMENTE */}
        <Card className="mb-8 overflow-hidden shadow-2xl">
          <div className="bg-gradient-to-r from-neutral-900 to-neutral-800 p-12 text-white">
            <div className="mb-8 flex justify-center gap-4">
              <Badge className="bg-red-600 text-white font-bold text-sm">POSTPARTIDO</Badge>
              <Badge className="bg-neutral-700 text-white font-bold text-sm">JORNADA 15</Badge>
            </div>
            
            {/* Team Badges and Score */}
            <div className="mb-10 flex items-center justify-center gap-12 md:gap-20">
              <div className="text-center">
                <div className="relative mx-auto mb-4 h-28 w-28 rounded-full bg-white/10 p-4 backdrop-blur-sm">
                  <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/barcelona-1764596043358.png"
                    alt="FC Barcelona"
                    fill
                    className="object-contain p-2"
                  />
                </div>
                <p className="text-2xl font-bold">FC BARCELONA</p>
                <p className="text-sm text-[#d4af37] mt-1">1º en LaLiga</p>
              </div>
              
              <div className="text-center">
                <h1 className="text-7xl font-bold tracking-wider">3-1</h1>
              </div>
              
              <div className="text-center">
                <div className="relative mx-auto mb-4 h-28 w-28 rounded-full bg-white/10 p-4 backdrop-blur-sm">
                  <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/athletic-1764596047133.png"
                    alt="Athletic Club"
                    fill
                    className="object-contain p-2"
                  />
                </div>
                <p className="text-2xl font-bold">ATHLETIC CLUB</p>
                <p className="text-sm text-neutral-400 mt-1">5º en LaLiga</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              <div className="rounded-xl bg-white/10 p-4 backdrop-blur-sm text-center">
                <p className="text-sm text-neutral-400 uppercase tracking-wide">POSESIÓN</p>
                <p className="text-3xl font-bold">68%</p>
              </div>
              <div className="rounded-xl bg-white/10 p-4 backdrop-blur-sm text-center">
                <p className="text-sm text-neutral-400 uppercase tracking-wide">xG</p>
                <p className="text-3xl font-bold text-[#d4af37]">2.7</p>
              </div>
              <div className="rounded-xl bg-white/10 p-4 backdrop-blur-sm text-center">
                <p className="text-sm text-neutral-400 uppercase tracking-wide">TIROS</p>
                <p className="text-3xl font-bold">18</p>
              </div>
              <div className="rounded-xl bg-white/10 p-4 backdrop-blur-sm text-center">
                <p className="text-sm text-neutral-400 uppercase tracking-wide">PRECISIÓN</p>
                <p className="text-3xl font-bold">61%</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Stadium Info - DISEÑO MEJORADO */}
        <Card className="mb-8 overflow-hidden shadow-lg">
          <div className="relative bg-gradient-to-br from-[#004d98] to-[#a50044] p-8 text-white">
            <div className="absolute right-8 top-8 text-8xl opacity-10">🏟️</div>
            <div className="relative z-10">
              <h2 className="mb-3 text-4xl font-bold">Camp Nou</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="rounded-lg bg-white/10 p-3 backdrop-blur-sm">
                  <p className="text-xs uppercase text-blue-200">Capacidad</p>
                  <p className="text-lg font-bold">99,354</p>
                </div>
                <div className="rounded-lg bg-white/10 p-3 backdrop-blur-sm">
                  <p className="text-xs uppercase text-blue-200">Asistencia</p>
                  <p className="text-lg font-bold">87,432</p>
                </div>
                <div className="rounded-lg bg-white/10 p-3 backdrop-blur-sm">
                  <p className="text-xs uppercase text-blue-200">Temperatura</p>
                  <p className="text-lg font-bold">22°C</p>
                </div>
                <div className="rounded-lg bg-white/10 p-3 backdrop-blur-sm">
                  <p className="text-xs uppercase text-blue-200">Árbitro</p>
                  <p className="text-lg font-bold">Gil Manzano</p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Form & League Position */}
        <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card className="p-6">
            <div className="mb-4 flex items-center gap-3">
              <div className="relative h-10 w-10">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/barcelona-1764596043358.png"
                  alt="FC Barcelona"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-bold">FC Barcelona</h3>
                <p className="text-xs text-neutral-500">Últimos 5 partidos</p>
              </div>
            </div>
            <div className="flex gap-2">
              {barcelonaForm.map((match, index) => (
                <div
                  key={index}
                  className={`flex h-12 w-12 flex-col items-center justify-center rounded-lg text-xs font-bold text-white ${
                    match.result === 'W' ? 'bg-green-600' :
                    match.result === 'D' ? 'bg-neutral-400' :
                    'bg-red-600'
                  }`}
                >
                  <span>{match.result}</span>
                  <span className="text-[10px] opacity-75">{match.score}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <div className="mb-4 flex items-center gap-3">
              <div className="relative h-10 w-10">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/athletic-1764596047133.png"
                  alt="Athletic Club"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-bold">Athletic Club</h3>
                <p className="text-xs text-neutral-500">Últimos 5 partidos</p>
              </div>
            </div>
            <div className="flex gap-2">
              {athleticForm.map((match, index) => (
                <div
                  key={index}
                  className={`flex h-12 w-12 flex-col items-center justify-center rounded-lg text-xs font-bold text-white ${
                    match.result === 'W' ? 'bg-green-600' :
                    match.result === 'D' ? 'bg-neutral-400' :
                    'bg-red-600'
                  }`}
                >
                  <span>{match.result}</span>
                  <span className="text-[10px] opacity-75">{match.score}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Match Story */}
            <Card className="p-6">
              <h2 className="mb-4 text-2xl font-bold">La Historia del Partido</h2>
              <div className="prose max-w-none">
                <p className="mb-4 text-neutral-700">
                  El FC Barcelona dominó de principio a fin ante el Athletic Club, confirmando las 
                  proyecciones pre-partido con una actuación sólida tanto ofensiva como defensivamente.
                </p>
                <div className="my-6 rounded-lg bg-[#d4af37]/10 border-l-4 border-[#d4af37] p-4">
                  <div className="mb-2 flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-[#d4af37]" />
                    <span className="font-bold text-[#d4af37]">Minuto 23'</span>
                    <span className="ml-auto text-sm text-neutral-600">xG: 0.42</span>
                  </div>
                  <p className="text-sm flex items-center gap-2">
                    <span className="inline-flex h-5 w-5 relative flex-shrink-0">
                      <Image
                        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/barcelona-1764596043358.png"
                        alt="FC Barcelona"
                        fill
                        className="object-contain"
                      />
                    </span>
                    <strong>GOL de Lamine Yamal</strong> - Abre el marcador tras una jugada colectiva de 14 pases.
                  </p>
                </div>
                <div className="my-6 rounded-lg bg-[#d4af37]/10 border-l-4 border-[#d4af37] p-4">
                  <div className="mb-2 flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-[#d4af37]" />
                    <span className="font-bold text-[#d4af37]">Minuto 38'</span>
                    <span className="ml-auto text-sm text-neutral-600">xG: 0.78</span>
                  </div>
                  <p className="text-sm flex items-center gap-2">
                    <span className="inline-flex h-5 w-5 relative flex-shrink-0">
                      <Image
                        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/barcelona-1764596043358.png"
                        alt="FC Barcelona"
                        fill
                        className="object-contain"
                      />
                    </span>
                    <strong>GOL de Lewandowski</strong> - Aprovecha un error defensivo para hacer el 2-0.
                  </p>
                </div>
                <div className="my-6 rounded-lg bg-red-50 border-l-4 border-red-500 p-4">
                  <div className="mb-2 flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-red-500" />
                    <span className="font-bold text-red-600">Minuto 52'</span>
                    <span className="ml-auto text-sm text-neutral-600">xG: 0.31</span>
                  </div>
                  <p className="text-sm flex items-center gap-2">
                    <span className="inline-flex h-5 w-5 relative flex-shrink-0">
                      <Image
                        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/athletic-1764596047133.png"
                        alt="Athletic Club"
                        fill
                        className="object-contain"
                      />
                    </span>
                    <strong>GOL de Williams</strong> - El Athletic reduce distancias.
                  </p>
                </div>
                <div className="my-6 rounded-lg bg-[#d4af37]/10 border-l-4 border-[#d4af37] p-4">
                  <div className="mb-2 flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-[#d4af37]" />
                    <span className="font-bold text-[#d4af37]">Minuto 76'</span>
                    <span className="ml-auto text-sm text-neutral-600">xG: 0.65</span>
                  </div>
                  <p className="text-sm flex items-center gap-2">
                    <span className="inline-flex h-5 w-5 relative flex-shrink-0">
                      <Image
                        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/barcelona-1764596043358.png"
                        alt="FC Barcelona"
                        fill
                        className="object-contain"
                      />
                    </span>
                    <strong>GOL de Pedri</strong> - Sentencia con el 3-1 tras asistencia de Yamal.
                  </p>
                </div>
              </div>
            </Card>

            {/* Team Comparison */}
            <Card className="p-6">
              <h2 className="mb-6 text-2xl font-bold">Comparación de Equipos</h2>
              <div className="space-y-6">
                {[
                  { stat: "Posesión (%)", home: 68, away: 32, showPercent: true },
                  { stat: "Tiros totales", home: 18, away: 9 },
                  { stat: "Tiros a puerta", home: 11, away: 4 },
                  { stat: "xG", home: 2.7, away: 1.1, decimal: true },
                  { stat: "Pases completados", home: 687, away: 312 },
                  { stat: "Precisión de pase (%)", home: 89, away: 76, showPercent: true },
                  { stat: "Duelos ganados (%)", home: 62, away: 38, showPercent: true },
                  { stat: "Corners", home: 8, away: 3 },
                  { stat: "Faltas cometidas", home: 9, away: 14 }
                ].map((item, i) => (
                  <div key={i}>
                    <div className="mb-2 flex justify-between text-sm">
                      <span className="font-bold text-[#d4af37]">
                        {item.decimal ? item.home.toFixed(1) : item.home}{item.showPercent ? '%' : ''}
                      </span>
                      <span className="text-neutral-600 font-medium">{item.stat}</span>
                      <span className="font-bold text-neutral-600">
                        {item.decimal ? item.away.toFixed(1) : item.away}{item.showPercent ? '%' : ''}
                      </span>
                    </div>
                    <div className="flex h-3 overflow-hidden rounded-full bg-neutral-200">
                      <div 
                        className="bg-[#d4af37]" 
                        style={{ width: `${(item.home / (item.home + item.away)) * 100}%` }}
                      />
                      <div 
                        className="bg-neutral-400" 
                        style={{ width: `${(item.away / (item.home + item.away)) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* LEGEND EXCLUSIVE: Heat Maps */}
            <Card className={`p-6 ${!isLegend ? 'border-2 border-[#d4af37]' : ''}`}>
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-2xl font-bold">Mapas de Calor Avanzados</h2>
                <LegendsBadge />
              </div>
              
              {isLegend ? (
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <div className="mb-3 flex items-center gap-2">
                      <div className="relative h-8 w-8">
                        <Image
                          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/barcelona-1764596043358.png"
                          alt="FC Barcelona"
                          fill
                          className="object-contain"
                        />
                      </div>
                      <h3 className="font-bold">FC Barcelona</h3>
                    </div>
                    <div className="relative aspect-[3/2] overflow-hidden rounded-lg bg-gradient-to-b from-green-600 via-yellow-500 to-red-600">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="h-full w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iIzIyOGI1NSIvPjxsaW5lIHgxPSIwIiB5MT0iMjAwIiB4Mj0iNjAwIiB5Mj0iMjAwIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiLz48Y2lyY2xlIGN4PSIzMDAiIGN5PSIyMDAiIHI9IjUwIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiIGZpbGw9Im5vbmUiLz48L3N2Zz4=')] bg-contain bg-center bg-no-repeat opacity-20" />
                      </div>
                      <div className="absolute right-1/4 top-1/4 h-32 w-32 rounded-full bg-red-500/60 blur-3xl" />
                      <div className="absolute left-1/3 top-1/3 h-24 w-24 rounded-full bg-orange-500/50 blur-2xl" />
                      <div className="absolute right-1/3 bottom-1/3 h-28 w-28 rounded-full bg-yellow-500/40 blur-2xl" />
                    </div>
                    <p className="mt-2 text-xs text-neutral-500">Dominio en el tercio final del campo</p>
                  </div>
                  
                  <div>
                    <div className="mb-3 flex items-center gap-2">
                      <div className="relative h-8 w-8">
                        <Image
                          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/athletic-1764596047133.png"
                          alt="Athletic Club"
                          fill
                          className="object-contain"
                        />
                      </div>
                      <h3 className="font-bold">Athletic Club</h3>
                    </div>
                    <div className="relative aspect-[3/2] overflow-hidden rounded-lg bg-gradient-to-b from-green-600 via-yellow-500 to-red-600">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="h-full w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iIzIyOGI1NSIvPjxsaW5lIHgxPSIwIiB5MT0iMjAwIiB4Mj0iNjAwIiB5Mj0iMjAwIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiLz48Y2lyY2xlIGN4PSIzMDAiIGN5PSIyMDAiIHI9IjUwIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiIGZpbGw9Im5vbmUiLz48L3N2Zz4=')] bg-contain bg-center bg-no-repeat opacity-20" />
                      </div>
                      <div className="absolute left-1/4 bottom-1/3 h-24 w-24 rounded-full bg-yellow-500/50 blur-2xl" />
                      <div className="absolute left-1/3 top-1/2 h-20 w-20 rounded-full bg-orange-500/40 blur-xl" />
                    </div>
                    <p className="mt-2 text-xs text-neutral-500">Presencia limitada en campo rival</p>
                  </div>
                </div>
              ) : (
                <div className="rounded-lg bg-neutral-50 p-12 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="rounded-full bg-[#d4af37]/10 p-6">
                      <Lock className="h-12 w-12 text-[#d4af37]" />
                    </div>
                  </div>
                  <h3 className="mb-2 text-xl font-bold">Contenido Exclusivo LEGEND</h3>
                  <p className="mb-6 text-sm text-neutral-600">
                    Accede a los mapas de calor avanzados con análisis de zonas de influencia
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

            {/* LEGEND EXCLUSIVE: Advanced Stats */}
            <Card className={`p-6 ${!isLegend ? 'border-2 border-[#d4af37]' : ''}`}>
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-2xl font-bold">Análisis Táctico Profundo</h2>
                <LegendsBadge />
              </div>
              
              {isLegend ? (
                <>
                  <div className="grid grid-cols-2 gap-6 md:grid-cols-3 mb-6">
                    <div className="rounded-lg bg-[#d4af37]/10 p-4 text-center">
                      <p className="mb-1 text-2xl font-bold text-[#d4af37]">+0.6</p>
                      <p className="text-xs text-neutral-600">xG Overperformance</p>
                    </div>
                    <div className="rounded-lg bg-[#d4af37]/10 p-4 text-center">
                      <p className="mb-1 text-2xl font-bold text-[#d4af37]">92%</p>
                      <p className="text-xs text-neutral-600">Presión Exitosa</p>
                    </div>
                    <div className="rounded-lg bg-[#d4af37]/10 p-4 text-center">
                      <p className="mb-1 text-2xl font-bold text-[#d4af37]">3.8</p>
                      <p className="text-xs text-neutral-600">xA Total</p>
                    </div>
                    <div className="rounded-lg bg-neutral-100 p-4 text-center">
                      <p className="mb-1 text-2xl font-bold">68</p>
                      <p className="text-xs text-neutral-600">PPDA</p>
                    </div>
                    <div className="rounded-lg bg-neutral-100 p-4 text-center">
                      <p className="mb-1 text-2xl font-bold">14</p>
                      <p className="text-xs text-neutral-600">Pases a Tercio Final</p>
                    </div>
                    <div className="rounded-lg bg-neutral-100 p-4 text-center">
                      <p className="mb-1 text-2xl font-bold">23</p>
                      <p className="text-xs text-neutral-600">Regates Exitosos</p>
                    </div>
                  </div>

                  <div className="rounded-lg bg-[#d4af37]/10 p-6">
                    <h3 className="mb-4 font-bold text-lg">Patrones Tácticos Detectados</h3>
                    <ul className="space-y-2 text-sm text-neutral-700">
                      <li className="flex items-start gap-2">
                        <span className="text-[#d4af37]">•</span>
                        <span>Barcelona dominó el tercio final con un 73% de posesión en zona de ataque</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#d4af37]">•</span>
                        <span>La presión alta del Barça forzó 8 pérdidas de balón en campo rival</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#d4af37]">•</span>
                        <span>Athletic solo consiguió 3 transiciones rápidas efectivas en todo el partido</span>
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
                    Accede al análisis táctico completo con métricas avanzadas y patrones detectados
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

            {/* Passing Network LEGEND */}
            <Card className="border-2 border-[#d4af37] p-6">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-2xl font-bold">Red de Pases</h2>
                <LegendsBadge />
              </div>
              <div className="rounded-lg bg-neutral-50 p-8">
                <div className="relative aspect-video">
                  <svg viewBox="0 0 400 300" className="w-full">
                    {/* Connections */}
                    <line x1="200" y1="150" x2="300" y2="100" stroke="#d4af37" strokeWidth="3" opacity="0.6" />
                    <line x1="200" y1="150" x2="100" y2="100" stroke="#d4af37" strokeWidth="2" opacity="0.4" />
                    <line x1="200" y1="150" x2="300" y2="200" stroke="#d4af37" strokeWidth="2" opacity="0.4" />
                    <line x1="300" y1="100" x2="350" y2="80" stroke="#d4af37" strokeWidth="4" opacity="0.8" />
                    
                    {/* Players */}
                    <circle cx="200" cy="150" r="20" fill="#d4af37" />
                    <text x="200" y="155" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">TER</text>
                    
                    <circle cx="300" cy="100" r="18" fill="#d4af37" />
                    <text x="300" y="105" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">PED</text>
                    
                    <circle cx="100" cy="100" r="15" fill="#b8941f" />
                    <text x="100" y="105" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">GAV</text>
                    
                    <circle cx="300" cy="200" r="15" fill="#b8941f" />
                    <text x="300" y="205" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">YAM</text>
                    
                    <circle cx="350" cy="80" r="22" fill="#d4af37" />
                    <text x="350" y="85" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">LEW</text>
                  </svg>
                </div>
                <p className="mt-4 text-center text-xs text-neutral-500">
                  Grosor de líneas indica frecuencia de pases • Tamaño indica influencia
                </p>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Top Performers */}
            <Card className="p-6">
              <h3 className="mb-4 font-bold">Mejores Jugadores</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-full">
                    <Image
                      src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/edcada77-6be0-4456-8471-5c5223fafc7d/generated_images/professional-football-player-portrait-la-d7b98ca2-20251130225123.jpg"
                      alt="Lamine Yamal"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold">Lamine Yamal</p>
                    <p className="text-xs text-neutral-500">1G, 1A • 89% pases</p>
                  </div>
                  <div className="text-right">
                    <div className="rounded-full bg-[#d4af37] px-3 py-1 text-sm font-bold text-white">
                      9.2
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-full">
                    <Image
                      src="https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=100&h=100&fit=crop"
                      alt="Lewandowski"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold">Lewandowski</p>
                    <p className="text-xs text-neutral-500">1G • 4 tiros</p>
                  </div>
                  <div className="text-right">
                    <div className="rounded-full bg-[#d4af37] px-3 py-1 text-sm font-bold text-white">
                      8.8
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-full">
                    <Image
                      src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/edcada77-6be0-4456-8471-5c5223fafc7d/generated_images/professional-football-player-portrait-pe-56ea352d-20251130225132.jpg"
                      alt="Pedri"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold">Pedri</p>
                    <p className="text-xs text-neutral-500">1G • 92 pases</p>
                  </div>
                  <div className="text-right">
                    <div className="rounded-full bg-[#d4af37] px-3 py-1 text-sm font-bold text-white">
                      8.5
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Match Stats Summary */}
            <Card className="bg-black p-6 text-white">
              <h3 className="mb-4 font-bold">Resumen Estadístico</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm">Córners</span>
                  <span className="font-bold text-[#d4af37]">8 - 3</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Fueras de juego</span>
                  <span className="font-bold text-[#d4af37]">2 - 4</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Faltas</span>
                  <span className="font-bold text-[#d4af37]">9 - 14</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Tarjetas amarillas</span>
                  <span className="font-bold text-[#d4af37]">2 - 3</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Paradas portero</span>
                  <span className="font-bold text-[#d4af37]">3 - 8</span>
                </div>
              </div>
            </Card>

            {/* xG Timeline */}
            <Card className="p-6">
              <h3 className="mb-4 font-bold">Evolución xG</h3>
              <div className="relative h-40">
                <svg viewBox="0 0 100 50" className="w-full h-full">
                  {/* Grid lines */}
                  <line x1="0" y1="10" x2="100" y2="10" stroke="#e5e5e5" strokeWidth="0.5" />
                  <line x1="0" y1="20" x2="100" y2="20" stroke="#e5e5e5" strokeWidth="0.5" />
                  <line x1="0" y1="30" x2="100" y2="30" stroke="#e5e5e5" strokeWidth="0.5" />
                  <line x1="0" y1="40" x2="100" y2="40" stroke="#e5e5e5" strokeWidth="0.5" />
                  
                  {/* Barcelona line */}
                  <polyline
                    points="0,45 15,42 25,35 35,28 45,25 60,18 75,12 90,8 100,6"
                    fill="none"
                    stroke="#d4af37"
                    strokeWidth="2.5"
                  />
                  
                  {/* Athletic line */}
                  <polyline
                    points="0,48 15,47 25,46 35,45 45,43 60,38 75,35 90,32 100,30"
                    fill="none"
                    stroke="#999"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <div className="mt-3 flex justify-between text-xs">
                <span className="text-[#d4af37] font-semibold">■ Barcelona (2.7)</span>
                <span className="text-neutral-500 font-semibold">■ Athletic (1.1)</span>
              </div>
            </Card>

            {/* LEGEND CTA */}
            <Card className="border-2 border-[#d4af37] bg-gradient-to-br from-[#d4af37]/10 to-transparent p-6">
              <div className="mb-3 flex justify-center">
                <Crown className="h-10 w-10 text-[#d4af37]" />
              </div>
              <h3 className="mb-2 text-center font-bold">Análisis Completo</h3>
              <p className="mb-4 text-center text-xs text-neutral-600">
                Accede a métricas avanzadas, mapas de calor detallados y análisis exclusivos
              </p>
              <a
                href="/legends"
                className="block rounded-full bg-[#d4af37] py-2 text-center text-sm font-medium text-white hover:bg-[#b8941f]"
              >
                Hazte LEGEND
              </a>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}