import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import CartFloater from "@/components/frontend/CartFloates";
export const metadata: Metadata = {
  title: "Angolo 41",
  description: "L'ha fatta lo zaga",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className="min-h-screen w-full">
        <CartProvider>
          {children}
          <CartFloater />
        </CartProvider>
      </body>
    </html>
  );
}
