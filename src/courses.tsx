import { useRef } from "react";
import { motion, type Variants } from "framer-motion";
import { ArrowLeft, ArrowRight, Award, Paintbrush, Users, Clock, CreditCard, Star, Calendar } from "lucide-react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

interface CoursesProps {
    onNavigate: (page: "home" | "courses" | "services" | "contact" | "terms" | "privacy" | "cookies" | "about") => void;
}

export default function Courses({ onNavigate }: CoursesProps) {
    const carouselRef = useRef<HTMLDivElement>(null);

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

    const scrollCarousel = (direction: "left" | "right") => {
        if (carouselRef.current) {
            const scrollAmount = 420;
            carouselRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        }
    };

    return (
        <div className="min-h-screen bg-surface-container-lowest text-on-background selection:bg-secondary-container selection:text-on-secondary-container" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            <Navbar currentView="courses" onNavigate={onNavigate} />

            {/* Hero Section */}
            <header className="w-full bg-surface-container-lowest pt-element-gap pb-section-gap">
                <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-6 space-y-6"
                    >
                        <span className="inline-block px-4 py-2 bg-secondary-container rounded-full font-label-md text-label-md text-primary tracking-wider uppercase font-semibold">
                            PERFECȚIONEAZĂ-ȚI TEHNICA
                        </span>
                        <h1 className="font-headline font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-primary leading-tight">
                            Stăpânește Arta Vopsitului Premium
                        </h1>
                        <p className="font-body text-body-lg text-on-surface-variant max-w-xl">
                            Transformă-ți cariera cu educație de top în domeniu. Învață tehnici exclusive și moderne de colorare a părului într-un mediu select, conceput pentru profesioniștii ambițioși.
                        </p>
                        <div className="flex flex-wrap gap-4 pt-4 items-center">
                            <a href="#registration" className="bg-primary text-on-primary px-8 py-4 rounded font-label-md text-label-md hover:bg-surface-tint hover:shadow-md transition-all duration-300">
                                EXPLOREAZĂ CURSURILE
                            </a>
                            <div className="flex items-center space-x-2 text-on-surface ml-4">
                                <div className="flex text-amber-500">
                                    {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                                </div>
                                <span className="font-body text-body-md font-semibold">4.9/5 Evaluare Medie</span>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-6 h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden bg-surface-container-low shadow-[0px_10px_35px_rgba(26,26,26,0.10)] border border-surface-variant/30"
                    >
                        <img 
                            alt="Advanced hair coloring technique" 
                            className="w-full h-full object-cover filter grayscale-[10%]" 
                            src="/Placeholder.png"
                        />
                    </motion.div>
                </div>
            </div>
        </header>

            {/* Features/Benefits Section */}
            <motion.section 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.05 }}
                variants={staggerContainer}
                className="w-full bg-surface-dim py-section-gap"
            >
                <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center">
                    <h2 className="font-headline font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-12">
                        De Ce Să Alegi Monisline Academy?
                    </h2>
                    <div className="flex overflow-x-auto gap-6 pb-6 scroll-smooth snap-x md:grid md:grid-cols-3 md:gap-gutter md:overflow-visible md:pb-0 text-left">
                        {/* Benefit 1 */}
                        <motion.div variants={fadeIn} className="bg-bento p-8 rounded-2xl border border-surface-variant/40 shadow-[0px_10px_35px_rgba(26,26,26,0.10)] hover:shadow-[0_20px_45px_rgba(26,26,26,0.09)] transition-all duration-500 flex flex-col items-center text-center snap-center min-w-[280px] sm:min-w-[340px] md:min-w-0">
                            <Award className="text-primary mb-6 w-12 h-12 stroke-[1.5]" />
                            <h3 className="font-headline text-headline-sm text-primary mb-3 font-medium">Diplome de Masterat</h3>
                            <p className="font-body text-body-md text-on-surface-variant leading-relaxed">
                                Certificare recunoscută internațional acordată la finalizarea modulelor noastre, sporindu-ți instant profilul profesional.
                            </p>
                        </motion.div>
                        {/* Benefit 2 */}
                        <motion.div variants={fadeIn} className="bg-bento p-8 rounded-2xl border border-surface-variant/40 shadow-[0px_10px_35px_rgba(26,26,26,0.10)] hover:shadow-[0_20px_45px_rgba(26,26,26,0.09)] transition-all duration-500 flex flex-col items-center text-center snap-center min-w-[280px] sm:min-w-[340px] md:min-w-0">
                            <Paintbrush className="text-primary mb-6 w-12 h-12 stroke-[1.5]" />
                            <h3 className="font-headline text-headline-sm text-primary mb-3 font-medium">Kit Profesional Inclus</h3>
                            <p className="font-body text-body-md text-on-surface-variant leading-relaxed">
                                Lucrează cu cele mai bune produse. Toate cursurile includ produse și instrumente premium în format complet pentru a le lua acasă.
                            </p>
                        </motion.div>
                        {/* Benefit 3 */}
                        <motion.div variants={fadeIn} className="bg-bento p-8 rounded-2xl border border-surface-variant/40 shadow-[0px_10px_35px_rgba(26,26,26,0.10)] hover:shadow-[0_20px_45px_rgba(26,26,26,0.09)] transition-all duration-500 flex flex-col items-center text-center snap-center min-w-[280px] sm:min-w-[340px] md:min-w-0">
                            <Users className="text-primary mb-6 w-12 h-12 stroke-[1.5]" />
                            <h3 className="font-headline text-headline-sm text-primary mb-3 font-medium">Mentorat Personalizat 1:1</h3>
                            <p className="font-body text-body-md text-on-surface-variant leading-relaxed">
                                Beneficiază de atenție exclusivă. Oferim sesiuni individuale dedicate pentru adaptarea ritmului și corectarea precisă a tehnicilor.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* Courses Curriculum Carousel */}
            <section id="curriculum" className="w-full bg-white py-section-gap overflow-hidden">
                <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
                    <div className="flex justify-between items-end mb-10">
                    <div>
                        <h2 className="font-headline font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary">
                            Programele Noastre
                        </h2>
                        <p className="font-body text-body-md text-on-surface-variant mt-2 max-w-2xl">
                            Descoperă cursurile noastre intensive concepute să îți poarte abilitățile de la nivelul de bază până la cel de maestru.
                        </p>
                    </div>
                    <div className="hidden md:flex space-x-3">
                        <button onClick={() => scrollCarousel("left")} className="w-12 h-12 rounded-full border border-surface-variant flex items-center justify-center text-primary bg-white hover:bg-surface-container transition-all cursor-pointer shadow-sm">
                            <ArrowLeft size={18} />
                        </button>
                        <button onClick={() => scrollCarousel("right")} className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-on-primary hover:bg-surface-tint transition-all cursor-pointer shadow-sm">
                            <ArrowRight size={18} />
                        </button>
                    </div>
                </div>

                <div 
                    ref={carouselRef}
                    className="flex overflow-x-auto gap-gutter pb-8 hide-scrollbar snap-x scroll-smooth"
                >
                    {/* Course 1 */}
                    <div className="min-w-[310px] md:min-w-[410px] bg-bento rounded-2xl border border-surface-variant/40 shadow-[0px_10px_35px_rgba(26,26,26,0.10)] hover:shadow-[0_20px_45px_rgba(26,26,26,0.09)] transition-all duration-500 snap-start group cursor-pointer">
                        <div className="h-56 w-full bg-surface-container-low overflow-hidden rounded-t-2xl relative">
                            <img 
                                alt="Tehnici Speciale de Vopsit" 
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter grayscale-[5%]" 
                                src="/Placeholder.png"
                            />
                        </div>
                        <div className="p-8">
                            <span className="inline-block px-3 py-1 bg-secondary-container rounded-full font-label-md text-[10px] text-primary mb-4 font-semibold tracking-wider">
                                PROGRAM COMPLET
                            </span>
                            <h3 className="font-headline text-[24px] text-primary mb-3 font-medium">Tehnici Speciale de Vopsit</h3>
                            <p className="font-body text-body-md text-on-surface-variant mb-6 line-clamp-2">
                                Stăpânește tehnici avansate de vopsire a părului, inclusiv plasarea multi-tonală, blending fin și corectare.
                            </p>
                            <div className="space-y-3 mb-8 border-t border-surface-container/60 pt-4">
                                <div className="flex items-center justify-between text-on-surface-variant">
                                    <span className="font-body text-body-sm flex items-center gap-2"><Clock size={16} className="text-primary/70" /> 6 ore (Intensiv)</span>
                                    <span className="font-body text-body-sm bg-surface-container-low px-2 py-0.5 rounded text-primary font-medium">Începător/Mediu</span>
                                </div>
                                <div className="flex items-center justify-between text-on-surface-variant">
                                    <span className="font-body text-body-sm flex items-center gap-2"><CreditCard size={16} className="text-primary/70" /> 1500 lei</span>
                                </div>
                            </div>
                            <a href="#registration" className="w-full block text-center py-3 border border-primary text-primary font-label-md text-label-md hover:bg-primary hover:text-on-primary transition-all rounded font-semibold">
                                ÎNSCRIE-TE ACUM
                            </a>
                        </div>
                    </div>

                    {/* Course 2 */}
                    <div className="min-w-[310px] md:min-w-[410px] bg-bento rounded-2xl border border-surface-variant/40 shadow-[0px_10px_35px_rgba(26,26,26,0.10)] hover:shadow-[0_20px_45px_rgba(26,26,26,0.09)] transition-all duration-500 snap-start group cursor-pointer">
                        <div className="h-56 w-full bg-surface-container-low overflow-hidden rounded-t-2xl relative">
                            <img 
                                alt="Master în Colorimetrie" 
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter grayscale-[5%]" 
                                src="/Placeholder.png"
                            />
                        </div>
                        <div className="p-8">
                            <span className="inline-block px-3 py-1 bg-bento rounded-full font-label-md text-[10px] text-primary mb-4 font-semibold tracking-wider">
                                AVANSAT
                            </span>
                            <h3 className="font-headline text-[24px] text-primary mb-3 font-medium">Master în Colorimetrie</h3>
                            <p className="font-body text-body-md text-on-surface-variant mb-6 line-clamp-2">
                                O incursiune profundă în știința culorii părului, subtonuri și formularea nuanțelor perfecte în mod constant.
                            </p>
                            <div className="space-y-3 mb-8 border-t border-surface-container/60 pt-4">
                                <div className="flex items-center justify-between text-on-surface-variant">
                                    <span className="font-body text-body-sm flex items-center gap-2"><Clock size={16} className="text-primary/70" /> 8 ore (2 Zile)</span>
                                    <span className="font-body text-body-sm bg-surface-container-low px-2 py-0.5 rounded text-primary font-medium">Intermediar</span>
                                </div>
                                <div className="flex items-center justify-between text-on-surface-variant">
                                    <span className="font-body text-body-sm flex items-center gap-2"><CreditCard size={16} className="text-primary/70" /> 2200 lei</span>
                                </div>
                            </div>
                            <a href="#registration" className="w-full block text-center py-3 border border-primary text-primary font-label-md text-label-md hover:bg-primary hover:text-on-primary transition-all rounded font-semibold">
                                ÎNSCRIE-TE ACUM
                            </a>
                        </div>
                    </div>

                    {/* Course 3 */}
                    <div className="min-w-[310px] md:min-w-[410px] bg-bento rounded-2xl border border-surface-variant/40 shadow-[0px_10px_35px_rgba(26,26,26,0.10)] hover:shadow-[0_20px_45px_rgba(26,26,26,0.09)] transition-all duration-500 snap-start group cursor-pointer">
                        <div className="h-56 w-full bg-surface-container-low overflow-hidden rounded-t-2xl relative">
                            <img 
                                alt="Balayage Perfect" 
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter grayscale-[5%]" 
                                src="/Placeholder.png"
                            />
                        </div>
                        <div className="p-8">
                            <span className="inline-block px-3 py-1 bg-bento rounded-full font-label-md text-[10px] text-primary mb-4 font-semibold tracking-wider">
                                WORKSHOP
                            </span>
                            <h3 className="font-headline text-[24px] text-primary mb-3 font-medium">Balayage Perfect</h3>
                            <p className="font-body text-body-md text-on-surface-variant mb-6 line-clamp-2">
                                Concentrează-te exclusiv pe stăpânirea blending-ului fără cusur și a plasării strategice a luminii pentru balayage modern.
                            </p>
                            <div className="space-y-3 mb-8 border-t border-surface-container/60 pt-4">
                                <div className="flex items-center justify-between text-on-surface-variant">
                                    <span className="font-body text-body-sm flex items-center gap-2"><Clock size={16} className="text-primary/70" /> 4 ore</span>
                                    <span className="font-body text-body-sm bg-surface-container-low px-2 py-0.5 rounded text-primary font-medium">Toate Nivelurile</span>
                                </div>
                                <div className="flex items-center justify-between text-on-surface-variant">
                                    <span className="font-body text-body-sm flex items-center gap-2"><CreditCard size={16} className="text-primary/70" /> 900 lei</span>
                                </div>
                            </div>
                            <a href="#registration" className="w-full block text-center py-3 border border-primary text-primary font-label-md text-label-md hover:bg-primary hover:text-on-primary transition-all rounded font-semibold">
                                ÎNSCRIE-TE ACUM
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

            {/* Detailed Course Breakdown */}
            <section className="w-full bg-surface-dim py-section-gap">
                <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-12 gap-[80px] items-start">
                    <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-6">
                        <span className="font-label-md text-label-md text-on-surface-variant tracking-widest uppercase mb-2 block font-semibold">
                            CURRICULUM DE TOP
                        </span>
                        <h2 className="font-headline font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary leading-tight">
                            Tehnici Speciale de Vopsit: Ce Vei Învăța
                        </h2>
                        <p className="font-body text-body-lg text-on-surface-variant leading-relaxed">
                            O structură completă, pas cu pas, a cursului nostru intensiv de 6 ore, creat special pentru a-ți perfecționa tehnica de lucru și viziunea creativă.
                        </p>
                        <a href="#registration" className="inline-block bg-primary text-on-primary px-8 py-4 rounded font-label-md text-label-md hover:bg-surface-tint transition-colors shadow-sm">
                            ÎNREGISTREAZĂ-TE ACUM
                        </a>
                    </div>
                    <div className="flex overflow-x-auto gap-6 pb-6 scroll-smooth snap-x lg:flex-col lg:space-y-6 lg:overflow-visible lg:pb-0 lg:col-span-7 mt-12 lg:mt-0 w-full">
                        {/* Module 1 */}
                        <div className="p-8 bg-bento border border-surface-variant/40 rounded-2xl shadow-[0_10px_35px_rgba(26,26,26,0.10)] hover:shadow-[0_20px_45px_rgba(26,26,26,0.09)] transition-all duration-500 snap-center min-w-[280px] sm:min-w-[340px] lg:min-w-0">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="font-headline text-[22px] font-medium text-primary">Modulul 1: Consultare &amp; Analiză</h3>
                                <span className="font-label-md text-label-md text-on-tertiary-fixed-variant bg-secondary-container px-3 py-1 rounded-full font-semibold">ORA 1</span>
                            </div>
                            <p className="font-body text-body-md text-on-surface-variant mb-4 leading-relaxed">
                                Stăpânirea consultării clientului. Analiza porozității părului, identificarea pigmenților subiacenți și determinarea strategiei optime de colorare pentru rezultate sigure.
                            </p>
                            <ul className="list-disc list-inside font-body text-body-sm text-on-surface-variant space-y-2 pl-2">
                                <li>Testarea porozității și elasticității</li>
                                <li>Identificarea tonului natural și a pigmentului contribuitor</li>
                                <li>Gestionarea așteptărilor clientului vs. posibilitățile reale</li>
                            </ul>
                        </div>
                        {/* Module 2 */}
                        <div className="p-8 bg-bento border border-surface-variant/40 rounded-2xl shadow-[0_10px_35px_rgba(26,26,26,0.10)] hover:shadow-[0_20px_45px_rgba(26,26,26,0.09)] transition-all duration-500 snap-center min-w-[280px] sm:min-w-[340px] lg:min-w-0">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="font-headline text-[22px] font-medium text-primary">Modulul 2: Formulare Avansată</h3>
                                <span className="font-label-md text-label-md text-on-tertiary-fixed-variant bg-secondary-container px-3 py-1 rounded-full font-semibold">ORA 2</span>
                            </div>
                            <p className="font-body text-body-md text-on-surface-variant mb-4 leading-relaxed">
                                Decodificarea formulelor complexe de vopsire. Învață să obții nuanțe multi-dimensionale folosind rapoarte avansate de amestecare și neutralizarea tonurilor nedorite.
                            </p>
                            <ul className="list-disc list-inside font-body text-body-sm text-on-surface-variant space-y-2 pl-2">
                                <li>Chimia liniilor moderne de vopsea</li>
                                <li>Formularea pentru acoperirea firelor albe vs. blending</li>
                                <li>Crearea de tonere și glossuri personalizate</li>
                            </ul>
                        </div>
                        {/* Module 3 */}
                        <div className="p-8 bg-bento border border-surface-variant/40 rounded-2xl shadow-[0_10px_35px_rgba(26,26,26,0.10)] hover:shadow-[0_20px_45px_rgba(26,26,26,0.09)] transition-all duration-500 snap-center min-w-[280px] sm:min-w-[340px] lg:min-w-0">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="font-headline text-[22px] font-medium text-primary">Modulul 3: Tehnică &amp; Plasare (Practică)</h3>
                                <span className="font-label-md text-label-md text-on-tertiary-fixed-variant bg-secondary-container px-3 py-1 rounded-full font-semibold">ORELE 3-6</span>
                            </div>
                            <p className="font-body text-body-md text-on-surface-variant mb-4 leading-relaxed">
                                Demonstrație live urmată de practică pe capete de manechin premium sau modele. Accent pe plasarea foliilor, tehnica root melt și tranziții invizibile.
                            </p>
                            <ul className="list-disc list-inside font-body text-body-sm text-on-surface-variant space-y-2 pl-2">
                                <li>Plasarea strategică a foliilor pentru impact maxim</li>
                                <li>Arta realizării unui root melt impecabil</li>
                                <li>Scenarii și soluții pentru corectarea culorii</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <motion.section 
                id="testimoniale"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.05 }}
                variants={staggerContainer}
                className="w-full bg-surface-dim py-section-gap"
            >
                <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center">
                    <h2 className="font-headline font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-12">
                        Povești de Succes
                    </h2>
                    <div className="flex overflow-x-auto gap-6 pb-6 scroll-smooth snap-x md:grid md:grid-cols-3 md:gap-gutter md:overflow-visible md:pb-0 text-left">
                        {/* Testimonial 1 */}
                        <motion.div variants={fadeIn} className="p-8 bg-bento border border-surface-variant/40 rounded-2xl shadow-[0_10px_35px_rgba(26,26,26,0.04)] flex flex-col justify-between hover:shadow-[0_20px_45px_rgba(26,26,26,0.09)] transition-all duration-500 snap-center min-w-[280px] sm:min-w-[340px] md:min-w-0">
                            <div>
                                <div className="flex text-amber-500 mb-4">
                                    {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                                </div>
                                <p className="font-body text-body-lg text-on-surface italic mb-6 leading-relaxed">
                                    "Cursul 'Tehnici Speciale' mi-a schimbat complet modul de lucru în corectarea culorii. Atenția directă din partea trainerilor a fost neprețuită. Numărul programărilor mele s-a dublat!"
                                </p>
                            </div>
                            <div className="flex items-center border-t border-surface-container/60 pt-4 mt-2">
                                <div className="w-10 h-10 bg-secondary-container rounded-full mr-4 flex items-center justify-center font-bold text-primary">AM</div>
                                <div>
                                    <p className="font-headline text-[16px] text-primary font-medium">Alexandra M.</p>
                                    <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider font-semibold">Stylist Senior</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Testimonial 2 */}
                        <motion.div variants={fadeIn} className="p-8 bg-bento border border-surface-variant/40 rounded-2xl shadow-[0_10px_35px_rgba(26,26,26,0.04)] flex flex-col justify-between hover:shadow-[0_20px_45px_rgba(26,26,26,0.09)] transition-all duration-500 snap-center min-w-[280px] sm:min-w-[340px] md:min-w-0">
                            <div>
                                <div className="flex text-amber-500 mb-4">
                                    {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                                </div>
                                <p className="font-body text-body-lg text-on-surface italic mb-6 leading-relaxed">
                                    "Credeam că știu să fac balayage până când am urmat cursul de aici. Nivelul de detaliu și accentul pus pe chimia reală din spatele culorilor sunt unice în oraș."
                                </p>
                            </div>
                            <div className="flex items-center border-t border-surface-container/60 pt-4 mt-2">
                                <div className="w-10 h-10 bg-secondary-container rounded-full mr-4 flex items-center justify-center font-bold text-primary">ET</div>
                                <div>
                                    <p className="font-headline text-[16px] text-primary font-medium">Elena T.</p>
                                    <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider font-semibold">Proprietar Salon</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Testimonial 3 */}
                        <motion.div variants={fadeIn} className="p-8 bg-bento border border-surface-variant/40 rounded-2xl shadow-[0_10px_35px_rgba(26,26,26,0.04)] flex flex-col justify-between hover:shadow-[0_20px_45px_rgba(26,26,26,0.09)] transition-all duration-500 snap-center min-w-[280px] sm:min-w-[340px] md:min-w-0">
                            <div>
                                <div className="flex text-amber-500 mb-4">
                                    {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                                </div>
                                <p className="font-body text-body-lg text-on-surface italic mb-6 leading-relaxed">
                                    "Kitul oferit a fost fantastic, iar diploma chiar are greutate în această industrie. O experiență de top de la început până la sfârșit care a meritat pe deplin investiția."
                                </p>
                            </div>
                            <div className="flex items-center border-t border-surface-container/60 pt-4 mt-2">
                                <div className="w-10 h-10 bg-secondary-container rounded-full mr-4 flex items-center justify-center font-bold text-primary">DP</div>
                                <div>
                                    <p className="font-headline text-[16px] text-primary font-medium">Diana P.</p>
                                    <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider font-semibold">Colorist Independent</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* Registration Section */}
            <section className="w-full bg-white py-section-gap" id="registration">
                <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-12 gap-[80px] items-start">
                    <div className="lg:col-span-5 space-y-6">
                        <h2 className="font-headline font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary leading-tight">
                            Rezervă-ți Locul
                        </h2>
                        <p className="font-body text-body-md text-on-surface-variant leading-relaxed">
                            Numărul de locuri este strict limitat pentru a asigura atenție personalizată și rezultate optime de învățare. Completează solicitarea pentru a-ți asigura participarea la sesiunea următoare.
                        </p>
                        <div className="pt-6 border-t border-surface-variant/40">
                            <p className="font-label-md text-label-md text-primary mb-4 font-semibold tracking-wider">DATE URMĂTOARE</p>
                            <ul className="space-y-4">
                                <li className="flex justify-between items-center text-on-surface font-body text-body-md">
                                    <span className="flex items-center gap-2"><Calendar size={16} className="text-primary/70" /> 15 Octombrie, 2026</span>
                                    <span className="text-on-surface-variant text-sm font-medium bg-secondary-container px-2 py-0.5 rounded text-primary">2 Locuri Rămase</span>
                                </li>
                                <li className="flex justify-between items-center text-on-surface font-body text-body-md">
                                    <span className="flex items-center gap-2"><Calendar size={16} className="text-primary/70" /> 05 Noiembrie, 2026</span>
                                    <span className="text-on-surface-variant text-sm font-medium bg-surface-container-low px-2 py-0.5 rounded text-on-surface-variant">Deschis pentru înscrieri</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="lg:col-span-7 bg-bento p-margin-mobile md:p-element-gap rounded-2xl border border-surface-variant/40 shadow-[0_10px_35px_rgba(26,26,26,0.10)]">
                        <form className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="relative">
                                    <label className="block font-label-md text-label-md text-on-surface-variant mb-2 font-semibold" htmlFor="first-name">PRENUME</label>
                                    <input className="w-full bg-transparent border-0 border-b border-primary px-0 py-2 font-body text-body-md text-primary focus:ring-0 focus:border-primary transition-colors outline-none" id="first-name" placeholder="Ioana" type="text"/>
                                </div>
                                <div className="relative">
                                    <label className="block font-label-md text-label-md text-on-surface-variant mb-2 font-semibold" htmlFor="last-name">NUME</label>
                                    <input className="w-full bg-transparent border-0 border-b border-primary px-0 py-2 font-body text-body-md text-primary focus:ring-0 focus:border-primary transition-colors outline-none" id="last-name" placeholder="Popescu" type="text"/>
                                </div>
                            </div>
                            <div className="relative">
                                <label className="block font-label-md text-label-md text-on-surface-variant mb-2 font-semibold" htmlFor="email">ADRESĂ DE EMAIL</label>
                                <input className="w-full bg-transparent border-0 border-b border-primary px-0 py-2 font-body text-body-md text-primary focus:ring-0 focus:border-primary transition-colors outline-none" id="email" placeholder="ioana@example.com" type="email"/>
                            </div>
                            <div className="relative">
                                <label className="block font-label-md text-label-md text-on-surface-variant mb-2 font-semibold" htmlFor="course-selection">SELECTEAZĂ CURSUL</label>
                                <select className="w-full bg-transparent border-0 border-b border-primary px-0 py-2 font-body text-body-md text-primary focus:ring-0 focus:border-primary transition-colors appearance-none outline-none cursor-pointer" id="course-selection">
                                    <option value="tehnici">Tehnici Speciale de Vopsit</option>
                                    <option value="master">Master în Colorimetrie</option>
                                    <option value="balayage">Workshop: Balayage Perfect</option>
                                </select>
                            </div>
                            <div className="relative">
                                <label className="block font-label-md text-label-md text-on-surface-variant mb-2 font-semibold" htmlFor="date-selection">PERIOADA PREFERATĂ</label>
                                <select className="w-full bg-transparent border-0 border-b border-primary px-0 py-2 font-body text-body-md text-primary focus:ring-0 focus:border-primary transition-colors appearance-none outline-none cursor-pointer" id="date-selection">
                                    <option value="oct-15">15 Octombrie, 2026</option>
                                    <option value="nov-05">05 Noiembrie, 2026</option>
                                    <option value="1on1">Solicită Sesiune 1:1 Specială</option>
                                </select>
                            </div>
                            <div className="relative">
                                <label className="block font-label-md text-label-md text-on-surface-variant mb-2 font-semibold" htmlFor="experience">NIVELUL ACTUAL DE EXPERIENȚĂ</label>
                                <textarea className="w-full bg-transparent border-0 border-b border-primary px-0 py-2 font-body text-body-md text-primary focus:ring-0 focus:border-primary transition-colors resize-none outline-none" id="experience" placeholder="Descrie pe scurt activitatea ta..." rows={2}></textarea>
                            </div>
                            <button className="w-full bg-primary text-on-primary py-4 rounded font-label-md text-label-md hover:bg-surface-tint hover:shadow-md transition-all duration-300 cursor-pointer font-semibold uppercase tracking-wider" type="button">
                                Trimite Solicitarea de Înscriere
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            <Footer currentView="courses" onNavigate={onNavigate} />
        </div>
    );
}
