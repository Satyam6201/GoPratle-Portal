import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "GoPratle | Hire Event Professionals",
  description: "The seamless way to post requirements for planners, performers, and crew.",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable} scroll-smooth`}>
      <body className="antialiased bg-slate-50 text-slate-900 selection:bg-blue-100 selection:text-blue-900 min-h-screen text-[16px] md:text-[18px]">
        <div className="relative overflow-x-hidden">
          {children}
        </div>
      </body>
    </html>
  );
}