import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read the SOCIO Privacy Policy for Christ University. Learn how we collect, use, and protect your personal data on our campus event management platform.",
  openGraph: {
    title: "Privacy Policy | SOCIO",
    description:
      "Learn how SOCIO collects, uses, and protects your personal data.",
    url: "https://socio.christuniversity.in/privacy",
  },
  alternates: {
    canonical: "https://socio.christuniversity.in/privacy",
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
