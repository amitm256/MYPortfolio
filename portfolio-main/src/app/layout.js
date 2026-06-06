import { Geist, Geist_Mono, Syne } from "next/font/google";
import "@/styles/globals.scss";
import GlobalLayout from "@/component/UI/GlobalLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const logo = Syne({weight: "700", subsets: ["latin"], variable: "--font-jetbrains"});


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "AMIT - Designer, Developer, and Defender of the Web",
  description: "AMIT is a full stack developer with expertise in building scalable web applications. With a passion for coding and problem-solving, AMIT has a strong background in both frontend and backend development, making him a versatile asset in any development team.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${logo.variable} h-full antialiased`}>
      <GlobalLayout>
        {children}
      </GlobalLayout>
    </html>
  );
}
