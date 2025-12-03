"use client"

import { useEffect, useState } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Check,
  Crown,
  TrendingUp,
  Users,
  BarChart3,
  Mail,
  Target,
  Zap,
  Activity,
  Award,
  FileText,
} from "lucide-react"
import LegendsBadge from "@/components/LegendsBadge"
import Image from "next/image"
import Link from "next/link"
import { useAuth } from "@/contexts/AuthContext"
import { useRouter } from "next/navigation" // solo useRouter

export const dynamic = "force-dynamic"

const features = [
  {
    icon: <BarChart3 className="h-6 w-6" />,
    title: "Análisis Avanzados",
    description: "Acceso completo a previas y post-partidos con métricas predictivas y análisis profundos",
  },
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: "Métricas Premium",
    description: "Visualizaciones exclusivas, mapas de calor detallados y estadísticas no disponibles para el público",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Rankings Completos",
    description: "Accede a todos nuestros rankings con métricas avanzadas y comparativas personalizadas",
  },
  {
    icon: <Crown className="h-6 w-6" />,
    title: "Contenido Exclusivo",
    description: "Artículos y reportes semanales reservados solo para LEGEND",
  },
  {
    icon: <Target className="h-6 w-6" />,
    title: "Predicciones xG",
    description: "Modelos predictivos de Expected Goals para todos los partidos de LaLiga",
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Alertas Personalizadas",
    description: "Notificaciones sobre tus equipos y jugadores favoritos con datos en tiempo real",
  },
  {
    icon: <Activity className="h-6 w-6" />,
    title: "Mapas de Calor Live",
    description: "Visualizaciones en directo de posesión, presión y zonas de influencia",
  },
  {
    icon: <Award className="h-6 w-6" />,
    title: "Comparador Avanzado",
    description: "Compara hasta 4 jugadores simultáneamente con más de 50 métricas diferentes",
  },
]

const premiumStats = [
  { label: "Métricas Exclusivas", value: "120+", icon: <BarChart3 className="h-6 w-6" /> },
  { label: "Análisis Semanales", value: "15+", icon: <FileText className="h-6 w-6" /> },
  { label: "Mapas de Calor", value: "800+", icon: <Activity className="h-6 w-6" /> },
  { label: "Miembros Activos", value: "5.000+", icon: <Users className="h-6 w-6" /> },
]

const amateurFeatures = [
  "Fixtures and Results",
  "Standings",
  "Calendar / Torneos",
  "Basic Live Events – X/g in the game",
  "Live Scores",
  "Squads, Team Areas",
  "Match Stats, Season Stats, Ranks",
  "Key events, Passes, Shots",
  "Possession Match Stats",
  "Defensive Coverage",
  "Artículos normales",
  "Newsletter básica",
]

const legendFeatures = [
  "Heat Maps (concretos)",
  "xA from open play",
  "Detailed player informe",
  "xP and xG season",
  "Informes concretos de jugadores",
  "Artículos avanzados",
  "Newsletter avanzada",
  "Rankings avanzados (algunos exclusivos)",
  "Análisis post-partido exclusivos",
  "Comparador de jugadores avanzado",
  "Proyecciones xG por equipo",
  "Métricas defensivas avanzadas",
  "Alertas personalizadas en tiempo real",
  "Acceso prioritario a nuevas features",
  "Mapas de presión por zona",
  "Análisis táctico con IA",
]

