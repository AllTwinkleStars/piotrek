import { MenuContextProvider } from "./context/menu";
import "./globals.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Photo from "./components/main/Photo";
import ContactDetails from "./components/main/ContactDetails";
import SpecializationsMenu from "./components/main/SpecializationsList";
import { Sora, PT_Serif } from "next/font/google";

export const sora = Sora({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sora",
});

export const ptserif = PT_Serif({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-ptserif",
});

export const metadata = {
  title: "Adwokat Piotr Tomasz Woźniak | Kancelaria Adwokacka Piotr Tomasz Woźniak",
  description: "Coś mądrego na temat kancelarii",
};

export default function RootLayout({ children }) {
  return (
    <MenuContextProvider>
      <html lang="pl" className={`${sora.variable} ${ptserif.variable}`}>
        <body className={`border-t-[16px] border-pw-gold overscroll-none`}>
          <div className="max-w-[1366px] mx-auto">
            <div>
              <Header />

              <div className="flex justify-between gap-10 xl:gap-20 px-5 md:px-14 pb-10">
                {/* left column */}
                <div className="hidden md:flex flex-col gap-y-10 shrink-0 w-55">
                  <Photo />
                  <ContactDetails />
                </div>

                {/* main column */}
                <div className="flex flex-col w-full gap-y-10">
                  {children}
                  <div className="lg:hidden">
                    <SpecializationsMenu />
                  </div>
                  <div className="md:hidden text-center">
                    <ContactDetails />
                  </div>
                </div>

                {/* right column */}
                <div className="hidden lg:block shrink-0 w-55">
                  <SpecializationsMenu />
                </div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block mt-8">
            <Footer />
          </div>
        </body>
      </html>
    </MenuContextProvider>
  );
}
