import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support & Help Center",
  description:
    "Need help with SOCIO? Browse support articles on accounts, event registration, technical issues, organiser tools, and the mobile app.",
  openGraph: {
    title: "Support & Help Center | SOCIO",
    description:
      "Browse support articles for SOCIO — accounts, event registration, technical issues, and more.",
    url: "https://socio.christuniversity.in/support",
  },
  alternates: {
    canonical: "https://socio.christuniversity.in/support",
  },
};

export default function SupportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
