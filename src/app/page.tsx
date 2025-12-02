"use client"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, ChevronRight, TrendingUp, Target, Zap, Activity, Award, Crown, ArrowRight, Calendar } from "lucide-react"
import { useState } from "react"
import LegendsBadge from "@/components/LegendsBadge"
import LegendContent from "@/components/LegendContent"

const featuredArticles = [
  {
    title: "Remontada de Vértigo: Cómo el Atlético Volteó al Rayo Según las Estadísticas",
    image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=1600&h=900&fit=crop",
    category: "ANÁLISIS POST-PARTIDO",
    stats: "3-2 • xG: 2.8 - 1.4",
    author: "eloycollazosrubio",
    date: "10 de Noviembre, 2025",
    url: null, // ❌ NO ENLAZAR - Artículo no disponible
    legends: true
  },
  {
    title: "El Clásico en Números: Las Claves de la Victoria Culer",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1200&h=600&fit=crop",
    category: "ANÁLISIS",
    stats: "xG: 2.4 - 1.1",
    url: "/articulo/sample"
  },
  {
    title: "Lamine Yamal: El Fenómeno que Rompe Todas las Métricas",
    image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=1200&h=600&fit=crop",
    category: "JUGADORES",
    stats: "7 goles, 9 asistencias",
    url: "/jugador/lamine-yamal"
  },
  {
    title: "Athletic Club vs Barcelona: Previa Avanzada",
    image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=1200&h=600&fit=crop",
    category: "PREVIA",
    stats: "Probabilidad: 54%",
    legends: true,
    url: "/partido/preview/betis-barcelona"
  }
]

const articles = [
  {
    title: "El Rendimiento de Lewandowski: Análisis por Zonas",
    excerpt: "Desglose completo de las métricas del delantero polaco en lo que va de temporada",
    category: "ANÁLISIS",
    date: "Hace 2 horas",
    image: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=400&h=300&fit=crop",
    stats: "xG: 0.89 por partido"
  },
  {
    title: "Real Madrid: Los Números de la Derrota",
    excerpt: "Post-partido con estadísticas avanzadas y zonas de influencia",
    category: "POST-PARTIDO",
    date: "Hace 5 horas",
    image: "https://images.unsplash.com/photo-1522778526097-ce0a22ceb253?w=400&h=300&fit=crop",
    stats: "62% posesión"
  },
  {
    title: "Top 10: Jugadores con Más Pases Esperados Completados",
    excerpt: "El ranking definitivo de los mejores pasadores según nuestras métricas",
    category: "RANKINGS",
    date: "Hace 1 día",
    image: "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?w=400&h=300&fit=crop",
    stats: "654 pases completados"
  }
]

