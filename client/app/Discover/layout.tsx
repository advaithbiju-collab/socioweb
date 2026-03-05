import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Discover Events",
  description:
    "Browse trending events, upcoming fests, clubs, and workshops happening across Christ University campuses. Find something that excites you on SOCIO.",
  openGraph: {
    title: "Discover Campus Events | SOCIO",
    description:
      "Browse trending events, upcoming fests, clubs, and workshops happening across Christ University campuses.",
    url: "https://socio.christuniversity.in/Discover",
  },
  alternates: {
    canonical: "https://socio.christuniversity.in/Discover",
  },
};

export default function DiscoverLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
