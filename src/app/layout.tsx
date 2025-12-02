import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from "@/contexts/AuthContext";
import AgeVerification from "@/components/AgeVerification";

export const metadata: Metadata = {
  title: "The Expected - Análisis Futbolístico Avanzado",
  description: "Análisis de fútbol basado en datos y métricas avanzadas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased font-sans">
        <AuthProvider>
          {children}
          <AgeVerification />
        </AuthProvider>
      </body>
    </html>
  );
}