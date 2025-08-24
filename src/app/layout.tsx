import type { Metadata } from "next";
import "./globals.css";



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
      <body className="min-h-screen w-full pb-50">
          {children}
      </body>
    </html>
  );
}