const testimonials = [
  {
    name: "Carlos M.",
    role: "Analista deportivo",
    text: "Las métricas avanzadas de The Expected han transformado mi forma de ver el fútbol. Imprescindible.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
  },
  {
    name: "Laura S.",
    role: "Aficionada del Barcelona",
    text: "Finalmente entiendo lo que pasa en el campo más allá de los goles. Los análisis son increíbles.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
  },
  {
    name: "Miguel A.",
    role: "Fantasy manager",
    text: "Mis decisiones en Fantasy han mejorado un 200% gracias a las métricas de LEGEND.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
  },
  {
    name: "Sandra R.",
    role: "Periodista deportiva",
    text: "Los mapas de calor y análisis predictivos son una herramienta fundamental para mi trabajo diario.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  },
  {
    name: "Javier P.",
    role: "Entrenador amateur",
    text: "He aprendido más de táctica con LEGEND en 3 meses que en años viendo partidos.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  },
  {
    name: "Elena T.",
    role: "Data analyst",
    text: "La profundidad de los datos y la calidad de las visualizaciones es excepcional. Muy profesional.",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop",
  },
]

const exclusiveContent = [
  {
    title: "Previas Tácticas Avanzadas",
    description:
      "Análisis predictivo completo de cada partido con probabilidades, xG esperado, zonas de peligro y tendencias históricas",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=400&fit=crop",
    link: "/partido/preview/sample",
  },
  {
    title: "Post-Partidos Profundos",
    description:
      "Desglose completo con evolución del xG minuto a minuto, mapas de calor por jugador y análisis de momentos clave",
    image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=800&h=400&fit=crop",
    link: "/partido/post/sample",
  },
  {
    title: "Perfiles de Jugador",
    description:
      "Métricas avanzadas individuales, rendimiento por zona, comparativas con la competencia y proyecciones de temporada",
    image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&h=400&fit=crop",
    link: "/jugador/lamine-yamal",
  },
  {
    title: "Análisis de Equipos",
    description:
      "Estadísticas colectivas, patrones tácticos, fortalezas y debilidades, y comparativas con otros equipos de la liga",
    image: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=800&h=400&fit=crop",
    link: "/equipo/fc-barcelona",
  },
  {
    title: "Rankings Exclusivos",
    description:
      "Clasificaciones avanzadas basadas en métricas premium: xG Chain, PPDA, regates progresivos y mucho más",
    image: "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?w=800&h=400&fit=crop",
    link: "/los-mas",
  },
  {
    title: "Reportes Semanales",
    description:
      "Resumen completo de la jornada con los mejores y peores rendimientos, sorpresas estadísticas y tendencias emergentes",
    image: "https://images.unsplash.com/photo-1522778526097-ce0a22ceb253?w=800&h=400&fit=crop",
    link: "/legends/dashboard",
  },
]

const faqs = [
  {
    question: "¿Qué incluye la membresía LEGEND?",
    answer:
      "Acceso completo a todos los análisis avanzados, mapas de calor, métricas premium, rankings exclusivos, newsletter avanzada y contenido reservado para miembros.",
  },
  {
    question: "¿Puedo cancelar en cualquier momento?",
    answer:
      "Sí, esta es una demo gratuita sin compromiso. Puedes probar todas las funciones sin necesidad de tarjeta de crédito.",
  },
  {
    question: "¿Con qué frecuencia se actualiza el contenido?",
    answer:
      "Publicamos análisis antes y después de cada partido de LaLiga, además de reportes semanales y rankings actualizados en tiempo real.",
  },
  {
    question: "¿Los datos provienen de Opta?",
    answer:
      "Actualmente usamos datos de ejemplo. Próximamente integraremos datos oficiales de Opta para mayor precisión.",
  },
  {
    question: "¿Necesito conocimientos previos de estadística?",
    answer:
      "No. Explicamos cada métrica en nuestro diccionario de datos y los análisis están escritos para ser comprensibles por cualquier aficionado.",
  },
  {
    question: "¿Puedo compartir mi cuenta?",
    answer:
      "Las cuentas son personales. Ofrecemos planes familiares y de grupo para compartir el acceso de forma oficial.",
  },
]

type LegendsPageProps = {
  searchParams?: { action?: string }
}

export default function LegendsPage({ searchParams }: LegendsPageProps) {
  const { login, userType } = useAuth()
  const router = useRouter()
  const action = searchParams?.action
  const [email, setEmail] = useState("")
  const [faqOpen, setFaqOpen] = useState<number | null>(null)

  useEffect(() => {
    if (action === "free") {
      login("free")
      router.push("/")
    }
  }, [action, login, router])

  const handleLegendsLogin = () => {
    login("legends")
    router.push("/legends/dashboard")
  }

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("¡Gracias por suscribirte a nuestra newsletter!")
    setEmail("")
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        {/* Hero */}
        <div className="relative overflow-hidden bg-gradient-to-br from-neutral-900 via-neutral-800 to-black py-20">
          <div className="container mx-auto px-4 text-center text-white">
            <div className="mb-6 flex justify-center">
              <Crown className="h-16 w-16 text-[#d4af37]" />
            </div>
            <h1 className="mb-4 text-5xl font-bold">
              Conviértete en un <span className="text-[#d4af37]">LEGEND</span>
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-xl text-neutral-300">
              Accede a análisis avanzados, métricas premium y contenido exclusivo para entender el fútbol como nunca
              antes
            </p>
            <div className="flex flex-col items-center gap-4">
              <Button
                onClick={handleLegendsLogin}
                className="rounded-full bg-[#d4af37] px-8 py-6 text-lg font-bold text-white hover:bg-[#b8941f]"
              >
                Iniciar Sesión como LEGEND
              </Button>
              <p className="text-sm text-neutral-400">Demo gratuita • Acceso inmediato • Sin tarjeta</p>
            </div>
          </div>
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-[#d4af37]/20 blur-3xl" />
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#d4af37]/20 blur-3xl" />
        </div>

        {/* Stats */}
        <div className="border-b border-neutral-200 bg-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {premiumStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="mb-3 flex justify-center">
                    <div className="rounded-full bg-[#d4af37]/10 p-3 text-[#d4af37]">{stat.icon}</div>
                  </div>
                  <p className="mb-1 text-3xl font-bold text-[#d4af37]">{stat.value}</p>
                  <p className="text-sm text-neutral-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="container mx-auto px-4 py-16">
          <h2 className="mb-4 text-center text-3xl font-bold">Todo lo que incluye LEGEND</h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-neutral-600">
            Más de 120 métricas exclusivas, análisis predictivos con IA y herramientas profesionales de visualización de
            datos
          </p>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 text-center transition-all hover:border-[#d4af37] hover:shadow-lg">
                <div className="mb-4 flex justify-center">
                  <div className="rounded-full bg-[#d4af37]/10 p-4 text-[#d4af37]">{feature.icon}</div>
                </div>
                <h3 className="mb-2 font-bold">{feature.title}</h3>
                <p className="text-sm text-neutral-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Exclusive content */}
        <div className="bg-neutral-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-4 text-center text-3xl font-bold">Contenido Exclusivo LEGEND</h2>
            <p className="mx-auto mb-12 max-w-2xl text-center text-neutral-600">
              Explora el tipo de análisis avanzado al que tendrás acceso como miembro LEGEND
            </p>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {exclusiveContent.map((content, index) => (
                <Link key={index} href={content.link}>
                  <Card className="group overflow-hidden transition-all hover:border-[#d4af37] hover:shadow-xl">
                    <div className="relative h-48">
                      <Image
                        src={content.image}
                        alt={content.title}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="mb-2 flex items-center gap-2">
                          <Crown className="h-6 w-6 text-[#d4af37]" />
                          <LegendsBadge />
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="mb-2 text-lg font-bold group-hover:text-[#d4af37]">{content.title}</h3>
                      <p className="text-sm text-neutral-600">{content.description}</p>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Plans */}
        <div className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-4 text-center text-3xl font-bold">Amateur vs LEGEND</h2>
            <p className="mx-auto mb-12 max-w-2xl text-center text-neutral-600">
              Compara las características de cada plan y elige el que mejor se adapte a tus necesidades
            </p>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {/* Amateur */}
              <Card className="overflow-hidden">
                <div className="bg-neutral-100 p-6 text-center">
                  <h3 className="text-2xl font-bold">Plan Amateur</h3>
                  <p className="mt-2 text-sm text-neutral-600">Acceso básico gratuito</p>
                  <p className="mt-4 text-4xl font-bold">€0</p>
                  <p className="text-sm text-neutral-500">siempre gratis</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {amateurFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 rounded-lg border-2 border-[#d4af37] bg-[#d4af37]/5 p-6">
                    <div className="mb-4 flex items-center gap-2">
                      <Mail className="h-6 w-6 text-[#d4af37]" />
                      <h4 className="font-bold">Newsletter Básica</h4>
                    </div>
                    <p className="mb-4 text-sm text-neutral-600">
                      Suscríbete para recibir análisis semanales y actualizaciones
                    </p>
                    <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                      <Input
                        type="email"
                        placeholder="tu@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="flex-1"
                      />
                      <Button type="submit" className="bg-[#d4af37] hover:bg-[#b8941f]">
                        Suscribirse
                      </Button>
                    </form>
                  </div>
                </div>
              </Card>

              {/* Legend */}
              <Card className="overflow-hidden border-2 border-[#d4af37]">
                <div className="bg-gradient-to-r from-[#d4af37] to-[#b8941f] p-6 text-center text-white">
                  <Crown className="mx-auto mb-2 h-8 w-8" />
                  <h3 className="text-2xl font-bold">LEGEND</h3>
                  <p className="mt-2 text-sm opacity-90">Contenido exclusivo premium</p>
                  <p className="mt-4 text-4xl font-bold">DEMO</p>
                  <p className="text-sm opacity-90">acceso completo gratis</p>
                </div>
                <div className="p-6">
                  <p className="mb-4 text-sm font-semibold text-[#d4af37]">TODO LO DE AMATEUR, MÁS:</p>
                  <ul className="space-y-3">
                    {legendFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#d4af37]" />
                        <span className="text-sm font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Button
                      onClick={handleLegendsLogin}
                      className="w-full rounded-full bg-[#d4af37] py-6 text-lg font-bold text-white hover:bg-[#b8941f]"
                    >
                      Comenzar Ahora
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="bg-neutral-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-4 text-center text-3xl font-bold">Lo que dicen nuestros LEGEND</h2>
            <p className="mx-auto mb-12 max-w-2xl text-center text-neutral-600">
              Miles de aficionados, analistas y profesionales confían en nuestras métricas
            </p>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="p-6 transition-shadow hover:shadow-lg">
                  <div className="mb-4 flex items-center gap-4">
                    <div className="relative h-12 w-12 overflow-hidden rounded-full">
                      <Image src={testimonial.image} alt={testimonial.name} fill className="object-cover" />
                    </div>
                    <div>
                      <p className="font-bold">{testimonial.name}</p>
                      <p className="text-sm text-neutral-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-sm text-neutral-700">"{testimonial.text}"</p>
                  <div className="mt-4 flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className="text-[#d4af37]">
                        ★
                      </span>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="container mx-auto px-4 py-16">
          <h2 className="mb-4 text-center text-3xl font-bold">Preguntas Frecuentes</h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-neutral-600">
            ¿Tienes dudas? Aquí resolvemos las más comunes
          </p>
          <div className="mx-auto max-w-3xl space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="overflow-hidden">
                <button
                  onClick={() => setFaqOpen(faqOpen === index ? null : index)}
                  className="w-full p-6 text-left transition-colors hover:bg-neutral-50"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold">{faq.question}</h3>
                    <span
                      className={`text-2xl text-[#d4af37] transition-transform ${
                        faqOpen === index ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </div>
                  {faqOpen === index && <p className="mt-4 text-sm text-neutral-600">{faq.answer}</p>}
                </button>
              </Card>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="container mx-auto px-4 py-16">
          <Card className="overflow-hidden border-2 border-[#d4af37]">
            <div className="bg-gradient-to-br from-[#d4af37] to-[#b8941f] p-12 text-center text-white">
              <Crown className="mx-auto mb-4 h-16 w-16" />
              <h2 className="mb-4 text-3xl font-bold">Únete a la Comunidad LEGEND</h2>
              <p className="mx-auto mb-8 max-w-2xl text-lg">
                Más de 5.000 aficionados ya disfrutan del mejor análisis futbolístico basado en datos
              </p>
              <Button
                onClick={handleLegendsLogin}
                className="rounded-full bg-white px-8 py-6 text-lg font-bold text-[#d4af37] hover:bg-neutral-100"
              >
                Iniciar Sesión Ahora
              </Button>
              <p className="mt-4 text-sm opacity-90">Demo gratuita • Acceso completo • Sin compromiso</p>
            </div>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
