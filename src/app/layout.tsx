import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Hackovina",
  description: "Hackovina is an entry-level hackathon for high school students.",
  icons: ["https://assets.hackclub.com/icon-rounded.svg"]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
