"use client"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { Calendar, User, TrendingUp, Activity, Zap, Target, ArrowUp, ArrowDown, Crown, Lock, BarChart3, LineChart } from "lucide-react"
import { motion } from "framer-motion"
import LegendContent from "@/components/LegendContent"
import LegendsBadge from "@/components/LegendsBadge"

export default function AtleticoRayoArticle() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <article className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="mb-6 flex items-center gap-4 text-sm text-neutral-600">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>10 de Noviembre, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>eloycollazosrubio</span>
            </div>
          </div>

          <h1 className="mb-6 text-5xl font-bold leading-tight">
            Remontada de Vértigo: Cómo el Atlético Volteó al Rayo Según las Estadísticas
          </h1>

          <div className="relative aspect-[21/9] overflow-hidden rounded-2xl">
            <Image
              src="https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=1600&h=900&fit=crop"
              alt="Atlético de Madrid"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-8 left-8">
              <Badge className="mb-3 bg-[#d4af37] text-white text-lg px-4 py-2">ANÁLISIS POST-PARTIDO</Badge>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-3">
                  <div className="relative h-16 w-16">
                    <Image
                      src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/cbc5c8cc8c3e8abd0e175c00ee53b723-1764627217631.png"
                      alt="Atlético Madrid"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="text-white">
                    <p className="text-3xl font-bold">3</p>
                  </div>
                </div>
                <span className="text-2xl font-bold text-white">-</span>
                <div className="flex items-center gap-3">
                  <div className="text-white">
                    <p className="text-3xl font-bold">2</p>
                  </div>
                  <div className="relative h-16 w-16">
                    <Image
                      src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/edcada77-6be0-4456-8471-5c5223fafc7d/generated_images/rayo-vallecano-football-club-badge-logo--38d45800-20251130225106.jpg"
                      alt="Rayo Vallecano"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Introducción */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-4xl mx-auto"
        >
          <p className="text-lg leading-relaxed text-neutral-700">
            El Wanda Metropolitano fue testigo de una de las remontadas más emocionantes de la temporada. 
            El Atlético de Madrid logró voltear un marcador adverso (1-2) para imponerse 3-2 ante el Rayo Vallecano 
            en un partido lleno de tensión, errores defensivos y un hat-trick estelar de <strong className="text-[#d4af37]">Julián Álvarez</strong>. 
            Más allá del resultado, las estadísticas revelan una historia fascinante de dominio posicional, 
            vulnerabilidad en transiciones y la importancia del talento individual en momentos cruciales.
          </p>
        </motion.div>

        {/* Cifras Clave */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="mb-8 text-3xl font-bold">Las Cifras que Definieron el Partido</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="p-6 text-center border-2 border-[#d4af37]/20 hover:border-[#d4af37] transition-all">
              <div className="mb-2 text-5xl font-bold text-[#d4af37]">61%</div>
              <p className="text-sm font-semibold text-neutral-700">Posesión Atlético</p>
              <p className="text-xs text-neutral-500 mt-1">vs 39% Rayo</p>
            </Card>

            <Card className="p-6 text-center border-2 border-[#d4af37]/20 hover:border-[#d4af37] transition-all">
              <div className="mb-2 text-5xl font-bold text-[#d4af37]">20</div>
              <p className="text-sm font-semibold text-neutral-700">Tiros Totales</p>
              <p className="text-xs text-neutral-500 mt-1">8 a puerta</p>
            </Card>

            <Card className="p-6 text-center border-2 border-[#d4af37]/20 hover:border-[#d4af37] transition-all">
              <div className="mb-2 text-5xl font-bold text-[#d4af37]">8-6</div>
              <p className="text-sm font-semibold text-neutral-700">Corners</p>
              <p className="text-xs text-neutral-500 mt-1">A favor del Atlético</p>
            </Card>

            <Card className="p-6 text-center border-2 border-[#d4af37]/20 hover:border-[#d4af37] transition-all">
              <div className="mb-2 text-5xl font-bold text-[#d4af37]">3</div>
              <p className="text-sm font-semibold text-neutral-700">Goles Julián Álvarez</p>
              <p className="text-xs text-neutral-500 mt-1">Hat-trick decisivo</p>
            </Card>
          </div>
        </motion.div>

        {/* xG Flow - CONTENIDO PREMIUM LEGEND */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-3xl font-bold">Flujo de Goles Esperados (xG)</h2>
            <LegendsBadge />
          </div>
          
          <LegendContent>
            <Card className="p-8 bg-gradient-to-br from-[#d4af37]/5 to-white border-2 border-[#d4af37]/30">
              <div className="mb-6">
                <p className="text-sm text-neutral-600 mb-4">
                  El xG acumulado muestra cómo el Atlético fue aumentando su presión ofensiva durante todo el partido, 
                  mientras el Rayo aprovechó dos momentos puntuales para sacar provecho.
                </p>
              </div>

              {/* Gráfico xG Flow */}
              <div className="relative h-80 mb-6">
                <div className="absolute inset-0 flex items-end justify-between px-8 pb-8">
                  {/* Líneas verticales de guía */}
                  {[0, 15, 30, 45, 60, 75, 90].map((min) => (
                    <div key={min} className="flex-1 border-l border-neutral-200 h-full relative">
                      <span className="absolute -bottom-6 left-0 text-xs text-neutral-500 -translate-x-1/2">{min}'</span>
                    </div>
                  ))}
                </div>

                {/* Línea Atlético (rojo) */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 320" preserveAspectRatio="none">
                  <path
                    d="M 50 280 L 150 240 L 200 220 L 280 200 L 350 190 L 450 160 L 550 140 L 650 100 L 750 60"
                    fill="none"
                    stroke="#dc2626"
                    strokeWidth="4"
                    opacity="0.8"
                  />
                  <path
                    d="M 50 280 L 150 240 L 200 220 L 280 200 L 350 190 L 450 160 L 550 140 L 650 100 L 750 60 L 750 320 L 50 320 Z"
                    fill="url(#atletico-gradient)"
                    opacity="0.2"
                  />
                  
                  {/* Marcadores de goles Atlético */}
                  <circle cx="150" cy="240" r="8" fill="#dc2626" stroke="white" strokeWidth="2" />
                  <circle cx="650" cy="100" r="8" fill="#dc2626" stroke="white" strokeWidth="2" />
                  <circle cx="750" cy="60" r="8" fill="#dc2626" stroke="white" strokeWidth="2" />
                </svg>

                {/* Línea Rayo (azul) */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 320" preserveAspectRatio="none">
                  <path
                    d="M 50 290 L 200 285 L 280 280 L 350 260 L 500 240 L 550 220 L 750 210"
                    fill="none"
                    stroke="#2563eb"
                    strokeWidth="4"
                    opacity="0.8"
                  />
                  <path
                    d="M 50 290 L 200 285 L 280 280 L 350 260 L 500 240 L 550 220 L 750 210 L 750 320 L 50 320 Z"
                    fill="url(#rayo-gradient)"
                    opacity="0.2"
                  />

                  {/* Marcadores de goles Rayo */}
                  <circle cx="350" cy="260" r="8" fill="#2563eb" stroke="white" strokeWidth="2" />
                  <circle cx="550" cy="220" r="8" fill="#2563eb" stroke="white" strokeWidth="2" />

                  <defs>
                    <linearGradient id="atletico-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#dc2626" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#dc2626" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="rayo-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#2563eb" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#2563eb" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Leyenda y xG Final */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-12 bg-red-600 rounded" />
                    <span className="text-sm font-medium">Atlético</span>
                    <span className="text-lg font-bold text-red-600">2.8 xG</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-12 bg-blue-600 rounded" />
                    <span className="text-sm font-medium">Rayo</span>
                    <span className="text-lg font-bold text-blue-600">1.4 xG</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs text-neutral-500">Resultado final</p>
                  <p className="text-2xl font-bold text-[#d4af37]">3-2</p>
                </div>
              </div>

              <div className="mt-6 rounded-lg bg-[#d4af37]/10 border border-[#d4af37]/30 p-4">
                <h4 className="font-bold text-sm mb-2">📊 Análisis xG</h4>
                <p className="text-sm text-neutral-700">
                  El Atlético generó <strong>el doble de xG que el Rayo</strong> (2.8 vs 1.4), pero necesitó 3 goles para ganar. 
                  Esto indica que Julián Álvarez superó las expectativas con su definición, mientras que el Rayo fue muy eficiente: 
                  <strong> 2 goles con solo 1.4 xG</strong>. La remontada estaba respaldada por las métricas, pero la efectividad del Rayo 
                  mantuvo el partido abierto hasta el final.
                </p>
              </div>
            </Card>
          </LegendContent>
        </motion.div>

        {/* Timeline Interactivo - CONTENIDO PREMIUM LEGEND */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-3xl font-bold">Timeline de Amenaza: Minuto a Minuto</h2>
            <LegendsBadge />
          </div>

          <LegendContent>
            <Card className="p-8 bg-gradient-to-br from-neutral-50 to-white">
              <p className="text-sm text-neutral-600 mb-6">
                Visualización del nivel de amenaza ofensiva en cada momento del partido. Las zonas rojas indican picos de peligro máximo.
              </p>

              <div className="space-y-4">
                {[
                  { time: "0-15'", event: "Inicio con posición alta", threat: 40, color: "bg-yellow-400", description: "Atlético inicia con dominio posicional; Rayo replegado", goals: [] },
                  { time: "15'", event: "⚽ Gol Julián Álvarez (1-0)", threat: 95, color: "bg-red-600", description: "Transición rápida, definición desde dentro del área", goals: ["ATM"] },
                  { time: "16-30'", event: "Control del partido", threat: 55, color: "bg-orange-400", description: "Atlético mantiene posesión, Rayo busca contras", goals: [] },
                  { time: "31-44'", event: "Presión sostenida", threat: 60, color: "bg-orange-500", description: "Corners y llegadas por banda derecha", goals: [] },
                  { time: "45'", event: "⚽ Gol Pep Chavarría (1-1)", threat: 85, color: "bg-blue-500", description: "Disparo lejano tras pérdida; vulnerabilidad del Atlético", goals: ["RAY"] },
                  { time: "46-60'", event: "Segunda parte lenta", threat: 45, color: "bg-yellow-300", description: "Control sin profundidad; Rayo presiona medio campo", goals: [] },
                  { time: "61-75'", event: "Rayo mejora físicamente", threat: 70, color: "bg-orange-600", description: "Atlético sufre; Rayo genera peligro con centros", goals: [] },
                  { time: "77'", event: "⚽ Gol Álvaro García (1-2)", threat: 90, color: "bg-blue-600", description: "Gol en transición; tendencia defensiva negativa", goals: ["RAY"] },
                  { time: "80'", event: "⚽ Gol Álvarez (2-2)", threat: 98, color: "bg-red-700", description: "Respuesta inmediata; recuperación tras saque", goals: ["ATM"] },
                  { time: "81-87'", event: "Presión total", threat: 88, color: "bg-red-600", description: "Atlético volcado al ataque, Rayo resistiendo", goals: [] },
                  { time: "88'", event: "⚽ Gol Álvarez (3-2)", threat: 100, color: "bg-red-800", description: "Presión total final; remonta con intensidad", goals: ["ATM"] },
                  { time: "89-95'", event: "Final replegado", threat: 35, color: "bg-green-500", description: "Simeone cierra líneas, gestión del resultado", goals: [] }
                ].map((moment, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="relative"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0 w-24 text-sm font-bold text-neutral-700">{moment.time}</div>
                      
                      {/* Barra de amenaza */}
                      <div className="flex-1 relative h-16 bg-neutral-100 rounded-lg overflow-hidden border border-neutral-200">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${moment.threat}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: index * 0.05 }}
                          className={`h-full ${moment.color} flex items-center px-4`}
                        >
                          <div className="text-white text-xs font-bold drop-shadow-md">
                            {moment.event}
                          </div>
                        </motion.div>
                        
                        {/* Indicador de nivel */}
                        <div className="absolute right-2 top-1/2 -translate-y-1/2 text-xs font-bold text-neutral-600 bg-white/80 px-2 py-1 rounded">
                          {moment.threat}%
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-xs text-neutral-600 mt-2 ml-28">{moment.description}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="rounded-lg bg-red-50 border border-red-200 p-4">
                  <h4 className="font-bold text-sm text-red-900 mb-2">🔴 Picos Rojos (90%+)</h4>
                  <p className="text-xs text-red-700">
                    Momentos de máximo peligro. Los 3 goles del Atlético llegaron en estos picos.
                  </p>
                </div>
                <div className="rounded-lg bg-orange-50 border border-orange-200 p-4">
                  <h4 className="font-bold text-sm text-orange-900 mb-2">🟠 Presión Media (60-85%)</h4>
                  <p className="text-xs text-orange-700">
                    Fases de control y llegadas sostenidas sin concretar.
                  </p>
                </div>
                <div className="rounded-lg bg-blue-50 border border-blue-200 p-4">
                  <h4 className="font-bold text-sm text-blue-900 mb-2">🔵 Amenaza Rayo</h4>
                  <p className="text-xs text-blue-700">
                    El Rayo generó peligro en transiciones y momentos puntuales.
                  </p>
                </div>
              </div>
            </Card>
          </LegendContent>
        </motion.div>

        {/* Mapa de Calor - CONTENIDO PREMIUM LEGEND */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-3xl font-bold">Mapa de Calor Avanzado: Atlético de Madrid</h2>
            <LegendsBadge />
          </div>

          <LegendContent>
            <Card className="p-8">
              <p className="text-sm text-neutral-600 mb-6">
                Zonas de mayor actividad ofensiva del Atlético durante todo el partido. La concentración en banda derecha fue clave.
              </p>

              <div className="relative aspect-[3/2] overflow-hidden rounded-xl bg-gradient-to-b from-green-600 via-yellow-500 to-red-600 shadow-2xl mb-6">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iIzIyOGI1NSIvPjxsaW5lIHgxPSIwIiB5MT0iMjAwIiB4Mj0iNjAwIiB5Mj0iMjAwIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiLz48Y2lyY2xlIGN4PSIzMDAiIGN5PSIyMDAiIHI9IjUwIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiIGZpbGw9Im5vbmUiLz48L3N2Zz4=')] bg-contain bg-center bg-no-repeat opacity-20" />
                </div>
                
                {/* Zonas calientes animadas */}
                <motion.div
                  animate={{ scale: [1, 1.1, 1], opacity: [0.7, 0.9, 0.7] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute right-1/4 top-1/4 h-48 w-48 rounded-full bg-red-500/70 blur-3xl"
                />
                <motion.div
                  animate={{ scale: [1, 1.15, 1], opacity: [0.6, 0.8, 0.6] }}
                  transition={{ duration: 3.5, repeat: Infinity }}
                  className="absolute left-1/3 top-1/3 h-40 w-40 rounded-full bg-orange-500/60 blur-3xl"
                />
                <motion.div
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.7, 0.5] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute right-1/3 bottom-1/4 h-32 w-32 rounded-full bg-yellow-500/50 blur-2xl"
                />
                <motion.div
                  animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.4] }}
                  transition={{ duration: 3.8, repeat: Infinity }}
                  className="absolute right-1/3 top-1/2 h-36 w-36 rounded-full bg-red-400/50 blur-2xl"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="rounded-lg bg-red-50 border border-red-200 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="h-4 w-4 rounded-full bg-red-500" />
                    <h3 className="font-bold text-red-900">Zona Roja (Alta)</h3>
                  </div>
                  <p className="text-sm text-red-700 mb-2">Presencia muy alta en tercio final derecho</p>
                  <p className="text-xs text-red-600 font-bold">57% de ataques por derecha</p>
                </div>

                <div className="rounded-lg bg-orange-50 border border-orange-200 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="h-4 w-4 rounded-full bg-orange-500" />
                    <h3 className="font-bold text-orange-900">Zona Naranja (Media)</h3>
                  </div>
                  <p className="text-sm text-orange-700 mb-2">Actividad moderada en mediapunta y borde del área</p>
                  <p className="text-xs text-orange-600 font-bold">28% de ataques centrales</p>
                </div>

                <div className="rounded-lg bg-green-50 border border-green-200 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="h-4 w-4 rounded-full bg-green-600" />
                    <h3 className="font-bold text-green-900">Zona Verde (Baja)</h3>
                  </div>
                  <p className="text-sm text-green-700 mb-2">Poca actividad en campo propio</p>
                  <p className="text-xs text-green-600 font-bold">15% banda izquierda</p>
                </div>
              </div>

              <div className="rounded-lg bg-[#d4af37]/10 border border-[#d4af37]/30 p-6">
                <h3 className="font-bold text-neutral-900 mb-4 flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-[#d4af37]" />
                  Interpretación Táctica Avanzada
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-2">🎯 Ataque Asimétrico</h4>
                    <ul className="space-y-2 text-sm text-neutral-700">
                      <li className="flex items-start gap-2">
                        <ArrowUp className="h-4 w-4 text-[#d4af37] mt-0.5 flex-shrink-0" />
                        <span>Inclinación hacia la derecha con <strong>Marcos Llorente</strong> como válvula de escape</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ArrowUp className="h-4 w-4 text-[#d4af37] mt-0.5 flex-shrink-0" />
                        <span>Álvarez se movió entre líneas aprovechando espacios en diagonal</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-2">⚡ Transiciones y Presión</h4>
                    <ul className="space-y-2 text-sm text-neutral-700">
                      <li className="flex items-start gap-2">
                        <ArrowUp className="h-4 w-4 text-[#d4af37] mt-0.5 flex-shrink-0" />
                        <span>Bloque medio-alto tras pérdida, provocando recuperaciones en 3/4 de campo</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ArrowUp className="h-4 w-4 text-[#d4af37] mt-0.5 flex-shrink-0" />
                        <span>Vulnerable en transiciones cuando Llorente sube: espacios en banda derecha</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          </LegendContent>
        </motion.div>

        {/* Comparativa por Jugador - CONTENIDO PREMIUM LEGEND */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-3xl font-bold">Comparativa de Rendimiento Individual</h2>
            <LegendsBadge />
          </div>

          <LegendContent>
            <Card className="p-8 bg-gradient-to-br from-[#d4af37]/5 to-white border-2 border-[#d4af37]/30">
              <p className="text-sm text-neutral-600 mb-6">
                Análisis detallado del rendimiento de los jugadores clave en ambos equipos según métricas avanzadas.
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Julián Álvarez */}
                <div className="rounded-xl bg-white border-2 border-red-200 p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative h-16 w-16 rounded-full overflow-hidden bg-neutral-100">
                      <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold">JÁ</div>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Julián Álvarez</h3>
                      <p className="text-sm text-neutral-600">Delantero • Atlético</p>
                    </div>
                    <div className="ml-auto">
                      <div className="text-3xl font-bold text-[#d4af37]">9.5</div>
                      <p className="text-xs text-neutral-500">Rating</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="font-medium">xG Generado</span>
                        <span className="font-bold text-[#d4af37]">1.8</span>
                      </div>
                      <div className="h-2 bg-neutral-100 rounded-full overflow-hidden">
                        <div className="h-full bg-[#d4af37]" style={{ width: '90%' }} />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="font-medium">Toques en área rival</span>
                        <span className="font-bold text-[#d4af37]">18</span>
                      </div>
                      <div className="h-2 bg-neutral-100 rounded-full overflow-hidden">
                        <div className="h-full bg-[#d4af37]" style={{ width: '85%' }} />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="font-medium">Precisión en pases</span>
                        <span className="font-bold text-[#d4af37]">82%</span>
                      </div>
                      <div className="h-2 bg-neutral-100 rounded-full overflow-hidden">
                        <div className="h-full bg-[#d4af37]" style={{ width: '82%' }} />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="font-medium">Duelos ganados</span>
                        <span className="font-bold text-[#d4af37]">7/11</span>
                      </div>
                      <div className="h-2 bg-neutral-100 rounded-full overflow-hidden">
                        <div className="h-full bg-[#d4af37]" style={{ width: '64%' }} />
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 rounded-lg bg-red-50 p-3">
                    <p className="text-xs text-red-900">
                      <strong>⭐ MVP del partido:</strong> Hat-trick decisivo superando el xG esperado. 
                      Su movimiento entre líneas fue clave para encontrar espacios.
                    </p>
                  </div>
                </div>

                {/* Álvaro García */}
                <div className="rounded-xl bg-white border-2 border-blue-200 p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative h-16 w-16 rounded-full overflow-hidden bg-neutral-100">
                      <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold">AG</div>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Álvaro García</h3>
                      <p className="text-sm text-neutral-600">Extremo • Rayo</p>
                    </div>
                    <div className="ml-auto">
                      <div className="text-3xl font-bold text-blue-600">7.8</div>
                      <p className="text-xs text-neutral-500">Rating</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="font-medium">xG Generado</span>
                        <span className="font-bold text-blue-600">0.6</span>
                      </div>
                      <div className="h-2 bg-neutral-100 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-600" style={{ width: '30%' }} />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="font-medium">Regates completados</span>
                        <span className="font-bold text-blue-600">5/7</span>
                      </div>
                      <div className="h-2 bg-neutral-100 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-600" style={{ width: '71%' }} />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="font-medium">Centros completados</span>
                        <span className="font-bold text-blue-600">3/8</span>
                      </div>
                      <div className="h-2 bg-neutral-100 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-600" style={{ width: '38%' }} />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="font-medium">Recuperaciones</span>
                        <span className="font-bold text-blue-600">6</span>
                      </div>
                      <div className="h-2 bg-neutral-100 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-600" style={{ width: '60%' }} />
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 rounded-lg bg-blue-50 p-3">
                    <p className="text-xs text-blue-900">
                      <strong>🎯 Eficacia en transición:</strong> Gol clave (77') superando el xG. 
                      Su velocidad y verticalidad fueron amenazas constantes.
                    </p>
                  </div>
                </div>
              </div>

              {/* Comparativa directa */}
              <div className="mt-8 rounded-xl bg-gradient-to-r from-red-50 via-white to-blue-50 border border-neutral-200 p-6">
                <h3 className="font-bold text-center mb-6">🏆 Comparativa Directa</h3>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-red-600">3</p>
                    <p className="text-xs text-neutral-600">Goles</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-neutral-500">vs</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-blue-600">1</p>
                    <p className="text-xs text-neutral-600">Goles</p>
                  </div>

                  <div>
                    <p className="text-2xl font-bold text-red-600">1.8</p>
                    <p className="text-xs text-neutral-600">xG Individual</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-neutral-500">xG</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-blue-600">0.6</p>
                    <p className="text-xs text-neutral-600">xG Individual</p>
                  </div>

                  <div>
                    <p className="text-2xl font-bold text-red-600">18</p>
                    <p className="text-xs text-neutral-600">Toques área</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-neutral-500">Área</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-blue-600">8</p>
                    <p className="text-xs text-neutral-600">Toques área</p>
                  </div>
                </div>
              </div>
            </Card>
          </LegendContent>
        </motion.div>

        {/* Análisis Táctico */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="mb-8 text-3xl font-bold">Análisis Táctico y Dinámico</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="p-6 border-l-4 border-l-red-500">
              <div className="flex items-center gap-3 mb-4">
                <Activity className="h-6 w-6 text-red-500" />
                <h3 className="font-bold text-lg">Vulnerabilidad en Transiciones</h3>
              </div>
              <p className="text-sm text-neutral-700 leading-relaxed mb-4">
                El 2-1 de Álvaro García y el gol lejano del 1-1 (Chavarría, 45') muestran que el Rayo castigó los espacios 
                que dejó el Atlético cuando buscó atacar. La tendencia del Atlético de conceder en la segunda mitad explica esa mecánica.
              </p>
              <div className="bg-red-50 rounded-lg p-4">
                <p className="text-xs font-semibold text-red-900 mb-2">⚠️ PUNTOS DÉBILES</p>
                <ul className="space-y-1 text-xs text-red-700">
                  <li>• Concesión de goles en transiciones defensivas</li>
                  <li>• Mayor fragilidad en 2ª mitad (histórico del equipo)</li>
                  <li>• Espacios en banda derecha cuando Llorente sube</li>
                  <li>• Pérdidas en medio campo que generan contras peligrosas</li>
                </ul>
              </div>
            </Card>

            <Card className="p-6 border-l-4 border-l-blue-500">
              <div className="flex items-center gap-3 mb-4">
                <Target className="h-6 w-6 text-blue-500" />
                <h3 className="font-bold text-lg">Dominio Posicional Ineficiente</h3>
              </div>
              <p className="text-sm text-neutral-700 leading-relaxed mb-4">
                Las estadísticas de posesión (61%) y tiros (20 totales, 8 a puerta) muestran que el Atlético controló el partido 
                pero no remató ni definió de forma eficiente. Muchos tiros, no todos claros.
              </p>
              <div className="bg-blue-50 rounded-lg p-4">
                <p className="text-xs font-semibold text-blue-900 mb-2">🎯 OPORTUNIDADES</p>
                <ul className="space-y-1 text-xs text-blue-700">
                  <li>• Control territorial del 61% del tiempo</li>
                  <li>• Generación de 20 tiros totales (40% precisión)</li>
                  <li>• Dominio en corners (8-6) y balones parados</li>
                  <li>• Capacidad de respuesta en momentos críticos</li>
                </ul>
              </div>
            </Card>
          </div>
        </motion.div>

        {/* Tendencias H2H */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="mb-8 text-3xl font-bold">Tendencias Históricas: Atlético vs Rayo</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8 bg-gradient-to-br from-[#d4af37]/10 to-white">
              <h3 className="font-bold text-2xl mb-6 text-center">Dominio Histórico Absoluto</h3>
              <div className="text-center mb-6">
                <p className="text-6xl font-bold text-[#d4af37] mb-2">18-1</p>
                <p className="text-sm text-neutral-600">De 23 enfrentamientos totales</p>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Victorias Atlético</span>
                  <span className="text-xl font-bold text-[#d4af37]">18</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Empates</span>
                  <span className="text-xl font-bold">4</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Victorias Rayo</span>
                  <span className="text-xl font-bold">1</span>
                </div>
                <div className="h-px bg-neutral-200 my-4" />
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Balance goleador</span>
                  <span className="text-xl font-bold text-[#d4af37]">52-16</span>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-neutral-50 to-white">
              <h3 className="font-bold text-2xl mb-6 text-center">Tendencia de Goles</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Over 1.5 Goles</span>
                    <span className="text-2xl font-bold text-[#d4af37]">74%</span>
                  </div>
                  <div className="h-4 w-full overflow-hidden rounded-full bg-neutral-200">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "74%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="h-full bg-[#d4af37]"
                    />
                  </div>
                  <p className="text-xs text-neutral-500 mt-1">17 de 23 partidos con +2 goles</p>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">BTTS (Ambos Anotan)</span>
                    <span className="text-2xl font-bold text-orange-600">48%</span>
                  </div>
                  <div className="h-4 w-full overflow-hidden rounded-full bg-neutral-200">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "48%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.4 }}
                      className="h-full bg-orange-600"
                    />
                  </div>
                  <p className="text-xs text-neutral-500 mt-1">11 de 23 partidos con goles de ambos</p>
                </div>

                <div className="rounded-lg bg-green-50 border border-green-200 p-4 mt-4">
                  <p className="text-sm text-green-900">
                    ✅ El 3-2 final encaja perfectamente en la tendencia histórica: ambos equipos marcaron 
                    y se superó el 1.5 de goles. El Atlético mantiene su dominio abrumador.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </motion.div>

        {/* Implicaciones Deportivas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="mb-8 text-3xl font-bold">Implicaciones Deportivas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 border-t-4 border-t-yellow-500">
              <Zap className="h-8 w-8 text-yellow-500 mb-4" />
              <h3 className="font-bold text-lg mb-3">Satisfacción Limitada</h3>
              <p className="text-sm text-neutral-700">
                Ganar 3-2 suma puntos vitales y moral, pero el equipo sigue mostrando falta de consistencia 
                defensiva pese a dominar la posesión. Preocupa la fragilidad en segundas mitades.
              </p>
            </Card>

            <Card className="p-6 border-t-4 border-t-[#d4af37]">
              <TrendingUp className="h-8 w-8 text-[#d4af37] mb-4" />
              <h3 className="font-bold text-lg mb-3">Dependencia Individual</h3>
              <p className="text-sm text-neutral-700">
                El hat-trick de Julián Álvarez fue decisivo. La capacidad goleadora de jugadores clave 
                marca la diferencia, pero si falla el acierto individual, el dominio no se traduce en victorias.
              </p>
            </Card>

            <Card className="p-6 border-t-4 border-t-red-500">
              <Activity className="h-8 w-8 text-red-500 mb-4" />
              <h3 className="font-bold text-lg mb-3">Señales a Corregir</h3>
              <p className="text-sm text-neutral-700">
                Simeone debe trabajar en la finalización de ocasiones (20 tiros, solo 8 a puerta) y mejorar 
                los cierres defensivos en transición. Los datos del partido lo corroboran.
              </p>
            </Card>
          </div>
        </motion.div>

        {/* Conclusión */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <Card className="p-8 bg-gradient-to-br from-black to-neutral-900 text-white">
            <h2 className="mb-6 text-3xl font-bold text-center">Conclusión</h2>
            <p className="text-lg leading-relaxed text-center max-w-3xl mx-auto mb-6">
              El Atlético consiguió una <strong className="text-[#d4af37]">remontada épica</strong> apoyada en el talento 
              individual de Julián Álvarez, pero las estadísticas revelan fragilidades defensivas y falta de eficiencia 
              ofensiva que Simeone deberá corregir de cara a los próximos compromisos.
            </p>
            <p className="text-base leading-relaxed text-center max-w-3xl mx-auto text-neutral-300">
              El dominio territorial (61% posesión, 20 tiros) no se tradujo en control real del marcador hasta los 
              minutos finales, evidenciando la necesidad de mejorar la gestión de ventajas y la solidez en transiciones 
              defensivas. La dependencia de momentos individuales brillantes no puede ser la norma en la lucha por títulos.
            </p>
          </Card>
        </motion.div>

        {/* Acerca del Autor */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="p-8 bg-gradient-to-br from-[#d4af37]/10 to-white">
            <div className="flex items-start gap-6">
              <div className="relative h-20 w-20 rounded-full overflow-hidden bg-neutral-200 flex-shrink-0">
                <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-[#d4af37]">
                  EC
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Eloy Collazos Rubio</h3>
                <p className="text-sm text-neutral-600 mb-3">
                  Analista de datos deportivos especializado en fútbol español. Colaborador habitual de The Expected 
                  con análisis post-partido basados en métricas avanzadas y visualizaciones estadísticas.
                </p>
                <div className="flex items-center gap-4 text-xs text-neutral-500">
                  <span>📊 Especialista en xG y mapas de calor</span>
                  <span>⚽ Seguidor del Atlético</span>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </article>

      <Footer />
    </div>
  )
}