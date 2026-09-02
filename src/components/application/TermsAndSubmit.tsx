import type {
  FieldErrors,
  UseFormRegister,
} from "react-hook-form";

import type { ApplicationFormData } from "../../types/application";

interface TermsAndSubmitProps {
  register: UseFormRegister<ApplicationFormData>;
  errors: FieldErrors<ApplicationFormData>;
  isSubmitting: boolean;
}

const TermsAndSubmit = ({
  register,
  errors,
  isSubmitting,
}: TermsAndSubmitProps) => {
  return (
    <div className="mt-10 border-t border-[#eeeae3] pt-7 text-center">
      <div className="mb-6 text-left">
        <label className="flex cursor-pointer items-start gap-2.5 text-[0.88rem] leading-[1.5] text-[#171717]">
          <input
            type="checkbox"
            {...register("termsAccepted", {
              required:
                "You must confirm that the information is accurate",
            })}
            aria-invalid={!!errors.termsAccepted}
            className="mt-0.5 h-[17px] w-[17px] shrink-0 cursor-pointer accent-[#f97316]"
          />

          <span>
            I confirm that the information provided is accurate.
            <span className="font-bold text-[#f97316]">*</span>
          </span>
        </label>

        {errors.termsAccepted && (
          <span className="mt-px block text-[0.8rem] leading-[1.4] text-[#dc2626]">
            {errors.termsAccepted.message}
          </span>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="min-w-[110px] rounded-lg border border-[#f97316] bg-[#f97316] px-6 py-3 text-[0.95rem] font-bold text-white transition hover:-translate-y-px hover:border-[#ea580c] hover:bg-[#ea580c] hover:shadow-[0_8px_20px_rgba(249,115,22,0.2)] disabled:transform-none disabled:cursor-not-allowed disabled:opacity-60 disabled:shadow-none"
      >
        {isSubmitting ? "Submitting..." : "Apply now"}
      </button>
    </div>
  );
};

export default TermsAndSubmit;