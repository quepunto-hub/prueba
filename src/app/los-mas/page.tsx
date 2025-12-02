"use client"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import Link from "next/link"
import { Trophy, TrendingUp, Target, Zap, Lock, Shield, Activity, BarChart3, Crown } from "lucide-react"
import { useAuth } from "@/contexts/AuthContext"

const rankings = {
  goleadores: {
    title: "Máximos Goleadores",
    icon: <Trophy className="h-4 w-4" />,
    public: true,
    data: [
      { rank: 1, player: "Lewandowski", team: "FC Barcelona", teamBadge: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/barcelona-1764596043358.png", value: "17", metric: "Goles", image: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=200&h=200&fit=crop" },
      { rank: 2, player: "Vinícius Jr", team: "Real Madrid", teamBadge: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/real-madrid-1764626636759.png", value: "12", metric: "Goles", image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=200&h=200&fit=crop" },
      { rank: 3, player: "Griezmann", team: "Atlético Madrid", teamBadge: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/cbc5c8cc8c3e8abd0e175c00ee53b723-1764627217631.png", value: "11", metric: "Goles", image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=200&h=200&fit=crop" },
      { rank: 4, player: "Lamine Yamal", team: "FC Barcelona", teamBadge: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/barcelona-1764596043358.png", value: "9", metric: "Goles", image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=200&h=200&fit=crop" },
      { rank: 5, player: "Sørloth", team: "Atlético Madrid", teamBadge: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/cbc5c8cc8c3e8abd0e175c00ee53b723-1764627217631.png", value: "10", metric: "Goles", image: "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?w=200&h=200&fit=crop" }
    ]
  },
  asistentes: {
    title: "Máximos Asistentes",
    icon: <Target className="h-4 w-4" />,
    public: true,
    data: [
      { rank: 1, player: "Pedri", team: "FC Barcelona", teamBadge: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/barcelona-1764596043358.png", value: "12", metric: "Asistencias", image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=200&h=200&fit=crop" },
      { rank: 2, player: "Lamine Yamal", team: "FC Barcelona", teamBadge: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/barcelona-1764596043358.png", value: "9", metric: "Asistencias", image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=200&h=200&fit=crop" },
      { rank: 3, player: "Dani Olmo", team: "FC Barcelona", teamBadge: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/barcelona-1764596043358.png", value: "8", metric: "Asistencias", image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=200&h=200&fit=crop" },
      { rank: 4, player: "Nico Williams", team: "Athletic Club", teamBadge: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/athletic-1764596047133.png", value: "7", metric: "Asistencias", image: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=200&h=200&fit=crop" },
      { rank: 5, player: "De Paul", team: "Atlético Madrid", teamBadge: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/cbc5c8cc8c3e8abd0e175c00ee53b723-1764627217631.png", value: "6", metric: "Asistencias", image: "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?w=200&h=200&fit=crop" }
    ]
  },
  xg: {
    title: "Expected Goals (xG)",
    icon: <TrendingUp className="h-4 w-4" />,
    public: false,
    data: [
      { rank: 1, player: "Lewandowski", team: "FC Barcelona", teamBadge: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/barcelona-1764596043358.png", value: "12.1", metric: "xG", image: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=200&h=200&fit=crop" },
      { rank: 2, player: "Vinícius Jr", team: "Real Madrid", teamBadge: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/real-madrid-1764626636759.png", value: "10.8", metric: "xG", image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=200&h=200&fit=crop" },
      { rank: 3, player: "Lamine Yamal", team: "FC Barcelona", teamBadge: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/barcelona-1764596043358.png", value: "9.2", metric: "xG", image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=200&h=200&fit=crop" },
      { rank: 4, player: "Griezmann", team: "Atlético Madrid", teamBadge: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/cbc5c8cc8c3e8abd0e175c00ee53b723-1764627217631.png", value: "8.9", metric: "xG", image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=200&h=200&fit=crop" },
      { rank: 5, player: "Sørloth", team: "Atlético Madrid", teamBadge: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/cbc5c8cc8c3e8abd0e175c00ee53b723-1764627217631.png", value: "8.3", metric: "xG", image: "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?w=200&h=200&fit=crop" }
    ]
  },
  xa: {
    title: "Expected Assists (xA)",
    icon: <Zap className="h-4 w-4" />,
    public: false,
    data: [
      { rank: 1, player: "Lamine Yamal", team: "FC Barcelona", teamBadge: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/barcelona-1764596043358.png", value: "8.7", metric: "xA", image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=200&h=200&fit=crop" },
      { rank: 2, player: "Pedri", team: "FC Barcelona", teamBadge: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/barcelona-1764596043358.png", value: "7.2", metric: "xA", image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=200&h=200&fit=crop" },
      { rank: 3, player: "Vinícius Jr", team: "Real Madrid", teamBadge: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/real-madrid-1764626636759.png", value: "6.9", metric: "xA", image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=200&h=200&fit=crop" },
      { rank: 4, player: "Griezmann", team: "Atlético Madrid", teamBadge: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/cbc5c8cc8c3e8abd0e175c00ee53b723-1764627217631.png", value: "6.4", metric: "xA", image: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=200&h=200&fit=crop" },
      { rank: 5, player: "Nico Williams", team: "Athletic Club", teamBadge: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/athletic-1764596047133.png", value: "5.8", metric: "xA", image: "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?w=200&h=200&fit=crop" }
    ]
  },
  xthreat: {
    title: "xThreat (Amenaza Esperada)",
    icon: <Activity className="h-4 w-4" />,
    public: false,
    data: [
      { rank: 1, player: "Lamine Yamal", team: "FC Barcelona", teamBadge: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/barcelona-1764596043358.png", value: "0.89", metric: "xThreat", image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=200&h=200&fit=crop" },
      { rank: 2, player: "Vinícius Jr", team: "Real Madrid", teamBadge: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/real-madrid-1764626636759.png", value: "0.84", metric: "xThreat", image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=200&h=200&fit=crop" },
      { rank: 3, player: "Griezmann", team: "Atlético Madrid", teamBadge: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/cbc5c8cc8c3e8abd0e175c00ee53b723-1764627217631.png", value: "0.78", metric: "xThreat", image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=200&h=200&fit=crop" },
      { rank: 4, player: "Lewandowski", team: "FC Barcelona", teamBadge: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/barcelona-1764596043358.png", value: "0.72", metric: "xThreat", image: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=200&h=200&fit=crop" },
      { rank: 5, player: "Nico Williams", team: "Athletic Club", teamBadge: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/athletic-1764596047133.png", value: "0.69", metric: "xThreat", image: "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?w=200&h=200&fit=crop" }
    ]
  },
  progresion: {
    title: "Progresión del Balón",
    icon: <BarChart3 className="h-4 w-4" />,
    public: false,
    data: [
      { rank: 1, player: "Gavi", team: "FC Barcelona", teamBadge: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/barcelona-1764596043358.png", value: "142", metric: "metros", image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=200&h=200&fit=crop" },
      { rank: 2, player: "Bellingham", team: "Real Madrid", teamBadge: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/real-madrid-1764626636759.png", value: "138", metric: "metros", image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=200&h=200&fit=crop" },
      { rank: 3, player: "De Paul", team: "Atlético Madrid", teamBadge: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/cbc5c8cc8c3e8abd0e175c00ee53b723-1764627217631.png", value: "128", metric: "metros", image: "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?w=200&h=200&fit=crop" },
      { rank: 4, player: "Pedri", team: "FC Barcelona", teamBadge: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/barcelona-1764596043358.png", value: "124", metric: "metros", image: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=200&h=200&fit=crop" },
      { rank: 5, player: "Sancet", team: "Athletic Club", teamBadge: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/athletic-1764596047133.png", value: "118", metric: "metros", image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=200&h=200&fit=crop" }
    ]
  },
  defensivos: {
    title: "Impacto Defensivo (PPDA)",
    icon: <Shield className="h-4 w-4" />,
    public: false,
    data: [
      { rank: 1, player: "Koundé", team: "FC Barcelona", teamBadge: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/barcelona-1764596043358.png", value: "8.2", metric: "PPDA", image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=200&h=200&fit=crop" },
      { rank: 2, player: "Rüdiger", team: "Real Madrid", teamBadge: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/real-madrid-1764626636759.png", value: "8.9", metric: "PPDA", image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=200&h=200&fit=crop" },
      { rank: 3, player: "Yeray", team: "Athletic Club", teamBadge: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/athletic-1764596047133.png", value: "9.4", metric: "PPDA", image: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=200&h=200&fit=crop" },
      { rank: 4, player: "Savić", team: "Atlético Madrid", teamBadge: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/cbc5c8cc8c3e8abd0e175c00ee53b723-1764627217631.png", value: "9.8", metric: "PPDA", image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=200&h=200&fit=crop" },
      { rank: 5, player: "Cubarsí", team: "FC Barcelona", teamBadge: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/barcelona-1764596043358.png", value: "10.1", metric: "PPDA", image: "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?w=200&h=200&fit=crop" }
    ]
  },
  impacto: {
    title: "Impacto de Pases (xA/pase)",
    icon: <Target className="h-4 w-4" />,
    public: false,
    data: [
      { rank: 1, player: "Pedri", team: "FC Barcelona", teamBadge: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/barcelona-1764596043358.png", value: "0.67", metric: "xA/pase", image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=200&h=200&fit=crop" },
      { rank: 2, player: "Lamine Yamal", team: "FC Barcelona", teamBadge: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/barcelona-1764596043358.png", value: "0.62", metric: "xA/pase", image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=200&h=200&fit=crop" },
      { rank: 3, player: "Modric", team: "Real Madrid", teamBadge: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/real-madrid-1764626636759.png", value: "0.58", metric: "xA/pase", image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=200&h=200&fit=crop" },
      { rank: 4, player: "Griezmann", team: "Atlético Madrid", teamBadge: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/cbc5c8cc8c3e8abd0e175c00ee53b723-1764627217631.png", value: "0.54", metric: "xA/pase", image: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=200&h=200&fit=crop" },
      { rank: 5, player: "Nico Williams", team: "Athletic Club", teamBadge: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/athletic-1764596047133.png", value: "0.51", metric: "xA/pase", image: "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?w=200&h=200&fit=crop" }
    ]
  }
}

export default function LosMasPage() {
  const { userType } = useAuth()

  const renderRanking = (key: string, rankingData: any) => {
    const isLocked = !rankingData.public && userType !== 'legends'

    return (
      <TabsContent key={key} value={key} className="space-y-4">
        {isLocked ? (
          <>
            {/* Show first 2 items blurred */}
            {rankingData.data.slice(0, 2).map((item: any) => (
              <Card key={item.rank} className="relative overflow-hidden p-6">
                <div className="blur-sm">
                  <div className="flex items-center gap-6">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#d4af37] text-2xl font-bold text-white">
                      {item.rank}
                    </div>
                    <div className="relative h-20 w-20 overflow-hidden rounded-full">
                      <Image src={item.image} alt={item.player} fill className="object-cover" />
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-1 text-xl font-bold">{item.player}</h3>
                      <div className="flex items-center gap-2">
                        <div className="relative h-5 w-5">
                          <Image src={item.teamBadge} alt={item.team} fill className="object-contain" sizes="20px" />
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-4xl font-bold text-[#d4af37]">{item.value}</p>
                      <p className="text-sm text-neutral-600">{item.metric}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}

            {/* Legend Lock Card */}
            <Card className="border-2 border-[#d4af37] bg-gradient-to-br from-[#d4af37]/10 to-transparent p-12 text-center">
              <Lock className="mx-auto mb-4 h-16 w-16 text-[#d4af37]" />
              <Crown className="mx-auto mb-4 h-12 w-12 text-[#d4af37]" />
              <h3 className="mb-2 text-2xl font-bold">Contenido Exclusivo LEGEND</h3>
              <p className="mx-auto mb-6 max-w-xl text-neutral-600">
                Este ranking avanzado está disponible solo para LEGEND. 
                Accede a métricas premium y análisis completos.
              </p>
              <Link
                href="/legends"
                className="inline-block rounded-full bg-[#d4af37] px-8 py-3 font-bold text-white hover:bg-[#b8941f]"
              >
                Unirse a LEGEND
              </Link>
            </Card>
          </>
        ) : (
          <>
            {rankingData.data.map((item: any) => (
              <Link key={item.rank} href={`/jugador/${item.player.toLowerCase().replace(/\\s+/g, '-')}`}>
                <Card className="p-6 transition-shadow hover:shadow-lg">
                  <div className="flex items-center gap-6">
                    <div className={`flex h-16 w-16 items-center justify-center rounded-full ${item.rank === 1 ? 'bg-[#d4af37]' : 'bg-neutral-200'} text-2xl font-bold ${item.rank === 1 ? 'text-white' : 'text-neutral-700'}`}>
                      {item.rank}
                    </div>
                    
                    <div className="relative h-20 w-20 overflow-hidden rounded-full">
                      <Image src={item.image} alt={item.player} fill className="object-cover" />
                    </div>

                    <div className="flex-1">
                      <h3 className="mb-1 text-xl font-bold">{item.player}</h3>
                      <div className="flex items-center gap-2">
                        <div className="relative h-5 w-5">
                          <Image src={item.teamBadge} alt={item.team} fill className="object-contain" sizes="20px" />
                        </div>
                      </div>
                    </div>

                    <div className="text-right">
                      <p className={`text-4xl font-bold ${item.rank === 1 ? 'text-[#d4af37]' : 'text-neutral-700'}`}>{item.value}</p>
                      <p className="text-sm text-neutral-600">{item.metric}</p>
                    </div>

                    {!rankingData.public && (
                      <div>
                        <Crown className="h-6 w-6 text-[#d4af37]" />
                      </div>
                    )}
                  </div>
                </Card>
              </Link>
            ))}
          </>
        )}
      </TabsContent>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="mb-2 text-4xl font-bold">LOS MÁS</h1>
          <p className="text-neutral-600">Rankings de jugadores según métricas avanzadas</p>
        </div>

        <Tabs defaultValue="goleadores" className="w-full">
          <TabsList className="mb-8 grid w-full grid-cols-2 gap-2 lg:grid-cols-4 xl:grid-cols-8 h-auto">
            {Object.entries(rankings).map(([key, data]) => (
              <TabsTrigger key={key} value={key} className="flex items-center gap-2 py-3">
                {data.icon}
                <span className="hidden lg:inline">{data.title.split(' ')[0]}</span>
                <span className="lg:hidden">{key === 'goleadores' ? 'Goles' : key === 'asistentes' ? 'Asist.' : key.toUpperCase()}</span>
                {!data.public && <Lock className="h-3 w-3 text-[#d4af37]" />}
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(rankings).map(([key, data]) => renderRanking(key, data))}
        </Tabs>
      </main>

      <Footer />
    </div>
  )
}