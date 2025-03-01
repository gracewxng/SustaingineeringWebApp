import type { Metadata } from "next";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Monitor sensors and updates",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex h-screen">
          {/* Sidebar */}
          <aside className="w-64 bg-cyan-50 border-r border-gray-300 p-7">
            <div className="mb-10">
              <h1 className="text-2xl font-bold text-gray-500">Dashboard</h1>
            </div>
            <nav className="space-y-4">
            <a href="#" className="flex items-center space-x-3 text-cyan-600 text-xl">
                <Image
                  src="/icons/update.png"
                  alt="Update Icon"
                  width={20}
                  height={20}
                />
                <span>Updates</span>
              </a>
              <a href="#" className="flex items-center space-x-3 text-cyan-600 text-xl">
              <Image
                  src="/icons/sensors.png"
                  alt="Sensor Icon"
                  width={20}
                  height={20}
                />
                <span>Sensors</span>
              </a>
              <a href="#" className="flex items-center space-x-3 text-cyan-600 text-xl">
              <Image
                  src="/icons/account.png"
                  alt="Account Icon"
                  width={20}
                  height={20}
                />
                <span>Account</span>
              </a>
            </nav>
            <div className="mt-auto pt-4">
              <a href="#" className="flex items-center space-x-3 text-gray-500 text-xl~">
              <Image
                  src="/icons/signout.png"
                  alt="Sign Out Icon"
                  width={20}
                  height={20}
                />
                <span>Sign Out</span>
              </a>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 p-8 bg-white overflow-y-auto">{children}</main>
        </div>
      </body>
    </html>
  );
}