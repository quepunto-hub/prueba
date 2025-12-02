"use client"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, TrendingUp, Target, Shield, Activity, Zap } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

const metrics = [
  {
    name: "xG (Expected Goals)",
    category: "Ofensiva",
    icon: Target,
    description: "Goles esperados. Mide la probabilidad de que un disparo termine en gol basándose en factores como la distancia, el ángulo y el tipo de asistencia.",
    interpretation: "Un xG de 0.5 significa que ese tiro tiene un 50% de probabilidad de ser gol. Valores más altos indican mejores oportunidades.",
    example: "Un tiro desde el punto de penalti tiene un xG cercano a 0.77",
    limitations: "No considera la habilidad individual del rematador ni las condiciones del partido.",
    whenToUse: "Para evaluar la calidad de las ocasiones generadas y la eficiencia de finalización.",
    chartData: [0.15, 0.42, 0.78, 0.23, 0.91, 0.55, 0.12],
    exampleMatch: "/partido/post/barcelona-real-madrid"
  },
  {
    name: "xA (Expected Assists)",
    category: "Ofensiva",
    icon: TrendingUp,
    description: "Asistencias esperadas. Calcula la probabilidad de que un pase resulte en asistencia según la calidad de la oportunidad creada.",
    interpretation: "Si un jugador tiene 5 xA pero solo 3 asistencias reales, sus compañeros están desaprovechando oportunidades claras.",
    example: "Un pase que deja al delantero solo frente al portero tiene un xA alto",
    limitations: "Depende de que el compañero reciba el balón y realice el tiro.",
    whenToUse: "Para medir la capacidad creativa de un jugador independiente de la eficacia de sus compañeros.",
    chartData: [0.25, 0.35, 0.60, 0.45, 0.80, 0.30, 0.55],
    exampleMatch: "/jugador/lamine-yamal"
  },
  {
    name: "xGChain",
    category: "Ofensiva",
    icon: TrendingUp,
    description: "Cadena de goles esperados. Suma el xG de todas las secuencias ofensivas en las que participa un jugador.",
    interpretation: "Mide la contribución total de un jugador en la creación de ocasiones, no solo en el último pase.",
    example: "Si un centrocampista inicia muchas jugadas que terminan en gol, tendrá un xGChain alto",
    limitations: "Puede ser influenciado por el volumen de posesión del equipo.",
    whenToUse: "Para identificar jugadores clave en la construcción ofensiva más allá de goles y asistencias.",
    chartData: [1.2, 1.8, 2.3, 1.5, 2.8, 2.1, 1.9],
    exampleMatch: "/jugador/lamine-yamal"
  },
  {
    name: "xGBuildup",
    category: "Ofensiva",
    icon: TrendingUp,
    description: "Construcción de goles esperados. Similar a xGChain pero excluye tiros y asistencias directas.",
    interpretation: "Identifica jugadores que contribuyen en la fase previa a la finalización.",
    example: "Pivotes y mediocentros suelen destacar en esta métrica",
    limitations: "No refleja directamente la contribución en goles y asistencias.",
    whenToUse: "Para valorar jugadores en posiciones de construcción que no aparecen en estadísticas tradicionales.",
    chartData: [0.8, 1.2, 1.6, 1.1, 1.9, 1.4, 1.3],
    exampleMatch: "/equipo/barcelona"
  },
  {
    name: "Progressive Passes",
    category: "Pases",
    icon: TrendingUp,
    description: "Pases progresivos. Pases que mueven el balón significativamente hacia la portería rival (al menos 10 metros o al área).",
    interpretation: "Indica la capacidad de un jugador para romper líneas y hacer avanzar al equipo.",
    example: "Un pase largo desde defensa hasta el extremo en campo rival",
    limitations: "No considera si el pase genera una ocasión de gol directa.",
    whenToUse: "Para evaluar jugadores que progresan el juego y rompen líneas defensivas.",
    chartData: [8, 12, 15, 10, 18, 14, 11],
    exampleMatch: "/equipo/barcelona/plantilla"
  },
  {
    name: "Key Passes",
    category: "Pases",
    icon: Target,
    description: "Pases clave. Pases que directamente crean una ocasión de tiro.",
    interpretation: "Mide la capacidad creativa del jugador. No todos terminan en asistencia.",
    example: "Un pase filtrado que genera un tiro aunque no termine en gol",
    limitations: "Cuenta todos los tiros generados, incluso los de baja calidad.",
    whenToUse: "Para identificar jugadores creativos que generan oportunidades constantemente.",
    chartData: [3, 5, 7, 4, 8, 6, 5],
    exampleMatch: "/jugador/lamine-yamal"
  },
  {
    name: "Passing Accuracy",
    category: "Pases",
    icon: Target,
    description: "Precisión de pase. Porcentaje de pases completados con éxito del total intentados.",
    interpretation: "Un 85% o más se considera excelente. Varía según la posición y estilo de juego.",
    example: "Los defensores centrales suelen tener mayor precisión que los extremos",
    limitations: "No distingue entre pases seguros y pases arriesgados.",
    whenToUse: "Para evaluar la confiabilidad en la retención del balón, contextualizando por posición.",
    chartData: [82, 85, 88, 84, 90, 87, 86],
    exampleMatch: "/equipo/barcelona/plantilla"
  },
  {
    name: "PPDA (Passes per Defensive Action)",
    category: "Defensiva",
    icon: Shield,
    description: "Pases por acción defensiva. Mide la intensidad de la presión de un equipo.",
    interpretation: "Valores bajos indican presión alta. Por debajo de 8-10 es presión muy intensa.",
    example: "El Liverpool de Klopp tenía PPDA cercano a 7-8",
    limitations: "No mide la efectividad de la presión, solo su intensidad.",
    whenToUse: "Para analizar el estilo defensivo y la intensidad de presión de un equipo.",
    chartData: [12, 9, 7, 11, 8, 10, 9],
    exampleMatch: "/partido/post/barcelona-real-madrid"
  },
  {
    name: "Tackles Won %",
    category: "Defensiva",
    icon: Shield,
    description: "Porcentaje de entradas exitosas. Ratio entre entradas ganadas y total de entradas intentadas.",
    interpretation: "Por encima del 60% se considera bueno. Muy alto puede indicar defensores que esperan el momento adecuado.",
    example: "Un defensor con 70% gana 7 de cada 10 entradas",
    limitations: "No considera la importancia táctica de cada entrada.",
    whenToUse: "Para evaluar la efectividad defensiva individual en duelos directos.",
    chartData: [55, 62, 68, 60, 72, 65, 63],
    exampleMatch: "/equipo/barcelona/plantilla"
  },
  {
    name: "Interceptions",
    category: "Defensiva",
    icon: Shield,
    description: "Interceptaciones. Número de veces que un jugador corta un pase del rival sin hacer entrada.",
    interpretation: "Requiere anticipación y lectura del juego. No solo fuerza física.",
    example: "Los mediocentros defensivos suelen liderar esta estadística",
    limitations: "Puede estar influenciado por el sistema táctico del equipo.",
    whenToUse: "Para valorar la capacidad de anticipación y lectura defensiva.",
    chartData: [4, 6, 8, 5, 9, 7, 6],
    exampleMatch: "/equipo/barcelona/plantilla"
  },
  {
    name: "Shot-Creating Actions",
    category: "Ofensiva",
    icon: TrendingUp,
    description: "Acciones que generan tiro. Las dos acciones ofensivas previas a un tiro (pases, regates, faltas recibidas).",
    interpretation: "Mide la contribución ofensiva más allá de goles y asistencias.",
    example: "Un regate que genera espacio para un compañero que asiste",
    limitations: "Puede contar acciones que no tienen impacto real en el resultado.",
    whenToUse: "Para identificar jugadores influyentes en la fase de creación ofensiva.",
    chartData: [5, 7, 9, 6, 11, 8, 7],
    exampleMatch: "/jugador/lamine-yamal"
  },
  {
    name: "Successful Dribbles",
    category: "Ofensiva",
    icon: TrendingUp,
    description: "Regates exitosos. Número de veces que un jugador supera a un oponente con control del balón.",
    interpretation: "Importante para extremos y jugadores creativos. Varía mucho por posición.",
    example: "Vinicius Jr suele liderar esta estadística en LaLiga",
    limitations: "No todos los regates tienen el mismo valor táctico.",
    whenToUse: "Para evaluar la capacidad de desborde y progresión individual con el balón.",
    chartData: [3, 5, 7, 4, 8, 6, 5],
    exampleMatch: "/los-mas"
  },
  {
    name: "G/90 (Goals per 90 minutes)",
    category: "Ofensiva",
    icon: Activity,
    description: "Goles por 90 minutos. Normaliza los goles marcados por el tiempo jugado.",
    interpretation: "Permite comparar delanteros que juegan diferentes cantidades de minutos. Un G/90 superior a 0.6 es excelente.",
    example: "Un delantero con 15 goles en 1500 minutos tiene 0.9 G/90",
    limitations: "No considera la calidad de las ocasiones recibidas.",
    whenToUse: "Para comparar eficiencia goleadora entre jugadores con distinto tiempo de juego.",
    chartData: [0.45, 0.62, 0.78, 0.55, 0.91, 0.68, 0.72],
    exampleMatch: "/los-mas"
  },
  {
    name: "Touches in Box",
    category: "Ofensiva",
    icon: Zap,
    description: "Toques en el área. Número de veces que un jugador toca el balón dentro del área rival.",
    interpretation: "Indica la capacidad de un jugador para posicionarse en zonas de peligro. Los delanteros top suelen superar los 6 por partido.",
    example: "Un delantero centro que recibe constantemente en el área tendrá esta métrica alta",
    limitations: "No todos los toques en el área generan ocasiones de gol.",
    whenToUse: "Para evaluar el posicionamiento ofensivo y la participación en jugadas de peligro.",
    chartData: [4, 6, 8, 5, 9, 7, 6],
    exampleMatch: "/jugador/lamine-yamal"
  },
  {
    name: "Defensive Duels Won %",
    category: "Defensiva",
    icon: Shield,
    description: "Porcentaje de duelos defensivos ganados. Incluye entradas, disputas aéreas y duelos físicos.",
    interpretation: "Superior al 55% se considera bueno. Los mejores defensores centrales alcanzan el 65-70%.",
    example: "Un central que gana 8 de 12 duelos tiene un 67% de efectividad",
    limitations: "No diferencia entre duelos en zonas más o menos peligrosas.",
    whenToUse: "Para medir la efectividad defensiva global en situaciones de uno contra uno.",
    chartData: [52, 58, 64, 56, 68, 61, 59],
    exampleMatch: "/equipo/barcelona/plantilla"
  },
  {
    name: "Progressive Carries",
    category: "Progresión",
    icon: Zap,
    description: "Conducciones progresivas. Número de veces que un jugador avanza con el balón al menos 10 metros hacia la portería rival.",
    interpretation: "Mide la capacidad de progresión individual. Los mediocampistas creativos y extremos destacan en esta métrica.",
    example: "Un regate desde el centro del campo hasta el área rival",
    limitations: "No considera si la conducción termina en una ocasión de gol.",
    whenToUse: "Para identificar jugadores que rompen líneas mediante conducción, no solo pase.",
    chartData: [3, 5, 7, 4, 9, 6, 5],
    exampleMatch: "/jugador/lamine-yamal"
  }
]

