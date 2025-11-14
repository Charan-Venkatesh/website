import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Charan Venkatesh | Applied AI Architect & Data Governance Specialist",
  description: "Professional portfolio showcasing expertise in Applied Artificial Intelligence, Business Intelligence, and Data Governance. Specialized in building high-integrity, regulatory-compliant AI systems.",
  keywords: ["Applied AI", "Data Governance", "Business Intelligence", "Machine Learning", "HIPAA", "GDPR", "Data Science", "AI Architect"],
  authors: [{ name: "Charan Venkatesh" }],
  openGraph: {
    title: "Charan Venkatesh | Applied AI Architect",
    description: "Building High-Integrity AI Systems for Regulatory-Compliant Environments",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
