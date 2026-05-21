'use client'

import React, { useState } from 'react'
import Image from 'next/image'

const WATCHES = [
  // PAGE 1
  { id:  1, name: 'Noir Chronos',      desc: 'Bold black dial, sapphire-coated glass, and a stainless steel bracelet that commands every room.',         rating: 5, original: '₦45,000', price: '₦28,500', img: '/kprimestoreiii.png'  },
  { id:  2, name: 'Gold Sovereign',    desc: 'Gold-tone case with a sunburst dial and genuine leather strap. The definition of understated power.',        rating: 5, original: '₦52,000', price: '₦33,000', img: '/kprimestorev.png'    },
  { id:  3, name: 'Aqua Depth',        desc: 'Water-resistant sport watch with luminous hands and a precision quartz movement. Built for the bold.',        rating: 4, original: '₦38,000', price: '₦24,500', img: '/kprimestoremiii.png' },
  { id:  4, name: 'Classique Blanc',   desc: 'Clean white dial, rose-gold indices, and a slim profile that pairs effortlessly with any occasion.',          rating: 5, original: '₦41,000', price: '₦26,900', img: '/kprimestorevi.png'   },
  { id:  5, name: 'Steel Phantom',     desc: 'Brushed stainless steel, multi-function chronograph, and a masculine edge that turns heads silently.',        rating: 4, original: '₦47,000', price: '₦29,800', img: '/kprimestorevii.png'  },
  { id:  6, name: 'Velvet Midnight',   desc: 'Deep navy dial with silver subdials and a genuine croc-embossed strap. Night-ready, always.',                 rating: 5, original: '₦49,000', price: '₦31,500', img: '/kprimestorexi.png'   },
  // PAGE 2
  { id:  7, name: 'Roman Prestige',    desc: 'Roman numerals on a champagne dial, automatic movement, and a vintage soul wrapped in modern steel.',         rating: 5, original: '₦58,000', price: '₦37,000', img: '/kprimestoreiii.png'  },
  { id:  8, name: 'Obsidian Edge',     desc: 'All-black ion-plated case, stealth aesthetic, and a tungsten-hard finish that resists every scratch.',        rating: 5, original: '₦55,000', price: '₦35,500', img: '/kprimestorev.png'    },
  { id:  9, name: 'Aurora Rose',       desc: 'Soft rose-gold case, mother-of-pearl dial, and a satin strap — femininity refined to its finest expression.', rating: 4, original: '₦40,000', price: '₦25,900', img: '/kprimestoremiii.png' },
  { id: 10, name: 'Greenwich Elite',  desc: 'Dual time zone display, matt grey dial, and a pilot-inspired design that travels as well as you do.',         rating: 5, original: '₦62,000', price: '₦39,500', img: '/kprimestorevi.png'   },
  { id: 11, name: 'Titanium Prime',   desc: 'Ultra-lightweight titanium case, anti-reflective mineral glass, and a sporty-luxury crossover like no other.',  rating: 4, original: '₦44,000', price: '₦28,000', img: '/kprimestorevii.png'  },
  { id: 12, name: 'Copper Dusk',      desc: 'Warm copper-tone indices, walnut brown leather strap, and a warmth that complements every skin tone.',         rating: 5, original: '₦43,000', price: '₦27,500', img: '/kprimestorexi.png'   },
  // PAGE 3
  { id: 13, name: 'Skeleton King',    desc: 'Open-heart skeleton dial revealing precision gears within — a conversation piece worn on the wrist.',          rating: 5, original: '₦68,000', price: '₦44,000', img: '/kprimestoreiii.png'  },
  { id: 14, name: 'Pearl Royale',     desc: 'Ladies dress watch with diamond-set bezel, pearl dial, and a mesh bracelet dripping in quiet luxury.',         rating: 5, original: '₦60,000', price: '₦38,500', img: '/kprimestorev.png'    },
  { id: 15, name: 'Carbon Stealth',   desc: 'Carbon-fibre textured dial, matte bezel, and bold proportions — a watch built for those who move first.',      rating: 4, original: '₦50,000', price: '₦32,000', img: '/kprimestoremiii.png' },
  { id: 16, name: 'Grand Tourbillon', desc: 'Exhibition case back, tourbillon-style movement, and flawless finishing — grand horology made accessible.',    rating: 5, original: '₦75,000', price: '₦48,500', img: '/kprimestorevi.png'   },
  { id: 17, name: 'Solar Meridian',   desc: 'Solar-powered quartz, eco-titanium case, and a sleek minimalist dial for the modern professional.',            rating: 4, original: '₦46,000', price: '₦29,500', img: '/kprimestorevii.png'  },
  { id: 18, name: 'Ivory & Gold',     desc: 'Cream ivory dial, polished gold-tone case, and a tan leather strap — vintage romance, reborn.',                rating: 5, original: '₦53,000', price: '₦34,000', img: '/kprimestorexi.png'   },
]

