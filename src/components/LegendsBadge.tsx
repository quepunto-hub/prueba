import { Crown } from "lucide-react"

interface LegendsBadgeProps {
  variant?: "default" | "large"
  className?: string
}

export default function LegendsBadge({ variant = "default", className = "" }: LegendsBadgeProps) {
  if (variant === "large") {
    return (
      <div className={`inline-flex items-center gap-3 rounded-full bg-[#d4af37] px-8 py-3 text-white ${className}`}>
        <Crown className="h-6 w-6" />
        <span className="text-lg font-bold">BIENVENIDO LEGEND</span>
      </div>
    )
  }

  return (
    <div className={`inline-flex items-center gap-2 rounded-full bg-[#d4af37] px-4 py-1.5 text-sm font-bold text-white ${className}`}>
      <Crown className="h-4 w-4" />
      <span>LEGEND</span>
    </div>
  )
}