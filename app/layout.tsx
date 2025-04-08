import NavBar from "@/components/nav-bar";
import TopNavBar from "@/components/top-navigation-menu";
import { NavigationMenu } from "@/components/ui/navigation-menu";
import "./globals.css";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Scrapless",
  description: "Revolutionizing food waste in Gran Canaria",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <main className="min-h-screen flex flex-col">

          {/* Main content section */}
          <div className="flex flex-col w-full h-full">
            {children} {/* El mapa se inyectará aquí */}
          </div>

          {/* Footer navigation, solo visible en pantallas pequeñas */}
          <div className="fixed bottom-0 left-0 w-full lg:hidden">
            <NavBar />
          </div>
        </main>
      </body>
    </html>
  );
}
