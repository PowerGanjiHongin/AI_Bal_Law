module.exports = [
"[project]/src/app/complaint/AI_loding/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LoadingPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$same$2d$runtime$2f$dist$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/same-runtime/dist/jsx-dev-runtime.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const STEPS = [
    {
        id: 1,
        label: "AI 1단계 분석",
        sublabel: "사건 정보를 법률 요소로 분류 중...",
        detail: "당사자 정보, 청구 원인, 법적 근거 파악"
    },
    {
        id: 2,
        label: "AI 2단계 작성",
        sublabel: "소장 형식에 맞게 문서 생성 중...",
        detail: "법원 제출용 소장 초안 자동 완성"
    }
];
function LoadingPage() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const [currentStep, setCurrentStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [done, setDone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Step 1: 0~50%
        const step1 = setTimeout(()=>setCurrentStep(1), 400);
        let p = 0;
        const interval = setInterval(()=>{
            p += 1;
            setProgress(p);
            if (p === 50) setCurrentStep(2);
            if (p >= 100) {
                clearInterval(interval);
                setDone(true);
                setTimeout(()=>{
                    router.push(`/complaint/AI_result_page?${searchParams.toString()}`);
                }, 600);
            }
        }, 40);
        return ()=>{
            clearTimeout(step1);
            clearInterval(interval);
        };
    }, [
        router,
        searchParams
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$same$2d$runtime$2f$dist$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsxDEV"])("div", {
        className: "min-h-screen bg-[#0a0f1e] flex flex-col items-center justify-center px-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$same$2d$runtime$2f$dist$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsxDEV"])("div", {
            className: "w-full max-w-md",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$same$2d$runtime$2f$dist$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsxDEV"])("div", {
                    className: "flex justify-center mb-12",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$same$2d$runtime$2f$dist$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        src: "https://ext.same-assets.com/549901695/2060650607.svg",
                        alt: "BALAW",
                        width: 90,
                        height: 32,
                        className: "h-8 w-auto opacity-80"
                    }, void 0, false, {
                        fileName: "[project]/src/app/complaint/AI_loding/page.tsx",
                        lineNumber: 60,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/complaint/AI_loding/page.tsx",
                    lineNumber: 59,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$same$2d$runtime$2f$dist$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsxDEV"])("div", {
                    className: "space-y-4 mb-10",
                    children: STEPS.map((step, i)=>{
                        const stepNum = i + 1;
                        const isActive = currentStep === stepNum;
                        const isDone = currentStep > stepNum || done;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$same$2d$runtime$2f$dist$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsxDEV"])("div", {
                            className: `border rounded-xl p-5 transition-all duration-500 ${isDone ? "border-blue-500/40 bg-blue-600/10" : isActive ? "border-blue-500/60 bg-blue-600/15 shadow-lg shadow-blue-500/10" : "border-white/8 bg-white/3 opacity-40"}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$same$2d$runtime$2f$dist$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$same$2d$runtime$2f$dist$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsxDEV"])("div", {
                                        className: `w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-500 ${isDone ? "bg-blue-600 text-white" : isActive ? "bg-blue-600/30 border-2 border-blue-500 text-blue-400" : "bg-white/5 border border-white/15 text-white/30"}`,
                                        children: isDone ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$same$2d$runtime$2f$dist$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsxDEV"])("svg", {
                                            className: "w-5 h-5",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            stroke: "currentColor",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$same$2d$runtime$2f$dist$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2.5,
                                                d: "M5 13l4 4L19 7"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/complaint/AI_loding/page.tsx",
                                                lineNumber: 99,
                                                columnNumber: 25
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/complaint/AI_loding/page.tsx",
                                            lineNumber: 98,
                                            columnNumber: 23
                                        }, this) : isActive ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$same$2d$runtime$2f$dist$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsxDEV"])("div", {
                                            className: "w-4 h-4 border-2 border-blue-400 border-t-transparent rounded-full animate-spin"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/complaint/AI_loding/page.tsx",
                                            lineNumber: 102,
                                            columnNumber: 23
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$same$2d$runtime$2f$dist$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsxDEV"])("span", {
                                            className: "text-sm font-bold",
                                            children: stepNum
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/complaint/AI_loding/page.tsx",
                                            lineNumber: 104,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/complaint/AI_loding/page.tsx",
                                        lineNumber: 88,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$same$2d$runtime$2f$dist$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$same$2d$runtime$2f$dist$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsxDEV"])("p", {
                                                className: `font-bold text-sm ${isDone || isActive ? "text-white" : "text-white/30"}`,
                                                children: step.label
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/complaint/AI_loding/page.tsx",
                                                lineNumber: 108,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$same$2d$runtime$2f$dist$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsxDEV"])("p", {
                                                className: `text-xs mt-0.5 ${isDone ? "text-blue-400" : isActive ? "text-white/60" : "text-white/20"}`,
                                                children: isDone ? "완료" : step.sublabel
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/complaint/AI_loding/page.tsx",
                                                lineNumber: 111,
                                                columnNumber: 21
                                            }, this),
                                            isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$same$2d$runtime$2f$dist$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsxDEV"])("p", {
                                                className: "text-xs text-blue-400/70 mt-1",
                                                children: step.detail
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/complaint/AI_loding/page.tsx",
                                                lineNumber: 115,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/complaint/AI_loding/page.tsx",
                                        lineNumber: 107,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/complaint/AI_loding/page.tsx",
                                lineNumber: 87,
                                columnNumber: 17
                            }, this)
                        }, step.id, false, {
                            fileName: "[project]/src/app/complaint/AI_loding/page.tsx",
                            lineNumber: 77,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/src/app/complaint/AI_loding/page.tsx",
                    lineNumber: 70,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$same$2d$runtime$2f$dist$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsxDEV"])("div", {
                    className: "mb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$same$2d$runtime$2f$dist$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsxDEV"])("div", {
                            className: "flex justify-between text-xs text-white/40 mb-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$same$2d$runtime$2f$dist$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsxDEV"])("span", {
                                    children: "처리 중..."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/complaint/AI_loding/page.tsx",
                                    lineNumber: 127,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$same$2d$runtime$2f$dist$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsxDEV"])("span", {
                                    children: [
                                        progress,
                                        "%"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/complaint/AI_loding/page.tsx",
                                    lineNumber: 128,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/complaint/AI_loding/page.tsx",
                            lineNumber: 126,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$same$2d$runtime$2f$dist$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsxDEV"])("div", {
                            className: "h-1.5 bg-white/10 rounded-full overflow-hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$same$2d$runtime$2f$dist$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsxDEV"])("div", {
                                className: "h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full transition-all duration-100",
                                style: {
                                    width: `${progress}%`
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/app/complaint/AI_loding/page.tsx",
                                lineNumber: 131,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/complaint/AI_loding/page.tsx",
                            lineNumber: 130,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/complaint/AI_loding/page.tsx",
                    lineNumber: 125,
                    columnNumber: 9
                }, this),
                done && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$same$2d$runtime$2f$dist$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsxDEV"])("p", {
                    className: "text-center text-blue-400 text-sm font-medium animate-pulse",
                    children: "소장 작성 완료! 결과 페이지로 이동 중..."
                }, void 0, false, {
                    fileName: "[project]/src/app/complaint/AI_loding/page.tsx",
                    lineNumber: 139,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/complaint/AI_loding/page.tsx",
            lineNumber: 57,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/complaint/AI_loding/page.tsx",
        lineNumber: 56,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_app_complaint_AI_loding_page_tsx_d45f4c68._.js.map