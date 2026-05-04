"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const LANGUAGES = [
  { code: "ko", label: "한국어", flag: "🇰🇷" },
  { code: "ru", label: "Русский", flag: "🇷🇺" },
  { code: "kz", label: "Қазақша", flag: "🇰🇿" },
  { code: "zh", label: "中文", flag: "🇨🇳" },
  { code: "en", label: "English", flag: "🇺🇸" },
];

const PLACEHOLDERS: Record<string, Record<string, string>> = {
  ko: {
    who: "예) 원고 홍길동 (만 35세, 서울 거주)",
    whom: "예) 피고 김철수 (회사 대표)",
    when: "예) 2024년 3월 15일 오후 2시경",
    where: "예) 서울시 강남구 테헤란로 123 사무실 내",
    what: "예) 임금 체불, 계약 불이행 등",
    how: "예) 구두 약속 후 서면 계약 체결, 이후 일방적 계약 파기",
    why: "예) 피고가 원고의 정당한 임금 지급 요구를 거부하였음",
  },
  ru: {
    who: "Напр. Истец Иван Иванов (35 лет, Сеул)",
    whom: "Напр. Ответчик Ким Чхольсу (директор компании)",
    when: "Напр. 15 марта 2024 года, около 14:00",
    where: "Напр. Офис по адресу: Сеул, Каннам-гу",
    what: "Напр. Невыплата заработной платы",
    how: "Напр. После устного соглашения был заключён письменный договор",
    why: "Напр. Ответчик отказался выплачивать законную зарплату",
  },
  kz: {
    who: "Мыс. Талапкер Иван Иванов (35 жас, Сеул)",
    whom: "Мыс. Жауапкер Ким Чхольсу (компания директоры)",
    when: "Мыс. 2024 жылы 15 наурызда, сағат 14:00 шамасында",
    where: "Мыс. Сеул қаласы, Каннам-гу кеңсесі",
    what: "Мыс. Жалақыны төлемеу",
    how: "Мыс. Ауызша келісімнен кейін жазбаша шарт жасалды",
    why: "Мыс. Жауапкер заңды жалақыны төлеуден бас тартты",
  },
  zh: {
    who: "例：原告洪吉童（35岁，首尔居民）",
    whom: "例：被告金哲洙（公司代表）",
    when: "例：2024年3月15日下午2时左右",
    where: "例：首尔市江南区办公室内",
    what: "例：拖欠工资、违反合同等",
    how: "例：口头承诺后签订书面合同，之后单方面违约",
    why: "例：被告拒绝支付原告的合法工资",
  },
  en: {
    who: "e.g. Plaintiff Hong Gil-dong (age 35, Seoul resident)",
    whom: "e.g. Defendant Kim Chul-soo (Company CEO)",
    when: "e.g. March 15, 2024, around 2:00 PM",
    where: "e.g. Office at 123 Teheran-ro, Gangnam-gu, Seoul",
    what: "e.g. Unpaid wages, breach of contract",
    how: "e.g. Verbal agreement followed by written contract, then unilateral termination",
    why: "e.g. Defendant refused to pay plaintiff's lawful wages",
  },
};

const LABELS: Record<string, Record<string, string>> = {
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
    required: "필수 입력 항목입니다.",
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
    required: "Это поле обязательно.",
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
    required: "Бұл өріс міндетті.",
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
    required: "此项为必填项。",
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
    required: "This field is required.",
  },
};

