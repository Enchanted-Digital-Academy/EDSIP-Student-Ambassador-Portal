import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const TermsOfUsePage = () => {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#f8f5ef] text-[#171717]">
        {/* Page Header */}
        <section className="border-b border-[#e7e2da] bg-white px-6 py-[72px]">
          <div className="mx-auto w-full max-w-[900px]">
            <p className="mb-3 text-[0.8rem] font-bold uppercase tracking-[0.12em] text-[#f97316]">
              Legal
            </p>

            <h1 className="font-serif text-[2.7rem] font-bold leading-[1.05] tracking-[-0.03em] text-[#171717] sm:text-[3.5rem] md:text-[4rem]">
              Terms of Use
            </h1>

            <p className="mt-5 max-w-[680px] text-[0.98rem] leading-[1.7] text-[#624f3e]">
              Please read these Terms of Use carefully before accessing or
              using the EDA website or enrolling in any programme.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="px-6 py-[64px] sm:px-8 md:py-[80px]">
          <article className="mx-auto w-full max-w-[900px] rounded-[18px] border border-[#ddd7cf] bg-white px-6 py-9 shadow-[0_12px_35px_rgba(60,45,25,0.045),0_2px_5px_rgba(60,45,25,0.025)] sm:px-10 sm:py-12 md:px-14">
            <div className="space-y-10">
              <section>
                <h2 className="mb-3 font-serif text-[1.45rem] font-bold text-[#f97316]">
                  Acceptance
                </h2>
                <p className="text-[0.95rem] leading-[1.75] text-[#624f3e]">
                  By accessing or using the EDA website or enrolling in any
                  programme, you agree to these Terms of Use.
                </p>
              </section>

              <section>
                <h2 className="mb-3 font-serif text-[1.45rem] font-bold text-[#f97316]">
                  Eligibility
                </h2>
                <p className="text-[0.95rem] leading-[1.75] text-[#624f3e]">
                  Users must provide accurate registration information and
                  must be legally capable of entering into binding agreements.
                </p>
              </section>

              <section>
                <h2 className="mb-3 font-serif text-[1.45rem] font-bold text-[#f97316]">
                  Intellectual Property
                </h2>
                <p className="text-[0.95rem] leading-[1.75] text-[#624f3e]">
                  All courses, videos, documents, templates, trademarks,
                  logos, graphics, and website content remain the exclusive
                  property of EDA and are protected by copyright and
                  intellectual property laws.
                </p>
              </section>

              <section>
                <h2 className="mb-3 font-serif text-[1.45rem] font-bold text-[#f97316]">
                  User Responsibilities
                </h2>

                <p className="mb-3 text-[0.95rem] leading-[1.75] text-[#624f3e]">
                  Users agree to:
                </p>

                <ul className="list-disc space-y-2 pl-6 text-[0.95rem] leading-[1.75] text-[#624f3e]">
                  <li>Use the platform lawfully</li>
                  <li>Maintain confidentiality of login credentials</li>
                  <li>Respect other users</li>
                  <li>
                    Refrain from uploading malicious software or unlawful
                    content
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="mb-3 font-serif text-[1.45rem] font-bold text-[#f97316]">
                  Prohibited Activities
                </h2>

                <p className="mb-3 text-[0.95rem] leading-[1.75] text-[#624f3e]">
                  Users shall not:
                </p>

                <ul className="list-disc space-y-2 pl-6 text-[0.95rem] leading-[1.75] text-[#624f3e]">
                  <li>Copy or redistribute course materials</li>
                  <li>Share login credentials</li>
                  <li>
                    Record, reproduce, resell, or commercially exploit EDA
                    content without written permission
                  </li>
                  <li>Attempt to hack or interfere with the platform</li>
                </ul>
              </section>

              <section>
                <h2 className="mb-3 font-serif text-[1.45rem] font-bold text-[#f97316]">
                  Payments
                </h2>
                <p className="text-[0.95rem] leading-[1.75] text-[#624f3e]">
                  All course fees must be paid before access is granted unless
                  otherwise approved by EDA.
                </p>
              </section>

              <section>
                <h2 className="mb-3 font-serif text-[1.45rem] font-bold text-[#f97316]">
                  Suspension and Termination
                </h2>
                <p className="text-[0.95rem] leading-[1.75] text-[#624f3e]">
                  EDA reserves the right to suspend or terminate accounts that
                  violate these Terms without refund where appropriate.
                </p>
              </section>

              <section>
                <h2 className="mb-3 font-serif text-[1.45rem] font-bold text-[#f97316]">
                  Disclaimer
                </h2>
                <p className="text-[0.95rem] leading-[1.75] text-[#624f3e]">
                  EDA provides educational content on an “as available” basis
                  and does not guarantee specific employment or business
                  outcomes.
                </p>
              </section>

              <section>
                <h2 className="mb-3 font-serif text-[1.45rem] font-bold text-[#f97316]">
                  Limitation of Liability
                </h2>
                <p className="text-[0.95rem] leading-[1.75] text-[#624f3e]">
                  EDA shall not be liable for indirect, incidental, or
                  consequential damages arising from use of its services,
                  except where liability cannot legally be excluded.
                </p>
              </section>

              <section>
                <h2 className="mb-3 font-serif text-[1.45rem] font-bold text-[#f97316]">
                  Governing Law
                </h2>
                <p className="text-[0.95rem] leading-[1.75] text-[#624f3e]">
                  These Terms shall be governed by the laws of the Federal
                  Republic of Nigeria.
                </p>
              </section>

              <section>
                <h2 className="mb-3 font-serif text-[1.45rem] font-bold text-[#f97316]">
                  Amendments
                </h2>
                <p className="text-[0.95rem] leading-[1.75] text-[#624f3e]">
                  EDA may revise these Terms at any time. Continued use of the
                  platform constitutes acceptance of the updated Terms.
                </p>
              </section>
            </div>
          </article>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default TermsOfUsePage;