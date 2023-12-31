import { Noto_Sans } from "next/font/google";
import "./globals.css";
import "./not-found.css";
import Menu from "./Menu";
import Footer from "./Footer";
import Head from "next/head";

const inter = Noto_Sans({ subsets: ["latin"], weight: "300" });

export const metadata = {
  title: "Grupo Amplus",
  description: "Grupo Amplus",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Menu />
        <div className="main">
          {/* <video autoPlay loop muted>
            <source src="/Inicio 3.1.mp4" type="video/mp4" />
          </video> */}
          <main>{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
