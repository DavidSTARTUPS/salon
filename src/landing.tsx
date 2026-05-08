import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Landing() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const fadeIn: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    const staggerContainer: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
        },
    };

    return (
        <div className="min-h-screen bg-[#f4efe8] text-[#1a1a1a] selection:bg-[#3b281f] selection:text-white" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            {/* Navigation */}
            <nav className="px-6 py-6 md:py-8 flex justify-between items-center relative z-50">
                <div className="hidden md:flex gap-8 text-xs tracking-widest uppercase font-medium">
                    <a className="hover:opacity-70 transition-opacity" href="#acasa">Acasă</a>
                    <a className="hover:opacity-70 transition-opacity" href="#servicii">Servicii</a>
                    <a className="hover:opacity-70 transition-opacity" href="#despre-noi">Despre Noi</a>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden z-50 p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                <div className="hidden md:flex gap-8 text-xs tracking-widest uppercase font-medium">
                    <a className="hover:opacity-70 transition-opacity" href="#contact">Contact</a>
                    <a className="hover:opacity-70 transition-opacity" href="#contact">Locație</a>
                </div>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="absolute top-full left-0 w-full bg-[#f4efe8] shadow-lg flex flex-col items-center py-8 gap-6 md:hidden text-sm tracking-widest uppercase font-medium border-t border-[#3b281f]/10"
                        >
                            <a className="hover:opacity-70 transition-opacity" href="#acasa" onClick={() => setIsMobileMenuOpen(false)}>Acasă</a>
                            <a className="hover:opacity-70 transition-opacity" href="#servicii" onClick={() => setIsMobileMenuOpen(false)}>Servicii</a>
                            <a className="hover:opacity-70 transition-opacity" href="#despre-noi" onClick={() => setIsMobileMenuOpen(false)}>Despre Noi</a>
                            <a className="hover:opacity-70 transition-opacity" href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
                            <a className="hover:opacity-70 transition-opacity" href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Locație</a>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>

            {/* Logo Section */}
            <header id="acasa" className="text-center py-4 mb-4 md:mb-8 px-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-[clamp(2.5rem,8vw,8rem)] leading-none tracking-wider font-semibold uppercase"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                    MonisLine
                </motion.div>
            </header>

            {/* Hero Section */}
            <section className="relative w-full h-[70vh] md:h-[80vh] min-h-[500px] md:min-h-[600px] flex flex-col md:flex-row group overflow-hidden bg-[#f4efe8]">
                {/* Left Image */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="w-full h-1/2 md:w-1/2 md:h-full bg-cover bg-center grayscale opacity-55 transition-all duration-700"
                    style={{ backgroundImage: "url('/c3576a8a-78f3-4fd6-b46c-abf698b8ab1d (1).png')" }}
                />
                {/* Right Image */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="w-full h-1/2 md:w-1/2 md:h-full bg-cover bg-center grayscale opacity-55 transition-all duration-700"
                    style={{ backgroundImage: "url('/c94eec4b-1e14-47ab-b22e-42ff4e8663ee (1).png')" }}
                />

                {/* Hero Content Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 md:p-6 bg-transparent">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="max-w-3xl mx-4 text-black"
                    >
                        <p className="text-xs md:text-sm mb-4 md:mb-2 font-medium tracking-[0.1em] uppercase opacity-90 -translate-x-2 md:-translate-x-2">
                            The Art of Hair [ Redefined ]
                        </p>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 md:mb-8 tracking-tight leading-[1.1]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                            SERVICII DE<br />ÎNFRUMUSEȚARE ÎN<br />BUCUREȘTI
                        </h1>
                        <motion.a
                            whileHover={{ scale: 1.02, backgroundColor: "#2a1c15" }}
                            whileTap={{ scale: 0.98 }}
                            className="inline-flex items-center gap-2 bg-[#3b281f] text-white text-xs tracking-[0.15em] uppercase px-10 py-4 transition-colors"
                            href="#"
                        >
                            PROGRAMEAZĂ-TE ACUM
                        </motion.a>
                    </motion.div>
                </div>
            </section>

            {/* About Us Section */}
            <motion.section
                id="despre-noi"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="max-w-7xl mx-auto px-6 py-20 md:py-32 grid md:grid-cols-2 gap-8 md:gap-16 items-start"
            >
                <motion.div variants={fadeIn}>
                    <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tight" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                        Despre Noi
                    </h2>
                </motion.div>
                <motion.div variants={fadeIn} className="space-y-6 md:space-y-8">
                    <p className="text-base md:text-lg leading-relaxed text-gray-800">
                        Bine ai venit la MonisLine, destinația ta supremă pentru servicii de înfrumusețare la superlativ. Situat într-o zonă accesibilă din București, salonul nostru este locul unde pasiunea pentru detalii întâlnește tehnicile moderne.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed text-gray-600">
                        Echipa noastră de top – incluzând-o pe Flori, expertă în transformările părului, și Vera, un adevărat artist al manichiurii – este aici să îți ofere o experiență absolută de răsfăț. Descoperă diferența pe care o face o echipă dedicată frumuseții tale.
                    </p>
                    <a className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest border-b border-[#3b281f] pb-1 text-[#3b281f] hover:text-gray-500 hover:border-gray-500 transition-colors" href="#">
                        Află Mai Multe
                        <ArrowRight size={14} />
                    </a>
                </motion.div>
            </motion.section>

            {/* Services Section */}
            <section id="servicii" className="max-w-screen-2xl mx-auto px-6 pb-20 md:pb-32">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-10 md:mb-16 text-center md:text-left"
                >
                    <p className="text-xs md:text-sm mb-2 font-medium tracking-widest text-[#3b281f] uppercase">[ Descoperă ]</p>
                    <h2 className="text-4xl md:text-6xl font-bold uppercase" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                        Serviciile Noastre
                    </h2>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={staggerContainer}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 mb-16"
                >
                    {[
                        {
                            id: "01",
                            title: "Haircuts & Styling",
                            desc: "Tăieturi de precizie și coafuri adaptate stilului tău personal. Lasă-te pe mâna stiliștilor noștri pentru un look impecabil.",
                            img: "https://lh3.googleusercontent.com/aida/ADBb0uiNmudmqOEtNNuWL6R49Gyva9NOF8OI12FnSb3-8CeHeXcZyjdJEt61nl1z_AXs4HM4oGGWVkMe1FUq9B1VEYCZDiYwfmd17nTHkMwyiuCB1R3BlZ32GQpdWsO0800jdh89NFrmIlfUDCWy1AG5qPWns-8SMYD-_a22b16mbQ9y7eFjMu3FrNmsV3SL7KPqlerCgTv30v0KD5H9wcDbLXTSal1y4pUZ9uf9uEJ7EH-DpjCeowmW9NNh1JqiFDhbSDRy_mmogLRfzPA"
                        },
                        {
                            id: "02",
                            title: "Culoare & Balayage",
                            desc: "Magie pură pentru părul tău. Folosim tehnici avansate și culori vibrante pentru a crea nuanțe naturale și pline de viață.",
                            img: "https://lh3.googleusercontent.com/aida/ADBb0uijErSl9s2plskVe59OK3TUakNoXKPsRbHKHNwlSy5OIyjW-9HlcTGyE-05rnu4Dt4FWWsk6kcSIKYAul5gArxAsW-U7iFzflcDJ66rbd_nNU0hFvyxKe4cYHKLyPfsQ7top8LYR7InFJooV8O376jZqlXOHmNK_XQH6ZTeSFHQFVHeiCzLDuSv2DxTcNgMPZX6yf1-UKJtmZg-UhLa5vQ47v9YcsDMPc08Nxsr8DfVJ7AkFJmzxgGmHnjOmTZShtMteFReZeP14w"
                        },
                        {
                            id: "03",
                            title: "Tratamente & Răsfăț",
                            desc: "Revitalizează-ți părul cu tratamente profunde de hidratare. Un moment de relaxare absolută la scafă, cu produse premium.",
                            img: "https://lh3.googleusercontent.com/aida/ADBb0ugykDCZ4ZYA2C0ATJjZ5hdYAMoMMjBiHwPUSC82O8YYfnVcJMmcQ9zeIvO1z9X4IUHz1CYMULFFHEBDBZ9oV6pHWsS01rQ0ATw9QoXa4_3BsKHhCFFWitZUJwe_miSI_l2Wn_xKKJxxH_lHqCEPsThCn7g3MG3SSKE598u485V5TpR5k_ueEjmLSMjEnl4d8PbE4mJ8blYZM2xO-VDcNpEtlwGM8EAy-xUfPwEekDiBC-PBafKuFREWW3u2RcbK3RntCN0j9_W3cvA"
                        },
                        {
                            id: "04",
                            title: "Nail Art",
                            desc: "Unghii pur și simplu perfecte. De la manichiura clasică la designuri complexe, îți îngrijim mâinile la cele mai înalte standarde.",
                            img: "/Screenshot_4.png"
                        }
                    ].map((service, index) => (
                        <motion.div
                            key={index}
                            variants={fadeIn}
                            className="flex flex-col group cursor-pointer"
                        >
                            <span className="text-xs text-gray-500 mb-3 font-medium tracking-wider">[{service.id}]</span>
                            <div className="aspect-[3/4] overflow-hidden mb-5 bg-gray-200 relative">
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10 duration-500" />
                                <motion.img
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.6, ease: "easeOut" }}
                                    alt={service.title}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                                    src={service.img}
                                />
                            </div>
                            <h3 className="text-2xl font-bold uppercase mb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                                {service.title}
                            </h3>
                            <p className="text-sm md:text-xs leading-relaxed text-gray-600">
                                {service.desc}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                <div className="text-center mt-8">
                    <motion.a
                        whileHover={{ scale: 1.02, backgroundColor: "#000" }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-block bg-[#3b281f] text-white text-xs tracking-widest uppercase px-8 py-5 transition-colors"
                        href="#"
                    >
                        Vezi Lista Completă de Prețuri
                    </motion.a>
                </div>
            </section>

            {/* Unified Contact & Footer Section */}
            <footer id="contact" className="py-20 px-6 border-t border-[#3b281f]/10 bg-[#f4efe8]">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Column: Contact Info */}
                    <div className="text-center md:text-left space-y-6">
                        <div>
                            <p className="text-xs md:text-sm mb-2 font-medium tracking-widest text-[#3b281f] uppercase">[ Contact & Locație ]</p>
                            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                                Unde Ne Găsești
                            </h2>
                        </div>
                        <div className="text-sm md:text-base text-[#3b281f]/80 space-y-4 font-medium leading-relaxed">
                            <div>
                                <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">Adresă Salon</p>
                                <p className="text-lg text-[#1a1a1a]">Strada General Andrei Popovici, 011721 București</p>
                            </div>
                            <div>
                                <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">Telefon / Rezervări</p>
                                <p className="text-lg text-[#1a1a1a] tracking-wider">0723 347 089</p>
                            </div>
                            <div>
                                <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">Program</p>
                                <p className="text-[#1a1a1a]">Luni - Sâmbătă: 09:00 - 20:00</p>
                                <p className="text-[#1a1a1a]">Duminică: Închis</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Colored Map */}
                    <div className="w-full h-[350px] md:h-[400px] relative overflow-hidden rounded-sm border border-[#3b281f]/10 shadow-lg">
                        <iframe
                            src="https://maps.google.com/maps?q=Strada%20General%20Andrei%20Popovici%20Bucuresti&t=&z=16&ie=UTF8&iwloc=&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="w-full h-full"
                        ></iframe>
                    </div>
                </div>
                <div className="mt-16 pt-8 border-t border-[#3b281f]/5 text-center text-xs text-gray-400">
                    <p>© {new Date().getFullYear()} MonisLine Salon. Toate drepturile rezervate.</p>
                </div>
            </footer>
        </div>
    );
}