module.exports = [
"[project]/src/app/complaint/AI_result_page/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ResultPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$same$2d$runtime$2f$dist$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/same-runtime/dist/jsx-dev-runtime.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$generative$2d$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@google/generative-ai/dist/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
const CASE_LABELS = {
    ko: {
        civil: "민사소장",
        criminal: "형사고소장",
        copy: "복사",
        download: "다운로드",
        back: "다시 작성",
        print: "인쇄"
    },
    ru: {
        civil: "Гражданский иск",
        criminal: "Уголовная жалоба",
        copy: "Копировать",
        download: "Скачать",
        back: "Переписать",
        print: "Печать"
    },
    kz: {
        civil: "Азаматтық арыз",
        criminal: "Қылмыстық шағым",
        copy: "Көшіру",
        download: "Жүктеу",
        back: "Қайта жазу",
        print: "Басып шығару"
    },
    zh: {
        civil: "民事诉状",
        criminal: "刑事控告书",
        copy: "复制",
        download: "下载",
        back: "重新填写",
        print: "打印"
    },
    en: {
        civil: "Civil Complaint",
        criminal: "Criminal Complaint",
        copy: "Copy",
        download: "Download",
        back: "Rewrite",
        print: "Print"
    }
};
const LANG_NAMES = {
    ko: "한국어",
    ru: "Russian (Русский)",
    kz: "Kazakh (Қазақша)",
    zh: "Chinese (中文)",
    en: "English"
};
/** 
 * API 호출 최적화: 
 * 할당량 문제를 해결하기 위해 두 번의 호출을 '하나의 프롬프트'로 통합했습니다.
 */ async function generateComplaint(params) {
    const { caseType, language, who, whom, when, where, what, how, why } = params;
    // 1. API 키 확인
    const apiKey = ("TURBOPACK compile-time value", "AIzaSyBrhO0uaXZbYhk-eMyZOgKjQfjTBJlJlY0");
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    // 2. 초기화
    const genAI = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$generative$2d$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GoogleGenerativeAI"](apiKey);
    // 3. 모델 설정 (가장 표준적인 이름으로 변경)
    // 'models/...' 또는 '-latest'를 붙이지 않은 기본 이름을 사용해보세요.
    const model = genAI.getGenerativeModel({
        model: "gemini-2.5-flash"
    });
    const caseTypeKor = caseType === "civil" ? "민사" : "형사";
    const docTitle = caseType === "civil" ? "민사소장" : "형사고소장";
    const inputLang = LANG_NAMES[language] || "한국어";
    // 통합 프롬프트: 분석과 작성을 한 번에 수행
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

최종 결과물인 한국어 소장 전문만 출력하세요.`;
    console.log("암튼 응답은 했음");
    console.log(combinedPrompt);
    try {
        const result = await model.generateContent(combinedPrompt);
        const response = await result.response;
        return response.text();
        //TURBOPACK unreachable
        ;
    } catch (error) {
        // 429 에러(할당량 초과) 시 사용자 친화적인 메시지 반환
        if (error.message?.includes("429")) {
            throw new Error("현재 이용자가 많아 AI가 잠시 쉬고 있습니다. 15초 후 다시 시도해 주세요.");
        }
        throw error;
    }
}
function ResultPage() {
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [result, setResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const params = Object.fromEntries(searchParams.entries());
    const language = params.language || "ko";
    const caseType = params.caseType || "civil";
    const L = CASE_LABELS[language] || CASE_LABELS.ko;
    const docTitle = caseType === "civil" ? L.civil : L.criminal;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // 중복 호출 방지를 위해 체크
        let isMounted = true;
        console.log("응답");
        generateComplaint(params).then((data)=>{
            if (isMounted) setResult(data);
        }).catch((err)=>{
            if (isMounted) {
                console.error(err);
                setError(err.message || "오류가 발생했습니다.");
            }
        }).finally(()=>{
            if (isMounted) setLoading(false);
        });
        return ()=>{
            isMounted = false;
        };
    }, []);
    const handleCopy = ()=>{
        navigator.clipboard.writeText(result);
        setCopied(true);
        setTimeout(()=>setCopied(false), 2000);
    };
    const handlePrint = ()=>window.print();
    const handleDownload = ()=>{
        const blob = new Blob([
            result
        ], {
            type: "text/plain;charset=utf-8"
        });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `${docTitle}_${new Date().toISOString().slice(0, 10)}.txt`;
        a.click();
        URL.revokeObjectURL(url);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$same$2d$runtime$2f$dist$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsxDEV"])("div", {
        className: "min-h-screen bg-[#0a0f1e]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$same$2d$runtime$2f$dist$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsxDEV"])("nav", {
                className: "fixed top-0 w-full z-50 bg-[#0a0f1e]/90 backdrop-blur-sm border-b border-white/10 print:hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$same$2d$runtime$2f$dist$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-6 h-16 flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$same$2d$runtime$2f$dist$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "flex items-center gap-3",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$same$2d$runtime$2f$dist$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                src: "https://ext.same-assets.com/549901695/2060650607.svg",
                                alt: "BALAW",
                                width: 80,
                                height: 28,
                                className: "h-7 w-auto"
                            }, void 0, false, {
                                fileName: "[project]/src/app/complaint/AI_result_page/page.tsx",
                                lineNumber: 147,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/complaint/AI_result_page/page.tsx",
                            lineNumber: 146,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$same$2d$runtime$2f$dist$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>router.push("/complaint/main_form"),
                            className: "text-sm text-white/50 hover:text-white transition-colors flex items-center gap-1.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$same$2d$runtime$2f$dist$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsxDEV"])("svg", {
                                    className: "w-4 h-4",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$same$2d$runtime$2f$dist$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M15 19l-7-7 7-7"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/complaint/AI_result_page/page.tsx",
                                        lineNumber: 161,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/complaint/AI_result_page/page.tsx",
                                    lineNumber: 160,
                                    columnNumber: 13
                                }, this),
                                L.back
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/complaint/AI_result_page/page.tsx",
                            lineNumber: 155,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/complaint/AI_result_page/page.tsx",
                    lineNumber: 145,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/complaint/AI_result_page/page.tsx",
                lineNumber: 144,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$same$2d$runtime$2f$dist$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsxDEV"])("div", {
                className: "pt-24 pb-20 px-6 max-w-4xl mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$same$2d$runtime$2f$dist$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsxDEV"])("div", {
                        className: "flex items-start justify-between mb-8 print:hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$same$2d$runtime$2f$dist$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$same$2d$runtime$2f$dist$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 mb-2",
                                        children: [
                                            loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$same$2d$runtime$2f$dist$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsxDEV"])("span", {
                                                className: "w-2 h-2 rounded-full bg-blue-400 animate-pulse inline-block"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/complaint/AI_result_page/page.tsx",
                                                lineNumber: 173,
                                                columnNumber: 17
                                            }, this) : error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$same$2d$runtime$2f$dist$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsxDEV"])("span", {
                                                className: "w-2 h-2 rounded-full bg-red-400 inline-block"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/complaint/AI_result_page/page.tsx",
                                                lineNumber: 175,
                                                columnNumber: 17
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$same$2d$runtime$2f$dist$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsxDEV"])("span", {
                                                className: "w-2 h-2 rounded-full bg-green-400 inline-block"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/complaint/AI_result_page/page.tsx",
                                                lineNumber: 177,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$same$2d$runtime$2f$dist$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsxDEV"])("p", {
                                                className: `text-xs font-semibold tracking-widest uppercase ${loading ? "text-blue-400" : error ? "text-red-400" : "text-green-400"}`,
                                                children: loading ? "AI 분석 및 작성 중..." : error ? "오류 발생" : "소장 작성 완료"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/complaint/AI_result_page/page.tsx",
                                                lineNumber: 179,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/complaint/AI_result_page/page.tsx",
                                        lineNumber: 171,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$same$2d$runtime$2f$dist$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsxDEV"])("h1", {
                                        className: "text-2xl md:text-3xl font-bold text-white",
                                        children: docTitle
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/complaint/AI_result_page/page.tsx",
                                        lineNumber: 185,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/complaint/AI_result_page/page.tsx",
                                lineNumber: 170,
                                columnNumber: 11
                            }, this),
                            !loading && !error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$same$2d$runtime$2f$dist$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 flex-shrink-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$same$2d$runtime$2f$dist$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsxDEV"])("button", {
                                        onClick: handleCopy,
                                        className: "flex items-center gap-1.5 px-3 py-2 bg-white/8 border border-white/15 rounded-lg text-white/70 hover:text-white text-xs font-medium transition-all",
                                        children: copied ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$same$2d$runtime$2f$dist$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsxDEV"])("span", {
                                            className: "text-green-400",
                                            children: "복사됨"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/complaint/AI_result_page/page.tsx",
                                            lineNumber: 191,
                                            columnNumber: 27
                                        }, this) : L.copy
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/complaint/AI_result_page/page.tsx",
                                        lineNumber: 190,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$same$2d$runtime$2f$dist$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsxDEV"])("button", {
                                        onClick: handleDownload,
                                        className: "flex items-center gap-1.5 px-3 py-2 bg-white/8 border border-white/15 rounded-lg text-white/70 hover:text-white text-xs font-medium transition-all",
                                        children: L.download
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/complaint/AI_result_page/page.tsx",
                                        lineNumber: 193,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$same$2d$runtime$2f$dist$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsxDEV"])("button", {
                                        onClick: handlePrint,
                                        className: "flex items-center gap-1.5 px-3 py-2 bg-blue-600 border border-blue-500 rounded-lg text-white text-xs font-medium transition-all hover:bg-blue-500",
                                        children: L.print
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/complaint/AI_result_page/page.tsx",
                                        lineNumber: 196,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/complaint/AI_result_page/page.tsx",
                                lineNumber: 189,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/complaint/AI_result_page/page.tsx",
                        lineNumber: 169,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$same$2d$runtime$2f$dist$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsxDEV"])("div", {
                        className: "bg-white/5 border border-white/10 rounded-2xl overflow-hidden",
                        children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$same$2d$runtime$2f$dist$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center justify-center py-24 gap-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$same$2d$runtime$2f$dist$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$same$2d$runtime$2f$dist$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsxDEV"])("div", {
                                            className: "w-12 h-12 border-2 border-blue-500/30 rounded-full"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/complaint/AI_result_page/page.tsx",
                                            lineNumber: 207,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$same$2d$runtime$2f$dist$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsxDEV"])("div", {
                                            className: "w-12 h-12 border-2 border-blue-500 border-t-transparent rounded-full animate-spin absolute inset-0"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/complaint/AI_result_page/page.tsx",
                                            lineNumber: 208,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/complaint/AI_result_page/page.tsx",
                                    lineNumber: 206,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$same$2d$runtime$2f$dist$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsxDEV"])("p", {
                                    className: "text-white/70 text-sm font-medium text-center",
                                    children: [
                                        "입력하신 ",
                                        LANG_NAMES[language],
                                        " 정보를 바탕으로",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$same$2d$runtime$2f$dist$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/src/app/complaint/AI_result_page/page.tsx",
                                            lineNumber: 211,
                                            columnNumber: 53
                                        }, this),
                                        "한국어 공식 소장을 생성하고 있습니다."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/complaint/AI_result_page/page.tsx",
                                    lineNumber: 210,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/complaint/AI_result_page/page.tsx",
                            lineNumber: 205,
                            columnNumber: 13
                        }, this) : error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$same$2d$runtime$2f$dist$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center justify-center py-24 gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$same$2d$runtime$2f$dist$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsxDEV"])("div", {
                                    className: "w-12 h-12 rounded-full bg-red-500/20 border border-red-500/40 flex items-center justify-center text-red-400 text-xl font-bold",
                                    children: "!"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/complaint/AI_result_page/page.tsx",
                                    lineNumber: 216,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$same$2d$runtime$2f$dist$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsxDEV"])("p", {
                                    className: "text-red-400 text-sm text-center max-w-sm leading-relaxed",
                                    children: error
                                }, void 0, false, {
                                    fileName: "[project]/src/app/complaint/AI_result_page/page.tsx",
                                    lineNumber: 217,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$same$2d$runtime$2f$dist$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsxDEV"])("button", {
                                    onClick: ()=>window.location.reload(),
                                    className: "px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-500",
                                    children: "다시 시도하기"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/complaint/AI_result_page/page.tsx",
                                    lineNumber: 218,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/complaint/AI_result_page/page.tsx",
                            lineNumber: 215,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$same$2d$runtime$2f$dist$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsxDEV"])("div", {
                            className: "p-8 md:p-12",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$same$2d$runtime$2f$dist$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsxDEV"])("div", {
                                className: "bg-white rounded-xl p-8 md:p-12 shadow-2xl print:shadow-none",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$same$2d$runtime$2f$dist$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsxDEV"])("pre", {
                                    className: "whitespace-pre-wrap font-serif text-gray-800 text-sm md:text-base leading-relaxed",
                                    children: result
                                }, void 0, false, {
                                    fileName: "[project]/src/app/complaint/AI_result_page/page.tsx",
                                    lineNumber: 228,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/complaint/AI_result_page/page.tsx",
                                lineNumber: 227,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/complaint/AI_result_page/page.tsx",
                            lineNumber: 226,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/complaint/AI_result_page/page.tsx",
                        lineNumber: 203,
                        columnNumber: 9
                    }, this),
                    !loading && !error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$same$2d$runtime$2f$dist$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsxDEV"])("div", {
                        className: "mt-6 p-4 bg-amber-500/10 border border-amber-500/20 rounded-xl print:hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$same$2d$runtime$2f$dist$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsxDEV"])("p", {
                            className: "text-amber-400/80 text-xs leading-relaxed",
                            children: "⚠️ 본 문서는 AI가 생성한 초안입니다. 실제 제출 전 법률 전문가의 검토를 권장합니다."
                        }, void 0, false, {
                            fileName: "[project]/src/app/complaint/AI_result_page/page.tsx",
                            lineNumber: 238,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/complaint/AI_result_page/page.tsx",
                        lineNumber: 237,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/complaint/AI_result_page/page.tsx",
                lineNumber: 168,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$same$2d$runtime$2f$dist$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsxDEV"])("style", {
                children: `
        @media print {
          body { background: white !important; }
          .print\\:hidden { display: none !important; }
        }
      `
            }, void 0, false, {
                fileName: "[project]/src/app/complaint/AI_result_page/page.tsx",
                lineNumber: 245,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/complaint/AI_result_page/page.tsx",
        lineNumber: 143,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_app_complaint_AI_result_page_page_tsx_2fa229a2._.js.map