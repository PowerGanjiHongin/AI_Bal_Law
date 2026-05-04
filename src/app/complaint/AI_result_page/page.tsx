"use client";

import { useEffect, useState, Suspense } from "react"; // Suspense 추가
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { GoogleGenerativeAI } from "@google/generative-ai";

const CASE_LABELS: Record<string, Record<string, string>> = {
  ko: { civil: "민사소장", criminal: "형사고소장", copy: "복사", download: "다운로드", back: "다시 작성", print: "인쇄" },
  ru: { civil: "Гражданский иск", criminal: "Уголовная жалоба", copy: "Копировать", download: "Скачать", back: "Переписать", print: "Печать" },
  kz: { civil: "Азаматтық арыз", criminal: "Қылмыстық шағым", copy: "Көшіру", download: "Жүктеу", back: "Қайта жазу", print: "Басып шығару" },
  zh: { civil: "民事诉状", criminal: "刑事控告书", copy: "复制", download: "下载", back: "重新填写", print: "打印" },
  en: { civil: "Civil Complaint", criminal: "Criminal Complaint", copy: "Copy", download: "Download", back: "Rewrite", print: "Print" },
};

const LANG_NAMES: Record<string, string> = {
  ko: "한국어",
  ru: "Russian (Русский)",
  kz: "Kazakh (Қазақша)",
  zh: "Chinese (中文)",
  en: "English",
};

async function generateComplaint(params: Record<string, string>): Promise<string> {
  const { caseType, language, who, whom, when, where, what, how, why } = params;
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  if (!apiKey) throw new Error("API 키가 설정되지 않았습니다.");

  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" }); 

  const docTitle = caseType === "civil" ? "민사소장" : "형사고소장";
  const inputLang = LANG_NAMES[language] || "한국어";

  const combinedPrompt = `
당신은 한국 법률 전문가이자 전문 대필가입니다.
입력된 외국어 정보를 분석하여 한국 법원에 제출할 수 있는 공식 ${docTitle}을 한국어로 작성하세요.

[사건 요약 정보 (입력 언어: ${inputLang})]
- 대상: ${who} (원고/고소인) vs ${whom} (피고/피고소인)
- 일시: ${when}
- 장소: ${where}
- 사건내용: ${what}, ${how}
- 원인 및 요구사항: ${why}

[작성 지침]
1. 먼저 사건 내용을 한국 법률 용어에 맞게 분석하세요.
2. 분석된 내용을 바탕으로 정식 ${docTitle} 형식을 갖추어 작성하세요.
3. 문서 상단에 '소 장' 또는 '고 소 장' 제목을 크게 배치하세요.
4. 당사자 인적사항, 청구취지(또는 고소취지), 청구원인(또는 범죄사실), 증거방법, 결론 순서로 작성하세요.
5. 반드시 한국어로만 작성하며, 문체는 법정에서 사용하는 엄격하고 정중한 문체를 사용하세요.
6. 최종 결과물인 한국어 소장 전문만 출력하세요.`;

  try {
    const result = await model.generateContent(combinedPrompt);
    const response = await result.response;
    return response.text();
  } catch (error: any) {
    if (error.message?.includes("429")) {
      throw new Error("현재 이용자가 많아 AI가 잠시 쉬고 있습니다. 15초 후 다시 시도해 주세요.");
    }
    throw error;
  }
}

