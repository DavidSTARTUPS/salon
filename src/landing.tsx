import { motion, type Variants } from "framer-motion";
import { ArrowRight, Flower2, GraduationCap, Clock, Award, Quote } from "lucide-react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Landing({ onNavigate }: { onNavigate: (page: "home" | "courses" | "services" | "contact" | "terms" | "privacy" | "cookies" | "about") => void }) {
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
            <Navbar currentView="home" onNavigate={onNavigate} />

            {/* Hero Section */}
            <section className="relative w-full h-[70vh] md:h-[80vh] min-h-[500px] md:min-h-[600px] flex flex-row group overflow-hidden bg-[#f4efe8]">
                {/* Left Image */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="w-1/2 h-full bg-cover bg-center opacity-80 transition-all duration-700"
                    style={{ backgroundImage: "url('/hero-left.png')" }}
                />
                {/* Right Image */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="w-1/2 h-full bg-cover bg-center opacity-80 transition-all duration-700"
                    style={{ backgroundImage: "url('/hero-right.png')" }}
                />

                {/* Hero Content Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 md:p-6">
                    {/* Radial gradient halo for text readability */}
                    <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                            background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(244,239,232,0.45) 0%, rgba(244,239,232,0.15) 40%, transparent 70%)",
                        }}
                    />
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="max-w-3xl mx-4 text-[#1a1a1a] relative z-10"
                    >
                        <p
                            className="text-xs md:text-sm mb-4 md:mb-2 font-medium tracking-[0.1em] uppercase"
                            style={{ textShadow: "0 0 12px rgba(244,239,232,0.8), 0 0 24px rgba(244,239,232,0.5)" }}
                        >
                            The Art of Hair [ Redefined ]
                        </p>
                        <h1
                            className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 md:mb-8 tracking-tight leading-[1.1]"
                            style={{
                                fontFamily: "'Montserrat', sans-serif",
                                textShadow: "0 0 16px rgba(244,239,232,0.9), 0 1px 2px rgba(244,239,232,0.6)",
                            }}
                        >
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

            {/* Dual Purpose Section */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.05 }}
                variants={staggerContainer}
                className="py-section-gap bg-surface-dim px-margin-mobile md:px-margin-desktop"
            >
                <div className="max-w-container-max mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-[80px] items-center">
                        <motion.div variants={fadeIn} className="space-y-6">
                            <h2 className="font-headline font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary">
                                Două Lumi, Un Singur Standard al Excelenței
                            </h2>
                            <p className="font-body text-body-lg text-on-surface-variant leading-relaxed">
                                Monisline își desfășoară activitatea la cel mai înalt nivel al industriei frumuseții, îmbinând perfect un salon de elită dedicat clienților cu o academie profesională de renume. Fie că ești în căutarea unui serviciu personal transformator sau dorești să-ți perfecționezi măiestria profesională, ai ajuns la destinația supremă pentru eleganța modernă.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-6 pt-4">
                                <div className="flex items-start gap-4">
                                    <Flower2 className="w-7 h-7 text-on-surface-variant stroke-[1.5]" />
                                    <div>
                                        <h4 className="font-headline text-[20px] text-primary mb-2 font-medium">Salon Premium</h4>
                                        <p className="font-body text-body-sm text-on-surface-variant">Tratamente personalizate, adaptate eleganței tale unice.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <GraduationCap className="w-7 h-7 text-on-surface-variant stroke-[1.5]" />
                                    <div>
                                        <h4 className="font-headline text-[20px] text-primary mb-2 font-medium">Pregătire de Elită</h4>
                                        <p className="font-body text-body-sm text-on-surface-variant">Curricule riguroase pentru viitoarea generație de maeștri.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            variants={fadeIn}
                            className="relative h-[500px] rounded-xl overflow-hidden shadow-[0_20px_40px_rgba(26,26,26,0.08)]"
                        >
                            <img
                                alt="Interior Salon Monisline"
                                className="w-full h-full object-cover filter grayscale-[15%]"
                                src="/Placeholder.png"
                            />
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* Services Spotlight */}
            <motion.section
                id="servicii"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.05 }}
                variants={staggerContainer}
                className="py-section-gap bg-white px-margin-mobile md:px-margin-desktop"
            >
                <div className="max-w-container-max mx-auto">
                    <div className="text-center mb-element-gap md:mb-[80px]">
                        <p className="text-xs md:text-sm mb-2 font-medium tracking-widest text-on-tertiary-fixed-variant uppercase">[ Serviciile Noastre ]</p>
                        <h2 className="font-headline font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary">
                            Servicii de Semnătură
                        </h2>
                        <p className="font-body text-body-lg text-on-surface-variant max-w-2xl mx-auto mt-4">
                            Experimentează atenția meticuloasă și arta desăvârșită în mediul nostru liniștit și minimalist.
                        </p>
                    </div>
                    <div className="flex overflow-x-auto gap-6 pb-6 scroll-smooth snap-x md:grid md:grid-cols-3 md:gap-gutter md:overflow-visible md:pb-0">
                        {/* Service 1 */}
                        <motion.div variants={fadeIn} className="group cursor-pointer bg-bento p-6 rounded-2xl border border-surface-variant/40 shadow-[0_10px_35px_rgba(26,26,26,0.10)] hover:shadow-[0_20px_45px_rgba(26,26,26,0.09)] transition-all duration-500 flex flex-col justify-between snap-center min-w-[290px] sm:min-w-[340px] md:min-w-0">
                            <div>
                                <div className="relative h-[220px] md:h-[320px] mb-6 rounded-xl overflow-hidden">
                                    <img
                                        alt="Arta Părului"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        src="/Placeholder.png"
                                    />
                                    <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/0 transition-colors duration-500"></div>
                                </div>
                                <h3 className="font-headline text-[24px] text-primary mb-3 font-medium">Arta Părului</h3>
                                <p className="font-body text-body-md text-on-surface-variant mb-6 leading-relaxed">
                                    Tuns de precizie, coafură structurală și formule avansate de culoare adaptate personalității tale.
                                </p>
                            </div>
                            <div className="pt-2">
                                <a href="#contact" className="inline-block w-full text-center font-label-md text-label-md text-primary bg-surface-container-low py-3 rounded-lg hover:bg-surface-variant transition-colors">
                                    Programează-te
                                </a>
                            </div>
                        </motion.div>
                        {/* Service 2 */}
                        <motion.div variants={fadeIn} className="group cursor-pointer bg-bento p-6 rounded-2xl border border-surface-variant/40 shadow-[0_10px_35px_rgba(26,26,26,0.10)] hover:shadow-[0_20px_45px_rgba(26,26,26,0.09)] transition-all duration-500 flex flex-col justify-between snap-center min-w-[290px] sm:min-w-[340px] md:min-w-0">
                            <div>
                                <div className="relative h-[220px] md:h-[320px] mb-6 rounded-xl overflow-hidden">
                                    <img
                                        alt="Ritual SPA"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        src="/Placeholder.png"
                                    />
                                    <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/0 transition-colors duration-500"></div>
                                </div>
                                <h3 className="font-headline text-[24px] text-primary mb-3 font-medium">Ritual SPA</h3>
                                <p className="font-body text-body-md text-on-surface-variant mb-6 leading-relaxed">
                                    Tratamente faciale restaurative de hidratare profundă și terapii holistice de îngrijire a pielii.
                                </p>
                            </div>
                            <div className="pt-2">
                                <a href="#contact" className="inline-block w-full text-center font-label-md text-label-md text-primary bg-surface-container-low py-3 rounded-lg hover:bg-surface-variant transition-colors">
                                    Programează-te
                                </a>
                            </div>
                        </motion.div>
                        {/* Service 3 */}
                        <motion.div variants={fadeIn} className="group cursor-pointer bg-bento p-6 rounded-2xl border border-surface-variant/40 shadow-[0_10px_35px_rgba(26,26,26,0.10)] hover:shadow-[0_20px_45px_rgba(26,26,26,0.09)] transition-all duration-500 flex flex-col justify-between snap-center min-w-[290px] sm:min-w-[340px] md:min-w-0">
                            <div>
                                <div className="relative h-[220px] md:h-[320px] mb-6 rounded-xl overflow-hidden">
                                    <img
                                        alt="Îngrijirea Unghiilor"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        src="/Placeholder.png"
                                    />
                                    <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/0 transition-colors duration-500"></div>
                                </div>
                                <h3 className="font-headline text-[24px] text-primary mb-3 font-medium">Îngrijirea Unghiilor</h3>
                                <p className="font-body text-body-md text-on-surface-variant mb-6 leading-relaxed">
                                    Manichiură minimalistă cu gel slim, reconstrucție, curarea sănătății unghiilor și detalii artistice subtile.
                                </p>
                            </div>
                            <div className="pt-2">
                                <a href="#contact" className="inline-block w-full text-center font-label-md text-label-md text-primary bg-surface-container-low py-3 rounded-lg hover:bg-surface-variant transition-colors">
                                    Programează-te
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* Academy Overview (Bento Grid) */}
            <motion.section
                id="academia"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.05 }}
                variants={staggerContainer}
                className="py-section-gap bg-surface-dim px-margin-mobile md:px-margin-desktop"
            >
                <div className="max-w-container-max mx-auto">
                    <div className="text-center mb-element-gap md:mb-[80px]">
                        <p className="text-xs md:text-sm mb-2 font-medium tracking-widest text-on-tertiary-fixed-variant uppercase">[ Educație Profesională ]</p>
                        <h2 className="font-headline font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary">
                            Academia Monisline
                        </h2>
                        <p className="font-body text-body-lg text-on-surface-variant max-w-2xl mx-auto mt-4">
                            Cultivăm viitoarea generație de stiliști vizionari și curatori de frumusețe prin programe intensive, axate pe tehnici de precizie.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter auto-rows-[300px] md:auto-rows-[400px]">
                        {/* Large Feature Card */}
                        <motion.div variants={fadeIn} className="md:col-span-8 relative rounded-xl overflow-hidden group">
                            <img
                                alt="Diplomă de Masterat"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale-[10%]"
                                src="/Placeholder.png"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-8 w-full">
                                <span className="inline-block px-3 py-1 bg-surface-container-lowest/20 backdrop-blur-sm rounded-full font-label-md text-label-md text-on-secondary mb-4 border border-on-secondary/30">
                                    Program Intensiv
                                </span>
                                <h3 className="font-headline text-headline-md text-on-primary mb-2">Diplome de Masterat</h3>
                                <p className="font-body text-body-md text-surface-variant max-w-md hidden md:block mb-4">
                                    O călătorie cuprinzătoare de 12 săptămâni pentru stăpânirea tehnicilor avansate de tuns, teoria culorilor și stilul editorial.
                                </p>
                                <button onClick={() => { onNavigate("courses"); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="inline-block bg-surface-container-lowest text-primary font-label-md text-label-md px-6 py-2 rounded hover:bg-surface-variant transition-colors mt-2 cursor-pointer">
                                    Înscrie-te Acum
                                </button>
                            </div>
                        </motion.div>
                        {/* Small Info Card */}
                        <motion.div variants={fadeIn} className="md:col-span-4 bg-[#efe0cd] border border-[#efe0cd]/60 shadow-[0_10px_35px_rgba(26,26,26,0.10)] hover:shadow-[0_20px_45px_rgba(26,26,26,0.09)] transition-all duration-500 rounded-2xl p-8 flex flex-col justify-between">
                            <div>
                                <Clock className="w-10 h-10 text-on-tertiary-fixed-variant mb-6 stroke-[1.5]" />
                                <h3 className="font-headline text-headline-sm text-primary mb-2">Cursuri Scurte</h3>
                                <p className="font-body text-body-md text-on-surface-variant">
                                    Workshop-uri intense de 2 zile concentrate pe tehnici de trend specifice și perfecționarea abilităților pentru specialiști activi.
                                </p>
                            </div>
                            <button onClick={() => { onNavigate("courses"); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="font-label-md text-label-md text-primary mt-6 inline-flex items-center gap-2 group hover:opacity-85 transition-opacity cursor-pointer">
                                Explorează Programul
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </motion.div>
                        {/* Small Info Card 2 */}
                        <motion.div variants={fadeIn} className="md:col-span-5 bg-bento border border-surface-variant/40 shadow-[0_10px_35px_rgba(26,26,26,0.10)] hover:shadow-[0_20px_45px_rgba(26,26,26,0.09)] transition-all duration-500 rounded-2xl p-8 flex flex-col justify-between">
                            <div>
                                <Award className="w-10 h-10 text-on-surface-variant mb-6 stroke-[1.5]" />
                                <h3 className="font-headline text-headline-sm text-primary mb-2">Certificare în Industrie</h3>
                                <p className="font-body text-body-md text-on-surface-variant">
                                    Absolvenții primesc o certificare recunoscută internațional, deschizând porțile către saloane de lux și proiecte de reviste / editoriale.
                                </p>
                            </div>
                            <div className="flex gap-2 flex-wrap mt-4">
                                <span className="px-3 py-1 bg-surface-container-low rounded-full font-label-md text-label-md text-on-surface-variant">Nivel I</span>
                                <span className="px-3 py-1 bg-surface-container-low rounded-full font-label-md text-label-md text-on-surface-variant">Nivel II</span>
                                <span className="px-3 py-1 bg-surface-container-low rounded-full font-label-md text-label-md text-on-surface-variant">Master</span>
                            </div>
                        </motion.div>
                        {/* Image Card */}
                        <motion.div variants={fadeIn} className="md:col-span-7 relative rounded-xl overflow-hidden group">
                            <img
                                alt="Student la Academia Monisline"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                src="/Placeholder.png"
                            />
                            <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/0 transition-colors duration-500"></div>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* Meet the Experts */}
            <motion.section
                id="echipa"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.05 }}
                variants={staggerContainer}
                className="py-section-gap bg-white px-margin-mobile md:px-margin-desktop"
            >
                <div className="max-w-container-max mx-auto">
                    <div className="text-center mb-element-gap md:mb-[80px]">
                        <p className="text-xs md:text-sm mb-2 font-medium tracking-widest text-on-tertiary-fixed-variant uppercase">[ Maeștri Stiliști &amp; Educatori ]</p>
                        <h2 className="font-headline font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary">
                            Echipa Noastră de Elită
                        </h2>
                        <p className="font-body text-body-lg text-on-surface-variant max-w-2xl mx-auto mt-4">
                            Învață de la și lasă-te stilat de cei mai apreciați profesioniști din domeniu.
                        </p>
                    </div>
                    <div className="flex overflow-x-auto gap-6 pb-6 scroll-smooth snap-x md:grid md:grid-cols-4 md:gap-gutter md:overflow-visible md:pb-0">
                        {/* Expert 1 */}
                        <motion.div variants={fadeIn} className="bg-bento p-6 rounded-2xl border border-surface-variant/40 shadow-[0_10px_35px_rgba(26,26,26,0.10)] text-center flex flex-col justify-between hover:shadow-[0_20px_45px_rgba(26,26,26,0.09)] transition-all duration-500 snap-center min-w-[260px] md:min-w-0">
                            <div>
                                <div className="w-full aspect-square mb-6 rounded-xl overflow-hidden">
                                    <img
                                        alt="Flori Monis"
                                        className="w-full h-full object-cover filter grayscale-[10%]"
                                        src="/Placeholder.png"
                                    />
                                </div>
                                <h4 className="font-headline text-[22px] text-primary font-medium">Flori Monis</h4>
                                <p className="font-label-md text-label-md text-on-tertiary-fixed-variant my-2 uppercase tracking-wider font-semibold">Creative Director &amp; Fondator</p>
                                <p className="font-body text-body-sm text-on-surface-variant leading-relaxed px-2">
                                    Specializată în transformări spectaculoase ale părului, coloristică avansată și stil structural.
                                </p>
                            </div>
                        </motion.div>
                        {/* Expert 2 */}
                        <motion.div variants={fadeIn} className="bg-bento p-6 rounded-2xl border border-surface-variant/40 shadow-[0_10px_35px_rgba(26,26,26,0.10)] text-center flex flex-col justify-between hover:shadow-[0_20px_45px_rgba(26,26,26,0.09)] transition-all duration-500 snap-center min-w-[260px] md:min-w-0">
                            <div>
                                <div className="w-full aspect-square mb-6 rounded-xl overflow-hidden">
                                    <img
                                        alt="Vera"
                                        className="w-full h-full object-cover filter grayscale-[10%]"
                                        src="/Placeholder.png"
                                    />
                                </div>
                                <h4 className="font-headline text-[22px] text-primary font-medium">Vera</h4>
                                <p className="font-label-md text-label-md text-on-tertiary-fixed-variant my-2 uppercase tracking-wider font-semibold">Lead Nail Artist &amp; Educator</p>
                                <p className="font-body text-body-sm text-on-surface-variant leading-relaxed px-2">
                                    Maestră a manichiurii minimaliste, curării sănătății unghiilor și detaliilor artistice fine, pictate manual.
                                </p>
                            </div>
                        </motion.div>
                        {/* Expert 3 */}
                        <motion.div variants={fadeIn} className="bg-bento p-6 rounded-2xl border border-surface-variant/40 shadow-[0_10px_35px_rgba(26,26,26,0.10)] text-center flex flex-col justify-between hover:shadow-[0_20px_45px_rgba(26,26,26,0.09)] transition-all duration-500 snap-center min-w-[260px] md:min-w-0">
                            <div>
                                <div className="w-full aspect-square mb-6 rounded-xl overflow-hidden">
                                    <img
                                        alt="Elena Rostova"
                                        className="w-full h-full object-cover filter grayscale-[10%]"
                                        src="/Placeholder.png"
                                    />
                                </div>
                                <h4 className="font-headline text-[22px] text-primary font-medium">Elena Rostova</h4>
                                <p className="font-label-md text-label-md text-on-tertiary-fixed-variant my-2 uppercase tracking-wider font-semibold">Director Academie</p>
                                <p className="font-body text-body-sm text-on-surface-variant leading-relaxed px-2">
                                    Ghidează noua generație de stiliști cu o rigoare tehnică desăvârșită și o viziune artistică modernă.
                                </p>
                            </div>
                        </motion.div>
                        {/* Expert 4 */}
                        <motion.div variants={fadeIn} className="bg-bento p-6 rounded-2xl border border-surface-variant/40 shadow-[0_10px_35px_rgba(26,26,26,0.10)] text-center flex flex-col justify-between hover:shadow-[0_20px_45px_rgba(26,26,26,0.09)] transition-all duration-500 snap-center min-w-[260px] md:min-w-0">
                            <div>
                                <div className="w-full aspect-square mb-6 rounded-xl overflow-hidden">
                                    <img
                                        alt="Marcus Thorne"
                                        className="w-full h-full object-cover filter grayscale-[10%]"
                                        src="/Placeholder.png"
                                    />
                                </div>
                                <h4 className="font-headline text-[22px] text-primary font-medium">Marcus Thorne</h4>
                                <p className="font-label-md text-label-md text-on-tertiary-fixed-variant my-2 uppercase tracking-wider font-semibold">Specialist Textură &amp; Tuns</p>
                                <p className="font-body text-body-sm text-on-surface-variant leading-relaxed px-2">
                                    Recunoscut la nivel internațional pentru tăieturi arhitecturale ce pun în valoare textura naturală a părului.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* Client Praise */}
            <motion.section
                id="testimoniale"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.05 }}
                variants={staggerContainer}
                className="py-section-gap bg-surface-dim px-margin-mobile md:px-margin-desktop"
            >
                <div className="max-w-container-max mx-auto">
                    <div className="text-center mb-element-gap md:mb-[80px]">
                        <p className="text-xs md:text-sm mb-2 font-medium tracking-widest text-on-tertiary-fixed-variant uppercase">[ Recenzii Clienți ]</p>
                        <h2 className="font-headline font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary">
                            Vocile Excelenței
                        </h2>
                        <p className="font-body text-body-lg text-on-surface-variant max-w-2xl mx-auto mt-4">
                            Gânduri din partea celor care au experimentat standardul Monisline.
                        </p>
                    </div>
                    <div className="flex overflow-x-auto gap-6 pb-6 scroll-smooth snap-x md:grid md:grid-cols-3 md:gap-[30px] md:overflow-visible md:pb-0">
                        {/* Testimonial 1 */}
                        <motion.div
                            variants={fadeIn}
                            className="p-8 border border-surface-variant/40 rounded-2xl bg-bento flex flex-col justify-between relative shadow-[0_10px_35px_rgba(26,26,26,0.10)] hover:shadow-[0_20px_45px_rgba(26,26,26,0.09)] transition-all duration-500 snap-center min-w-[290px] sm:min-w-[340px] md:min-w-0"
                        >
                            <div>
                                <Quote className="w-10 h-10 text-[#efe0cd] mb-6 stroke-[1.5]" />
                                <p className="font-body text-body-lg text-on-surface mb-6 italic leading-relaxed">
                                    "Am venit la Flori pentru un balayage după ce părul meu fusese deteriorat în altă parte. Ce a reușit să facă este pură artă! Nuanța este extrem de naturală, iar părul strălucește și se simte atât de fin."
                                </p>
                            </div>
                            <div className="border-t border-surface-container/60 pt-4">
                                <p className="font-headline text-[18px] text-primary font-medium">Andreea Marin</p>
                                <p className="font-label-md text-label-md text-on-surface-variant mt-1 uppercase tracking-wider font-semibold">Clientă Fidelă • Vopsit Balayage</p>
                            </div>
                        </motion.div>

                        {/* Testimonial 2 */}
                        <motion.div
                            variants={fadeIn}
                            className="p-8 border border-surface-variant/40 rounded-2xl bg-bento flex flex-col justify-between relative shadow-[0_10px_35px_rgba(26,26,26,0.10)] hover:shadow-[0_20px_45px_rgba(26,26,26,0.09)] transition-all duration-500 snap-center min-w-[290px] sm:min-w-[340px] md:min-w-0"
                        >
                            <div>
                                <Quote className="w-10 h-10 text-[#efe0cd] mb-6 stroke-[1.5]" />
                                <p className="font-body text-body-lg text-on-surface mb-6 italic leading-relaxed">
                                    "De fiecare dată când vin la Monisline plec simțindu-mă spectaculos. Echipa este minunată, atmosfera este caldă și relaxantă, iar produsele folosite sunt clar premium. Tăietura de precizie a rezistat perfect."
                                </p>
                            </div>
                            <div className="border-t border-surface-container/60 pt-4">
                                <p className="font-headline text-[18px] text-primary font-medium">Raluca Popescu</p>
                                <p className="font-label-md text-label-md text-on-surface-variant mt-1 uppercase tracking-wider font-semibold">Clientă Fidelă • Tuns &amp; Coafat</p>
                            </div>
                        </motion.div>

                        {/* Testimonial 3 */}
                        <motion.div
                            variants={fadeIn}
                            className="p-8 border border-surface-variant/40 rounded-2xl bg-bento flex flex-col justify-between relative shadow-[0_10px_35px_rgba(26,26,26,0.10)] hover:shadow-[0_20px_45px_rgba(26,26,26,0.09)] transition-all duration-500 snap-center min-w-[290px] sm:min-w-[340px] md:min-w-0"
                        >
                            <div>
                                <Quote className="w-10 h-10 text-[#efe0cd] mb-6 stroke-[1.5]" />
                                <p className="font-body text-body-lg text-on-surface mb-6 italic leading-relaxed">
                                    "Vera este absolut genială la nail art! Unghiile mele n-au arătat niciodată atât de subțiri, naturale și îngrijite. Iar designul pe care l-a pictat manual a atras doar complimente. Recomand!"
                                </p>
                            </div>
                            <div className="border-t border-surface-container/60 pt-4">
                                <p className="font-headline text-[18px] text-primary font-medium">Simona Ionescu</p>
                                <p className="font-label-md text-label-md text-on-surface-variant mt-1 uppercase tracking-wider font-semibold">Clientă Fidelă • Manichiură Slim &amp; Nail Art</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* Unified Contact Section */}
            <section id="contact" className="bg-white w-full border-t border-surface-variant pt-20 pb-20">
                <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Column: Contact Info */}
                    <div className="space-y-8">
                        <div>
                            <p className="text-xs md:text-sm mb-2 font-medium tracking-widest text-on-tertiary-fixed-variant uppercase">[ Contact &amp; Locație ]</p>
                            <h2 className="font-headline text-4xl md:text-5xl font-bold uppercase text-primary leading-tight">
                                Unde Ne Găsești
                            </h2>
                        </div>
                        <div className="space-y-6 text-[#1a1c1c]/90">
                            <div>
                                <p className="text-xs uppercase tracking-wider text-on-surface-variant mb-1 font-semibold">Adresă Salon</p>
                                <p className="text-lg text-primary font-medium">Strada General Andrei Popovici, 011721 București</p>
                            </div>
                            <div>
                                <p className="text-xs uppercase tracking-wider text-on-surface-variant mb-1 font-semibold">Telefon / Rezervări</p>
                                <a href="tel:0723347089" className="text-lg text-primary tracking-wider font-medium hover:text-on-tertiary-fixed-variant transition-colors">
                                    0723 347 089
                                </a>
                            </div>
                            <div>
                                <p className="text-xs uppercase tracking-wider text-on-surface-variant mb-1 font-semibold">Program</p>
                                <p className="text-primary font-medium">Luni - Sâmbătă: 09:00 - 20:00</p>
                                <p className="text-primary font-medium">Duminică: Închis</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Colored Map */}
                    <div className="w-full h-[350px] md:h-[400px] relative overflow-hidden rounded-xl border border-surface-variant shadow-md">
                        <iframe
                            src="https://maps.google.com/maps?q=Strada%20General%20Andrei%20Popovici%20Bucuresti&t=&z=16&ie=UTF8&iwloc=&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="w-full h-full filter grayscale-[10%] contrast-[1.1]"
                        ></iframe>
                    </div>
                </div>
            </section>

            <Footer currentView="home" onNavigate={onNavigate} />
        </div>
    );
}