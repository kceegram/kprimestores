import Link from "next/link";
import Image from "next/image";

/* ─────────────────────────────────────────────────────────────
   FOOTER — KPrimestores
   bg-gray-50 matches navbar · Logo renders correctly
   ─────────────────────────────────────────────────────────────
   NOTE: For the FAQ anchor to scroll correctly, add id="faq"
   to your FAQ <section> in contact/page.jsx
   ───────────────────────────────────────────────────────────── */

const WA_NUMBER = "2349134424632";
const WA_HREF   = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Hello KPrimestores! I'd like to place an order.")}`;
const INSTAGRAM = "https://instagram.com/kprimestores";
const FACEBOOK  = "https://facebook.com/kprimestores";

const WA_PATH = "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378L.586 21.433l1.446-5.43a9.955 9.955 0 0 1-1.337-5.01C.698 5.42 5.13 1 10.617 1c2.663 0 5.167 1.037 7.053 2.922a9.86 9.86 0 0 1 2.92 7.04c-.003 5.487-4.433 9.843-9.539 9.843m8.122-18.01A11.815 11.815 0 0 0 10.617 0C4.808 0 .07 4.733.066 10.535a10.507 10.507 0 0 0 1.407 5.279L0 24l8.397-2.203a10.578 10.578 0 0 0 5.05 1.288h.005c5.806 0 10.546-4.733 10.548-10.536a10.478 10.478 0 0 0-3.077-7.454";

const NAV_LINKS = [
  { label: "Perfumes", href: "/perfumes" },
  { label: "Watches",  href: "/watches"  },
  { label: "Blog",     href: "/blog"     },
  { label: "Contact",  href: "/contact"  },
  { label: "FAQ",      href: "/contact#faq" },
];

const SOCIAL = [
  {
    label: "Instagram", sub: "@kprimestores", href: INSTAGRAM,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
        strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <rect x="2" y="2" width="20" height="20" rx="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    label: "Facebook", sub: "KPrimestores", href: FACEBOOK,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
  },
  {
    label: "WhatsApp", sub: "+234 913 442 4632", href: WA_HREF,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d={WA_PATH}/>
      </svg>
    ),
  },
  {
    label: "Email", sub: "hello.kprimstore@gmail.com", href: "mailto:hello.kprimstore@gmail.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
        strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
  },
];

const TRUST = [
  {
    label: "100% Authentic",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  },
  {
    label: "Fast Delivery",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5"><path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v3"/><rect x="9" y="11" width="14" height="10" rx="2"/><circle cx="12" cy="21" r="1"/><circle cx="20" cy="21" r="1"/></svg>,
  },
  {
    label: "Secure Payments",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>,
  },
  {
    label: "5★ Rated",
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>,
  },
];

