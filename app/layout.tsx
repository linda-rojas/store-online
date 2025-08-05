import type { Metadata } from "next";
import { montserrat } from "./UI/fonts";
import "./UI/globals.css";


export const metadata: Metadata = {
  title: "Autocaucho",
  description: "página web de autocaucho",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} antialiased `}
      >
        {children}
      </body>
    </html>
  );
}