export default function ComplaintPage() {
  const router = useRouter();
  const [caseType, setCaseType] = useState<"civil" | "criminal">("civil");
  const [language, setLanguage] = useState("ko");
  const [langOpen, setLangOpen] = useState(false);
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [form, setForm] = useState({
    who: "", whom: "", when: "", where: "", what: "", how: "", why: "",
  });

  const L = LABELS[language];
  const P = PLACEHOLDERS[language];
  const selectedLang = LANGUAGES.find((l) => l.code === language)!;

  const handleChange = (key: string, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: false }));
  };

  const handleSubmit = () => {
    const newErrors: Record<string, boolean> = {};
    (["who", "whom", "when", "where", "what", "how", "why"] as const).forEach((key) => {
      if (!form[key].trim()) newErrors[key] = true;
    });
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    const params = new URLSearchParams({
      caseType,
      language,
      ...form,
    });
    router.push(`/complaint/AI_loding?${params.toString()}`);
  };

  const fields: { key: keyof typeof form; label: string }[] = [
    { key: "who", label: L.who },
    { key: "whom", label: L.whom },
    { key: "when", label: L.when },
    { key: "where", label: L.where },
    { key: "what", label: L.what },
    { key: "how", label: L.how },
    { key: "why", label: L.why },
  ];

  return (
    <div className="min-h-screen bg-[#0a0f1e]">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-[#0a0f1e]/90 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="https://ext.same-assets.com/549901695/2060650607.svg"
              alt="BALAW"
              width={80}
              height={28}
              className="h-7 w-auto"
            />
          </Link>
          <div className="flex items-center gap-2 text-sm text-white/50">
            <span className="w-2 h-2 rounded-full bg-electric-500 bg-blue-500 animate-pulse inline-block" />
            AI 소장 자동 작성
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-20 px-6 max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <p className="text-blue-400 text-xs font-semibold tracking-widest uppercase mb-3">
            BALAW · AI Legal Document
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
            소장 자동 작성
          </h1>
          <p className="text-white/50 text-sm leading-relaxed">{L.subtitle}</p>
        </div>

        <div className="space-y-6">
          {/* Row: Case Type + Language */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Case Type */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-5">
              <p className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-4">
                {L.caseType}
              </p>
              <div className="flex gap-3">
                {(["civil", "criminal"] as const).map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setCaseType(type)}
                    className={`flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all border ${
                      caseType === type
                        ? "bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-500/20"
                        : "bg-transparent border-white/15 text-white/50 hover:border-white/30 hover:text-white/80"
                    }`}
                  >
                    {type === "civil" ? L.civil : L.criminal}
                  </button>
                ))}
              </div>
            </div>

            {/* Language Dropdown */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-5">
              <p className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-4">
                {L.language}
              </p>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setLangOpen(!langOpen)}
                  className="w-full flex items-center justify-between px-4 py-2.5 bg-white/8 border border-white/15 rounded-lg text-white text-sm font-medium hover:border-white/30 transition-all"
                >
                  <span className="flex items-center gap-2">
                    <span>{selectedLang.flag}</span>
                    <span>{selectedLang.label}</span>
                  </span>
                  <svg
                    className={`w-4 h-4 text-white/40 transition-transform ${langOpen ? "rotate-180" : ""}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {langOpen && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-[#0d1528] border border-white/15 rounded-xl overflow-hidden shadow-2xl z-20">
                    {LANGUAGES.map((lang) => (
                      <button
                        key={lang.code}
                        type="button"
                        onClick={() => { setLanguage(lang.code); setLangOpen(false); }}
                        className={`w-full flex items-center gap-3 px-4 py-3 text-sm transition-colors ${
                          language === lang.code
                            ? "bg-blue-600/20 text-white"
                            : "text-white/60 hover:bg-white/5 hover:text-white"
                        }`}
                      >
                        <span className="text-base">{lang.flag}</span>
                        <span className="font-medium">{lang.label}</span>
                        {language === lang.code && (
                          <span className="ml-auto text-blue-400">✓</span>
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* 6W1H Form */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <p className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-6">
              사건 개요 (6W1H)
            </p>
            <div className="space-y-5">
              {fields.map(({ key, label }, i) => (
                <div key={key}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-6 h-6 rounded-md bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 text-xs font-bold flex-shrink-0">
                      {i + 1}
                    </span>
                    <label className="text-white/80 text-sm font-medium">{label}</label>
                    {errors[key] && (
                      <span className="text-red-400 text-xs ml-auto">{L.required}</span>
                    )}
                  </div>
                  <textarea
                    value={form[key]}
                    onChange={(e) => handleChange(key, e.target.value)}
                    placeholder={P[key]}
                    rows={key === "how" || key === "why" ? 3 : 2}
                    className={`w-full bg-white/5 border rounded-lg px-4 py-3 text-white text-sm placeholder-white/25 resize-none focus:outline-none focus:ring-1 transition-all ${
                      errors[key]
                        ? "border-red-500/60 focus:ring-red-500/40"
                        : "border-white/10 focus:border-blue-500/60 focus:ring-blue-500/20"
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Submit */}
          <button
            type="button"
            onClick={handleSubmit}
            className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold text-base rounded-xl transition-all hover:shadow-lg hover:shadow-blue-500/25 active:scale-[0.99] flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            {L.submit}
          </button>
        </div>
      </div>
    </div>
  );
}