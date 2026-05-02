import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "MyHome - Everything About Your Home in One App",
  description:
    "Rent, Buy, Save, Manage Properties, Handle Short-Term Rentals and Track Your Home Journey in one powerful mobile platform. Coming soon on iOS and Android.",
  keywords: [
    "real estate",
    "property management",
    "rent",
    "home",
    "MyHome",
    "property tech",
    "savings",
    "short-term rentals",
    "Nigeria real estate",
  ],
  authors: [{ name: "MyHome" }],
  openGraph: {
    title: "MyHome - Everything About Your Home in One App",
    description:
      "Rent, Buy, Save, Manage Properties, Handle Short-Term Rentals and Track Your Home Journey in one powerful mobile platform.",
    type: "website",
    siteName: "MyHome",
  },
  twitter: {
    card: "summary_large_image",
    title: "MyHome - Everything About Your Home in One App",
    description:
      "Rent, Buy, Save, Manage Properties, Handle Short-Term Rentals and Track Your Home Journey in one powerful mobile platform.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body
        className="min-h-screen antialiased"
        style={{ fontFamily: "var(--font-inter), 'Inter', system-ui, sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
