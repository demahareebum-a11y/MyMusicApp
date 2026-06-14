import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import PlayerBar from "@/components/PlayerBar";
import AudioEngine from "@/components/AudioEngine";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mubba's Music",
  description: "Your personal music streaming app",
  icons: {
    icon: "https://res.cloudinary.com/dnudhbjle/image/upload/v1781090654/mubbas-logo_grhyr4.png",
  },
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
            <Sidebar />
            <main className="flex-1 overflow-y-auto bg-gradient-to-b from-zinc-900 to-black">
              {children}
            </main>
          </div>
          <PlayerBar />
        </div>
        <AudioEngine />
      </body>
    </html>
  );
}
