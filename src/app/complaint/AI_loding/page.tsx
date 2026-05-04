"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";

const STEPS = [
  {
    id: 1,
    label: "AI 1단계 분석",
    sublabel: "사건 정보를 법률 요소로 분류 중...",
    detail: "당사자 정보, 청구 원인, 법적 근거 파악",
  },
  {
    id: 2,
    label: "AI 2단계 작성",
    sublabel: "소장 형식에 맞게 문서 생성 중...",
    detail: "법원 제출용 소장 초안 자동 완성",
  },
];



export default function LoadingPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    // Step 1: 0~50%
    const step1 = setTimeout(() => setCurrentStep(1), 400);

    let p = 0;
    const interval = setInterval(() => {
      p += 1;
      setProgress(p);
      if (p === 50) setCurrentStep(2);
      if (p >= 100) {
        clearInterval(interval);
        setDone(true);
        setTimeout(() => {
          router.push(`/complaint/AI_result_page?${searchParams.toString()}`);
        }, 600);
      }
    }, 40);

    return () => {
      clearTimeout(step1);
      clearInterval(interval);
    };
  }, [router, searchParams]);

  return (
    <div className="min-h-screen bg-[#0a0f1e] flex flex-col items-center justify-center px-6">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="flex justify-center mb-12">
          <Image
            src="https://ext.same-assets.com/549901695/2060650607.svg"
            alt="BALAW"
            width={90}
            height={32}
            className="h-8 w-auto opacity-80"
          />
        </div>

        {/* Steps */}
        <div className="space-y-4 mb-10">
          {STEPS.map((step, i) => {
            const stepNum = i + 1;
            const isActive = currentStep === stepNum;
            const isDone = currentStep > stepNum || done;

            return (
              <div
                key={step.id}
                className={`border rounded-xl p-5 transition-all duration-500 ${
                  isDone
                    ? "border-blue-500/40 bg-blue-600/10"
                    : isActive
                    ? "border-blue-500/60 bg-blue-600/15 shadow-lg shadow-blue-500/10"
                    : "border-white/8 bg-white/3 opacity-40"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-500 ${
                      isDone
                        ? "bg-blue-600 text-white"
                        : isActive
                        ? "bg-blue-600/30 border-2 border-blue-500 text-blue-400"
                        : "bg-white/5 border border-white/15 text-white/30"
                    }`}
                  >
                    {isDone ? (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : isActive ? (
                      <div className="w-4 h-4 border-2 border-blue-400 border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <span className="text-sm font-bold">{stepNum}</span>
                    )}
                  </div>
                  <div>
                    <p className={`font-bold text-sm ${isDone || isActive ? "text-white" : "text-white/30"}`}>
                      {step.label}
                    </p>
                    <p className={`text-xs mt-0.5 ${isDone ? "text-blue-400" : isActive ? "text-white/60" : "text-white/20"}`}>
                      {isDone ? "완료" : step.sublabel}
                    </p>
                    {isActive && (
                      <p className="text-xs text-blue-400/70 mt-1">{step.detail}</p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Progress bar */}
        <div className="mb-4">
          <div className="flex justify-between text-xs text-white/40 mb-2">
            <span>처리 중...</span>
            <span>{progress}%</span>
          </div>
          <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full transition-all duration-100"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {done && (
          <p className="text-center text-blue-400 text-sm font-medium animate-pulse">
            소장 작성 완료! 결과 페이지로 이동 중...
          </p>
        )}
      </div>
    </div>
  );
}