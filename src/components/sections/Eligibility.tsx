import { CheckCircle, XCircle } from "lucide-react";

const eligible = [
  "Currently enrolled in a Nigerian university or polytechnic",
  "Minimum 200 level (second year) or above",
  "CGPA of 2.5 and above (or equivalent)",
  "Active on at least one social media platform",
  "Passionate about digital education and career development",
  "Available for at least 5 hours per week for ambassador activities",
  "Strong communication and interpersonal skills",
  "Able to commit for a minimum of one academic session",
];

const notEligible = [
  "Final year students in their last semester",
  "Students on academic probation or suspension",
  "Current EDSIP staff or paid contractors",
  "Students with less than 5 hours per week available",
];

const Eligibility = () => {
  return (
    <section id="eligibility" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-0.5 bg-brand-orange" />
          <span className="text-brand-orange text-sm font-semibold uppercase tracking-widest">
            Eligibility
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end mb-16">
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-brand-brown leading-tight">
            Do You{" "}
            <span className="text-brand-orange">Qualify?</span>
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            We're looking for driven, communicative, and passionate students.
            Check the criteria below before applying.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Who qualifies */}
          <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center">
                <CheckCircle size={20} className="text-emerald-600" />
              </div>
              <h3 className="text-brand-brown font-bold text-lg">
                You're Eligible If...
              </h3>
            </div>
            <div className="space-y-3">
              {eligible.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle size={16} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 text-sm leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Who doesn't qualify */}
          <div className="space-y-6">
            <div className="bg-red-50 border border-red-100 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center">
                  <XCircle size={20} className="text-red-500" />
                </div>
                <h3 className="text-brand-brown font-bold text-lg">
                  Not Eligible If...
                </h3>
              </div>
              <div className="space-y-3">
                {notEligible.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <XCircle size={16} className="text-red-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 text-sm leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Note */}
            <div className="bg-brand-orange-light border border-orange-100 rounded-2xl p-6">
              <p className="text-brand-brown font-semibold text-sm mb-2">
                Not sure if you qualify?
              </p>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                Send us an email and our team will review your profile and let
                you know within 48 hours.
              </p>
              <a
                href="mailto:enchanteddigitalacademy@gmail.com"
                className="text-brand-orange font-semibold text-sm hover:underline"
              >
                enchanteddigitalacademy@gmail.com &#8594;
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Eligibility;