// Demo data for rankings - ESCUDOS ACTUALIZADOS
const rankingXgJornada = [
  { player: "Lewandowski", team: "FC Barcelona", teamBadge: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/barcelona-1764596043358.png", xg: 2.34 },
  { player: "Griezmann", team: "Atlético Madrid", teamBadge: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/cbc5c8cc8c3e8abd0e175c00ee53b723-1764627217631.png", xg: 1.87 },
  { player: "Joselu", team: "Real Madrid", teamBadge: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/real-madrid-1764626636759.png", xg: 1.65 },
  { player: "Morata", team: "Atlético Madrid", teamBadge: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/cbc5c8cc8c3e8abd0e175c00ee53b723-1764627217631.png", xg: 1.52 },
  { player: "Bellingham", team: "Real Madrid", teamBadge: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/real-madrid-1764626636759.png", xg: 1.48 }
]

const teamEfficiency = [
  { team: "FC Barcelona", logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/barcelona-1764596043358.png", goalsPerShot: 0.42 },
  { team: "Real Madrid", logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/real-madrid-1764626636759.png", goalsPerShot: 0.38 },
  { team: "Girona", logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/8f43addbb29e4a72f5e90b6edfe4728f-1764626585789.png", goalsPerShot: 0.35 },
  { team: "Athletic Club", logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/athletic-1764596047133.png", goalsPerShot: 0.33 },
  { team: "Real Sociedad", logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/real-sociedad-1764630244938.png", goalsPerShot: 0.31 }
]

const shotsOnTarget = [
  { team: "FC Barcelona", teamBadge: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/barcelona-1764596043358.png", shots: 6.8 },
  { team: "Real Madrid", teamBadge: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/real-madrid-1764626636759.png", shots: 6.2 },
  { team: "Atlético Madrid", teamBadge: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/cbc5c8cc8c3e8abd0e175c00ee53b723-1764627217631.png", shots: 5.4 },
  { team: "Real Sociedad", teamBadge: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/real-sociedad-1764630244938.png", shots: 5.1 },
  { team: "Villarreal", teamBadge: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/villarreal-1764626672679.png", shots: 4.9 }
]

const expectedAssists = [
  { player: "Lamine Yamal", team: "FC Barcelona", teamBadge: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/barcelona-1764596043358.png", xa: 8.7, image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/edcada77-6be0-4456-8471-5c5223fafc7d/generated_images/professional-football-player-portrait-of-9b0f6f4f-20251201233905.jpg" },
  { player: "Pedri", team: "FC Barcelona", teamBadge: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/barcelona-1764596043358.png", xa: 7.2, image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/edcada77-6be0-4456-8471-5c5223fafc7d/generated_images/professional-football-player-portrait-pe-56ea352d-20251130225132.jpg" },
  { player: "Vinícius Jr", team: "Real Madrid", teamBadge: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/real-madrid-1764626636759.png", xa: 6.9, image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/edcada77-6be0-4456-8471-5c5223fafc7d/generated_images/professional-football-player-portrait-vi-0edc19c3-20251130225133.jpg" },
  { player: "Griezmann", team: "Atlético Madrid", teamBadge: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/cbc5c8cc8c3e8abd0e175c00ee53b723-1764627217631.png", xa: 6.4, image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/edcada77-6be0-4456-8471-5c5223fafc7d/generated_images/professional-football-player-portrait-an-b7b9a5a3-20251130225134.jpg" },
  { player: "Bellingham", team: "Real Madrid", teamBadge: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/real-madrid-1764626636759.png", xa: 5.8, image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/edcada77-6be0-4456-8471-5c5223fafc7d/generated_images/professional-football-player-portrait-ju-d3912815-20251130225123.jpg" }
]

const hotMoments = [
  { minute: "0-15", goals: 67, percentage: 12 },
  { minute: "16-30", goals: 92, percentage: 17 },
  { minute: "31-45", goals: 84, percentage: 15 },
  { minute: "46-60", goals: 78, percentage: 14 },
  { minute: "61-75", goals: 95, percentage: 17 },
  { minute: "76-90+", goals: 138, percentage: 25 }
]

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredArticles.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredArticles.length) % featuredArticles.length)
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Demo Data Notice */}
        <div className="mb-8 rounded-lg border-2 border-[#d4af37] bg-[#d4af37]/5 p-4">
          <p className="text-center text-sm font-medium">
            📊 <span className="text-[#d4af37]">Datos de ejemplo</span> — Conectado a Opta próximamente
          </p>
        </div>

        {/* Featured Carousel */}
        <div className="relative mb-12 h-[500px] overflow-hidden rounded-lg">
          {featuredArticles.map((article, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-500 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              {article.url ? (
                <Link href={article.url} className="relative block h-full w-full">
                  {article.legends && (
                    <div className="absolute top-0 left-0 right-0 z-20 bg-gradient-to-r from-[#d4af37] to-[#b8941f] px-6 py-2">
                      <div className="flex items-center justify-center gap-2 text-white">
                        <Crown className="h-4 w-4" />
                        <span className="text-sm font-bold">Solo para Legends</span>
                        <Crown className="h-4 w-4" />
                      </div>
                    </div>
                  )}
                  
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <div className="mb-4 flex items-center gap-4">
                      <Badge className="bg-white text-black">{article.category}</Badge>
                      {article.legends && <LegendsBadge />}
                    </div>
                    <h2 className="mb-2 text-4xl font-bold">{article.title}</h2>
                    <p className="text-xl text-[#d4af37]">{article.stats}</p>
                  </div>
                </Link>
              ) : (
                <div className="relative h-full w-full select-none">
                  {article.legends && (
                    <div className="absolute top-0 left-0 right-0 z-20 bg-gradient-to-r from-[#d4af37] to-[#b8941f] px-6 py-2 pointer-events-none">
                      <div className="flex items-center justify-center gap-2 text-white">
                        <Crown className="h-4 w-4" />
                        <span className="text-sm font-bold">Solo para Legends</span>
                        <Crown className="h-4 w-4" />
                      </div>
                    </div>
                  )}
                  
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover pointer-events-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white pointer-events-none">
                    <div className="mb-4 flex items-center gap-4">
                      <Badge className="bg-white text-black">{article.category}</Badge>
                      {article.legends && <LegendsBadge />}
                    </div>
                    <h2 className="mb-2 text-4xl font-bold">{article.title}</h2>
                    <p className="text-xl text-[#d4af37]">{article.stats}</p>
                  </div>
                </div>
              )}
            </div>
          ))}

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 z-30 -translate-y-1/2 rounded-full bg-white/20 p-2 backdrop-blur-sm hover:bg-white/30"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6 text-white" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 z-30 -translate-y-1/2 rounded-full bg-white/20 p-2 backdrop-blur-sm hover:bg-white/30"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6 text-white" />
          </button>

          <div className="absolute bottom-4 left-1/2 z-30 flex -translate-x-1/2 gap-2">
            {featuredArticles.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 w-2 rounded-full transition-all ${
                  index === currentSlide ? "w-8 bg-[#d4af37]" : "bg-white/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Rankings Section - CON TÍTULOS ESPECÍFICOS */}
        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-bold">Rankings y Estadísticas</h2>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* xG Total (Jornada) - TÍTULO ESPECÍFICO */}
            <Card className="p-6">
              <div className="mb-4 flex items-center gap-2">
                <Zap className="h-5 w-5 text-[#d4af37]" />
                <h3 className="font-bold">xG Total (Jornada)</h3>
              </div>
              <div className="space-y-3">
                {rankingXgJornada.map((player, index) => (
                  <Link
                    key={index}
                    href={`/jugador/${player.player.toLowerCase()}`}
                    className="flex items-center justify-between rounded-lg p-2 transition-colors hover:bg-neutral-50"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold ${index === 0 ? 'bg-[#d4af37] text-white' : 'bg-neutral-200'}`}>
                        {index + 1}
                      </div>
                      <div>
                        <p className="text-sm font-semibold">{player.player}</p>
                        <div className="flex items-center gap-1.5">
                          <div className="relative h-4 w-4">
                            <Image
                              src={player.teamBadge}
                              alt={`Escudo ${player.team}`}
                              fill
                              className="object-contain"
                              sizes="16px"
                            />
                          </div>
                          <span className="text-xs text-neutral-500">{player.team}</span>
                        </div>
                      </div>
                    </div>
                    <span className={`text-lg font-bold ${index === 0 ? 'text-[#d4af37]' : ''}`}>{player.xg}</span>
                  </Link>
                ))}
              </div>
              <Link href="/los-mas" className="mt-4 block text-center text-xs text-[#d4af37] hover:underline">
                Ver ranking completo →
              </Link>
            </Card>

            {/* Goles por Tiro - TÍTULO ESPECÍFICO */}
            <Card className="p-6">
              <div className="mb-4 flex items-center gap-2">
                <Award className="h-5 w-5 text-[#d4af37]" />
                <h3 className="font-bold">Goles por Tiro</h3>
              </div>
              <div className="space-y-3">
                {teamEfficiency.map((team, index) => (
                  <Link
                    key={index}
                    href={`/equipo/${team.team.toLowerCase().replace(/\s+/g, '-')}`}
                    className="flex items-center justify-between rounded-lg p-2 transition-colors hover:bg-neutral-50"
                  >
                    <div className="flex items-center gap-3">
                      <div className="relative h-8 w-8 flex-shrink-0">
                        <Image
                          src={team.logo}
                          alt={`Escudo ${team.team}`}
                          fill
                          className="object-contain"
                          sizes="32px"
                        />
                      </div>
                      <span className="text-sm font-medium">{team.team}</span>
                    </div>
                    <span className={`text-lg font-bold ${index === 0 ? 'text-[#d4af37]' : ''}`}>{team.goalsPerShot}</span>
                  </Link>
                ))}
              </div>
            </Card>

            {/* Tiros a Puerta/Partido - TÍTULO ESPECÍFICO */}
            <Card className="p-6">
              <div className="mb-4 flex items-center gap-2">
                <Target className="h-5 w-5 text-[#d4af37]" />
                <h3 className="font-bold">Tiros a Puerta/Partido</h3>
              </div>
              <div className="space-y-3">
                {shotsOnTarget.map((team, index) => (
                  <Link
                    key={index}
                    href={`/equipo/${team.team.toLowerCase().replace(/\s+/g, '-')}`}
                    className="block rounded-lg p-2 transition-colors hover:bg-neutral-50"
                  >
                    <div className="mb-1 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="relative h-5 w-5">
                          <Image
                            src={team.teamBadge}
                            alt={`Escudo ${team.team}`}
                            fill
                            className="object-contain"
                            sizes="20px"
                          />
                        </div>
                        <span className="text-sm font-medium">{team.team}</span>
                      </div>
                      <span className={`text-lg font-bold ${index === 0 ? 'text-[#d4af37]' : ''}`}>{team.shots}</span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-neutral-100">
                      <div 
                        className={`h-full ${index === 0 ? 'bg-[#d4af37]' : 'bg-neutral-400'}`}
                        style={{ width: `${(team.shots / 7) * 100}%` }}
                      ></div>
                    </div>
                  </Link>
                ))}
              </div>
            </Card>
          </div>
        </div>

        {/* Expected Assists & Hot Moments */}
        <div className="mb-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Asistencias Esperadas (xA) - TÍTULO ESPECÍFICO */}
          <Card className="p-6">
            <div className="mb-4 flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-[#d4af37]" />
              <h3 className="font-bold">Asistencias Esperadas (xA)</h3>
            </div>
            <div className="space-y-3">
              {expectedAssists.map((player, index) => (
                <Link
                  key={index}
                  href={`/jugador/${player.player.toLowerCase().replace(/\s+/g, '-')}`}
                  className="flex items-center gap-3 rounded-lg p-2 transition-colors hover:bg-neutral-50"
                >
                  <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-full">
                    <Image
                      src={player.image}
                      alt={player.player}
                      fill
                      className="object-cover"
                      sizes="48px"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold">{player.player}</p>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <div className="relative h-4 w-4">
                        <Image
                          src={player.teamBadge}
                          alt={`Escudo ${player.team}`}
                          fill
                          className="object-contain"
                          sizes="16px"
                        />
                      </div>
                      <span className="text-xs text-neutral-500">{player.team}</span>
                    </div>
                  </div>
                  <span className={`text-xl font-bold ${index === 0 ? 'text-[#d4af37]' : ''}`}>{player.xa}</span>
                </Link>
              ))}
            </div>
            <Link href="/los-mas" className="mt-4 block text-center text-xs text-[#d4af37] hover:underline">
              Ver ranking completo →
            </Link>
          </Card>

          {/* Hot Moments */}
          <Card className="p-6">
            <div className="mb-4 flex items-center gap-2">
              <Activity className="h-5 w-5 text-[#d4af37]" />
              <h3 className="font-bold">Momentos Calientes</h3>
            </div>
            <p className="mb-4 text-xs text-neutral-500">
              Distribución de goles por tramos de tiempo en LaLiga
            </p>
            <div className="space-y-3">
              {hotMoments.map((moment, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">{moment.minute}'</span>
                    <span className="font-bold text-[#d4af37]">{moment.goals} goles ({moment.percentage}%)</span>
                  </div>
                  <div className="h-3 w-full overflow-hidden rounded-full bg-neutral-100">
                    <div 
                      className="h-full bg-gradient-to-r from-[#d4af37] to-[#b8941f]"
                      style={{ width: `${moment.percentage * 4}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-neutral-500 italic">
              Los minutos finales (76-90+) concentran el 25% de todos los goles
            </p>
          </Card>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Articles Grid */}
          <div className="lg:col-span-2">
            <h2 className="mb-6 text-2xl font-bold">Últimos Análisis</h2>
            <div className="space-y-6">
              {articles.map((article, index) => (
                <Link key={index} href="/articulo/sample">
                  <Card className="overflow-hidden transition-shadow hover:shadow-lg">
                    <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-3">
                      <div className="relative h-48 sm:h-full">
                        <Image
                          src={article.image}
                          alt={article.title}
                          fill
                          className="rounded-lg object-cover"
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <Badge className="mb-2">{article.category}</Badge>
                        <h3 className="mb-2 text-xl font-bold hover:text-[#d4af37]">
                          {article.title}
                        </h3>
                        <p className="mb-4 text-sm text-neutral-600">{article.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-neutral-500">{article.date}</span>
                          <span className="text-sm font-bold text-[#d4af37]">{article.stats}</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* LEGEND Access - CON CORONA */}
            <Card className="border-2 border-[#d4af37] bg-gradient-to-br from-[#d4af37]/10 to-transparent p-6">
              <div className="mb-4 flex justify-center">
                <Crown className="h-12 w-12 text-[#d4af37]" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Únete a LEGEND</h3>
              <p className="mb-4 text-sm text-neutral-600">
                Accede a análisis avanzados, previas exclusivas y métricas premium
              </p>
              <Link
                href="/legends"
                className="block rounded-full bg-[#d4af37] py-2 text-center font-medium text-white hover:bg-[#b8941f]"
              >
                Más información
              </Link>
            </Card>

            {/* Mapa de Calor - Widget Compacto con LegendContent */}
            <LegendContent showUpgradeMessage={false}>
              <Card className="p-4">
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Activity className="h-4 w-4 text-[#d4af37]" />
                    <h3 className="text-sm font-bold">Mapa de Calor</h3>
                  </div>
                  <LegendsBadge className="scale-75" />
                </div>

                <div className="mb-2 flex items-center gap-2">
                  <div className="relative h-6 w-6">
                    <Image
                      src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/barcelona-1764596043358.png"
                      alt="FC Barcelona"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <p className="text-xs font-bold">FC Barcelona</p>
                    <p className="text-[10px] text-neutral-500">vs Athletic • J15</p>
                  </div>
                </div>
                
                <div className="relative aspect-[3/2] overflow-hidden rounded-lg border border-[#d4af37]/20 bg-gradient-to-b from-green-600 via-yellow-500 to-red-600">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iIzIyOGI1NSIvPjxsaW5lIHgxPSIwIiB5MT0iMjAwIiB4Mj0iNjAwIiB5Mj0iMjAwIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiLz48Y2lyY2xlIGN4PSIzMDAiIGN5PSIyMDAiIHI9IjUwIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiIGZpbGw9Im5vbmUiLz48L3N2Zz4=')] bg-contain bg-center bg-no-repeat opacity-20" />
                  </div>
                  <div className="absolute right-1/4 top-1/4 h-20 w-20 rounded-full bg-red-500/70 blur-2xl" />
                  <div className="absolute left-1/3 top-1/3 h-16 w-16 rounded-full bg-orange-500/60 blur-2xl" />
                  <div className="absolute right-1/3 bottom-1/4 h-12 w-12 rounded-full bg-yellow-500/50 blur-xl" />
                </div>
                
                <p className="mt-2 text-[10px] text-neutral-600">
                  🔥 Dominio en tercio final derecho
                </p>
              </Card>
            </LegendContent>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}