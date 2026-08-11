import {
  Award, BookOpen, Users, TrendingUp,
  Gift, Mic, Globe, Shield,
} from "lucide-react";

const benefits = [
  {
    icon: <Award size={20} />,
    title: "Leadership Certificate",
    description: "Receive an official EDSIP Ambassador Certificate that validates your leadership experience to future employers.",
    highlight: true,
  },
  {
    icon: <BookOpen size={20} />,
    title: "Free Learning Access",
    description: "Unlock free access to EDSIP learning resources, bootcamps, and premium courses throughout your tenure.",
    highlight: false,
  },
  {
    icon: <Users size={20} />,
    title: "Mentorship Network",
    description: "Get paired with an industry professional who will guide your career growth and open doors for you.",
    highlight: false,
  },
  {
    icon: <TrendingUp size={20} />,
    title: "Career Acceleration",
    description: "Stand out in job applications — your ambassador role signals leadership, initiative, and communication skills.",
    highlight: false,
  },
  {
    icon: <Gift size={20} />,
    title: "Exclusive Swag Kit",
    description: "Receive branded EDSIP ambassador merchandise including a hoodie, notebook, stickers, and digital assets.",
    highlight: false,
  },
  {
    icon: <Mic size={20} />,
    title: "Speaking Opportunities",
    description: "Get featured at EDSIP events, webinars, and campus activations as a recognised student voice.",
    highlight: false,
  },
  {
    icon: <Globe size={20} />,
    title: "National Network",
    description: "Connect with ambitious students and young professionals across Nigeria and beyond through our ambassador community.",
    highlight: false,
  },
  {
    icon: <Shield size={20} />,
    title: "Priority Placement",
    description: "Top-performing ambassadors receive priority consideration for EDSIP internship placements and job referrals.",
    highlight: true,
  },
];

const Benefits = () => {
  return (
    <section id="benefits" className="py-24 bg-brand-brown">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-0.5 bg-brand-orange" />
          <span className="text-brand-orange text-sm font-semibold uppercase tracking-widest">
            Benefits
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end mb-16">
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white leading-tight">
            What You{" "}
            <span className="text-brand-orange">Gain</span> as an Ambassador
          </h2>
          <p className="text-white/50 text-lg leading-relaxed">
            Being an EDSIP Ambassador isn't just a title — it's a package of
            real, tangible value designed to accelerate your growth.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {benefits.map((benefit, i) => (
            <div
              key={i}
              className={`group relative rounded-2xl p-6 border transition-all duration-300 cursor-default ${
                benefit.highlight
                  ? "bg-brand-orange border-brand-orange shadow-lg shadow-orange-900/20"
                  : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-brand-orange/30"
              }`}
            >
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 ${
                benefit.highlight
                  ? "bg-white/20 text-white"
                  : "bg-brand-orange/10 text-brand-orange group-hover:bg-brand-orange group-hover:text-white"
              }`}>
                {benefit.icon}
              </div>
              <h3 className={`font-bold text-sm mb-2.5 ${benefit.highlight ? "text-white" : "text-white"}`}>
                {benefit.title}
              </h3>
              <p className={`text-sm leading-relaxed ${benefit.highlight ? "text-white/80" : "text-white/50"}`}>
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;