'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'

/* ─────────────────────────────────────────────────────────────
   Custom hook: triggers CSS class when element enters viewport
───────────────────────────────────────────────────────────────*/
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

/* ═══════════════════════════════════════════════════════════
   COLOR PALETTE — extracted directly from kprimestore logo
   Logo dark:  #131122  (deep navy-black)
   Logo gold:  #f58c27  (vivid warm amber — the logo's actual accent)
   Logo gold-d:#c86e10  (deeper amber for gradients / shadows)
═══════════════════════════════════════════════════════════ */

const HomeSec = () => {
  const [currentSlide, setCurrentSlide]           = useState(0)
  const [isAnimating, setIsAnimating]             = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [testimonyDir, setTestimonyDir]           = useState('next')
  const [isTestAnimating, setIsTestAnimating]     = useState(false)
  const autoplayRef     = useRef(null)
  const testAutoplayRef = useRef(null)
  const reveal          = useReveal()

  /* ── Carousel slides ── */
  const heroSlides = [
    { src: '/kprimestorem.png',  alt: 'New Arrivals'        },
    { src: '/kprimestorei.png',  alt: 'Exclusive Deals'     },
    { src: '/kprimestoreii.png', alt: 'Premium Collections' },
  ]

  /* ── Gallery ── */
  const galleryImages = [
    { src: '/kprimestoreiii.png', alt: 'Collection 1' },
    { src: '/kprimestorev.png',   alt: 'Collection 2' },
    { src: '/kprimestoremiii.png',alt: 'Collection 3' },
    { src: '/kprimestorevi.png',  alt: 'Collection 4' },
    { src: '/kprimestorevii.png', alt: 'Collection 5' },
    { src: '/kprimestorexi.png',  alt: 'Collection 6' },
  ]

  /* ── About image ── */
  const aboutImage = { src: '/images/about.jpg', alt: 'About KPrimestores' }

  /* ── Testimonials ── */
  const testimonials = [
    {
      name: 'BUDUZIRI WISDOM',
      text: 'Shopping at KPrimestores was an absolute delight. The quality of every item I received matched the description perfectly, and delivery was faster than I expected. This is now my go-to store.',
    },
    {
      name: 'MEZIE BRIGHT',
      text: 'I was sceptical at first, but KPrimestores completely won me over. Their range is impressive and the pricing is fair. Customer support resolved my query within minutes. Highly recommended.',
    },
    {
      name: 'CHIMZI DICKSON',
      text: 'What sets KPrimestores apart is the attention to detail. Products are well-packaged, carefully sourced, and genuinely worth every kobo. I have referred three friends already.',
    },
    {
      name: 'CHINWE PRESH',
      text: 'I found exactly what I had been searching for — and at a price I could not believe. The whole experience felt curated and personal. KPrimestores truly understands its customers.',
    },
    {
      name: 'KELLY RICHARD',
      text: 'From browsing to checkout, everything was seamless. The product quality speaks for itself. KPrimestores has earned my loyalty and I return every season without hesitation.',
    },
    {
      name: 'MAURICE FRANK',
      text: 'A premium experience at every touchpoint. The collections are thoughtfully put together and the team genuinely cares about satisfaction. I am already looking forward to my next order.',
    },
    {
      name: 'OKORO DIVINE',
      text: 'KPrimestores delivers on every promise — quality, variety, and integrity. Shopping here feels like a privilege. I particularly love the thrift finds; unique pieces you simply cannot get elsewhere.',
    },
    {
      name: 'PRINCE GP',
      text: 'KPrimestores has completely changed how I shop. Every product feels handpicked, and the value you get for your money is unmatched. I placed my first order on a whim and have not stopped since.',
    },
    {
      name: 'ESTACY CHU',
      text: 'The elegance of this store extends beyond the products — it is in the service, the packaging, and the follow-through. KPrimestores treats every customer like royalty. I would not shop anywhere else.',
    },
    {
      name: 'RISI GREAT',
      text: 'I stumbled upon KPrimestores and it was the best discovery I made all year. The thrift collection is a goldmine — quality pieces at prices that make sense. Fast delivery, zero compromises.',
    },
  ]

  /* ── Hero autoplay ── */
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

  /* ── Testimonial autoplay ── */
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

        /* ══ DESIGN TOKENS ══ */
        :root {
          --gold:      #f58c27;
          --gold-d:    #c86e10;
          --gold-glow: rgba(245,140,39,0.18);
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

        /* ── Carousel ── */
        .carousel-track {
          display: flex;
          height: 100%;
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

        /* ── Navigation dots ── */
        .nav-dot {
          height: 8px;
          border-radius: 9999px;
          background: rgba(255,255,255,0.35);
          width: 8px;
          cursor: pointer;
          border: none;
          padding: 0;
          outline: none;
          transition: width 0.45s cubic-bezier(0.34,1.56,0.64,1), background 0.35s ease;
        }
        .nav-dot.active             { width: 30px; background: var(--gold); }
        .nav-dot:hover:not(.active) { background: rgba(255,255,255,0.7); }

        /* ── Testimonial dots ── */
        .test-dot {
          width: 7px; height: 7px;
          border-radius: 9999px;
          background: rgba(19,17,34,0.18);
          cursor: pointer;
          border: none;
          padding: 0;
          outline: none;
          transition: width 0.45s cubic-bezier(0.34,1.56,0.64,1), background 0.35s ease;
        }
        .test-dot.active             { width: 24px; background: var(--gold); }
        .test-dot:hover:not(.active) { background: rgba(245,140,39,0.45); }

        /* ── Gold utilities ── */
        .gold-line {
          background: linear-gradient(90deg, transparent, var(--gold), transparent);
        }
        .welcome-divider {
          width: 64px; height: 2px;
          background: linear-gradient(90deg, var(--gold), var(--gold-d));
          margin: 0 auto;
        }

        /* ── Category label ── */
        .category-line {
          display: flex; align-items: center; justify-content: center; gap: 16px;
        }
        .category-word {
          font-family: 'Cormorant Garamond', serif;
          font-style: italic; font-weight: 300; font-size: 1.25rem;
          letter-spacing: 0.07em; color: var(--gold-d); line-height: 1;
        }
        .category-sep {
          width: 30px; height: 1px;
          background: linear-gradient(90deg, var(--gold), var(--gold-d));
          flex-shrink: 0;
        }

        /* ── Buttons ── */
        .btn-primary {
          font-family: 'Jost', sans-serif;
          letter-spacing: 0.2em; text-transform: uppercase; font-size: 0.72rem;
          background: var(--ink); color: var(--gold);
          padding: 14px 40px;
          transition: background 0.3s ease, color 0.3s ease;
          display: inline-block;
        }
        .btn-primary:hover { background: var(--gold); color: var(--ink); }

        .btn-outline {
          font-family: 'Jost', sans-serif;
          letter-spacing: 0.2em; text-transform: uppercase; font-size: 0.72rem;
          border: 1px solid var(--gold); color: var(--ink);
          padding: 14px 40px;
          transition: background 0.3s ease, color 0.3s ease;
          display: inline-block;
        }
        .btn-outline:hover { background: var(--gold); color: var(--ink); }

        /* Arrow buttons for testimonial */
        .arrow-btn {
          width: 42px; height: 42px;
          border-radius: 50%;
          border: 1px solid rgba(245,140,39,0.4);
          background: transparent;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          color: var(--gold-d);
          transition: background 0.3s ease, border-color 0.3s ease, color 0.3s ease;
          font-size: 1rem;
          outline: none;
          flex-shrink: 0;
        }
        .arrow-btn:hover {
          background: var(--gold);
          border-color: var(--gold);
          color: var(--ink);
        }

        /* ── Hero entrance ── */
        @keyframes fadeUp {
          from { opacity:0; transform:translateY(28px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .afu   { animation: fadeUp 0.9s ease both; }
        .afu-1 { animation: fadeUp 0.9s 0.20s ease both; }
        .afu-2 { animation: fadeUp 0.9s 0.40s ease both; }
        .afu-3 { animation: fadeUp 0.9s 0.60s ease both; }
        .afu-4 { animation: fadeUp 0.9s 0.80s ease both; }

        /* ── Scroll-reveal ── */
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

        /* ── Gallery ── */
        .gallery-img {
          transition: transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94), filter 0.6s ease;
          filter: brightness(0.93) saturate(0.88);
        }
        .gallery-wrap:hover .gallery-img { transform: scale(1.06); filter: brightness(1.04) saturate(1.1); }
        .gallery-mask { background: rgba(19,17,34,0); transition: background 0.45s ease; }
        .gallery-wrap:hover .gallery-mask { background: rgba(245,140,39,0.08); }

        /* ── Stat gradient text ── */
        .stat-number {
          background: linear-gradient(135deg, var(--gold), var(--gold-d));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* ── About image border ── */
        .about-img-border { border: 1px solid rgba(245,140,39,0.28); }

        /* ── Underline link ── */
        .underline-link {
          font-family: 'Jost', sans-serif;
          letter-spacing: 0.2em; text-transform: uppercase; font-size: 0.72rem;
          border-bottom: 1px solid var(--gold); color: var(--ink); padding-bottom: 2px;
          transition: color 0.3s ease; display: inline-block;
        }
        .underline-link:hover { color: var(--gold); }

        /* ── Stats divider ── */
        .stats-divider { border-color: rgba(245,140,39,0.28); }

        /* ══════════════════════════════════════════════
           TESTIMONIALS
        ══════════════════════════════════════════════ */

        /* Witness name — Cinzel for gravitas & distinction */
        .testimony-name {
          font-family: 'Cinzel', serif;
          font-weight: 500;
          font-size: 0.78rem;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          background: linear-gradient(135deg, var(--gold), var(--gold-d));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1;
        }

        .testimony-name-rule {
          width: 28px; height: 1px;
          background: linear-gradient(90deg, var(--gold), var(--gold-d));
          flex-shrink: 0;
        }

        /* Quotation mark — decorative large open quote */
        .quote-mark {
          font-family: 'Cormorant Garamond', serif;
          font-size: 9rem;
          line-height: 0.6;
          color: rgba(245,140,39,0.10);
          font-style: italic;
          font-weight: 700;
          user-select: none;
          pointer-events: none;
          position: absolute;
          top: 0; left: -10px;
        }

        /* Slide transition */
        @keyframes testSlideInNext  { from { opacity:0; transform:translateX(55px); }  to { opacity:1; transform:translateX(0); } }
        @keyframes testSlideInPrev  { from { opacity:0; transform:translateX(-55px); } to { opacity:1; transform:translateX(0); } }

        .test-in-next { animation: testSlideInNext 0.55s cubic-bezier(0.22,1,0.36,1) both; }
        .test-in-prev { animation: testSlideInPrev 0.55s cubic-bezier(0.22,1,0.36,1) both; }

        /* Card surface */
        .testimony-card {
          background: #fff;
          border-top: 2px solid var(--gold);
          box-shadow:
            0 2px 8px rgba(19,17,34,0.05),
            0 12px 40px rgba(19,17,34,0.06),
            inset 0 0 0 1px rgba(245,140,39,0.07);
          max-width: 720px;
          width: 100%;
          margin: 0 auto;
          position: relative;
          overflow: hidden;
        }

        /* Subtle corner accent */
        .testimony-card::after {
          content: '';
          position: absolute;
          bottom: 0; right: 0;
          width: 60px; height: 60px;
          background: linear-gradient(135deg, transparent 60%, rgba(245,140,39,0.06) 100%);
          pointer-events: none;
        }

        /* Background ambience for the section */
        .testimonial-bg {
          background:
            radial-gradient(ellipse 70% 55% at 50% 10%, rgba(245,140,39,0.055) 0%, transparent 70%),
            var(--cream);
        }
      `}</style>

      <main className="font-body" style={{ background: 'var(--cream)' }}>

        {/* ══════════════════════════════════════════════════
            1.  HERO CAROUSEL
        ══════════════════════════════════════════════════ */}
        <section className="relative w-full h-[90vh] min-h-[560px] overflow-hidden">
          <div
            className="carousel-track absolute inset-0"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {heroSlides.map((slide, i) => (
              <div key={i} className="carousel-slide">
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  priority={i === 0}
                  className="object-cover object-center"
                  sizes="100vw"
                />
                <div className="hero-overlay absolute inset-0" />
              </div>
            ))}
          </div>

          <div className="relative z-10 flex flex-col items-center justify-end h-full pb-16 px-6 text-center">
            <p className="font-body tracking-[0.35em] text-xs uppercase mb-4 afu" style={{ color: 'var(--gold)' }}>
              Welcome to
            </p>
            <h1 className="font-display text-white text-5xl sm:text-7xl md:text-8xl font-light leading-none tracking-wide mb-4 afu-1">
              KPrime<span className="italic" style={{ color: 'var(--gold)' }}>stores</span>
            </h1>
            <div className="gold-line h-px w-32 mb-5 afu-2" />
            <p className="font-body text-white/80 text-sm sm:text-base font-light tracking-widest uppercase mb-10 afu-3">
              Where Your Choice Is Not Limited
            </p>
            <div className="flex items-center gap-[10px] afu-4">
              {heroSlides.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Slide ${i + 1}`}
                  className={`nav-dot${currentSlide === i ? ' active' : ''}`}
                  onClick={() => goToSlide(i)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            2.  WELCOME SECTION
        ══════════════════════════════════════════════════ */}
        <section className="py-20 px-6 md:px-16 lg:px-24 text-center max-w-5xl mx-auto">
          <p className="font-body tracking-[0.3em] text-xs uppercase mb-3" style={{ color: 'var(--gold)' }}>
            Our Story
          </p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-light italic mb-6" style={{ color: 'var(--ink)' }}>
            KPrimestores
          </h2>
          <div className="welcome-divider mb-8" />

          <p className="font-body text-base sm:text-lg leading-relaxed font-light max-w-3xl mx-auto mb-5" style={{ color: 'var(--ink-mid)' }}>
            At <span className="font-medium" style={{ color: 'var(--ink)' }}>KPrimestores</span>, we believe
            that every great purchase begins with an exceptional selection. We are a premier destination for
            discerning shoppers who refuse to settle — a curated marketplace where quality meets variety, and
            where your every need finds its match.
          </p>
          <p className="font-body text-sm sm:text-base leading-relaxed font-light max-w-2xl mx-auto mb-10" style={{ color: 'var(--ink-soft)' }}>
            From everyday essentials to exclusive finds, we bring together an unrivalled range of products
            under one roof — each chosen with care, delivered with integrity, and presented with the standard
            you deserve. Because at KPrimestores, your choice is never limited.
          </p>

          <div className="category-line mb-10">
            <span className="category-word">Thrifts</span>
            <span className="category-sep" />
            <span className="category-word">New Collections</span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#" className="btn-primary">Shop Now</a>
            <a href="#about" className="btn-outline">Learn More</a>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            3.  GALLERY GRID
        ══════════════════════════════════════════════════ */}
        <section className="px-4 sm:px-8 md:px-12 lg:px-16 pb-20">
          <div className="text-center mb-10">
            <p className="font-body tracking-[0.3em] text-xs uppercase mb-3" style={{ color: 'var(--gold)' }}>
              Explore
            </p>
            <h3 className="font-display text-3xl sm:text-4xl font-light italic" style={{ color: 'var(--ink)' }}>
              Our Collections
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
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="gallery-img object-cover"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  <div className="gallery-mask absolute inset-0" />
                </div>
              )
            })}
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            4.  ABOUT US
        ══════════════════════════════════════════════════ */}
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
                  A Standard of Excellence,{' '}
                  <span className="italic" style={{ color: 'var(--gold)' }}>Redefined.</span>
                </h3>
                <p className="font-body text-sm sm:text-base leading-relaxed font-light" style={{ color: 'var(--ink-mid)' }}>
                  Founded on the principles of trust, quality, and accessibility,{' '}
                  <span className="font-medium" style={{ color: 'var(--ink)' }}>KPrimestores</span> is more
                  than a retail destination — it is a commitment. A commitment to bringing you products that
                  align with your lifestyle, aspirations, and values, without compromise.
                </p>
                <p className="font-body text-sm sm:text-base leading-relaxed font-light" style={{ color: 'var(--ink-soft)' }}>
                  We operate at the intersection of convenience and curation — sourcing from trusted suppliers,
                  maintaining the highest quality standards, and ensuring every customer leaves satisfied.
                </p>
                <p className="font-body text-sm sm:text-base leading-relaxed font-light" style={{ color: 'var(--ink-soft)' }}>
                  Whether you are shopping for your home, wardrobe, or loved ones, KPrimestores is your
                  trusted partner — present at every step, ready to exceed your expectations, and committed
                  to growing alongside you.
                </p>
                <div className="pt-4">
                  <a href="#" className="underline-link">Discover Our Full Story →</a>
                </div>
              </div>

              <div ref={reveal('fade-left', 200)} className="relative">
                 <div className="absolute -top-4 -left-4 w-full h-full about-img-border z-0" />
                   <div className="relative z-10 w-full h-80 sm:h-96">
                      <Image
                         src="/happyclient.png"
                         alt="Happy KPrimestores Customer"
                         fill
                         className="object-cover"
                         sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                   </div>
                 </div>
              </div>

            {/* Stats */}
            <div
              ref={reveal('fade-up', 100)}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t stats-divider pt-12"
            >
              {[
                { number: '500+', label: 'Happy Customers' },
                { number: '300+', label: 'Products Listed'  },
                { number: '98%',  label: 'Satisfaction Rate' },
                { number: '24/7', label: 'Customer Support'  },
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

        {/* ══════════════════════════════════════════════════
            5.  TESTIMONIALS
        ══════════════════════════════════════════════════ */}
        <section className="testimonial-bg py-24 px-6 md:px-16 lg:px-24">
          <div className="max-w-4xl mx-auto">

            {/* Section heading */}
            <div ref={reveal('fade-up', 0)} className="text-center mb-4">
              <p className="font-body tracking-[0.3em] text-xs uppercase mb-3" style={{ color: 'var(--gold)' }}>
                What Our Customers Say
              </p>
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-light italic mb-3" style={{ color: 'var(--ink)' }}>
                Testimonials
              </h2>
              <div className="welcome-divider mb-5" />
              <p className="font-body text-sm font-light tracking-wide max-w-md mx-auto" style={{ color: 'var(--ink-soft)' }}>
                Trusted by real customers. Here is what a few of them have to say about their experience
                shopping with KPrimestores.
              </p>
            </div>

            {/* Carousel */}
            <div ref={reveal('fade-up', 150)} className="mt-14">
              <div className="relative">

                {/* Card */}
                <div
                  className={`testimony-card px-8 sm:px-12 pt-12 pb-10 ${testimonyDir === 'next' ? 'test-in-next' : 'test-in-prev'}`}
                  key={currentTestimonial}
                >
                  {/* Decorative quote mark */}
                  <span className="quote-mark" aria-hidden="true">&ldquo;</span>

                  {/* Name row */}
                  <div className="flex items-center gap-3 mb-5 relative z-10">
                    <span className="testimony-name-rule" />
                    <span className="testimony-name">{testimonials[currentTestimonial].name}</span>
                    <span className="testimony-name-rule" />
                  </div>

                  {/* Testimony body */}
                  <p
                    className="font-display text-xl sm:text-2xl font-light italic leading-relaxed relative z-10"
                    style={{ color: 'var(--ink-mid)' }}
                  >
                    {testimonials[currentTestimonial].text}
                  </p>
                </div>

                {/* Arrow controls */}
                <div className="flex items-center justify-between mt-8">
                  <button
                    className="arrow-btn"
                    aria-label="Previous testimony"
                    onClick={() => stepTestimonial('prev')}
                  >
                    ←
                  </button>

                  {/* Dot indicators */}
                  <div className="flex items-center gap-2">
                    {testimonials.map((_, i) => (
                      <button
                        key={i}
                        aria-label={`Testimony ${i + 1}`}
                        className={`test-dot${currentTestimonial === i ? ' active' : ''}`}
                        onClick={() => goToTestimonial(i)}
                      />
                    ))}
                  </div>

                  <button
                    className="arrow-btn"
                    aria-label="Next testimony"
                    onClick={() => stepTestimonial('next')}
                  >
                    →
                  </button>
                </div>

                {/* Counter */}
                <p
                  className="text-center font-body text-xs tracking-[0.2em] uppercase mt-5"
                  style={{ color: 'var(--ink-soft)' }}
                >
                  {String(currentTestimonial + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* Footer strip */}
        <div className="py-6 px-6 text-center" style={{ background: 'var(--ink)' }}>
          <p className="font-body text-xs tracking-widest uppercase" style={{ color: 'rgba(245,140,39,0.55)' }}>
            © {new Date().getFullYear()} KPrimestores — Where Your Choice Is Not Limited
          </p>
        </div>

      </main>
    </>
  )
}

export default HomeSec