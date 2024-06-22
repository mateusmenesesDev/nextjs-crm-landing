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
    <html lang="en">
      <body
        className={`${inter.variable} font-inter text-lg text-base-500 lg:text-xl`}
      >
        {children}
      </body>
    </html>
  );
}
