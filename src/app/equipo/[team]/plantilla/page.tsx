"use client"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

const squadData = {
  teamName: "FC BARCELONA",
  teamLogo: "⚽",
  players: [
    {
      name: "Ter Stegen",
      number: "1",
      position: "Portero",
      matches: 28,
      goals: 0,
      assists: 0,
      xG: 0,
      image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=200&h=200&fit=crop"
    },
    {
      name: "Koundé",
      number: "23",
      position: "Defensa",
      matches: 30,
      goals: 2,
      assists: 4,
      xG: 1.8,
      image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=200&h=200&fit=crop"
    },
    {
      name: "Araújo",
      number: "4",
      position: "Defensa",
      matches: 25,
      goals: 1,
      assists: 1,
      xG: 1.2,
      image: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=200&h=200&fit=crop"
    },
    {
      name: "Pau Cubarsí",
      number: "2",
      position: "Defensa",
      matches: 20,
      goals: 0,
      assists: 2,
      xG: 0.5,
      image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=200&h=200&fit=crop"
    },
    {
      name: "Balde",
      number: "3",
      position: "Defensa",
      matches: 27,
      goals: 1,
      assists: 3,
      xG: 0.9,
      image: "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?w=200&h=200&fit=crop"
    },
    {
      name: "Pedri",
      number: "8",
      position: "Centrocampista",
      matches: 29,
      goals: 5,
      assists: 12,
      xG: 4.2,
      image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=200&h=200&fit=crop"
    },
    {
      name: "Gavi",
      number: "6",
      position: "Centrocampista",
      matches: 15,
      goals: 2,
      assists: 4,
      xG: 1.8,
      image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=200&h=200&fit=crop"
    },
    {
      name: "De Jong",
      number: "21",
      position: "Centrocampista",
      matches: 26,
      goals: 3,
      assists: 5,
      xG: 2.5,
      image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=200&h=200&fit=crop"
    },
    {
      name: "Lamine Yamal",
      number: "10",
      position: "Delantero",
      matches: 30,
      goals: 9,
      assists: 9,
      xG: 9.2,
      image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=200&h=200&fit=crop"
    },
    {
      name: "Lewandowski",
      number: "9",
      position: "Delantero",
      matches: 28,
      goals: 17,
      assists: 4,
      xG: 12.1,
      image: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=200&h=200&fit=crop"
    },
    {
      name: "Raphinha",
      number: "11",
      position: "Delantero",
      matches: 29,
      goals: 7,
      assists: 6,
      xG: 6.8,
      image: "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?w=200&h=200&fit=crop"
    },
    {
      name: "Ferran Torres",
      number: "7",
      position: "Delantero",
      matches: 24,
      goals: 5,
      assists: 3,
      xG: 4.9,
      image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=200&h=200&fit=crop"
    }
  ]
}

const positionGroups = {
  Portero: squadData.players.filter(p => p.position === "Portero"),
  Defensa: squadData.players.filter(p => p.position === "Defensa"),
  Centrocampista: squadData.players.filter(p => p.position === "Centrocampista"),
  Delantero: squadData.players.filter(p => p.position === "Delantero")
}

export default function PlantillaPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link 
          href="/equipo/fc-barcelona"
          className="mb-6 inline-flex items-center gap-2 text-sm text-neutral-600 hover:text-[#d4af37]"
        >
          <ArrowLeft className="h-4 w-4" />
          Volver al equipo
        </Link>

        {/* Team Header */}
        <div className="mb-8 flex items-center gap-4">
          <div className="text-6xl">{squadData.teamLogo}</div>
          <div>
            <h1 className="text-4xl font-bold">{squadData.teamName}</h1>
            <p className="text-neutral-600">Plantilla completa - Temporada 2024/25</p>
          </div>
        </div>

        {/* Squad by Position */}
        {Object.entries(positionGroups).map(([position, players]) => (
          <div key={position} className="mb-12">
            <h2 className="mb-6 text-2xl font-bold">{position}s</h2>
            
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {players.map((player, index) => (
                <Link 
                  key={index}
                  href={`/jugador/${player.name.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <Card className="overflow-hidden transition-shadow hover:shadow-lg">
                    <div className="relative h-48">
                      <Image
                        src={player.image}
                        alt={player.name}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#d4af37] text-xl font-bold text-white">
                        {player.number}
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <h3 className="mb-1 text-xl font-bold hover:text-[#d4af37]">
                        {player.name}
                      </h3>
                      <Badge className="mb-4">{player.position}</Badge>
                      
                      <div className="grid grid-cols-4 gap-2 text-center">
                        <div>
                          <p className="text-xs text-neutral-500">PJ</p>
                          <p className="font-bold">{player.matches}</p>
                        </div>
                        <div>
                          <p className="text-xs text-neutral-500">Goles</p>
                          <p className="font-bold text-[#d4af37]">{player.goals}</p>
                        </div>
                        <div>
                          <p className="text-xs text-neutral-500">Asist.</p>
                          <p className="font-bold text-[#d4af37]">{player.assists}</p>
                        </div>
                        <div>
                          <p className="text-xs text-neutral-500">xG</p>
                          <p className="font-bold">{player.xG}</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        ))}

        {/* Stats Summary */}
        <Card className="bg-neutral-50 p-8">
          <h2 className="mb-6 text-2xl font-bold">Resumen de Plantilla</h2>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            <div>
              <p className="mb-2 text-sm text-neutral-600">Total Jugadores</p>
              <p className="text-3xl font-bold text-[#d4af37]">{squadData.players.length}</p>
            </div>
            <div>
              <p className="mb-2 text-sm text-neutral-600">Goles Totales</p>
              <p className="text-3xl font-bold text-[#d4af37]">
                {squadData.players.reduce((sum, p) => sum + p.goals, 0)}
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm text-neutral-600">Asistencias Totales</p>
              <p className="text-3xl font-bold text-[#d4af37]">
                {squadData.players.reduce((sum, p) => sum + p.assists, 0)}
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm text-neutral-600">xG Total</p>
              <p className="text-3xl font-bold text-[#d4af37]">
                {squadData.players.reduce((sum, p) => sum + p.xG, 0).toFixed(1)}
              </p>
            </div>
          </div>
        </Card>
      </main>

      <Footer />
    </div>
  )
}
