import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clubs & Centres",
  description:
    "Explore research centres, academic clubs, cultural societies, sports teams, and student organisations at Christ University. Find your community on SOCIO.",
  openGraph: {
    title: "Clubs & Centres | SOCIO",
    description:
      "Explore clubs, research centres, and student organisations at Christ University.",
    url: "https://socio.christuniversity.in/clubs",
  },
  alternates: {
    canonical: "https://socio.christuniversity.in/clubs",
  },
};

export default function ClubsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
