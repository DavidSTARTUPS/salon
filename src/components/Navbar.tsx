import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

interface NavbarProps {
    currentView: "home" | "courses" | "services" | "contact" | "terms" | "privacy" | "cookies" | "about";
    onNavigate: (view: "home" | "courses" | "services" | "contact" | "terms" | "privacy" | "cookies" | "about") => void;
}

export default function Navbar({ currentView, onNavigate }: NavbarProps) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleNavClick = (view: "home" | "courses" | "services" | "contact" | "terms" | "privacy" | "cookies" | "about", sectionId?: string) => {
        setIsMobileMenuOpen(false);
        if (currentView !== view) {
            onNavigate(view);
            if (sectionId) {
                setTimeout(() => {
                    const element = document.getElementById(sectionId);
                    if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                    }
                }, 100);
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
        <nav className="sticky top-0 z-50 bg-[#f4efe8]/95 backdrop-blur-md border-b border-black w-full text-[#1a1a1a]">
            <div className="flex justify-between items-center w-full px-6 md:px-margin-desktop py-4 max-w-container-max mx-auto">
                {/* Left Spacer to balance layout and keep links centered */}
                <div className="w-[120px] hidden md:block"></div>

                {/* Center Navigation Links (Desktop) */}
                <div className="hidden md:flex items-center gap-8 text-xs tracking-widest uppercase font-medium">
                    <button
                        onClick={() => handleNavClick("home")}
                        className={`cursor-pointer transition-opacity ${
                            currentView === "home"
                                ? "opacity-100 font-semibold border-b border-primary pb-0.5"
                                : "hover:opacity-70 opacity-80"
                        }`}
                    >
                        Acasă
                    </button>
                    <button
                        onClick={() => handleNavClick("services")}
                        className={`cursor-pointer transition-opacity ${
                            currentView === "services"
                                ? "opacity-100 font-semibold border-b border-primary pb-0.5"
                                : "hover:opacity-70 opacity-80"
                        }`}
                    >
                        Servicii
                    </button>
                    <button
                        onClick={() => handleNavClick("courses")}
                        className={`cursor-pointer transition-opacity ${
                            currentView === "courses"
                                ? "opacity-100 font-semibold border-b border-primary pb-0.5"
                                : "hover:opacity-70 opacity-80"
                        }`}
                    >
                        Cursuri
                    </button>
                    <button
                        onClick={() => handleNavClick("about")}
                        className={`cursor-pointer transition-opacity ${
                            currentView === "about"
                                ? "opacity-100 font-semibold border-b border-primary pb-0.5"
                                : "hover:opacity-70 opacity-80"
                        }`}
                    >
                        Despre Noi
                    </button>
                    <button
                        onClick={() => handleNavClick("contact")}
                        className={`cursor-pointer transition-opacity ${
                            currentView === "contact"
                                ? "opacity-100 font-semibold border-b border-primary pb-0.5"
                                : "hover:opacity-70 opacity-80"
                        }`}
                    >
                        Contact
                    </button>
                    <button
                        onClick={() => handleNavClick("home", "contact")}
                        className="hover:opacity-70 opacity-80 cursor-pointer"
                    >
                        Locație
                    </button>
                </div>

                {/* Right Button (Desktop Only) */}
                <div className="hidden md:flex items-center gap-4">
                    <button
                        onClick={() => handleNavClick("courses", "registration")}
                        className="border border-[#3b281f] text-[#3b281f] px-5 py-2 text-xs tracking-widest uppercase font-semibold hover:bg-[#3b281f]/5 transition-all duration-300 cursor-pointer"
                    >
                        Înscrie-te
                    </button>
                    <button
                        onClick={() => window.dispatchEvent(new Event("open-booking-modal"))}
                        className="bg-[#3b281f] text-white px-5 py-2.5 text-xs tracking-widest uppercase font-semibold hover:bg-[#2a1c15] transition-all duration-300 cursor-pointer"
                    >
                        Programează-te
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full bg-[#f4efe8] shadow-lg flex flex-col items-center py-8 gap-6 md:hidden text-sm tracking-widest uppercase font-medium border-t border-black"
                    >
                        <button
                            onClick={() => handleNavClick("home")}
                            className={`cursor-pointer ${currentView === "home" ? "font-semibold text-primary" : "text-on-surface-variant"}`}
                        >
                            Acasă
                        </button>
                        <button
                            onClick={() => handleNavClick("services")}
                            className={`cursor-pointer ${currentView === "services" ? "font-semibold text-primary" : "text-on-surface-variant"}`}
                        >
                            Servicii
                        </button>
                        <button
                            onClick={() => handleNavClick("courses")}
                            className={`cursor-pointer ${currentView === "courses" ? "font-semibold text-primary" : "text-on-surface-variant"}`}
                        >
                            Cursuri
                        </button>
                        <button
                            onClick={() => handleNavClick("about")}
                            className={`cursor-pointer ${currentView === "about" ? "font-semibold text-primary" : "text-on-surface-variant"}`}
                        >
                            Despre Noi
                        </button>
                        <button
                            onClick={() => handleNavClick("contact")}
                            className={`cursor-pointer ${currentView === "contact" ? "font-semibold text-primary" : "text-on-surface-variant"}`}
                        >
                            Contact
                        </button>
                        <button
                            onClick={() => handleNavClick("home", "contact")}
                            className="text-on-surface-variant cursor-pointer"
                        >
                            Locație
                        </button>
                        <button
                            onClick={() => {
                                setIsMobileMenuOpen(false);
                                window.dispatchEvent(new Event("open-booking-modal"));
                            }}
                            className="w-11/12 bg-[#3b281f] text-white py-3 text-xs tracking-widest uppercase font-semibold hover:bg-[#2a1c15] transition-colors rounded text-center cursor-pointer mt-2"
                        >
                            Programează-te Acum
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
