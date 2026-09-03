import {
  ClipboardList, UserCheck, BookOpen,
  Mic, Award, Rocket,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: <ClipboardList size={22} />,
    title: "Submit Your Application",
    description: "Fill out the ambassador application form with your personal details, motivation, and leadership experience. Takes about 10 minutes.",
    duration: "Day 1",
  },
  {
    number: "02",
    icon: <UserCheck size={22} />,
    title: "Screening & Interview",
    description: "Shortlisted candidates will be invited for a 15-minute virtual interview with the EDSIP Ambassador team to assess fit and passion.",
    duration: "Week 1–2",
  },
  {
    number: "03",
    icon: <BookOpen size={22} />,
    title: "Onboarding & Training",
    description: "Accepted ambassadors go through a 2-day virtual onboarding. You'll receive your ambassador kit, platform access, and training materials.",
    duration: "Week 3",
  },
  {
    number: "04",
    icon: <Mic size={22} />,
    title: "Start Your Mission",
    description: "Begin your campus activities — host info sessions, recruit peers, create content, and represent EDSIP at events on your campus.",
    duration: "Ongoing",
  },
  {
    number: "05",
    icon: <Award size={22} />,
    title: "Earn Recognition",
    description: "Top ambassadors are recognised monthly. Earn points, climb the leaderboard, and unlock exclusive rewards and career opportunities.",
    duration: "Monthly",
  },
  {
    number: "06",
    icon: <Rocket size={22} />,
    title: "Graduate & Beyond",
    description: "Complete your tenure with a certificate, a strong portfolio entry, and lifelong access to the EDSIP alumni and professional network.",
    duration: "End of Tenure",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-brand-orange-light">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-0.5 bg-brand-orange" />
          <span className="text-brand-orange text-sm font-semibold uppercase tracking-widest">
            How It Works
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end mb-16">
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-brand-brown leading-tight">
            Your Journey,{" "}
            <span className="text-brand-orange">Step by Step</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            From application to graduation, here's exactly what the ambassador
            journey looks like — transparent, structured, and rewarding.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute left-[27px] top-8 bottom-8 w-0.5 bg-gradient-to-b from-brand-orange via-orange-300 to-transparent" />

          <div className="space-y-5">
            {steps.map((step, i) => (
              <div key={i} className="group relative flex gap-6 lg:gap-10 items-start">
                <div className="relative flex-shrink-0 z-10">
                  <div className="w-14 h-14 rounded-2xl bg-white border-2 border-brand-orange flex items-center justify-center text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all duration-300 shadow-sm">
                    {step.icon}
                  </div>
                </div>

                <div className="flex-1 bg-white border border-orange-100 rounded-2xl p-6 group-hover:shadow-lg group-hover:shadow-orange-100 group-hover:border-orange-200 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-2">
                    <div className="flex items-center gap-3">
                      <span className="text-brand-orange font-bold text-xs font-mono">
                        {step.number}
                      </span>
                      <h3 className="text-brand-brown font-bold text-base">
                        {step.title}
                      </h3>
                    </div>
                    <span className="flex-shrink-0 text-xs font-semibold text-brand-orange bg-brand-orange/10 px-3 py-1 rounded-full w-fit">
                      {step.duration}
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;