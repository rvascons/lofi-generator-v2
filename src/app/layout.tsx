import { createClient, repositoryName } from "@/prismicio";
import { PrismicPreview } from "@prismicio/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import clsx from "clsx";
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";

const urbanist = Urbanist({ subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const settings = await client.getSingle("homepage");

  return {
    title: settings.data.meta_title,
    description: settings.data.meta_description,
    // openGraph: {
    //   images: [settings.data.og_image?.url || ""],
    // },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="background-gradient">
      <body className={clsx(urbanist.className, "relative min-h-screen")}>
        {children}
        <SpeedInsights />
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}
