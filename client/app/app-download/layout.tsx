import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Download the SOCIO App",
  description:
    "Download the SOCIO mobile app — browse campus events, register on the go, and get real-time notifications for Christ University events.",
  openGraph: {
    title: "Download the SOCIO App",
    description:
      "Get the SOCIO mobile app to browse and register for campus events on the go.",
    url: "https://socio.christuniversity.in/app-download",
  },
  alternates: {
    canonical: "https://socio.christuniversity.in/app-download",
  },
};

export default function AppDownloadLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
