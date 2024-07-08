import { inter } from "~/assets/fonts";
import Header from "~/components/blocks/Header";
import Container from "~/components/ui/Container";
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
        translate="no"
        className={`${inter.variable} bg-base-100 font-inter text-lg text-base-500 lg:text-xl`}
      >
        <Container>
          <Header />
        </Container>
        {children}
      </body>
    </html>
  );
}
