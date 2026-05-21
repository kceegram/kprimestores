'use client'

import React, { useState } from 'react'
import Image from 'next/image'

const PRODUCTS = [
  { id:  1, name: 'Oud Majesty',        desc: 'Deep, smoky oud with amber and musk — a statement that lingers for hours.',            rating: 5, original: '₦28,000', price: '₦18,500', img: '/kprimestoreiii.png'  },
  { id:  2, name: 'Rose Noir',          desc: 'Dark Bulgarian rose layered over vetiver and sandalwood. Hauntingly beautiful.',        rating: 5, original: '₦24,000', price: '₦15,900', img: '/kprimestorev.png'    },
  { id:  3, name: 'Amber Elixir',       desc: 'Warm amber, vanilla bean, and cashmere wood — sophistication in every spritz.',        rating: 4, original: '₦22,000', price: '₦14,500', img: '/kprimestoremiii.png' },
  { id:  4, name: 'Velvet Oud',         desc: 'Silky oud wrapped in rose petals and creamy musk. Rich, regal, unforgettable.',        rating: 5, original: '₦30,000', price: '₦19,900', img: '/kprimestorevi.png'   },
  { id:  5, name: 'Cedar Storm',        desc: 'Crisp cedarwood, fresh bergamot, and a trail of white musk. Clean power.',             rating: 4, original: '₦20,000', price: '₦13,000', img: '/kprimestorevii.png'  },
  { id:  6, name: 'Jasmine Luxe',       desc: 'Sun-drenched jasmine on a base of musk and soft patchouli. Timeless femininity.',      rating: 5, original: '₦26,000', price: '₦16,500', img: '/kprimestorexi.png'   },
  { id:  7, name: 'Black Saffron',      desc: 'Rare saffron over a heart of leather and dark woods. Bold and commanding.',            rating: 5, original: '₦32,000', price: '₦21,000', img: '/kprimestoreiii.png'  },
  { id:  8, name: 'Aqua Royale',        desc: 'Fresh ocean air, lemon zest, and driftwood. The scent of quiet luxury.',               rating: 4, original: '₦19,500', price: '₦12,800', img: '/kprimestorev.png'    },
  { id:  9, name: 'Iris Blanche',       desc: 'Powdery iris and white musks — effortlessly refined. Understated perfection.',         rating: 5, original: '₦25,000', price: '₦16,000', img: '/kprimestoremiii.png' },
  { id: 10, name: 'Dark Vanilla',       desc: 'Intense Madagascar vanilla over smoked woods. Irresistibly warm and addictive.',       rating: 5, original: '₦27,000', price: '₦17,500', img: '/kprimestorevi.png'   },
  { id: 11, name: 'Neroli Gold',        desc: 'Sparkling neroli, honey, and aged sandalwood. Sunshine in a bottle.',                  rating: 4, original: '₦21,000', price: '₦13,900', img: '/kprimestorevii.png'  },
  { id: 12, name: 'Tobacco & Oud',      desc: 'Smoky tobacco leaf fused with oud and amber resin. Intense and sophisticated.',        rating: 5, original: '₦35,000', price: '₦22,500', img: '/kprimestorexi.png'   },
  { id: 13, name: 'Peony Blanc',        desc: 'Airy white peony, fresh greens, and warm musk. Light, lovely, long-lasting.',         rating: 4, original: '₦20,500', price: '₦13,500', img: '/kprimestoreiii.png'  },
  { id: 14, name: 'Royal Musk',         desc: 'A cloud of clean musk, soft woods, and crisp white flowers. Wearable every day.',     rating: 5, original: '₦23,000', price: '₦15,000', img: '/kprimestorev.png'    },
  { id: 15, name: 'Spiced Leather',     desc: 'Bold cardamom and pink pepper riding a wave of smooth leather. Unforgettable.',        rating: 5, original: '₦29,000', price: '₦19,000', img: '/kprimestoremiii.png' },
  { id: 16, name: 'Midnight Orchid',    desc: 'Deep orchid, black plum, and patchouli — seductive elegance for the night.',          rating: 5, original: '₦31,000', price: '₦20,500', img: '/kprimestorevi.png'   },
  { id: 17, name: 'Cashmere Woods',     desc: 'Soft cashmere, creamy sandalwood, and a hint of vanilla. Wrapped in luxury.',         rating: 4, original: '₦24,500', price: '₦15,800', img: '/kprimestorevii.png'  },
  { id: 18, name: 'Citrus Prestige',    desc: 'Bergamot, grapefruit, and vetiver — the freshness of luxury effortlessly achieved.',  rating: 4, original: '₦18,500', price: '₦11,900', img: '/kprimestorexi.png'   },
  { id: 19, name: 'Santal Royale',      desc: 'Creamy Indian sandalwood, rose, and ambergris. A timeless signature scent.',          rating: 5, original: '₦33,000', price: '₦21,500', img: '/kprimestoreiii.png'  },
  { id: 20, name: 'Fougère Noire',      desc: 'Classic fougère accord with dark woods and moss. Masculine depth, refined finish.',   rating: 4, original: '₦22,500', price: '₦14,900', img: '/kprimestorev.png'    },
  { id: 21, name: 'Gardenia Dreams',    desc: 'Lush gardenia, coconut milk, and soft musk — a tropical luxury escape.',              rating: 5, original: '₦26,500', price: '₦17,000', img: '/kprimestoremiii.png' },
  { id: 22, name: 'Oud Imperiale',      desc: 'The finest aged oud blended with saffron and rose absolute. Absolute royalty.',       rating: 5, original: '₦40,000', price: '₦26,000', img: '/kprimestorevi.png'   },
  { id: 23, name: 'White Cedar',        desc: 'Smooth cedarwood, clean linen, and a trace of amber. Quietly powerful.',              rating: 4, original: '₦20,000', price: '₦13,200', img: '/kprimestorevii.png'  },
  { id: 24, name: 'Blossom & Silk',     desc: 'Cherry blossom, white silk musk, and sheer woods. Delicate, feminine, magnetic.',     rating: 5, original: '₦24,000', price: '₦15,500', img: '/kprimestorexi.png'   },
  { id: 25, name: 'Mystic Amber',       desc: 'Golden amber, labdanum, and honeyed rose — rich, resinous, and deeply warming.',      rating: 5, original: '₦28,500', price: '₦18,900', img: '/kprimestoreiii.png'  },
  { id: 26, name: 'Vetiver Élite',      desc: 'Earthy vetiver, smoked woods, and bergamot. Grounded sophistication at its finest.',  rating: 4, original: '₦21,500', price: '₦14,000', img: '/kprimestorev.png'    },
  { id: 27, name: 'Flora Intense',      desc: 'An explosion of tuberose, jasmine, and ylang-ylang on a bed of white musk.',          rating: 5, original: '₦27,500', price: '₦17,800', img: '/kprimestoremiii.png' },
  { id: 28, name: 'Noir de Nuit',       desc: 'Blackcurrant, dark oud, and incense — the ultimate after-dark fragrance.',            rating: 5, original: '₦34,000', price: '₦22,000', img: '/kprimestorevi.png'   },
  { id: 29, name: 'Patchouli Prestige', desc: 'Rich patchouli, dark chocolate, and warm musk. Bold, deep, unapologetic luxury.',     rating: 5, original: '₦29,500', price: '₦19,500', img: '/kprimestorevii.png'  },
  { id: 30, name: "Soleil d'Or",        desc: 'Sun-warmed mimosa, orange blossom, and golden amber. Pure radiance bottled.',         rating: 4, original: '₦23,500', price: '₦15,200', img: '/kprimestorexi.png'   },
]

