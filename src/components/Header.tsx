"use client"

import Link from "next/link"
import { ChevronDown, Menu, X, Instagram, Crown } from "lucide-react"
import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { useAuth } from "@/contexts/AuthContext"

const laligaTeams = [
  { name: "Deportivo Alavés", slug: "alaves", badge: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/27002754a98bf535807fe49a24cc63ea-1764628055806.png" },
  { name: "Athletic Club", slug: "athletic-club", badge: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/athletic-1764596047133.png" },
  { name: "Atlético de Madrid", slug: "atletico-madrid", badge: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/cbc5c8cc8c3e8abd0e175c00ee53b723-1764627217631.png" },
  { name: "FC Barcelona", slug: "fc-barcelona", badge: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/barcelona-1764596043358.png" },
  { name: "Celta de Vigo", slug: "celta-de-vigo", badge: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/0a796827f9e758d7d750db805adde7c5-1764628055749.png" },
  { name: "Elche CF", slug: "elche", badge: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/elche-1764631029223.png" },
  { name: "RCD Espanyol de Barcelona", slug: "espanyol", badge: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/espanyol-1764631029241.png" },
  { name: "Getafe CF", slug: "getafe", badge: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/getafe-1764631044391.png" },
  { name: "Girona FC", slug: "girona", badge: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/8f43addbb29e4a72f5e90b6edfe4728f-1764628055794.png" },
  { name: "Levante UD", slug: "levante", badge: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/levante-1764631056185.png" },
  { name: "RCD Mallorca", slug: "mallorca", badge: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/013ae97735bc8e519dcf30f6826168ca-1764628055800.png" },
  { name: "Club Atlético Osasuna", slug: "osasuna", badge: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/osasuna-1764628045122.png" },
  { name: "Rayo Vallecano de Madrid", slug: "rayo-vallecano", badge: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/57d9950a8745ead226c04d37235c0786-1764628055797.png" },
  { name: "Real Betis Balompié", slug: "real-betis", badge: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/betis-1764631004098.png" },
  { name: "Real Madrid CF", slug: "real-madrid", badge: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/real-madrid-1764626636759.png" },
  { name: "Real Oviedo", slug: "oviedo", badge: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/oviedo-1764628045134.png" },
  { name: "Real Sociedad de Fútbol", slug: "real-sociedad", badge: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/real-sociedad-1764630244938.png" },
  { name: "Sevilla FC", slug: "sevilla", badge: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/sevilla-1764628035037.png" },
  { name: "Valencia CF", slug: "valencia", badge: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/valencia-1764628035056.png" },
  { name: "Villarreal CF", slug: "villarreal", badge: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/villarreal-1764626672679.png" }
]

const TikTokIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
)

export default function Header() {
  const { userType, setViewMode } = useAuth()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLaLigaOpen, setIsLaLigaOpen] = useState(false)
  const laLigaTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleLaLigaEnter = () => {
    if (laLigaTimeoutRef.current) {
      clearTimeout(laLigaTimeoutRef.current)
    }
    setIsLaLigaOpen(true)
  }

  const handleLaLigaLeave = () => {
    // Mantener abierto por 800ms después de salir del cursor
    laLigaTimeoutRef.current = setTimeout(() => {
      setIsLaLigaOpen(false)
    }, 800)
  }

  useEffect(() => {
    return () => {
      if (laLigaTimeoutRef.current) {
        clearTimeout(laLigaTimeoutRef.current)
      }
    }
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white">
      {/* Social Media Bar */}
      <div className="border-b border-neutral-100 bg-neutral-50">
        <div className="container mx-auto flex items-center justify-end gap-4 px-4 py-2">
          <a href="https://instagram.com" className="text-neutral-600 hover:text-[#d4af37] transition-colors" aria-label="Instagram">
            <Instagram className="h-5 w-5" />
          </a>
          <a href="https://tiktok.com" className="text-neutral-600 hover:text-[#d4af37] transition-colors" aria-label="TikTok">
            <TikTokIcon />
          </a>
        </div>
      </div>

      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Copia-de-Blue-Navy-Modern-Podcast-Channel-Facebook-Ad-1764601709936.png?width=8000&height=8000&resize=contain"
            alt="The Expected"
            width={180}
            height={40}
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          {/* LaLiga Dropdown con persistencia */}
          <div 
            className="relative"
            onMouseEnter={handleLaLigaEnter}
            onMouseLeave={handleLaLigaLeave}
          >
            <button className="flex items-center gap-1 text-sm font-medium hover:text-[#d4af37] transition-colors">
              LALIGA <ChevronDown className="h-4 w-4" />
            </button>
            {isLaLigaOpen && (
              <div className="absolute left-0 top-full mt-2 w-64 max-h-[500px] overflow-y-auto rounded-lg border border-neutral-200 bg-white shadow-lg">
                <div className="flex flex-col py-2">
                  {laligaTeams.map((team) => (
                    <Link
                      key={team.slug}
                      href={`/equipo/${team.slug}`}
                      className="flex items-center gap-3 px-4 py-3 transition-all hover:bg-neutral-50 hover:border-l-4 hover:border-l-[#d4af37]"
                      onClick={() => setIsLaLigaOpen(false)}
                    >
                      <div className="relative h-8 w-8 flex-shrink-0">
                        <Image
                          src={team.badge}
                          alt={`Escudo ${team.name}`}
                          fill
                          className="object-contain"
                          sizes="32px"
                        />
                      </div>
                      <span className="text-sm font-medium">{team.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          <Link href="/los-mas" className="text-sm font-medium hover:text-[#d4af37] transition-colors">
            LOS MÁS
          </Link>
          
          <Link href="/diccionario" className="text-sm font-medium hover:text-[#d4af37] transition-colors">
            DICCIONARIO
          </Link>

          {/* Selector de Modos - Siempre visible */}
          <div className="flex items-center gap-2 border-l border-neutral-200 pl-6">
            <button
              onClick={() => setViewMode('amateur')}
              className={`rounded-full border-2 px-4 py-1.5 text-sm font-medium transition-all ${
                userType === 'amateur'
                  ? 'border-[#d4af37] bg-[#d4af37] text-white'
                  : 'border-neutral-300 bg-transparent text-neutral-600 hover:border-neutral-400'
              }`}
            >
              Amateur
            </button>
            <button
              onClick={() => setViewMode('legends')}
              className={`rounded-full border-2 px-4 py-1.5 text-sm font-medium transition-all ${
                userType === 'legends'
                  ? 'border-[#d4af37] bg-[#d4af37] text-white'
                  : 'border-neutral-300 bg-transparent text-neutral-600 hover:border-neutral-400'
              }`}
            >
              Legend
            </button>
          </div>
          
          <Link
            href="/legends"
            className="flex items-center gap-2 rounded-full bg-[#d4af37] px-4 py-2 text-sm font-medium text-white hover:bg-[#b8941f] transition-colors"
          >
            <Crown className="h-4 w-4" />
            LEGEND
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="border-t border-neutral-200 bg-white md:hidden">
          <nav className="container mx-auto flex flex-col gap-4 p-4">
            {/* Selector de Modos Mobile - Siempre visible */}
            <div className="flex gap-2">
              <button
                onClick={() => {
                  setViewMode('amateur')
                  setIsMenuOpen(false)
                }}
                className={`flex-1 flex items-center justify-center gap-1.5 rounded-lg border-2 px-3 py-2 text-sm font-medium transition-all ${
                  userType === 'amateur'
                    ? 'border-[#d4af37] bg-[#d4af37] text-white'
                    : 'border-neutral-300 text-neutral-600'
                }`}
              >
                amateur
              </button>
              <button
                onClick={() => {
                  setViewMode('legends')
                  setIsMenuOpen(false)
                }}
                className={`flex-1 flex items-center justify-center gap-1.5 rounded-lg border-2 px-3 py-2 text-sm font-medium transition-all ${
                  userType === 'legends'
                    ? 'border-[#d4af37] bg-[#d4af37] text-white'
                    : 'border-neutral-300 text-neutral-600'
                }`}
              >
                legend
              </button>
            </div>

            <button 
              onClick={() => setIsLaLigaOpen(!isLaLigaOpen)}
              className="flex items-center gap-1 text-sm font-medium"
            >
              LALIGA <ChevronDown className="h-4 w-4" />
            </button>
            
            {isLaLigaOpen && (
              <div className="flex flex-col gap-1 ml-2 max-h-64 overflow-y-auto">
                {laligaTeams.map((team) => (
                  <Link
                    key={team.slug}
                    href={`/equipo/${team.slug}`}
                    className="flex items-center gap-3 px-2 py-2 hover:bg-neutral-50 rounded"
                    onClick={() => {
                      setIsMenuOpen(false)
                      setIsLaLigaOpen(false)
                    }}
                  >
                    <div className="relative h-6 w-6 flex-shrink-0">
                      <Image
                        src={team.badge}
                        alt={`Escudo ${team.name}`}
                        fill
                        className="object-contain"
                        sizes="24px"
                      />
                    </div>
                    <span className="text-sm">{team.name}</span>
                  </Link>
                ))}
              </div>
            )}
            
            <Link 
              href="/los-mas" 
              className="text-sm font-medium" 
              onClick={() => setIsMenuOpen(false)}
            >
              LOS MÁS
            </Link>
            
            <Link 
              href="/diccionario" 
              className="text-sm font-medium" 
              onClick={() => setIsMenuOpen(false)}
            >
              DICCIONARIO
            </Link>
            
            <Link 
              href="/legends" 
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d4af37] px-4 py-2 text-sm font-medium text-white w-fit" 
              onClick={() => setIsMenuOpen(false)}
            >
              <Crown className="h-4 w-4" />
              LEGEND
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}