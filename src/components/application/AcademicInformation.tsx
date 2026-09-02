import { useState } from "react";
import type {
  FieldErrors,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";

import type { ApplicationFormData } from "../../types/application";

interface AcademicInformationProps {
  register: UseFormRegister<ApplicationFormData>;
  errors: FieldErrors<ApplicationFormData>;
  watch: UseFormWatch<ApplicationFormData>;
  setValue: UseFormSetValue<ApplicationFormData>;
}

const AcademicInformation = ({
  register,
  errors,
  watch,
  setValue,
}: AcademicInformationProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const academicLevel = watch("academicLevel");

  const levels = ["100", "200", "300", "400", "500"];

  const handleSelect = (level: string) => {
    setValue("academicLevel", level, {
      shouldValidate: true,
      shouldDirty: true,
    });

    setIsOpen(false);
  };

  const inputBaseClass =
    "box-border w-full rounded-[10px] border bg-[#faf9f7] px-4 py-[14px] text-[0.94rem] font-medium leading-[1.5] text-[#171717] outline-none transition-all duration-200 placeholder:font-normal placeholder:text-[#aaa49c] hover:border-[#cfc8be] hover:bg-white focus:bg-white focus:outline-none focus:ring-4";

  return (
    <section className="mb-[46px]">
      {/* Section Header */}
      <div className="mb-[30px] border-b border-[#d9d4cc] pb-3.5">
        <h2 className="m-0 font-serif text-[1.05rem] font-bold leading-[1.3] text-[#171717]">
          Academic Information
        </h2>
      </div>

      {/* Form Fields */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-x-[22px] md:gap-y-[26px]">
        {/* University */}
        <div className="flex min-w-0 flex-col gap-2">
          <label
            htmlFor="university"
            className="text-[0.88rem] font-semibold leading-[1.4] text-[#171717]"
          >
            University{" "}
            <span className="font-bold text-[#f97316]">*</span>
          </label>

          <input
            id="university"
            type="text"
            placeholder="Enter your university"
            {...register("university", {
              required: "University is required",
              validate: (value) =>
                value.trim().length > 0 ||
                "University cannot be empty",
            })}
            aria-invalid={!!errors.university}
            className={`${inputBaseClass} ${
              errors.university
                ? "border-[#dc2626] focus:border-[#dc2626] focus:ring-red-100"
                : "border-[#e1ddd7] focus:border-[#f97316] focus:ring-orange-100"
            }`}
          />

          {errors.university && (
            <span className="mt-px block text-[0.8rem] leading-[1.4] text-[#dc2626]">
              {errors.university.message}
            </span>
          )}
        </div>

        {/* Department */}
        <div className="flex min-w-0 flex-col gap-2">
          <label
            htmlFor="department"
            className="text-[0.88rem] font-semibold leading-[1.4] text-[#171717]"
          >
            Department{" "}
            <span className="font-bold text-[#f97316]">*</span>
          </label>

          <input
            id="department"
            type="text"
            placeholder="Enter your department"
            {...register("department", {
              required: "Department is required",
              validate: (value) =>
                value.trim().length > 0 ||
                "Department cannot be empty",
            })}
            aria-invalid={!!errors.department}
            className={`${inputBaseClass} ${
              errors.department
                ? "border-[#dc2626] focus:border-[#dc2626] focus:ring-red-100"
                : "border-[#e1ddd7] focus:border-[#f97316] focus:ring-orange-100"
            }`}
          />

          {errors.department && (
            <span className="mt-px block text-[0.8rem] leading-[1.4] text-[#dc2626]">
              {errors.department.message}
            </span>
          )}
        </div>

        {/* Academic Level */}
        <div className="relative flex min-w-0 flex-col gap-2">
          <label
            htmlFor="academic-level-trigger"
            className="text-[0.88rem] font-semibold leading-[1.4] text-[#171717]"
          >
            Academic Level{" "}
            <span className="font-bold text-[#f97316]">*</span>
          </label>

          {/* Hidden registered field */}
          <input
            type="hidden"
            {...register("academicLevel", {
              required: "Academic level is required",
            })}
          />

          {/* Custom Dropdown */}
          <button
            id="academic-level-trigger"
            type="button"
            aria-haspopup="listbox"
            aria-expanded={isOpen}
            aria-invalid={!!errors.academicLevel}
            onClick={() => setIsOpen((open) => !open)}
            className={`flex w-full items-center justify-between rounded-[10px] border bg-[#faf9f7] px-4 py-[14px] text-left text-[0.94rem] font-medium leading-[1.5] outline-none transition-all duration-200 hover:border-[#cfc8be] hover:bg-white focus:bg-white focus:outline-none focus:ring-4 ${
              errors.academicLevel
                ? "border-[#dc2626] focus:border-[#dc2626] focus:ring-red-100"
                : "border-[#e1ddd7] focus:border-[#f97316] focus:ring-orange-100"
            }`}
          >
            <span
              className={
                academicLevel
                  ? "text-[#171717]"
                  : "font-normal text-[#aaa49c]"
              }
            >
              {academicLevel
                ? `${academicLevel} Level`
                : "Select your academic level"}
            </span>

            <span
              className={`ml-3 text-[#666666] transition-transform duration-200 ${
                isOpen ? "rotate-180" : ""
              }`}
              aria-hidden="true"
            >
              ▾
            </span>
          </button>

          {/* Dropdown Options */}
          {isOpen && (
            <div
              role="listbox"
              aria-label="Academic level"
              className="absolute left-0 right-0 top-full z-20 mt-2 overflow-hidden rounded-[10px] border border-[#d9d4cc] bg-white shadow-[0_12px_30px_rgba(60,45,25,0.12)]"
            >
              {levels.map((level) => (
                <button
                  key={level}
                  type="button"
                  role="option"
                  aria-selected={academicLevel === level}
                  onClick={() => handleSelect(level)}
                  className={`block w-full px-4 py-3 text-left text-[0.92rem] text-[#171717] transition-colors hover:bg-[#f7f5f1] ${
                    academicLevel === level
                      ? "bg-[#fff7ed] font-semibold text-[#f97316]"
                      : ""
                  }`}
                >
                  {level} Level
                </button>
              ))}
            </div>
          )}

          {errors.academicLevel && (
            <span className="mt-px block text-[0.8rem] leading-[1.4] text-[#dc2626]">
              {errors.academicLevel.message}
            </span>
          )}
        </div>

        {/* State */}
        <div className="flex min-w-0 flex-col gap-2">
          <label
            htmlFor="state"
            className="text-[0.88rem] font-semibold leading-[1.4] text-[#171717]"
          >
            State{" "}
            <span className="font-bold text-[#f97316]">*</span>
          </label>

          <input
            id="state"
            type="text"
            placeholder="Enter your state"
            {...register("state", {
              required: "State is required",
              validate: (value) =>
                value.trim().length > 0 ||
                "State cannot be empty",
            })}
            aria-invalid={!!errors.state}
            className={`${inputBaseClass} ${
              errors.state
                ? "border-[#dc2626] focus:border-[#dc2626] focus:ring-red-100"
                : "border-[#e1ddd7] focus:border-[#f97316] focus:ring-orange-100"
            }`}
          />

          {errors.state && (
            <span className="mt-px block text-[0.8rem] leading-[1.4] text-[#dc2626]">
              {errors.state.message}
            </span>
          )}
        </div>
      </div>
    </section>
  );
};

export default AcademicInformation;