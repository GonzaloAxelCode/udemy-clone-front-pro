"use client";
import type { Metadata } from "next";

import "../shared/styles/carbon.scss";

import Navbar from "@/shared/components/Navbar/Navbar";
import "./globals.css";
import Providers from "./providers";
export const metadata: Metadata = {
  title: "Clean Architecture",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <Providers>
        <body>
          <Navbar />
          <div style={{ paddingTop: "70px" }}>
            <section>{children}</section>
          </div>
        </body>
      </Providers>
    </html>
  );
}
