import { CheckCircle } from "lucide-react";

const responsibilities = [
  {
    title: "Campus Representation",
    description: "Actively represent EDSIP at campus events, fairs, and student gatherings. Be the face of the programme at your institution.",
    tasks: ["Attend campus events", "Set up EDSIP info booths", "Distribute programme materials"],
  },
  {
    title: "Peer Recruitment",
    description: "Identify and encourage talented students on your campus to apply for EDSIP programmes and internship opportunities.",
    tasks: ["Share application links", "Host info sessions", "Follow up with prospects"],
  },
  {
    title: "Content Creation",
    description: "Create and share authentic content about your ambassador experience on social media to inspire other students.",
    tasks: ["Post weekly content", "Share testimonials", "Tag EDSIP official accounts"],
  },
  {
    title: "Community Building",
    description: "Build and nurture a community of EDSIP-aligned students at your university through regular engagement and events.",
    tasks: ["Create WhatsApp groups", "Organise study circles", "Host campus webinars"],
  },
  {
    title: "Feedback & Reporting",
    description: "Provide regular updates and feedback to the EDSIP team about student needs, campus trends, and programme reception.",
    tasks: ["Submit monthly reports", "Attend ambassador calls", "Share campus insights"],
  },
  {
    title: "Event Participation",
    description: "Participate in national EDSIP events, ambassador summits, and webinars as both an attendee and potential speaker.",
    tasks: ["Join virtual events", "Attend annual summit", "Speak at webinars"],
  },
];

const Responsibilities = () => {
  return (
    <section id="responsibilities" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-0.5 bg-brand-orange" />
          <span className="text-brand-orange text-sm font-semibold uppercase tracking-widest">
            Responsibilities
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end mb-16">
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-brand-brown leading-tight">
            What We{" "}
            <span className="text-brand-orange">Expect</span> From You
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Great ambassadors show up consistently. Here's what the role looks
            like in practice — clear, honest, and achievable alongside your
            studies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {responsibilities.map((item, i) => (
            <div
              key={i}
              className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg hover:shadow-orange-50 hover:border-orange-100 transition-all duration-300 group"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-brand-orange/10 flex items-center justify-center text-brand-orange flex-shrink-0 group-hover:bg-brand-orange group-hover:text-white transition-all duration-300 text-xs font-bold">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="text-brand-brown font-bold text-base">
                  {item.title}
                </h3>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                {item.description}
              </p>
              <div className="space-y-2 pt-4 border-t border-gray-50">
                {item.tasks.map((task, j) => (
                  <div key={j} className="flex items-center gap-2">
                    <CheckCircle size={13} className="text-brand-orange flex-shrink-0" />
                    <span className="text-gray-500 text-xs">{task}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Responsibilities;