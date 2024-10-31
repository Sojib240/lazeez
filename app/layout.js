import { Sofia_Sans } from "next/font/google";
import "./globals.css";

const sofia = Sofia_Sans({ subsets: ["latin"], variable: "--sofia" });

export const metadata = {
  title: "Lazeez Arabic Restaurant and Grill",
  description: "arabic cuisine",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={sofia.className}>{children}</body>
    </html>
  );
}
