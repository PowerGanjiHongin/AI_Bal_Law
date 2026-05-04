import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          <div className="text-center md:text-left">
            <div className="flex flex-col items-center md:items-start mb-6">
              <Image
                src="https://ext.same-assets.com/549901695/2060650607.svg"
                alt="BALAW"
                width={80}
                height={32}
                className="h-8 w-auto mb-2"
              />
              <p className="text-xs text-gray-500">Borderless, Accessible Law</p>
            </div>
            <div className="space-y-2 text-gray-500 text-sm">
              <p className="flex items-center justify-center md:justify-start gap-2">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                서울특별시 강남구 테헤란로 123, 테크타워 15층
              </p>
              <p className="flex items-center justify-center md:justify-start gap-2">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                contact@company.com
              </p>
              <p className="flex items-center justify-center md:justify-start gap-2">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                02-1234-5678
              </p>
            </div>
          </div>

          <div className="flex gap-8 text-sm text-gray-600">
            <Link href="#" className="hover:text-electric-600 transition-colors">
              개인정보처리방침
            </Link>
            <Link href="#" className="hover:text-electric-600 transition-colors">
              이용약관
            </Link>
            <Link href="#" className="hover:text-electric-600 transition-colors">
              고객지원
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-100 text-center text-gray-400 text-xs">
          Copyright &copy; 2026 BALAW. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
