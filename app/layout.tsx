import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import PlayerBar from "@/components/PlayerBar";
import BottomNav from "@/components/BottomNav";
import AudioEngine from "@/components/AudioEngine";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mubba's Music",
  description: "Your personal music streaming app",
  icons: {
    icon: "https://res.cloudinary.com/dnudhbjle/image/upload/v1781090654/mubbas-logo_grhyr4.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-black text-white overflow-hidden h-screen`}>
        <div className="flex h-screen flex-col">
          <div className="flex flex-1 overflow-hidden">
            {/* Sidebar: hidden on mobile, shown on md+ */}
            <Sidebar />
            {/* Main content: extra bottom padding on mobile for player + bottom nav */}
            <main className="flex-1 overflow-y-auto bg-gradient-to-b from-zinc-900 to-black pb-32 md:pb-0">
              {children}
            </main>
          </div>
          {/* Player bar: compact on mobile, full on desktop */}
          <PlayerBar />
        </div>
        {/* Bottom tab nav: mobile only */}
        <BottomNav />
        <AudioEngine />
      </body>
    </html>
  );
}
