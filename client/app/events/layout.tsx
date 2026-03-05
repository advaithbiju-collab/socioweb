import { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Events",
  description:
    "Explore all campus events at Christ University — academic, cultural, sports, literary, arts, and innovation events. Filter, search, and register on SOCIO.",
  openGraph: {
    title: "All Campus Events | SOCIO",
    description:
      "Explore all campus events at Christ University — academic, cultural, sports, literary, arts, and innovation.",
    url: "https://socio.christuniversity.in/events",
  },
  alternates: {
    canonical: "https://socio.christuniversity.in/events",
  },
};

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
