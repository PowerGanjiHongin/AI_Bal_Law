import Image from "next/image";

const teamMembers = [
  {
    name: "오정국 변호사",
    role: "CEO\n/ FOUNDER",
    description: "혁신적인 비전과 법률성으로 새로운 법률 서비스를 개척합니다.",
    image: "https://ext.same-assets.com/549901695/1764146238.png",
  },
  {
    name: "안성호",
    role: "CEO\n/ FOUNDER",
    description:
      "데이터 설계와 UI/UX 전문성을 바탕으로 플랫폼 개발과 관리를 총괄합니다.",
    image: "https://ext.same-assets.com/549901695/661199860.jpeg",
  },
  {
    name: "신용섭 변호사",
    role: "EXECUTIVE DIRECTOR\n/ FOUNDER",
    description: "복잡한 법률 문제를 명쾌한 전략적 솔루션으로 해결합니다.",
    image: "https://ext.same-assets.com/549901695/4061282576.jpeg",
  },
  {
    name: "최영희 변호사",
    role: "EXECUTIVE DIRECTOR\n/ FOUNDER",
    description: "탁월한 법률 지식으로 기업의 안정적인 성장을 지원합니다.",
    image: "https://ext.same-assets.com/549901695/3734569036.jpeg",
  },
  {
    name: "윤 평 변호사",
    role: "EXECUTIVE DIRECTOR\n/ FOUNDER",
    description: "글로벌 기업 법무 및 국제 분쟁 해결 전문 변호사입니다.",
    image: "https://ext.same-assets.com/549901695/3460743058.jpeg",
  },
];

export default function TeamSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            최고의 전문가들이 함께 합니다
          </h2>
          <p className="text-gray-600">
            기술과 법률 각 분야의 전문가들이 모여 더 나은 세상을 만듭니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group flex flex-col"
            >
              <div className="aspect-[3/4] overflow-hidden relative">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6 text-center flex-1 flex flex-col items-center">
                <span className="text-electric-600 text-xs font-bold tracking-wider uppercase mb-2 whitespace-pre-wrap">
                  {member.role}
                </span>
                <h3 className="text-lg font-bold text-navy-900 mb-3">
                  {member.name}
                </h3>
                <div className="w-8 h-0.5 bg-gray-200 mb-3" />
                <p className="text-gray-500 text-xs leading-relaxed break-keep">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
