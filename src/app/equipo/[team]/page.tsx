"use client"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { TrendingUp, Users, Calendar, Lock, AlertCircle, ArrowRight, Crown, Target, Zap, Activity, ChevronLeft, ChevronRight } from "lucide-react"
import LegendsCard from "@/components/LegendsCard"
import LegendsBadge from "@/components/LegendsBadge"
import { useParams } from "next/navigation"
import { useEffect, useState, useRef } from "react"
import { useAuth } from "@/contexts/AuthContext"

const teamData = {
  name: "FC BARCELONA",
  logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/barcelona-1764596043358.png",
  position: "1º",
  points: 67,
  goalDifference: "+45",
  nextRival: "Athletic Club",
  nextRivalLogo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/athletic-1764596047133.png"
}

const topPlayers = [
  {
    name: "Pau Cubarsí",
    number: "121",
    metric: "Pases",
    image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=400&h=400&fit=crop"
  },
  {
    name: "Lamine Yamal",
    number: "9",
    metric: "Asistencias",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=400&fit=crop"
  },
  {
    name: "De Jong",
    number: "17",
    metric: "Goles",
    image: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=400&h=400&fit=crop"
  },
  {
    name: "Gavi",
    number: "4.3",
    metric: "Recuperaciones",
    image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=400&h=400&fit=crop"
  }
]

// Artículos recientes del Barça para el carrusel
const barcaArticles = [
  {
    title: "El Clásico en Números: Las Claves de la Victoria Culer",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=500&fit=crop",
    category: "ANÁLISIS",
    date: "Hace 2 días",
    tags: ["Táctica", "xG", "Clásico"]
  },
  {
    title: "Lamine Yamal: El Fenómeno que Rompe Todas las Métricas",
    image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&h=500&fit=crop",
    category: "JUGADORES",
    date: "Hace 3 días",
    tags: ["Yamal", "Estadísticas", "Récords"]
  },
  {
    title: "El Sistema de Xavi: Dominio Total en LaLiga",
    image: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=800&h=500&fit=crop",
    category: "TÁCTICA",
    date: "Hace 5 días",
    tags: ["Xavi", "Posesión", "Presión"]
  },
  {
    title: "Lewandowski: Análisis de su Rendimiento por Zonas",
    image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=800&h=500&fit=crop",
    category: "ANÁLISIS",
    date: "Hace 1 semana",
    tags: ["Lewandowski", "Zonas", "Finalización"]
  },
  {
    title: "Barcelona vs Real Madrid: Los Números del Clásico",
    image: "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?w=800&h=500&fit=crop",
    category: "POST-PARTIDO",
    date: "Hace 1 semana",
    tags: ["Clásico", "Métricas", "Comparativa"]
  }
]

const articles = [
  {
    title: "El Clásico en Números: Las Claves de la Victoria Culer",
    date: "Hace 1 día",
    category: "ANÁLISIS"
  },
  {
    title: "Tactical Breakdown: El Sistema de Xavi",
    date: "Hace 2 días",
    category: "TÁCTICA"
  }
]

