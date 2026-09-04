import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const AntiPiracyPage = () => {
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
              Anti-Piracy &amp; Non-Distribution
            </h1>

            <p className="mt-5 max-w-[680px] text-[0.98rem] leading-[1.7] text-[#624f3e]">
              This clause protects Enchanted Digital Academy course materials
              from unauthorized copying, recording, sharing, resale, and
              distribution.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="px-6 py-[64px] sm:px-8 md:py-[80px]">
          <article className="mx-auto w-full max-w-[900px] rounded-[18px] border border-[#ddd7cf] bg-white px-6 py-9 shadow-[0_12px_35px_rgba(60,45,25,0.045),0_2px_5px_rgba(60,45,25,0.025)] sm:px-10 sm:py-12 md:px-14">
            <div className="space-y-10">
              {/* Ownership */}
              <section>
                <h2 className="mb-3 font-serif text-[1.45rem] font-bold text-[#f97316]">
                  Ownership of Course Materials
                </h2>

                <p className="text-[0.95rem] leading-[1.75] text-[#624f3e]">
                  All course materials, including but not limited to video
                  lessons, live training recordings, presentations, templates,
                  worksheets, workbooks, policies, legal documents, contracts,
                  forms, checklists, quizzes, assessments, graphics, logos,
                  audio files, software, digital resources, downloadable
                  materials, written content, and any other educational
                  resources provided by Enchanted Digital Academy
                  (&quot;Academy&quot;) are and shall remain the exclusive
                  intellectual property of Enchanted Digital Academy unless
                  otherwise stated.
                </p>

                <p className="mt-4 text-[0.95rem] leading-[1.75] text-[#624f3e]">
                  Enrollment in any course grants the student a limited,
                  non-exclusive, non-transferable, revocable licence to access
                  and use the materials solely for personal educational
                  purposes. No ownership rights are transferred to the
                  student.
                </p>
              </section>

              {/* Copyright */}
              <section>
                <h2 className="mb-3 font-serif text-[1.45rem] font-bold text-[#f97316]">
                  Copyright Notice
                </h2>

                <p className="text-[0.95rem] leading-[1.75] text-[#624f3e]">
                  All Academy materials are protected by applicable copyright
                  laws, intellectual property laws, and international copyright
                  treaties.
                </p>

                <p className="mt-4 font-semibold text-[0.95rem] leading-[1.75] text-[#171717]">
                  © Enchanted Digital Academy. All Rights Reserved.
                </p>

                <p className="mt-4 text-[0.95rem] leading-[1.75] text-[#624f3e]">
                  No part of the Academy&apos;s content may be reproduced,
                  copied, adapted, modified, translated, stored, published, or
                  transmitted in any form or by any means without the prior
                  written consent of Enchanted Digital Academy.
                </p>
              </section>

              {/* Copying */}
              <section>
                <h2 className="mb-3 font-serif text-[1.45rem] font-bold text-[#f97316]">
                  Restrictions on Copying
                </h2>

                <p className="mb-3 text-[0.95rem] leading-[1.75] text-[#624f3e]">
                  Students and users shall not:
                </p>

                <ul className="list-disc space-y-2 pl-6 text-[0.95rem] leading-[1.75] text-[#624f3e]">
                  <li>Copy or reproduce Academy materials in whole or in part</li>
                  <li>Print multiple copies for distribution</li>
                  <li>Create derivative works from Academy content</li>
                  <li>
                    Remove or alter copyright notices, trademarks, branding, or
                    proprietary markings
                  </li>
                  <li>
                    Convert Academy materials into any other format for
                    unauthorized use
                  </li>
                </ul>
              </section>

              {/* Redistribution */}
              <section>
                <h2 className="mb-3 font-serif text-[1.45rem] font-bold text-[#f97316]">
                  Restrictions on Redistribution
                </h2>

                <p className="mb-3 text-[0.95rem] leading-[1.75] text-[#624f3e]">
                  Students are strictly prohibited from:
                </p>

                <ul className="list-disc space-y-2 pl-6 text-[0.95rem] leading-[1.75] text-[#624f3e]">
                  <li>Sharing login credentials with any third party</li>
                  <li>
                    Forwarding downloadable resources to non-enrolled
                    individuals
                  </li>
                  <li>
                    Uploading Academy materials to websites, cloud storage
                    platforms, forums, messaging applications, or social media
                    platforms
                  </li>
                  <li>
                    Distributing Academy content through email, file-sharing
                    platforms, or digital storage devices
                  </li>
                  <li>
                    Allowing any person who has not paid for the course to
                    access Academy content
                  </li>
                </ul>
              </section>

              {/* Resale */}
              <section>
                <h2 className="mb-3 font-serif text-[1.45rem] font-bold text-[#f97316]">
                  Restrictions on Resale
                </h2>

                <p className="mb-3 text-[0.95rem] leading-[1.75] text-[#624f3e]">
                  Students shall not:
                </p>

                <ul className="list-disc space-y-2 pl-6 text-[0.95rem] leading-[1.75] text-[#624f3e]">
                  <li>Sell or attempt to sell Academy materials</li>
                  <li>License, sub-license, lease, or rent Academy content</li>
                  <li>
                    Commercially exploit any course content
                  </li>
                  <li>
                    Include Academy materials in any paid course, coaching
                    programme, mentorship, or training
                  </li>
                  <li>Represent Academy materials as their own work</li>
                  <li>
                    Profit directly or indirectly from any Academy content
                    without prior written authorization
                  </li>
                </ul>
              </section>

              {/* Recording */}
              <section>
                <h2 className="mb-3 font-serif text-[1.45rem] font-bold text-[#f97316]">
                  Unauthorized Recording Policy
                </h2>

                <p className="mb-3 text-[0.95rem] leading-[1.75] text-[#624f3e]">
                  Unless expressly authorized in writing by Enchanted Digital
                  Academy, students shall not:
                </p>

                <ul className="list-disc space-y-2 pl-6 text-[0.95rem] leading-[1.75] text-[#624f3e]">
                  <li>Record live classes or virtual sessions</li>
                  <li>
                    Capture screenshots of proprietary materials where
                    prohibited
                  </li>
                  <li>Screen-record video lessons</li>
                  <li>Record audio from classes or webinars</li>
                  <li>Photograph training materials for distribution</li>
                </ul>

                <p className="mt-4 text-[0.95rem] leading-[1.75] text-[#624f3e]">
                  Any authorized recordings remain the intellectual property of
                  Enchanted Digital Academy and may not be shared or
                  distributed.
                </p>
              </section>

              {/* Digital Sharing */}
              <section>
                <h2 className="mb-3 font-serif text-[1.45rem] font-bold text-[#f97316]">
                  Digital Sharing Restrictions
                </h2>

                <p className="mb-3 text-[0.95rem] leading-[1.75] text-[#624f3e]">
                  Students shall not upload or share Academy materials on:
                </p>

                <ul className="list-disc space-y-2 pl-6 text-[0.95rem] leading-[1.75] text-[#624f3e]">
                  <li>Google Drive</li>
                  <li>Dropbox</li>
                  <li>OneDrive</li>
                  <li>iCloud</li>
                  <li>Telegram</li>
                  <li>WhatsApp groups</li>
                  <li>Facebook</li>
                  <li>Instagram</li>
                  <li>TikTok</li>
                  <li>LinkedIn</li>
                  <li>YouTube</li>
                  <li>Discord</li>
                  <li>Reddit</li>
                  <li>Torrent websites</li>
                  <li>Online marketplaces</li>
                  <li>
                    Any public or private digital platform intended for
                    distribution or file sharing
                  </li>
                </ul>

                <p className="mt-4 text-[0.95rem] leading-[1.75] text-[#624f3e]">
                  Access to Academy content is strictly limited to the
                  registered student.
                </p>
              </section>

              {/* Enforcement */}
              <section>
                <h2 className="mb-3 font-serif text-[1.45rem] font-bold text-[#f97316]">
                  Enforcement Remedies
                </h2>

                <p className="mb-3 text-[0.95rem] leading-[1.75] text-[#624f3e]">
                  Where Enchanted Digital Academy discovers or reasonably
                  suspects unauthorized copying, sharing, resale, recording, or
                  distribution of its materials, the Academy reserves the
                  right to:
                </p>

                <ul className="list-disc space-y-2 pl-6 text-[0.95rem] leading-[1.75] text-[#624f3e]">
                  <li>
                    Immediately suspend or terminate the student&apos;s
                    account without refund
                  </li>
                  <li>
                    Revoke lifetime or ongoing access to all Academy programmes
                  </li>
                  <li>Demand immediate removal of infringing materials</li>
                  <li>Issue cease-and-desist notices</li>
                  <li>
                    Pursue civil legal action for copyright infringement
                  </li>
                  <li>
                    Seek injunctive relief to prevent further unauthorized use
                  </li>
                  <li>
                    Recover damages, legal costs, and financial losses arising
                    from the infringement
                  </li>
                  <li>
                    Report serious infringements to relevant law enforcement or
                    regulatory authorities where applicable
                  </li>
                </ul>

                <p className="mt-4 text-[0.95rem] leading-[1.75] text-[#624f3e]">
                  The Academy reserves all legal and equitable rights available
                  under applicable intellectual property laws.
                </p>
              </section>

              {/* Penalties */}
              <section>
                <h2 className="mb-3 font-serif text-[1.45rem] font-bold text-[#f97316]">
                  Penalties for Violations
                </h2>

                <p className="mb-3 text-[0.95rem] leading-[1.75] text-[#624f3e]">
                  Any breach of this Clause constitutes a material violation of
                  the student&apos;s agreement with Enchanted Digital Academy
                  and may result in one or more of the following:
                </p>

                <ul className="list-disc space-y-2 pl-6 text-[0.95rem] leading-[1.75] text-[#624f3e]">
                  <li>Permanent removal from all Academy programmes</li>
                  <li>Immediate termination of access without refund</li>
                  <li>Liability for compensatory damages</li>
                  <li>Liability for legal fees and enforcement costs</li>
                  <li>
                    Court orders restraining further infringement
                  </li>
                  <li>
                    Additional remedies available under applicable copyright
                    and intellectual property laws
                  </li>
                </ul>

                <p className="mt-4 text-[0.95rem] leading-[1.75] text-[#624f3e]">
                  These remedies are cumulative and do not limit any other
                  rights available to Enchanted Digital Academy.
                </p>
              </section>

              {/* Reporting */}
              <section>
                <h2 className="mb-3 font-serif text-[1.45rem] font-bold text-[#f97316]">
                  Reporting Unauthorized Distribution
                </h2>

                <p className="text-[0.95rem] leading-[1.75] text-[#624f3e]">
                  Students, alumni, partners, and members of the public who
                  become aware of unauthorized copying, piracy, resale, or
                  distribution of Enchanted Digital Academy materials are
                  encouraged to report such activity immediately.
                </p>

                <p className="mt-4 text-[0.95rem] leading-[1.75] text-[#624f3e]">
                  Reports should include, where possible:
                </p>

                <ul className="mt-3 list-disc space-y-2 pl-6 text-[0.95rem] leading-[1.75] text-[#624f3e]">
                  <li>The name of the individual involved</li>
                  <li>
                    The website, social media page, or platform where the
                    material appears
                  </li>
                  <li>Screenshots or supporting evidence</li>
                  <li>Any relevant links or identifying information</li>
                </ul>

                <p className="mt-4 text-[0.95rem] leading-[1.75] text-[#624f3e]">
                  Reports should be submitted to Enchanted Digital Academy
                  through its official communication channels. All reports
                  will be treated confidentially to the extent permitted by
                  law.
                </p>
              </section>

              {/* Acknowledgement */}
              <aside className="rounded-xl border border-[#f0d6bd] bg-[#fffaf4] p-5">
                <p className="text-[0.9rem] leading-[1.75] text-[#624f3e]">
                  By enrolling in any Academy programme, the student
                  acknowledges that they have read, understood, and agreed to
                  comply with this Anti-Piracy &amp; Non-Distribution Clause.
                  Failure to comply may result in immediate disciplinary and
                  legal action.
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

export default AntiPiracyPage;