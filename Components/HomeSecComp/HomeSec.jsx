'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'

function useReveal() {
  const observer = useRef(null)
  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target
            el.classList.add(el.dataset.reveal)
            observer.current.unobserve(el)
          }
        })
      },
      { threshold: 0.15 }
    )
    document.querySelectorAll('[data-reveal]').forEach((el) => {
      observer.current.observe(el)
    })
    return () => observer.current.disconnect()
  }, [])

  const ref = useCallback((animation, delay = 0) => (el) => {
    if (!el) return
    el.dataset.reveal = animation
    el.style.animationDelay = delay + 'ms'
    if (observer.current) observer.current.observe(el)
  }, [])

  return ref
}

const HomeSec = () => {
  const [currentSlide, setCurrentSlide]             = useState(0)
  const [isAnimating, setIsAnimating]               = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [testimonyDir, setTestimonyDir]             = useState('next')
  const [isTestAnimating, setIsTestAnimating]       = useState(false)
  const autoplayRef     = useRef(null)
  const testAutoplayRef = useRef(null)
  const reveal          = useReveal()

  const heroSlides = [
    { src: '/carousel img4.jpg',  alt: 'Luxury Fragrances'    },
    { src: '/carousel img7.jpg',  alt: 'Timepiece Collection' },
    { src: '/carousel img3.jpg', alt: 'Premium Selection'    },
    { src: '/carousel img6.jpg', alt: 'Premium Selection'    },
  ]

  const galleryImages = [
    { src: '/showcase perfume img3.jpg',  alt: 'Fragrance Collection 1' },
    { src: '/showcase watch img3.jpg',    alt: 'Watch Collection 1'     },
    { src: '/showcase perfume img4.jpg', alt: 'Fragrance and Watch Collection 2' },
    { src: '/showcase watch img2.jpg',   alt: 'Watch Collection 2'     },
    { src: '/kprimestoremiii.png',  alt: 'Fragrance Collection 3' },
    { src: '/showcase watch img1.jpg',   alt: 'Watch Collection 3'     },
  ]

  const testimonials = [
    {
      name: 'BUDUZIRI WISDOM',
      text: 'The fragrance I ordered from KPrimestores is absolutely breathtaking — rich, long-lasting, and far beyond what I expected at the price. Every compliment I receive now leads people straight here.',
    },
    {
      name: 'MEZIE BRIGHT',
      text: 'I purchased a timepiece as a gift and it arrived impeccably packaged and exactly as described. The quality rivals pieces three times the price. KPrimestores has set a new standard for me.',
    },
    {
      name: 'CHIMZI DICKSON',
      text: 'The depth and projection of the perfume I bought is extraordinary. I have worn designer fragrances for years, and KPrimestores curates at that same elevated level — at a price that finally makes sense.',
    },
    {
      name: 'CHINWE PRESH',
      text: 'My watch arrived looking like pure luxury — flawless finishing, smooth movement, and an elegance I did not expect at this price point. KPrimestores delivers on every promise without exception.',
    },
    {
      name: 'KELLY RICHARD',
      text: 'I have ordered three fragrances so far and each one has been a masterpiece. The scent profiles are sophisticated, the longevity is remarkable, and the pricing is genuinely unbeatable.',
    },
    {
      name: 'MAURICE FRANK',
      text: 'KPrimestores sent me a watch that stopped every conversation in the room. People could not believe the price. The craftsmanship is genuine and the service was absolutely first-class.',
    },
    {
      name: 'OKORO DIVINE',
      text: 'I bought a fragrance on impulse and it became my signature scent within a week. Bold, refined, and unmistakably premium — yet priced in a way that lets you actually enjoy wearing it daily.',
    },
    {
      name: 'PRINCE GP',
      text: 'The watch I ordered exceeded every expectation — weight, dial clarity, strap quality. It wears like a much more expensive piece. KPrimestores proves luxury does not have to cost a fortune.',
    },
    {
      name: 'ESTACY CHU',
      text: 'Receiving my perfume order felt like unboxing a gift. The presentation, the scent, the staying power — all immaculate. KPrimestores treats fragrance the way it deserves to be treated: as an art form.',
    },
    {
      name: 'RISI GREAT',
      text: 'I stumbled onto KPrimestores searching for a quality watch on a budget. What I found was genuinely premium. Clean, precise, beautiful — and priced so fairly I ordered two more pieces immediately.',
    },
  ]

  const startAutoplay = useCallback(() => {
    clearInterval(autoplayRef.current)
    autoplayRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
  }, [heroSlides.length])

  useEffect(() => {
    startAutoplay()
    return () => clearInterval(autoplayRef.current)
  }, [startAutoplay])

  const goToSlide = (index) => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentSlide(index)
    startAutoplay()
    setTimeout(() => setIsAnimating(false), 750)
  }

  const startTestAutoplay = useCallback(() => {
    clearInterval(testAutoplayRef.current)
    testAutoplayRef.current = setInterval(() => {
      setTestimonyDir('next')
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5500)
  }, [testimonials.length])

  useEffect(() => {
    startTestAutoplay()
    return () => clearInterval(testAutoplayRef.current)
  }, [startTestAutoplay])

  const goToTestimonial = (index) => {
    if (isTestAnimating) return
    setIsTestAnimating(true)
    setTestimonyDir(index > currentTestimonial ? 'next' : 'prev')
    setCurrentTestimonial(index)
    startTestAutoplay()
    setTimeout(() => setIsTestAnimating(false), 600)
  }

  const stepTestimonial = (dir) => {
    if (isTestAnimating) return
    setIsTestAnimating(true)
    setTestimonyDir(dir)
    setCurrentTestimonial((prev) =>
      dir === 'next'
        ? (prev + 1) % testimonials.length
        : (prev - 1 + testimonials.length) % testimonials.length
    )
    startTestAutoplay()
    setTimeout(() => setIsTestAnimating(false), 600)
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600&family=Jost:wght@300;400;500;600&family=Cinzel:wght@400;500;600&display=swap');

        :root {
          --gold:      #f58c27;
          --gold-d:    #c86e10;
          --ink:       #131122;
          --ink-mid:   #2e2a40;
          --ink-soft:  #5c5672;
          --cream:     #fdfaf5;
          --cream-d:   #f5efe4;
          --sand:      #ede5d8;
        }

        .font-display { font-family: 'Cormorant Garamond', serif; }
        .font-body    { font-family: 'Jost', sans-serif; }
        .font-cinzel  { font-family: 'Cinzel', serif; }

        .carousel-track {
          display: flex; height: 100%;
          transition: transform 0.75s cubic-bezier(0.77,0,0.175,1);
        }
        .carousel-slide { min-width: 100%; position: relative; height: 100%; }
        .hero-overlay {
          background: linear-gradient(
            to bottom,
            rgba(19,17,34,0.15) 0%,
            rgba(19,17,34,0.50) 60%,
            rgba(19,17,34,0.86) 100%
          );
        }
        .nav-dot {
          height: 8px; border-radius: 9999px;
          background: rgba(255,255,255,0.35);
          width: 8px; cursor: pointer; border: none; padding: 0; outline: none;
          transition: width 0.45s cubic-bezier(0.34,1.56,0.64,1), background 0.35s ease;
        }
        .nav-dot.active             { width: 30px; background: var(--gold); }
        .nav-dot:hover:not(.active) { background: rgba(255,255,255,0.7); }

        .test-dot {
          width: 7px; height: 7px; border-radius: 9999px;
          background: rgba(19,17,34,0.18);
          cursor: pointer; border: none; padding: 0; outline: none;
          transition: width 0.45s cubic-bezier(0.34,1.56,0.64,1), background 0.35s ease;
        }
        .test-dot.active             { width: 24px; background: var(--gold); }
        .test-dot:hover:not(.active) { background: rgba(245,140,39,0.45); }

        .gold-line { background: linear-gradient(90deg, transparent, var(--gold), transparent); }
        .welcome-divider {
          width: 64px; height: 2px;
          background: linear-gradient(90deg, var(--gold), var(--gold-d));
          margin: 0 auto;
        }
        .category-line { display: flex; align-items: center; justify-content: center; gap: 16px; }
        .category-word {
          font-family: 'Cormorant Garamond', serif;
          font-style: italic; font-weight: 300; font-size: 1.25rem;
          letter-spacing: 0.07em; color: var(--gold-d); line-height: 1;
        }
        .category-sep {
          width: 30px; height: 1px;
          background: linear-gradient(90deg, var(--gold), var(--gold-d)); flex-shrink: 0;
        }
        .btn-primary {
          font-family: 'Jost', sans-serif;
          letter-spacing: 0.2em; text-transform: uppercase; font-size: 0.72rem;
          background: var(--ink); color: var(--gold);
          padding: 14px 40px;
          transition: background 0.3s ease, color 0.3s ease; display: inline-block;
        }
        .btn-primary:hover { background: var(--gold); color: var(--ink); }
        .btn-outline {
          font-family: 'Jost', sans-serif;
          letter-spacing: 0.2em; text-transform: uppercase; font-size: 0.72rem;
          border: 1px solid var(--gold); color: var(--ink);
          padding: 14px 40px;
          transition: background 0.3s ease, color 0.3s ease; display: inline-block;
        }
        .btn-outline:hover { background: var(--gold); color: var(--ink); }
        .arrow-btn {
          width: 42px; height: 42px; border-radius: 50%;
          border: 1px solid rgba(245,140,39,0.4); background: transparent;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; color: var(--gold-d);
          transition: background 0.3s ease, border-color 0.3s ease, color 0.3s ease;
          font-size: 1rem; outline: none; flex-shrink: 0;
        }
        .arrow-btn:hover { background: var(--gold); border-color: var(--gold); color: var(--ink); }

        @keyframes fadeUp {
          from { opacity:0; transform:translateY(28px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .afu   { animation: fadeUp 0.9s ease both; }
        .afu-1 { animation: fadeUp 0.9s 0.20s ease both; }
        .afu-2 { animation: fadeUp 0.9s 0.40s ease both; }
        .afu-3 { animation: fadeUp 0.9s 0.60s ease both; }
        .afu-4 { animation: fadeUp 0.9s 0.80s ease both; }

        [data-reveal] { opacity: 0; }
        @keyframes flipLeft {
          from { opacity:0; transform: perspective(900px) rotateY(-60deg) translateX(-40px); }
          to   { opacity:1; transform: perspective(900px) rotateY(0deg) translateX(0); }
        }
        @keyframes flipRight {
          from { opacity:0; transform: perspective(900px) rotateY(60deg) translateX(40px); }
          to   { opacity:1; transform: perspective(900px) rotateY(0deg) translateX(0); }
        }
        @keyframes fadeUp2   { from { opacity:0; transform:translateY(36px); }  to { opacity:1; transform:translateY(0); } }
        @keyframes fadeRight { from { opacity:0; transform:translateX(-36px); } to { opacity:1; transform:translateX(0); } }
        @keyframes fadeLeft  { from { opacity:0; transform:translateX(36px); }  to { opacity:1; transform:translateX(0); } }
        .flip-left  { animation: flipLeft  0.72s ease both; }
        .flip-right { animation: flipRight 0.72s ease both; }
        .fade-up    { animation: fadeUp2   0.75s ease both; }
        .fade-right { animation: fadeRight 0.75s ease both; }
        .fade-left  { animation: fadeLeft  0.75s ease both; }

        .gallery-img {
          transition: transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94), filter 0.6s ease;
          filter: brightness(0.93) saturate(0.88);
        }
        .gallery-wrap:hover .gallery-img { transform: scale(1.06); filter: brightness(1.04) saturate(1.1); }
        .gallery-mask { background: rgba(19,17,34,0); transition: background 0.45s ease; }
        .gallery-wrap:hover .gallery-mask { background: rgba(245,140,39,0.08); }

        .stat-number {
          background: linear-gradient(135deg, var(--gold), var(--gold-d));
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }
        .about-img-border { border: 1px solid rgba(245,140,39,0.28); }
        .underline-link {
          font-family: 'Jost', sans-serif;
          letter-spacing: 0.2em; text-transform: uppercase; font-size: 0.72rem;
          border-bottom: 1px solid var(--gold); color: var(--ink); padding-bottom: 2px;
          transition: color 0.3s ease; display: inline-block;
        }
        .underline-link:hover { color: var(--gold); }
        .stats-divider { border-color: rgba(245,140,39,0.28); }

        .value-pill {
          display: inline-flex; align-items: center; gap: 8px;
          font-family: 'Jost', sans-serif; font-size: 0.68rem; font-weight: 500;
          letter-spacing: 0.22em; text-transform: uppercase; color: var(--gold-d);
          border: 1px solid rgba(245,140,39,0.35); padding: 6px 16px; border-radius: 9999px;
        }
        .value-pill-dot { width: 5px; height: 5px; border-radius: 50%; background: var(--gold); flex-shrink: 0; }

        .testimony-name {
          font-family: 'Cinzel', serif; font-weight: 500; font-size: 0.78rem;
          letter-spacing: 0.28em; text-transform: uppercase;
          background: linear-gradient(135deg, var(--gold), var(--gold-d));
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text; line-height: 1;
        }
        .testimony-name-rule {
          width: 28px; height: 1px;
          background: linear-gradient(90deg, var(--gold), var(--gold-d)); flex-shrink: 0;
        }
        .quote-mark {
          font-family: 'Cormorant Garamond', serif; font-size: 9rem; line-height: 0.6;
          color: rgba(245,140,39,0.10); font-style: italic; font-weight: 700;
          user-select: none; pointer-events: none; position: absolute; top: 0; left: -10px;
        }
        @keyframes testSlideInNext { from { opacity:0; transform:translateX(55px); }  to { opacity:1; transform:translateX(0); } }
        @keyframes testSlideInPrev { from { opacity:0; transform:translateX(-55px); } to { opacity:1; transform:translateX(0); } }
        .test-in-next { animation: testSlideInNext 0.55s cubic-bezier(0.22,1,0.36,1) both; }
        .test-in-prev { animation: testSlideInPrev 0.55s cubic-bezier(0.22,1,0.36,1) both; }
        .testimony-card {
          background: #fff; border-top: 2px solid var(--gold);
          box-shadow: 0 2px 8px rgba(19,17,34,0.05), 0 12px 40px rgba(19,17,34,0.06),
            inset 0 0 0 1px rgba(245,140,39,0.07);
          max-width: 720px; width: 100%; margin: 0 auto; position: relative; overflow: hidden;
        }
        .testimony-card::after {
          content: ''; position: absolute; bottom: 0; right: 0; width: 60px; height: 60px;
          background: linear-gradient(135deg, transparent 60%, rgba(245,140,39,0.06) 100%);
          pointer-events: none;
        }
        .testimonial-bg {
          background: radial-gradient(ellipse 70% 55% at 50% 10%, rgba(245,140,39,0.055) 0%, transparent 70%), var(--cream);
        }

        @keyframes waBounceIn {
          0%   { opacity:0; transform:translateY(60px) scale(0.7); }
          65%  { opacity:1; transform:translateY(-8px) scale(1.05); }
          80%  { transform:translateY(4px) scale(0.97); }
          100% { opacity:1; transform:translateY(0) scale(1); }
        }
        @keyframes waPulse {
          0%,100% { box-shadow: 0 0 0 0 rgba(37,211,102,0.5), 0 8px 28px rgba(37,211,102,0.3); }
          50%     { box-shadow: 0 0 0 10px rgba(37,211,102,0), 0 8px 28px rgba(37,211,102,0.3); }
        }
        .wa-float {
          position: fixed; bottom: 28px; right: 28px; z-index: 9999;
          width: 60px; height: 60px; border-radius: 50%;
          background: linear-gradient(135deg, #25d366, #128c4a);
          display: flex; align-items: center; justify-content: center;
          text-decoration: none;
          box-shadow: 0 6px 24px rgba(37,211,102,0.4);
          animation: waBounceIn 0.9s 1.2s cubic-bezier(0.34,1.56,0.64,1) both,
                     waPulse 2.4s ease-in-out 2.2s infinite;
          transition: transform 0.25s cubic-bezier(0.34,1.56,0.64,1), filter 0.25s ease;
        }
        .wa-float:hover {
          transform: scale(1.13); filter: brightness(1.08);
          animation: none; box-shadow: 0 10px 32px rgba(37,211,102,0.5);
        }
        .wa-float svg { width: 32px; height: 32px; fill: #fff; display: block; }
        @media (max-width: 480px) {
          .wa-float { bottom: 20px; right: 18px; width: 54px; height: 54px; }
          .wa-float svg { width: 28px; height: 28px; }
        }
      `}</style>

      <main className="font-body" style={{ background: 'var(--cream)' }}>

        {/* ══ 1. HERO CAROUSEL ══ */}
        <section className="relative w-full h-[90vh] min-h-[560px] overflow-hidden">
          <div
            className="carousel-track absolute inset-0"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {heroSlides.map((slide, i) => (
              <div key={i} className="carousel-slide">
                <Image
                  src={slide.src} alt={slide.alt} fill priority={i === 0}
                  className="object-cover object-center" sizes="100vw"
                />
                <div className="hero-overlay absolute inset-0" />
              </div>
            ))}
          </div>
          <div className="relative z-10 flex flex-col items-center justify-end h-full pb-16 px-6 text-center">
            <p className="font-body tracking-[0.35em] text-xs uppercase mb-4 afu" style={{ color: 'var(--gold)' }}>
              Luxury Within Reach
            </p>
            <h1 className="font-display text-white text-5xl sm:text-7xl md:text-8xl font-light leading-none tracking-wide mb-4 afu-1">
              KPrime<span className="italic" style={{ color: 'var(--gold)' }}>stores</span>
            </h1>
            <div className="gold-line h-px w-32 mb-5 afu-2" />
            <p className="font-body text-white/80 text-sm sm:text-base font-light tracking-widest uppercase mb-10 afu-3">
              Premium Fragrances · Precision Timepieces · Prices That Make Sense
            </p>
            <div className="flex items-center gap-[10px] afu-4">
              {heroSlides.map((_, i) => (
                <button
                  key={i} aria-label={`Slide ${i + 1}`}
                  className={`nav-dot${currentSlide === i ? ' active' : ''}`}
                  onClick={() => goToSlide(i)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ══ 2. WELCOME ══ */}
        <section className="py-20 px-6 md:px-16 lg:px-24 text-center max-w-5xl mx-auto">
          <p className="font-body tracking-[0.3em] text-xs uppercase mb-3" style={{ color: 'var(--gold)' }}>
            Our Signature
          </p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-light italic mb-6" style={{ color: 'var(--ink)' }}>
            Scent. Time. Prestige.
          </h2>
          <div className="welcome-divider mb-8" />
          <p className="font-body text-base sm:text-lg leading-relaxed font-light max-w-3xl mx-auto mb-5" style={{ color: 'var(--ink-mid)' }}>
            At <span className="font-medium" style={{ color: 'var(--ink)' }}>KPrimestores</span>, we believe
            that high-quality luxury should never be a privilege reserved for a few. We specialise in{' '}
            <span className="font-medium" style={{ color: 'var(--ink)' }}>fine fragrances</span> and{' '}
            <span className="font-medium" style={{ color: 'var(--ink)' }}>precision timepieces</span> — each
            chosen for their craftsmanship, character, and lasting impression, and priced so that you can
            actually afford to own the best.
          </p>
          <p className="font-body text-sm sm:text-base leading-relaxed font-light max-w-2xl mx-auto mb-10" style={{ color: 'var(--ink-soft)' }}>
            Whether you are drawn to a fragrance that commands every room or a watch that speaks before
            you do — the extraordinary is here, and it is more accessible than you think.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
            <span className="value-pill"><span className="value-pill-dot" />High-Quality</span>
            <span className="value-pill"><span className="value-pill-dot" />Luxury Curated</span>
            <span className="value-pill"><span className="value-pill-dot" />Genuinely Affordable</span>
          </div>
          <div className="category-line mb-10">
            <span className="category-word">Perfumes</span>
            <span className="category-sep" />
            <span className="category-word">Watches</span>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#" className="btn-primary">Shop Now</a>
            <a href="#about" className="btn-outline">Our Story</a>
          </div>
        </section>

        {/* ══ 3. GALLERY ══ */}
        <section className="px-4 sm:px-8 md:px-12 lg:px-16 pb-20">
          <div className="text-center mb-10">
            <p className="font-body tracking-[0.3em] text-xs uppercase mb-3" style={{ color: 'var(--gold)' }}>
              Curated For You
            </p>
            <h3 className="font-display text-3xl sm:text-4xl font-light italic" style={{ color: 'var(--ink)' }}>
              The Collection
            </h3>
            <div className="welcome-divider mt-4" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-5">
            {galleryImages.map((img, index) => {
              const animation = index % 3 === 2 ? 'flip-right' : 'flip-left'
              const delay     = (index % 3) * 130
              return (
                <div
                  key={index}
                  ref={reveal(animation, delay)}
                  className="gallery-wrap relative overflow-hidden aspect-square"
                  style={{ background: 'var(--sand)' }}
                >
                  <Image
                    src={img.src} alt={img.alt} fill
                    className="gallery-img object-cover"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  <div className="gallery-mask absolute inset-0" />
                </div>
              )
            })}
          </div>
        </section>

        {/* ══ 4. ABOUT ══ */}
        <section id="about" className="py-20 px-6 md:px-16 lg:px-24" style={{ background: 'var(--cream-d)' }}>
          <div className="max-w-6xl mx-auto">

            <div ref={reveal('fade-up', 0)} className="text-center mb-16">
              <p className="font-body tracking-[0.3em] text-xs uppercase mb-3" style={{ color: 'var(--gold)' }}>
                Who We Are
              </p>
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-light italic mb-4" style={{ color: 'var(--ink)' }}>
                About Us
              </h2>
              <div className="welcome-divider" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div ref={reveal('fade-right', 100)} className="space-y-6">
                <h3 className="font-display text-3xl sm:text-4xl font-light leading-snug" style={{ color: 'var(--ink)' }}>
                  Luxury Fragrance &amp; Timepieces —{' '}
                  <span className="italic" style={{ color: 'var(--gold)' }}>Finally Affordable.</span>
                </h3>
                <p className="font-body text-sm sm:text-base leading-relaxed font-light" style={{ color: 'var(--ink-mid)' }}>
                  <span className="font-medium" style={{ color: 'var(--ink)' }}>KPrimestores</span> was built
                  on a single conviction: that owning a world-class fragrance or a beautifully crafted
                  timepiece should not require a compromise. We source premium perfumes and watches with
                  uncompromising quality standards — and price them in a way that respects your wallet.
                </p>
                <p className="font-body text-sm sm:text-base leading-relaxed font-light" style={{ color: 'var(--ink-soft)' }}>
                  Every perfume in our catalogue has been selected for depth, longevity, and character — from
                  bold ouds and smoky ambers to crisp aquatics and floral nectars. Every watch has been chosen
                  for its finishing, movement quality, and the quiet confidence it lends to whoever wears it.
                </p>
                <p className="font-body text-sm sm:text-base leading-relaxed font-light" style={{ color: 'var(--ink-soft)' }}>
                  We do not stock everything. We stock the right things — curation over clutter, quality over
                  quantity, and always at a price that lets you enjoy luxury without hesitation.
                </p>
                <div className="pt-4">
                  <a href="#" className="underline-link">Discover Our Full Story →</a>
                </div>
              </div>

              <div ref={reveal('fade-left', 200)} className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full about-img-border z-0" />
                <div className="relative z-10 w-full h-80 sm:h-96">
                  <Image
                    src="/happyclient.png" alt="Happy KPrimestores Customer" fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>

            <div
              ref={reveal('fade-up', 100)}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t stats-divider pt-12"
            >
              {[
                { number: '500+', label: 'Happy Customers'      },
                { number: '200+', label: 'Fragrances & Watches' },
                { number: '98%',  label: 'Satisfaction Rate'    },
                { number: '24/7', label: 'Customer Support'     },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <p className="stat-number font-display text-4xl sm:text-5xl font-light mb-2">{stat.number}</p>
                  <p className="font-body text-xs tracking-[0.2em] uppercase" style={{ color: 'var(--ink-soft)' }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ══ 5. TESTIMONIALS ══ */}
        <section className="testimonial-bg py-24 px-6 md:px-16 lg:px-24">
          <div className="max-w-4xl mx-auto">
            <div ref={reveal('fade-up', 0)} className="text-center mb-4">
              <p className="font-body tracking-[0.3em] text-xs uppercase mb-3" style={{ color: 'var(--gold)' }}>
                What Our Customers Say
              </p>
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-light italic mb-3" style={{ color: 'var(--ink)' }}>
                Testimonials
              </h2>
              <div className="welcome-divider mb-5" />
              <p className="font-body text-sm font-light tracking-wide max-w-md mx-auto" style={{ color: 'var(--ink-soft)' }}>
                Real customers. Real experiences. Here is what they say about their fragrances and
                timepieces from KPrimestores.
              </p>
            </div>

            <div ref={reveal('fade-up', 150)} className="mt-14">
              <div className="relative">
                <div
                  key={currentTestimonial}
                  className={`testimony-card px-8 sm:px-12 pt-12 pb-10 ${testimonyDir === 'next' ? 'test-in-next' : 'test-in-prev'}`}
                >
                  <span className="quote-mark" aria-hidden="true">&ldquo;</span>
                  <div className="flex items-center gap-3 mb-5 relative z-10">
                    <span className="testimony-name-rule" />
                    <span className="testimony-name">{testimonials[currentTestimonial].name}</span>
                    <span className="testimony-name-rule" />
                  </div>
                  <p
                    className="font-display text-xl sm:text-2xl font-light italic leading-relaxed relative z-10"
                    style={{ color: 'var(--ink-mid)' }}
                  >
                    {testimonials[currentTestimonial].text}
                  </p>
                </div>

                <div className="flex items-center justify-between mt-8">
                  <button className="arrow-btn" aria-label="Previous" onClick={() => stepTestimonial('prev')}>←</button>
                  <div className="flex items-center gap-2">
                    {testimonials.map((_, i) => (
                      <button
                        key={i} aria-label={`Testimony ${i + 1}`}
                        className={`test-dot${currentTestimonial === i ? ' active' : ''}`}
                        onClick={() => goToTestimonial(i)}
                      />
                    ))}
                  </div>
                  <button className="arrow-btn" aria-label="Next" onClick={() => stepTestimonial('next')}>→</button>
                </div>

                <p className="text-center font-body text-xs tracking-[0.2em] uppercase mt-5" style={{ color: 'var(--ink-soft)' }}>
                  {String(currentTestimonial + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ══ FOOTER ══ */}
        <div className="py-6 px-6 text-center" style={{ background: 'var(--ink)' }}>
          <p className="font-body text-xs tracking-widest uppercase" style={{ color: 'rgba(245,140,39,0.55)' }}>
            {`© ${new Date().getFullYear()} KPrimestores — Premium Quality · Genuinely Affordable`}
          </p>
        </div>

        {/* ══ WHATSAPP FLOATING BUTTON ══ */}
        <a
          href="https://wa.me/2349134424632?text=Hello%20KPrimestores!%20I'd%20like%20to%20know%20more%20about%20your%20products."
          target="_blank"
          rel="noopener noreferrer"
          className="wa-float"
          aria-label="Chat with KPrimestores on WhatsApp"
        >
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378L.586 21.433l1.446-5.43a9.955 9.955 0 0 1-1.337-5.01C.698 5.42 5.13 1 10.617 1c2.663 0 5.167 1.037 7.053 2.922a9.86 9.86 0 0 1 2.92 7.04c-.003 5.487-4.433 9.843-9.539 9.843m8.122-18.01A11.815 11.815 0 0 0 10.617 0C4.808 0 .07 4.733.066 10.535a10.507 10.507 0 0 0 1.407 5.279L0 24l8.397-2.203a10.578 10.578 0 0 0 5.05 1.288h.005c5.806 0 10.546-4.733 10.548-10.536a10.478 10.478 0 0 0-3.077-7.454" />
          </svg>
        </a>

      </main>
    </>
  )
}

export default HomeSec