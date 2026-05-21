'use client'

import React, { useState } from 'react'

/* ─────────────────────────────────────────
   CONTACT PAGE — KPrimestores
   Tailwind CSS · No global style overrides
───────────────────────────────────────────*/

const WA_NUMBER      = '2349134424632'
const BUSINESS_EMAIL = 'hello.kprimstore@gmail.com'
const INSTAGRAM      = 'https://instagram.com/kprimestores'
const FACEBOOK       = 'https://facebook.com/kprimestores'

const WA_PATH = "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378L.586 21.433l1.446-5.43a9.955 9.955 0 0 1-1.337-5.01C.698 5.42 5.13 1 10.617 1c2.663 0 5.167 1.037 7.053 2.922a9.86 9.86 0 0 1 2.92 7.04c-.003 5.487-4.433 9.843-9.539 9.843m8.122-18.01A11.815 11.815 0 0 0 10.617 0C4.808 0 .07 4.733.066 10.535a10.507 10.507 0 0 0 1.407 5.279L0 24l8.397-2.203a10.578 10.578 0 0 0 5.05 1.288h.005c5.806 0 10.546-4.733 10.548-10.536a10.478 10.478 0 0 0-3.077-7.454"

const FAQS = [
  { id: 1, q: "What are the best perfumes for men in Nigeria?", a: "The most sought-after men's fragrances pair longevity with confident projection. Deep oud compositions work beautifully for evenings; fresh aromatics suit daytime and the office; woody-spicy blends are ideal for weekends. At KPrimestores, we curate across all three profiles — designer and niche — specifically for warm Nigerian weather." },
  { id: 2, q: "How can I tell if a perfume will last long on my skin?", a: "Longevity comes down to concentration and skin chemistry. Eau de Parfum (EDP) typically lasts 6–10 hours; Parfum can last all day. Look for base notes like oud, amber, musk, and sandalwood — heavy molecules that cling to skin longest. Moisturising before you spray also makes a significant difference." },
  { id: 3, q: "What is the best perfume for women to wear at a wedding or party?", a: "Floral and oriental fragrances are the gold standard for formal occasions. Look for rose, jasmine, or tuberose hearts supported by warm amber, vanilla, or white musk bases. These project beautifully without being overpowering and carry through a long evening. We also stock elegant gift sets for brides and honoured guests." },
  { id: 4, q: "What is the best gift — a perfume or a watch?", a: "Both are timeless, but the occasion decides. A watch is a visible, daily statement — deeply personal and functional. A perfume is more intimate: worn on the skin, tied to memory and identity. For milestone occasions — birthdays, anniversaries, promotions — we recommend pairing both. Our team helps you choose the ideal combination via WhatsApp." },
  { id: 5, q: "How do I choose the right watch for my wrist and style?", a: "Match case diameter to wrist circumference: under 16 cm suits 36–40 mm; 16–18 cm suits 40–44 mm; larger wrists carry 44 mm+ comfortably. Dress watches are slim and elegant for formal wear, chronographs cross the work-casual divide beautifully, and dive-inspired designs are the most versatile everyday option." },
  { id: 6, q: "Can I get authentic perfumes and watches delivered in Port Harcourt?", a: "Yes — that is precisely what KPrimestores was built for. We source directly from verified international distributors and inspect every product before dispatch. We offer fast delivery within Port Harcourt and nationwide shipping across Nigeria, with WhatsApp-based support at every step of your order." },
  { id: 7, q: "What fragrance and watch combinations make the smartest look?", a: "Your watch and scent should work as one signature. A sleek dress watch pairs with a refined floral or light woody fragrance — understated and polished. A bold chronograph calls for something with more presence: spiced leather or oud-amber. For casual style, a clean aquatic alongside a pilot or field watch strikes the right balance between effortless and intentional." },
]

