import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Oasis",
  description: "Generating Worlds in Realtime",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="citation_title" content="Oasis: A Universe in a Transformer" />
        <meta name="citation_author" content="Decart" />
        <meta name="citation_author" content="Quevedo, Julian" />
        <meta name="citation_author" content="McIntyre, Quinn" />
        <meta name="citation_author" content="Campbell, Spruce" />
        <meta name="citation_author" content="Wachen, Robert" />
        <meta name="citation_publication_date" content="2024/10/31" />
        <meta name="citation_abstract" content="We're excited to announce Oasis, the first playable, realtime, open-world AI model. It's a video game, but entirely generated by AI. Oasis is the first step in our research towards more complex interactive worlds. Oasis takes in user keyboard input and generates real-time gameplay, including physics, game rules, and graphics. You can move around, jump, pick up items, break blocks, and more. There is no game engine; just a foundation model. We believe fast transformer inference is the missing link to making generative video a reality. Using Decart's inference engine, we show that real-time video is possible. When Etched's transformer ASIC, Sohu, is released, we can run models like Oasis in 4K. Today, we're releasing Oasis's code, the weights of a 500M parameter model you can run locally, and a live playable demo of a larger checkpoint." />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
