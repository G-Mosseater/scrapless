import "./globals.css";
import HomePageLayout from "@/components/homepageLayout";

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
      <body >
        <main className="min-h-screen flex flex-col items-center w-full">
          <div className="flex flex-col gap-8 w-full max-w-3xl mx-auto">
            <HomePageLayout>{children}</HomePageLayout>
          </div>
        </main>
      </body>
    </html>
  );
}
