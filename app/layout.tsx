import "./globals.css";

import { Footer, NavBar } from "@components";

export const metadata = {
  title: "Drive Flex",
  description: "Effortless Travel Begins Here: Trust Our Exceptional Car Rental\
  Service for a Seamless Journey",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='relative'>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
