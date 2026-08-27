import { ArrowRight, Star } from "lucide-react";

const CTA = () => {
  return (
    <section id="apply" className="py-24 bg-brand-brown relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-orange/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-orange/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        {/* Stars */}
        <div className="flex items-center justify-center gap-1 mb-6">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={18} className="text-brand-orange fill-brand-orange" />
          ))}
        </div>

        <h2 className="font-display text-4xl lg:text-6xl font-bold text-white leading-tight mb-6">
          Ready to{" "}
          <span className="text-brand-orange">Lead</span>{" "}
          on Your Campus?
        </h2>

        <p className="text-white/60 text-lg lg:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
          Applications for the 2026 EDSIP Ambassador cohort are now open.
          Spots are limited. Don't miss your chance to be part of something
          bigger than yourself.
        </p>

        {/* Stats */}
        <div className="flex flex-wrap items-center justify-center gap-8 mb-10">
          {[
            { value: "100+", label: "Active Ambassadors" },
            { value: "20+", label: "Universities" },
            { value: "10,000+", label: "Students Reached" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-brand-orange font-display font-bold text-3xl">{stat.value}</p>
              <p className="text-white/50 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeFLRniYnZIFMUD8KXwsoDiGJF1gSHMlrllOkZzjkVtr0lVZQ/viewform?pli=1"
            className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-hover text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-orange-900/30 text-base"
          >
            Apply Now — It's Free
            <ArrowRight size={18} />
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 text-white/70 hover:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 text-base"
          >
            Learn More First
          </a>
        </div>

        <p className="text-white/30 text-xs mt-8">
          No payment required. Applications close when cohort is full.
        </p>
      </div>
    </section>
  );
};

export default CTA;