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
  title: {
    default: 'Adwokat Piotr Tomasz Woźniak | Kancelaria Adwokacka Piotr Tomasz Woźniak',
    template: '%s | Kancelaria Adwokacka Piotr Tomasz Woźniak',
  },
  description: 'Prawo cywilne, prawo rodzine, odszkodowania, księgi wieczyste i hipoteka, postępowania egzekucyjne, prawo bankowe i spółdzielcze',
};


export default function RootLayout({ children }) {
    return (
        <MenuContextProvider>
            <html lang="pl" className={`${sora.variable} ${ptserif.variable}`}>
                <body className={`border-t-[16px] border-pw-gold overscroll-none pt-4 lg:pt-0`}>
                    <div className="max-w-[1366px] mx-auto">
                            <Header />

                            <div className="flex justify-between gap-10 px-5 pb-10 xl:gap-20 md:px-14">
                                {/* left column */}
                                <div className="flex-col hidden md:flex gap-y-10 shrink-0 w-55">
                                    <Photo />
                                    <ContactDetails />
                                </div>

                                {/* main column */}
                                <main className="flex flex-col w-full gap-y-12">
                                    {children}
                                    <div className="lg:hidden">
                                        <SpecializationsMenu />
                                    </div>
                                    <div className="text-left md:hidden shrink">
                                        <ContactDetails />
                                    </div>
                                </main>

                                {/* right column */}
                                <div className="hidden lg:block shrink-0 w-55">
                                    <SpecializationsMenu />
                                </div>
                            </div>
                    </div>
                    <footer className="hidden mt-8 lg:block">
                        <Footer />
                    </footer>
                </body>
            </html>
        </MenuContextProvider>
    );
}
