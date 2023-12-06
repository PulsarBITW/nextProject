import { Providers } from "./components/Providers";
import NavBar from "./components/navbar/navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  openGraph: {
    title: "OG title RootLayout",
    description: "OG description RootLayout",
    images: [
      {
        url: "https://i.postimg.cc/xd5xdw0j/og2.jpg",
        width: 800,
        height: 500,
      },
    ],
  },
};

const status = !false; // for checking global-error.jsxsss

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="wrapper">
            <NavBar />
            <div className="container">{children}</div>
            <footer>React/Redux/Next.js</footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
