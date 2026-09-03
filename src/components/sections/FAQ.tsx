import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How long is the ambassador tenure?",
    answer: "The standard ambassador tenure is one full academic session (one year). Top performers may be invited to renew for a second tenure.",
  },
  {
    question: "Can I be an ambassador and also apply for EDSIP internship?",
    answer: "Absolutely. Being an ambassador does not disqualify you from applying for EDSIP internships. In fact, ambassadors receive priority consideration for internship placements.",
  },
  {
    question: "How many hours per week does the role require?",
    answer: "We recommend a minimum of 5 hours per week. This includes attending virtual check-ins, creating content, recruiting peers, and representing EDSIP on campus.",
  },
  {
    question: "Is there a stipend or payment for ambassadors?",
    answer: "The ambassador role is unpaid, but it comes with significant non-monetary value — free courses, certificates, swag, mentorship, a recommendation letter, and career opportunities that far exceed any token stipend.",
  },
  {
    question: "What happens if I can no longer continue as ambassador?",
    answer: "Life happens. We ask that you notify us at least 2 weeks before stepping down so we can plan a handover. Ambassadors who complete at least 3 months still receive a partial completion certificate.",
  },
  {
    question: "Can students from private universities apply?",
    answer: "Yes. The programme is open to students from all accredited Nigerian universities — federal, state, and private.",
  },
  {
    question: "How are ambassadors evaluated?",
    answer: "Ambassadors are evaluated monthly on three metrics: recruitment numbers, content engagement, and event participation. Top performers unlock exclusive rewards and recognition.",
  },
  {
    question: "When will I hear back after applying?",
    answer: "Applications are reviewed on a rolling basis. You'll receive an acknowledgement email within 24 hours and a decision within 7 business days.",
  },
];

const FAQItem = ({
  question, answer, isOpen, onToggle, index,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) => (
  <div className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
    isOpen ? "border-brand-orange shadow-md shadow-orange-100" : "border-gray-100 hover:border-orange-200"
  }`}>
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-white hover:bg-orange-50/50 transition-colors duration-200"
    >
      <div className="flex items-center gap-4">
        <span className="text-brand-orange font-mono text-xs font-bold flex-shrink-0">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className={`font-semibold text-sm lg:text-base transition-colors duration-200 ${
          isOpen ? "text-brand-orange" : "text-brand-brown"
        }`}>
          {question}
        </span>
      </div>
      <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
        isOpen ? "bg-brand-orange text-white" : "bg-orange-50 text-brand-orange"
      }`}>
        {isOpen ? <Minus size={15} /> : <Plus size={15} />}
      </div>
    </button>
    <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96" : "max-h-0"}`}>
      <div className="px-6 pb-6 pt-2 bg-white border-t border-orange-100">
        <p className="text-gray-500 text-sm leading-relaxed pl-8">{answer}</p>
      </div>
    </div>
  </div>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-0.5 bg-brand-orange" />
          <span className="text-brand-orange text-sm font-semibold uppercase tracking-widest">
            FAQ
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-1">
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-brand-brown leading-tight mb-6">
              Got <span className="text-brand-orange">Questions?</span>
            </h2>
            <p className="text-gray-500 text-base leading-relaxed mb-8">
              We've answered the most common ones below. Still not sure?
              Reach out directly.
            </p>
            <a
              href="mailto:hello@enchanteddigitalacademy.com.ng"
              className="inline-flex items-center gap-2 bg-brand-brown text-white font-semibold px-6 py-3.5 rounded-xl hover:bg-brand-brown/90 transition-all duration-200 text-sm"
            >
              Contact Us &#8594;
            </a>

            <div className="mt-10 p-6 bg-brand-orange-light border border-orange-100 rounded-2xl">
              <p className="text-brand-brown font-bold text-sm mb-2">
                Still unsure?
              </p>
              <p className="text-gray-500 text-sm leading-relaxed mb-3">
                Book a free 10-minute call with an ambassador coordinator.
              </p>
             <a href="tel:07065862449" className="text-brand-orange font-semibold text-sm hover:underline">
  Book a Call &#8594;
</a>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-3">
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                index={i}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;