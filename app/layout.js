import Head from "next/head";
import ContactFooter from "./components/ContactFooter";
import NavBar from "./components/Navbar";
import "./globals.css";
import { Wix_Madefor_Text } from "next/font/google";
import Script from "next/script";

const wixMadeforText = Wix_Madefor_Text({
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
});

export const metadata = {
  title: "АНО ОМЦ",
  description:
    "Автономная некоммерческая организация поддержки предпринимательства",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={wixMadeforText.className}>
        <NavBar />
        <main>{children}</main>
        <ContactFooter />
      </body>
    </html>
  );
}
