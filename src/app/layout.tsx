import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import WhatsAppButton from "@/components/whatsApp/WhatsAppButton";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Hacks4U - IT Solutions & Digital Marketing",
  description: "High-quality digital marketing services and IT solutions to help your business thrive online.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${montserrat.variable} min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-grow">
          {children}
          <WhatsAppButton />
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
