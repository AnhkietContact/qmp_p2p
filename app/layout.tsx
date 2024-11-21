"use client";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import { useEffect } from "react";
import { innerTheme } from "../src/theme/theme";
import { ThemeProvider } from "@mui/material/styles";
import "../styles/globals.css";
import "aos/dist/aos.css";
import AOS from "aos";
import Toaster from "./ToastContainer";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });

    return () => {
      AOS.refresh();
    };
  }, []);

  return (
    <html lang="en">
      <head>
        <title>QMP P2P</title>
        <link rel="shortcut icon" href="/images/LogoNav.svg" type="image/png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Orbitron:wght@400..900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {/* Layout UI */}
        <main className="flex flex-col min-h-screen ">
          <ThemeProvider theme={innerTheme}>
            <Toaster />
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </ThemeProvider>
        </main>
      </body>
    </html>
  );
}
