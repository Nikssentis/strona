import type { Metadata } from "next";
import "./globals.css";
import ClientBody from "./ClientBody";

export const metadata: Metadata = {
  title: "PIKTRANS - Professional Passenger Transport Across Europe",
  description: "Travel safely and comfortably across Europe with PIKTRANS. Professional passenger transport for groups of 4-63 travelers. Modern fleet, experienced drivers, competitive prices.",
  keywords: "bus transport, passenger transport, Europe travel, coach hire, airport transfer, corporate travel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClientBody>{children}</ClientBody>
    </html>
  );
}
