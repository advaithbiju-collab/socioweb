import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fests",
  description:
    "Discover college fests at Christ University — tech fests, cultural fests, science expos, management summits, sports meets, and more. Browse and register on SOCIO.",
  openGraph: {
    title: "College Fests | SOCIO",
    description:
      "Discover college fests at Christ University — tech, cultural, science, management, sports and more.",
    url: "https://socio.christuniversity.in/fests",
  },
  alternates: {
    canonical: "https://socio.christuniversity.in/fests",
  },
};

export default function FestsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
