import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { Lightbulb, Paintbrush, Flower2 } from "lucide-react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

interface ServicesProps {
    onNavigate: (page: "home" | "courses" | "services" | "contact" | "terms" | "privacy" | "cookies" | "about") => void;
}

export default function Services({ onNavigate }: ServicesProps) {
    const [activeTab, setActiveTab] = useState(0);
    const tabs = [
        { id: 0, label: "Spa & Tricologie" },
        { id: 1, label: "Hair Artistry" },
        { id: 2, label: "Nail Care" },
    ];

    const fadeIn: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    const staggerContainer: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 },
        },
    };

    return (
        <div className="min-h-screen bg-surface-container-lowest text-on-background selection:bg-secondary-container selection:text-on-secondary-container" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            <Navbar currentView="services" onNavigate={onNavigate} />

            <main>
                {/* Hero Section */}
                <section className="relative min-h-[85vh] pt-[140px] pb-24 px-6 md:px-margin-desktop bg-[#e5dac6] overflow-hidden flex items-center">
                    <div className="max-w-container-max mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
                        <motion.div 
                            initial="hidden"
                            animate="visible"
                            variants={staggerContainer}
                            className="lg:col-span-6 flex flex-col items-start text-left z-10"
                        >
                            <motion.span variants={fadeIn} className="inline-block px-4 py-1.5 bg-[#1a1a1a]/5 text-[#1a1a1a] font-medium text-xs rounded-full mb-8 tracking-widest uppercase border border-[#1a1a1a]/10">
                                EXPERIENȚE PREMIUM
                            </motion.span>
                            <motion.h1 variants={fadeIn} className="font-headline text-[2.75rem] md:text-[4.5rem] text-primary mb-6 leading-[1.05]">
                                Sanctuarul <br/><span className="italic font-light opacity-80">Frumuseții Tale</span>
                            </motion.h1>
                            <motion.p variants={fadeIn} className="font-body text-body-lg text-[#1a1a1a]/80 mb-12 max-w-lg leading-relaxed">
                                Descoperă standardul Monisline. Un spațiu dedicat excelenței, unde tehnica precisă se întâlnește cu arta rafinată pentru a-ți dezvălui cea mai bună versiune.
                            </motion.p>
                            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
                                <button onClick={() => { document.getElementById("services-list")?.scrollIntoView({ behavior: "smooth" }); }} className="bg-[#1a1a1a] text-white font-label-md px-8 py-4 rounded hover:bg-neutral-800 transition-all duration-300 tracking-widest uppercase cursor-pointer shadow-xl hover:shadow-2xl text-xs font-semibold">
                                    Descoperă Serviciile
                                </button>
                                <button onClick={() => onNavigate("contact")} className="bg-transparent text-[#1a1a1a] border border-[#1a1a1a]/30 font-label-md px-8 py-4 rounded hover:bg-[#1a1a1a]/5 transition-all duration-300 tracking-widest uppercase cursor-pointer text-xs font-semibold">
                                    Programează-te
                                </button>
                            </motion.div>
                        </motion.div>
                        
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                            className="lg:col-span-6 relative h-[500px] lg:h-[700px] w-full mt-8 lg:mt-0"
                        >
                            <div className="absolute inset-0 rounded-[2rem] overflow-hidden shadow-[0_30px_70px_rgba(26,26,26,0.15)] group bg-[#f5f3f0]">
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-700 z-10"></div>
                                <img
                                    alt="Monisline Hero Experiență"
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 filter grayscale-[5%]"
                                    src="/Placeholder.png"
                                />
                            </div>
                            
                            {/* Decorative Floating Element */}
                            <motion.div 
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                                className="absolute -bottom-8 -left-8 bg-bento p-6 rounded-2xl shadow-[0_25px_60px_rgba(26,26,26,0.12)] max-w-[240px] z-20 hidden md:block border border-[#1a1a1a]/5"
                            >
                                <div className="flex items-center gap-4 mb-3">
                                    <div className="w-12 h-12 rounded-full bg-[#e5dac6]/50 flex items-center justify-center">
                                        <Flower2 className="w-6 h-6 text-[#1a1a1a]" strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <p className="font-headline font-bold text-lg text-primary">Artă</p>
                                        <div className="flex gap-1 text-[#1a1a1a] text-xs">
                                            ★★★★★
                                        </div>
                                    </div>
                                </div>
                                <p className="font-body text-xs text-on-surface-variant font-medium">Standardul de excelență în frumusețe.</p>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                {/* Intro Section */}
                <motion.section
                    id="services-list"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.05 }}
                    variants={staggerContainer}
                    className="py-section-gap px-gutter bg-surface-dim"
                >
                    <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
                        <motion.div variants={fadeIn} className="bg-bento p-8 md:p-12 border border-[#1a1a1a]/10 rounded-2xl shadow-[0_25px_60px_rgba(26,26,26,0.08)] hover:shadow-[0_35px_70px_rgba(26,26,26,0.15)] transition-all duration-500 flex flex-col justify-center">
                            <h2 className="font-headline text-headline-lg-mobile md:text-headline-lg text-primary mb-8">Standardul Monisline</h2>
                            <div className="space-y-6 text-on-surface-variant font-body text-body-md leading-relaxed">
                                <p>
                                    Credem că frumusețea nu este doar un rezultat, ci o călătorie. Fiecare serviciu este gândit ca un ritual personalizat, utilizând cele mai avansate tehnici și produse premium pentru a asigura nu doar o estetică impecabilă, ci și sănătatea pe termen lung a părului și pielii tale.
                                </p>
                                <p>
                                    Abordarea noastră este minimalistă, dar profund tehnică. Oferim o experiență de 'quiet luxury', unde detaliile fac diferența, iar expertiza maeștrilor noștri este pusă în slujba viziunii tale.
                                </p>
                            </div>
                        </motion.div>
                        <motion.div variants={fadeIn} className="relative h-[600px] rounded-2xl overflow-hidden shadow-[0_25px_60px_rgba(26,26,26,0.08)] hover:shadow-[0_35px_70px_rgba(26,26,26,0.15)] transition-all duration-500 group">
                            <img
                                alt="Standardul Monisline"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale-[10%]"
                                src="/Placeholder.png"
                            />
                        </motion.div>
                    </div>
                </motion.section>

                {/* Mobile Sticky Tab Bar */}
                <div className="lg:hidden sticky top-[70px] z-30 bg-[#f5f3f0]/95 backdrop-blur-md border-b border-surface-variant/30 py-4 px-4 overflow-x-auto flex justify-center gap-3">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => {
                                setActiveTab(tab.id);
                                document.getElementById("services-list")?.scrollIntoView({ behavior: "smooth" });
                            }}
                            className={`px-4 py-2.5 rounded-full text-[11px] font-bold tracking-widest uppercase transition-all duration-300 ${
                                activeTab === tab.id
                                    ? "bg-[#1a1a1a] text-white shadow-md scale-105"
                                    : "bg-[#c9c7c5] text-[#1a1a1a]/85 border border-[#1a1a1a]/10 shadow-sm"
                            }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Service Pillar 1 */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.05 }}
                    variants={staggerContainer}
                    className={`py-section-gap px-gutter bg-white transition-all duration-500 ${activeTab === 0 ? "block" : "hidden lg:block"}`}
                >
                    <div className="max-w-container-max mx-auto">
                        <motion.div variants={fadeIn} className="text-center mb-16">
                            <span className="inline-block px-4 py-1.5 bg-surface-variant/50 text-on-surface-variant font-medium text-xs rounded-full mb-4 tracking-widest uppercase border border-surface-variant">PILONUL I</span>
                            <h2 className="font-headline text-headline-lg-mobile md:text-headline-lg text-primary">Ritual Spa &amp; Tricologie</h2>
                        </motion.div>
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                            <motion.div variants={fadeIn} className="col-span-12 lg:col-span-6 space-y-8">
                                <div className="bg-bento p-8 md:p-12 border border-[#1a1a1a]/10 rounded-2xl z-10 shadow-[0_25px_60px_rgba(26,26,26,0.08)] hover:shadow-[0_35px_70px_rgba(26,26,26,0.15)] transition-all duration-500 relative">
                                    <h3 className="font-headline text-headline-md text-primary mb-6">Diagnoză și Tratament</h3>
                                    <p className="font-body text-body-md text-on-surface-variant mb-8 leading-relaxed">
                                        Sănătatea scalpului este fundația unui păr superb. Ritualurile noastre de tricologie încep cu o analiză microscopică detaliată, urmată de protocoale personalizate de exfoliere, hidratare și stimulare.
                                    </p>
                                    <div className="space-y-6">
                                        <div className="border-b border-surface-variant/50 pb-4">
                                            <div className="flex justify-between items-start mb-2">
                                                <h4 className="font-body font-semibold text-lg text-primary">Analiză Microscopică Scalp</h4>
                                                <span className="font-label-sm text-xs text-on-surface-variant bg-surface-container-low px-2 py-1 rounded">30 MIN</span>
                                            </div>
                                            <p className="font-body text-sm text-on-surface-variant leading-relaxed">Evaluare detaliată a sănătății scalpului și foliculilor de păr pentru personalizarea tratamentului.</p>
                                        </div>
                                        <div className="border-b border-surface-variant/50 pb-4">
                                            <div className="flex justify-between items-start mb-2">
                                                <h4 className="font-body font-semibold text-lg text-primary">Tratament Purificare cu Oxigen</h4>
                                                <span className="font-label-sm text-xs text-on-surface-variant bg-surface-container-low px-2 py-1 rounded">45 MIN</span>
                                            </div>
                                            <p className="font-body text-sm text-on-surface-variant leading-relaxed">Detoxifiere profundă și oxigenare a scalpului, ideală pentru stimularea creșterii și revigorare.</p>
                                        </div>
                                        <div className="border-b border-surface-variant/50 pb-4">
                                            <div className="flex justify-between items-start mb-2">
                                                <h4 className="font-body font-semibold text-lg text-primary">Terapie Regenerare Cuticulă</h4>
                                                <span className="font-label-sm text-xs text-on-surface-variant bg-surface-container-low px-2 py-1 rounded">60 MIN</span>
                                            </div>
                                            <p className="font-body text-sm text-on-surface-variant leading-relaxed">Tratament intensiv de reconstrucție pentru păr degradat, sigilând hidratarea în interiorul fibrei capilare.</p>
                                        </div>
                                        <div className="pb-4">
                                            <div className="flex justify-between items-start mb-2">
                                                <h4 className="font-body font-semibold text-lg text-primary">Masaj Capilar Ritualic</h4>
                                                <span className="font-label-sm text-xs text-on-surface-variant bg-surface-container-low px-2 py-1 rounded">30 MIN</span>
                                            </div>
                                            <p className="font-body text-sm text-on-surface-variant leading-relaxed">Masaj de relaxare profundă ce stimulează microcirculația sanguină la nivelul scalpului.</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div variants={fadeIn} className="col-span-12 lg:col-span-6 space-y-6">
                                <div className="h-[280px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-[0_25px_60px_rgba(26,26,26,0.08)] hover:shadow-[0_35px_70px_rgba(26,26,26,0.15)] transition-all duration-500 group">
                                    <img
                                        alt="Tricologie Ritual"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale-[5%]"
                                        src="/Placeholder.png"
                                    />
                                </div>
                                <div className="bg-bento p-6 rounded-xl border border-[#1a1a1a]/10 shadow-[0_15px_40px_rgba(26,26,26,0.05)] hover:shadow-[0_20px_50px_rgba(26,26,26,0.1)] transition-all duration-500">
                                    <div className="flex items-center gap-3 mb-3 text-on-tertiary-fixed-variant">
                                        <Lightbulb className="w-5 h-5 stroke-[2]" />
                                        <span className="font-label-sm text-xs uppercase font-semibold tracking-wider">Sfatul Maestrului</span>
                                    </div>
                                    <p className="font-body text-sm md:text-base text-on-surface-variant italic leading-relaxed">
                                        "Exfolierea blândă a scalpului o dată pe lună este crucială. Elimină reziduurile de produse și permite foliculilor să respire, maximizând eficiența tratamentelor aplicate ulterior."
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                        <div className="flex justify-center mt-12">
                            <button className="border border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white transition-colors duration-300 font-label-md px-12 py-4 rounded text-xs tracking-widest font-semibold uppercase cursor-pointer">
                                PROGRAMARE RAPIDĂ
                            </button>
                        </div>
                    </div>
                </motion.section>

                {/* Service Pillar 2 */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.05 }}
                    variants={staggerContainer}
                    className={`py-section-gap px-gutter bg-surface-dim transition-all duration-500 ${activeTab === 1 ? "block" : "hidden lg:block"}`}
                >
                    <div className="max-w-container-max mx-auto">
                        <motion.div variants={fadeIn} className="text-center mb-16">
                            <span className="inline-block px-4 py-1.5 bg-surface-variant/50 text-on-surface-variant font-medium text-xs rounded-full mb-4 tracking-widest uppercase border border-surface-variant">PILONUL II</span>
                            <h2 className="font-headline text-headline-lg-mobile md:text-headline-lg text-primary">Hair Artistry</h2>
                        </motion.div>
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                            <motion.div variants={fadeIn} className="col-span-12 lg:col-span-6 space-y-6">
                                <div className="h-[280px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-[0_25px_60px_rgba(26,26,26,0.08)] hover:shadow-[0_35px_70px_rgba(26,26,26,0.15)] transition-all duration-500 group">
                                    <img
                                        alt="Hair Artistry"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale-[5%]"
                                        src="/Placeholder.png"
                                    />
                                </div>
                                <div className="bg-bento p-6 rounded-xl border border-[#1a1a1a]/10 shadow-[0_15px_40px_rgba(26,26,26,0.05)] hover:shadow-[0_20px_50px_rgba(26,26,26,0.1)] transition-all duration-500">
                                    <div className="flex items-center gap-3 mb-3 text-on-tertiary-fixed-variant">
                                        <Paintbrush className="w-5 h-5 stroke-[2]" />
                                        <span className="font-label-sm text-xs uppercase font-semibold tracking-wider">Sfatul Maestrului</span>
                                    </div>
                                    <p className="font-body text-sm md:text-base text-on-surface-variant italic leading-relaxed">
                                        "Pentru a menține profunzimea culorii, alternăm pigmenții calzi cu cei reci în straturi. Recomandăm glossing-ul la fiecare 4 săptămâni pentru a sigila cuticula și a restabili strălucirea de oglindă."
                                    </p>
                                </div>
                            </motion.div>
                            <motion.div variants={fadeIn} className="col-span-12 lg:col-span-6 space-y-8">
                                <div className="bg-bento p-8 md:p-12 border border-[#1a1a1a]/10 rounded-2xl z-10 shadow-[0_25px_60px_rgba(26,26,26,0.08)] hover:shadow-[0_35px_70px_rgba(26,26,26,0.15)] transition-all duration-500 relative">
                                    <h3 className="font-headline text-headline-md text-primary mb-6">Culoare &amp; Arhitectură</h3>
                                    <p className="font-body text-body-md text-on-surface-variant mb-8 leading-relaxed">
                                        De la tăieturi geometrice precise la balayage fluid și tehnici avansate de colorimetrie, abordăm părul ca pe o operă de artă. Fiecare styling este adaptat fizionomiei și stilului tău de viață.
                                    </p>
                                    <div className="space-y-6">
                                        <div className="border-b border-surface-variant/50 pb-4">
                                            <div className="flex justify-between items-start mb-2">
                                                <h4 className="font-body font-semibold text-lg text-primary">Balayage Customizat</h4>
                                                <span className="font-label-sm text-xs text-on-surface-variant bg-surface-container-low px-2 py-1 rounded">180+ MIN</span>
                                            </div>
                                            <p className="font-body text-sm text-on-surface-variant leading-relaxed">Tehnică de pictură manuală pentru un rezultat luminos, dimensional și natural, adaptat nuanței tenului.</p>
                                        </div>
                                        <div className="border-b border-surface-variant/50 pb-4">
                                            <div className="flex justify-between items-start mb-2">
                                                <h4 className="font-body font-semibold text-lg text-primary">Tuns de Arhitectură</h4>
                                                <span className="font-label-sm text-xs text-on-surface-variant bg-surface-container-low px-2 py-1 rounded">60 MIN</span>
                                            </div>
                                            <p className="font-body text-sm text-on-surface-variant leading-relaxed">Crearea unei forme precise și personalizate care pune în valoare textura naturală a părului și trăsăturile feței.</p>
                                        </div>
                                        <div className="border-b border-surface-variant/50 pb-4">
                                            <div className="flex justify-between items-start mb-2">
                                                <h4 className="font-body font-semibold text-lg text-primary">Glossing cu Pigmenți Organici</h4>
                                                <span className="font-label-sm text-xs text-on-surface-variant bg-surface-container-low px-2 py-1 rounded">45 MIN</span>
                                            </div>
                                            <p className="font-body text-sm text-on-surface-variant leading-relaxed">Revitalizarea culorii și conferirea unei străluciri de oglindă folosind pigmenți blânzi, fără amoniac.</p>
                                        </div>
                                        <div className="pb-4">
                                            <div className="flex justify-between items-start mb-2">
                                                <h4 className="font-body font-semibold text-lg text-primary">Tratament Intensiv de Hidratare</h4>
                                                <span className="font-label-sm text-xs text-on-surface-variant bg-surface-container-low px-2 py-1 rounded">40 MIN</span>
                                            </div>
                                            <p className="font-body text-sm text-on-surface-variant leading-relaxed">Infuzează părul cu nutrienți esențiali, redându-i elasticitatea și aspectul mătăsos.</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                        <div className="flex justify-center mt-12">
                            <button className="bg-[#1a1a1a] text-white hover:bg-neutral-800 transition-colors duration-300 font-label-md px-12 py-4 rounded text-xs tracking-widest font-semibold uppercase cursor-pointer">
                                PROGRAMEAZĂ O CONSULTAȚIE
                            </button>
                        </div>
                    </div>
                </motion.section>

                {/* Service Pillar 3 */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.05 }}
                    variants={staggerContainer}
                    className={`py-section-gap px-gutter bg-white transition-all duration-500 ${activeTab === 2 ? "block" : "hidden lg:block"}`}
                >
                    <div className="max-w-container-max mx-auto">
                        <motion.div variants={fadeIn} className="text-center mb-16">
                            <span className="inline-block px-4 py-1.5 bg-surface-variant/40 text-on-surface-variant font-medium text-xs rounded-full mb-4 tracking-widest uppercase border border-surface-variant/60">PILONUL III</span>
                            <h2 className="font-headline text-headline-lg-mobile md:text-headline-lg text-primary">Nail Care</h2>
                        </motion.div>
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                            <motion.div variants={fadeIn} className="col-span-12 lg:col-span-6 space-y-8">
                                <div className="bg-bento p-8 md:p-12 border border-[#1a1a1a]/10 rounded-2xl z-10 shadow-[0_25px_60px_rgba(26,26,26,0.08)] hover:shadow-[0_35px_70px_rgba(26,26,26,0.15)] transition-all duration-500 relative">
                                    <h3 className="font-headline text-headline-md text-primary mb-6">Eleganță Sustenabilă</h3>
                                    <p className="font-body text-body-md text-on-surface-variant mb-8 leading-relaxed">
                                        Manichiura Monisline transcende oja clasică. Ne concentrăm pe sănătatea patului unghial, folosind tehnici de curățare dry-manicure și baze fortifiante, pentru un rezultat impecabil și durabil.
                                    </p>
                                    <div className="space-y-6">
                                        <div className="border-b border-surface-variant/50 pb-4">
                                            <div className="flex justify-between items-start mb-2">
                                                <h4 className="font-body font-semibold text-lg text-primary">Manichiură Dry-Technique</h4>
                                                <span className="font-label-sm text-xs text-on-surface-variant bg-surface-container-low px-2 py-1 rounded">60 MIN</span>
                                            </div>
                                            <p className="font-body text-sm text-on-surface-variant leading-relaxed">Curățare precisă a cuticulelor folosind tehnici uscate pentru o finisare impecabilă și pregătirea optimă a unghiei.</p>
                                        </div>
                                        <div className="border-b border-surface-variant/50 pb-4">
                                            <div className="flex justify-between items-start mb-2">
                                                <h4 className="font-body font-semibold text-lg text-primary">Pedichiură SPA cu Săruri Marine</h4>
                                                <span className="font-label-sm text-xs text-on-surface-variant bg-surface-container-low px-2 py-1 rounded">75 MIN</span>
                                            </div>
                                            <p className="font-body text-sm text-on-surface-variant leading-relaxed">Un ritual relaxant ce include exfoliere, hidratare profundă și îngrijire completă a tălpilor și unghiilor.</p>
                                        </div>
                                        <div className="border-b border-surface-variant/50 pb-4">
                                            <div className="flex justify-between items-start mb-2">
                                                <h4 className="font-body font-semibold text-lg text-primary">Construcție cu Gel Minimalistă</h4>
                                                <span className="font-label-sm text-xs text-on-surface-variant bg-surface-container-low px-2 py-1 rounded">120 MIN</span>
                                            </div>
                                            <p className="font-body text-sm text-on-surface-variant leading-relaxed">Extensii cu aspect natural, folosind un gel de construcție rezistent, modelat într-o formă elegantă și subțire.</p>
                                        </div>
                                        <div className="pb-4">
                                            <div className="flex justify-between items-start mb-2">
                                                <h4 className="font-body font-semibold text-lg text-primary">Tratament Keratină Unghii</h4>
                                                <span className="font-label-sm text-xs text-on-surface-variant bg-surface-container-low px-2 py-1 rounded">30 MIN</span>
                                            </div>
                                            <p className="font-body text-sm text-on-surface-variant leading-relaxed">Fortifiere intensivă pentru unghiile fragile sau deteriorate, infuzând keratina direct în placa unghială.</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div variants={fadeIn} className="col-span-12 lg:col-span-6 space-y-6">
                                <div className="h-[280px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-[0_25px_60px_rgba(26,26,26,0.08)] hover:shadow-[0_35px_70px_rgba(26,26,26,0.15)] transition-all duration-500 group">
                                    <img
                                        alt="Nail Care"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale-[5%]"
                                        src="/Placeholder.png"
                                    />
                                </div>
                                <div className="bg-bento p-6 rounded-xl border border-[#1a1a1a]/10 shadow-[0_15px_40px_rgba(26,26,26,0.05)] hover:shadow-[0_20px_50px_rgba(26,26,26,0.1)] transition-all duration-500">
                                    <div className="flex items-center gap-3 mb-3 text-on-tertiary-fixed-variant">
                                        <Flower2 className="w-5 h-5 stroke-[2]" />
                                        <span className="font-label-sm text-xs uppercase font-semibold tracking-wider">Sfatul Maestrului</span>
                                    </div>
                                    <p className="font-body text-sm md:text-base text-on-surface-variant italic leading-relaxed">
                                        "Uleiul de cuticule nu este opțional. Aplicarea zilnică a unui blend de uleiuri naturale (jojoba, migdale) previne deshidratarea și asigură o creștere flexibilă și rezistentă a unghiei naturale."
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                        <div className="flex justify-center mt-12">
                            <button className="border border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white transition-colors duration-300 font-label-md px-12 py-4 rounded text-xs tracking-widest font-semibold uppercase cursor-pointer">
                                OBȚINE O PROGRAMARE
                            </button>
                        </div>
                    </div>
                </motion.section>

                {/* CTA Section */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.05 }}
                    variants={staggerContainer}
                    className="py-32 px-gutter bg-surface-dim text-center border-t border-surface-variant/40"
                >
                    <motion.div variants={fadeIn} className="max-w-3xl mx-auto">
                        <h2 className="font-headline text-headline-lg-mobile md:text-headline-lg text-primary mb-6">Programează-te pentru o experiență de neuitat</h2>
                        <p className="font-body text-body-lg text-on-surface-variant mb-10 leading-relaxed">
                            Consilierii noștri sunt pregătiți să îți recomande serviciul ideal pentru nevoile tale specifice.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <button className="bg-[#1a1a1a] text-white font-label-md text-sm px-8 py-4 rounded hover:bg-neutral-800 transition-colors uppercase tracking-widest font-semibold cursor-pointer">
                                PROGRAMEAZĂ ACUM
                            </button>
                            <button className="border-2 border-[#1a1a1a] text-[#1a1a1a] font-label-md text-sm px-8 py-4 rounded hover:bg-[#1a1a1a] hover:text-white transition-colors uppercase tracking-widest font-semibold cursor-pointer">
                                CONTACTEAZĂ RECEPȚIA
                            </button>
                        </div>
                    </motion.div>
                </motion.section>
            </main>

            <Footer currentView="services" onNavigate={onNavigate} />
        </div>
    );
}