// Mini chart component
function MiniChart({ data, color = "#d4af37" }: { data: number[], color?: string }) {
  const max = Math.max(...data)
  const points = data.map((value, index) => {
    const x = (index / (data.length - 1)) * 100
    const y = 100 - (value / max) * 80
    return `${x},${y}`
  }).join(" ")

  return (
    <svg viewBox="0 0 100 100" className="h-16 w-full">
      <polyline
        points={points}
        fill="none"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {data.map((value, index) => {
        const x = (index / (data.length - 1)) * 100
        const y = 100 - (value / max) * 80
        return (
          <circle
            key={index}
            cx={x}
            cy={y}
            r="2"
            fill={color}
          />
        )
      })}
    </svg>
  )
}

export default function DiccionarioPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("Todas")

  const categories = ["Todas", "Ofensiva", "Defensiva", "Pases", "Progresión"]

  const filteredMetrics = metrics.filter(metric => {
    const matchesSearch = metric.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         metric.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "Todas" || metric.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="mb-2 text-4xl font-bold">Diccionario de Datos</h1>
          <p className="text-neutral-600">
            Guía completa de todas las métricas utilizadas en nuestros análisis
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-400" />
            <Input
              type="text"
              placeholder="Buscar métrica..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-[#d4af37] text-white"
                    : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {filteredMetrics.map((metric, index) => {
            const Icon = metric.icon
            return (
              <Card key={index} className="p-6 transition-shadow hover:shadow-lg">
                <div className="mb-4 flex items-start justify-between">
                  <div className="flex-1">
                    <div className="mb-2 flex items-center gap-2">
                      <Icon className="h-5 w-5 text-[#d4af37]" />
                      <h2 className="text-xl font-bold">{metric.name}</h2>
                    </div>
                    <Badge className="bg-[#d4af37] text-white">{metric.category}</Badge>
                  </div>
                </div>

                {/* Mini Chart */}
                <div className="mb-4 rounded-lg bg-gradient-to-br from-neutral-50 to-neutral-100 p-4">
                  <MiniChart data={metric.chartData} />
                  <p className="mt-2 text-center text-xs text-neutral-500">
                    Ejemplo de tendencia con datos ficticios
                  </p>
                </div>

                <div className="space-y-3">
                  <div>
                    <h3 className="mb-1 text-sm font-semibold text-neutral-700">¿Qué es?</h3>
                    <p className="text-sm text-neutral-600">{metric.description}</p>
                  </div>

                  <div>
                    <h3 className="mb-1 text-sm font-semibold text-neutral-700">¿Cómo interpretarla?</h3>
                    <p className="text-sm text-neutral-600">{metric.interpretation}</p>
                  </div>

                  <div>
                    <h3 className="mb-1 text-sm font-semibold text-neutral-700">¿Cuándo usar?</h3>
                    <p className="text-sm text-neutral-600">{metric.whenToUse}</p>
                  </div>

                  <div>
                    <h3 className="mb-1 text-sm font-semibold text-neutral-700">Limitaciones</h3>
                    <p className="text-sm text-neutral-600">{metric.limitations}</p>
                  </div>

                  <div className="rounded-lg bg-[#d4af37]/5 p-3">
                    <h3 className="mb-1 text-sm font-semibold text-[#d4af37]">Ejemplo</h3>
                    <p className="text-xs text-neutral-600">{metric.example}</p>
                  </div>

                  {/* Ver ejemplo en partido button */}
                  <Link href={metric.exampleMatch}>
                    <Button 
                      variant="outline" 
                      className="w-full border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-white"
                    >
                      Ver ejemplo en partido
                    </Button>
                  </Link>
                </div>
              </Card>
            )
          })}
        </div>

        {filteredMetrics.length === 0 && (
          <Card className="p-12 text-center">
            <p className="text-neutral-600">
              No se encontraron métricas que coincidan con tu búsqueda
            </p>
          </Card>
        )}

        {/* Info Box */}
        <Card className="mt-8 border-2 border-[#d4af37] bg-gradient-to-br from-[#d4af37]/10 to-transparent p-6">
          <h3 className="mb-2 text-xl font-bold">¿Necesitas más información?</h3>
          <p className="mb-4 text-neutral-600">
            Estas son las métricas básicas. Los LEGEND tienen acceso a análisis más profundos
            y métricas avanzadas exclusivas.
          </p>
          <a
            href="/legends"
            className="inline-block rounded-full bg-[#d4af37] px-6 py-2 font-medium text-white hover:bg-[#b8941f]"
          >
            Unirse a LEGEND
          </a>
        </Card>
      </main>

      <Footer />
    </div>
  )
}