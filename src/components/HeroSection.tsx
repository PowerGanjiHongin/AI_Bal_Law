"use client";

import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://ext.same-assets.com/549901695/1998344180.jpeg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 via-navy-900/70 to-navy-800/50" />
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="max-w-3xl">
          <h2 className="text-electric-400 font-semibold tracking-wide uppercase mb-4 text-sm md:text-base animate-fade-in-up">
            Connecting via Tech, Protecting via Law.
          </h2>

          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6 animate-fade-in-up animation-delay-200">
            정의, 디지털로{" "}
            <span className="text-electric-400">연결되다.</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 mb-4 font-light animate-fade-in-up animation-delay-400">
            기술로 언어의 장벽을 넘고, 법으로 당신을 보호합니다.
          </p>

          <p className="text-gray-300 text-base md:text-lg mb-10 max-w-2xl leading-relaxed animate-fade-in-up animation-delay-600">
            AI 기반 다국어 법률 지원 플랫폼, BALAW입니다. 우리는 글로벌 시민들이
            한국에서 안전하게 정착하고 성장하도록 돕습니다.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-600">
            <Link
              href="/complaint/main_form"
              className="px-8 py-4 bg-transparent border border-gray-400 hover:border-white text-white rounded-lg font-medium text-lg transition-all flex items-center justify-center group gap-3"
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

            <button
              type="button"
              className="px-8 py-4 bg-transparent border border-gray-400 hover:border-white text-white rounded-lg font-medium text-lg transition-all flex items-center justify-center group gap-2"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              데모 영상 보기
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
