import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

interface PrivacyProps {
    onNavigate: (page: "home" | "courses" | "services" | "contact" | "terms" | "privacy" | "cookies" | "about") => void;
}

export default function Privacy({ onNavigate }: PrivacyProps) {
    return (
        <div className="min-h-screen bg-white text-[#1a1a1a]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            <Navbar currentView="contact" onNavigate={onNavigate as any} />

            <main className="pt-32 pb-24 px-6 md:px-margin-desktop max-w-4xl mx-auto">
                <h1 className="font-headline text-4xl md:text-5xl text-primary mb-4 text-center">
                    Politică de Confidențialitate (GDPR)
                </h1>
                <p className="text-xs text-on-surface-variant tracking-wider uppercase text-center mb-12">
                    Ultima actualizare: Mai 2026
                </p>

                <div className="space-y-8 font-body text-[#1a1a1a]/95 text-sm md:text-base leading-relaxed">
                    <section>
                        <h2 className="font-headline text-2xl text-primary mb-3">1. Informații Generale</h2>
                        <p>
                            Confidențialitatea datelor dumneavoastră cu caracter personal reprezintă una dintre preocupările principale ale MONISLINE BEAUTY ACADEMY S.R.L., cu sediul în Str. General Andrei Popovici, Nr. 10, Sector 1, București, în calitate de operator de date. Acest document are rolul de a vă informa cu privire la prelucrarea datelor dumneavoastră cu caracter personal, în contextul utilizării site-ului web monisline.ro și al programărilor la serviciile noastre.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-headline text-2xl text-primary mb-3">2. Categoriile de Date Prelucrate</h2>
                        <p>
                            Dacă sunteți vizitator al site-ului sau client al salonului, vom prelucra datele dumneavoastră cu caracter personal pe care le furnizați în mod direct, cum ar fi:
                        </p>
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                            <li>Nume și prenume</li>
                            <li>Număr de telefon</li>
                            <li>Adresă de e-mail</li>
                            <li>Istoricul serviciilor realizate în salon (preferințe culori vopsea, tratamente folosite)</li>
                            <li>Alte date furnizate prin formularele de contact sau de înscriere la cursuri</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="font-headline text-2xl text-primary mb-3">3. Scopurile și Temeiurile Prelucrării</h2>
                        <p>
                            Prelucrăm datele dumneavoastră cu caracter personal în următoarele scopuri:
                        </p>
                        <ul className="list-disc pl-6 mt-2 space-y-2">
                            <li><strong>Efectuarea programărilor:</strong> Pentru a vă contacta în vederea confirmării, modificării sau anulării serviciilor solicitate (Temei: executarea unui contract sau demersuri precontractuale).</li>
                            <li><strong>Înscrierea la cursuri:</strong> Pentru derularea contractului de formare profesională în cadrul Monisline Academy (Temei: executarea unui contract).</li>
                            <li><strong>Comunicări comerciale (newsletter):</strong> Dacă ați oferit consimțământul dumneavoastră expres, pentru a vă trimite oferte speciale sau informații despre noile servicii și cursuri (Temei: consimțământ).</li>
                            <li><strong>Îmbunătățirea serviciilor:</strong> Soluționarea plângerilor, sesizărilor și monitorizarea satisfacției clienților (Temei: interesul legitim de a ne îmbunătăți constant activitatea).</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="font-headline text-2xl text-primary mb-3">4. Durata Prelucrării Datelor</h2>
                        <p>
                            Ca regulă generală, vom prelucra datele dumneavoastră cu caracter personal atât cât este necesar pentru realizarea scopurilor de prelucrare menționate mai sus, sau până la retragerea consimțământului în cazul comunicărilor de marketing. În contextul contractelor pentru cursuri de formare, datele vor fi păstrate conform obligațiilor legale de arhivare (ex. legislația fiscală și contabilă).
                        </p>
                    </section>

                    <section>
                        <h2 className="font-headline text-2xl text-primary mb-3">5. Dezvăluirea Datelor Personale</h2>
                        <p>
                            Pentru îndeplinirea scopurilor de prelucrare, putem dezvălui datele dumneavoastră către parteneri sau terțe persoane care sprijină activitatea noastră (furnizori de servicii IT, software de programări, servicii de contabilitate) sau către autorități publice, atunci când legea ne impune acest lucru. Nu vindem și nu închiriem datele dumneavoastră către terți în scopuri de marketing.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-headline text-2xl text-primary mb-3">6. Drepturile Dumneavoastră</h2>
                        <p>
                            În conformitate cu Regulamentul European nr. 679/2016 (GDPR), beneficiați de următoarele drepturi:
                        </p>
                        <ul className="list-disc pl-6 mt-2 space-y-2">
                            <li><strong>Dreptul de acces:</strong> Puteți solicita o confirmare a prelucrării datelor dumneavoastră.</li>
                            <li><strong>Dreptul la rectificare:</strong> Puteți solicita corectarea datelor inexacte sau completarea celor incomplete.</li>
                            <li><strong>Dreptul la ștergere ("dreptul de a fi uitat"):</strong> Puteți cere ștergerea datelor dacă acestea nu mai sunt necesare sau prelucrarea a fost ilegală.</li>
                            <li><strong>Dreptul la restricționarea prelucrării:</strong> Puteți suspenda temporar prelucrarea datelor în anumite cazuri.</li>
                            <li><strong>Dreptul la portabilitatea datelor:</strong> Puteți solicita transferul datelor către un alt operator.</li>
                            <li><strong>Dreptul de opoziție:</strong> Vă puteți opune prelucrării bazate pe interesul nostru legitim sau marketingului direct.</li>
                        </ul>
                        <p className="mt-4">
                            Pentru exercitarea acestor drepturi, ne puteți contacta prin e-mail la adresa: <a href="mailto:gdpr@monisline.ro" className="underline hover:text-neutral-600 transition-colors">gdpr@monisline.ro</a> sau depunând o cerere scrisă la adresa sediului nostru.
                        </p>
                    </section>
                </div>
            </main>

            <Footer currentView="privacy" onNavigate={onNavigate as any} />
        </div>
    );
}
