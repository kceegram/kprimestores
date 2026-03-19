import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const badges = [
    {
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      label: "Quality Assured",
    },
    {
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
        </svg>
      ),
      label: "Fast Delivery",
    },
    {
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
        </svg>
      ),
      label: "Secure Payments",
    },
  ];

  return (
    <footer className="w-full bg-gray-50 border-t border-gray-200">
      <div className="h-[3px] w-full bg-gradient-to-r from-gray-200 via-amber-400 to-gray-200" />

      <div className="mx-auto max-w-5xl px-6 py-4 flex flex-col items-center gap-5">

        {/* Brand — logo stacked above tagline */}
        <div className="flex flex-col items-center gap-1.5">
          <Link href="/" className="flex items-center -my-8">
            <Image
              src="/kprimestore.img.png"
              alt="KPrime Store"
              width={210}
              height={24}
              priority
              className="object-contain"
            />
          </Link>
          <p className="text-zinc-500 text-xs">Affordable & high-quality products</p>
        </div>

        {/* Trust badges */}
        <div className="flex items-center gap-3 flex-wrap justify-center">
          {badges.map(({ icon, label }) => (
            <div key={label} className="flex items-center gap-1.5 bg-white border border-gray-200 rounded-full px-3 py-1.5 shadow-sm">
              <span className="text-amber-500">{icon}</span>
              <span className="text-zinc-600 text-xs font-semibold">{label}</span>
            </div>
          ))}
        </div>

        {/* Divider + copyright */}
        <div className="w-full border-t border-gray-200 pt-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-zinc-400">
          <span>&copy; {new Date().getFullYear()} KprimeStores. All rights reserved.</span>
          <span className="px-3 py-1 bg-amber-50 border border-amber-200 rounded-full text-amber-600 font-semibold">
            Trusted Store ✦
          </span>
        </div>

      </div>
    </footer>
  );
}