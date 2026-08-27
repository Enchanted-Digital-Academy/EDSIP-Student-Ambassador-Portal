import { ArrowRight, Star, Users, Globe } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-white flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-brand-orange/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-50 rounded-full blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(#F97316 1px, transparent 1px), linear-gradient(90deg, #F97316 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-brand-orange/10 border border-brand-orange/20 rounded-full px-4 py-2 mb-8">
              <Star size={12} className="text-brand-orange fill-brand-orange" />
              <span className="text-brand-orange text-xs font-semibold tracking-wide uppercase">
                Student Ambassador Programme — 2026
              </span>
            </div>

            <h1 className="font-display text-5xl lg:text-6xl xl:text-7xl font-bold text-brand-brown leading-[1.05] mb-6">
              Represent.{" "}
              <span className="text-brand-orange">Inspire.</span>{" "}
              Lead.
            </h1>

            <p className="text-gray-500 text-lg lg:text-xl leading-relaxed mb-8 max-w-lg">
              Become an EDSIP Student Ambassador and be the bridge between your
              campus and the digital future. Lead your peers, grow your network,
              and build a career that starts before graduation.
            </p>

            {/* Quick stats */}
            <div className="flex flex-wrap items-center gap-6 mb-10">
              {[
                { icon: <Users size={16} />, text: "100+ Ambassadors" },
                { icon: <Globe size={16} />, text: "20+ Universities" },
                { icon: <Star size={16} />, text: "Exclusive Benefits" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-gray-600">
                  <span className="text-brand-orange">{item.icon}</span>
                  <span className="text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#apply"
                className="inline-flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orange-hover text-white font-bold px-7 py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-orange-200 text-sm"
              >
                Apply to Be an Ambassador
                <ArrowRight size={16} />
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center gap-2 border border-gray-200 hover:border-brand-orange/40 text-gray-600 hover:text-brand-orange font-semibold px-7 py-4 rounded-xl transition-all duration-200 text-sm"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Right — Visual */}
          <div className="relative">
            <div className="relative bg-white border border-gray-100 rounded-3xl p-8 shadow-xl shadow-gray-100">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl overflow-hidden">
                    <img src="/edsip1.jpg" alt="EDSIP" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="text-brand-brown font-semibold text-sm">Ambassador Portal</p>
                    <p className="text-gray-400 text-xs">EDSIP 2026 Cohort</p>
                  </div>
                </div>
                <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
                  Recruiting
                </span>
              </div>

              {/* Ambassador perks preview */}
              <div className="space-y-3 mb-6">
                {[
                  { label: "Leadership Certificate", done: true },
                  { label: "Mentorship Access", done: true },
                  { label: "Exclusive Swag Kit", done: true },
                  { label: "Career Opportunities", done: false },
                  { label: "Campus Recognition", done: false },
                ].map((perk, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                      perk.done
                        ? "bg-brand-orange text-white"
                        : "bg-gray-100 text-gray-300"
                    }`}>
                      <span className="text-[10px] font-bold">✓</span>
                    </div>
                    <span className={`text-sm ${perk.done ? "text-brand-brown font-medium" : "text-gray-400"}`}>
                      {perk.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Progress */}
              <div className="bg-gray-50 rounded-2xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-gray-500 font-medium">Spots Filling Up</span>
                  <span className="text-xs text-brand-orange font-bold">72%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-brand-orange rounded-full w-[72%]" />
                </div>
                <p className="text-xs text-gray-400 mt-2">28 spots remaining out of 100</p>
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute -top-4 -left-4 bg-brand-orange text-white text-xs font-bold px-4 py-2 rounded-xl shadow-lg shadow-orange-200">
              🌟 2026 Applications Open
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white border border-gray-100 text-brand-brown text-xs font-semibold px-4 py-3 rounded-xl shadow-xl flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Deadline approaching
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;