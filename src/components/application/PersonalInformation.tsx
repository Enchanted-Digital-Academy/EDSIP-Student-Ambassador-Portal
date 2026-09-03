import type {
  FieldErrors,
  UseFormRegister,
} from "react-hook-form";

import type { ApplicationFormData } from "../../types/application";

interface PersonalInformationProps {
  register: UseFormRegister<ApplicationFormData>;
  errors: FieldErrors<ApplicationFormData>;
}

const PersonalInformation = ({
  register,
  errors,
}: PersonalInformationProps) => {
  const inputBaseClass =
    "box-border w-full rounded-[10px] border bg-[#faf9f7] px-4 py-[14px] text-[0.94rem] font-medium leading-[1.5] text-[#171717] outline-none transition-all duration-200 placeholder:font-normal placeholder:text-[#aaa49c] hover:border-[#cfc8be] hover:bg-white focus:bg-white focus:outline-none focus:ring-4";

  return (
    <section className="mb-[46px]">
      {/* Section Header */}
      <div className="mb-[30px] border-b border-[#d9d4cc] pb-3.5">
        <h2 className="m-0 font-serif text-[1.05rem] font-bold leading-[1.3] text-[#171717]">
          Personal Information
        </h2>
      </div>

      {/* Form Fields */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-x-[22px] md:gap-y-[26px]">
        {/* Full Name */}
        <div className="flex min-w-0 flex-col gap-2">
          <label
            htmlFor="fullName"
            className="text-[0.88rem] font-semibold leading-[1.4] text-[#171717]"
          >
            Full Name{" "}
            <span className="font-bold text-[#f97316]">*</span>
          </label>

          <input
            id="fullName"
            type="text"
            placeholder="Enter your full name"
            {...register("fullName", {
              required: "Full name is required",
              validate: (value) =>
                value.trim().length > 0 ||
                "Full name cannot be empty",
            })}
            aria-invalid={!!errors.fullName}
            className={`${inputBaseClass} ${
              errors.fullName
                ? "border-[#dc2626] focus:border-[#dc2626] focus:ring-red-100"
                : "border-[#e1ddd7] focus:border-[#f97316] focus:ring-orange-100"
            }`}
          />

          {errors.fullName && (
            <span className="mt-px block text-[0.8rem] leading-[1.4] text-[#dc2626]">
              {errors.fullName.message}
            </span>
          )}
        </div>

        {/* Email */}
        <div className="flex min-w-0 flex-col gap-2">
          <label
            htmlFor="email"
            className="text-[0.88rem] font-semibold leading-[1.4] text-[#171717]"
          >
            Email Address{" "}
            <span className="font-bold text-[#f97316]">*</span>
          </label>

          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            {...register("email", {
              required: "Email address is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email address",
              },
              validate: (value) =>
                value.trim().length > 0 ||
                "Email address cannot be empty",
            })}
            aria-invalid={!!errors.email}
            className={`${inputBaseClass} ${
              errors.email
                ? "border-[#dc2626] focus:border-[#dc2626] focus:ring-red-100"
                : "border-[#e1ddd7] focus:border-[#f97316] focus:ring-orange-100"
            }`}
          />

          {errors.email && (
            <span className="mt-px block text-[0.8rem] leading-[1.4] text-[#dc2626]">
              {errors.email.message}
            </span>
          )}
        </div>

        {/* Phone Number */}
        <div className="flex min-w-0 flex-col gap-2">
          <label
            htmlFor="phoneNumber"
            className="text-[0.88rem] font-semibold leading-[1.4] text-[#171717]"
          >
            Phone Number{" "}
            <span className="font-bold text-[#f97316]">*</span>
          </label>

          <input
            id="phoneNumber"
            type="tel"
            placeholder="Enter your phone number"
            {...register("phoneNumber", {
              required: "Phone number is required",
              validate: (value) =>
                value.trim().length > 0 ||
                "Phone number cannot be empty",
            })}
            aria-invalid={!!errors.phoneNumber}
            className={`${inputBaseClass} ${
              errors.phoneNumber
                ? "border-[#dc2626] focus:border-[#dc2626] focus:ring-red-100"
                : "border-[#e1ddd7] focus:border-[#f97316] focus:ring-orange-100"
            }`}
          />

          {errors.phoneNumber && (
            <span className="mt-px block text-[0.8rem] leading-[1.4] text-[#dc2626]">
              {errors.phoneNumber.message}
            </span>
          )}
        </div>
      </div>
    </section>
  );
};

export default PersonalInformation;