import Navbar from "@/components/Navbar";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Photo Feed",
  description: "A Photo Feed app built with next js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header>
          <Navbar />
        </header>

        <main>
          <div className="container my-4 lg:my-8">{children}</div>
        </main>

        <footer>
          <h2>Footer</h2>
        </footer>
      </body>
    </html>
  );
}