const ITEMS_PER_PAGE = 6
const TOTAL_PAGES    = 5
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

function ProductCard({ product }) {
  const waHref = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
    `Hello KPrimestores! I'd like to buy: ${product.name} — ${product.price}`
  )}`
  return (
    <div className="kp-card">
      <div className="kp-img-wrap">
        <Image src={product.img} alt={product.name} fill className="kp-img"
          sizes="(max-width: 767px) 50vw, (max-width: 1024px) 33vw, 25vw" />
        <div className="kp-img-overlay" />
        <div className="kp-badge">Sale</div>
        <a href={waHref} target="_blank" rel="noopener noreferrer"
          className="kp-wa-hover" aria-label={`Buy ${product.name} on WhatsApp`}>
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d={WA_PATH} />
          </svg>
          <span>Buy Now</span>
        </a>
      </div>
      <div className="kp-info">
        <h3 className="kp-name">{product.name}</h3>
        <p className="kp-desc">{product.desc}</p>
        <StarRating rating={product.rating} />
        <div className="kp-price-row">
          <span className="kp-original">{product.original}</span>
          <span className="kp-price">{product.price}</span>
        </div>
        <a href={waHref} target="_blank" rel="noopener noreferrer" className="kp-buy-btn">
          <svg viewBox="0 0 24 24" style={{ width:'14px', height:'14px', fill:'currentColor', flexShrink:0 }}>
            <path d={WA_PATH} />
          </svg>
          Order on WhatsApp
        </a>
      </div>
    </div>
  )
}

export default function PerfumePage() {
  const [page, setPage] = useState(1)
  const start    = (page - 1) * ITEMS_PER_PAGE
  const products = PRODUCTS.slice(start, start + ITEMS_PER_PAGE)
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

        .kp-page { min-height:100vh; background:var(--cream); font-family:'Jost',sans-serif; padding-bottom:80px; }

        /* HERO */
        .kp-hero { background:var(--ink); padding:56px 24px 48px; text-align:center; position:relative; overflow:hidden; }
        .kp-hero::before { content:''; position:absolute; inset:0; background:radial-gradient(ellipse 80% 60% at 50% 0%,rgba(245,140,39,0.14) 0%,transparent 70%); pointer-events:none; }
        .kp-hero-label { font-size:10px; font-weight:600; letter-spacing:0.4em; text-transform:uppercase; color:var(--gold); margin-bottom:14px; display:block; }
        .kp-hero-title { font-family:'Cormorant Garamond',serif; font-size:clamp(2.6rem,6vw,5rem); font-weight:300; font-style:italic; color:#fff; line-height:1.05; margin:0 0 12px; }
        .kp-hero-title span { color:var(--gold); }
        .kp-hero-rule { width:60px; height:2px; margin:0 auto 18px; background:linear-gradient(90deg,var(--gold),var(--gold-d)); }
        .kp-hero-sub { font-size:12px; letter-spacing:0.25em; text-transform:uppercase; color:rgba(255,255,255,0.5); }

        /* FILTER BAR */
        .kp-filter-bar { display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:12px; max-width:1200px; margin:0 auto; padding:24px 24px 0; }
        .kp-count { font-size:12px; letter-spacing:0.15em; text-transform:uppercase; color:var(--ink-soft); }
        .kp-count strong { color:var(--gold); }
        .kp-page-tag { font-size:11px; letter-spacing:0.2em; text-transform:uppercase; color:var(--ink-soft); background:var(--cream-d); border:1px solid rgba(245,140,39,0.25); padding:5px 14px; border-radius:99px; }

        /* SECTION LABEL — desktop only */
        .kp-section-label { max-width:1200px; margin:36px auto 0; padding:0 24px; display:flex; align-items:center; gap:16px; }
        .kp-section-line { flex:1; height:1px; background:linear-gradient(90deg,rgba(245,140,39,0.4),transparent); }
        .kp-section-line.right { background:linear-gradient(270deg,rgba(245,140,39,0.4),transparent); }
        .kp-section-text { font-family:'Cormorant Garamond',serif; font-style:italic; font-size:1.05rem; font-weight:300; color:var(--gold-d); white-space:nowrap; letter-spacing:0.06em; }

        /* DESKTOP GRID — 3 columns, used twice */
        .kp-grid-desktop { display:grid; grid-template-columns:repeat(3,1fr); gap:24px; max-width:1200px; margin:24px auto 0; padding:0 24px; }

        /* MOBILE GRID — 2 columns, all 6, hidden on desktop */
        .kp-grid-mobile { display:none; }

        /* CARD */
        .kp-card { background:#fff; border:1px solid rgba(245,140,39,0.12); border-radius:var(--r); overflow:hidden; display:flex; flex-direction:column; transition:box-shadow 0.3s ease,transform 0.3s ease; box-shadow:0 2px 12px rgba(19,17,34,0.05); }
        .kp-card:hover { box-shadow:0 12px 40px rgba(19,17,34,0.12),0 0 0 1px rgba(245,140,39,0.28); transform:translateY(-4px); }

        /* IMAGE */
        .kp-img-wrap { position:relative; aspect-ratio:3/4; overflow:hidden; background:var(--sand); flex-shrink:0; }
        .kp-img { object-fit:cover; transition:transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94); }
        .kp-card:hover .kp-img { transform:scale(1.06); }
        .kp-img-overlay { position:absolute; inset:0; background:linear-gradient(to bottom,transparent 50%,rgba(19,17,34,0.35) 100%); pointer-events:none; }
        .kp-badge { position:absolute; top:10px; left:10px; background:linear-gradient(135deg,var(--gold),var(--gold-d)); color:var(--ink); font-size:9px; font-weight:700; letter-spacing:0.2em; text-transform:uppercase; padding:4px 10px; border-radius:2px; box-shadow:0 2px 8px rgba(245,140,39,0.4); }

        /* WA hover pill */
        .kp-wa-hover { position:absolute; bottom:12px; left:50%; transform:translateX(-50%) translateY(10px); opacity:0; background:linear-gradient(135deg,var(--wa),var(--wa-d)); color:#fff; text-decoration:none; display:flex; align-items:center; gap:7px; padding:8px 18px; border-radius:99px; font-family:'Jost',sans-serif; font-size:11px; font-weight:600; letter-spacing:0.12em; white-space:nowrap; box-shadow:0 4px 16px rgba(37,211,102,0.45); transition:opacity 0.3s ease,transform 0.3s ease; }
        .kp-wa-hover svg { width:15px; height:15px; fill:#fff; flex-shrink:0; }
        .kp-card:hover .kp-wa-hover { opacity:1; transform:translateX(-50%) translateY(0); }

        /* INFO */
        .kp-info { padding:14px 14px 16px; display:flex; flex-direction:column; gap:7px; flex:1; }
        .kp-name { font-family:'Cormorant Garamond',serif; font-size:1.15rem; font-weight:600; color:var(--ink); margin:0; line-height:1.2; }
        .kp-desc { font-size:11.5px; font-weight:300; line-height:1.55; color:var(--ink-soft); margin:0; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden; }
        .kp-price-row { display:flex; align-items:center; gap:10px; flex-wrap:wrap; margin-top:2px; }
        .kp-original { font-size:12px; color:#aaa; text-decoration:line-through; }
        .kp-price { font-family:'Cinzel',serif; font-size:1rem; font-weight:600; background:linear-gradient(135deg,var(--gold),var(--gold-d)); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; }
        .kp-buy-btn { margin-top:4px; display:flex; align-items:center; justify-content:center; gap:7px; background:var(--ink); color:var(--gold); text-decoration:none; font-family:'Jost',sans-serif; font-size:10.5px; font-weight:700; letter-spacing:0.2em; text-transform:uppercase; padding:10px 12px; border-radius:var(--r); transition:background 0.25s ease,color 0.25s ease; }
        .kp-buy-btn:hover { background:var(--gold); color:var(--ink); }

        /* PAGINATION */
        .kp-pagination { display:flex; align-items:center; justify-content:center; gap:8px; padding:48px 24px 0; }
        .kp-pg-btn { width:42px; height:42px; border-radius:50%; border:1.5px solid rgba(245,140,39,0.3); background:transparent; font-family:'Cinzel',serif; font-size:13px; font-weight:500; color:var(--ink-soft); cursor:pointer; display:flex; align-items:center; justify-content:center; transition:all 0.25s ease; outline:none; }
        .kp-pg-btn:hover { border-color:var(--gold); color:var(--gold); background:rgba(245,140,39,0.06); }
        .kp-pg-btn.active { background:linear-gradient(135deg,var(--gold),var(--gold-d)); border-color:transparent; color:var(--ink); box-shadow:0 4px 16px rgba(245,140,39,0.4); font-weight:700; }
        .kp-pg-arrow { width:42px; height:42px; border-radius:50%; border:1.5px solid rgba(245,140,39,0.3); background:transparent; color:var(--gold-d); cursor:pointer; display:flex; align-items:center; justify-content:center; font-size:1rem; outline:none; transition:all 0.25s ease; }
        .kp-pg-arrow:hover { background:var(--gold); color:var(--ink); border-color:var(--gold); }
        .kp-pg-arrow:disabled { opacity:0.3; cursor:default; }
        .kp-pg-arrow:disabled:hover { background:transparent; color:var(--gold-d); border-color:rgba(245,140,39,0.3); }
        .kp-pg-label { font-size:11px; letter-spacing:0.25em; text-transform:uppercase; color:var(--ink-soft); text-align:center; margin-top:16px; }

        /* ── MOBILE BREAKPOINT ── */
        @media (max-width: 767px) {
          /* Hide all desktop-only elements */
          .kp-desktop-only { display:none !important; }

          /* Show single 2-col mobile grid */
          .kp-grid-mobile {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
            max-width: 100%;
            margin: 20px auto 0;
            padding: 0 12px;
          }

          .kp-hero  { padding:40px 16px 36px; }
          .kp-filter-bar { padding:20px 12px 0; }
          .kp-info  { padding:10px 10px 12px; gap:5px; }
          .kp-name  { font-size:0.92rem; }
          .kp-desc  { font-size:10px; -webkit-line-clamp:3; }
          .kp-price { font-size:0.82rem; }
          .kp-original { font-size:10px; }
          .kp-buy-btn { font-size:9px; padding:8px 6px; letter-spacing:0.1em; gap:4px; }
          .kp-badge { font-size:7.5px; padding:3px 6px; }
          .kp-pg-btn, .kp-pg-arrow { width:34px; height:34px; font-size:11px; }
          .kp-pagination { gap:5px; padding-top:36px; }
          .kp-pg-label { font-size:10px; }
        }
      `}</style>

      <div className="kp-page">

        {/* HERO */}
        <div className="kp-hero">
          <span className="kp-hero-label">KPrimestores · Exclusive</span>
          <h1 className="kp-hero-title">Fine <span>Fragrances</span></h1>
          <div className="kp-hero-rule" />
          <p className="kp-hero-sub">High-Quality · Luxury Curated · Genuinely Affordable</p>
        </div>

        {/* FILTER BAR */}
        <div className="kp-filter-bar">
          <p className="kp-count">
            Showing <strong>{(page-1)*ITEMS_PER_PAGE+1}–{Math.min(page*ITEMS_PER_PAGE,PRODUCTS.length)}</strong> of <strong>{PRODUCTS.length}</strong> fragrances
          </p>
          <span className="kp-page-tag">Collection {page} of {TOTAL_PAGES}</span>
        </div>

        {/* ── DESKTOP: two rows of 3 with section labels ── */}
        <div className="kp-section-label kp-desktop-only">
          <div className="kp-section-line" />
          <span className="kp-section-text">Selection {(page-1)*2+1}</span>
          <div className="kp-section-line right" />
        </div>
        <div className="kp-grid-desktop kp-desktop-only">
          {row1.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>

        <div className="kp-section-label kp-desktop-only">
          <div className="kp-section-line" />
          <span className="kp-section-text">Selection {(page-1)*2+2}</span>
          <div className="kp-section-line right" />
        </div>
        <div className="kp-grid-desktop kp-desktop-only">
          {row2.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>

        {/* ── MOBILE: single 2-col grid of all 6, no labels ── */}
        <div className="kp-grid-mobile">
          {products.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>

        {/* PAGINATION */}
        <div className="kp-pagination">
          <button className="kp-pg-arrow" onClick={() => handlePage(page-1)} disabled={page===1} aria-label="Previous page">←</button>
          {[1,2,3,4,5].map((p) => (
            <button key={p} className={`kp-pg-btn${page===p?' active':''}`} onClick={() => handlePage(p)} aria-label={`Page ${p}`}>{p}</button>
          ))}
          <button className="kp-pg-arrow" onClick={() => handlePage(page+1)} disabled={page===TOTAL_PAGES} aria-label="Next page">→</button>
        </div>

        <p className="kp-pg-label">
          {String(page).padStart(2,'0')} / {String(TOTAL_PAGES).padStart(2,'0')} — Fine Fragrance Collection
        </p>

      </div>
    </>
  )
}