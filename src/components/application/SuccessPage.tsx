import { ArrowRight, CheckCircle2, Hourglass } from "lucide-react";

import bulbImage from "../../assets/bulb.png";

interface SuccessPageProps {
  onBack?: () => void;
}

const SuccessPage = ({ onBack }: SuccessPageProps) => {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f8f5ef] text-[#171717]">
      {/* =================================================
          SUCCESS HERO
      ================================================= */}
      <section className="relative min-h-[360px] overflow-hidden border-b border-[#e7e2da]/60 bg-white">
        {/* Decorative circle */}
        <div
          aria-hidden="true"
          className="absolute -left-[100px] -top-[340px] h-[500px] w-[500px] rounded-full border border-orange-500/10"
        />

        {/* Decorative diagonal line */}
        <div
          aria-hidden="true"
          className="absolute -left-20 top-[100px] h-px w-[520px] rotate-[-28deg] bg-orange-500/10"
        />

        {/* Decorative dot */}
        <div
          aria-hidden="true"
          className="absolute left-[47%] top-7 z-10 h-[13px] w-[13px] rounded-full bg-[#f97316]"
        />

        {/* Decorative diamond */}
        <div
          aria-hidden="true"
          className="absolute bottom-[42px] left-[31%] z-10 h-[18px] w-[18px] rotate-45 bg-[#f97316]"
        />

        {/* Decorative hexagon */}
        <div
          aria-hidden="true"
          className="absolute bottom-[60px] right-[10%] z-10 h-[54px] w-[54px] bg-orange-500/10 [clip-path:polygon(25%_6%,75%_6%,100%_50%,75%_94%,25%_94%,0_50%)]"
        />

        <div className="relative z-20 mx-auto grid min-h-[360px] w-full max-w-[1180px] grid-cols-1 items-center px-6 py-10 sm:px-8 md:grid-cols-[0.9fr_1.1fr] md:px-10 lg:px-[50px]">
          {/* Hero Copy */}
          <div className="relative z-30 max-w-[480px] text-center md:text-left">
            <span className="mb-2 block font-serif text-[2rem] font-bold leading-[1.05] text-[#f97316] sm:text-[2.4rem] md:text-[3rem]">
              Application Submitted
            </span>

            <h1 className="mb-[22px] font-serif text-[2.5rem] font-bold leading-none tracking-[-0.035em] text-[#f97316] sm:text-[3.2rem] md:text-[4rem]">
              Successfully!
            </h1>

            <p className="max-w-[430px] text-[0.95rem] font-semibold leading-[1.65] text-[#4d3825]">
              Thank you for applying to become an EDSIP Student Ambassador.
              Your application has been received and is now under review.
            </p>
          </div>

          {/* Hero Image */}
          <div className="relative flex h-[260px] items-center justify-center md:h-[360px]">
            <img
              src={bulbImage}
              alt="EDSIP Student Ambassador"
              className="relative z-20 w-[min(430px,90%)] opacity-[0.88] saturate-[0.82]"
            />
          </div>
        </div>
      </section>

      {/* =================================================
          CONFIRMATION
      ================================================= */}
      <section className="flex justify-center bg-[#fffaf4] px-6 py-[68px]">
        <div className="w-full max-w-[560px] rounded-[18px] border border-[#ddd7cf] bg-white px-7 py-[42px] text-center shadow-[0_12px_35px_rgba(60,45,25,0.045),0_2px_5px_rgba(60,45,25,0.025)] sm:px-11">
          <div className="mx-auto mb-5 flex h-[78px] w-[78px] items-center justify-center rounded-full text-[#5a320c]">
            <CheckCircle2
              size={58}
              strokeWidth={1.8}
              aria-hidden="true"
            />
          </div>

          <h2 className="mb-5 font-serif text-[1.9rem] font-bold leading-[1.05] text-[#f97316] sm:text-[2.45rem]">
            We've received your
            <br />
            application
          </h2>

          <p className="mx-auto max-w-[460px] text-[0.92rem] font-semibold leading-[1.65] text-[#4d3825]">
            Your application has been submitted successfully. We'll carefully
            review your information and contact you if you're selected for the
            next stage.
          </p>
        </div>
      </section>

      {/* =================================================
          WHAT HAPPENS NEXT
      ================================================= */}
      <section className="bg-white px-6 py-[70px] pb-[78px]">
        <div className="mb-[55px] text-center">
          <h2 className="font-serif text-[2rem] font-bold leading-tight text-[#f97316] sm:text-[2.4rem] md:text-[2.7rem]">
            What Happens Next?
          </h2>
        </div>

        <div className="mx-auto w-full max-w-[900px]">
          {/* Step 1 */}
          <div className="relative grid min-h-[120px] grid-cols-[52px_1fr] gap-5 sm:grid-cols-[58px_1fr] sm:gap-7">
            <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-[#5a320c] text-[1.15rem] font-extrabold text-white">
              1
            </div>

            <div className="pt-[3px]">
              <h3 className="mb-2 text-[1.3rem] font-extrabold leading-tight text-[#4d2b0b] sm:text-[1.75rem]">
                Application Review
              </h3>

              <p className="text-[0.95rem] leading-[1.6] text-[#624f3e]">
                Our team reviews all submitted applications.
              </p>
            </div>

            <div
              aria-hidden="true"
              className="absolute left-[27px] top-[57px] bottom-0 w-px bg-[#cbbcae]"
            />
          </div>

          {/* Step 2 */}
          <div className="relative grid min-h-[120px] grid-cols-[52px_1fr] gap-5 sm:grid-cols-[58px_1fr] sm:gap-7">
            <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-[#5a320c] text-[1.15rem] font-extrabold text-white">
              2
            </div>

            <div className="pt-[3px]">
              <h3 className="mb-2 text-[1.3rem] font-extrabold leading-tight text-[#4d2b0b] sm:text-[1.75rem]">
                Selection
              </h3>

              <p className="text-[0.95rem] leading-[1.6] text-[#624f3e]">
                Shortlisted applicants will receive an email invitation.
              </p>
            </div>

            <div
              aria-hidden="true"
              className="absolute left-[27px] top-[57px] bottom-0 w-px bg-[#cbbcae]"
            />
          </div>

          {/* Step 3 */}
          <div className="grid min-h-[120px] grid-cols-[52px_1fr] gap-5 sm:grid-cols-[58px_1fr] sm:gap-7">
            <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-[#5a320c] text-[1.15rem] font-extrabold text-white">
              3
            </div>

            <div className="pt-[3px]">
              <h3 className="mb-2 text-[1.3rem] font-extrabold leading-tight text-[#4d2b0b] sm:text-[1.75rem]">
                Onboarding
              </h3>

              <p className="text-[0.95rem] leading-[1.6] text-[#624f3e]">
                Selected ambassadors will attend onboarding and begin
                representing EDSIP.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================
          REVIEW TIMELINE
      ================================================= */}
      <section className="flex justify-center bg-[#fffaf4] px-6 py-[72px] pb-[90px]">
        <div className="w-full max-w-[560px] rounded-[18px] border border-[#ddd7cf] bg-white px-7 py-[46px] text-center shadow-[0_12px_35px_rgba(60,45,25,0.045),0_2px_5px_rgba(60,45,25,0.025)] sm:px-11">
          <div className="mb-[18px] flex justify-center text-[#5a320c]">
            <Hourglass
              size={58}
              strokeWidth={1.8}
              aria-hidden="true"
            />
          </div>

          <h2 className="mb-[22px] font-serif text-[1.9rem] font-bold leading-[1.05] text-[#f97316] sm:text-[2.4rem]">
            Application Review
            <br />
            Timeline
          </h2>

          <p className="mb-[25px] text-[0.92rem] leading-[1.6] text-[#624f3e]">
            You can expect to hear from us within{" "}
            <strong className="font-bold text-[#4d2b0b]">
              5–7 business days.
            </strong>
          </p>

          {onBack && (
            <button
              type="button"
              onClick={onBack}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#f97316] bg-[#f97316] px-[18px] py-[11px] text-[0.82rem] font-bold text-white transition-all duration-200 hover:-translate-y-px hover:border-[#ea580c] hover:bg-[#ea580c] hover:shadow-[0_7px_18px_rgba(249,115,22,0.2)] focus:outline-none focus:ring-4 focus:ring-orange-500/10 active:translate-y-0"
            >
              Return to Homepage
              <ArrowRight size={16} aria-hidden="true" />
            </button>
          )}
        </div>
      </section>
    </main>
  );
};

export default SuccessPage;