import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About SOCIO",
  description:
    "Learn about SOCIO — the campus event management platform built for Christ University. Discover our features, mission, and how we simplify event registration and management.",
  openGraph: {
    title: "About SOCIO – Campus Event Management Platform",
    description:
      "Learn about SOCIO, our mission, our features, and how we simplify campus event management.",
    url: "https://socio.christuniversity.in/about",
  },
  alternates: {
    canonical: "https://socio.christuniversity.in/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
