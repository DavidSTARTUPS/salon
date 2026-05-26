import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { MapPin, Mail, Phone, Clock, PhoneCall } from "lucide-react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

interface ContactProps {
    onNavigate: (page: "home" | "courses" | "services" | "contact" | "terms" | "privacy" | "cookies" | "about") => void;
}

export default function Contact({ onNavigate }: ContactProps) {
    const [formData, setFormData] = useState({
        nume: "",
        email: "",
        telefon: "",
        mesaj: ""
    });
    const [submitted, setSubmitted] = useState(false);

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

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            setFormData({ nume: "", email: "", telefon: "", mesaj: "" });
        }, 3000);
    };

    return (
        <div className="min-h-screen bg-white text-on-background selection:bg-secondary-container selection:text-on-secondary-container" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            <Navbar currentView="contact" onNavigate={onNavigate} />

            <main>
                {/* Hero Section */}
                <section className="relative min-h-[50vh] flex items-center justify-center pt-24 pb-section-gap px-gutter text-center overflow-hidden bg-[#e5dac6]">
                    <div className="absolute inset-0 z-0">
                        <img
                            alt="Monisline Contact Hero"
                            className="w-full h-full object-cover opacity-50 filter grayscale-[10%]"
                            src="/Placeholder.png"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-[#e5dac6]/30 to-[#e5dac6]"></div>
                    </div>
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                        className="relative z-10 max-w-3xl mx-auto px-6"
                    >
                        <motion.h1 variants={fadeIn} className="font-headline text-headline-lg-mobile md:text-display-lg text-primary mb-6">
                            Contactează Monisline
                        </motion.h1>
                        <motion.p variants={fadeIn} className="font-body text-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
                            Suntem aici pentru a vă răspunde la orice întrebare și a vă ghida în călătoria dumneavoastră spre excelență în frumusețe.
                        </motion.p>
                    </motion.div>
                </section>

                {/* Main Contact Layout */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.05 }}
                    variants={staggerContainer}
                    className="py-section-gap px-gutter bg-surface-dim"
                >
                    <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
                        {/* Contact Form (Left) */}
                        <motion.div variants={fadeIn} className="col-span-12 lg:col-span-7 bg-bento p-8 md:p-12 border border-[#1a1a1a]/10 rounded-2xl shadow-[0_25px_60px_rgba(26,26,26,0.08)] hover:shadow-[0_35px_70px_rgba(26,26,26,0.15)] transition-all duration-500">
                            <h2 className="font-headline text-headline-md text-primary mb-8">Trimite un mesaj</h2>
                            {submitted ? (
                                <div className="bg-emerald-50 text-emerald-800 p-6 rounded-lg border border-emerald-200 font-body text-sm">
                                    Mesajul a fost trimis cu succes! Vă vom contacta în cel mai scurt timp posibil.
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label htmlFor="nume" className="block text-xs font-semibold uppercase tracking-wider text-on-surface-variant mb-2">
                                            Nume Complet
                                        </label>
                                        <input
                                            id="nume"
                                            name="nume"
                                            type="text"
                                            required
                                            value={formData.nume}
                                            onChange={(e) => setFormData({ ...formData, nume: e.target.value })}
                                            className="w-full bg-white/80 border border-[#1a1a1a]/15 rounded-lg px-4 py-3 font-body text-sm text-primary focus:ring-1 focus:ring-[#3b281f] focus:border-[#3b281f] outline-none transition-all"
                                            placeholder="Numele tău complet"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-on-surface-variant mb-2">
                                            Email
                                        </label>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full bg-white/80 border border-[#1a1a1a]/15 rounded-lg px-4 py-3 font-body text-sm text-primary focus:ring-1 focus:ring-[#3b281f] focus:border-[#3b281f] outline-none transition-all"
                                            placeholder="exemplu@mail.com"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="telefon" className="block text-xs font-semibold uppercase tracking-wider text-on-surface-variant mb-2">
                                            Număr de Telefon
                                        </label>
                                        <input
                                            id="telefon"
                                            name="telefon"
                                            type="tel"
                                            value={formData.telefon}
                                            onChange={(e) => setFormData({ ...formData, telefon: e.target.value })}
                                            className="w-full bg-white/80 border border-[#1a1a1a]/15 rounded-lg px-4 py-3 font-body text-sm text-primary focus:ring-1 focus:ring-[#3b281f] focus:border-[#3b281f] outline-none transition-all"
                                            placeholder="+40 7xx xxx xxx"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="mesaj" className="block text-xs font-semibold uppercase tracking-wider text-on-surface-variant mb-2">
                                            Mesaj
                                        </label>
                                        <textarea
                                            id="mesaj"
                                            name="mesaj"
                                            required
                                            rows={4}
                                            value={formData.mesaj}
                                            onChange={(e) => setFormData({ ...formData, mesaj: e.target.value })}
                                            className="w-full bg-white/80 border border-[#1a1a1a]/15 rounded-lg px-4 py-3 font-body text-sm text-primary focus:ring-1 focus:ring-[#3b281f] focus:border-[#3b281f] outline-none transition-all resize-none"
                                            placeholder="Cum te putem ajuta?"
                                        ></textarea>
                                    </div>
                                    <button
                                        className="inline-flex items-center justify-center font-label-md text-xs tracking-widest uppercase text-white bg-primary px-8 py-4 hover:bg-neutral-800 transition-colors duration-300 w-full sm:w-auto cursor-pointer shadow-md font-semibold"
                                        type="submit"
                                    >
                                        Trimite Mesajul
                                    </button>
                                </form>
                            )}
                        </motion.div>

                        {/* Contact Details (Right) */}
                        <motion.div variants={fadeIn} className="col-span-12 lg:col-span-5 bg-bento p-8 md:p-12 border border-[#1a1a1a]/10 rounded-2xl shadow-[0_25px_60px_rgba(26,26,26,0.08)] hover:shadow-[0_35px_70px_rgba(26,26,26,0.15)] transition-all duration-500 flex flex-col justify-center">
                            <h3 className="font-headline text-headline-sm text-primary mb-8">Informații de Contact</h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4 pb-6 border-b border-primary/10">
                                    <MapPin className="w-5 h-5 text-secondary stroke-[2] mt-0.5" />
                                    <div>
                                        <p className="font-label-sm text-xs font-semibold text-secondary tracking-widest uppercase mb-1">Adresă</p>
                                        <p className="font-body text-body-md text-primary leading-relaxed">
                                            Strada Frumuseții, Nr. 10,<br />București
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 pb-6 border-b border-primary/10">
                                    <Mail className="w-5 h-5 text-secondary stroke-[2] mt-0.5" />
                                    <div>
                                        <p className="font-label-sm text-xs font-semibold text-secondary tracking-widest uppercase mb-1">Email</p>
                                        <a className="font-body text-body-md text-primary hover:text-neutral-500 transition-colors" href="mailto:contact@monisline.ro">
                                            contact@monisline.ro
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 pb-6 border-b border-primary/10">
                                    <Phone className="w-5 h-5 text-secondary stroke-[2] mt-0.5" />
                                    <div>
                                        <p className="font-label-sm text-xs font-semibold text-secondary tracking-widest uppercase mb-1">Telefon</p>
                                        <a className="font-body text-body-md text-primary hover:text-neutral-500 transition-colors" href="tel:+40700000000">
                                            +40 7xx xxx xxx
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <Clock className="w-5 h-5 text-secondary stroke-[2] mt-0.5" />
                                    <div>
                                        <p className="font-label-sm text-xs font-semibold text-secondary tracking-widest uppercase mb-1">Program</p>
                                        <p className="font-body text-body-md text-primary leading-relaxed">
                                            Luni - Vineri: 09:00 - 19:00<br />
                                            Sâmbătă: 10:00 - 15:00<br />
                                            Duminică: Închis
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.section>

                {/* Urgent Call Section */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.05 }}
                    variants={staggerContainer}
                    className="bg-white py-section-gap px-gutter text-center border-t border-surface-variant/40"
                >
                    <motion.div variants={fadeIn} className="max-w-3xl mx-auto flex flex-col items-center">
                        <PhoneCall className="w-16 h-16 text-secondary mb-6 stroke-[1.5]" />
                        <h2 className="font-headline text-headline-lg-mobile md:text-headline-lg text-primary mb-4">
                            Aveți nevoie de asistență imediată?
                        </h2>
                        <p className="font-body text-body-lg text-on-surface-variant mb-8 max-w-xl leading-relaxed">
                            Pentru programări urgente sau clarificări rapide, vă stăm la dispoziție telefonic în timpul orelor de program.
                        </p>
                        <a
                            className="inline-flex items-center justify-center font-label-md text-xs tracking-widest uppercase text-[#1a1a1a] border border-[#1a1a1a] px-8 py-4 hover:bg-[#1a1a1a] hover:text-white transition-all duration-300 font-semibold cursor-pointer"
                            href="tel:+40700000000"
                        >
                            Sunați Acum
                        </a>
                    </motion.div>
                </motion.section>
            </main>

            <Footer currentView="contact" onNavigate={onNavigate} />
        </div>
    );
}
