"use client"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import LegendsBadge from "@/components/LegendsBadge"
import Image from "next/image"
import { Check, X, TrendingUp, TrendingDown, Minus, Crown, MapPin, Lock } from "lucide-react"
import { useAuth } from "@/contexts/AuthContext"
import Link from "next/link"

// Estado de forma: últimos 5 partidos
const betisForm = [
  { result: 'W', score: '2-0', opponent: 'Getafe' },
  { result: 'D', score: '1-1', opponent: 'Valencia' },
  { result: 'L', score: '0-2', opponent: 'Atlético' },
  { result: 'W', score: '3-1', opponent: 'Las Palmas' },
  { result: 'W', score: '2-1', opponent: 'Osasuna' }
]

const barcelonaForm = [
  { result: 'W', score: '3-1', opponent: 'Athletic' },
  { result: 'W', score: '2-0', opponent: 'Mallorca' },
  { result: 'D', score: '1-1', opponent: 'Celta' },
  { result: 'W', score: '4-2', opponent: 'Sevilla' },
  { result: 'W', score: '2-1', opponent: 'Getafe' }
]

export default function BetisBarcelonaPreviewPage() {
  const { userType } = useAuth()
  const isLegend = userType === 'legends'

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Match Header - MEJORADO VISUALMENTE */}
        <div className="mb-8">
          <div className="mb-6 flex flex-wrap items-center justify-center gap-4">
            <Badge className="bg-blue-600 text-white font-bold text-sm">JORNADA 16</Badge>
            <Badge className="bg-neutral-800 text-white font-bold text-sm">SÁBADO 14:00</Badge>
          </div>
          
          <Card className="overflow-hidden shadow-2xl">
            <div className="bg-gradient-to-r from-green-700 via-green-600 to-[#004d98] p-12 text-white">
              <h1 className="mb-12 text-center text-4xl font-bold tracking-tight">PREVIA AVANZADA</h1>
              
              <div className="mb-10 flex items-center justify-center gap-12 md:gap-20">
                <div className="text-center">
                  <div className="relative mx-auto mb-4 h-28 w-28 rounded-full bg-white/10 p-4 backdrop-blur-sm">
                    <Image
                      src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/betis-1764631004098.png"
                      alt="Real Betis"
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                  <p className="text-2xl font-bold">REAL BETIS</p>
                  <p className="text-sm text-green-200 mt-1">7º en LaLiga</p>
                </div>
                
                <div className="text-center">
                  <p className="text-7xl font-bold tracking-wider">VS</p>
                </div>
                
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
              </div>

              <div className="grid grid-cols-3 gap-6 md:gap-8">
                <div className="rounded-xl bg-white/10 p-6 backdrop-blur-sm text-center">
                  <div className="mb-3 flex items-center justify-center gap-2">
                    <TrendingDown className="h-7 w-7 text-red-300" />
                    <span className="text-3xl font-bold text-red-300">22%</span>
                  </div>
                  <p className="text-sm uppercase tracking-wide">Victoria Local</p>
                </div>
                <div className="rounded-xl bg-white/10 p-6 backdrop-blur-sm text-center">
                  <div className="mb-3 text-3xl font-bold">18%</div>
                  <p className="text-sm uppercase tracking-wide">Empate</p>
                </div>
                <div className="rounded-xl bg-white/10 p-6 backdrop-blur-sm text-center">
                  <div className="mb-3 flex items-center justify-center gap-2">
                    <TrendingUp className="h-7 w-7 text-[#d4af37]" />
                    <span className="text-3xl font-bold text-[#d4af37]">60%</span>
                  </div>
                  <p className="text-sm uppercase tracking-wide">Victoria Visitante</p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Stadium Info - DISEÑO MEJORADO */}
        <Card className="mb-8 overflow-hidden shadow-lg">
          <div className="relative bg-gradient-to-br from-green-600 to-green-800 p-8 text-white">
            <div className="absolute right-8 top-8 text-8xl opacity-10">🏟️</div>
            <div className="relative z-10">
              <div className="mb-2 flex items-center gap-2">
                <MapPin className="h-6 w-6" />
                <span className="text-sm uppercase tracking-wide font-semibold">Estadio</span>
              </div>
              <h2 className="mb-3 text-4xl font-bold">Benito Villamarín</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="rounded-lg bg-white/10 p-3 backdrop-blur-sm">
                  <p className="text-xs uppercase text-green-200">Capacidad</p>
                  <p className="text-lg font-bold">60,720</p>
                </div>
                <div className="rounded-lg bg-white/10 p-3 backdrop-blur-sm">
                  <p className="text-xs uppercase text-green-200">Temperatura</p>
                  <p className="text-lg font-bold">18°C</p>
                </div>
                <div className="rounded-lg bg-white/10 p-3 backdrop-blur-sm">
                  <p className="text-xs uppercase text-green-200">Césped</p>
                  <p className="text-lg font-bold">Excelente</p>
                </div>
                <div className="rounded-lg bg-white/10 p-3 backdrop-blur-sm">
                  <p className="text-xs uppercase text-green-200">Árbitro</p>
                  <p className="text-lg font-bold">Martínez</p>
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
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/betis-1764631004098.png"
                  alt="Real Betis"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-bold">Real Betis</h3>
                <p className="text-xs text-neutral-500">Últimos 5 partidos • 3V-1E-1D</p>
              </div>
            </div>
            <div className="flex gap-2">
              {betisForm.map((match, index) => (
                <div
                  key={index}
                  className={`flex h-14 w-14 flex-col items-center justify-center rounded-lg text-xs font-bold text-white ${
                    match.result === 'W' ? 'bg-green-600' :
                    match.result === 'D' ? 'bg-neutral-400' :
                    'bg-red-600'
                  }`}
                  title={`${match.result} ${match.score} vs ${match.opponent}`}
                >
                  <span className="text-sm">{match.result}</span>
                  <span className="text-[10px] opacity-75">{match.score}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3 text-center">
              <div>
                <p className="text-2xl font-bold text-green-600">60%</p>
                <p className="text-xs text-neutral-500">Efectividad</p>
              </div>
              <div>
                <p className="text-2xl font-bold">1.8</p>
                <p className="text-xs text-neutral-500">Goles/Partido</p>
              </div>
              <div>
                <p className="text-2xl font-bold">1.2</p>
                <p className="text-xs text-neutral-500">xG/Partido</p>
              </div>
            </div>
          </Card>

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
                <p className="text-xs text-neutral-500">Últimos 5 partidos • 4V-1E-0D</p>
              </div>
            </div>
            <div className="flex gap-2">
              {barcelonaForm.map((match, index) => (
                <div
                  key={index}
                  className={`flex h-14 w-14 flex-col items-center justify-center rounded-lg text-xs font-bold text-white ${
                    match.result === 'W' ? 'bg-green-600' :
                    match.result === 'D' ? 'bg-neutral-400' :
                    'bg-red-600'
                  }`}
                  title={`${match.result} ${match.score} vs ${match.opponent}`}
                >
                  <span className="text-sm">{match.result}</span>
                  <span className="text-[10px] opacity-75">{match.score}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3 text-center">
              <div>
                <p className="text-2xl font-bold text-green-600">90%</p>
                <p className="text-xs text-neutral-500">Efectividad</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-[#d4af37]">2.8</p>
                <p className="text-xs text-neutral-500">Goles/Partido</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-[#d4af37]">2.4</p>
                <p className="text-xs text-neutral-500">xG/Partido</p>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Pre-Match Analysis */}
            <Card className="p-6">
              <h2 className="mb-4 text-2xl font-bold">Análisis Pre-Partido</h2>
              <div className="prose max-w-none space-y-4">
                <p className="text-neutral-700">
                  El <strong>FC Barcelona</strong> visita el <strong>Benito Villamarín</strong> en un momento excepcional de forma. 
                  Los azulgranas lideran LaLiga con autoridad y llegan con cuatro victorias en sus últimos cinco encuentros.
                </p>
                
                <div className="rounded-lg bg-blue-50 border-l-4 border-blue-600 p-4">
                  <h4 className="font-bold text-blue-900 mb-2">⚡ Punto Clave</h4>
                  <p className="text-sm text-blue-800">
                    El Betis tiene una efectividad del 82% en casa esta temporada, pero se enfrenta al mejor ataque de LaLiga 
                    (2.8 goles por partido). El duelo entre la solidez local y el poderío ofensivo visitante será determinante.
                  </p>
                </div>

                <p className="text-neutral-700">
                  El <strong>Real Betis</strong>, por su parte, atraviesa un buen momento con tres victorias en cinco partidos. 
                  Su juego vertical y aprovechamiento de espacios podría generar problemas al Barcelona, especialmente en transiciones rápidas.
                </p>

                <div className="rounded-lg bg-amber-50 border-l-4 border-amber-600 p-4">
                  <h4 className="font-bold text-amber-900 mb-2">🎯 Duelo Táctico</h4>
                  <p className="text-sm text-amber-800">
                    La presión alta del Barcelona (PPDA: 8.2) contra la salida de balón del Betis será crucial. 
                    Los béticos prefieren jugar corto (89% precisión de pase), pero el Barça recupera el 68% de balones en campo contrario.
                  </p>
                </div>
              </div>
            </Card>

            {/* Head to Head History */}
            <Card className="p-6">
              <h2 className="mb-4 text-2xl font-bold">Historial Reciente</h2>
              <div className="space-y-3">
                {[
                  { season: '23/24', score: '2-4', winner: 'barcelona', venue: 'Benito Villamarín' },
                  { season: '23/24', score: '5-3', winner: 'barcelona', venue: 'Camp Nou' },
                  { season: '22/23', score: '0-1', winner: 'betis', venue: 'Benito Villamarín' },
                  { season: '22/23', score: '4-0', winner: 'barcelona', venue: 'Camp Nou' },
                  { season: '21/22', score: '1-1', winner: 'draw', venue: 'Benito Villamarín' }
                ].map((match, index) => (
                  <div key={index} className="flex items-center justify-between rounded-lg bg-neutral-50 p-4">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-semibold text-neutral-500">{match.season}</span>
                      <span className="text-xs text-neutral-400">{match.venue}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className={`text-lg font-bold ${match.winner === 'betis' ? 'text-green-600' : ''}`}>
                        {match.score.split('-')[0]}
                      </span>
                      <span className="text-neutral-400">-</span>
                      <span className={`text-lg font-bold ${match.winner === 'barcelona' ? 'text-[#d4af37]' : ''}`}>
                        {match.score.split('-')[1]}
                      </span>
                    </div>
                    {match.winner === 'barcelona' && (
                      <Badge className="bg-[#d4af37] text-white">Barça</Badge>
                    )}
                    {match.winner === 'betis' && (
                      <Badge className="bg-green-600 text-white">Betis</Badge>
                    )}
                    {match.winner === 'draw' && (
                      <Badge className="bg-neutral-400 text-white">Empate</Badge>
                    )}
                  </div>
                ))}
              </div>
              <p className="mt-4 text-center text-sm text-neutral-500">
                El Barcelona ha ganado 3 de los últimos 5 enfrentamientos
              </p>
            </Card>

            {/* Expected Lineups */}
            <Card className="p-6">
              <h2 className="mb-6 text-2xl font-bold">Alineaciones Probables</h2>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div>
                  <div className="mb-4 flex items-center gap-2">
                    <div className="relative h-8 w-8">
                      <Image
                        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/edcada77-6be0-4456-8471-5c5223fafc7d/generated_images/real-betis-football-club-badge-logo-gree-9701d665-20251130225044.jpg"
                        alt="Real Betis"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <h3 className="font-bold">Real Betis (4-2-3-1)</h3>
                  </div>
                  <div className="space-y-2 text-sm">
                    <p><strong>POR:</strong> Rui Silva</p>
                    <p><strong>DEF:</strong> Sabaly, Pezzella, Bartra, Miranda</p>
                    <p><strong>MED:</strong> Altimira, Carvalho</p>
                    <p><strong>DEL:</strong> Rodri, Fekir, Ayoze</p>
                    <p><strong>DC:</strong> Willian José</p>
                  </div>
                </div>
                
                <div>
                  <div className="mb-4 flex items-center gap-2">
                    <div className="relative h-8 w-8">
                      <Image
                        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/barcelona-1764596043358.png"
                        alt="FC Barcelona"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <h3 className="font-bold">FC Barcelona (4-3-3)</h3>
                  </div>
                  <div className="space-y-2 text-sm">
                    <p><strong>POR:</strong> Ter Stegen</p>
                    <p><strong>DEF:</strong> Koundé, Araujo, Christensen, Balde</p>
                    <p><strong>MED:</strong> De Jong, Gündogan, Pedri</p>
                    <p><strong>DEL:</strong> Lamine Yamal, Lewandowski, Raphinha</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* LEGEND EXCLUSIVE: Predicted Score */}
            <Card className={`p-6 ${!isLegend ? 'border-2 border-[#d4af37]' : ''}`}>
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-2xl font-bold">Resultado Más Probable</h2>
                <LegendsBadge />
              </div>
              
              {isLegend ? (
                <>
                  <div className="rounded-lg bg-gradient-to-br from-[#d4af37]/10 to-transparent p-8 text-center">
                    <p className="mb-2 text-6xl font-bold text-[#d4af37]">1-3</p>
                    <p className="text-sm text-neutral-600">Probabilidad del 42%</p>
                  </div>
                  
                  <div className="mt-6 grid grid-cols-2 gap-6">
                    <div>
                      <p className="mb-3 text-sm font-semibold">Real Betis</p>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-neutral-600">xG Esperado</span>
                          <span className="font-bold">1.4</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-neutral-600">Tiros Esperados</span>
                          <span className="font-bold">11</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-neutral-600">Posesión Estimada</span>
                          <span className="font-bold">42%</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <p className="mb-3 text-sm font-semibold">FC Barcelona</p>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-neutral-600">xG Esperado</span>
                          <span className="font-bold text-[#d4af37]">2.6</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-neutral-600">Tiros Esperados</span>
                          <span className="font-bold text-[#d4af37]">17</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-neutral-600">Posesión Estimada</span>
                          <span className="font-bold text-[#d4af37]">58%</span>
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
                    Accede a la proyección del resultado más probable con métricas esperadas
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

            {/* LEGEND EXCLUSIVE: Heat Maps Prediction */}
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
                          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/edcada77-6be0-4456-8471-5c5223fafc7d/generated_images/real-betis-football-club-badge-logo-gree-9701d665-20251130225044.jpg"
                          alt="Real Betis"
                          fill
                          className="object-contain"
                        />
                      </div>
                      <h3 className="font-bold">Real Betis</h3>
                    </div>
                    <div className="relative aspect-[3/2] overflow-hidden rounded-lg bg-gradient-to-b from-green-600 via-yellow-500 to-red-600">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="h-full w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iIzIyOGI1NSIvPjxsaW5lIHgxPSIwIiB5MT0iMjAwIiB4Mj0iNjAwIiB5Mj0iMjAwIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiLz48Y2lyY2xlIGN4PSIzMDAiIGN5PSIyMDAiIHI9IjUwIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiIGZpbGw9Im5vbmUiLz48L3N2Zz4=')] bg-contain bg-center bg-no-repeat opacity-20" />
                      </div>
                      <div className="absolute left-1/4 top-1/2 h-28 w-28 rounded-full bg-yellow-500/50 blur-3xl" />
                      <div className="absolute left-1/3 bottom-1/4 h-24 w-24 rounded-full bg-orange-500/40 blur-2xl" />
                      <div className="absolute right-1/4 top-1/3 h-20 w-20 rounded-full bg-red-500/30 blur-xl" />
                    </div>
                    <p className="mt-2 text-xs text-neutral-500">Concentración en bandas y contragolpes</p>
                  </div>
                  
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
                      <div className="absolute left-1/3 top-1/3 h-28 w-28 rounded-full bg-orange-500/55 blur-2xl" />
                      <div className="absolute right-1/3 bottom-1/4 h-26 w-26 rounded-full bg-yellow-500/45 blur-2xl" />
                    </div>
                    <p className="mt-2 text-xs text-neutral-500">Dominio total en campo rival</p>
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
                    Accede a los mapas de calor predictivos con zonas de influencia esperadas
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

            {/* LEGEND EXCLUSIVE: Key Stats Comparison */}
            <Card className="p-6">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-2xl font-bold">Comparativa de Métricas</h2>
              </div>
              
              <div className="space-y-6">
                {[
                  { stat: "xG por partido", betis: 1.3, barcelona: 2.4 },
                  { stat: "xG en contra", betis: 1.5, barcelona: 0.9 },
                  { stat: "Pases completados", betis: 487, barcelona: 654 },
                  { stat: "Presión alta (PPDA)", betis: 12.4, barcelona: 8.2, inverse: true },
                  { stat: "Regates exitosos", betis: 9.2, barcelona: 14.7 },
                  { stat: "Corners por partido", betis: 5.1, barcelona: 7.8 },
                  { stat: "Recuperaciones", betis: 52, barcelona: 58 }
                ].map((item, i) => (
                  <div key={i}>
                    <div className="mb-2 flex justify-between text-sm">
                      <span className="font-bold text-green-600">
                        {item.betis.toFixed(1)}
                      </span>
                      <span className="text-neutral-600 font-medium">{item.stat}</span>
                      <span className="font-bold text-[#d4af37]">
                        {item.barcelona.toFixed(1)}
                      </span>
                    </div>
                    <div className="flex h-3 overflow-hidden rounded-full bg-neutral-200">
                      <div 
                        className="bg-green-600" 
                        style={{ width: `${(item.betis / (item.betis + item.barcelona)) * 100}%` }}
                      />
                      <div 
                        className="bg-[#d4af37]" 
                        style={{ width: `${(item.barcelona / (item.betis + item.barcelona)) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* LEGEND EXCLUSIVE: Tactical Analysis */}
            <Card className={`p-6 ${!isLegend ? 'border-2 border-[#d4af37]' : ''}`}>
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-2xl font-bold">Análisis Táctico Profundo</h2>
                <LegendsBadge />
              </div>
              
              {isLegend ? (
                <div className="space-y-6">
                  <div className="rounded-lg bg-green-50 p-4">
                    <h4 className="mb-2 flex items-center gap-2 font-bold text-green-900">
                      <div className="relative h-6 w-6">
                        <Image
                          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/edcada77-6be0-4456-8471-5c5223fafc7d/generated_images/real-betis-football-club-badge-logo-gree-9701d665-20251130225044.jpg"
                          alt="Real Betis"
                          fill
                          className="object-contain"
                        />
                      </div>
                      Fortalezas del Betis
                    </h4>
                    <ul className="space-y-1 text-sm text-green-800">
                      <li>✓ Transiciones rápidas con Fekir y Ayoze</li>
                      <li>✓ Aprovechamiento de bandas (78% efectividad)</li>
                      <li>✓ Juego aéreo defensivo (71% duelos ganados)</li>
                      <li>✓ Presión coordinada en campo propio</li>
                    </ul>
                  </div>

                  <div className="rounded-lg bg-red-50 p-4">
                    <h4 className="mb-2 flex items-center gap-2 font-bold text-red-900">
                      <div className="relative h-6 w-6">
                        <Image
                          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/edcada77-6be0-4456-8471-5c5223fafc7d/generated_images/real-betis-football-club-badge-logo-gree-9701d665-20251130225044.jpg"
                          alt="Real Betis"
                          fill
                          className="object-contain"
                        />
                      </div>
                      Debilidades del Betis
                    </h4>
                    <ul className="space-y-1 text-sm text-red-800">
                      <li>✗ Vulnerable a presión alta (concede 1.8 xG)</li>
                      <li>✗ Espacios entre líneas contra equipos técnicos</li>
                      <li>✗ Dificultad para mantener posesión prolongada</li>
                    </ul>
                  </div>

                  <div className="rounded-lg bg-blue-50 p-4">
                    <h4 className="mb-2 flex items-center gap-2 font-bold text-blue-900">
                      <div className="relative h-6 w-6">
                        <Image
                          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/barcelona-1764596043358.png"
                          alt="FC Barcelona"
                          fill
                          className="object-contain"
                        />
                      </div>
                      Plan del Barcelona
                    </h4>
                    <ul className="space-y-1 text-sm text-blue-800">
                      <li>→ Presión intensa en salida de balón rival</li>
                      <li>→ Control absoluto mediante posesión (65%+)</li>
                      <li>→ Explotar velocidad de Lamine Yamal por banda</li>
                      <li>→ Sobrecargar centro con Pedri-Gündogan-De Jong</li>
                    </ul>
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
                    Accede al análisis táctico detallado con fortalezas, debilidades y plan de juego
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
            {/* Key Players to Watch */}
            <Card className="p-6">
              <h3 className="mb-4 font-bold">Jugadores Clave</h3>
              <div className="space-y-4">
                <div>
                  <div className="mb-2 flex items-center gap-2">
                    <div className="relative h-6 w-6">
                      <Image
                        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/edcada77-6be0-4456-8471-5c5223fafc7d/generated_images/real-betis-football-club-badge-logo-gree-9701d665-20251130225044.jpg"
                        alt="Betis"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-xs font-semibold text-neutral-500">BETIS</span>
                  </div>
                  <p className="font-semibold">Nabil Fekir</p>
                  <p className="text-xs text-neutral-500">5 goles, 4 asistencias</p>
                  <div className="mt-1 text-xs text-[#d4af37]">xG: 0.82/partido</div>
                </div>

                <div>
                  <div className="mb-2 flex items-center gap-2">
                    <div className="relative h-6 w-6">
                      <Image
                        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/barcelona-1764596043358.png"
                        alt="Barcelona"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-xs font-semibold text-neutral-500">BARCELONA</span>
                  </div>
                  <p className="font-semibold">Lamine Yamal</p>
                  <p className="text-xs text-neutral-500">7 goles, 9 asistencias</p>
                  <div className="mt-1 text-xs text-[#d4af37]">xA: 1.2/partido</div>
                </div>

                <div>
                  <p className="font-semibold">Robert Lewandowski</p>
                  <p className="text-xs text-neutral-500">14 goles, 2 asistencias</p>
                  <div className="mt-1 text-xs text-[#d4af37]">xG: 1.4/partido</div>
                </div>
              </div>
            </Card>

            {/* Prediction Matrix */}
            <Card className="p-6">
              <h3 className="mb-4 font-bold">Matriz de Probabilidad</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-center text-xs">
                  <thead>
                    <tr>
                      <th className="p-1"></th>
                      <th className="p-1">0</th>
                      <th className="p-1">1</th>
                      <th className="p-1">2</th>
                      <th className="p-1">3</th>
                      <th className="p-1">4</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      [8.0, 7.0, 6.0, 5.0, 4.0],
                      [12.0, 14.0, 11.0, 8.0, 6.0],
                      [9.0, 16.0, 18.0, 13.0, 9.0],
                      [6.0, 11.0, 15.0, 12.0, 8.0],
                      [4.0, 7.0, 9.0, 8.0, 6.0]
                    ].map((row, i) => (
                      <tr key={i}>
                        <td className="p-1 font-bold">{i}</td>
                        {row.map((val, j) => (
                          <td 
                            key={j} 
                            className={`p-2 ${
                              val > 15 ? 'bg-[#d4af37] font-bold text-white' : 
                              val > 10 ? 'bg-[#d4af37]/60' : 
                              'bg-neutral-100'
                            }`}
                          >
                            {val.toFixed(0)}%
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-3 text-center text-xs text-neutral-500">
                Betis (filas) vs Barcelona (columnas)
              </div>
            </Card>

            {/* Expected Goals Timeline */}
            <Card className="bg-black p-6 text-white">
              <h3 className="mb-4 font-bold">Momentos de Gol</h3>
              <div className="space-y-3">
                {[
                  { minute: "0-15'", probability: 8 },
                  { minute: "16-30'", probability: 12 },
                  { minute: "31-45'", probability: 18 },
                  { minute: "46-60'", probability: 15 },
                  { minute: "61-75'", probability: 22 },
                  { minute: "76-90+'", probability: 25 }
                ].map((period, index) => (
                  <div key={index}>
                    <div className="mb-1 flex justify-between text-xs">
                      <span>{period.minute}</span>
                      <span className="text-[#d4af37]">{period.probability}%</span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-white/20">
                      <div 
                        className="h-full bg-[#d4af37]"
                        style={{ width: `${period.probability * 4}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* LEGEND CTA */}
            <Card className="border-2 border-[#d4af37] bg-gradient-to-br from-[#d4af37]/10 to-transparent p-6">
              <div className="mb-3 flex justify-center">
                <Crown className="h-10 w-10 text-[#d4af37]" />
              </div>
              <h3 className="mb-2 text-center font-bold">Análisis Completo</h3>
              <p className="mb-4 text-center text-xs text-neutral-600">
                Accede a métricas predictivas avanzadas, probabilidades en tiempo real y análisis exclusivos
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