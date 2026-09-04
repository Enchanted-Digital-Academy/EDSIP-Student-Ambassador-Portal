import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const RefundCancellationPage = () => {
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
              Refund &amp; Cancellation Policy
            </h1>

            <p className="mt-5 max-w-[680px] text-[0.98rem] leading-[1.7] text-[#624f3e]">
              Our refund and cancellation policy is designed to provide a
              fair and transparent process for EDA students.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="px-6 py-[64px] sm:px-8 md:py-[80px]">
          <article className="mx-auto w-full max-w-[900px] rounded-[18px] border border-[#ddd7cf] bg-white px-6 py-9 shadow-[0_12px_35px_rgba(60,45,25,0.045),0_2px_5px_rgba(60,45,25,0.025)] sm:px-10 sm:py-12 md:px-14">
            <div className="space-y-10">
              <section>
                <h2 className="mb-3 font-serif text-[1.45rem] font-bold text-[#f97316]">
                  General Policy
                </h2>
                <p className="text-[0.95rem] leading-[1.75] text-[#624f3e]">
                  EDA is committed to delivering high-quality digital
                  education while maintaining a fair and transparent refund
                  process.
                </p>
              </section>

              <section>
                <h2 className="mb-3 font-serif text-[1.45rem] font-bold text-[#f97316]">
                  Student Cancellation
                </h2>
                <p className="text-[0.95rem] leading-[1.75] text-[#624f3e]">
                  Students may cancel their enrolment before the course
                  commencement date by notifying EDA in writing.
                </p>
              </section>

              <section>
                <h2 className="mb-3 font-serif text-[1.45rem] font-bold text-[#f97316]">
                  Refund Eligibility
                </h2>

                <p className="mb-3 text-[0.95rem] leading-[1.75] text-[#624f3e]">
                  Refunds may be granted where:
                </p>

                <ul className="list-disc space-y-2 pl-6 text-[0.95rem] leading-[1.75] text-[#624f3e]">
                  <li>Payment was made in error</li>
                  <li>Duplicate payment occurred</li>
                  <li>
                    EDA cancels a programme without offering an alternative
                  </li>
                  <li>
                    A written refund request is submitted before access to the
                    course materials has been granted
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="mb-3 font-serif text-[1.45rem] font-bold text-[#f97316]">
                  Non-Refundable Circumstances
                </h2>

                <p className="mb-3 text-[0.95rem] leading-[1.75] text-[#624f3e]">
                  Refunds will not be issued where:
                </p>

                <ul className="list-disc space-y-2 pl-6 text-[0.95rem] leading-[1.75] text-[#624f3e]">
                  <li>The student has accessed course materials or classes</li>
                  <li>Digital resources have been downloaded</li>
                  <li>Certificates have been issued</li>
                  <li>
                    The student withdraws after course commencement except
                    where otherwise approved by EDA
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="mb-3 font-serif text-[1.45rem] font-bold text-[#f97316]">
                  Processing Time
                </h2>
                <p className="text-[0.95rem] leading-[1.75] text-[#624f3e]">
                  Approved refunds will be processed within 14–21 business
                  days using the original payment method where possible.
                </p>
              </section>

              <section>
                <h2 className="mb-3 font-serif text-[1.45rem] font-bold text-[#f97316]">
                  Transfers
                </h2>
                <p className="text-[0.95rem] leading-[1.75] text-[#624f3e]">
                  EDA may, at its discretion, permit a student to transfer
                  enrolment to another available programme or intake instead
                  of receiving a refund.
                </p>
              </section>

              <section>
                <h2 className="mb-3 font-serif text-[1.45rem] font-bold text-[#f97316]">
                  Cancellation by EDA
                </h2>

                <p className="mb-3 text-[0.95rem] leading-[1.75] text-[#624f3e]">
                  EDA reserves the right to cancel or postpone programmes due
                  to insufficient enrolment, technical issues, or unforeseen
                  circumstances. Where this occurs, students may choose either:
                </p>

                <ul className="list-disc space-y-2 pl-6 text-[0.95rem] leading-[1.75] text-[#624f3e]">
                  <li>A full refund</li>
                  <li>Transfer to another available programme</li>
                </ul>
              </section>

              <section>
                <h2 className="mb-3 font-serif text-[1.45rem] font-bold text-[#f97316]">
                  Refund Request Procedure
                </h2>

                <p className="mb-3 text-[0.95rem] leading-[1.75] text-[#624f3e]">
                  Refund requests must be submitted in writing, stating:
                </p>

                <ul className="list-disc space-y-2 pl-6 text-[0.95rem] leading-[1.75] text-[#624f3e]">
                  <li>Full name</li>
                  <li>Registered email address</li>
                  <li>Course name</li>
                  <li>Reason for the refund request</li>
                  <li>Proof of payment</li>
                </ul>
              </section>

              <section>
                <h2 className="mb-3 font-serif text-[1.45rem] font-bold text-[#f97316]">
                  Policy Updates
                </h2>
                <p className="text-[0.95rem] leading-[1.75] text-[#624f3e]">
                  EDA reserves the right to amend this Refund and Cancellation
                  Policy at any time. Updated versions will be published on
                  the EDA website.
                </p>
              </section>

              <aside className="rounded-xl border border-[#f0d6bd] bg-[#fffaf4] p-5">
                <p className="text-[0.85rem] leading-[1.7] text-[#624f3e]">
                  These policies are suitable for publication on EDA’s website
                  and provide a solid legal framework. Before implementation,
                  they should be reviewed by legal counsel to ensure they
                  reflect EDA’s actual business practices and any sector-specific
                  regulatory requirements.
                </p>
              </aside>
            </div>
          </article>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default RefundCancellationPage;