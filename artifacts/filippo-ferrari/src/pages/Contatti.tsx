import { useState } from "react";
import { Phone, Mail, MapPin, Instagram, ChevronDown } from "lucide-react";
import { useIntersection } from "@/hooks/useIntersection";

const HERO_BG = "https://dadcg8.webwave.dev/files/dynamicContent/sites/dadcg8/images/it/webpage_31/mm3aqecy/element_815/rwdMode_1/2400x420/a-race-car-driving-down-a-race-track.webp";

const faqs = [
  {
    q: "Come posso seguire la carriera di Filippo Ferrari e rimanere aggiornato sulle sue gare?",
    a: "Puoi accedere a contenuti esclusivi, aggiornamenti sulla sua carriera e consultare il calendario delle gare sui social.",
  },
  {
    q: "Quali sono i vantaggi di diventare uno sponsor di Filippo Ferrari?",
    a: "Avrai l'opportunità di prendere parte alle stagioni come protagonisti, beneficiando di un approccio professionale e di una mentalità orientata alla vittoria, con un impegno per la trasparenza.",
  },
  {
    q: "In quali tipi di competizioni partecipa Filippo Ferrari?",
    a: "Filippo Ferrari è un pilota GT3 attivo nel Campionato Italiano Gran Turismo, partecipando a gare leggendarie e altri eventi iconici.",
  },
  {
    q: "Qual è l'approccio di Filippo Ferrari alla sua carriera sportiva?",
    a: "Ha un approccio professionale alla preparazione, una costante crescita tecnica e una mentalità orientata alla vittoria, con un forte impegno per la trasparenza.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-white/8 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-white/3 transition-colors"
      >
        <span className="text-white font-medium text-sm leading-relaxed pr-4">{q}</span>
        <ChevronDown
          size={18}
          className={`text-red-400 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="px-6 pb-5 text-gray-400 text-sm leading-relaxed border-t border-white/5">
          <p className="pt-4">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function Contatti() {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nome || !form.email || !form.messaggio || !gdpr) {
      setStatus("error");
      return;
    }
    try {
      const data = new FormData();
      data.append("nome", form.nome);
      data.append("email", form.email);
      data.append("messaggio", form.messaggio);
      const res = await fetch("https://formspree.io/f/xlgoaawj", {
        method: "POST",
        body: data,
        headers: { "Accept": "application/json" },
      });
      if (res.ok) setStatus("sent");
      else setStatus("error");
    } catch {
      setStatus("error");
    }
  };

  return (
      <section className="relative h-[38vh] min-h-[260px] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_BG})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-700 via-red-500 to-red-700" />
        <div className="relative z-10 px-4 sm:px-8 lg:px-16 pb-12 animate-fadeInUp">
          <div className="divider-red mb-4" />
          <h1 className="text-4xl md:text-6xl font-black text-white">
            <span className="text-gradient">Contatti</span>
          </h1>
        </div>
      </section>

      {/* Main content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact form */}
            <div
              ref={formRef.ref as React.RefObject<HTMLDivElement>}
              className={`opacity-0 ${formRef.visible ? "animate-slideInLeft" : ""}`}
            >
              <div className="divider-red mb-5" />
              <h2 className="text-3xl font-black text-white mb-2">
                Hai altre domande?{" "}
                <span className="text-gradient">Contattami!</span>
              </h2>
              <p className="text-gray-400 mb-8 text-sm">
                Compila il form e ti risponderò il prima possibile.
              </p>

              {status === "sent" ? (
                <div className="bg-red-950/30 border border-red-500/30 rounded-xl p-8 text-center">
                  <div className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center mx-auto mb-4">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-7 h-7 text-white">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 className="text-white font-bold text-xl mb-2">Messaggio inviato!</h3>
                  <p className="text-gray-400 text-sm">
                    Il modulo è stato inviato - grazie. Ti risponderò presto.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-gray-400 text-xs font-semibold tracking-widest uppercase mb-2">
                      Nome *
                    </label>
                    <input
                      type="text"
                      value={form.nome}
                      onChange={(e) => setForm({ ...form, nome: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-red-500 focus:bg-white/8 transition-all text-sm"
                      placeholder="Il tuo nome"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-xs font-semibold tracking-widest uppercase mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-red-500 focus:bg-white/8 transition-all text-sm"
                      placeholder="la-tua@email.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-xs font-semibold tracking-widest uppercase mb-2">
                      Messaggio *
                    </label>
                    <textarea
                      value={form.messaggio}
                      onChange={(e) => setForm({ ...form, messaggio: e.target.value })}
                      rows={5}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-red-500 focus:bg-white/8 transition-all text-sm resize-none"
                      placeholder="Scrivi il tuo messaggio..."
                      required
                    />
                  </div>
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="gdpr"
                      checked={gdpr}
                      onChange={(e) => setGdpr(e.target.checked)}
                      className="mt-1 w-4 h-4 accent-red-600"
                      required
                    />
                    <label htmlFor="gdpr" className="text-gray-500 text-xs leading-relaxed">
                      Accettazione GDPR * — Inviando il messaggio acconsento a che questo sito
                      conservi le informazioni inviate così che possano rispondere alla mia
                      richiesta.
                    </label>
                  </div>
                  {status === "error" && (
                    <p className="text-red-400 text-xs">
                      Si prega di compilare tutti i campi obbligatori!
                    </p>
                  )}
                  <button
                    type="submit"
                    className="w-full py-4 btn-red rounded-lg font-semibold text-white tracking-wide"
                  >
                    Invia
                  </button>
                </form>
              )}
            </div>

            {/* Contact info */}
            <div
              ref={infoRef.ref as React.RefObject<HTMLDivElement>}
              className={`opacity-0 ${infoRef.visible ? "animate-slideInRight delay-200" : ""}`}
            >
              <div className="divider-red mb-5" />
              <h2 className="text-3xl font-black text-white mb-8">
                Come <span className="text-gradient">trovarmi</span>
              </h2>

              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4 card-hover bg-[hsl(0_0%_7%)] border border-white/5 rounded-xl p-5">
                  <div className="w-10 h-10 rounded-full bg-red-600/20 flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-red-400" />
                  </div>
                  <div>
                    <div className="text-gray-500 text-xs uppercase tracking-widest mb-1">Telefono</div>
                    <a href="tel:3318975195" className="text-white font-semibold hover:text-red-400 transition-colors">
                      +39 331 897 5195
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 card-hover bg-[hsl(0_0%_7%)] border border-white/5 rounded-xl p-5">
                  <div className="w-10 h-10 rounded-full bg-red-600/20 flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-red-400" />
                  </div>
                  <div>
                    <div className="text-gray-500 text-xs uppercase tracking-widest mb-1">Email</div>
                    <a href="mailto:filippoferrariofficial@gmail.com" className="text-white font-semibold hover:text-red-400 transition-colors break-all">
                      filippoferrariofficial@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 card-hover bg-[hsl(0_0%_7%)] border border-white/5 rounded-xl p-5">
                  <div className="w-10 h-10 rounded-full bg-red-600/20 flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-red-400" />
                  </div>
                  <div>
                    <div className="text-gray-500 text-xs uppercase tracking-widest mb-1">Indirizzo</div>
                    <span className="text-white font-semibold">Via Roma 10</span>
                    <div className="text-gray-400 text-sm">Milano, 20121</div>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div>
                <h3 className="text-white font-semibold text-sm tracking-widest uppercase mb-5">
                  Seguimi
                </h3>
                <div className="flex gap-4">
                  <a
                    href="https://www.instagram.com/__filippo.ferrari__"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-5 py-3 bg-white/5 border border-white/10 hover:bg-red-600 hover:border-red-600 rounded-xl text-white text-sm font-medium transition-all group"
                  >
                    <Instagram size={18} />
                    Instagram
                  </a>
                  <a
                    href="https://www.tiktok.com/@fili.ferrari"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-5 py-3 bg-white/5 border border-white/10 hover:bg-red-600 hover:border-red-600 rounded-xl text-white text-sm font-medium transition-all"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.71a8.18 8.18 0 004.78 1.52V6.78a4.85 4.85 0 01-1.01-.09z"/>
                    </svg>
                    TikTok
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        ref={faqRef.ref as React.RefObject<HTMLElement>}
        className="py-20 bg-[hsl(0_0%_6%)]"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div
            className={`text-center mb-12 opacity-0 ${faqRef.visible ? "animate-fadeInUp" : ""}`}
          >
            <div className="divider-red mx-auto mb-4" />
            <h2 className="text-3xl font-black text-white">
              FAQ — Domande{" "}
              <span className="text-gradient">frequenti</span>
            </h2>
          </div>
          <div
            className={`space-y-3 opacity-0 ${faqRef.visible ? "animate-fadeInUp delay-200" : ""}`}
          >
            {faqs.map((faq) => (
              <FaqItem key={faq.q} {...faq} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
