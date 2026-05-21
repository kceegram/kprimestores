'use client'

import React, { useState } from 'react'
import Image from 'next/image'

/* ─────────────────────────────────────────
   BLOG POSTS — 9 articles: 5 perfume, 4 watch
───────────────────────────────────────────*/
const POSTS = [
  {
    id: 1,
    category: 'Perfumes',
    tag: 'Guide',
    title: 'Oud: The Liquid Gold of the Fragrance World',
    excerpt:
      'Harvested from the heartwood of infected agarwood trees, oud is one of the rarest and most expensive raw materials in perfumery. Here is everything you need to know before your first oud purchase — from its origins in Southeast Asia and the Middle East, to how to identify quality oud in a bottle.',
    date: 'April 28, 2026',
    readTime: '5 min read',
    img: '/kprimestoreiii.png',
    featured: true,
    body: [
      'Oud — also called agarwood or liquid gold — is derived from the resinous heartwood of the Aquilaria tree when it becomes infected with a specific mould. The tree responds by producing a dark, aromatic resin, and it is this resin that perfumers prize above almost all other ingredients.',
      'The finest oud comes from Cambodia, India, and parts of the Middle East, each region producing a distinctly different character. Cambodian oud tends to be sweeter, almost fruity. Indian oud carries a deep, animalic warmth. Arabian oud is smokier and more resinous — the kind that clings to fabric for days.',
      'When shopping for an oud fragrance, look for transparency from the brand about its oud source. Synthetic oud, while not inherently inferior, should always be labelled as such. At KPrimestores, every oud-based fragrance in our collection carries source notes so you always know what you are wearing.',
    ],
  },
  {
    id: 2,
    category: 'Watches',
    tag: 'Education',
    title: 'Quartz vs Automatic: Which Movement Is Right for You?',
    excerpt:
      'The debate between quartz and automatic movements has divided watch enthusiasts for decades. But the truth is, neither is universally superior — it depends entirely on what you value. We break down the mechanics, the pros, the cons, and the lifestyle fit for each.',
    date: 'April 22, 2026',
    readTime: '6 min read',
    img: '/kprimestorev.png',
    featured: false,
    body: [
      'A quartz watch runs on a battery that sends an electric signal through a quartz crystal, causing it to vibrate 32,768 times per second. This vibration drives the motor and moves the hands. The result is extraordinary accuracy — typically within 15 seconds per month.',
      'An automatic watch, by contrast, is powered by the natural motion of the wearer\'s wrist. A rotor spins with movement, winding a mainspring that stores energy. No battery required. The tradeoff is that automatics can gain or lose 5–20 seconds per day depending on quality.',
      'Our recommendation at KPrimestores: if you wear a watch daily and want zero maintenance, choose quartz. If you want the romance of mechanical engineering on your wrist and are prepared to wear it regularly (or invest in a watch winder), go automatic.',
    ],
  },
  {
    id: 3,
    category: 'Perfumes',
    tag: 'Lifestyle',
    title: 'How to Make Your Fragrance Last All Day',
    excerpt:
      'You spray on your favourite scent in the morning and by noon it has vanished. Sound familiar? Fragrance longevity is one of the most searched topics in perfumery — and most of the answers have nothing to do with the bottle itself. Here are seven proven techniques that actually work.',
    date: 'April 15, 2026',
    readTime: '4 min read',
    img: '/kprimestoremiii.png',
    featured: false,
    body: [
      'Moisturised skin holds fragrance significantly longer than dry skin. Before applying your perfume, use an unscented lotion or body oil on your pulse points — wrists, neck, inner elbows, and behind the knees. The fragrance molecules bind to the oils and release slowly throughout the day.',
      'Spray, do not rub. Rubbing breaks down the top notes and causes the fragrance to fade faster. Instead, spray from about 15–20cm away and let it settle naturally.',
      'Store your fragrances away from heat, light, and humidity. A bedside table or bathroom shelf might seem convenient, but both are fragrance killers. A cool, dark drawer or shelf is ideal. At KPrimestores, all our fragrances are shipped in protective packaging to preserve integrity from bottle to skin.',
    ],
  },
  {
    id: 4,
    category: 'Watches',
    tag: 'Style',
    title: 'The 5 Watch Styles Every Man Should Know',
    excerpt:
      'From the boardroom to the beach, the right watch speaks before you do. But with so many styles available — dress, field, dive, pilot, and chronograph — knowing which to reach for can be overwhelming. We break down each category so you always wear the right watch for the right moment.',
    date: 'April 10, 2026',
    readTime: '5 min read',
    img: '/kprimestorevi.png',
    featured: false,
    body: [
      'A dress watch is thin, elegant, and restrained. Usually featuring a simple dial, leather strap, and a case under 40mm, it is designed to slide under a shirt cuff and whisper rather than shout. Think slim gold or silver cases, minimal numerals, and no complications beyond the time.',
      'A chronograph adds a stopwatch function to a standard watch. Subdials on the face track seconds, minutes, and sometimes hours. It is the most versatile formal-sport crossover available — capable of sitting comfortably in a meeting or at a motorsport event.',
      'Dive watches, built to withstand water pressure, are among the most durable everyday watches available. With a rotating bezel, screw-down crown, and luminous hands, they are equally at home in the ocean or on a casual weekend outing. Many of KPrimestores\' most popular timepieces draw from the dive watch tradition.',
    ],
  },
  {
    id: 5,
    category: 'Perfumes',
    tag: 'Beginner',
    title: 'Understanding Fragrance Notes: Top, Heart, and Base Explained',
    excerpt:
      'Every perfume tells a story in three acts. The top notes greet you first, the heart defines the character, and the base is what stays with you — and on your clothes — long after everything else fades. Once you understand this structure, choosing a perfume becomes a completely different experience.',
    date: 'April 3, 2026',
    readTime: '4 min read',
    img: '/kprimestorevii.png',
    featured: false,
    body: [
      'Top notes are the first impression. They are the lightest molecules in the composition and evaporate fastest — typically within 15 to 30 minutes. Common top notes include bergamot, lemon, grapefruit, and fresh herbs. They are designed to draw you in, not to define the full fragrance.',
      'Heart notes, also called middle notes, emerge as the top notes fade. They form the core character of the scent and can last two to four hours. Typical heart notes include rose, jasmine, geranium, cardamom, and cinnamon. This is the act that defines whether a perfume suits you.',
      'Base notes are the foundation. Heavy, rich, and slow to evaporate, they can linger on skin and fabric for hours or even days. Common base notes include oud, sandalwood, musk, amber, and vanilla. When a sales assistant says a perfume has "great longevity," they are almost always referring to powerful base notes.',
    ],
  },
  {
    id: 6,
    category: 'Watches',
    tag: 'Care',
    title: 'How to Care for Your Watch and Make It Last a Lifetime',
    excerpt:
      'A quality watch, properly maintained, can outlast its owner. But neglect the basics and even the finest timepiece will deteriorate long before its time. Here is our complete guide to watch care — from daily habits to knowing exactly when to service.',
    date: 'March 27, 2026',
    readTime: '5 min read',
    img: '/kprimestorexi.png',
    featured: false,
    body: [
      'Clean your watch regularly with a soft, lint-free cloth. For stainless steel bracelets, a slightly damp cloth with mild soap can remove sweat and grime from the links. Leather straps should never be submerged — wipe gently and allow to air dry naturally away from direct sunlight.',
      'Even a watch rated water-resistant to 30 metres should not be worn in the shower. The combination of hot water, steam, and soap can degrade gaskets over time, compromising the seals that protect the movement. Reserve your watch for the wrist, not the bathroom.',
      'Service intervals depend on movement type. Automatic watches benefit from a full service every three to five years. Quartz watches need a battery change every one to two years and a full service every five to seven. At KPrimestores, we recommend noting your purchase date and setting a reminder — consistency is the key to longevity.',
    ],
  },
  {
    id: 7,
    category: 'Perfumes',
    tag: 'Trending',
    title: 'The Rise of Nigerian Fragrance Culture: Why Scent Is Having Its Moment',
    excerpt:
      'Across Lagos, Abuja, and Port Harcourt, fragrance culture is experiencing a genuine renaissance. Nigerians are increasingly turning to perfume not just as a hygiene product but as a luxury statement, a mood tool, and a signature. We explore what is driving the shift — and what it means for how we shop.',
    date: 'March 19, 2026',
    readTime: '5 min read',
    img: '/kprimestoreiii.png',
    featured: false,
    body: [
      'Until recently, fragrance shopping in Nigeria meant choosing between a handful of European brands available at duty-free or department stores. Today, the landscape has completely changed. Online stores like KPrimestores have brought access to hundreds of international fragrance profiles — from niche oud compositions to fresh aquatics — at prices that make exploration possible.',
      'Social media has been a significant driver. Fragrance communities on X (formerly Twitter) and Instagram have created an entirely new vocabulary — sillage, longevity, scrubbers, blind buys — that has turned fragrance from a passive purchase into an active hobby. Fragrance creators with large Nigerian followings have introduced thousands of new shoppers to the world of niche and designer scents.',
      'The result is a more discerning, more experimental buyer. At KPrimestores, we have seen a clear shift in customer behaviour: fewer people are buying a single "signature" scent and more are building a wardrobe of fragrances — one for work, one for evenings, one for weekends. That is the hallmark of a mature fragrance culture, and Nigeria is right in the middle of it.',
    ],
  },
  {
    id: 8,
    category: 'Watches',
    tag: 'Guide',
    title: 'How to Choose the Right Watch Size for Your Wrist',
    excerpt:
      'Nothing undermines a great watch like the wrong case size. Too large and it looks theatrical; too small and it disappears. Wrist proportion is the single most overlooked factor in watch buying — and getting it right transforms how you look in a watch entirely.',
    date: 'March 12, 2026',
    readTime: '4 min read',
    img: '/kprimestorev.png',
    featured: false,
    body: [
      'The most reliable method is to measure your wrist circumference and compare it to the watch\'s case diameter. For wrists under 16cm, cases of 36–40mm typically fit best. Wrists between 16cm and 18cm can comfortably carry 40–44mm cases. Larger wrists above 18cm can wear 44mm and above without the watch looking oversized.',
      'Lug-to-lug distance is equally important and often overlooked in product listings. This is the measurement from the top lug to the bottom lug — the vertical span of the watch across your wrist. If the lugs overhang your wrist significantly, the watch will feel and look imbalanced regardless of case diameter.',
      'Case thickness also affects perceived size. A thick case on a narrow wrist creates a stacked, bulky appearance. Dress watches worn with formal attire generally benefit from cases under 10mm in thickness. Sport and casual watches have more latitude.',
    ],
  },
  {
    id: 9,
    category: 'Perfumes',
    tag: 'Seasonal',
    title: 'The Best Fragrances to Wear in Every Season',
    excerpt:
      'Fragrance and weather are more connected than most people realise. Heat amplifies projection and sillage, making heavy musks and ouds overwhelming in a Lagos afternoon. Cooler harmattan evenings call for warmer, richer scents that bloom slowly. Here is how to dress your skin in scent for every season.',
    date: 'March 5, 2026',
    readTime: '4 min read',
    img: '/kprimestoremiii.png',
    featured: false,
    body: [
      'In warm, humid weather — the reality for much of the Nigerian calendar — lighter fragrance families perform best. Aquatic, citrus, and fresh floral compositions have smaller molecules that diffuse beautifully in heat without becoming cloying. Look for top notes of bergamot, neroli, and sea salt with light musk bases.',
      'During cooler, drier periods, the skin holds fragrance differently. This is the time to explore richer compositions: warm ambers, vanilla, sandalwood, spiced leathers, and deep florals. These scents bloom gradually in cooler temperatures and create a compelling, intimate trail.',
      'A practical approach used by fragrance collectors is the "day juice, night juice" system — lighter, fresher scents for daytime and warmer, denser compositions after sunset regardless of season. It mirrors what the fashion world calls dressing for occasion, and it ensures you are never overdressed or underdressed in scent.',
    ],
  },
]