const ITEMS_PER_PAGE = 6
const TOTAL_PAGES    = 3
const WA_NUMBER      = '2349134424632'

const WA_PATH = "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378L.586 21.433l1.446-5.43a9.955 9.955 0 0 1-1.337-5.01C.698 5.42 5.13 1 10.617 1c2.663 0 5.167 1.037 7.053 2.922a9.86 9.86 0 0 1 2.92 7.04c-.003 5.487-4.433 9.843-9.539 9.843m8.122-18.01A11.815 11.815 0 0 0 10.617 0C4.808 0 .07 4.733.066 10.535a10.507 10.507 0 0 0 1.407 5.279L0 24l8.397-2.203a10.578 10.578 0 0 0 5.05 1.288h.005c5.806 0 10.546-4.733 10.548-10.536a10.478 10.478 0 0 0-3.077-7.454"

function StarRating({ rating }) {
  return (
    <div style={{ display:'flex', gap:'2px', alignItems:'center' }}>
      {[1,2,3,4,5].map((s) => (
        <svg key={s} viewBox="0 0 24 24"
          style={{ width:'13px', height:'13px', flexShrink:0,
            fill: s <= rating ? '#f58c27' : 'rgba(245,140,39,0.22)' }}>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
      <span style={{ fontFamily:"'Jost',sans-serif", fontSize:'11px',
        color:'#5c5672', marginLeft:'4px', letterSpacing:'0.05em' }}>
        ({rating}.0)
      </span>
    </div>
  )
}

function WatchCard({ product }) {
  const waHref = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
    `Hello KPrimestores! I'd like to buy: ${product.name} — ${product.price}`
  )}`
  return (
    <div className="wk-card">
      <div className="wk-img-wrap">
        <Image src={product.img} alt={product.name} fill className="wk-img"
          sizes="(max-width: 767px) 50vw, (max-width: 1024px) 33vw, 25vw" />
        <div className="wk-img-overlay" />
        <div className="wk-badge">Sale</div>
        <a href={waHref} target="_blank" rel="noopener noreferrer"
          className="wk-wa-hover" aria-label={`Buy ${product.name} on WhatsApp`}>
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d={WA_PATH} />
          </svg>
          <span>Buy Now</span>
        </a>
      </div>
      <div className="wk-info">
        <h3 className="wk-name">{product.name}</h3>
        <p className="wk-desc">{product.desc}</p>
        <StarRating rating={product.rating} />
        <div className="wk-price-row">
          <span className="wk-original">{product.original}</span>
          <span className="wk-price">{product.price}</span>
        </div>
        <a href={waHref} target="_blank" rel="noopener noreferrer" className="wk-buy-btn">
          <svg viewBox="0 0 24 24" style={{ width:'14px', height:'14px', fill:'currentColor', flexShrink:0 }}>
            <path d={WA_PATH} />
          </svg>
          Order on WhatsApp
        </a>
      </div>
    </div>
  )
}

export default function WatchPage() {
  const [page, setPage] = useState(1)
  const start    = (page - 1) * ITEMS_PER_PAGE
  const products = WATCHES.slice(start, start + ITEMS_PER_PAGE)
  const row1     = products.slice(0, 3)
  const row2     = products.slice(3, 6)

  const handlePage = (p) => {
    setPage(p)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=Jost:wght@300;400;500;600;700&family=Cinzel:wght@400;500;600&display=swap');

        :root {
          --gold:     #f58c27;
          --gold-d:   #c86e10;
          --ink:      #131122;
          --ink-soft: #5c5672;
          --cream:    #fdfaf5;
          --cream-d:  #f5efe4;
          --sand:     #ede5d8;
          --wa:       #25d366;
          --wa-d:     #128c4a;
          --r:        4px;
        }

        .wk-page { min-height:100vh; background:var(--cream); font-family:'Jost',sans-serif; padding-bottom:80px; }

        /* ── HERO ── */
        .wk-hero {
          background: var(--ink);
          padding: 56px 24px 48px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .wk-hero::before {
          content: ''; position: absolute; inset: 0;
          background: radial-gradient(ellipse 80% 60% at 50% 0%, rgba(245,140,39,0.14) 0%, transparent 70%);
          pointer-events: none;
        }
        /* Decorative tick-mark pattern */
        .wk-hero::after {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; bottom: 0;
          background-image: repeating-linear-gradient(
            90deg,
            transparent,
            transparent 59px,
            rgba(245,140,39,0.04) 59px,
            rgba(245,140,39,0.04) 60px
          );
          pointer-events: none;
        }
        .wk-hero-eyebrow {
          display: inline-flex; align-items: center; gap: 10px;
          font-size: 10px; font-weight: 600; letter-spacing: 0.4em;
          text-transform: uppercase; color: var(--gold);
          margin-bottom: 16px;
        }
        .wk-hero-eyebrow-tick {
          width: 20px; height: 1px;
          background: linear-gradient(90deg, transparent, var(--gold));
        }
        .wk-hero-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2.6rem, 6vw, 5rem);
          font-weight: 300; font-style: italic;
          color: #fff; line-height: 1.05; margin: 0 0 8px;
        }
        .wk-hero-title span { color: var(--gold); }
        .wk-hero-rule {
          width: 60px; height: 2px; margin: 12px auto 18px;
          background: linear-gradient(90deg, var(--gold), var(--gold-d));
        }
        .wk-hero-sub {
          font-size: 12px; letter-spacing: 0.25em; text-transform: uppercase;
          color: rgba(255,255,255,0.5);
        }
        /* Dial ornament */
        .wk-hero-dial {
          width: 56px; height: 56px; border-radius: 50%;
          border: 1px solid rgba(245,140,39,0.3);
          display: flex; align-items: center; justify-content: center;
          margin: 20px auto 0; position: relative;
        }
        .wk-hero-dial::before {
          content: '';
          position: absolute;
          width: 44px; height: 44px; border-radius: 50%;
          border: 1px solid rgba(245,140,39,0.15);
        }
        .wk-hero-dial-hand {
          width: 1.5px; height: 16px;
          background: linear-gradient(to top, var(--gold), transparent);
          border-radius: 1px;
          transform-origin: bottom center;
          transform: rotate(-30deg);
          position: absolute; bottom: 50%;
        }
        .wk-hero-dial-hand.short {
          height: 10px;
          transform: rotate(60deg);
          background: linear-gradient(to top, var(--gold-d), transparent);
        }

        /* ── FILTER BAR ── */
        .wk-filter-bar {
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: 12px;
          max-width: 1200px; margin: 0 auto; padding: 24px 24px 0;
        }
        .wk-count { font-size: 12px; letter-spacing: 0.15em; text-transform: uppercase; color: var(--ink-soft); }
        .wk-count strong { color: var(--gold); }
        .wk-page-tag {
          font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; color: var(--ink-soft);
          background: var(--cream-d); border: 1px solid rgba(245,140,39,0.25);
          padding: 5px 14px; border-radius: 99px;
        }

        /* ── SECTION LABEL (desktop only) ── */
        .wk-section-label {
          max-width: 1200px; margin: 36px auto 0; padding: 0 24px;
          display: flex; align-items: center; gap: 16px;
        }
        .wk-section-line { flex: 1; height: 1px; background: linear-gradient(90deg, rgba(245,140,39,0.4), transparent); }
        .wk-section-line.right { background: linear-gradient(270deg, rgba(245,140,39,0.4), transparent); }
        .wk-section-text {
          font-family: 'Cormorant Garamond', serif;
          font-style: italic; font-size: 1.05rem; font-weight: 300;
          color: var(--gold-d); white-space: nowrap; letter-spacing: 0.06em;
        }

        /* ── DESKTOP GRID ── */
        .wk-grid-desktop {
          display: grid; grid-template-columns: repeat(3, 1fr);
          gap: 24px; max-width: 1200px; margin: 24px auto 0; padding: 0 24px;
        }

        /* ── MOBILE GRID (hidden on desktop) ── */
        .wk-grid-mobile { display: none; }

        /* ── CARD ── */
        .wk-card {
          background: #fff;
          border: 1px solid rgba(245,140,39,0.12);
          border-radius: var(--r); overflow: hidden;
          display: flex; flex-direction: column;
          transition: box-shadow 0.3s ease, transform 0.3s ease;
          box-shadow: 0 2px 12px rgba(19,17,34,0.05);
        }
        .wk-card:hover {
          box-shadow: 0 12px 40px rgba(19,17,34,0.12), 0 0 0 1px rgba(245,140,39,0.28);
          transform: translateY(-4px);
        }

        /* ── IMAGE ── */
        .wk-img-wrap {
          position: relative;
          aspect-ratio: 1 / 1;
          overflow: hidden; background: var(--sand); flex-shrink: 0;
        }
        .wk-img { object-fit: cover; transition: transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94); }
        .wk-card:hover .wk-img { transform: scale(1.06); }
        .wk-img-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to bottom, transparent 45%, rgba(19,17,34,0.38) 100%);
          pointer-events: none;
        }
        .wk-badge {
          position: absolute; top: 10px; left: 10px;
          background: linear-gradient(135deg, var(--gold), var(--gold-d));
          color: var(--ink); font-size: 9px; font-weight: 700;
          letter-spacing: 0.2em; text-transform: uppercase;
          padding: 4px 10px; border-radius: 2px;
          box-shadow: 0 2px 8px rgba(245,140,39,0.4);
        }

        /* WA hover pill on image */
        .wk-wa-hover {
          position: absolute; bottom: 12px; left: 50%;
          transform: translateX(-50%) translateY(10px); opacity: 0;
          background: linear-gradient(135deg, var(--wa), var(--wa-d));
          color: #fff; text-decoration: none;
          display: flex; align-items: center; gap: 7px;
          padding: 8px 18px; border-radius: 99px;
          font-family: 'Jost', sans-serif;
          font-size: 11px; font-weight: 600; letter-spacing: 0.12em; white-space: nowrap;
          box-shadow: 0 4px 16px rgba(37,211,102,0.45);
          transition: opacity 0.3s ease, transform 0.3s ease;
        }
        .wk-wa-hover svg { width: 15px; height: 15px; fill: #fff; flex-shrink: 0; }
        .wk-card:hover .wk-wa-hover { opacity: 1; transform: translateX(-50%) translateY(0); }

        /* ── INFO ── */
        .wk-info { padding: 14px 14px 16px; display: flex; flex-direction: column; gap: 7px; flex: 1; }
        .wk-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.15rem; font-weight: 600; color: var(--ink); margin: 0; line-height: 1.2;
        }
        .wk-desc {
          font-size: 11.5px; font-weight: 300; line-height: 1.55; color: var(--ink-soft); margin: 0;
          display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;
        }
        .wk-price-row { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; margin-top: 2px; }
        .wk-original { font-size: 12px; color: #aaa; text-decoration: line-through; }
        .wk-price {
          font-family: 'Cinzel', serif; font-size: 1rem; font-weight: 600; letter-spacing: 0.05em;
          background: linear-gradient(135deg, var(--gold), var(--gold-d));
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }
        .wk-buy-btn {
          margin-top: 4px;
          display: flex; align-items: center; justify-content: center; gap: 7px;
          background: var(--ink); color: var(--gold); text-decoration: none;
          font-family: 'Jost', sans-serif; font-size: 10.5px; font-weight: 700;
          letter-spacing: 0.2em; text-transform: uppercase;
          padding: 10px 12px; border-radius: var(--r);
          transition: background 0.25s ease, color 0.25s ease;
        }
        .wk-buy-btn:hover { background: var(--gold); color: var(--ink); }

        /* ── PAGINATION ── */
        .wk-pagination {
          display: flex; align-items: center; justify-content: center;
          gap: 8px; padding: 48px 24px 0;
        }
        .wk-pg-btn {
          width: 42px; height: 42px; border-radius: 50%;
          border: 1.5px solid rgba(245,140,39,0.3); background: transparent;
          font-family: 'Cinzel', serif; font-size: 13px; font-weight: 500; color: var(--ink-soft);
          cursor: pointer; display: flex; align-items: center; justify-content: center;
          transition: all 0.25s ease; outline: none;
        }
        .wk-pg-btn:hover { border-color: var(--gold); color: var(--gold); background: rgba(245,140,39,0.06); }
        .wk-pg-btn.active {
          background: linear-gradient(135deg, var(--gold), var(--gold-d));
          border-color: transparent; color: var(--ink);
          box-shadow: 0 4px 16px rgba(245,140,39,0.4); font-weight: 700;
        }
        .wk-pg-arrow {
          width: 42px; height: 42px; border-radius: 50%;
          border: 1.5px solid rgba(245,140,39,0.3); background: transparent; color: var(--gold-d);
          cursor: pointer; display: flex; align-items: center; justify-content: center;
          font-size: 1rem; outline: none; transition: all 0.25s ease;
        }
        .wk-pg-arrow:hover { background: var(--gold); color: var(--ink); border-color: var(--gold); }
        .wk-pg-arrow:disabled { opacity: 0.3; cursor: default; }
        .wk-pg-arrow:disabled:hover { background: transparent; color: var(--gold-d); border-color: rgba(245,140,39,0.3); }
        .wk-pg-label {
          font-size: 11px; letter-spacing: 0.25em; text-transform: uppercase;
          color: var(--ink-soft); text-align: center; margin-top: 16px;
        }

        /* ── MOBILE BREAKPOINT ── */
        @media (max-width: 767px) {
          .wk-desktop-only { display: none !important; }

          .wk-grid-mobile {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
            max-width: 100%;
            margin: 20px auto 0;
            padding: 0 12px;
          }

          .wk-hero    { padding: 40px 16px 36px; }
          .wk-filter-bar { padding: 20px 12px 0; }
          .wk-info    { padding: 10px 10px 12px; gap: 5px; }
          .wk-name    { font-size: 0.92rem; }
          .wk-desc    { font-size: 10px; -webkit-line-clamp: 3; }
          .wk-price   { font-size: 0.82rem; }
          .wk-original{ font-size: 10px; }
          .wk-buy-btn { font-size: 9px; padding: 8px 6px; letter-spacing: 0.1em; gap: 4px; }
          .wk-badge   { font-size: 7.5px; padding: 3px 6px; }
          .wk-pg-btn, .wk-pg-arrow { width: 34px; height: 34px; font-size: 11px; }
          .wk-pagination { gap: 5px; padding-top: 36px; }
          .wk-pg-label { font-size: 10px; }
          .wk-hero-dial { display: none; }
        }
      `}</style>

      <div className="wk-page">

        {/* ── HERO ── */}
        <div className="wk-hero">
          <div className="wk-hero-eyebrow">
            <span className="wk-hero-eyebrow-tick" />
            KPrimestores · Timepieces
            <span className="wk-hero-eyebrow-tick" style={{ transform:'scaleX(-1)' }} />
          </div>
          <h1 className="wk-hero-title">
            Precision <span>Watches</span>
          </h1>
          <div className="wk-hero-rule" />
          <p className="wk-hero-sub">Crafted Excellence · Luxury Movement · Genuinely Affordable</p>
          {/* Decorative dial ornament */}
          <div className="wk-hero-dial">
            <div className="wk-hero-dial-hand" />
            <div className="wk-hero-dial-hand short" />
          </div>
        </div>

        {/* ── FILTER BAR ── */}
        <div className="wk-filter-bar">
          <p className="wk-count">
            Showing{' '}
            <strong>{(page - 1) * ITEMS_PER_PAGE + 1}–{Math.min(page * ITEMS_PER_PAGE, WATCHES.length)}</strong>
            {' '}of <strong>{WATCHES.length}</strong> timepieces
          </p>
          <span className="wk-page-tag">Collection {page} of {TOTAL_PAGES}</span>
        </div>

        {/* ══ DESKTOP: two rows of 3 with section labels ══ */}
        <div className="wk-section-label wk-desktop-only">
          <div className="wk-section-line" />
          <span className="wk-section-text">Selection {(page - 1) * 2 + 1}</span>
          <div className="wk-section-line right" />
        </div>
        <div className="wk-grid-desktop wk-desktop-only">
          {row1.map((p) => <WatchCard key={p.id} product={p} />)}
        </div>

        <div className="wk-section-label wk-desktop-only">
          <div className="wk-section-line" />
          <span className="wk-section-text">Selection {(page - 1) * 2 + 2}</span>
          <div className="wk-section-line right" />
        </div>
        <div className="wk-grid-desktop wk-desktop-only">
          {row2.map((p) => <WatchCard key={p.id} product={p} />)}
        </div>

        {/* ══ MOBILE: single 2-col grid of all 6, no section labels ══ */}
        <div className="wk-grid-mobile">
          {products.map((p) => <WatchCard key={p.id} product={p} />)}
        </div>

        {/* ── PAGINATION ── */}
        <div className="wk-pagination">
          <button className="wk-pg-arrow" onClick={() => handlePage(page - 1)}
            disabled={page === 1} aria-label="Previous page">←</button>

          {[1, 2, 3].map((p) => (
            <button key={p}
              className={`wk-pg-btn${page === p ? ' active' : ''}`}
              onClick={() => handlePage(p)} aria-label={`Page ${p}`}>
              {p}
            </button>
          ))}

          <button className="wk-pg-arrow" onClick={() => handlePage(page + 1)}
            disabled={page === TOTAL_PAGES} aria-label="Next page">→</button>
        </div>

        <p className="wk-pg-label">
          {String(page).padStart(2, '0')} / {String(TOTAL_PAGES).padStart(2, '0')} — Precision Timepiece Collection
        </p>

      </div>
    </>
  )
}
