import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "See how SOCIO powers college fests, department events, workshops, and more. End-to-end event management solutions for universities and student organisations.",
  openGraph: {
    title: "Solutions | SOCIO",
    description:
      "End-to-end event management solutions for college fests, department events, and student organisations.",
    url: "https://socio.christuniversity.in/solutions",
  },
  alternates: {
    canonical: "https://socio.christuniversity.in/solutions",
  },
};

export default function SolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