export default function TeamPage() {
  const params = useParams()
  const { userType } = useAuth()
  const isLegends = userType === 'legends'
  const [isValidTeam, setIsValidTeam] = useState(true)
  const [scrollPosition, setScrollPosition] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Validate team slug
    const validSlugs = ['fc-barcelona', 'real-madrid', 'atletico-madrid', 'athletic-club', 'real-betis', 'real-sociedad', 'villarreal', 'valencia', 'sevilla', 'girona', 'mallorca', 'osasuna', 'getafe', 'celta-de-vigo', 'las-palmas', 'rayo-vallecano', 'espanyol', 'leganes', 'valladolid', 'alaves']
    if (!validSlugs.includes(params.team as string)) {
      setIsValidTeam(false)
    }
  }, [params.team])

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 400
      const newPosition = direction === 'left' 
        ? scrollPosition - scrollAmount 
        : scrollPosition + scrollAmount
      
      carouselRef.current.scrollTo({
        left: newPosition,
        behavior: 'smooth'
      })
      setScrollPosition(newPosition)
    }
  }

  if (!isValidTeam) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <Card className="p-12 text-center">
            <h1 className="mb-4 text-2xl font-bold">Equipo no encontrado</h1>
            <p className="text-neutral-600">El equipo que buscas no está disponible.</p>
            <Link href="/" className="mt-4 inline-block text-[#d4af37] hover:underline">
              Volver al inicio
            </Link>
          </Card>
        </main>
        <Footer />
      </div>
    )
  }

  // Determinar el escudo según el equipo
  const getTeamBadge = (teamSlug: string) => {
    if (teamSlug === 'fc-barcelona') {
      return "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/barcelona-1764596043358.png"
    } else if (teamSlug === 'athletic-club') {
      return "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/athletic-1764596047133.png"
    }
    return ""
  }

  const teamBadge = getTeamBadge(params.team as string)

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Team Header MEJORADO - MUCHO MÁS ATRACTIVO */}
        <div className="mb-8 overflow-hidden rounded-2xl bg-gradient-to-br from-[#004d98] via-[#004d98] to-[#a50044] shadow-2xl">
          <div className="relative p-8 md:p-12">
            {/* Patrón de fondo decorativo */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-white blur-3xl" />
              <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-[#d4af37] blur-3xl" />
            </div>

            {/* Contenido principal */}
            <div className="relative z-10">
              <div className="mb-8 flex flex-col items-center gap-6 md:flex-row md:items-start">
                {teamBadge && (
                  <div className="relative h-32 w-32 flex-shrink-0 md:h-40 md:w-40">
                    <div className="absolute inset-0 rounded-full bg-white/20 backdrop-blur-sm" />
                    <Image
                      src={teamBadge}
                      alt={teamData.name}
                      fill
                      className="object-contain p-4 drop-shadow-2xl"
                    />
                  </div>
                )}
                <div className="flex-1 text-center md:text-left">
                  <h1 className="mb-4 text-5xl font-bold text-white drop-shadow-lg md:text-6xl">
                    {teamData.name}
                  </h1>
                  <div className="flex flex-wrap items-center justify-center gap-3 md:justify-start">
                    <Badge className="bg-[#d4af37] text-white text-lg px-4 py-2 font-bold shadow-lg">
                      {teamData.position} • {teamData.points} PTS
                    </Badge>
                    <Badge className="bg-white/20 backdrop-blur-sm text-white text-lg px-4 py-2 font-bold border-2 border-white/40">
                      {teamData.goalDifference}
                    </Badge>
                  </div>
                </div>
              </div>

              {/* PRÓXIMO RIVAL - DISEÑO DESTACADO */}
              <div className="relative overflow-hidden rounded-xl bg-white/10 backdrop-blur-md border-2 border-white/20 p-6 md:p-8">
                <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-[#d4af37]/20 blur-2xl" />
                <div className="relative z-10">
                  <div className="mb-4 flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-[#d4af37]" />
                    <p className="text-sm font-semibold uppercase tracking-wide text-[#d4af37]">
                      Próximo Rival
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6">
                      {teamData.nextRivalLogo && (
                        <div className="relative h-20 w-20 flex-shrink-0 md:h-24 md:w-24">
                          <div className="absolute inset-0 rounded-full bg-white/30 backdrop-blur-sm" />
                          <Image
                            src={teamData.nextRivalLogo}
                            alt={teamData.nextRival}
                            fill
                            className="object-contain p-3 drop-shadow-lg"
                          />
                        </div>
                      )}
                      <div>
                        <p className="text-3xl font-bold text-white md:text-4xl">
                          {teamData.nextRival}
                        </p>
                        <p className="mt-1 text-sm text-white/80">
                          San Mamés • Sábado 18:30
                        </p>
                      </div>
                    </div>
                    
                    <Link href="/partido/preview/athletic-barcelona">
                      <Button className="hidden md:flex items-center gap-2 bg-[#d4af37] hover:bg-[#b8941f] text-white font-bold px-6 py-6 rounded-full shadow-xl">
                        Ver Previa
                        <ArrowRight className="h-5 w-5" />
                      </Button>
                    </Link>
                  </div>

                  {/* Botón móvil */}
                  <Link href="/partido/preview/athletic-barcelona" className="mt-4 md:hidden">
                    <Button className="w-full flex items-center justify-center gap-2 bg-[#d4af37] hover:bg-[#b8941f] text-white font-bold py-3 rounded-full">
                      Ver Previa del Partido
                      <ArrowRight className="h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CARRUSEL DE ARTÍCULOS DEL BARÇA */}
        <div className="mb-12">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold">Artículos Recientes</h2>
            <div className="flex gap-2">
              <button
                onClick={() => scrollCarousel('left')}
                className="rounded-full bg-neutral-100 p-2 hover:bg-neutral-200 transition-colors"
                aria-label="Anterior"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() => scrollCarousel('right')}
                className="rounded-full bg-neutral-100 p-2 hover:bg-neutral-200 transition-colors"
                aria-label="Siguiente"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div 
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory touch-pan-x"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {barcaArticles.map((article, index) => (
              <Link
                key={index}
                href="/articulo/sample"
                className="group min-w-[350px] flex-shrink-0 snap-start"
              >
                <Card className="overflow-hidden transition-all hover:shadow-xl">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                    <Badge className="absolute left-4 top-4 bg-white text-black font-semibold">
                      {article.category}
                    </Badge>
                  </div>
                  <div className="p-4">
                    <h3 className="mb-2 font-bold text-lg line-clamp-2 group-hover:text-[#d4af37] transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-xs text-neutral-500 mb-3">{article.date}</p>
                    <div className="flex flex-wrap gap-2">
                      {article.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="text-xs px-2 py-1 bg-neutral-100 rounded-full text-neutral-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* PREPARTIDO Y POSTPARTIDO DEL BARÇA - DESTACADOS */}
        <div className="mb-12">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-3xl font-bold">Análisis de Partidos</h2>
            {teamBadge && (
              <div className="relative h-12 w-12">
                <Image
                  src={teamBadge}
                  alt={teamData.name}
                  fill
                  className="object-contain"
                />
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* POSTPARTIDO */}
            <Link href="/partido/post/barcelona-athletic">
              <Card className="group overflow-hidden transition-all hover:shadow-2xl hover:border-[#d4af37] border-2">
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-[#004d98] to-[#a50044]">
                  <div className="absolute inset-0 bg-black/40" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex items-center gap-8">
                      <div className="text-center">
                        <div className="relative mx-auto mb-3 h-20 w-20">
                          <Image
                            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/barcelona-1764596043358.png"
                            alt="FC Barcelona"
                            fill
                            className="object-contain drop-shadow-lg"
                          />
                        </div>
                        <p className="text-sm font-semibold text-white">Barcelona</p>
                      </div>
                      <div className="text-center text-white">
                        <p className="text-6xl font-bold drop-shadow-lg">3-1</p>
                      </div>
                      <div className="text-center">
                        <div className="relative mx-auto mb-3 h-20 w-20 opacity-90">
                          <Image
                            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/athletic-1764596047133.png"
                            alt="Athletic Club"
                            fill
                            className="object-contain drop-shadow-lg"
                          />
                        </div>
                        <p className="text-sm font-semibold text-white">Athletic</p>
                      </div>
                    </div>
                  </div>
                  <Badge className="absolute left-4 top-4 bg-red-600 text-white font-semibold">
                    POSTPARTIDO
                  </Badge>
                </div>
                <div className="p-6 bg-white">
                  <h3 className="mb-3 text-xl font-bold group-hover:text-[#d4af37] transition-colors">
                    Barcelona 3-1 Athletic Club
                  </h3>
                  <p className="mb-4 text-sm text-neutral-600 leading-relaxed">
                    Análisis completo con métricas avanzadas, mapas de calor, evolución del partido y rendimiento individual
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-3 text-xs">
                      <span className="font-semibold text-neutral-700">xG: 2.7 - 1.1</span>
                      <span className="text-neutral-400">•</span>
                      <span className="font-semibold text-neutral-700">Jornada 15</span>
                    </div>
                    <ArrowRight className="h-5 w-5 text-[#d4af37] transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Card>
            </Link>

            {/* PREPARTIDO - CON ESCUDO REAL DEL BETIS */}
            <Link href="/partido/preview/betis-barcelona">
              <Card className="group overflow-hidden transition-all hover:shadow-2xl hover:border-[#d4af37] border-2">
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-green-700 via-green-600 to-[#004d98]">
                  <div className="absolute inset-0 bg-black/30" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex items-center gap-8">
                      <div className="text-center">
                        <div className="relative mx-auto mb-3 h-20 w-20 opacity-90">
                          <Image
                            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/betis-1764631004098.png"
                            alt="Real Betis"
                            fill
                            className="object-contain drop-shadow-lg"
                          />
                        </div>
                        <p className="text-sm font-semibold text-white">Betis</p>
                      </div>
                      <div className="text-center text-white">
                        <p className="text-6xl font-bold drop-shadow-lg">VS</p>
                        <p className="mt-2 text-xs font-semibold bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">Sábado 14:00</p>
                      </div>
                      <div className="text-center">
                        <div className="relative mx-auto mb-3 h-20 w-20">
                          <Image
                            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/barcelona-1764596043358.png"
                            alt="FC Barcelona"
                            fill
                            className="object-contain drop-shadow-lg"
                          />
                        </div>
                        <p className="text-sm font-semibold text-white">Barcelona</p>
                      </div>
                    </div>
                  </div>
                  <Badge className="absolute left-4 top-4 bg-blue-600 text-white font-semibold">
                    PREPARTIDO
                  </Badge>
                </div>
                <div className="p-6 bg-white">
                  <h3 className="mb-3 text-xl font-bold group-hover:text-[#d4af37] transition-colors">
                    Betis vs Barcelona • Benito Villamarín
                  </h3>
                  <p className="mb-4 text-sm text-neutral-600 leading-relaxed">
                    Previa avanzada con probabilidades, mapas de calor predictivos, análisis táctico y tendencias históricas
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-3 text-xs">
                      <span className="font-semibold text-neutral-700">Prob: 60% Barça</span>
                      <span className="text-neutral-400">•</span>
                      <span className="font-semibold text-neutral-700">Jornada 16</span>
                    </div>
                    <ArrowRight className="h-5 w-5 text-[#d4af37] transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Card>
            </Link>
          </div>
        </div>

        {/* SECCIÓN EXCLUSIVA LEGENDS: Análisis Táctico Avanzado - CON CORONA */}
        {isLegends ? (
          <div className="mb-12">
            <div className="mb-6 flex items-center gap-3">
              <Crown className="h-7 w-7 text-[#d4af37]" />
              <h2 className="text-2xl font-bold">Análisis Táctico Avanzado</h2>
              <LegendsBadge />
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="p-6 border-2 border-[#d4af37]">
                <div className="mb-4 flex items-center gap-2">
                  <Target className="h-5 w-5 text-[#d4af37]" />
                  <h3 className="font-bold">Presión Alta</h3>
                </div>
                <p className="text-4xl font-bold text-[#d4af37] mb-2">87.2%</p>
                <p className="text-sm text-neutral-600">
                  Efectividad en presión alta en campo rival. Líder de LaLiga.
                </p>
              </Card>

              <Card className="p-6 border-2 border-[#d4af37]">
                <div className="mb-4 flex items-center gap-2">
                  <Zap className="h-5 w-5 text-[#d4af37]" />
                  <h3 className="font-bold">Transiciones Rápidas</h3>
                </div>
                <p className="text-4xl font-bold text-[#d4af37] mb-2">4.8 seg</p>
                <p className="text-sm text-neutral-600">
                  Tiempo promedio de transición defensa-ataque.
                </p>
              </Card>

              <Card className="p-6 border-2 border-[#d4af37]">
                <div className="mb-4 flex items-center gap-2">
                  <Activity className="h-5 w-5 text-[#d4af37]" />
                  <h3 className="font-bold">Dominio de Zonas</h3>
                </div>
                <p className="text-4xl font-bold text-[#d4af37] mb-2">73%</p>
                <p className="text-sm text-neutral-600">
                  Control de zonas clave en campo rival.
                </p>
              </Card>
            </div>

            {/* Mapa de Presión LEGENDS */}
            <Card className="p-6 mt-6 border-2 border-[#d4af37]">
              <h3 className="mb-4 font-bold text-lg flex items-center gap-2">
                <Activity className="h-5 w-5 text-[#d4af37]" />
                Mapa de Presión Avanzado
              </h3>
              <div className="relative mb-4 aspect-video w-full overflow-hidden rounded-lg bg-neutral-100">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/edcada77-6be0-4456-8471-5c5223fafc7d/generated_images/football-tactical-heat-map-visualization-b4286ada-20251130225308.jpg"
                  alt="Mapa de presión FC Barcelona"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-sm text-neutral-600">
                Zonas de presión intensiva del FC Barcelona. Dominio absoluto en tercio medio y superior.
              </p>
            </Card>
          </div>
        ) : (
          <Card className="mb-12 border-2 border-[#d4af37] bg-gradient-to-br from-[#d4af37]/10 to-transparent p-12 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#d4af37]/20">
              <Lock className="h-8 w-8 text-[#d4af37]" />
            </div>
            <div className="mb-4 flex items-center justify-center gap-2">
              <Crown className="h-6 w-6 text-[#d4af37]" />
              <h3 className="text-2xl font-bold">Contenido Exclusivo LEGENDS</h3>
            </div>
            <p className="mx-auto mb-6 max-w-xl text-neutral-600">
              Accede a análisis táctico avanzado, mapas de presión, métricas de transiciones y control de zonas exclusivas para suscriptores LEGENDS.
            </p>
            <Link
              href="/legends"
              className="inline-block rounded-full bg-[#d4af37] px-8 py-3 font-bold text-white hover:bg-[#b8941f]"
            >
              Unirse a LEGENDS
            </Link>
          </Card>
        )}

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Advanced Match Analysis Section */}
            <div>
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-2xl font-bold">Análisis del Próximo Partido</h2>
                <Badge className="bg-[#d4af37] text-white">VS ATHLETIC CLUB</Badge>
              </div>
              
              {/* Quick Insights */}
              <Card className="mb-6 border-2 border-[#d4af37] bg-gradient-to-br from-[#d4af37]/5 to-white p-6">
                <div className="mb-4 flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-[#d4af37]" />
                  <h3 className="font-bold text-lg">Insights Rápidos</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-[#d4af37] flex-shrink-0"></div>
                    <p className="text-sm">El Barça genera el 73% de su xG en los primeros 60 minutos, mientras que Athletic es más peligroso en transiciones rápidas (0.8 xG/transición).</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-[#d4af37] flex-shrink-0"></div>
                    <p className="text-sm">Los últimos 5 partidos muestran dominancia azulgrana en banda derecha con Lamine Yamal (4.2 regates exitosos/90).</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-[#d4af37] flex-shrink-0"></div>
                    <p className="text-sm">Athletic registra debilidad defensiva en minutos 15-30 y 60-75, coincidiendo con picos ofensivos del Barcelona.</p>
                  </div>
                </div>
              </Card>

              {/* Heat Map */}
              <Card className="mb-6 p-6">
                <h3 className="mb-4 font-bold text-lg">Mapa de Calor - Últimos 5 Partidos</h3>
                <div className="relative mb-4 aspect-video w-full overflow-hidden rounded-lg bg-neutral-100">
                  <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/edcada77-6be0-4456-8471-5c5223fafc7d/generated_images/football-tactical-heat-map-visualization-b4286ada-20251130225308.jpg"
                    alt="Mapa de calor FC Barcelona"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-sm text-neutral-600">
                  Zonas de mayor actividad del FC Barcelona. Predominio en tercio ofensivo y banda derecha.
                </p>
              </Card>

              {/* xG Timeline */}
              <Card className="mb-6 p-6">
                <h3 className="mb-4 font-bold text-lg">Probabilidad de Gol Esperada (xG) por Minuto</h3>
                <div className="relative mb-4 aspect-video w-full overflow-hidden rounded-lg bg-neutral-100">
                  <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/edcada77-6be0-4456-8471-5c5223fafc7d/generated_images/expected-goals-xg-timeline-chart-minute--0c33f577-20251130225308.jpg"
                    alt="Gráfico xG por minuto"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-sm text-neutral-600">
                  Distribución temporal de xG acumulado. Picos de peligrosidad entre minutos 20-35 y 55-70.
                </p>
              </Card>

              {/* Team Comparison */}
              <Card className="mb-6 p-6">
                <h3 className="mb-4 font-bold text-lg">Comparativa: Barça vs Athletic Club</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                  <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-neutral-100">
                    <Image
                      src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/edcada77-6be0-4456-8471-5c5223fafc7d/generated_images/football-team-comparison-radar-chart-six-d092946d-20251130225308.jpg"
                      alt="Comparativa de equipos"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-4">
                    <div>
                      <div className="mb-2 flex justify-between text-sm">
                        <span>Posesión Media</span>
                        <span className="font-bold text-[#d4af37]">64% vs 48%</span>
                      </div>
                      <div className="h-2 w-full overflow-hidden rounded-full bg-neutral-200">
                        <div className="h-full w-[64%] bg-[#d4af37]"></div>
                      </div>
                    </div>
                    <div>
                      <div className="mb-2 flex justify-between text-sm">
                        <span>Tiros a Puerta / 90</span>
                        <span className="font-bold text-[#d4af37]">6.2 vs 3.8</span>
                      </div>
                      <div className="h-2 w-full overflow-hidden rounded-full bg-neutral-200">
                        <div className="h-full w-[62%] bg-[#d4af37]"></div>
                      </div>
                    </div>
                    <div>
                      <div className="mb-2 flex justify-between text-sm">
                        <span>Pases Clave / 90</span>
                        <span className="font-bold text-[#d4af37]">14.1 vs 8.3</span>
                      </div>
                      <div className="h-2 w-full overflow-hidden rounded-full bg-neutral-200">
                        <div className="h-full w-[70%] bg-[#d4af37]"></div>
                      </div>
                    </div>
                    <div>
                      <div className="mb-2 flex justify-between text-sm">
                        <span>Duelos Ganados (%)</span>
                        <span className="font-bold text-[#d4af37]">52% vs 54%</span>
                      </div>
                      <div className="h-2 w-full overflow-hidden rounded-full bg-neutral-200">
                        <div className="h-full w-[52%] bg-[#d4af37]"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-neutral-600">
                  Métricas clave comparadas. Barcelona domina en aspectos ofensivos, Athletic en intensidad física.
                </p>
              </Card>

              {/* LEGEND CTA */}
              <LegendsCard 
                title="Ver Análisis Completo (LEGEND)"
                description="Accede a proyecciones avanzadas, patrones históricos, análisis por jugador, mapas de presión y modelos predictivos completos"
                link="/partido/preview/barcelona-vs-athletic"
              />
            </div>

            {/* Post Match Analysis */}
            <div>
              <h2 className="mb-4 text-2xl font-bold">Última Jornada</h2>
              <Card className="p-6">
                <div className="mb-4">
                  <Badge className="mb-2">POST-PARTIDO</Badge>
                  <h3 className="text-xl font-bold">Barcelona 3 - 1 Real Madrid</h3>
                  <p className="text-sm text-neutral-600">Análisis completo del encuentro</p>
                </div>
                <Link href="/partido/post/sample">
                  <Button className="w-full bg-[#d4af37] hover:bg-[#b8941f]">
                    Ver Análisis Completo
                  </Button>
                </Link>
              </Card>
            </div>

            {/* Articles */}
            <div>
              <h2 className="mb-4 text-2xl font-bold">Más Artículos del Barça</h2>
              <div className="space-y-4">
                {articles.map((article, index) => (
                  <Card key={index} className="p-4 hover:shadow-lg transition-shadow">
                    <Badge className="mb-2">{article.category}</Badge>
                    <h3 className="mb-1 font-bold hover:text-[#d4af37]">{article.title}</h3>
                    <p className="text-xs text-neutral-500">{article.date}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Squad Highlights */}
            <Card className="p-6">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="font-bold">Jugadores Destacados</h3>
                <Link href="/equipo/fc-barcelona/plantilla">
                  <Button variant="ghost" size="sm" className="text-[#d4af37]">
                    Ver plantilla →
                  </Button>
                </Link>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {topPlayers.map((player, index) => (
                  <Link 
                    key={index}
                    href={`/jugador/${player.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="group"
                  >
                    <div className="relative mb-2 overflow-hidden rounded-lg">
                      <Image
                        src={player.image}
                        alt={player.name}
                        width={200}
                        height={200}
                        className="aspect-square object-cover transition-transform group-hover:scale-105"
                      />
                      <div className="absolute right-2 top-2 flex h-10 w-10 items-center justify-center rounded-full bg-[#d4af37] text-sm font-bold text-white">
                        {player.number}
                      </div>
                    </div>
                    <p className="text-sm font-bold group-hover:text-[#d4af37]">{player.name}</p>
                    <p className="text-xs text-neutral-500">{player.metric}</p>
                  </Link>
                ))}
              </div>
            </Card>

            {/* Quick Stats */}
            <Card className="bg-black p-6 text-white">
              <h3 className="mb-4 font-bold">Estadísticas Rápidas</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm">xG por partido</span>
                  <span className="font-bold text-[#d4af37]">2.1</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Posesión media</span>
                  <span className="font-bold text-[#d4af37]">64%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Pases completados</span>
                  <span className="font-bold text-[#d4af37]">612</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Precisión de tiro</span>
                  <span className="font-bold text-[#d4af37]">42%</span>
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