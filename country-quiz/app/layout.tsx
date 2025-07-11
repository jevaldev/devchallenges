import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";
import { QuizProvider } from "./Context/QuizContext";

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-be-vietnam-pro",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={beVietnamPro.className}>
      <body className="antialiased flex min-h-svh flex-col items-center justify-center py-4">
        <QuizProvider>{children}</QuizProvider>
        <footer>
          Coded by{" "}
          <a className="underline" href="https://github.com/jevaldev">
            Jesús Valdés Viramontes
          </a>{" "}
          | Challenge by {""}
          <a
            className="underline"
            href="https://www.devchallenges.io?ref=challenge"
            target="_blank"
          >
            devChallenges.io
          </a>
          .
        </footer>
      </body>
    </html>
  );
}
