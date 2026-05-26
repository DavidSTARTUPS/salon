import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

interface CookiesProps {
    onNavigate: (page: "home" | "courses" | "services" | "contact" | "terms" | "privacy" | "cookies" | "about") => void;
}

export default function Cookies({ onNavigate }: CookiesProps) {
    return (
        <div className="min-h-screen bg-white text-[#1a1a1a]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            <Navbar currentView="contact" onNavigate={onNavigate as any} />

            <main className="pt-32 pb-24 px-6 md:px-margin-desktop max-w-4xl mx-auto">
                <h1 className="font-headline text-4xl md:text-5xl text-primary mb-4 text-center">
                    Politică de Cookies
                </h1>
                <p className="text-xs text-on-surface-variant tracking-wider uppercase text-center mb-12">
                    Ultima actualizare: Mai 2026
                </p>

                <div className="space-y-8 font-body text-[#1a1a1a]/95 text-sm md:text-base leading-relaxed">
                    <section>
                        <h2 className="font-headline text-2xl text-primary mb-3">1. Ce sunt fișierele Cookie?</h2>
                        <p>
                            Un cookie este un fișier text de mici dimensiuni, format din litere și cifre, care va fi stocat pe computerul, dispozitivul mobil sau alte echipamente ale unui utilizator de pe care se accesează internetul. Cookie-ul este instalat prin solicitarea trimisă de către un web-server unui browser (ex: Internet Explorer, Chrome, Safari) și este complet "pasiv" (nu conține programe software, viruși sau spyware și nu poate accesa informațiile de pe hard-driverul utilizatorului).
                        </p>
                    </section>

                    <section>
                        <h2 className="font-headline text-2xl text-primary mb-3">2. La ce sunt utilizate Cookie-urile?</h2>
                        <p>
                            Aceste fișiere fac posibilă recunoașterea terminalului utilizatorului și prezentarea conținutului într-un mod relevant, adaptat preferințelor utilizatorului. Cookie-urile asigură utilizatorilor o experiență plăcută de navigare și susțin eforturile Monisline de a oferi servicii confortabile și adaptate acestora (de exemplu: reținerea preferințelor de limbă, păstrarea sesiunii active de înregistrare sau analiza traficului anonim pentru optimizarea vitezei de încărcare).
                        </p>
                    </section>

                    <section>
                        <h2 className="font-headline text-2xl text-primary mb-3">3. Ce tipuri de Cookie-uri folosim?</h2>
                        <p>
                            Folosim două tipuri de cookie-uri: per sesiune (temporare, care sunt șterse la închiderea browserului) și fixe (care rămân pe dispozitiv pentru o perioadă determinată sau până când sunt șterse manual).
                        </p>
                        <p className="mt-2">
                            Din punct de vedere funcțional, cookie-urile sunt clasificate în:
                        </p>
                        <ul className="list-disc pl-6 mt-2 space-y-2">
                            <li>
                                <strong>Cookie-uri strict necesare:</strong> Esențiale pentru buna funcționare a site-ului (navigare pe pagini, acces la zone securizate). Fără acestea, site-ul nu poate rula corect.
                            </li>
                            <li>
                                <strong>Cookie-uri de performanță și analiză:</strong> Ne ajută să înțelegem cum interacționează vizitatorii cu site-ul nostru (ex: prin Google Analytics), colectând informații în mod anonim pentru a ne permite să optimizăm layout-ul și structura paginilor.
                            </li>
                            <li>
                                <strong>Cookie-uri de funcționalitate:</strong> Permit site-ului să memoreze alegerile pe care le faceți (cum ar fi numele de utilizator, limba sau regiunea în care vă aflați) pentru a vă oferi funcții îmbunătățite și personalizate.
                            </li>
                            <li>
                                <strong>Cookie-uri de publicitate/marketing:</strong> Utilizate pentru a urmări utilizatorii de la un site la altul cu scopul de a afișa reclame relevante și atractive pentru profilul individual al acestora.
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="font-headline text-2xl text-primary mb-3">4. Controlul și Ștergerea Cookie-urilor</h2>
                        <p>
                            În general, o aplicație folosită pentru accesarea paginilor web permite salvarea cookie-urilor pe terminal în mod implicit. Aceste setări pot fi schimbate în așa fel încât administrarea automată a cookie-urilor să fie blocată de browserul web sau utilizatorul să fie informat de fiecare dată când cookie-uri sunt trimise către terminalul său.
                        </p>
                        <p className="mt-2">
                            Limitarea folosirii cookie-urilor poate afecta anumite funcționalități ale paginii web. Pentru a modifica setările cookie din browser, accesați meniul "Opțiuni" sau "Preferințe" din browserul dumneavoastră sau consultați secțiunea "Ajutor" a acestuia pentru detalii.
                        </p>
                    </section>
                </div>
            </main>

            <Footer currentView="cookies" onNavigate={onNavigate as any} />
        </div>
    );
}
