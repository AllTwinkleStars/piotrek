import "./globals.css";
import Header from "./components/header/Completed-header";
import Footer from "./components/footer/Footer";
import Photo from './components/main/Photo'
import ContactDetails from './components/main/Contact-details'
import SpecializationsMenu from './components/main/Specializations-menu'
import { Poppins } from "next/font/google";

export const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata = {
  title: "Website project in NextJS + TailwindCSS",
  description: "Created by Jasiek",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl" className={`${poppins.variable}`}>
      <body className="bg-gradient-to-b from-maastricht-blue to-midnight-green px-20 py-10">
        <div className="max-w-piotrek-max mx-auto">
          <div className="h-screen bg-white py-10 px-16 text-rich-black">
            <Header />
            <div className="flex justify-between border gap-20 border-blue-600">
              <div>
                <Photo />
                <ContactDetails />
              </div>
              <div className="grow bg-yellow-300">
                {children}
              </div>
              <div>
                <SpecializationsMenu />
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
