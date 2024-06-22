import { inter } from "~/assets/fonts";
import "~/styles/globals.css";

export const metadata = {
  title: "Attio CRM",
  description: "Attio CRM is a customer relationship management system.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} font-inter`}>
      <body>{children}</body>
    </html>
  );
}
