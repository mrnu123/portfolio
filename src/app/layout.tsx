import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.css";
import ImportBsJS from "./importBsJs";
import Navbar from "./components/navigation/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio - ANUCHIT.NET",
  description: "Portfolio of Anuchit Raksaphon, a Software Developer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en">
        <body className={inter.className}>
          <ImportBsJS></ImportBsJS>
          <Navbar></Navbar>
          {children}  
        </body>
      </html>
    </>
  );
}