const CATEGORIES = ['All', 'Perfumes', 'Watches']
const WA_NUMBER  = '2349134424632'

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [expandedId, setExpandedId]         = useState(null)

  const filtered = activeCategory === 'All'
    ? POSTS
    : POSTS.filter((p) => p.category === activeCategory)

  const featured  = POSTS.find((p) => p.featured)
  const regular   = filtered.filter((p) => !p.featured || activeCategory !== 'All')
  const showGrid  = activeCategory === 'All' ? filtered.filter((p) => !p.featured) : filtered

  const waHref = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
    "Hello KPrimestores! I read your blog and I'd love to explore your perfume and watch collection."
  )}`

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600&family=Jost:wght@300;400;500;600;700&family=Cinzel:wght@400;500;600&display=swap');

        :root {
          --gold:    #f58c27;
          --gold-d:  #c86e10;
          --ink:     #131122;
          --ink-mid: #2e2a40;
          --ink-soft:#5c5672;
          --cream:   #fdfaf5;
          --cream-d: #f5efe4;
          --sand:    #ede5d8;
          --wa:      #25d366;
          --wa-d:    #128c4a;
          --r:       6px;
        }

        .bl-page { min-height:100vh; background:var(--cream); font-family:'Jost',sans-serif; padding-bottom:100px; }

        /* ── HERO ── */
        .bl-hero {
          background: var(--ink);
          padding: 64px 24px 56px;
          text-align: center;
          position: relative; overflow: hidden;
        }
        .bl-hero::before {
          content:''; position:absolute; inset:0;
          background: radial-gradient(ellipse 80% 55% at 50% 0%, rgba(245,140,39,0.13) 0%, transparent 70%);
          pointer-events:none;
        }
        .bl-hero-eyebrow {
          font-size:10px; font-weight:600; letter-spacing:0.4em; text-transform:uppercase;
          color:var(--gold); display:block; margin-bottom:16px;
        }
        .bl-hero-title {
          font-family:'Cormorant Garamond',serif;
          font-size: clamp(2.8rem,6vw,5.2rem);
          font-weight:300; font-style:italic; color:#fff; line-height:1.05; margin:0 0 10px;
        }
        .bl-hero-title span { color:var(--gold); }
        .bl-hero-rule { width:60px; height:2px; margin:14px auto 18px; background:linear-gradient(90deg,var(--gold),var(--gold-d)); }
        .bl-hero-sub { font-size:12px; letter-spacing:0.25em; text-transform:uppercase; color:rgba(255,255,255,0.45); }

        /* ── CATEGORY FILTER ── */
        .bl-filter {
          display:flex; align-items:center; justify-content:center; gap:10px; flex-wrap:wrap;
          max-width:1200px; margin:0 auto; padding:32px 24px 0;
        }
        .bl-filter-btn {
          font-family:'Jost',sans-serif; font-size:11px; font-weight:600;
          letter-spacing:0.22em; text-transform:uppercase;
          border:1.5px solid rgba(245,140,39,0.3); background:transparent; color:var(--ink-soft);
          padding:8px 22px; border-radius:99px; cursor:pointer;
          transition:all 0.25s ease; outline:none;
        }
        .bl-filter-btn:hover { border-color:var(--gold); color:var(--gold); background:rgba(245,140,39,0.05); }
        .bl-filter-btn.active {
          background:linear-gradient(135deg,var(--gold),var(--gold-d));
          border-color:transparent; color:var(--ink);
          box-shadow:0 4px 14px rgba(245,140,39,0.38);
        }

        /* ── FEATURED POST ── */
        .bl-featured-wrap {
          max-width:1200px; margin:40px auto 0; padding:0 24px;
        }
        .bl-featured {
          display:grid; grid-template-columns:1fr 1fr;
          gap:0; border-radius:var(--r); overflow:hidden;
          box-shadow:0 8px 40px rgba(19,17,34,0.10);
          border:1px solid rgba(245,140,39,0.14);
        }
        .bl-featured-img-wrap {
          position:relative; min-height:420px; background:var(--sand);
        }
        .bl-featured-img { object-fit:cover; }
        .bl-featured-img-overlay {
          position:absolute; inset:0;
          background:linear-gradient(to right, transparent 60%, rgba(19,17,34,0.2) 100%);
          pointer-events:none;
        }
        .bl-featured-content {
          background:#fff; padding:44px 40px;
          display:flex; flex-direction:column; justify-content:center; gap:16px;
        }
        .bl-featured-tag {
          display:inline-flex; align-items:center; gap:8px;
          font-size:9.5px; font-weight:700; letter-spacing:0.3em; text-transform:uppercase;
        }
        .bl-featured-tag-dot { width:6px; height:6px; border-radius:50%; background:var(--gold); flex-shrink:0; }
        .bl-featured-tag-cat { color:var(--gold); }
        .bl-featured-tag-sep { color:rgba(19,17,34,0.2); }
        .bl-featured-tag-label { color:var(--ink-soft); }
        .bl-featured-pill {
          display:inline-block; font-size:9px; font-weight:700; letter-spacing:0.2em;
          text-transform:uppercase; color:var(--ink);
          background:linear-gradient(135deg,var(--gold),var(--gold-d));
          padding:3px 12px; border-radius:2px; width:fit-content;
        }
        .bl-featured-title {
          font-family:'Cormorant Garamond',serif;
          font-size:clamp(1.6rem,2.5vw,2.2rem); font-weight:600; color:var(--ink);
          line-height:1.2; margin:0;
        }
        .bl-featured-excerpt {
          font-size:13px; font-weight:300; line-height:1.7; color:var(--ink-soft); margin:0;
        }
        .bl-featured-meta {
          display:flex; align-items:center; gap:12px; margin-top:4px;
        }
        .bl-meta-text { font-size:10.5px; letter-spacing:0.12em; text-transform:uppercase; color:var(--ink-soft); }
        .bl-meta-sep { width:3px; height:3px; border-radius:50%; background:rgba(245,140,39,0.5); }
        .bl-read-btn {
          display:inline-flex; align-items:center; gap:8px; width:fit-content; margin-top:8px;
          font-family:'Jost',sans-serif; font-size:10.5px; font-weight:700;
          letter-spacing:0.2em; text-transform:uppercase;
          background:var(--ink); color:var(--gold); text-decoration:none;
          padding:12px 28px; border-radius:var(--r);
          border:none; cursor:pointer;
          transition:background 0.25s ease, color 0.25s ease;
        }
        .bl-read-btn:hover { background:var(--gold); color:var(--ink); }
        .bl-read-btn svg { width:14px; height:14px; fill:currentColor; transition:transform 0.2s ease; }
        .bl-read-btn:hover svg { transform:translateX(3px); }

        /* ── SECTION DIVIDER ── */
        .bl-divider {
          max-width:1200px; margin:52px auto 0; padding:0 24px;
          display:flex; align-items:center; gap:16px;
        }
        .bl-divider-line { flex:1; height:1px; background:linear-gradient(90deg,rgba(245,140,39,0.4),transparent); }
        .bl-divider-line.right { background:linear-gradient(270deg,rgba(245,140,39,0.4),transparent); }
        .bl-divider-text {
          font-family:'Cormorant Garamond',serif; font-style:italic;
          font-size:1.05rem; font-weight:300; color:var(--gold-d);
          white-space:nowrap; letter-spacing:0.06em;
        }

        /* ── BLOG GRID ── */
        .bl-grid {
          display:grid; grid-template-columns:repeat(3,1fr);
          gap:28px; max-width:1200px; margin:32px auto 0; padding:0 24px;
        }

        /* ── BLOG CARD ── */
        .bl-card {
          background:#fff; border:1px solid rgba(245,140,39,0.12); border-radius:var(--r);
          overflow:hidden; display:flex; flex-direction:column;
          transition:box-shadow 0.3s ease, transform 0.3s ease;
          box-shadow:0 2px 12px rgba(19,17,34,0.05);
        }
        .bl-card:hover {
          box-shadow:0 12px 40px rgba(19,17,34,0.11), 0 0 0 1px rgba(245,140,39,0.25);
          transform:translateY(-4px);
        }
        .bl-card-img-wrap {
          position:relative; aspect-ratio:16/10; overflow:hidden; background:var(--sand);
        }
        .bl-card-img { object-fit:cover; transition:transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94); }
        .bl-card:hover .bl-card-img { transform:scale(1.05); }
        .bl-card-img-overlay {
          position:absolute; inset:0;
          background:linear-gradient(to bottom, transparent 55%, rgba(19,17,34,0.28) 100%);
          pointer-events:none;
        }
        .bl-card-cat {
          position:absolute; top:12px; left:12px;
          font-size:8.5px; font-weight:700; letter-spacing:0.22em; text-transform:uppercase;
          padding:4px 11px; border-radius:2px; color:var(--ink);
          background:linear-gradient(135deg,var(--gold),var(--gold-d));
          box-shadow:0 2px 8px rgba(245,140,39,0.38);
        }
        .bl-card-body { padding:20px 20px 22px; display:flex; flex-direction:column; gap:10px; flex:1; }
        .bl-card-meta { display:flex; align-items:center; gap:8px; }
        .bl-card-meta-tag {
          font-size:9.5px; font-weight:600; letter-spacing:0.2em; text-transform:uppercase; color:var(--gold-d);
        }
        .bl-card-meta-dot { width:3px; height:3px; border-radius:50%; background:rgba(245,140,39,0.4); }
        .bl-card-meta-date { font-size:10px; color:var(--ink-soft); letter-spacing:0.05em; }
        .bl-card-meta-read { font-size:10px; color:var(--ink-soft); }
        .bl-card-title {
          font-family:'Cormorant Garamond',serif;
          font-size:1.22rem; font-weight:600; color:var(--ink); line-height:1.25; margin:0;
        }
        .bl-card-excerpt {
          font-size:11.5px; font-weight:300; line-height:1.65; color:var(--ink-soft); margin:0;
          display:-webkit-box; -webkit-line-clamp:3; -webkit-box-orient:vertical; overflow:hidden;
        }
        .bl-card-footer {
          display:flex; align-items:center; justify-content:space-between; margin-top:auto; padding-top:12px;
          border-top:1px solid rgba(245,140,39,0.1);
        }
        .bl-card-read-link {
          font-family:'Jost',sans-serif; font-size:10px; font-weight:700;
          letter-spacing:0.2em; text-transform:uppercase;
          color:var(--ink-soft); background:none; border:none; cursor:pointer; outline:none;
          display:flex; align-items:center; gap:5px;
          transition:color 0.2s ease;
          padding:0;
        }
        .bl-card-read-link:hover { color:var(--gold); }
        .bl-card-read-link svg { width:12px; height:12px; fill:currentColor; transition:transform 0.2s ease; }
        .bl-card-read-link:hover svg { transform:translateX(3px); }
        .bl-card-wa {
          display:flex; align-items:center; gap:5px;
          font-size:9.5px; font-weight:600; letter-spacing:0.12em; text-transform:uppercase;
          color:var(--wa-d); text-decoration:none;
          transition:opacity 0.2s ease;
        }
        .bl-card-wa:hover { opacity:0.75; }
        .bl-card-wa svg { width:13px; height:13px; fill:var(--wa); flex-shrink:0; }

        /* ── EXPANDED ARTICLE OVERLAY ── */
        .bl-overlay {
          position:fixed; inset:0; z-index:9998;
          background:rgba(19,17,34,0.7);
          backdrop-filter:blur(4px);
          display:flex; align-items:flex-start; justify-content:center;
          padding:40px 16px 60px;
          overflow-y:auto;
        }
        .bl-article {
          background:#fff; border-radius:var(--r);
          max-width:740px; width:100%;
          position:relative; overflow:hidden;
          box-shadow:0 24px 80px rgba(19,17,34,0.25);
          animation:articleIn 0.4s cubic-bezier(0.22,1,0.36,1) both;
        }
        @keyframes articleIn {
          from { opacity:0; transform:translateY(32px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .bl-article-img-wrap { position:relative; aspect-ratio:16/8; background:var(--sand); }
        .bl-article-img { object-fit:cover; }
        .bl-article-img-overlay {
          position:absolute; inset:0;
          background:linear-gradient(to bottom, transparent 40%, rgba(19,17,34,0.55) 100%);
          pointer-events:none;
        }
        .bl-article-close {
          position:absolute; top:16px; right:16px;
          width:38px; height:38px; border-radius:50%;
          background:rgba(255,255,255,0.15); backdrop-filter:blur(8px);
          border:1px solid rgba(255,255,255,0.25); color:#fff;
          cursor:pointer; display:flex; align-items:center; justify-content:center;
          font-size:1.1rem; outline:none; z-index:10;
          transition:background 0.2s ease;
        }
        .bl-article-close:hover { background:rgba(245,140,39,0.8); }
        .bl-article-content { padding:36px 40px 44px; }
        .bl-article-eyebrow {
          display:flex; align-items:center; gap:8px; margin-bottom:16px;
        }
        .bl-article-cat {
          font-size:9px; font-weight:700; letter-spacing:0.28em; text-transform:uppercase;
          color:var(--ink); background:linear-gradient(135deg,var(--gold),var(--gold-d));
          padding:3px 12px; border-radius:2px;
        }
        .bl-article-tag { font-size:10px; letter-spacing:0.18em; text-transform:uppercase; color:var(--ink-soft); }
        .bl-article-sep { width:3px; height:3px; border-radius:50%; background:rgba(245,140,39,0.4); }
        .bl-article-title {
          font-family:'Cormorant Garamond',serif;
          font-size:clamp(1.7rem,3.5vw,2.4rem); font-weight:600; color:var(--ink);
          line-height:1.2; margin:0 0 10px;
        }
        .bl-article-meta { display:flex; align-items:center; gap:10px; margin-bottom:28px; }
        .bl-article-meta-item { font-size:10.5px; color:var(--ink-soft); letter-spacing:0.08em; }
        .bl-article-rule { width:40px; height:2px; background:linear-gradient(90deg,var(--gold),var(--gold-d)); margin-bottom:24px; }
        .bl-article-body p {
          font-size:14.5px; font-weight:300; line-height:1.85; color:#2e2a40;
          margin:0 0 20px;
        }
        .bl-article-body p:last-child { margin-bottom:0; }
        .bl-article-cta {
          margin-top:32px; padding-top:24px; border-top:1px solid rgba(245,140,39,0.15);
          display:flex; align-items:center; gap:14px; flex-wrap:wrap;
        }
        .bl-article-cta-text { font-size:12px; letter-spacing:0.1em; color:var(--ink-soft); flex:1; min-width:180px; }
        .bl-article-cta-btn {
          display:flex; align-items:center; gap:7px;
          background:linear-gradient(135deg,var(--wa),var(--wa-d));
          color:#fff; text-decoration:none; font-family:'Jost',sans-serif;
          font-size:10.5px; font-weight:700; letter-spacing:0.18em; text-transform:uppercase;
          padding:11px 22px; border-radius:99px;
          box-shadow:0 4px 16px rgba(37,211,102,0.35);
          transition:filter 0.2s ease, transform 0.2s ease;
          white-space:nowrap;
        }
        .bl-article-cta-btn:hover { filter:brightness(1.08); transform:translateY(-1px); }
        .bl-article-cta-btn svg { width:15px; height:15px; fill:#fff; flex-shrink:0; }

        /* ── BOTTOM CTA BANNER ── */
        .bl-cta-banner {
          max-width:1200px; margin:64px auto 0; padding:0 24px;
        }
        .bl-cta-inner {
          background:var(--ink); border-radius:var(--r); padding:48px 40px;
          display:flex; align-items:center; justify-content:space-between;
          gap:24px; flex-wrap:wrap; position:relative; overflow:hidden;
        }
        .bl-cta-inner::before {
          content:''; position:absolute; inset:0;
          background:radial-gradient(ellipse 70% 100% at 100% 50%, rgba(245,140,39,0.1) 0%, transparent 60%);
          pointer-events:none;
        }
        .bl-cta-text-label {
          font-size:10px; font-weight:600; letter-spacing:0.35em; text-transform:uppercase;
          color:var(--gold); margin-bottom:10px; display:block;
        }
        .bl-cta-text-title {
          font-family:'Cormorant Garamond',serif;
          font-size:clamp(1.5rem,3vw,2rem); font-weight:300; font-style:italic;
          color:#fff; line-height:1.2; margin:0 0 8px;
        }
        .bl-cta-text-title span { color:var(--gold); }
        .bl-cta-text-sub { font-size:12px; color:rgba(255,255,255,0.45); letter-spacing:0.1em; }
        .bl-cta-btn {
          display:flex; align-items:center; gap:8px;
          background:linear-gradient(135deg,var(--wa),var(--wa-d));
          color:#fff; text-decoration:none; font-family:'Jost',sans-serif;
          font-size:11px; font-weight:700; letter-spacing:0.2em; text-transform:uppercase;
          padding:14px 30px; border-radius:99px; white-space:nowrap;
          box-shadow:0 6px 24px rgba(37,211,102,0.4);
          transition:filter 0.25s ease, transform 0.25s ease;
          flex-shrink:0;
        }
        .bl-cta-btn:hover { filter:brightness(1.08); transform:translateY(-2px); }
        .bl-cta-btn svg { width:16px; height:16px; fill:#fff; flex-shrink:0; }

        /* ── MOBILE ── */
        @media (max-width: 900px) {
          .bl-grid { grid-template-columns:repeat(2,1fr); gap:20px; }
        }
        @media (max-width: 767px) {
          .bl-featured { grid-template-columns:1fr; }
          .bl-featured-img-wrap { min-height:240px; }
          .bl-featured-content { padding:28px 24px; }
          .bl-featured-title { font-size:1.5rem; }
          .bl-grid { grid-template-columns:1fr; gap:18px; padding:0 16px; }
          .bl-featured-wrap { padding:0 16px; }
          .bl-divider { padding:0 16px; }
          .bl-filter { padding:24px 16px 0; }
          .bl-hero { padding:48px 16px 44px; }
          .bl-cta-inner { padding:32px 24px; }
          .bl-article-content { padding:24px 22px 32px; }
          .bl-overlay { padding:20px 12px 40px; }
        }
        @media (max-width: 500px) {
          .bl-grid { grid-template-columns:1fr; }
          .bl-filter-btn { padding:7px 16px; font-size:10px; }
        }
      `}</style>

      {/* ── EXPANDED ARTICLE MODAL ── */}
      {expandedId !== null && (() => {
        const post = POSTS.find((p) => p.id === expandedId)
        if (!post) return null
        const WA_PATH = "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378L.586 21.433l1.446-5.43a9.955 9.955 0 0 1-1.337-5.01C.698 5.42 5.13 1 10.617 1c2.663 0 5.167 1.037 7.053 2.922a9.86 9.86 0 0 1 2.92 7.04c-.003 5.487-4.433 9.843-9.539 9.843m8.122-18.01A11.815 11.815 0 0 0 10.617 0C4.808 0 .07 4.733.066 10.535a10.507 10.507 0 0 0 1.407 5.279L0 24l8.397-2.203a10.578 10.578 0 0 0 5.05 1.288h.005c5.806 0 10.546-4.733 10.548-10.536a10.478 10.478 0 0 0-3.077-7.454"
        return (
          <div className="bl-overlay" onClick={() => setExpandedId(null)}>
            <div className="bl-article" onClick={(e) => e.stopPropagation()}>
              <div className="bl-article-img-wrap">
                <Image src={post.img} alt={post.title} fill className="bl-article-img"
                  sizes="740px" />
                <div className="bl-article-img-overlay" />
                <button className="bl-article-close" onClick={() => setExpandedId(null)}
                  aria-label="Close article">✕</button>
              </div>
              <div className="bl-article-content">
                <div className="bl-article-eyebrow">
                  <span className="bl-article-cat">{post.category}</span>
                  <span className="bl-article-sep" />
                  <span className="bl-article-tag">{post.tag}</span>
                </div>
                <h2 className="bl-article-title">{post.title}</h2>
                <div className="bl-article-meta">
                  <span className="bl-article-meta-item">{post.date}</span>
                  <span className="bl-meta-sep" />
                  <span className="bl-article-meta-item">{post.readTime}</span>
                </div>
                <div className="bl-article-rule" />
                <div className="bl-article-body">
                  {post.body.map((para, i) => <p key={i}>{para}</p>)}
                </div>
                <div className="bl-article-cta">
                  <p className="bl-article-cta-text">
                    Ready to explore our collection of premium fragrances and timepieces?
                  </p>
                  <a href={waHref} target="_blank" rel="noopener noreferrer" className="bl-article-cta-btn">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path d={WA_PATH} />
                    </svg>
                    Shop on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        )
      })()}

      <div className="bl-page">

        {/* ── HERO ── */}
        <div className="bl-hero">
          <span className="bl-hero-eyebrow">KPrimestores · Insights</span>
          <h1 className="bl-hero-title">The <span>Journal</span></h1>
          <div className="bl-hero-rule" />
          <p className="bl-hero-sub">Fragrance · Timepieces · Culture · Style</p>
        </div>

        {/* ── CATEGORY FILTER ── */}
        <div className="bl-filter">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`bl-filter-btn${activeCategory === cat ? ' active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ── FEATURED POST (All view only) ── */}
        {activeCategory === 'All' && featured && (
          <>
            <div className="bl-divider">
              <div className="bl-divider-line" />
              <span className="bl-divider-text">Featured Story</span>
              <div className="bl-divider-line right" />
            </div>
            <div className="bl-featured-wrap">
              <div className="bl-featured">
                <div className="bl-featured-img-wrap">
                  <Image src={featured.img} alt={featured.title} fill className="bl-featured-img"
                    sizes="(max-width:767px) 100vw, 50vw" />
                  <div className="bl-featured-img-overlay" />
                </div>
                <div className="bl-featured-content">
                  <div>
                    <span className="bl-featured-pill">Featured</span>
                  </div>
                  <div className="bl-featured-tag">
                    <span className="bl-featured-tag-dot" />
                    <span className="bl-featured-tag-cat">{featured.category}</span>
                    <span className="bl-featured-tag-sep">·</span>
                    <span className="bl-featured-tag-label">{featured.tag}</span>
                  </div>
                  <h2 className="bl-featured-title">{featured.title}</h2>
                  <p className="bl-featured-excerpt">{featured.excerpt}</p>
                  <div className="bl-featured-meta">
                    <span className="bl-meta-text">{featured.date}</span>
                    <span className="bl-meta-sep" />
                    <span className="bl-meta-text">{featured.readTime}</span>
                  </div>
                  <button className="bl-read-btn" onClick={() => setExpandedId(featured.id)}>
                    Read Article
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2"
                        strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </>
        )}

        {/* ── ARTICLES GRID ── */}
        <div className="bl-divider">
          <div className="bl-divider-line" />
          <span className="bl-divider-text">
            {activeCategory === 'All' ? 'Latest Articles' : `${activeCategory} Articles`}
          </span>
          <div className="bl-divider-line right" />
        </div>

        <div className="bl-grid">
          {showGrid.map((post) => {
            const WA_PATH = "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378L.586 21.433l1.446-5.43a9.955 9.955 0 0 1-1.337-5.01C.698 5.42 5.13 1 10.617 1c2.663 0 5.167 1.037 7.053 2.922a9.86 9.86 0 0 1 2.92 7.04c-.003 5.487-4.433 9.843-9.539 9.843m8.122-18.01A11.815 11.815 0 0 0 10.617 0C4.808 0 .07 4.733.066 10.535a10.507 10.507 0 0 0 1.407 5.279L0 24l8.397-2.203a10.578 10.578 0 0 0 5.05 1.288h.005c5.806 0 10.546-4.733 10.548-10.536a10.478 10.478 0 0 0-3.077-7.454"
            const postWaHref = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
              `Hello KPrimestores! I just read "${post.title}" on your blog and I'd love to shop your collection.`
            )}`
            return (
              <div key={post.id} className="bl-card">
                <div className="bl-card-img-wrap">
                  <Image src={post.img} alt={post.title} fill className="bl-card-img"
                    sizes="(max-width:500px) 100vw, (max-width:900px) 50vw, 33vw" />
                  <div className="bl-card-img-overlay" />
                  <span className="bl-card-cat">{post.category}</span>
                </div>
                <div className="bl-card-body">
                  <div className="bl-card-meta">
                    <span className="bl-card-meta-tag">{post.tag}</span>
                    <span className="bl-card-meta-dot" />
                    <span className="bl-card-meta-date">{post.date}</span>
                    <span className="bl-card-meta-dot" />
                    <span className="bl-card-meta-read">{post.readTime}</span>
                  </div>
                  <h3 className="bl-card-title">{post.title}</h3>
                  <p className="bl-card-excerpt">{post.excerpt}</p>
                  <div className="bl-card-footer">
                    <button className="bl-card-read-link" onClick={() => setExpandedId(post.id)}>
                      Read More
                      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2.5"
                          strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                      </svg>
                    </button>
                    <a href={postWaHref} target="_blank" rel="noopener noreferrer" className="bl-card-wa">
                      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path d={WA_PATH} />
                      </svg>
                      Shop
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* ── BOTTOM CTA BANNER ── */}
        <div className="bl-cta-banner">
          <div className="bl-cta-inner">
            <div>
              <span className="bl-cta-text-label">Ready to Shop?</span>
              <h3 className="bl-cta-text-title">
                Explore Our <span>Full Collection</span>
              </h3>
              <p className="bl-cta-text-sub">Premium Fragrances · Precision Timepieces · Genuinely Affordable</p>
            </div>
            <a href={waHref} target="_blank" rel="noopener noreferrer" className="bl-cta-btn">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378L.586 21.433l1.446-5.43a9.955 9.955 0 0 1-1.337-5.01C.698 5.42 5.13 1 10.617 1c2.663 0 5.167 1.037 7.053 2.922a9.86 9.86 0 0 1 2.92 7.04c-.003 5.487-4.433 9.843-9.539 9.843m8.122-18.01A11.815 11.815 0 0 0 10.617 0C4.808 0 .07 4.733.066 10.535a10.507 10.507 0 0 0 1.407 5.279L0 24l8.397-2.203a10.578 10.578 0 0 0 5.05 1.288h.005c5.806 0 10.546-4.733 10.548-10.536a10.478 10.478 0 0 0-3.077-7.454" />
              </svg>
              Chat with Us on WhatsApp
            </a>
          </div>
        </div>

      </div>
    </>
  )
}