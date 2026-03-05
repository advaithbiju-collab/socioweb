import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing & Plans",
  description:
    "Choose the right SOCIO plan for your university events — Free, Basic, or Pro. Transparent pricing for event organisers with per-fest and annual billing options.",
  openGraph: {
    title: "Pricing & Plans | SOCIO",
    description:
      "Transparent pricing for university event management — Free, Basic, and Pro plans.",
    url: "https://socio.christuniversity.in/pricing",
  },
  alternates: {
    canonical: "https://socio.christuniversity.in/pricing",
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
