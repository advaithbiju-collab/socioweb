import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "Read the SOCIO Cookie Policy. Understand what cookies we use, why, and how you can manage them on our campus event management platform.",
  openGraph: {
    title: "Cookie Policy | SOCIO",
    description:
      "Understand what cookies SOCIO uses and how to manage them.",
    url: "https://socio.christuniversity.in/cookies",
  },
  alternates: {
    canonical: "https://socio.christuniversity.in/cookies",
  },
};

export default function CookiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
