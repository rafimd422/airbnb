import Navbar from "@/components/navbar/Navbar";
import { Nunito } from "next/font/google";

import Footer from "@/components/Footer";
import '@/app/globals.css'
export const metadata = {
  title: "Airbnb Clone",
  description: "Airbnb Clone",
  icons: "https://www.seekpng.com/png/full/957-9571167_airbnb-png.png",
};

const font = Nunito({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        <div className="pb-20 pt-28">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
