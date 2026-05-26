import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

interface TermsProps {
    onNavigate: (page: "home" | "courses" | "services" | "contact" | "terms" | "privacy" | "cookies" | "about") => void;
}

export default function Terms({ onNavigate }: TermsProps) {
    return (
        <div className="min-h-screen bg-white text-[#1a1a1a]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            <Navbar currentView="contact" onNavigate={onNavigate as any} />

            <main className="pt-32 pb-24 px-6 md:px-margin-desktop max-w-4xl mx-auto">
                <h1 className="font-headline text-4xl md:text-5xl text-primary mb-4 text-center">
                    Termeni și Condiții
                </h1>
                <p className="text-xs text-on-surface-variant tracking-wider uppercase text-center mb-12">
                    Ultima actualizare: Mai 2026
                </p>

                <div className="space-y-8 font-body text-[#1a1a1a]/95 text-sm md:text-base leading-relaxed">
                    <section>
                        <h2 className="font-headline text-2xl text-primary mb-3">1. Introducere</h2>
                        <p>
                            Bun venit pe site-ul Monisline (monisline.ro), administrat de MONISLINE BEAUTY ACADEMY S.R.L. Prin utilizarea acestui website, a serviciilor oferite în cadrul salonului nostru sau prin înscrierea la cursurile organizate de academie, sunteți de acord cu prezentele termene și condiții în totalitate. Dacă nu sunteți de acord cu oricare dintre aceste prevederi, vă rugăm să nu utilizați serviciile noastre.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-headline text-2xl text-primary mb-3">2. Servicii și Programări</h2>
                        <p>
                            Serviciile noastre de salon includ servicii de coafură, coloristică avansată, tratamente capilare, manichiură, pedichiură și cosmetică. Toate programările efectuate online, telefonic sau direct la recepție sunt supuse confirmării din partea personalului Monisline.
                        </p>
                        <p className="mt-2">
                            Vă recomandăm să ajungeți cu cel puțin 10 minute înainte de ora programată. Întârzierea mai mare de 15 minute poate atrage anularea programării sau reducerea timpului alocat serviciului, tariful complet rămânând aplicabil.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-headline text-2xl text-primary mb-3">3. Politica de Anulare</h2>
                        <p>
                            Pentru a asigura o bună funcționare a salonului și respectul față de timpul stiliștilor noștri, anularea sau reprogramarea unui serviciu trebuie efectuată cu cel puțin 24 de ore înainte de ora stabilită. În cazul neprezentării repetate fără notificare prealabilă, Monisline își rezervă dreptul de a refuza programările viitoare sau de a solicita plata în avans.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-headline text-2xl text-primary mb-3">4. Cursuri și Înscrieri Academie</h2>
                        <p>
                            Înscrierea la cursurile Monisline Academy se face în limita locurilor disponibile și este considerată validă doar după achitarea avansului sau a taxei de participare stabilite prin contractul de formare profesională. 
                        </p>
                        <p className="mt-2">
                            Avansul achitat pentru rezervarea locului la curs nu este rambursabil în cazul retragerii cursantului din motive ce nu țin de organizator. Monisline își rezervă dreptul de a reprograma cursurile în situații de forță majoră, anunțând participanții din timp.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-headline text-2xl text-primary mb-3">5. Drepturi de Proprietate Intelectuală</h2>
                        <p>
                            Tot conținutul prezent pe acest site (imagini, text, design, logo-uri, branding, materiale de curs) reprezintă proprietatea intelectuală exclusivă a MONISLINE BEAUTY ACADEMY S.R.L. Copierea, reproducerea sau distribuirea acestor materiale fără acordul scris prealabil este strict interzisă.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-headline text-2xl text-primary mb-3">6. Limitarea Răspunderii</h2>
                        <p>
                            Monisline depune toate eforturile pentru ca serviciile să fie executate impecabil și în deplină siguranță. Totuși, nu putem fi trași la răspundere pentru reacții alergice neprevăzute la produsele cosmetice folosite (dacă clientul nu a semnalat sensibilități la testul preliminar sau în fișa de consultare) ori pentru daune aduse bunurilor personale în timpul prezenței în salon.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-headline text-2xl text-primary mb-3">7. Modificări ale Termenilor</h2>
                        <p>
                            Ne rezervăm dreptul de a modifica acești termeni și condiții în orice moment, fără notificare prealabilă. Continuarea utilizării site-ului și a serviciilor noastre după publicarea modificărilor constituie acceptarea implicită a noilor termeni.
                        </p>
                    </section>
                </div>
            </main>

            <Footer currentView="terms" onNavigate={onNavigate as any} />
        </div>
    );
}
