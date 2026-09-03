import type {
  FieldErrors,
  UseFormRegister,
} from "react-hook-form";

import type { ApplicationFormData } from "../../types/application";

interface AboutYourselfProps {
  register: UseFormRegister<ApplicationFormData>;
  errors: FieldErrors<ApplicationFormData>;
}

const AboutYourself = ({
  register,
  errors,
}: AboutYourselfProps) => {
  return (
    <section className="mb-[46px]">
      {/* Section Header */}
      <div className="mb-[30px] border-b border-[#d9d4cc] pb-3.5">
        <h2 className="m-0 font-serif text-[1.05rem] font-bold leading-[1.3] text-[#171717]">
          Tell Us About Yourself
        </h2>

        <p className="mt-1.5 text-[0.82rem] leading-[1.5] text-[#777777]">
          Help us understand your motivation and what you hope to achieve
          as an EDSIP Student Ambassador.
        </p>
      </div>

      {/* Motivation */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="motivation"
          className="text-[0.88rem] font-semibold leading-[1.4] text-[#171717]"
        >
          Why do you want to become an EDSIP Student Ambassador?{" "}
          <span className="font-bold text-[#f97316]">*</span>
        </label>

        <textarea
          id="motivation"
          rows={6}
          placeholder="Tell us about your motivation..."
          {...register("motivation", {
            required: "Please tell us about your motivation",
            validate: (value) =>
              value.trim().length > 0 ||
              "Motivation cannot be empty",
          })}
          aria-invalid={!!errors.motivation}
          className={`box-border min-h-[170px] w-full resize-y rounded-[10px] border bg-[#faf9f7] px-4 py-[14px] text-[0.94rem] font-medium leading-[1.6] text-[#171717] outline-none transition-all duration-200 placeholder:font-normal placeholder:text-[#aaa49c] hover:border-[#cfc8be] hover:bg-white focus:bg-white focus:outline-none focus:ring-4 ${
            errors.motivation
              ? "border-[#dc2626] focus:border-[#dc2626] focus:ring-red-100"
              : "border-[#e1ddd7] focus:border-[#f97316] focus:ring-orange-100"
          }`}
        />

        {errors.motivation && (
          <span className="mt-px block text-[0.8rem] leading-[1.4] text-[#dc2626]">
            {errors.motivation.message}
          </span>
        )}
      </div>
    </section>
  );
};

export default AboutYourself;