import { MapPin } from "lucide-react";

interface FooterProps {
    currentView: "home" | "courses" | "services" | "contact" | "terms" | "privacy" | "cookies" | "about";
    onNavigate: (view: "home" | "courses" | "services" | "contact" | "terms" | "privacy" | "cookies" | "about") => void;
}

export default function Footer({ currentView, onNavigate }: FooterProps) {
    const handleNavClick = (view: "home" | "courses" | "services" | "contact" | "terms" | "privacy" | "cookies" | "about", sectionId?: string) => {
        if (currentView !== view) {
            onNavigate(view);
            if (sectionId) {
                setTimeout(() => {
                    const element = document.getElementById(sectionId);
                    if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                    }
                }, 150);
            } else {
                window.scrollTo({ top: 0, behavior: "smooth" });
            }
        } else {
            if (sectionId) {
                const element = document.getElementById(sectionId);
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                }
            } else {
                window.scrollTo({ top: 0, behavior: "smooth" });
            }
        }
    };

    return (
        <footer className="bg-[#efeae1] text-[#1a1a1a] border-t border-black/10 w-full pt-16 pb-8 font-body">
            <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop">
                {/* Main Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-black/5">

                    {/* Col 1: Branding & Intro */}
                    <div className="space-y-4">
                        <h3
                            onClick={() => handleNavClick("home")}
                            className="font-headline text-2xl font-bold tracking-widest text-[#1a1a1a] cursor-pointer hover:opacity-80 transition-opacity uppercase"
                        >
                            Monisline
                        </h3>
                        <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed opacity-90 max-w-sm">
                            Arta frumuseții redată prin tehnici de precizie și excelență profesională. O experiență de quiet luxury în centrul Bucureștiului, combinând un salon premium cu o academie de renume.
                        </p>
                        <div className="flex items-center gap-4 pt-2">
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center text-[#1a1a1a] hover:bg-black/10 transition-colors"
                                aria-label="Instagram"
                            >
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                                </svg>
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center text-[#1a1a1a] hover:bg-black/10 transition-colors"
                                aria-label="LinkedIn"
                            >
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Col 2: Navigation */}
                    <div>
                        <h4 className="font-headline text-lg font-semibold mb-4 text-[#1a1a1a] uppercase tracking-wider">Meniu</h4>
                        <ul className="space-y-2.5 text-xs md:text-sm">
                            <li>
                                <button
                                    onClick={() => handleNavClick("home")}
                                    className="text-on-surface-variant hover:text-black transition-colors cursor-pointer font-medium"
                                >
                                    Acasă
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => handleNavClick("services")}
                                    className="text-on-surface-variant hover:text-black transition-colors cursor-pointer font-medium"
                                >
                                    Servicii
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => handleNavClick("courses")}
                                    className="text-on-surface-variant hover:text-black transition-colors cursor-pointer font-medium"
                                >
                                    Cursuri
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => handleNavClick("about")}
                                    className="text-on-surface-variant hover:text-black transition-colors cursor-pointer font-medium"
                                >
                                    Despre Noi
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => handleNavClick("contact")}
                                    className="text-on-surface-variant hover:text-black transition-colors cursor-pointer font-medium"
                                >
                                    Contact
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* Col 3: Legal Information (Firm Details) */}
                    <div>
                        <h4 className="font-headline text-lg font-semibold mb-4 text-[#1a1a1a] uppercase tracking-wider">Informații Legale</h4>
                        <div className="space-y-3 text-xs md:text-sm text-on-surface-variant opacity-90 leading-relaxed">
                            <p className="font-semibold text-[#1a1a1a]">MONISLINE BEAUTY ACADEMY S.R.L.</p>
                            <p><span className="font-medium text-[#1a1a1a]">C.U.I.:</span> RO 48192038</p>
                            <p><span className="font-medium text-[#1a1a1a]">Reg. Comerțului:</span> J40/12345/2026</p>
                            <p className="flex items-start gap-1.5">
                                <MapPin size={14} className="mt-0.5 shrink-0 text-[#1a1a1a]" />
                                <span>Str. General Andrei Popovici, Nr. 10, Sector 1, București</span>
                            </p>
                        </div>
                    </div>

                    {/* Col 4: Useful Links & Consumer Protection */}
                    <div>
                        <h4 className="font-headline text-lg font-semibold mb-4 text-[#1a1a1a] uppercase tracking-wider">Link-uri Utile</h4>
                        <ul className="space-y-2.5 text-xs md:text-sm">
                            <li>
                                <a
                                    href="https://anpc.ro/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-on-surface-variant hover:text-black transition-colors font-medium"
                                >
                                    Protecția Consumatorilor - ANPC
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://ec.europa.eu/consumers/odr"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-on-surface-variant hover:text-black transition-colors font-medium"
                                >
                                    Soluționarea Online a Litigiilor - SOL
                                </a>
                            </li>
                            <li>
                                <button
                                    onClick={() => handleNavClick("privacy")}
                                    className="text-on-surface-variant hover:text-black transition-colors font-medium text-left cursor-pointer"
                                >
                                    Politică de Confidențialitate (GDPR)
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => handleNavClick("cookies")}
                                    className="text-on-surface-variant hover:text-black transition-colors font-medium text-left cursor-pointer"
                                >
                                    Politică de Cookies
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => handleNavClick("terms")}
                                    className="text-on-surface-variant hover:text-black transition-colors font-medium text-left cursor-pointer"
                                >
                                    Termeni și Condiții
                                </button>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Section */}
                <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-on-surface-variant opacity-80">
                    <p>© {new Date().getFullYear()} MONISLINE BEAUTY ACADEMY &amp; SALON. TOATE DREPTURILE REZERVATE.</p>
                    <p className="flex gap-4">
                        <span className="hover:text-black cursor-pointer transition-colors" onClick={() => handleNavClick("contact")}>Locație Salon București</span>
                        <span>•</span>
                        <a href="tel:0723347089" className="hover:text-black transition-colors">Sună pentru Rezervare: 0723 347 089</a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
