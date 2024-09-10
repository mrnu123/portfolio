import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.css";
import ImportBsJS from "./importBsJs";
import Navbar from "./components/navigation/navbar";
import { getLocale, getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio - ANUCHIT.NET",
  description: "Portfolio of Anuchit Raksaphon, a Software Developer.",
  openGraph: {
    title: "Portfolio - ANUCHIT.NET",
    description: "Portfolio of Anuchit Raksaphon, a Software Developer.",
    images: [{ url: 'https://www.anuchit.net/home_intro.JPG', alt: 'profile image' },]
  }
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const local = await getLocale();
  const messages = await getMessages();
  return (
    <>
      <html lang="en">
        <body className={inter.className}>
          <NextIntlClientProvider messages={messages}>
            <ImportBsJS />
            <Navbar></Navbar>
            {children}
          </NextIntlClientProvider>

        </body>
      </html>
    </>
  );
}