// 1. 실제 UI와 로직이 돌아가는 컴포넌트
function ResultContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState("");

  const params = Object.fromEntries(searchParams.entries());
  const language = params.language || "ko";
  const caseType = params.caseType || "civil";
  const L = CASE_LABELS[language] || CASE_LABELS.ko;
  const docTitle = caseType === "civil" ? L.civil : L.criminal;

  useEffect(() => {
    let isMounted = true;
    
    generateComplaint(params)
      .then((data) => {
        if (isMounted) setResult(data);
      })
      .catch((err) => {
        if (isMounted) {
          setError(err.message || "오류가 발생했습니다.");
        }
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => { isMounted = false; };
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => window.print();

  const handleDownload = () => {
    const blob = new Blob([result], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${docTitle}_${new Date().toISOString().slice(0, 10)}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="pt-24 pb-20 px-6 max-w-4xl mx-auto">
      <div className="flex items-start justify-between mb-8 print:hidden">
        <div>
          <div className="flex items-center gap-2 mb-2">
            {loading ? (
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse inline-block" />
            ) : error ? (
              <span className="w-2 h-2 rounded-full bg-red-400 inline-block" />
            ) : (
              <span className="w-2 h-2 rounded-full bg-green-400 inline-block" />
            )}
            <p className={`text-xs font-semibold tracking-widest uppercase ${
              loading ? "text-blue-400" : error ? "text-red-400" : "text-green-400"
            }`}>
              {loading ? "AI 분석 및 작성 중..." : error ? "오류 발생" : "소장 작성 완료"}
            </p>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-white">{docTitle}</h1>
        </div>

        {!loading && !error && (
          <div className="flex items-center gap-2 flex-shrink-0">
            <button onClick={handleCopy} className="px-3 py-2 bg-white/8 border border-white/15 rounded-lg text-white/70 text-xs hover:text-white transition-all">
              {copied ? <span className="text-green-400">복사됨</span> : L.copy}
            </button>
            <button onClick={handleDownload} className="px-3 py-2 bg-white/8 border border-white/15 rounded-lg text-white/70 text-xs hover:text-white transition-all">
              {L.download}
            </button>
            <button onClick={handlePrint} className="px-3 py-2 bg-blue-600 border border-blue-500 rounded-lg text-white text-xs hover:bg-blue-500 transition-all">
              {L.print}
            </button>
          </div>
        )}
      </div>

      <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-24 gap-5">
            <div className="w-12 h-12 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
            <p className="text-white/70 text-sm text-center">
              입력하신 {LANG_NAMES[language]} 정보를 바탕으로<br/>한국어 공식 소장을 생성하고 있습니다.
            </p>
          </div>
        ) : error ? (
          <div className="flex flex-col items-center justify-center py-24 gap-4">
            <p className="text-red-400 text-sm text-center">{error}</p>
            <button onClick={() => window.location.reload()} className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg">다시 시도</button>
          </div>
        ) : (
          <div className="p-8 md:p-12 bg-white rounded-xl shadow-2xl print:shadow-none mx-4 my-8">
            <pre className="whitespace-pre-wrap font-serif text-gray-800 text-sm md:text-base leading-relaxed">
              {result}
            </pre>
          </div>
        )}
      </div>
      
      {!loading && !error && (
        <div className="mt-6 p-4 bg-amber-500/10 border border-amber-500/20 rounded-xl print:hidden">
          <p className="text-amber-400/80 text-xs">⚠️ 본 문서는 AI 초안입니다. 법률 전문가의 검토를 권장합니다.</p>
        </div>
      )}
    </div>
  );
}

// 2. 최종 export 페이지 (보호막 역할)
export default function ResultPage() {
  const router = useRouter();
  
  return (
    <div className="min-h-screen bg-[#0a0f1e]">
      <nav className="fixed top-0 w-full z-50 bg-[#0a0f1e]/90 backdrop-blur-sm border-b border-white/10 print:hidden">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image src="https://ext.same-assets.com/549901695/2060650607.svg" alt="BALAW" width={80} height={28} className="h-7 w-auto" />
          </Link>
          <button onClick={() => router.push("/complaint/main_form")} className="text-sm text-white/50 hover:text-white flex items-center gap-1.5">
            뒤로 가기
          </button>
        </div>
      </nav>

      {/* Suspense 보호막 설치! */}
      <Suspense fallback={<div className="pt-32 text-center text-white/50">결과 화면을 준비 중입니다...</div>}>
        <ResultContent />
      </Suspense>

      <style>{`
        @media print {
          body { background: white !important; }
          .print\\:hidden { display: none !important; }
        }
      `}</style>
    </div>
  );
}