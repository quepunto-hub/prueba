"use client"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import { TrendingUp, Target, Zap, Activity, Award, Lock, BarChart3, FileText, Crown, Users, Shield, Crosshair, Move, Brain, Eye } from "lucide-react"
import { useAuth } from "@/contexts/AuthContext"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function LegendsDashboard() {
  const { userType } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (userType !== 'legends') {
      router.push('/legends')
    }
  }, [userType, router])

  if (userType !== 'legends') {
    return null
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Welcome Header */}
        <div className="mb-8 rounded-lg border-2 border-[#d4af37] bg-gradient-to-br from-[#d4af37]/10 to-transparent p-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="mb-2 flex items-center gap-3">
                <Crown className="h-8 w-8 text-[#d4af37]" />
                <h1 className="text-3xl font-bold">Panel Principal LEGEND</h1>
              </div>
              <p className="text-neutral-600">Accede a todo el contenido exclusivo y análisis avanzados</p>
            </div>
          </div>
        </div>

        {/* Quick Access Menu - EXPANDIDO */}
        <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Link href="/legends/dashboard#articulos">
            <Card className="p-6 transition-all hover:shadow-lg hover:border-[#d4af37] border-2 border-transparent">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-full bg-[#d4af37]/10 p-3">
                  <FileText className="h-6 w-6 text-[#d4af37]" />
                </div>
                <h3 className="text-xl font-bold">Artículos Avanzados</h3>
              </div>
              <p className="text-sm text-neutral-600">Análisis profundos y previas exclusivas</p>
            </Card>
          </Link>

          <Link href="/legends/dashboard#metricas">
            <Card className="p-6 transition-all hover:shadow-lg hover:border-[#d4af37] border-2 border-transparent">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-full bg-[#d4af37]/10 p-3">
                  <BarChart3 className="h-6 w-6 text-[#d4af37]" />
                </div>
                <h3 className="text-xl font-bold">Métricas Avanzadas</h3>
              </div>
              <p className="text-sm text-neutral-600">Estadísticas premium y mapas de calor</p>
            </Card>
          </Link>

          <Link href="/los-mas">
            <Card className="p-6 transition-all hover:shadow-lg hover:border-[#d4af37] border-2 border-transparent">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-full bg-[#d4af37]/10 p-3">
                  <TrendingUp className="h-6 w-6 text-[#d4af37]" />
                </div>
                <h3 className="text-xl font-bold">Rankings Avanzados</h3>
              </div>
              <p className="text-sm text-neutral-600">Acceso completo a todos los rankings</p>
            </Card>
          </Link>

          <Link href="/legends/dashboard#tacticas">
            <Card className="p-6 transition-all hover:shadow-lg hover:border-[#d4af37] border-2 border-transparent">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-full bg-[#d4af37]/10 p-3">
                  <Brain className="h-6 w-6 text-[#d4af37]" />
                </div>
                <h3 className="text-xl font-bold">Análisis Táctico</h3>
              </div>
              <p className="text-sm text-neutral-600">Patrones y sistemas de juego</p>
            </Card>
          </Link>
        </div>

        {/* Artículos Avanzados */}
        <div id="articulos" className="mb-12">
          <div className="mb-6 flex items-center gap-3">
            <FileText className="h-6 w-6 text-[#d4af37]" />
            <h2 className="text-2xl font-bold">Artículos Avanzados</h2>
          </div>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Link href="/partido/preview/sample">
              <Card className="overflow-hidden transition-shadow hover:shadow-lg">
                <div className="relative h-48">
                  <Image
                    src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=400&fit=crop"
                    alt="Preview"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <Badge className="mb-2 bg-[#d4af37] text-white">PREVIA</Badge>
                    <h3 className="font-bold text-white">Barcelona vs Athletic: Análisis Predictivo Completo</h3>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-sm text-neutral-600">
                    Proyecciones xG, patrones recientes y análisis de alineaciones
                  </p>
                  <p className="mt-2 text-xs text-[#d4af37] font-medium">Hace 2 horas</p>
                </div>
              </Card>
            </Link>

            <Link href="/partido/post/sample">
              <Card className="overflow-hidden transition-shadow hover:shadow-lg">
                <div className="relative h-48">
                  <Image
                    src="https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=800&h=400&fit=crop"
                    alt="Post-match"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <Badge className="mb-2 bg-[#d4af37] text-white">POST-PARTIDO</Badge>
                    <h3 className="font-bold text-white">Real Madrid - Atlético: Desglose Avanzado</h3>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-sm text-neutral-600">
                    Análisis completo con mapas de calor y métricas de rendimiento
                  </p>
                  <p className="mt-2 text-xs text-[#d4af37] font-medium">Hace 5 horas</p>
                </div>
              </Card>
            </Link>

            <Link href="/jugador/lamine-yamal">
              <Card className="overflow-hidden transition-shadow hover:shadow-lg">
                <div className="relative h-48">
                  <Image
                    src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&h=400&fit=crop"
                    alt="Player analysis"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <Badge className="mb-2 bg-[#d4af37] text-white">JUGADOR</Badge>
                    <h3 className="font-bold text-white">Lamine Yamal: Perfil Completo</h3>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-sm text-neutral-600">
                    Métricas avanzadas, zonas de influencia y proyección
                  </p>
                  <p className="mt-2 text-xs text-[#d4af37] font-medium">Hace 1 día</p>
                </div>
              </Card>
            </Link>
          </div>
        </div>

        {/* Métricas Avanzadas - EXPANDIDO CON MÁS BLOQUES */}
        <div id="metricas" className="mb-12">
          <div className="mb-6 flex items-center gap-3">
            <BarChart3 className="h-6 w-6 text-[#d4af37]" />
            <h2 className="text-2xl font-bold">Métricas Avanzadas Premium</h2>
          </div>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* xThreat */}
            <Card className="p-6">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Crosshair className="h-5 w-5 text-[#d4af37]" />
                  <h3 className="font-bold">xThreat (Amenaza)</h3>
                </div>
                <Badge className="bg-[#d4af37] text-white">LEGEND</Badge>
              </div>
              <div className="space-y-3">
                {[
                  { player: "Lamine Yamal", team: "Barcelona", value: 0.89, badge: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/barcelona-1764596043358.png" },
                  { player: "Vinícius Jr", team: "Real Madrid", value: 0.84, badge: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/real-madrid-1764626636759.png" },
                  { player: "Griezmann", team: "Atlético", value: 0.78, badge: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/cbc5c8cc8c3e8abd0e175c00ee53b723-1764627217631.png" }
                ].map((player, index) => (
                  <div key={index} className="flex items-center justify-between rounded-lg p-2 hover:bg-neutral-50">
                    <div className="flex items-center gap-3">
                      <div className="relative h-6 w-6">
                        <Image src={player.badge} alt={player.team} fill className="object-contain" sizes="24px" />
                      </div>
                      <span className="text-sm font-semibold">{player.player}</span>
                    </div>
                    <span className="text-lg font-bold text-[#d4af37]">{player.value}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* xA desde Juego Abierto */}
            <Card className="p-6">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-[#d4af37]" />
                  <h3 className="font-bold">xA (Juego Abierto)</h3>
                </div>
                <Badge className="bg-[#d4af37] text-white">LEGEND</Badge>
              </div>
              <div className="space-y-3">
                {[
                  { player: "Pedri", team: "Barcelona", value: 6.2, badge: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/barcelona-1764596043358.png" },
                  { player: "Modric", team: "Real Madrid", value: 5.8, badge: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/real-madrid-1764626636759.png" },
                  { player: "Nico Williams", team: "Athletic", value: 5.4, badge: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/athletic-1764596047133.png" }
                ].map((player, index) => (
                  <div key={index} className="flex items-center justify-between rounded-lg p-2 hover:bg-neutral-50">
                    <div className="flex items-center gap-3">
                      <div className="relative h-6 w-6">
                        <Image src={player.badge} alt={player.team} fill className="object-contain" sizes="24px" />
                      </div>
                      <span className="text-sm font-semibold">{player.player}</span>
                    </div>
                    <span className="text-lg font-bold text-[#d4af37]">{player.value}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Progresión del Balón */}
            <Card className="p-6">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Move className="h-5 w-5 text-[#d4af37]" />
                  <h3 className="font-bold">Progresión (metros)</h3>
                </div>
                <Badge className="bg-[#d4af37] text-white">LEGEND</Badge>
              </div>
              <div className="space-y-3">
                {[
                  { player: "Gavi", team: "Barcelona", value: 142, badge: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/barcelona-1764596043358.png" },
                  { player: "Bellingham", team: "Real Madrid", value: 138, badge: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/real-madrid-1764626636759.png" },
                  { player: "De Paul", team: "Atlético", value: 128, badge: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/cbc5c8cc8c3e8abd0e175c00ee53b723-1764627217631.png" }
                ].map((player, index) => (
                  <div key={index} className="flex items-center justify-between rounded-lg p-2 hover:bg-neutral-50">
                    <div className="flex items-center gap-3">
                      <div className="relative h-6 w-6">
                        <Image src={player.badge} alt={player.team} fill className="object-contain" sizes="24px" />
                      </div>
                      <span className="text-sm font-semibold">{player.player}</span>
                    </div>
                    <span className="text-lg font-bold text-[#d4af37]">{player.value}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Impacto Defensivo (PPDA) */}
            <Card className="p-6">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-[#d4af37]" />
                  <h3 className="font-bold">PPDA Defensivo</h3>
                </div>
                <Badge className="bg-[#d4af37] text-white">LEGEND</Badge>
              </div>
              <div className="space-y-3">
                {[
                  { player: "Koundé", team: "Barcelona", value: 8.2, badge: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/barcelona-1764596043358.png" },
                  { player: "Rüdiger", team: "Real Madrid", value: 8.9, badge: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/real-madrid-1764626636759.png" },
                  { player: "Yeray", team: "Athletic", value: 9.4, badge: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/athletic-1764596047133.png" }
                ].map((player, index) => (
                  <div key={index} className="flex items-center justify-between rounded-lg p-2 hover:bg-neutral-50">
                    <div className="flex items-center gap-3">
                      <div className="relative h-6 w-6">
                        <Image src={player.badge} alt={player.team} fill className="object-contain" sizes="24px" />
                      </div>
                      <span className="text-sm font-semibold">{player.player}</span>
                    </div>
                    <span className="text-lg font-bold text-[#d4af37]">{player.value}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* NUEVO: Pases Progresivos */}
            <Card className="p-6">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-[#d4af37]" />
                  <h3 className="font-bold">Pases Progresivos</h3>
                </div>
                <Badge className="bg-[#d4af37] text-white">LEGEND</Badge>
              </div>
              <div className="space-y-3">
                {[
                  { player: "Kroos", team: "Real Madrid", value: 9.8, badge: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/real-madrid-1764626636759.png" },
                  { player: "De Jong", team: "Barcelona", value: 8.7, badge: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/barcelona-1764596043358.png" },
                  { player: "Koke", team: "Atlético", value: 7.9, badge: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/cbc5c8cc8c3e8abd0e175c00ee53b723-1764627217631.png" }
                ].map((player, index) => (
                  <div key={index} className="flex items-center justify-between rounded-lg p-2 hover:bg-neutral-50">
                    <div className="flex items-center gap-3">
                      <div className="relative h-6 w-6">
                        <Image src={player.badge} alt={player.team} fill className="object-contain" sizes="24px" />
                      </div>
                      <span className="text-sm font-semibold">{player.player}</span>
                    </div>
                    <span className="text-lg font-bold text-[#d4af37]">{player.value}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* NUEVO: Recuperaciones en Campo Rival */}
            <Card className="p-6">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Activity className="h-5 w-5 text-[#d4af37]" />
                  <h3 className="font-bold">Recuperaciones Alto</h3>
                </div>
                <Badge className="bg-[#d4af37] text-white">LEGEND</Badge>
              </div>
              <div className="space-y-3">
                {[
                  { player: "Canales", team: "Real Betis", value: 4.3, badge: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/betis-1764631004098.png" },
                  { player: "Gavi", team: "Barcelona", value: 4.1, badge: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/barcelona-1764596043358.png" },
                  { player: "Valverde", team: "Real Madrid", value: 3.9, badge: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/real-madrid-1764626636759.png" }
                ].map((player, index) => (
                  <div key={index} className="flex items-center justify-between rounded-lg p-2 hover:bg-neutral-50">
                    <div className="flex items-center gap-3">
                      <div className="relative h-6 w-6">
                        <Image src={player.badge} alt={player.team} fill className="object-contain" sizes="24px" />
                      </div>
                      <span className="text-sm font-semibold">{player.player}</span>
                    </div>
                    <span className="text-lg font-bold text-[#d4af37]">{player.value}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>

        {/* NUEVO: Análisis Táctico Premium */}
        <div id="tacticas" className="mb-12">
          <div className="mb-6 flex items-center gap-3">
            <Brain className="h-6 w-6 text-[#d4af37]" />
            <h2 className="text-2xl font-bold">Análisis Táctico Premium</h2>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* Sistemas de Juego */}
            <Card className="p-6">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="font-bold text-lg">Sistemas Más Efectivos</h3>
                <Badge className="bg-[#d4af37] text-white">LEGEND</Badge>
              </div>
              <div className="space-y-4">
                {[
                  { system: "4-3-3", xGDiff: "+0.8", teams: "Barcelona, Real Madrid", effectiveness: 85 },
                  { system: "4-4-2", xGDiff: "+0.5", teams: "Atlético, Athletic", effectiveness: 72 },
                  { system: "3-5-2", xGDiff: "+0.3", teams: "Real Sociedad", effectiveness: 68 }
                ].map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-bold">{item.system}</p>
                        <p className="text-xs text-neutral-500">{item.teams}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-bold text-[#d4af37]">{item.xGDiff}</p>
                        <p className="text-xs text-neutral-500">xG Diff</p>
                      </div>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-neutral-100">
                      <div 
                        className="h-full bg-[#d4af37]"
                        style={{ width: `${item.effectiveness}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Presión Alta */}
            <Card className="p-6">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="font-bold text-lg">Presión Alta (PPDA)</h3>
                <Badge className="bg-[#d4af37] text-white">LEGEND</Badge>
              </div>
              <div className="space-y-3">
                {[
                  { team: "FC Barcelona", ppda: 7.2, badge: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/barcelona-1764596043358.png" },
                  { team: "Real Sociedad", ppda: 8.4, badge: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/real-sociedad-1764630244938.png" },
                  { team: "Athletic Club", ppda: 9.1, badge: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/athletic-1764596047133.png" }
                ].map((team, index) => (
                  <div key={index} className="flex items-center justify-between rounded-lg p-2 hover:bg-neutral-50">
                    <div className="flex items-center gap-3">
                      <div className="relative h-8 w-8">
                        <Image src={team.badge} alt={team.team} fill className="object-contain" sizes="32px" />
                      </div>
                      <span className="text-sm font-semibold">{team.team}</span>
                    </div>
                    <span className="text-lg font-bold text-[#d4af37]">{team.ppda}</span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs text-neutral-500 italic">
                PPDA más bajo = presión más intensa
              </p>
            </Card>
          </div>
        </div>

        {/* NUEVO: Estadísticas de Equipos Premium */}
        <div className="mb-12">
          <div className="mb-6 flex items-center gap-3">
            <Users className="h-6 w-6 text-[#d4af37]" />
            <h2 className="text-2xl font-bold">Estadísticas de Equipos</h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* xG por Partido */}
            <Card className="p-6">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="font-bold">xG/90 Equipos</h3>
                <Badge className="bg-[#d4af37] text-white">LEGEND</Badge>
              </div>
              <div className="space-y-3">
                {[
                  { team: "Real Madrid", value: 2.4, badge: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/real-madrid-1764626636759.png" },
                  { team: "Barcelona", value: 2.3, badge: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/barcelona-1764596043358.png" },
                  { team: "Atlético", value: 1.9, badge: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/cbc5c8cc8c3e8abd0e175c00ee53b723-1764627217631.png" }
                ].map((team, index) => (
                  <div key={index} className="flex items-center justify-between rounded-lg p-2 hover:bg-neutral-50">
                    <div className="flex items-center gap-2">
                      <div className="relative h-6 w-6">
                        <Image src={team.badge} alt={team.team} fill className="object-contain" sizes="24px" />
                      </div>
                      <span className="text-sm font-medium">{team.team}</span>
                    </div>
                    <span className="text-lg font-bold text-[#d4af37]">{team.value}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Posesión Efectiva */}
            <Card className="p-6">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="font-bold">Posesión Efectiva</h3>
                <Badge className="bg-[#d4af37] text-white">LEGEND</Badge>
              </div>
              <div className="space-y-3">
                {[
                  { team: "Barcelona", value: "68%", badge: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/barcelona-1764596043358.png" },
                  { team: "Real Madrid", value: "61%", badge: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/real-madrid-1764626636759.png" },
                  { team: "Real Sociedad", value: "58%", badge: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/real-sociedad-1764630244938.png" }
                ].map((team, index) => (
                  <div key={index} className="flex items-center justify-between rounded-lg p-2 hover:bg-neutral-50">
                    <div className="flex items-center gap-2">
                      <div className="relative h-6 w-6">
                        <Image src={team.badge} alt={team.team} fill className="object-contain" sizes="24px" />
                      </div>
                      <span className="text-sm font-medium">{team.team}</span>
                    </div>
                    <span className="text-lg font-bold text-[#d4af37]">{team.value}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Conversión de Tiros */}
            <Card className="p-6">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="font-bold">Conversión Tiros</h3>
                <Badge className="bg-[#d4af37] text-white">LEGEND</Badge>
              </div>
              <div className="space-y-3">
                {[
                  { team: "Girona", value: "14.2%", badge: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/8f43addbb29e4a72f5e90b6edfe4728f-1764626585789.png" },
                  { team: "Barcelona", value: "13.8%", badge: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/barcelona-1764596043358.png" },
                  { team: "Real Madrid", value: "12.9%", badge: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/real-madrid-1764626636759.png" }
                ].map((team, index) => (
                  <div key={index} className="flex items-center justify-between rounded-lg p-2 hover:bg-neutral-50">
                    <div className="flex items-center gap-2">
                      <div className="relative h-6 w-6">
                        <Image src={team.badge} alt={team.team} fill className="object-contain" sizes="24px" />
                      </div>
                      <span className="text-sm font-medium">{team.team}</span>
                    </div>
                    <span className="text-lg font-bold text-[#d4af37]">{team.value}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>

        {/* NUEVO: Mapas de Calor Premium */}
        <div className="mb-12">
          <div className="mb-6 flex items-center gap-3">
            <Eye className="h-6 w-6 text-[#d4af37]" />
            <h2 className="text-2xl font-bold">Mapas de Calor Premium</h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card className="p-6">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative h-10 w-10">
                    <Image
                      src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/barcelona-1764596043358.png"
                      alt="Barcelona"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold">Barcelona - Zonas Activas</h3>
                    <p className="text-xs text-neutral-500">Últimos 5 partidos</p>
                  </div>
                </div>
                <Badge className="bg-[#d4af37] text-white">LEGEND</Badge>
              </div>
              <div className="relative aspect-[3/2] overflow-hidden rounded-xl border-2 border-[#d4af37]/20 bg-gradient-to-b from-green-600 via-yellow-500 to-red-600 shadow-lg">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iIzIyOGI1NSIvPjxsaW5lIHgxPSIwIiB5MT0iMjAwIiB4Mj0iNjAwIiB5Mj0iMjAwIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiLz48Y2lyY2xlIGN4PSIzMDAiIGN5PSIyMDAiIHI9IjUwIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiIGZpbGw9Im5vbmUiLz48L3N2Zz4=')] bg-contain bg-center bg-no-repeat opacity-20" />
                </div>
                <div className="absolute right-1/4 top-1/4 h-32 w-32 rounded-full bg-red-500/70 blur-3xl" />
                <div className="absolute left-1/3 top-1/3 h-24 w-24 rounded-full bg-orange-500/60 blur-3xl" />
              </div>
            </Card>

            <Card className="p-6">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative h-10 w-10">
                    <Image
                      src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/real-madrid-1764626636759.png"
                      alt="Real Madrid"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold">Real Madrid - Zonas Activas</h3>
                    <p className="text-xs text-neutral-500">Últimos 5 partidos</p>
                  </div>
                </div>
                <Badge className="bg-[#d4af37] text-white">LEGEND</Badge>
              </div>
              <div className="relative aspect-[3/2] overflow-hidden rounded-xl border-2 border-[#d4af37]/20 bg-gradient-to-b from-green-600 via-yellow-500 to-red-600 shadow-lg">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iIzIyOGI1NSIvPjxsaW5lIHgxPSIwIiB5MT0iMjAwIiB4Mj0iNjAwIiB5Mj0iMjAwIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiLz48Y2lyY2xlIGN4PSIzMDAiIGN5PSIyMDAiIHI9IjUwIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiIGZpbGw9Im5vbmUiLz48L3N2Zz4=')] bg-contain bg-center bg-no-repeat opacity-20" />
                </div>
                <div className="absolute left-1/4 top-1/4 h-28 w-28 rounded-full bg-red-500/65 blur-3xl" />
                <div className="absolute right-1/3 top-1/3 h-32 w-32 rounded-full bg-orange-500/55 blur-3xl" />
              </div>
            </Card>
          </div>
        </div>

        {/* Rankings Avanzados Preview */}
        <div className="mb-12">
          <div className="mb-6 flex items-center gap-3">
            <TrendingUp className="h-6 w-6 text-[#d4af37]" />
            <h2 className="text-2xl font-bold">Rankings Avanzados</h2>
          </div>
          
          <Card className="p-6 text-center">
            <Crown className="mx-auto mb-4 h-12 w-12 text-[#d4af37]" />
            <h3 className="mb-2 text-xl font-bold">Accede a Todos los Rankings</h3>
            <p className="mb-4 text-neutral-600">
              Explora rankings completos con métricas avanzadas exclusivas para LEGEND
            </p>
            <Link
              href="/los-mas"
              className="inline-block rounded-full bg-[#d4af37] px-6 py-3 font-medium text-white hover:bg-[#b8941f]"
            >
              Ver Todos los Rankings
            </Link>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}