import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import Landing from './landing';
import Courses from './courses';
import Services from './services';
import Contact from './contact';
import Terms from './terms';
import Privacy from './privacy';
import Cookies from './cookies';
import About from './about';

type View = 'home' | 'courses' | 'services' | 'contact' | 'terms' | 'privacy' | 'cookies' | 'about';

function App() {
  const [currentView, setCurrentView] = useState<View>('home');
  const [showNewsletter, setShowNewsletter] = useState(false);
  const [showCookiesConsent, setShowCookiesConsent] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  // Booking Modal States at viewport level
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [bookingFormData, setBookingFormData] = useState({
    nume: '',
    email: '',
    telefon: '',
    mesaj: ''
  });
  const [bookingSubmitted, setBookingSubmitted] = useState(false);

  useEffect(() => {
    // 1. Cookies Consent Check
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowCookiesConsent(true);
    }

    // 2. Newsletter 30-Second Timeout Popup
    const timer = setTimeout(() => {
      const subscribed = localStorage.getItem('newsletterSubscribed');
      const dismissed = sessionStorage.getItem('newsletterDismissed');
      if (subscribed !== 'true' && dismissed !== 'true') {
        setShowNewsletter(true);
      }
    }, 30000); // 30 seconds

    // 3. Event Listener for Booking Modal
    const handleOpenBooking = () => {
      setIsBookingModalOpen(true);
    };
    window.addEventListener('open-booking-modal', handleOpenBooking);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('open-booking-modal', handleOpenBooking);
    };
  }, []);

  const handleSubscribeNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;

    setNewsletterSubmitted(true);
    localStorage.setItem('newsletterSubscribed', 'true');
    setTimeout(() => {
      setShowNewsletter(false);
      setNewsletterSubmitted(false);
      setNewsletterEmail('');
    }, 2500);
  };

  const handleDismissNewsletter = () => {
    sessionStorage.setItem('newsletterDismissed', 'true');
    setShowNewsletter(false);
  };

  const handleCookiesChoice = (choice: 'accepted' | 'rejected') => {
    localStorage.setItem('cookieConsent', choice);
    setShowCookiesConsent(false);
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSubmitted(true);
    setTimeout(() => {
      setBookingSubmitted(false);
      setBookingFormData({ nume: '', email: '', telefon: '', mesaj: '' });
      setIsBookingModalOpen(false);
    }, 3000);
  };

  return (
    <div className="relative min-h-screen">
      {currentView === 'home' && <Landing onNavigate={setCurrentView} />}
      {currentView === 'courses' && <Courses onNavigate={setCurrentView} />}
      {currentView === 'services' && <Services onNavigate={setCurrentView} />}
      {currentView === 'contact' && <Contact onNavigate={setCurrentView} />}
      {currentView === 'terms' && <Terms onNavigate={setCurrentView} />}
      {currentView === 'privacy' && <Privacy onNavigate={setCurrentView} />}
      {currentView === 'cookies' && <Cookies onNavigate={setCurrentView} />}
      {currentView === 'about' && <About onNavigate={setCurrentView} />}

      {/* Cookies Consent Popup */}
      <AnimatePresence>
        {showCookiesConsent && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.4 }}
            className="fixed bottom-6 right-6 left-6 md:left-auto md:max-w-md z-[90] bg-[#efeae1] border border-black/15 shadow-[0_20px_50px_rgba(0,0,0,0.15)] p-6 rounded-2xl flex flex-col gap-4 text-[#1a1a1a]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            <div>
              <h4 className="font-headline font-semibold text-lg uppercase tracking-wider mb-2 text-primary">Politică de Cookies</h4>
              <p className="font-body text-xs md:text-sm text-on-surface-variant leading-relaxed">
                Utilizăm cookie-uri pentru a vă îmbunătăți experiența pe site-ul nostru, pentru a vă oferi conținut personalizat și pentru a analiza traficul.
              </p>
            </div>
            <div className="flex gap-3 justify-end mt-2">
              <button
                onClick={() => handleCookiesChoice('rejected')}
                className="px-4 py-2 border border-black/30 text-[#1a1a1a] rounded text-xs font-semibold uppercase tracking-wider hover:bg-black/5 transition-colors cursor-pointer"
              >
                Refuză
              </button>
              <button
                onClick={() => handleCookiesChoice('accepted')}
                className="px-4 py-2 bg-[#3b281f] text-white rounded text-xs font-semibold uppercase tracking-wider hover:bg-[#2a1c15] transition-colors cursor-pointer shadow"
              >
                Acceptă
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Newsletter Popup */}
      <AnimatePresence>
        {showNewsletter && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-[#efeae1] w-full max-w-md rounded-2xl shadow-2xl p-6 md:p-8 relative border border-[#1a1a1a]/10 text-[#1a1a1a]"
            >
              <button
                onClick={handleDismissNewsletter}
                className="absolute right-4 top-4 p-2 text-on-surface-variant hover:text-black transition-colors rounded-full hover:bg-black/5 cursor-pointer"
                aria-label="Închide"
              >
                <X size={20} />
              </button>

              <div className="text-center space-y-4">
                <span className="inline-block px-3 py-1 bg-[#1a1a1a]/5 text-[#1a1a1a] font-medium text-[10px] rounded-full tracking-widest uppercase border border-[#1a1a1a]/10">
                  Monisline Academy
                </span>
                <h3 className="font-headline text-2xl text-primary font-semibold">Abonează-te la Newsletter</h3>
                <p className="font-body text-xs md:text-sm text-on-surface-variant leading-relaxed">
                  Fii prima persoană care află despre ofertele noastre speciale, noile tehnici de hair-design și cursurile Academiei Monisline!
                </p>

                {newsletterSubmitted ? (
                  <div className="bg-emerald-50 text-emerald-800 p-4 rounded border border-emerald-200 font-body text-xs mt-4">
                    Te-ai abonat cu succes! Mulțumim!
                  </div>
                ) : (
                  <form onSubmit={handleSubscribeNewsletter} className="space-y-4 pt-2">
                    <input
                      className="w-full bg-white border border-primary/25 rounded px-4 py-3 font-body text-sm text-primary focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all shadow-inner"
                      placeholder="Adresa ta de email"
                      required
                      type="email"
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                    />
                    <button
                      className="w-full bg-[#3b281f] text-white py-3 rounded font-label-md text-xs hover:bg-[#2a1c15] transition-all duration-300 cursor-pointer font-semibold uppercase tracking-wider shadow"
                      type="submit"
                    >
                      Abonează-te
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Viewport-level Booking Modal */}
      <AnimatePresence>
        {isBookingModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-white w-full max-w-lg rounded-2xl shadow-2xl p-6 md:p-8 relative border border-[#1a1a1a]/10 max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setIsBookingModalOpen(false)}
                className="absolute right-4 top-4 p-2 text-on-surface-variant hover:text-black transition-colors rounded-full hover:bg-neutral-100 cursor-pointer"
                aria-label="Închide"
              >
                <X size={20} />
              </button>

              <h2 className="font-headline text-2xl text-primary font-semibold mb-6 pr-6">Programează o vizită</h2>

              {bookingSubmitted ? (
                <div className="bg-emerald-50 text-emerald-800 p-6 rounded-lg border border-emerald-200 font-body text-sm">
                  Solicitarea de rezervare a fost trimisă cu succes! Vă vom contacta în cel mai scurt timp posibil.
                </div>
              ) : (
                <form onSubmit={handleBookingSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="modal-nume" className="block text-xs font-semibold uppercase tracking-wider text-on-surface-variant mb-2">
                      Nume Complet
                    </label>
                    <input
                      id="modal-nume"
                      name="nume"
                      type="text"
                      required
                      value={bookingFormData.nume}
                      onChange={(e) => setBookingFormData({ ...bookingFormData, nume: e.target.value })}
                      className="w-full bg-[#fcfbfa] border border-[#1a1a1a]/15 rounded-lg px-4 py-3 font-body text-sm text-primary focus:ring-1 focus:ring-[#3b281f] focus:border-[#3b281f] outline-none transition-all"
                      placeholder="Numele tău complet"
                    />
                  </div>
                  <div>
                    <label htmlFor="modal-email" className="block text-xs font-semibold uppercase tracking-wider text-on-surface-variant mb-2">
                      Email
                    </label>
                    <input
                      id="modal-email"
                      name="email"
                      type="email"
                      required
                      value={bookingFormData.email}
                      onChange={(e) => setBookingFormData({ ...bookingFormData, email: e.target.value })}
                      className="w-full bg-[#fcfbfa] border border-[#1a1a1a]/15 rounded-lg px-4 py-3 font-body text-sm text-primary focus:ring-1 focus:ring-[#3b281f] focus:border-[#3b281f] outline-none transition-all"
                      placeholder="exemplu@mail.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="modal-telefon" className="block text-xs font-semibold uppercase tracking-wider text-on-surface-variant mb-2">
                      Număr de Telefon
                    </label>
                    <input
                      id="modal-telefon"
                      name="telefon"
                      type="tel"
                      value={bookingFormData.telefon}
                      onChange={(e) => setBookingFormData({ ...bookingFormData, telefon: e.target.value })}
                      className="w-full bg-[#fcfbfa] border border-[#1a1a1a]/15 rounded-lg px-4 py-3 font-body text-sm text-primary focus:ring-1 focus:ring-[#3b281f] focus:border-[#3b281f] outline-none transition-all"
                      placeholder="+40 7xx xxx xxx"
                    />
                  </div>
                  <div>
                    <label htmlFor="modal-mesaj" className="block text-xs font-semibold uppercase tracking-wider text-on-surface-variant mb-2">
                      Mesaj
                    </label>
                    <textarea
                      id="modal-mesaj"
                      name="mesaj"
                      required
                      rows={3}
                      value={bookingFormData.mesaj}
                      onChange={(e) => setBookingFormData({ ...bookingFormData, mesaj: e.target.value })}
                      className="w-full bg-[#fcfbfa] border border-[#1a1a1a]/15 rounded-lg px-4 py-3 font-body text-sm text-primary focus:ring-1 focus:ring-[#3b281f] focus:border-[#3b281f] outline-none transition-all resize-none"
                      placeholder="Menționează serviciul dorit sau detalii despre programare..."
                    ></textarea>
                  </div>
                  <button
                    className="inline-flex items-center justify-center font-label-md text-xs tracking-widest uppercase text-white bg-primary py-4 hover:bg-neutral-800 transition-colors duration-300 w-full cursor-pointer shadow-md font-semibold"
                    type="submit"
                  >
                    Trimite Mesajul
                  </button>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
