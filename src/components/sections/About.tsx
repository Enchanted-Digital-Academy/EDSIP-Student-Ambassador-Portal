import { Target, Heart, Zap } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-0.5 bg-brand-orange" />
          <span className="text-brand-orange text-sm font-semibold uppercase tracking-widest">
            About the Programme
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-brand-brown leading-tight mb-6">
              More Than a Title.{" "}
              <span className="text-brand-orange">A Movement.</span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-6">
              The EDSIP Student Ambassador Programme empowers exceptional
              students to champion digital education on their campuses. As an
              ambassador, you don't just represent EDSIP — you become a catalyst
              for change in your academic community.
            </p>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              You'll connect your peers to life-changing opportunities, lead
              initiatives that matter, and build the kind of experience that sets
              you apart — long before graduation day.
            </p>
            <div className="flex items-center gap-3 p-4 bg-brand-orange-light border border-orange-100 rounded-2xl">
              <Heart size={20} className="text-brand-orange flex-shrink-0" />
              <p className="text-brand-brown text-sm font-semibold">
                Our ambassadors have collectively reached over 10,000 students
                across Nigeria.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5">
            {[
              {
                icon: <Target size={22} />,
                title: "Our Mission",
                description:
                  "To create a nationwide network of student leaders who champion digital skills and career development across every campus in Africa.",
              },
              {
                icon: <Zap size={22} />,
                title: "What Makes It Different",
                description:
                  "This isn't a volunteer role with no return. Every ambassador grows — in skills, network, recognition, and career capital — throughout their tenure.",
              },
              {
                icon: <Heart size={22} />,
                title: "The Community",
                description:
                  "Join a WhatsApp community, Slack workspace, and alumni network of driven students who help each other land opportunities and level up.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex gap-4 p-5 bg-white border border-gray-100 rounded-2xl hover:shadow-lg hover:shadow-orange-50 hover:border-orange-100 transition-all duration-300 group"
              >
                <div className="w-11 h-11 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange flex-shrink-0 group-hover:bg-brand-orange group-hover:text-white transition-all duration-300">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-brand-brown font-bold text-sm mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {item.description}
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

export default About;