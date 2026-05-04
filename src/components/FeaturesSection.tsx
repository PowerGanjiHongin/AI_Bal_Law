import Image from "next/image";

const features = [
  {
    icon: "https://ext.same-assets.com/549901695/607800867.svg",
    title: "상호 연결된 데이터",
    description:
      "상호 연결된 데이터 최적화 기술로, 복잡한 법률 데이터를 체계적으로 관리하고 분석합니다.",
  },
  {
    icon: "https://ext.same-assets.com/549901695/2498746434.svg",
    title: "디지털 저울",
    description:
      "디지털 기술로 도움이 있는 법률 현실을 실시간 통찰력으로 법률 생태계를 혁신합니다.",
  },
  {
    icon: "https://ext.same-assets.com/549901695/4058276414.svg",
    title: "철통 보안",
    description:
      "첨단 보안 기술로 의뢰인의 정보를 철저하게 보호하며 안전한 법률 서비스를 제공합니다.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-16 bg-white -mt-4">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-electric-50 text-electric-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={40}
                    height={40}
                    className="w-10 h-10"
                  />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
