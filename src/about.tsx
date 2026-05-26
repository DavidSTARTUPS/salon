import { motion, type Variants } from "framer-motion";
import { Lightbulb, Paintbrush, ShieldCheck, Microscope, Cpu, Sparkles, ArrowRight, Quote, Award, Heart, Users, CalendarDays } from "lucide-react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

interface AboutProps {
    onNavigate: (page: "home" | "courses" | "services" | "contact" | "terms" | "privacy" | "cookies" | "about") => void;
}

export default function About({ onNavigate }: AboutProps) {
    const fadeIn: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    };

    const staggerContainer: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.12 },
        },
    };

    return (
        <div className="min-h-screen bg-background text-on-background selection:bg-secondary-container selection:text-on-secondary-container">
            <Navbar currentView="about" onNavigate={onNavigate} />

            <main>
                {/* Hero Section */}
                <section className="relative pt-24 pb-0 md:pt-28 md:pb-0 bg-background px-margin-mobile md:px-margin-desktop border-b border-surface-variant/40">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                        className="max-w-container-max mx-auto space-y-8"
                    >
                        {/* Title Block */}
                        <div className="text-center space-y-3">
                            <motion.span 
                                variants={fadeIn} 
                                className="text-xs md:text-sm font-bold tracking-[0.25em] text-[#3b281f] uppercase block"
                            >
                                Bun venit în universul nostru
                            </motion.span>
                            <motion.h1 
                                variants={fadeIn} 
                                className="font-headline text-headline-xl-mobile md:text-headline-xl text-primary max-w-4xl mx-auto leading-[1.15]"
                            >
                                Viziunea Monisline
                            </motion.h1>
                            <motion.div variants={fadeIn} className="w-24 h-0.5 bg-[#3b281f]/40 mx-auto"></motion.div>
                            <motion.p variants={fadeIn} className="font-body text-body-md md:text-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
                                O abordare clinică și estetică a frumuseții, unde precizia tehnică întâlnește viziunea artistică pentru a redefini standardele de excelență.
                            </motion.p>
                        </div>

                        {/* Bento Hero Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 auto-rows-auto">
                            {/* Large Hero Image */}
                            <motion.div 
                                variants={fadeIn}
                                className="lg:col-span-8 lg:row-span-2 rounded-3xl overflow-hidden relative shadow-[0_20px_50px_rgba(26,26,26,0.10)] border border-black/5 group min-h-[350px] md:min-h-[520px]"
                            >
                                <img 
                                    alt="Viziunea Monisline Hero" 
                                    className="w-full h-full object-cover filter grayscale-[5%] scale-100 group-hover:scale-[1.02] transition-transform duration-700" 
                                    src="/Placeholder.png"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                <div className="absolute bottom-0 left-0 p-8 md:p-10">
                                    <span className="inline-block px-3 py-1 bg-white/15 backdrop-blur-sm rounded-full font-label-md text-label-md text-white mb-3 border border-white/20">
                                        Salon & Academie
                                    </span>
                                    <h2 className="font-headline text-headline-md md:text-headline-lg text-white leading-tight max-w-lg">
                                        Unde arta întâlnește știința frumuseții
                                    </h2>
                                </div>
                            </motion.div>

                            {/* Quote Card */}
                            <motion.div 
                                variants={fadeIn}
                                className="lg:col-span-4 bg-[#3b281f] p-8 md:p-10 rounded-3xl shadow-[0_20px_50px_rgba(26,26,26,0.10)] flex flex-col justify-between min-h-[240px]"
                            >
                                <Quote className="w-10 h-10 text-[#efe0cd]/60 stroke-[1.5]" />
                                <div className="space-y-4 mt-4">
                                    <p className="font-headline text-[20px] md:text-[22px] text-[#efe0cd] leading-snug italic">
                                        „Frumusețea adevărată nu se creează — se descoperă, se rafinează și se celebrează."
                                    </p>
                                    <div className="flex items-center gap-3 pt-2">
                                        <div className="w-10 h-10 rounded-full bg-[#efe0cd]/20 flex items-center justify-center">
                                            <span className="text-[#efe0cd] font-bold text-sm">FM</span>
                                        </div>
                                        <div>
                                            <p className="text-[#efe0cd] font-semibold text-sm">Flori Monis</p>
                                            <p className="text-[#efe0cd]/60 text-xs uppercase tracking-wider">Fondator & Creative Director</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Mission Card */}
                            <motion.div 
                                variants={fadeIn}
                                className="lg:col-span-4 bg-bento p-8 rounded-3xl border border-surface-variant/40 shadow-[0px_20px_50px_rgba(26,26,26,0.10)] flex flex-col justify-center min-h-[240px]"
                            >
                                <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center text-primary mb-5 shadow-sm">
                                    <Heart className="w-5 h-5 stroke-[1.5]" />
                                </div>
                                <h3 className="font-headline text-headline-sm text-primary mb-3 font-medium">Misiunea Noastră</h3>
                                <p className="font-body text-body-md text-on-surface-variant leading-relaxed">
                                    Să redefinim standardele de frumusețe prin educație de elită, servicii premium și o dedicare necondiționată față de excelență.
                                </p>
                            </motion.div>
                        </div>

                        {/* Stats Counter Row */}
                        <motion.div 
                            variants={fadeIn}
                            className="grid grid-cols-2 md:grid-cols-4 gap-5 pb-24 md:pb-36 pt-5"
                        >
                            <div className="bg-bento rounded-2xl p-6 md:p-8 border border-surface-variant/40 shadow-[0px_20px_50px_rgba(26,26,26,0.10)] text-center group hover:-translate-y-1 transition-all duration-500">
                                <div className="w-11 h-11 rounded-full bg-background flex items-center justify-center text-primary mx-auto mb-4 shadow-sm">
                                    <CalendarDays className="w-5 h-5 stroke-[1.5]" />
                                </div>
                                <p className="font-headline text-[36px] md:text-[44px] text-primary leading-none font-medium">10+</p>
                                <p className="font-body text-body-sm text-on-surface-variant mt-2 uppercase tracking-wider font-semibold">Ani de Experiență</p>
                            </div>
                            <div className="bg-bento rounded-2xl p-6 md:p-8 border border-surface-variant/40 shadow-[0px_20px_50px_rgba(26,26,26,0.10)] text-center group hover:-translate-y-1 transition-all duration-500">
                                <div className="w-11 h-11 rounded-full bg-background flex items-center justify-center text-primary mx-auto mb-4 shadow-sm">
                                    <Heart className="w-5 h-5 stroke-[1.5]" />
                                </div>
                                <p className="font-headline text-[36px] md:text-[44px] text-primary leading-none font-medium">5000+</p>
                                <p className="font-body text-body-sm text-on-surface-variant mt-2 uppercase tracking-wider font-semibold">Clienți Mulțumiți</p>
                            </div>
                            <div className="bg-bento rounded-2xl p-6 md:p-8 border border-surface-variant/40 shadow-[0px_20px_50px_rgba(26,26,26,0.10)] text-center group hover:-translate-y-1 transition-all duration-500">
                                <div className="w-11 h-11 rounded-full bg-background flex items-center justify-center text-primary mx-auto mb-4 shadow-sm">
                                    <Users className="w-5 h-5 stroke-[1.5]" />
                                </div>
                                <p className="font-headline text-[36px] md:text-[44px] text-primary leading-none font-medium">200+</p>
                                <p className="font-body text-body-sm text-on-surface-variant mt-2 uppercase tracking-wider font-semibold">Absolvenți Formați</p>
                            </div>
                            <div className="bg-bento rounded-2xl p-6 md:p-8 border border-surface-variant/40 shadow-[0px_20px_50px_rgba(26,26,26,0.10)] text-center group hover:-translate-y-1 transition-all duration-500">
                                <div className="w-11 h-11 rounded-full bg-background flex items-center justify-center text-primary mx-auto mb-4 shadow-sm">
                                    <Award className="w-5 h-5 stroke-[1.5]" />
                                </div>
                                <p className="font-headline text-[36px] md:text-[44px] text-primary leading-none font-medium">15+</p>
                                <p className="font-body text-body-sm text-on-surface-variant mt-2 uppercase tracking-wider font-semibold">Premii & Distincții</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </section>

                {/* The Story Section - Alternate bg-surface-dim (#dadad9) */}
                <motion.section 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.05 }}
                    variants={staggerContainer}
                    className="py-section-gap bg-surface-dim px-margin-mobile md:px-margin-desktop border-b border-surface-variant/40"
                >
                    <div className="max-w-container-max mx-auto space-y-12">
                        <div className="text-center space-y-4">
                            <motion.span variants={fadeIn} className="text-xs font-bold tracking-[0.25em] text-[#3b281f] uppercase block">Moștenirea Noastră</motion.span>
                            <motion.h2 variants={fadeIn} className="font-headline text-headline-lg-mobile md:text-headline-lg text-primary leading-tight">
                                Povestea Noastră
                            </motion.h2>
                        </div>

                        {/* Bento Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                            {/* Text Bento Card */}
                            <motion.div 
                                variants={fadeIn} 
                                className="lg:col-span-7 bg-bento p-8 md:p-12 rounded-3xl border border-surface-variant/40 shadow-[0px_20px_50px_rgba(26,26,26,0.10)] hover:shadow-[0_25px_60px_rgba(26,26,26,0.09)] transition-all duration-500 flex flex-col justify-between space-y-8"
                            >
                                <div className="space-y-6 text-on-surface-variant font-body text-body-md leading-relaxed">
                                    <p>
                                        Fondată din pasiunea pentru perfecțiune și dorința de a eleva standardele industriei de beauty, Monisline reprezintă o simbioză între arta pură și știința estetică. Călătoria noastră a început cu o viziune clară: crearea unui spațiu unde inovația se întâlnește cu tradiția rafinamentului.
                                    </p>
                                    <p className="font-semibold text-primary border-l-2 border-[#3b281f] pl-4">
                                        Angajamentul nostru față de excelență nu este doar o promisiune, ci fundamentul fiecărei interacțiuni, fiecărui curs predat și fiecărui serviciu oferit.
                                    </p>
                                    <p>
                                        Cultivăm un mediu de învățare și practică care inspiră încredere, profesionalism și o estetică a "luxului tăcut". Vă invităm să ne treceți pragul pentru a experimenta designul personalizat și grija absolută pentru detalii.
                                    </p>
                                </div>
                                <div className="pt-4">
                                    <button 
                                        onClick={() => onNavigate("contact")}
                                        className="inline-flex items-center gap-3 bg-[#3b281f] text-white text-xs font-bold tracking-[0.15em] uppercase px-8 py-4 hover:bg-primary transition-all duration-300 shadow-md cursor-pointer"
                                    >
                                        Programează o Vizită <ArrowRight size={14} />
                                    </button>
                                </div>
                            </motion.div>

                            {/* Image Bento Card */}
                            <motion.div 
                                variants={fadeIn}
                                className="lg:col-span-5 aspect-[4/5] lg:aspect-auto bg-surface-container rounded-3xl overflow-hidden shadow-[0px_20px_50px_rgba(26,26,26,0.10)] border border-surface-variant/40 relative group"
                            >
                                <img 
                                    alt="Povestea Monisline" 
                                    className="w-full h-full object-cover filter grayscale-[5%] scale-100 group-hover:scale-[1.03] transition-transform duration-700" 
                                    src="/Placeholder.png"
                                />
                            </motion.div>
                        </div>
                    </div>
                </motion.section>

                {/* The Academy Section - Light Background */}
                <motion.section 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.05 }}
                    variants={staggerContainer}
                    className="py-section-gap bg-white px-margin-mobile md:px-margin-desktop border-b border-surface-variant/40"
                >
                    <div className="max-w-container-max mx-auto space-y-12">
                        <div className="text-center space-y-4">
                            <motion.span variants={fadeIn} className="inline-block px-4 py-1.5 bg-[#1a1a1a]/5 text-[#1a1a1a]/85 font-semibold text-xs tracking-widest uppercase border border-[#1a1a1a]/10 rounded-full">
                                EDUCAȚIE DE ELITĂ
                            </motion.span>
                            <motion.h2 variants={fadeIn} className="font-headline text-headline-lg-mobile md:text-headline-lg text-primary">
                                Academia de Artă &amp; Design
                            </motion.h2>
                        </div>

                        {/* Bento Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                            {/* Image Bento Card */}
                            <motion.div 
                                variants={fadeIn}
                                className="lg:col-span-7 aspect-[16/10] lg:aspect-auto bg-surface-container rounded-3xl overflow-hidden shadow-[0px_20px_50px_rgba(26,26,26,0.10)] border border-surface-variant/40 relative group"
                            >
                                <img 
                                    alt="Monisline Academy" 
                                    className="w-full h-full object-cover filter grayscale-[5%] scale-100 group-hover:scale-[1.02] transition-transform duration-700" 
                                    src="/Placeholder.png"
                                />
                            </motion.div>

                            {/* Text Bento Card */}
                            <motion.div 
                                variants={fadeIn}
                                className="lg:col-span-5 bg-bento p-8 md:p-12 rounded-3xl border border-surface-variant/40 shadow-[0px_20px_50px_rgba(26,26,26,0.10)] hover:shadow-[0_25px_60px_rgba(26,26,26,0.09)] transition-all duration-500 flex flex-col justify-center space-y-6"
                            >
                                <h3 className="font-headline text-headline-md text-primary font-medium leading-tight">Formare Profesională Premium</h3>
                                <p className="font-body text-body-md text-on-surface-variant leading-relaxed">
                                    Programele noastre educaționale sunt concepute pentru a transforma pasiunea în expertiză. Punem accent pe tehnici avansate, precizie milimetrică și dezvoltarea unei viziuni estetice superioare.
                                </p>
                                <div className="pt-2">
                                    <button 
                                        onClick={() => onNavigate("courses")}
                                        className="inline-flex items-center gap-3 bg-[#3b281f] text-white text-xs font-semibold tracking-[0.15em] uppercase px-8 py-4 hover:bg-[#2a1c15] transition-all duration-300 shadow-md cursor-pointer"
                                    >
                                        Explorează Cursurile <ArrowRight size={14} />
                                    </button>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.section>

                {/* Pillars Section - Alternate bg-surface-dim (#dadad9) */}
                <motion.section 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.05 }}
                    variants={staggerContainer}
                    className="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface-dim border-b border-surface-variant/40"
                >
                    <div className="max-w-container-max mx-auto space-y-16">
                        <div className="text-center space-y-4">
                            <motion.span variants={fadeIn} className="text-xs font-bold tracking-[0.25em] text-[#3b281f] uppercase block">Valori de Bază</motion.span>
                            <motion.h2 variants={fadeIn} className="font-headline text-headline-lg-mobile md:text-headline-lg text-primary">
                                Experiență &amp; Excelență
                            </motion.h2>
                        </div>
                        <div className="flex overflow-x-auto gap-6 pb-6 scroll-smooth snap-x md:grid md:grid-cols-3 md:gap-8 md:overflow-visible md:pb-0">
                            {/* Pillar 1 */}
                            <motion.div variants={fadeIn} className="bg-bento p-8 md:p-10 rounded-3xl border border-surface-variant/40 shadow-[0px_20px_50px_rgba(26,26,26,0.10)] hover:shadow-[0_25px_60px_rgba(26,26,26,0.09)] hover:-translate-y-1 transition-all duration-500 snap-center min-w-[280px] sm:min-w-[340px] md:min-w-0">
                                <div className="w-14 h-14 rounded-full bg-background flex items-center justify-center text-primary mb-8 shadow-sm">
                                    <Lightbulb className="w-6 h-6 stroke-[1.5]" />
                                </div>
                                <h3 className="font-headline text-headline-sm text-primary mb-4 font-medium">Inovație Continuă</h3>
                                <p className="font-body text-body-md text-on-surface-variant leading-relaxed">
                                    Adoptăm cele mai noi tehnologii și protocoale internaționale pentru a asigura rezultate excepționale și o experiență de învățare avangardistă.
                                </p>
                            </motion.div>
                            {/* Pillar 2 */}
                            <motion.div variants={fadeIn} className="bg-bento p-8 md:p-10 rounded-3xl border border-surface-variant/40 shadow-[0px_20px_50px_rgba(26,26,26,0.10)] hover:shadow-[0_25px_60px_rgba(26,26,26,0.09)] hover:-translate-y-1 transition-all duration-500 snap-center min-w-[280px] sm:min-w-[340px] md:min-w-0">
                                <div className="w-14 h-14 rounded-full bg-background flex items-center justify-center text-primary mb-8 shadow-sm">
                                    <Paintbrush className="w-6 h-6 stroke-[1.5]" />
                                </div>
                                <h3 className="font-headline text-headline-sm text-primary mb-4 font-medium">Măiestrie Artistică</h3>
                                <p className="font-body text-body-md text-on-surface-variant leading-relaxed">
                                    Fiecare procedură și tehnică este privită ca o formă de artă. Cultivăm un simț estetic rafinat și o atenție obsesivă la detalii.
                                </p>
                            </motion.div>
                            {/* Pillar 3 */}
                            <motion.div variants={fadeIn} className="bg-bento p-8 md:p-10 rounded-3xl border border-surface-variant/40 shadow-[0px_20px_50px_rgba(26,26,26,0.10)] hover:shadow-[0_25px_60px_rgba(26,26,26,0.09)] hover:-translate-y-1 transition-all duration-500 snap-center min-w-[280px] sm:min-w-[340px] md:min-w-0">
                                <div className="w-14 h-14 rounded-full bg-background flex items-center justify-center text-primary mb-8 shadow-sm">
                                    <ShieldCheck className="w-6 h-6 stroke-[1.5]" />
                                </div>
                                <h3 className="font-headline text-headline-sm text-primary mb-4 font-medium">Etică &amp; Integritate</h3>
                                <p className="font-body text-body-md text-on-surface-variant leading-relaxed">
                                    Standardele noastre riguroase de siguranță, igienă și respect față de client reprezintă nucleul filozofiei noastre profesionale.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </motion.section>

                {/* Tech Standards Section - Light Background */}
                <motion.section 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.05 }}
                    variants={staggerContainer}
                    className="py-section-gap px-margin-mobile md:px-margin-desktop bg-background border-b border-surface-variant/40"
                >
                    <div className="max-w-container-max mx-auto space-y-16">
                        <div className="text-center space-y-4">
                            <motion.span variants={fadeIn} className="text-xs font-bold tracking-[0.25em] text-[#3b281f] uppercase block">Tehnologii Avansate</motion.span>
                            <motion.h2 variants={fadeIn} className="font-headline text-headline-lg-mobile md:text-headline-lg text-primary">
                                Standarde și Tehnologie
                            </motion.h2>
                            <motion.p variants={fadeIn} className="font-body text-body-md text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
                                La Monisline, îmbinăm expertiza clinică cu cele mai avansate inovații tehnologice. Utilizăm echipamente de ultimă generație și respectăm protocoale medicale stricte pentru a garanta siguranța și eficiența fiecărei proceduri.
                            </motion.p>
                        </div>
                        
                        <div className="flex overflow-x-auto gap-6 pb-6 scroll-smooth snap-x sm:grid sm:grid-cols-3 sm:gap-12 sm:overflow-visible sm:pb-0 text-center pt-8">
                            {/* Feature 1 */}
                            <motion.div variants={fadeIn} className="flex flex-col items-center group snap-center min-w-[240px] sm:min-w-0">
                                <div className="w-24 h-24 rounded-full bg-bento mb-6 flex items-center justify-center border border-surface-variant/40 shadow-[0px_20px_50px_rgba(26,26,26,0.10)] group-hover:scale-105 transition-transform duration-300">
                                    <Microscope className="text-primary w-8 h-8 stroke-[1.5]" />
                                </div>
                                <h4 className="font-headline text-headline-sm text-primary mb-3 font-medium">Diagnostic Digital</h4>
                                <p className="font-body text-body-sm text-on-surface-variant px-4 leading-relaxed">
                                    Analiză computerizată avansată a pielii și firului de păr pentru tratamente personalizate cu precizie milimetrică.
                                </p>
                            </motion.div>
                            {/* Feature 2 */}
                            <motion.div variants={fadeIn} className="flex flex-col items-center group snap-center min-w-[240px] sm:min-w-0">
                                <div className="w-24 h-24 rounded-full bg-bento mb-6 flex items-center justify-center border border-surface-variant/40 shadow-[0px_20px_50px_rgba(26,26,26,0.10)] group-hover:scale-105 transition-transform duration-300">
                                    <Cpu className="text-primary w-8 h-8 stroke-[1.5]" />
                                </div>
                                <h4 className="font-headline text-headline-sm text-primary mb-3 font-medium">Tehnologie Laser</h4>
                                <p className="font-body text-body-sm text-on-surface-variant px-4 leading-relaxed">
                                    Echipamente de înaltă performanță certificate internațional, optimizate pentru rezultate durabile și confort sporit.
                                </p>
                            </motion.div>
                            {/* Feature 3 */}
                            <motion.div variants={fadeIn} className="flex flex-col items-center group snap-center min-w-[240px] sm:min-w-0">
                                <div className="w-24 h-24 rounded-full bg-bento mb-6 flex items-center justify-center border border-surface-variant/40 shadow-[0px_20px_50px_rgba(26,26,26,0.10)] group-hover:scale-105 transition-transform duration-300">
                                    <Sparkles className="text-primary w-8 h-8 stroke-[1.5]" />
                                </div>
                                <h4 className="font-headline text-headline-sm text-primary mb-3 font-medium">Sterilizare Clinică</h4>
                                <p className="font-body text-body-sm text-on-surface-variant px-4 leading-relaxed">
                                    Protocoale riguroase de igienă de nivel medical, asigurând un mediu steril și sigur pentru fiecare vizită.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </motion.section>

                {/* CTA Section - Alternate bg-surface-dim (#dadad9) */}
                <motion.section 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.05 }}
                    variants={fadeIn}
                    className="bg-surface-dim py-24 px-margin-mobile md:px-margin-desktop border-b border-surface-variant/40"
                >
                    {/* Centered Large Bento Card */}
                    <div className="max-w-4xl mx-auto bg-bento p-8 md:p-16 rounded-3xl border border-surface-variant/40 shadow-[0px_20px_50px_rgba(26,26,26,0.10)] text-center space-y-8">
                        <h2 className="font-headline text-headline-lg-mobile md:text-headline-lg text-primary">
                            Începe Călătoria Monisline
                        </h2>
                        <p className="font-body text-body-md md:text-body-lg text-on-surface-variant leading-relaxed max-w-2xl mx-auto">
                            Fie că îți dorești să îți perfecționezi tehnica sau să beneficiezi de servicii premium, te invităm să descoperi standardul Monisline.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                            <button 
                                onClick={() => onNavigate("services")}
                                className="px-8 py-4 bg-[#3b281f] text-white text-xs font-semibold tracking-[0.15em] uppercase hover:bg-primary transition-colors w-full sm:w-auto shadow-md cursor-pointer"
                            >
                                Explorează Serviciile
                            </button>
                            <button 
                                onClick={() => onNavigate("contact")}
                                className="px-8 py-4 bg-transparent border border-[#3b281f] text-[#3b281f] text-xs font-semibold tracking-[0.15em] uppercase hover:bg-primary hover:text-white hover:border-primary transition-all w-full sm:w-auto cursor-pointer"
                            >
                                Contactează-ne
                            </button>
                        </div>
                    </div>
                </motion.section>
            </main>

            <Footer currentView="about" onNavigate={onNavigate} />
        </div>
    );
}
