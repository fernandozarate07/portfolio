import { Work_Sans } from "next/font/google";
import "./globals.css";

const WorkSans = Work_Sans({
  subsets: ["latin"],
  weights: ["300", "500"],
});
export const metadata = {
  title: "Portfolio de Fernando Zárate ",
  description: "Bienvenidos a mi portfolio web",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={WorkSans.className}>{children}</body>
    </html>
  );
}