export default function Footer() {
  return (
    <footer style={{ fontFamily: "'Jost', sans-serif" }} className="w-full">

      {/* ── TOP GOLD ACCENT ── */}
      <div className="h-[3px] w-full"
        style={{ background: "linear-gradient(90deg, #e5e7eb, #f58c27, #e5e7eb)" }} />

      {/* ── MAIN FOOTER BODY — gray-50 matches navbar ── */}
      <div className="bg-gray-50 border-t border-gray-200 px-4 sm:px-8 pt-12 pb-8">
        <div className="max-w-5xl mx-auto">

          {/* ── GRID ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-10 border-b border-gray-200">

            {/* COL 1 — Brand */}
            <div className="lg:col-span-1">
              <Link href="/" className="inline-block mb-4 -ml-1">
                <Image
                  src="/kprimestore.img.png"
                  alt="KPrimestores"
                  width={200}
                  height={36}
                  priority
                  className="object-contain"
                />
              </Link>
              <p style={{ fontFamily: "'Cormorant Garamond', serif" }}
                className="text-sm italic font-light text-zinc-500 leading-relaxed mb-5">
                Premium fragrances &amp; watches, curated for the Nigerian lifestyle.
              </p>
              {/* Trust pills */}
              <div className="flex flex-wrap gap-1.5">
                {TRUST.map(t => (
                  <span key={t.label}
                    className="inline-flex items-center gap-1 text-[9px] font-semibold tracking-[0.1em] uppercase text-amber-600 bg-amber-50 border border-amber-200 rounded-full px-2.5 py-1">
                    <span className="text-amber-500">{t.icon}</span>
                    {t.label}
                  </span>
                ))}
              </div>
            </div>

            {/* COL 2 — Quick Links */}
            <div>
              <h4 className="text-[9px] font-bold tracking-[0.38em] uppercase text-amber-500 mb-5">
                Quick Links
              </h4>
              <nav className="flex flex-col gap-0.5">
                {NAV_LINKS.map(link => (
                  <Link key={link.label} href={link.href}
                    className="group flex items-center gap-2.5 py-1.5 no-underline">
                    <span className="w-3 h-px bg-amber-300 flex-shrink-0 transition-all duration-300 group-hover:w-5 group-hover:bg-amber-500" />
                    <span className="text-[13px] font-light text-zinc-500 transition-colors duration-200 group-hover:text-zinc-900">
                      {link.label}
                    </span>

                  </Link>
                ))}
              </nav>
            </div>

            {/* COL 3 — Connect */}
            <div>
              <h4 className="text-[9px] font-bold tracking-[0.38em] uppercase text-amber-500 mb-5">
                Connect With Us
              </h4>
              <div className="flex flex-col gap-1.5">
                {SOCIAL.map(s => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                    className="group flex items-center gap-3 py-1.5 no-underline">
                    <span className="w-8 h-8 flex-shrink-0 rounded-full border border-gray-200 bg-white flex items-center justify-center text-zinc-400 shadow-sm transition-all duration-200 group-hover:border-amber-300 group-hover:text-amber-500 group-hover:shadow-md">
                      {s.icon}
                    </span>
                    <span>
                      <span className="block text-[11.5px] font-medium text-zinc-600 group-hover:text-zinc-900 transition-colors duration-200 leading-tight">
                        {s.label}
                      </span>
                      <span className="block text-[10px] font-light text-zinc-400 truncate max-w-[140px]">
                        {s.sub}
                      </span>
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* COL 4 — WhatsApp CTA */}
            <div>
              <h4 className="text-[9px] font-bold tracking-[0.38em] uppercase text-amber-500 mb-5">
                Order Now
              </h4>

              <div className="relative rounded-lg overflow-hidden border border-gray-200 bg-white shadow-sm">
                {/* top accent */}
                <div className="h-0.5 w-full"
                  style={{ background: "linear-gradient(90deg,#f58c27,#c86e10)" }} />
                <div className="p-4">
                  <div className="flex items-center gap-2.5 mb-3">
                    <span className="w-9 h-9 rounded-full bg-[#25d366]/10 flex items-center justify-center flex-shrink-0 border border-[#25d366]/20">
                      <svg viewBox="0 0 24 24" fill="#25d366" className="w-4 h-4">
                        <path d={WA_PATH}/>
                      </svg>
                    </span>
                    <div>
                      <span className="block text-[11.5px] font-semibold text-zinc-800 leading-tight">Chat Us on WhatsApp</span>
                      <span className="block text-[10px] text-zinc-400 leading-tight">Fastest response guaranteed</span>
                    </div>
                  </div>
                  <p className="text-[11px] font-light text-zinc-400 leading-relaxed mb-4">
                    Get personalised fragrance &amp; watch recommendations — or place your order directly.
                  </p>
                  <a href={WA_HREF} target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-[#25d366] text-white no-underline rounded text-[9.5px] font-bold tracking-[0.18em] uppercase py-2.5 transition-all duration-200 hover:brightness-110 hover:shadow-md">
                    <svg viewBox="0 0 24 24" fill="white" className="w-3.5 h-3.5">
                      <path d={WA_PATH}/>
                    </svg>
                    Start a Chat
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-1.5 mt-4 text-[10px] font-light text-zinc-400">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
                  strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 text-amber-400 flex-shrink-0">
                  <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                Port Harcourt, Rivers State · Nigeria
              </div>
            </div>

          </div>

          {/* ── BOTTOM BAR ── */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">

            <span className="text-[11px] font-light text-zinc-400 tracking-wide">
              © {new Date().getFullYear()} KPrimestores. All rights reserved.
            </span>

            {/* Mini nav */}
            <div className="flex items-center gap-1 flex-wrap justify-center">
              {NAV_LINKS.filter(l => l.label !== "FAQ").map((link, i, arr) => (
                <span key={link.label} className="flex items-center gap-1">
                  <Link href={link.href}
                    className="text-[10px] font-light text-zinc-400 hover:text-amber-500 no-underline transition-colors duration-200">
                    {link.label}
                  </Link>
                  {i < arr.length - 1 && (
                    <span className="text-zinc-300 text-[10px]">·</span>
                  )}
                </span>
              ))}
            </div>

            <span className="inline-flex items-center gap-1.5 border border-amber-200 bg-amber-50 rounded-full px-3 py-1 text-[9.5px] font-semibold text-amber-600 tracking-[0.1em]">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              Trusted Store
            </span>

          </div>
        </div>
      </div>

    </footer>
  );
}