const CHANNELS = [
  { key: 'wa',   label: 'WhatsApp',  sub: 'Fastest response',  value: '+234 913 442 4632', href: `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Hello KPrimestores!")}`,
    icon: <svg viewBox="0 0 24 24" fill="#25d366" className="w-5 h-5"><path d={WA_PATH}/></svg> },
  { key: 'ig',   label: 'Instagram', sub: 'Daily inspiration',  value: '@kprimestores',     href: INSTAGRAM,
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="#e1306c" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="#e1306c" stroke="none"/></svg> },
  { key: 'fb',   label: 'Facebook',  sub: 'Follow our page',   value: 'KPrimestores',      href: FACEBOOK,
    icon: <svg viewBox="0 0 24 24" fill="#1877f2" className="w-5 h-5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg> },
  { key: 'mail', label: 'Email',     sub: 'General enquiries', value: BUSINESS_EMAIL,       href: `mailto:${BUSINESS_EMAIL}`,
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="#f58c27" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="22,6 12,13 2,6"/></svg> },
]

const PILLARS = [
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-[#f58c27]"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>,
    t: 'Local, World-Class Range', b: 'Based in Port Harcourt — curated for the Nigerian lifestyle, climate, and taste.'
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-[#f58c27]"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    t: '100% Authentic Products', b: 'Sourced from verified distributors only. No counterfeits — ever.'
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-[#f58c27]"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>,
    t: 'Gifting Made Personal', b: 'We guide you to gifts that land. Every purchase arrives presentation-ready.'
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-[#f58c27]"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>,
    t: 'Expert Style Guidance', b: 'Personalised recommendations via WhatsApp — fast, honest, no-pressure.'
  },
]

const STATS = [
  { n: '500+', l: 'Fragrances' },
  { n: '100+', l: 'Watch Styles' },
  { n: '5 ★',  l: 'Customer Rating' },
  { n: '24/7', l: 'Support' },
]

/* ── Shared sub-components ── */

function SectionDivider({ label }) {
  return (
    <div className="flex items-center gap-4 max-w-5xl mx-auto px-4 sm:px-8 pt-16 md:pt-20">
      <div className="flex-1 h-px bg-[#ede8df]" />
      <span style={{ fontFamily: "'Cormorant Garamond', serif" }}
        className="italic text-sm text-[#6b6484] tracking-[0.05em] whitespace-nowrap">
        {label}
      </span>
      <div className="flex-1 h-px bg-[#ede8df]" />
    </div>
  )
}

function Eyebrow({ children }) {
  return (
    <span className="block text-[9.5px] font-bold tracking-[0.34em] uppercase text-[#f58c27] mb-2.5">
      {children}
    </span>
  )
}

function Field({ label, children }) {
  return (
    <div className="mb-3.5">
      <label className="block text-[9px] font-bold tracking-[0.22em] uppercase text-[#6b6484] mb-1.5">
        {label}
      </label>
      {children}
    </div>
  )
}

/* ── Main Page ── */

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState(null)
  const [form, setForm]       = useState({ name: '', email: '', phone: '', message: '' })
  const [sent, setSent]       = useState(false)
  const [nl, setNl]           = useState('')
  const [nlDone, setNlDone]   = useState(false)

  const waHref = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Hello KPrimestores! I'd love to learn more about your collection.")}`

  return (
    <>
      {/* Font import only — zero global resets */}
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=Jost:wght@300;400;500;600;700&display=swap');`}</style>

      <div style={{ fontFamily: "'Jost', sans-serif" }} className="min-h-screen bg-[#fdfaf5] text-[#131122]">

        {/* ── HERO ── */}
        <header className="bg-[#131122] text-center px-4 py-20 md:py-28 relative overflow-hidden">
          <span className="block text-[10px] tracking-[0.38em] uppercase text-[#f58c27] font-semibold mb-5">
            KPrimestores · Port Harcourt
          </span>
          <h1
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
            className="text-5xl md:text-7xl font-light italic text-white leading-tight mb-4">
            Our <em className="text-[#f58c27] not-italic">Story</em> &amp; Contact
          </h1>
          <div className="w-10 h-px bg-[#f58c27] mx-auto mb-4" />
          <p className="text-[10px] tracking-[0.26em] uppercase text-white/30">
            About Us · FAQ · Get in Touch
          </p>
          {/* decorative bottom accent */}
          <div className="absolute bottom-0 left-[12%] right-[12%] h-px"
            style={{ background: 'linear-gradient(90deg,transparent,rgba(245,140,39,.28),transparent)' }} />
        </header>

        {/* ── WHO WE ARE ── */}
        <SectionDivider label="Who We Are" />

        <section className="max-w-5xl mx-auto px-4 sm:px-8 pt-14 md:pt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-start">

            {/* Copy */}
            <div>
              <Eyebrow>About KPrimestores</Eyebrow>
              <p style={{ fontFamily: "'Cormorant Garamond', serif" }}
                className="text-xl md:text-2xl font-normal italic text-[#2e2a40] leading-relaxed mb-5">
                <strong className="text-[#131122] font-semibold not-italic">
                  We believe every person deserves to smell expensive, look opulent, and feel extraordinary
                </strong>{' '}
                — without travelling abroad or spending a fortune.
              </p>
              <p className="text-[13px] font-light leading-loose text-[#6b6484] mb-4">
                KPrimestores was born in Port Harcourt, Rivers State, from a clear conviction: Nigerians deserve direct access to world-class fragrances and precision timepieces at prices that make luxury genuinely attainable. We are a curated online store for premium perfumes, long-lasting colognes, and quality watches — sourced from verified international distributors and delivered to your door across Nigeria.
              </p>
              <p className="text-[13px] font-light leading-loose text-[#6b6484] mb-4">
                We are more than a shop. We are your style partner. Whether you are building a fragrance wardrobe, choosing the perfect watch for the boardroom, searching for a gifting idea, or simply asking which scent works best for Lagos heat — our team is on WhatsApp, ready to guide you personally. No scripts. No pressure. Just honest advice from people who love what they sell.
              </p>
              <p className="text-[13px] font-light leading-loose text-[#6b6484] mb-7">
                Every product we stock is authentic, quality-tested, and worth every naira. From anniversary gifts to everyday elegance — this is what we do, and we do it well.
              </p>
              <a href={waHref} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-[#f58c27] text-[#131122] px-6 py-3 rounded text-[10px] font-bold tracking-[0.2em] uppercase no-underline transition-colors duration-200 hover:bg-[#f58c27]">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d={WA_PATH}/></svg>
                Shop Now on WhatsApp
              </a>
            </div>

            {/* Stats + Location */}
            <div>
              <div className="grid grid-cols-2 gap-3 mb-5">
                {STATS.map(s => (
                  <div key={s.l} className="relative bg-white border border-[#ede8df] rounded p-5 overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-0.5"
                      style={{ background: 'linear-gradient(90deg,#f58c27,#c86e10)' }} />
                    <span style={{ fontFamily: "'Cormorant Garamond', serif" }}
                      className="text-4xl font-semibold text-[#f58c27] leading-none block mb-1">{s.n}</span>
                    <span className="text-[9.5px] font-bold tracking-[0.17em] uppercase text-[#6b6484]">{s.l}</span>
                  </div>
                ))}
              </div>
              <div className="bg-[#131122] rounded p-6">
                <span className="text-[9px] font-bold tracking-[0.3em] uppercase text-[#f58c27] block mb-2">Our Location</span>
                <div style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  className="text-lg font-semibold text-white mb-1">KPrimestores</div>
                <div className="text-[12.5px] font-light leading-relaxed text-white/40">
                  Odani Greencity, Elelenwo<br />Port Harcourt, Rivers State<br />Nigeria
                </div>
                <div className="inline-flex items-center gap-1.5 mt-3 text-[10px] font-semibold tracking-[0.12em] uppercase text-[#f58c27]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                  Port Harcourt · Rivers State
                </div>
              </div>
            </div>
          </div>

          {/* Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 md:mt-14">
            {PILLARS.map((p, i) => (
              <div key={i}
                className="bg-white border border-[#ede8df] rounded p-5 md:p-6 transition-all duration-200 hover:border-[#f58c27]/40 hover:-translate-y-0.5">
                <div className="mb-3">{p.icon}</div>
                <div style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  className="text-base font-semibold text-[#131122] mb-2 leading-snug">{p.t}</div>
                <p className="text-[11.5px] font-light leading-relaxed text-[#6b6484]">{p.b}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── FAQ ── */}
        <SectionDivider label="Frequently Asked Questions" />

        <section className="max-w-5xl mx-auto px-4 sm:px-8 pt-14 md:pt-16">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10 md:mb-12">
              <Eyebrow>Common Questions</Eyebrow>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif" }}
                className="text-3xl md:text-4xl font-light italic text-[#131122] leading-snug mb-3">
                Everything You Need to <em className="text-[#f58c27] not-italic">Know</em>
              </h2>
              <p className="text-[13px] font-light leading-loose text-[#6b6484] max-w-md mx-auto">
                From choosing the right fragrance to gifting the perfect watch — answered by people who genuinely know their products.
              </p>
            </div>

            {FAQS.map((f, idx) => (
              <div key={f.id}
                className={`border-b border-[#ede8df] ${idx === 0 ? 'border-t' : ''}`}>
                <button
                  className="w-full flex items-center justify-between gap-4 py-5 text-left outline-none bg-transparent border-0 cursor-pointer"
                  onClick={() => setOpenFaq(openFaq === f.id ? null : f.id)}
                  aria-expanded={openFaq === f.id}>
                  <span style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    className={`text-base md:text-lg font-semibold leading-snug flex-1 transition-colors duration-200 ${openFaq === f.id ? 'text-[#c86e10]' : 'text-[#131122]'}`}>
                    {f.q}
                  </span>
                  <span className={`w-6 h-6 flex-shrink-0 rounded-full flex items-center justify-center border transition-all duration-300
                    ${openFaq === f.id ? 'bg-[#f58c27] border-[#f58c27] rotate-45' : 'border-[#f58c27]/40'}`}>
                    <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round"
                      stroke={openFaq === f.id ? '#131122' : '#f58c27'} className="w-2.5 h-2.5">
                      <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
                    </svg>
                  </span>
                </button>
                <div className="overflow-hidden transition-all duration-500 ease-in-out"
                  style={{ maxHeight: openFaq === f.id ? '280px' : '0' }}>
                  <p className="text-[13px] font-light leading-loose text-[#6b6484] pb-5 pr-8">
                    {f.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── GET IN TOUCH ── */}
        <SectionDivider label="Get in Touch" />

        <section className="max-w-5xl mx-auto px-4 sm:px-8 pt-14 md:pt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-start">

            {/* Channels */}
            <div>
              <Eyebrow>Contact Us</Eyebrow>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif" }}
                className="text-3xl md:text-4xl font-light italic text-[#131122] leading-snug mb-3">
                We Are Always <em className="text-[#f58c27] not-italic">Here for You</em>
              </h2>
              <p className="text-[13px] font-light leading-loose text-[#6b6484] mb-6">
                Have a question about a product? Need a gifting recommendation? Our team responds promptly — WhatsApp is the fastest route to a personal reply.
              </p>
              <div className="flex flex-col gap-2.5">
                {CHANNELS.map(ch => (
                  <a key={ch.key} href={ch.href} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-white border border-[#ede8df] rounded no-underline text-inherit transition-all duration-200 hover:border-[#f58c27]/40 hover:translate-x-1">
                    <div className="w-9 h-9 flex-shrink-0 flex items-center justify-center">{ch.icon}</div>
                    <div className="flex-1 min-w-0">
                      <span className="text-[9px] font-bold tracking-[0.22em] uppercase text-[#6b6484] flex items-center gap-1.5 mb-0.5">
                        {ch.label}
                        <span className="text-[8.5px] font-normal tracking-[0.08em] opacity-55">{ch.sub}</span>
                      </span>
                      <span className="text-[12.5px] font-medium text-[#131122] block truncate">{ch.value}</span>
                    </div>
                    <svg viewBox="0 0 24 24" fill="none" stroke="#f58c27" strokeWidth="2"
                      strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 flex-shrink-0 opacity-30">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="bg-white border border-[#ede8df] rounded relative overflow-hidden p-7 md:p-9">
              <div className="absolute top-0 left-0 right-0 h-0.5"
                style={{ background: 'linear-gradient(90deg,#f58c27,#c86e10)' }} />

              {sent ? (
                <div className="text-center py-8 px-4">
                  <div className="w-12 h-12 bg-[#f58c27] rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#131122" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    className="text-2xl font-semibold text-[#131122] mb-2">Message Received!</h3>
                  <p className="text-[12.5px] font-light text-[#6b6484] leading-relaxed">
                    Our team will get back to you within 24 hours. For a faster reply, send a WhatsApp message directly.
                  </p>
                </div>
              ) : (
                <>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    className="text-2xl md:text-3xl font-semibold text-[#131122] mb-1 leading-snug">
                    Send Us a Message
                  </h3>
                  <p className="text-[12px] font-light text-[#6b6484] leading-relaxed mb-6">
                    We respond within 24 hours. WhatsApp is fastest for urgent enquiries.
                  </p>

                  <form onSubmit={e => { e.preventDefault(); setSent(true) }}>
                    <div className="grid grid-cols-2 gap-3">
                      <Field label="Full Name">
                        <input type="text" placeholder="Your name" required
                          value={form.name} onChange={e => setForm(s => ({ ...s, name: e.target.value }))}
                          className="w-full bg-[#fdfaf5] border border-[#ede8df] rounded px-3 py-2.5 text-[13px] font-light text-[#131122] outline-none transition-colors duration-200 focus:border-[#f58c27]" />
                      </Field>
                      <Field label="Phone Number">
                        <input type="tel" placeholder="+234 ..."
                          value={form.phone} onChange={e => setForm(s => ({ ...s, phone: e.target.value }))}
                          className="w-full bg-[#fdfaf5] border border-[#ede8df] rounded px-3 py-2.5 text-[13px] font-light text-[#131122] outline-none transition-colors duration-200 focus:border-[#f58c27]" />
                      </Field>
                    </div>
                    <Field label="Email Address">
                      <input type="email" placeholder="your@email.com" required
                        value={form.email} onChange={e => setForm(s => ({ ...s, email: e.target.value }))}
                        className="w-full bg-[#fdfaf5] border border-[#ede8df] rounded px-3 py-2.5 text-[13px] font-light text-[#131122] outline-none transition-colors duration-200 focus:border-[#f58c27]" />
                    </Field>
                    <Field label="Message">
                      <textarea placeholder="Fragrance recommendation, watch advice, gift idea, order enquiry..." required
                        value={form.message} onChange={e => setForm(s => ({ ...s, message: e.target.value }))}
                        className="w-full bg-[#fdfaf5] border border-[#ede8df] rounded px-3 py-2.5 text-[13px] font-light text-[#131122] outline-none transition-colors duration-200 focus:border-[#f58c27] resize-none min-h-[96px]" />
                    </Field>
                    <button type="submit"
                      className="w-full bg-[#131122] text-[#f58c27] rounded px-5 py-3 text-[10px] font-bold tracking-[0.22em] uppercase flex items-center justify-center gap-2 transition-colors duration-200 hover:bg-[#f58c27] hover:text-[#131122] cursor-pointer border-0">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                        strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                        <line x1="22" y1="2" x2="11" y2="13"/>
                        <polygon points="22 2 15 22 11 13 2 9 22 2" fill="currentColor"/>
                      </svg>
                      Send Message
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </section>

        {/* ── SOCIAL STRIP ── */}
        <div className="bg-[#ede8df] mt-20 md:mt-24 py-8 px-4">
          <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-between gap-5">
            <p style={{ fontFamily: "'Cormorant Garamond', serif" }}
              className="text-lg md:text-xl italic text-[#2e2a40]">
              Follow KPrimestores for{' '}
              <em className="text-[#c86e10] not-italic">daily fragrance &amp; watch inspiration</em>
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                { href: INSTAGRAM, label: 'Instagram', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg> },
                { href: FACEBOOK, label: 'Facebook', icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg> },
                { href: waHref, label: 'WhatsApp', icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5"><path d={WA_PATH}/></svg> },
              ].map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1.5 border border-[#f58c27]/30 rounded-full px-4 py-1.5 text-[9.5px] font-bold tracking-[0.15em] uppercase text-[#6b6484] no-underline transition-all duration-200 hover:border-[#f58c27] hover:text-[#c86e10]">
                  {s.icon} {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ── NEWSLETTER ── */}
        <div className="bg-[#131122] px-4 py-20 md:py-24 text-center">
          <span className="block text-[9.5px] tracking-[0.38em] uppercase text-[#f58c27] font-semibold mb-4">
            Stay in the Know
          </span>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif" }}
            className="text-4xl md:text-5xl font-light italic text-white leading-snug mb-3">
            Get the Latest Drops &amp; <em className="text-[#f58c27] not-italic">Exclusive Deals</em>
          </h2>
          <p className="text-[13px] font-light text-white/40 leading-loose max-w-md mx-auto mb-8">
            New fragrances, timepiece arrivals, seasonal styling guides, and subscriber-only offers — straight to your inbox.
          </p>
          {nlDone ? (
            <p className="text-[13px] font-light text-[#f58c27] tracking-[0.08em] mb-3">
              ✓ &nbsp;You're on the list — welcome to the KPrimestores family.
            </p>
          ) : (
            <div className="flex max-w-md mx-auto mb-3 border border-[#f58c27]/30 rounded overflow-hidden flex-col sm:flex-row">
              <input type="email" placeholder="Enter your email address"
                value={nl} onChange={e => setNl(e.target.value)}
                className="flex-1 bg-white/5 border-0 outline-none px-4 py-3 text-[13px] font-light text-white min-w-0" />
              <button type="button" onClick={() => nl && setNlDone(true)}
                className="bg-[#f58c27] border-0 px-5 py-3 text-[9.5px] font-bold tracking-[0.2em] uppercase text-[#131122] cursor-pointer flex-shrink-0 transition-all duration-200 hover:brightness-110 w-full sm:w-auto">
                Subscribe
              </button>
            </div>
          )}
          <p className="text-[10px] text-white/20 tracking-[0.07em]">No spam. Unsubscribe anytime.</p>
        </div>

        {/* ── THANK YOU ── */}
        <div className="bg-[#fdfaf5] px-4 py-16 md:py-20 text-center border-t border-[#ede8df]">
          <div className="max-w-lg mx-auto">
            <div className="w-8 h-px bg-[#f58c27] mx-auto mb-6" />
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif" }}
              className="text-2xl md:text-3xl font-normal italic text-[#131122] mb-4 leading-snug">
              Thank You for Choosing <em className="text-[#c86e10] not-italic">KPrimestores</em>
            </h3>
            <p className="text-[13px] font-light leading-loose text-[#6b6484] mb-7">
              Your trust means everything to us. Every order we fulfil, every scent we recommend, and every watch we place on a wrist is a moment we take seriously. We are honoured to be your destination for fragrance and style, and we look forward to serving you for years to come.
            </p>
            <a href={waHref} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25d366] text-white no-underline text-[10px] font-bold tracking-[0.2em] uppercase px-7 py-3 rounded-full transition-all duration-200 hover:brightness-110 hover:-translate-y-0.5">
              <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4"><path d={WA_PATH}/></svg>
              Chat With Us — We Are Ready
            </a>
            <p className="mt-7 text-[9px] tracking-[0.3em] uppercase text-[#6b6484]/35">
              © KPrimestores · Port Harcourt, Rivers State, Nigeria
            </p>
          </div>
        </div>

      </div>
    </>
  )
}