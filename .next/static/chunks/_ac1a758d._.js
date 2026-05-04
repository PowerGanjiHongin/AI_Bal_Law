(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/complaint/AI_result_page/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// "use client";
// import { useEffect, useState } from "react";
// import { useSearchParams, useRouter } from "next/navigation";
// import { NextResponse } from 'next/server';
// import Image from "next/image";
// import Link from "next/link";
// import { GoogleGenerativeAI } from "@google/generative-ai";
// const CASE_LABELS: Record<string, Record<string, string>> = {
//   ko: { civil: "민사소장", criminal: "형사고소장", copy: "복사", download: "다운로드", back: "다시 작성", print: "인쇄" },
//   ru: { civil: "Гражданский иск", criminal: "Уголовная жалоба", copy: "Копировать", download: "Скачать", back: "Переписать", print: "Печать" },
//   kz: { civil: "Азаматтық арыз", criminal: "Қылмыстық шағым", copy: "Көшіру", download: "Жүктеу", back: "Қайта жазу", print: "Басып шығару" },
//   zh: { civil: "民事诉状", criminal: "刑事控告书", copy: "复制", download: "下载", back: "重新填写", print: "打印" },
//   en: { civil: "Civil Complaint", criminal: "Criminal Complaint", copy: "Copy", download: "Download", back: "Rewrite", print: "Print" },
// };
// const LANG_NAMES: Record<string, string> = {
//   ko: "한국어",
//   ru: "Russian (Русский)",
//   kz: "Kazakh (Қазақша)",
//   zh: "Chinese (中文)",
//   en: "English",
// };
// /** 
//  * API 호출 최적화: 
//  * 할당량 문제를 해결하기 위해 두 번의 호출을 '하나의 프롬프트'로 통합했습니다.
//  */
// async function generateComplaint(params: Record<string, string>): Promise<string> {
//   const { caseType, language, who, whom, when, where, what, how, why } = params;
//   // 1. API 키 확인
//   const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
//   if (!apiKey) throw new Error("API 키가 설정되지 않았습니다.");
//   // 2. 초기화
//   const genAI = new GoogleGenerativeAI(apiKey);
//   // 3. 모델 설정 (가장 표준적인 이름으로 변경)
//   // 'models/...' 또는 '-latest'를 붙이지 않은 기본 이름을 사용해보세요.
//   const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" }); 
//   const caseTypeKor = caseType === "civil" ? "민사" : "형사";
//   const docTitle = caseType === "civil" ? "민사소장" : "형사고소장";
//   const inputLang = LANG_NAMES[language] || "한국어";
//   // 통합 프롬프트: 분석과 작성을 한 번에 수행
//   const combinedPrompt = `
// 당신은 한국 법률 전문가이자 전문 대필가입니다.
// 입력된 외국어 정보를 분석하여 한국 법원에 제출할 수 있는 공식 ${docTitle}을 한국어로 작성하세요.
// [사건 요약 정보 (입력 언어: ${inputLang})]
// - 대상: ${who} (원고/고소인) vs ${whom} (피고/피고소인)
// - 일시: ${when}
// - 장소: ${where}
// - 사건내용: ${what}, ${how}
// - 원인 및 요구사항: ${why}
// [작성 지침]
// 1. 먼저 사건 내용을 한국 법률 용어에 맞게 분석하세요.
// 2. 분석된 내용을 바탕으로 정식 ${docTitle} 형식을 갖추어 작성하세요.
// 3. 문서 상단에 '소 장' 또는 '고 소 장' 제목을 크게 배치하세요.
// 4. 당사자 인적사항, 청구취지(또는 고소취지), 청구원인(또는 범죄사실), 증거방법, 결론 순서로 작성하세요.
// 5. 반드시 한국어로만 작성하며, 문체는 법정에서 사용하는 엄격하고 정중한 문체를 사용하세요.
// 최종 결과물인 한국어 소장 전문만 출력하세요.`;
//     console.log("암튼 응답은 했음");
//     console.log(combinedPrompt);
//   try {
//     const result = await model.generateContent(combinedPrompt);
//     const response = await result.response;
//     return response.text();
//     console.log("암튼 응답은 했음");
//     console.log(combinedPrompt);
//   } catch (error: any) {
//     // 429 에러(할당량 초과) 시 사용자 친화적인 메시지 반환
//     if (error.message?.includes("429")) {
//       throw new Error("현재 이용자가 많아 AI가 잠시 쉬고 있습니다. 15초 후 다시 시도해 주세요.");
//     }
//     throw error;
//   }
// }
// export default function ResultPage() {
//   const searchParams = useSearchParams();
//   const router = useRouter();
//   const [result, setResult] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [copied, setCopied] = useState(false);
//   const [error, setError] = useState("");
//   const params = Object.fromEntries(searchParams.entries());
//   const language = params.language || "ko";
//   const caseType = params.caseType || "civil";
//   const L = CASE_LABELS[language] || CASE_LABELS.ko;
//   const docTitle = caseType === "civil" ? L.civil : L.criminal;
//   useEffect(() => {
//     // 중복 호출 방지를 위해 체크
//     let isMounted = true;
//     console.log("응답");
//     generateComplaint(params)
//       .then((data) => {
//         if (isMounted) setResult(data);
//       })
//       .catch((err) => {
//         if (isMounted) {
//           console.error(err);
//           setError(err.message || "오류가 발생했습니다.");
//         }
//       })
//       .finally(() => {
//         if (isMounted) setLoading(false);
//       });
//     return () => { isMounted = false; };
//   }, []);
//   const handleCopy = () => {
//     navigator.clipboard.writeText(result);
//     setCopied(true);
//     setTimeout(() => setCopied(false), 2000);
//   };
//   const handlePrint = () => window.print();
//   const handleDownload = () => {
//     const blob = new Blob([result], { type: "text/plain;charset=utf-8" });
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement("a");
//     a.href = url;
//     a.download = `${docTitle}_${new Date().toISOString().slice(0, 10)}.txt`;
//     a.click();
//     URL.revokeObjectURL(url);
//   };
//   return (
//     <div className="min-h-screen bg-[#0a0f1e]">
//       <nav className="fixed top-0 w-full z-50 bg-[#0a0f1e]/90 backdrop-blur-sm border-b border-white/10 print:hidden">
//         <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
//           <Link href="/" className="flex items-center gap-3">
//             <Image
//               src="https://ext.same-assets.com/549901695/2060650607.svg"
//               alt="BALAW"
//               width={80}
//               height={28}
//               className="h-7 w-auto"
//             />
//           </Link>
//           <button
//             type="button"
//             onClick={() => router.push("/complaint/main_form")}
//             className="text-sm text-white/50 hover:text-white transition-colors flex items-center gap-1.5"
//           >
//             <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//             </svg>
//             {L.back}
//           </button>
//         </div>
//       </nav>
//       <div className="pt-24 pb-20 px-6 max-w-4xl mx-auto">
//         <div className="flex items-start justify-between mb-8 print:hidden">
//           <div>
//             <div className="flex items-center gap-2 mb-2">
//               {loading ? (
//                 <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse inline-block" />
//               ) : error ? (
//                 <span className="w-2 h-2 rounded-full bg-red-400 inline-block" />
//               ) : (
//                 <span className="w-2 h-2 rounded-full bg-green-400 inline-block" />
//               )}
//               <p className={`text-xs font-semibold tracking-widest uppercase ${
//                 loading ? "text-blue-400" : error ? "text-red-400" : "text-green-400"
//               }`}>
//                 {loading ? "AI 분석 및 작성 중..." : error ? "오류 발생" : "소장 작성 완료"}
//               </p>
//             </div>
//             <h1 className="text-2xl md:text-3xl font-bold text-white">{docTitle}</h1>
//           </div>
//           {!loading && !error && (
//             <div className="flex items-center gap-2 flex-shrink-0">
//               <button onClick={handleCopy} className="flex items-center gap-1.5 px-3 py-2 bg-white/8 border border-white/15 rounded-lg text-white/70 hover:text-white text-xs font-medium transition-all">
//                 {copied ? <span className="text-green-400">복사됨</span> : L.copy}
//               </button>
//               <button onClick={handleDownload} className="flex items-center gap-1.5 px-3 py-2 bg-white/8 border border-white/15 rounded-lg text-white/70 hover:text-white text-xs font-medium transition-all">
//                 {L.download}
//               </button>
//               <button onClick={handlePrint} className="flex items-center gap-1.5 px-3 py-2 bg-blue-600 border border-blue-500 rounded-lg text-white text-xs font-medium transition-all hover:bg-blue-500">
//                 {L.print}
//               </button>
//             </div>
//           )}
//         </div>
//         <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
//           {loading ? (
//             <div className="flex flex-col items-center justify-center py-24 gap-5">
//               <div className="relative">
//                 <div className="w-12 h-12 border-2 border-blue-500/30 rounded-full" />
//                 <div className="w-12 h-12 border-2 border-blue-500 border-t-transparent rounded-full animate-spin absolute inset-0" />
//               </div>
//               <p className="text-white/70 text-sm font-medium text-center">
//                 입력하신 {LANG_NAMES[language]} 정보를 바탕으로<br/>한국어 공식 소장을 생성하고 있습니다.
//               </p>
//             </div>
//           ) : error ? (
//             <div className="flex flex-col items-center justify-center py-24 gap-4">
//               <div className="w-12 h-12 rounded-full bg-red-500/20 border border-red-500/40 flex items-center justify-center text-red-400 text-xl font-bold">!</div>
//               <p className="text-red-400 text-sm text-center max-w-sm leading-relaxed">{error}</p>
//               <button
//                 onClick={() => window.location.reload()}
//                 className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-500"
//               >
//                 다시 시도하기
//               </button>
//             </div>
//           ) : (
//             <div className="p-8 md:p-12">
//               <div className="bg-white rounded-xl p-8 md:p-12 shadow-2xl print:shadow-none">
//                 <pre className="whitespace-pre-wrap font-serif text-gray-800 text-sm md:text-base leading-relaxed">
//                   {result}
//                 </pre>
//               </div>
//             </div>
//           )}
//         </div>
//         {!loading && !error && (
//           <div className="mt-6 p-4 bg-amber-500/10 border border-amber-500/20 rounded-xl print:hidden">
//             <p className="text-amber-400/80 text-xs leading-relaxed">
//               ⚠️ 본 문서는 AI가 생성한 초안입니다. 실제 제출 전 법률 전문가의 검토를 권장합니다.
//             </p>
//           </div>
//         )}
//       </div>
//       <style>{`
//         @media print {
//           body { background: white !important; }
//           .print\\:hidden { display: none !important; }
//         }
//       `}</style>
//     </div>
//   );
// }
__turbopack_context__.s([
    "default",
    ()=>ResultPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$same$2d$runtime$2f$dist$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/same-runtime/dist/jsx-dev-runtime.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
async function findAvailableModels() {
    const apiKey = ("TURBOPACK compile-time value", "AIzaSyBrhO0uaXZbYhk-eMyZOgKjQfjTBJlJlY0");
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    // 내 키로 사용할 수 있는 모델 목록을 가져오는 주소입니다.
    const url = "https://generativelanguage.googleapis.com/v1/models?key=".concat(apiKey);
    try {
        var _data_error;
        const response = await fetch(url);
        const data = await response.json();
        if (!response.ok) return "목록 가져오기 실패: ".concat((_data_error = data.error) === null || _data_error === void 0 ? void 0 : _data_error.message);
        // 모델 이름들만 추출해서 합칩니다.
        const modelNames = data.models.map((m)=>m.name.replace("models/", "")).join(", ");
        return modelNames || "사용 가능한 모델이 없습니다.";
    } catch (err) {
        return "에러: ".concat(err.message);
    }
}
function ResultPage() {
    _s();
    const [models, setModels] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("목록 확인 중...");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ResultPage.useEffect": ()=>{
            findAvailableModels().then(setModels);
        }
    }["ResultPage.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$same$2d$runtime$2f$dist$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsxDEV"])("div", {
        style: {
            padding: "50px",
            color: "white",
            backgroundColor: "#0a0f1e",
            minHeight: "100vh"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$same$2d$runtime$2f$dist$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsxDEV"])("h1", {
                children: "사용 가능한 모델 리스트"
            }, void 0, false, {
                fileName: "[project]/src/app/complaint/AI_result_page/page.tsx",
                lineNumber: 290,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$same$2d$runtime$2f$dist$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsxDEV"])("div", {
                style: {
                    padding: "20px",
                    border: "1px solid #4ade80",
                    marginTop: "20px",
                    lineHeight: "1.6"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$same$2d$runtime$2f$dist$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsxDEV"])("strong", {
                        children: "내 키로 쓸 수 있는 모델들:"
                    }, void 0, false, {
                        fileName: "[project]/src/app/complaint/AI_result_page/page.tsx",
                        lineNumber: 292,
                        columnNumber: 9
                    }, this),
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$same$2d$runtime$2f$dist$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: "[project]/src/app/complaint/AI_result_page/page.tsx",
                        lineNumber: 292,
                        columnNumber: 43
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$same$2d$runtime$2f$dist$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsxDEV"])("span", {
                        style: {
                            color: "#4ade80"
                        },
                        children: models
                    }, void 0, false, {
                        fileName: "[project]/src/app/complaint/AI_result_page/page.tsx",
                        lineNumber: 293,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/complaint/AI_result_page/page.tsx",
                lineNumber: 291,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$same$2d$runtime$2f$dist$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsxDEV"])("p", {
                style: {
                    marginTop: "20px",
                    fontSize: "0.9rem"
                },
                children: "💡 위 목록에 있는 이름 중 하나를 골라서 호출해야 404가 안 납니다."
            }, void 0, false, {
                fileName: "[project]/src/app/complaint/AI_result_page/page.tsx",
                lineNumber: 295,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/complaint/AI_result_page/page.tsx",
        lineNumber: 289,
        columnNumber: 5
    }, this);
}
_s(ResultPage, "kfcBj9MpRGBmDjoJZOA4s2zIPI4=");
_c = ResultPage;
var _c;
__turbopack_context__.k.register(_c, "ResultPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        "object" === typeof node && null !== node && node.$$typeof === REACT_ELEMENT_TYPE && node._store && (node._store.validated = 1);
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, trackActualOwner ? Error("react-stack-top-frame") : unknownOwnerDebugStack, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/node_modules/same-runtime/dist/jsx-dev-runtime.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "jsxDEV",
    ()=>jsxDEV
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
;
;
// src/jsx-dev-runtime.ts
var jsxDEV = (type, originalProps, key, isStatic, source, self)=>{
    let props = originalProps;
    try {
        if (originalProps && typeof originalProps === "object" && source && String(type) !== "Symbol(react.fragment)") {
            props = {
                ...originalProps,
                "data-react-source": "".concat(source.fileName, ":").concat(source.lineNumber, ":").concat(source.columnNumber)
            };
        }
    } catch (e) {}
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(type, props, key, isStatic, source, self);
};
;
}),
]);

//# sourceMappingURL=_ac1a758d._.js.map