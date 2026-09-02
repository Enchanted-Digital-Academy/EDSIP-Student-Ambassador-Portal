import type {
  FieldErrors,
  UseFormRegister,
} from "react-hook-form";

import type { ApplicationFormData } from "../../types/application";

interface SocialMediaLinksProps {
  register: UseFormRegister<ApplicationFormData>;
  errors: FieldErrors<ApplicationFormData>;
}

const SocialMediaLinks = ({
  register,
  errors,
}: SocialMediaLinksProps) => {
  return (
    <section className="mb-[46px]">
      {/* Section Header */}
      <div className="mb-[30px] border-b border-[#d9d4cc] pb-3.5">
        <h2 className="m-0 font-serif text-[1.05rem] font-bold leading-[1.3] text-[#171717]">
          Social Media Links
        </h2>

        <p className="mt-1.5 text-[0.82rem] leading-[1.5] text-[#777777]">
          Share a link to your social media profile.
        </p>
      </div>

      {/* Social Media URL */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="socialMediaLinks"
          className="text-[0.88rem] font-semibold leading-[1.4] text-[#171717]"
        >
          Social Media Profile{" "}
          <span className="font-bold text-[#f97316]">*</span>
        </label>

        <input
          id="socialMediaLinks"
          type="text"
          placeholder="https://instagram.com/yourusername"
          {...register("socialMediaLinks", {
            required: "Social media profile is required",
            validate: (value) =>
              value.trim().length > 0 ||
              "Social media profile cannot be empty",
          })}
          aria-invalid={!!errors.socialMediaLinks}
          className={`box-border w-full rounded-[10px] border bg-[#faf9f7] px-4 py-[14px] text-[0.94rem] font-medium leading-[1.5] text-[#171717] outline-none transition-all duration-200 placeholder:font-normal placeholder:text-[#aaa49c] hover:border-[#cfc8be] hover:bg-white focus:bg-white focus:outline-none focus:ring-4 ${
            errors.socialMediaLinks
              ? "border-[#dc2626] focus:border-[#dc2626] focus:ring-red-100"
              : "border-[#e1ddd7] focus:border-[#f97316] focus:ring-orange-100"
          }`}
        />

        {errors.socialMediaLinks && (
          <span className="mt-px block text-[0.8rem] leading-[1.4] text-[#dc2626]">
            {errors.socialMediaLinks.message}
          </span>
        )}
      </div>
    </section>
  );
};

export default SocialMediaLinks;