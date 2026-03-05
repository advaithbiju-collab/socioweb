import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meet the Team",
  description:
    "Meet the founders, developers, and faculty behind SOCIO — the team of Christ University students and mentors building the campus event management platform.",
  openGraph: {
    title: "Meet the Team | SOCIO",
    description:
      "The founders, developers, and mentors behind SOCIO.",
    url: "https://socio.christuniversity.in/about/team",
  },
  alternates: {
    canonical: "https://socio.christuniversity.in/about/team",
  },
};

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
