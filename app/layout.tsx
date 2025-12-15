import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Charan Venkatesh | Applied AI Architect",
  description: "Building High-Integrity AI Systems with expertise in Applied AI, Business Intelligence, and Data Governance in regulatory environments.",
  keywords: ["Applied AI", "Data Science", "Business Intelligence", "Data Governance", "HIPAA", "GDPR", "Machine Learning"],
  authors: [{ name: "Charan Venkatesh" }],
  openGraph: {
    title: "Charan Venkatesh | Applied AI Architect",
    description: "Building High-Integrity AI Systems with expertise in Applied AI, Business Intelligence, and Data Governance",
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
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
