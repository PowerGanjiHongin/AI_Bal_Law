import Image from "next/image";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-navy-900 to-navy-800 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          변화를 시작할 준비가 되셨나요?
        </h2>
        <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
          복잡한 법률 문제, 이제 기술이 당신의 든든한 파트너가 되어드립니다.
          지금 바로 상담을 신청하세요.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center bg-transparent border border-white/40 hover:border-white px-10 py-4 rounded-lg transition-all group shadow-2xl gap-3"
        >
           <svg width="100" height="40" viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-10 w-auto">
              <rect x="5" y="5" width="110" height="42" rx="10" fill="none" stroke="#ffffff" stroke-width="2"></rect>
              <path d="M25 47 L25 57 L40 47 Z" fill="none" stroke="#ffffff" stroke-width="2"></path>
              <path d="M25 47 L40 47" stroke="white" stroke-width="2"></path>
              <text x="60" y="28" fill="#ffffff" font-family="Inter, Arial, sans-serif" font-weight="900" font-size="26" text-anchor="middle" dominant-baseline="middle" letter-spacing="1">BALAW</text>
              </svg>
          <Image
                          src="https://ext.same-assets.com/549901695/2970359356.svg"               
                          alt="BALAW"
                          width={80}
                          height={28}
                          className="h-7 w-auto brightness-0 invert"
                        />
        </Link>
      </div>
    </section>
  );
}
