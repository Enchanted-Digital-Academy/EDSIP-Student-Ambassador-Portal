import { useForm } from "react-hook-form";
import type { ApplicationFormData } from "../../types/application";

import PersonalInformation from "./PersonalInformation";
import AcademicInformation from "./AcademicInformation";
import AboutYourself from "./AboutYourself";
import LeadershipExperience from "./LeadershipExperience";
import SocialMediaLinks from "./SocialMediaLinks";
import TermsAndSubmit from "./TermsAndSubmit";

interface ApplicationFormProps {
  onSubmit: (data: ApplicationFormData) => void;
  isSubmitting: boolean;
}

const ApplicationForm = ({
  onSubmit,
  isSubmitting,
}: ApplicationFormProps) => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<ApplicationFormData>({
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      university: "",
      department: "",
      academicLevel: "",
      state: "",
      motivation: "",
      leadershipExperience: "",
      socialMediaLinks: "",
      termsAccepted: false,
    },
  });

  return (
    <form
      className="box-border w-full rounded-[20px] border border-[#d9d4cc] bg-white px-6 py-8 shadow-[0_12px_35px_rgba(60,45,25,0.04),0_2px_8px_rgba(60,45,25,0.02)] md:px-12 md:py-[52px]"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      {/* Form Introduction */}
      <div className="mb-12 text-center">
        <h2 className="mb-2.5 font-serif text-[1.7rem] font-bold tracking-[-0.02em] text-[#f97316]">
          Application Form
        </h2>

        <p className="text-[0.92rem] leading-[1.6] text-[#666666]">
          Fill in your details below. Fields marked with * are required.
        </p>
      </div>

      {/* Personal Information */}
      <PersonalInformation
        register={register}
        errors={errors}
      />

      {/* Academic Information */}
      <AcademicInformation
        register={register}
        errors={errors}
        watch={watch}
        setValue={setValue}
      />

      {/* About Yourself */}
      <AboutYourself
        register={register}
        errors={errors}
      />

      {/* Leadership Experience */}
      <LeadershipExperience
        register={register}
        errors={errors}
      />

      {/* Social Media Links */}
      <SocialMediaLinks
        register={register}
        errors={errors}
      />

      {/* Terms and Submit */}
      <TermsAndSubmit
        register={register}
        errors={errors}
        isSubmitting={isSubmitting}
      />
    </form>
  );
};

export default ApplicationForm;