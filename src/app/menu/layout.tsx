

import type { Metadata } from "next";
import { CartProvider } from "@/context/CartContext";
import CartFloater from "@/components/menu/CartFloater";
import { ToastContainer } from "react-toastify";


export const metadata: Metadata = {
  title: "Menù",
  description: "L'ha fatta lo zaga",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="it">
      <body className="min-h-screen w-full pb-50">

        <CartProvider>
          <ToastContainer />
          {children}
          <CartFloater />
        </CartProvider>

      </body>
    </html>
  );
}
