import type {
  FieldErrors,
  UseFormRegister,
} from "react-hook-form";

import type { ApplicationFormData } from "../../types/application";

interface LeadershipExperienceProps {
  register: UseFormRegister<ApplicationFormData>;
  errors: FieldErrors<ApplicationFormData>;
}

const LeadershipExperience = ({
  register,
  errors,
}: LeadershipExperienceProps) => {
  return (
    <section className="mb-[46px]">
      {/* Section Header */}
      <div className="mb-[30px] border-b border-[#d9d4cc] pb-3.5">
        <h2 className="m-0 font-serif text-[1.05rem] font-bold leading-[1.3] text-[#171717]">
          Leadership Experience
        </h2>

        <p className="mt-1.5 text-[0.82rem] leading-[1.5] text-[#777777]">
          Tell us about any leadership roles or experiences you have had.
        </p>
      </div>

      {/* Leadership Experience */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="leadershipExperience"
          className="text-[0.88rem] font-semibold leading-[1.4] text-[#171717]"
        >
          Describe your leadership experience{" "}
          <span className="font-bold text-[#f97316]">*</span>
        </label>

        <textarea
          id="leadershipExperience"
          rows={6}
          placeholder="Tell us about your leadership experience..."
          {...register("leadershipExperience", {
            required: "Please describe your leadership experience",
            validate: (value) =>
              value.trim().length > 0 ||
              "Leadership experience cannot be empty",
          })}
          aria-invalid={!!errors.leadershipExperience}
          className={`box-border min-h-[170px] w-full resize-y rounded-[10px] border bg-[#faf9f7] px-4 py-[14px] text-[0.94rem] font-medium leading-[1.6] text-[#171717] outline-none transition-all duration-200 placeholder:font-normal placeholder:text-[#aaa49c] hover:border-[#cfc8be] hover:bg-white focus:bg-white focus:outline-none focus:ring-4 ${
            errors.leadershipExperience
              ? "border-[#dc2626] focus:border-[#dc2626] focus:ring-red-100"
              : "border-[#e1ddd7] focus:border-[#f97316] focus:ring-orange-100"
          }`}
        />

        {errors.leadershipExperience && (
          <span className="mt-px block text-[0.8rem] leading-[1.4] text-[#dc2626]">
            {errors.leadershipExperience.message}
          </span>
        )}
      </div>
    </section>
  );
};

export default LeadershipExperience;