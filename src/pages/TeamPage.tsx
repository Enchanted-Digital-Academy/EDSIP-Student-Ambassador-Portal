import { useState } from "react";
import { teams } from "../data/teamData";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const TeamPage = () => {
  const [coloredMembers, setColoredMembers] = useState<string[]>([]);

  const toggleColor = (memberName: string) => {
    setColoredMembers((current) =>
      current.includes(memberName)
        ? current.filter((name) => name !== memberName)
        : [...current, memberName],
    );
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#f8f5ef] text-[#171717]">
        {/* Hero Section */}
        <section className="relative overflow-hidden px-6 pb-20 pt-24 sm:pb-28 sm:pt-32">
          <div className="absolute left-[-120px] top-[-100px] h-[300px] w-[300px] rounded-full bg-orange-200/40 blur-3xl" />
          <div className="absolute bottom-[-150px] right-[-100px] h-[350px] w-[350px] rounded-full bg-yellow-100/60 blur-3xl" />

          <div className="relative mx-auto max-w-4xl text-center">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-[#f97316] sm:text-sm">
              The People Behind EDSIP
            </p>

            <h1 className="font-serif text-5xl font-bold leading-[0.95] tracking-[-0.05em] sm:text-7xl lg:text-8xl">
              Meet Our
              <span className="block text-[#f97316]">Team</span>
            </h1>

            <p className="mx-auto mt-8 max-w-2xl text-base leading-7 text-[#68625b] sm:text-lg">
              Meet the talented people working together across different
              departments to build, support, and move EDSIP forward.
            </p>

            <div className="mx-auto mt-10 h-1 w-16 rounded-full bg-[#f97316]" />
          </div>
        </section>

        {/* Team Sections */}
        <section className="mx-auto w-full max-w-[1400px] px-6 pb-24 sm:px-10 lg:px-16">
          <div className="space-y-24">
            {teams.map((team) => (
              <section key={team.name}>
                {/* Department Heading */}
                <div className="mb-10 flex items-center gap-4">
                  <div className="h-px flex-1 bg-[#ddd5ca]" />

                  <div className="text-center">
                    <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#f97316]">
                      Department
                    </p>

                    <h2 className="font-serif text-2xl font-bold tracking-[-0.03em] sm:text-3xl">
                      {team.name}
                    </h2>
                  </div>

                  <div className="h-px flex-1 bg-[#ddd5ca]" />
                </div>

                {/* Members Grid */}
                <div
                  className={`grid gap-8 ${
                    team.members.length === 1
                      ? "mx-auto max-w-sm"
                      : team.members.length === 2
                        ? "mx-auto max-w-3xl sm:grid-cols-2"
                        : "sm:grid-cols-2 lg:grid-cols-3"
                  }`}
                >
                  {team.members.map((member) => {
                    const isColored = coloredMembers.includes(member.name);

                    return (
                      <article
                        key={member.name}
                        role="button"
                        tabIndex={0}
                        onClick={() => toggleColor(member.name)}
                        onKeyDown={(event) => {
                          if (
                            event.key === "Enter" ||
                            event.key === " "
                          ) {
                            event.preventDefault();
                            toggleColor(member.name);
                          }
                        }}
                        className="group cursor-pointer overflow-hidden rounded-[2rem] border border-[#e5ded3] bg-white shadow-[0_8px_30px_rgba(55,40,20,0.04)] outline-none transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_18px_45px_rgba(55,40,20,0.12)] focus:ring-2 focus:ring-[#f97316] focus:ring-offset-4"
                      >
                        {/* Image */}
                        <div className="relative aspect-[4/4.5] overflow-hidden bg-[#ebe5dc]">
                          <img
                            src={member.image}
                            alt={member.name}
                            loading="lazy"
                            className={`h-full w-full object-cover object-center transition-all duration-700 ${
                              isColored
                                ? "grayscale-0"
                                : "grayscale group-hover:grayscale-0"
                            } group-hover:scale-105`}
                          />

                          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                        </div>

                        {/* Details */}
                        <div className="px-6 py-7 text-center">
                          <h3 className="text-xl font-bold tracking-[-0.02em] text-[#171717]">
                            {member.name}
                          </h3>

                          <div className="mx-auto mt-4 h-1 w-8 rounded-full bg-[#f97316] transition-all duration-300 group-hover:w-14" />

                          <p className="mt-4 text-sm font-medium text-[#81786e]">
                            {member.department}
                          </p>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default TeamPage;