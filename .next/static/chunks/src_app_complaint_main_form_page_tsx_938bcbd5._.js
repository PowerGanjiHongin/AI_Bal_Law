(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/complaint/main_form/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ComplaintPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$same$2d$runtime$2f$dist$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/same-runtime/dist/jsx-dev-runtime.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const LANGUAGES = [
    {
        code: "ko",
        label: "한국어",
        flag: "🇰🇷"
    },
    {
        code: "ru",
        label: "Русский",
        flag: "🇷🇺"
    },
    {
        code: "kz",
        label: "Қазақша",
        flag: "🇰🇿"
    },
    {
        code: "zh",
        label: "中文",
        flag: "🇨🇳"
    },
    {
        code: "en",
        label: "English",
        flag: "🇺🇸"
    }
];
const PLACEHOLDERS = {
    ko: {
        who: "예) 원고 홍길동 (만 35세, 서울 거주)",
        whom: "예) 피고 김철수 (회사 대표)",
        when: "예) 2024년 3월 15일 오후 2시경",
        where: "예) 서울시 강남구 테헤란로 123 사무실 내",
        what: "예) 임금 체불, 계약 불이행 등",
        how: "예) 구두 약속 후 서면 계약 체결, 이후 일방적 계약 파기",
        why: "예) 피고가 원고의 정당한 임금 지급 요구를 거부하였음"
    },
    ru: {
        who: "Напр. Истец Иван Иванов (35 лет, Сеул)",
        whom: "Напр. Ответчик Ким Чхольсу (директор компании)",
        when: "Напр. 15 марта 2024 года, около 14:00",
        where: "Напр. Офис по адресу: Сеул, Каннам-гу",
        what: "Напр. Невыплата заработной платы",
        how: "Напр. После устного соглашения был заключён письменный договор",
        why: "Напр. Ответчик отказался выплачивать законную зарплату"
    },
    kz: {
        who: "Мыс. Талапкер Иван Иванов (35 жас, Сеул)",
        whom: "Мыс. Жауапкер Ким Чхольсу (компания директоры)",
        when: "Мыс. 2024 жылы 15 наурызда, сағат 14:00 шамасында",
        where: "Мыс. Сеул қаласы, Каннам-гу кеңсесі",
        what: "Мыс. Жалақыны төлемеу",
        how: "Мыс. Ауызша келісімнен кейін жазбаша шарт жасалды",
        why: "Мыс. Жауапкер заңды жалақыны төлеуден бас тартты"
    },
    zh: {
        who: "例：原告洪吉童（35岁，首尔居民）",
        whom: "例：被告金哲洙（公司代表）",
        when: "例：2024年3月15日下午2时左右",
        where: "例：首尔市江南区办公室内",
        what: "例：拖欠工资、违反合同等",
        how: "例：口头承诺后签订书面合同，之后单方面违约",
        why: "例：被告拒绝支付原告的合法工资"
    },
    en: {
        who: "e.g. Plaintiff Hong Gil-dong (age 35, Seoul resident)",
        whom: "e.g. Defendant Kim Chul-soo (Company CEO)",
        when: "e.g. March 15, 2024, around 2:00 PM",
        where: "e.g. Office at 123 Teheran-ro, Gangnam-gu, Seoul",
        what: "e.g. Unpaid wages, breach of contract",
        how: "e.g. Verbal agreement followed by written contract, then unilateral termination",
        why: "e.g. Defendant refused to pay plaintiff's lawful wages"
    }
};
const LABELS = {
    ko: {
        caseType: "사건 유형",
        civil: "민사",
        criminal: "형사",
        language: "언어 선택",
        who: "누가 (원고/피해자)",
        whom: "누구에게 (피고/가해자)",
        when: "언제",
        where: "어디서",
        what: "무엇을",
        how: "어떻게",
        why: "왜",
        submit: "소장 작성 시작",
        subtitle: "사건 정보를 입력하면 AI가 소장을 자동으로 작성해드립니다.",
        required: "필수 입력 항목입니다."
    },
    ru: {
        caseType: "Тип дела",
        civil: "Гражданское",
        criminal: "Уголовное",
        language: "Язык",
        who: "Кто (Истец/Потерпевший)",
        whom: "Кому (Ответчик/Обвиняемый)",
        when: "Когда",
        where: "Где",
        what: "Что",
        how: "Как",
        why: "Почему",
        submit: "Создать исковое заявление",
        subtitle: "Введите данные дела, и ИИ автоматически составит исковое заявление.",
        required: "Это поле обязательно."
    },
    kz: {
        caseType: "Іс түрі",
        civil: "Азаматтық",
        criminal: "Қылмыстық",
        language: "Тіл",
        who: "Кім (Талапкер/Зардап шеккен)",
        whom: "Кімге (Жауапкер/Айыпталушы)",
        when: "Қашан",
        where: "Қайда",
        what: "Не",
        how: "Қалай",
        why: "Неліктен",
        submit: "Арыз жасауды бастау",
        subtitle: "Іс деректерін енгізіңіз, ЖИ арызды автоматты түрде жасайды.",
        required: "Бұл өріс міндетті."
    },
    zh: {
        caseType: "案件类型",
        civil: "民事",
        criminal: "刑事",
        language: "语言",
        who: "谁（原告/受害人）",
        whom: "对谁（被告/加害人）",
        when: "何时",
        where: "何地",
        what: "何事",
        how: "如何",
        why: "为何",
        submit: "开始起草诉状",
        subtitle: "输入案件信息，AI将自动起草诉状。",
        required: "此项为必填项。"
    },
    en: {
        caseType: "Case Type",
        civil: "Civil",
        criminal: "Criminal",
        language: "Language",
        who: "Who (Plaintiff/Victim)",
        whom: "Whom (Defendant/Perpetrator)",
        when: "When",
        where: "Where",
        what: "What",
        how: "How",
        why: "Why",
        submit: "Generate Complaint",
        subtitle: "Enter case details and AI will automatically draft your legal complaint.",
        required: "This field is required."
    }
};
function ComplaintPage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [caseType, setCaseType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("civil");
    const [language, setLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("ko");
    const [langOpen, setLangOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        who: "",
        whom: "",
        when: "",
        where: "",
        what: "",
        how: "",
        why: ""
    });
    const L = LABELS[language];
    const P = PLACEHOLDERS[language];
    const selectedLang = LANGUAGES.find((l)=>l.code === language);
    const handleChange = (key, value)=>{
        setForm((prev)=>({
                ...prev,
                [key]: value
            }));
        if (errors[key]) setErrors((prev)=>({
                ...prev,
                [key]: false
            }));
    };
    const handleSubmit = ()=>{
        const newErrors = {};
        [
            "who",
            "whom",
            "when",
            "where",
            "what",
            "how",
            "why"
        ].forEach((key)=>{
            if (!form[key].trim()) newErrors[key] = true;
        });
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
        const params = new URLSearchParams({
            caseType,
            language,
            ...form
        });
        router.push("/complaint/AI_loding?".concat(params.toString()));
    };
    const fields = [
        {
            key: "who",
            label: L.who
        },
        {
            key: "whom",
            label: L.whom
        },
        {
            key: "when",
            label: L.when
        },
        {
            key: "where",
            label: L.where
        },
        {
            key: "what",
            label: L.what
        },
        {
            key: "how",
            label: L.how
        },
        {
            key: "why",
            label: L.why
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$same$2d$runtime$2f$dist$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsxDEV"])("div", {
        className: "min-h-screen bg-[#0a0f1e]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$same$2d$runtime$2f$dist$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsxDEV"])("nav", {
                className: "fixed top-0 w-full z-50 bg-[#0a0f1e]/90 backdrop-blur-sm border-b border-white/10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$same$2d$runtime$2f$dist$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-6 h-16 flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$same$2d$runtime$2f$dist$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "flex items-center gap-3",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$same$2d$runtime$2f$dist$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "https://ext.same-assets.com/549901695/2060650607.svg",
                                alt: "BALAW",
                                width: 80,
                                height: 28,
                                className: "h-7 w-auto"
                            }, void 0, false, {
                                fileName: "[project]/src/app/complaint/main_form/page.tsx",
                                lineNumber: 199,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/complaint/main_form/page.tsx",
                            lineNumber: 198,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$same$2d$runtime$2f$dist$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 text-sm text-white/50",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$same$2d$runtime$2f$dist$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsxDEV"])("span", {
                                    className: "w-2 h-2 rounded-full bg-electric-500 bg-blue-500 animate-pulse inline-block"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/complaint/main_form/page.tsx",
                                    lineNumber: 208,
                                    columnNumber: 13
                                }, this),
                                "AI 소장 자동 작성"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/complaint/main_form/page.tsx",
                            lineNumber: 207,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/complaint/main_form/page.tsx",
                    lineNumber: 197,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/complaint/main_form/page.tsx",
                lineNumber: 196,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$same$2d$runtime$2f$dist$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsxDEV"])("div", {
                className: "pt-24 pb-20 px-6 max-w-3xl mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$same$2d$runtime$2f$dist$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsxDEV"])("div", {
                        className: "mb-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$same$2d$runtime$2f$dist$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsxDEV"])("p", {
                                className: "text-blue-400 text-xs font-semibold tracking-widest uppercase mb-3",
                                children: "BALAW · AI Legal Document"
                            }, void 0, false, {
                                fileName: "[project]/src/app/complaint/main_form/page.tsx",
                                lineNumber: 217,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$same$2d$runtime$2f$dist$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsxDEV"])("h1", {
                                className: "text-3xl md:text-4xl font-bold text-white mb-3",
                                children: "소장 자동 작성"
                            }, void 0, false, {
                                fileName: "[project]/src/app/complaint/main_form/page.tsx",
                                lineNumber: 220,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$same$2d$runtime$2f$dist$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsxDEV"])("p", {
                                className: "text-white/50 text-sm leading-relaxed",
                                children: L.subtitle
                            }, void 0, false, {
                                fileName: "[project]/src/app/complaint/main_form/page.tsx",
                                lineNumber: 223,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/complaint/main_form/page.tsx",
                        lineNumber: 216,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$same$2d$runtime$2f$dist$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsxDEV"])("div", {
                        className: "space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$same$2d$runtime$2f$dist$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$same$2d$runtime$2f$dist$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsxDEV"])("div", {
                                        className: "bg-white/5 border border-white/10 rounded-xl p-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$same$2d$runtime$2f$dist$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsxDEV"])("p", {
                                                className: "text-white/60 text-xs font-semibold uppercase tracking-widest mb-4",
                                                children: L.caseType
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/complaint/main_form/page.tsx",
                                                lineNumber: 231,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$same$2d$runtime$2f$dist$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsxDEV"])("div", {
                                                className: "flex gap-3",
                                                children: [
                                                    "civil",
                                                    "criminal"
                                                ].map((type)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$same$2d$runtime$2f$dist$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>setCaseType(type),
                                                        className: "flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all border ".concat(caseType === type ? "bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-500/20" : "bg-transparent border-white/15 text-white/50 hover:border-white/30 hover:text-white/80"),
                                                        children: type === "civil" ? L.civil : L.criminal
                                                    }, type, false, {
                                                        fileName: "[project]/src/app/complaint/main_form/page.tsx",
                                                        lineNumber: 236,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/complaint/main_form/page.tsx",
                                                lineNumber: 234,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/complaint/main_form/page.tsx",
                                        lineNumber: 230,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$same$2d$runtime$2f$dist$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsxDEV"])("div", {
                                        className: "bg-white/5 border border-white/10 rounded-xl p-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$same$2d$runtime$2f$dist$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsxDEV"])("p", {
                                                className: "text-white/60 text-xs font-semibold uppercase tracking-widest mb-4",
                                                children: L.language
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/complaint/main_form/page.tsx",
                                                lineNumber: 254,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$same$2d$runtime$2f$dist$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsxDEV"])("div", {
                                                className: "relative",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$same$2d$runtime$2f$dist$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>setLangOpen(!langOpen),
                                                        className: "w-full flex items-center justify-between px-4 py-2.5 bg-white/8 border border-white/15 rounded-lg text-white text-sm font-medium hover:border-white/30 transition-all",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$same$2d$runtime$2f$dist$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsxDEV"])("span", {
                                                                className: "flex items-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$same$2d$runtime$2f$dist$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsxDEV"])("span", {
                                                                        children: selectedLang.flag
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/complaint/main_form/page.tsx",
                                                                        lineNumber: 264,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$same$2d$runtime$2f$dist$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsxDEV"])("span", {
                                                                        children: selectedLang.label
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/complaint/main_form/page.tsx",
                                                                        lineNumber: 265,
                                                                        columnNumber: 21
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/complaint/main_form/page.tsx",
                                                                lineNumber: 263,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$same$2d$runtime$2f$dist$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsxDEV"])("svg", {
                                                                className: "w-4 h-4 text-white/40 transition-transform ".concat(langOpen ? "rotate-180" : ""),
                                                                fill: "none",
                                                                viewBox: "0 0 24 24",
                                                                stroke: "currentColor",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$same$2d$runtime$2f$dist$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsxDEV"])("path", {
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round",
                                                                    strokeWidth: 2,
                                                                    d: "M19 9l-7 7-7-7"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/complaint/main_form/page.tsx",
                                                                    lineNumber: 271,
                                                                    columnNumber: 21
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/complaint/main_form/page.tsx",
                                                                lineNumber: 267,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/complaint/main_form/page.tsx",
                                                        lineNumber: 258,
                                                        columnNumber: 17
                                                    }, this),
                                                    langOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$same$2d$runtime$2f$dist$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsxDEV"])("div", {
                                                        className: "absolute top-full left-0 right-0 mt-2 bg-[#0d1528] border border-white/15 rounded-xl overflow-hidden shadow-2xl z-20",
                                                        children: LANGUAGES.map((lang)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$same$2d$runtime$2f$dist$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>{
                                                                    setLanguage(lang.code);
                                                                    setLangOpen(false);
                                                                },
                                                                className: "w-full flex items-center gap-3 px-4 py-3 text-sm transition-colors ".concat(language === lang.code ? "bg-blue-600/20 text-white" : "text-white/60 hover:bg-white/5 hover:text-white"),
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$same$2d$runtime$2f$dist$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsxDEV"])("span", {
                                                                        className: "text-base",
                                                                        children: lang.flag
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/complaint/main_form/page.tsx",
                                                                        lineNumber: 288,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$same$2d$runtime$2f$dist$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsxDEV"])("span", {
                                                                        className: "font-medium",
                                                                        children: lang.label
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/complaint/main_form/page.tsx",
                                                                        lineNumber: 289,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    language === lang.code && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$same$2d$runtime$2f$dist$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsxDEV"])("span", {
                                                                        className: "ml-auto text-blue-400",
                                                                        children: "✓"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/complaint/main_form/page.tsx",
                                                                        lineNumber: 291,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, lang.code, true, {
                                                                fileName: "[project]/src/app/complaint/main_form/page.tsx",
                                                                lineNumber: 278,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/complaint/main_form/page.tsx",
                                                        lineNumber: 276,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/complaint/main_form/page.tsx",
                                                lineNumber: 257,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/complaint/main_form/page.tsx",
                                        lineNumber: 253,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/complaint/main_form/page.tsx",
                                lineNumber: 228,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$same$2d$runtime$2f$dist$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsxDEV"])("div", {
                                className: "bg-white/5 border border-white/10 rounded-xl p-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$same$2d$runtime$2f$dist$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsxDEV"])("p", {
                                        className: "text-white/60 text-xs font-semibold uppercase tracking-widest mb-6",
                                        children: "사건 개요 (6W1H)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/complaint/main_form/page.tsx",
                                        lineNumber: 303,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$same$2d$runtime$2f$dist$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsxDEV"])("div", {
                                        className: "space-y-5",
                                        children: fields.map((param, i)=>{
                                            let { key, label } = param;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$same$2d$runtime$2f$dist$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$same$2d$runtime$2f$dist$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2 mb-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$same$2d$runtime$2f$dist$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsxDEV"])("span", {
                                                                className: "w-6 h-6 rounded-md bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 text-xs font-bold flex-shrink-0",
                                                                children: i + 1
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/complaint/main_form/page.tsx",
                                                                lineNumber: 310,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$same$2d$runtime$2f$dist$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsxDEV"])("label", {
                                                                className: "text-white/80 text-sm font-medium",
                                                                children: label
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/complaint/main_form/page.tsx",
                                                                lineNumber: 313,
                                                                columnNumber: 21
                                                            }, this),
                                                            errors[key] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$same$2d$runtime$2f$dist$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsxDEV"])("span", {
                                                                className: "text-red-400 text-xs ml-auto",
                                                                children: L.required
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/complaint/main_form/page.tsx",
                                                                lineNumber: 315,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/complaint/main_form/page.tsx",
                                                        lineNumber: 309,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$same$2d$runtime$2f$dist$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsxDEV"])("textarea", {
                                                        value: form[key],
                                                        onChange: (e)=>handleChange(key, e.target.value),
                                                        placeholder: P[key],
                                                        rows: key === "how" || key === "why" ? 3 : 2,
                                                        className: "w-full bg-white/5 border rounded-lg px-4 py-3 text-white text-sm placeholder-white/25 resize-none focus:outline-none focus:ring-1 transition-all ".concat(errors[key] ? "border-red-500/60 focus:ring-red-500/40" : "border-white/10 focus:border-blue-500/60 focus:ring-blue-500/20")
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/complaint/main_form/page.tsx",
                                                        lineNumber: 318,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, key, true, {
                                                fileName: "[project]/src/app/complaint/main_form/page.tsx",
                                                lineNumber: 308,
                                                columnNumber: 17
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/complaint/main_form/page.tsx",
                                        lineNumber: 306,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/complaint/main_form/page.tsx",
                                lineNumber: 302,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$same$2d$runtime$2f$dist$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: handleSubmit,
                                className: "w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold text-base rounded-xl transition-all hover:shadow-lg hover:shadow-blue-500/25 active:scale-[0.99] flex items-center justify-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$same$2d$runtime$2f$dist$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsxDEV"])("svg", {
                                        className: "w-5 h-5",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$same$2d$runtime$2f$dist$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/complaint/main_form/page.tsx",
                                            lineNumber: 341,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/complaint/main_form/page.tsx",
                                        lineNumber: 340,
                                        columnNumber: 13
                                    }, this),
                                    L.submit
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/complaint/main_form/page.tsx",
                                lineNumber: 335,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/complaint/main_form/page.tsx",
                        lineNumber: 226,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/complaint/main_form/page.tsx",
                lineNumber: 214,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/complaint/main_form/page.tsx",
        lineNumber: 194,
        columnNumber: 5
    }, this);
}
_s(ComplaintPage, "DO55/hv/9P7vM2PK2qnIgYwGjdE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = ComplaintPage;
var _c;
__turbopack_context__.k.register(_c, "ComplaintPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_complaint_main_form_page_tsx_938bcbd5._.js.map