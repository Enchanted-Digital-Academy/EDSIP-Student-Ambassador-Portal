import { useForm } from "react-hook-form";
import type { ApplicationFormData } from "../../types/application";

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
      termsAccepted: false, // ✅ Include this in default values
    },
  });

  const termsAccepted = watch("termsAccepted");

  return (
    <form className="application-form" onSubmit={handleSubmit(onSubmit)} noValidate>
      {/* =========================================
          PERSONAL INFORMATION
      ========================================= */}
      
      <section className="form-section">
        <div className="form-section-header">
          <h2>Personal Information</h2>
          <p>Fill in your details below. Fields marked with * are required.</p>
        </div>

        <div className="form-grid">
          {/* Full Name */}
          <div className="form-group">
            <label htmlFor="fullName">
              Full Name <span className="required">*</span>
            </label>

            <input
              id="fullName"
              type="text"
              placeholder="Enter your full name"
              {...register("fullName", {
                required: "Full name is required",
                validate: (value) =>
                  value.trim().length > 0 || "Full name cannot be empty",
              })}
              aria-invalid={!!errors.fullName}
            />

            {errors.fullName && (
              <span className="field-error">
                {errors.fullName.message}
              </span>
            )}
          </div>

          {/* Email */}
          <div className="form-group">
            <label htmlFor="email">
              Email Address <span className="required">*</span>
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
                  value.trim().length > 0 || "Email address cannot be empty",
              })}
              aria-invalid={!!errors.email}
            />

            {errors.email && (
              <span className="field-error">
                {errors.email.message}
              </span>
            )}
          </div>

          {/* Phone */}
          <div className="form-group">
            <label htmlFor="phoneNumber">
              Phone Number <span className="required">*</span>
            </label>

            <input
              id="phoneNumber"
              type="tel"
              placeholder="Enter your phone number"
              {...register("phoneNumber", {
                required: "Phone number is required",
                validate: (value) =>
                  value.trim().length > 0 || "Phone number cannot be empty",
              })}
              aria-invalid={!!errors.phoneNumber}
            />

            {errors.phoneNumber && (
              <span className="field-error">
                {errors.phoneNumber.message}
              </span>
            )}
          </div>
        </div>
      </section>

      {/* =========================================
          ACADEMIC INFORMATION
      ========================================= */}
      
      <section className="form-section">
        <div className="form-section-header">
          <h2>Academic Information</h2>
          <p>Tell us about your academic background.</p>
        </div>

        <div className="form-grid">
          {/* University */}
          <div className="form-group">
            <label htmlFor="university">
              University <span className="required">*</span>
            </label>

            <input
              id="university"
              type="text"
              placeholder="Enter your university"
              {...register("university", {
                required: "University is required",
                validate: (value) =>
                  value.trim().length > 0 || "University cannot be empty",
              })}
              aria-invalid={!!errors.university}
            />

            {errors.university && (
              <span className="field-error">
                {errors.university.message}
              </span>
            )}
          </div>

          {/* Department */}
          <div className="form-group">
            <label htmlFor="department">
              Faculty / Department <span className="required">*</span>
            </label>

            <input
              id="department"
              type="text"
              placeholder="Enter your faculty or department"
              {...register("department", {
                required: "Department is required",
                validate: (value) =>
                  value.trim().length > 0 || "Department cannot be empty",
              })}
              aria-invalid={!!errors.department}
            />

            {errors.department && (
              <span className="field-error">
                {errors.department.message}
              </span>
            )}
          </div>

          {/* Academic Level */}
          <div className="form-group">
            <label htmlFor="academicLevel">
              Academic Level <span className="required">*</span>
            </label>

            <select
              id="academicLevel"
              {...register("academicLevel", {
                required: "Academic level is required",
              })}
              aria-invalid={!!errors.academicLevel}
            >
              <option value="">Select your level</option>
              <option value="100">100 Level</option>
              <option value="200">200 Level</option>
              <option value="300">300 Level</option>
              <option value="400">400 Level</option>
              <option value="500">500 Level</option>
            </select>

            {errors.academicLevel && (
              <span className="field-error">
                {errors.academicLevel.message}
              </span>
            )}
          </div>

          {/* State */}
          <div className="form-group">
            <label htmlFor="state">
              State <span className="required">*</span>
            </label>

            <input
              id="state"
              type="text"
              placeholder="Enter your state"
              {...register("state", {
                required: "State is required",
                validate: (value) =>
                  value.trim().length > 0 || "State cannot be empty",
              })}
              aria-invalid={!!errors.state}
            />

            {errors.state && (
              <span className="field-error">
                {errors.state.message}
              </span>
            )}
          </div>
        </div>
      </section>

      {/* =========================================
          TELL US ABOUT YOURSELF
      ========================================= */}
      
      <section className="form-section">
        <div className="form-section-header">
          <h2>Tell Us About Yourself</h2>
          <p>Help us understand what drives you.</p>
        </div>

        <div className="form-grid">
          <div className="form-group full-width">
            <label htmlFor="motivation">
              Why do you want to become an EDSIP Student Ambassador?{" "}
              <span className="required">*</span>
            </label>

            <textarea
              id="motivation"
              placeholder="Tell us what motivates you to join the programme..."
              {...register("motivation", {
                required: "Motivation is required",
                validate: (value) =>
                  value.trim().length >= 20 ||
                  "Please provide at least 20 characters",
              })}
              aria-invalid={!!errors.motivation}
            />

            {errors.motivation && (
              <span className="field-error">
                {errors.motivation.message}
              </span>
            )}
          </div>
        </div>
      </section>

      {/* =========================================
          LEADERSHIP EXPERIENCE
      ========================================= */}
      
      <section className="form-section">
        <div className="form-section-header">
          <h2>Leadership Experience</h2>
          <p>
            Share any leadership roles, volunteer work, campus activities, 
            or community involvement.
          </p>
        </div>

        <div className="form-group full-width">
          <label htmlFor="leadershipExperience">
            Leadership Experience <span className="required">*</span>
          </label>

          <textarea
            id="leadershipExperience"
            placeholder="Tell us about any leadership experience you have..."
            {...register("leadershipExperience", {
              required: "Leadership experience is required",
              validate: (value) =>
                value.trim().length > 0 || "Leadership experience cannot be empty",
            })}
            aria-invalid={!!errors.leadershipExperience}
          />

          {errors.leadershipExperience && (
            <span className="field-error">
              {errors.leadershipExperience.message}
            </span>
          )}
        </div>
      </section>

      {/* =========================================
          SOCIAL MEDIA LINKS
      ========================================= */}
      
      <section className="form-section">
        <div className="form-section-header">
          <h2>Social Media Links</h2>
          <p>Share your professional or social profiles so we can learn more about you.</p>
        </div>

        <div className="form-group">
          <label htmlFor="socialMediaLinks">
            Social Media Links <span className="required">*</span>
          </label>

          <input
            id="socialMediaLinks"
            type="url"
            placeholder="https://linkedin.com/in/your-profile"
            {...register("socialMediaLinks", {
              required: "Please provide at least one social media link",
              pattern: {
                value: /^https?:\/\/.+/,
                message: "Please enter a valid URL (e.g., https://...)"
              }
            })}
            aria-invalid={!!errors.socialMediaLinks}
          />

          {errors.socialMediaLinks && (
            <span className="field-error">
              {errors.socialMediaLinks.message}
            </span>
          )}
        </div>
      </section>

      {/* =========================================
          TERMS & SUBMIT
      ========================================= */}
      
      <div className="form-actions">
        {/* Terms Checkbox */}
        <div className="terms-group">
          <label className="terms-label">
            <input
              type="checkbox"
              {...register("termsAccepted", {
                required: "You must confirm that the information is accurate",
              })}
              aria-invalid={!!errors.termsAccepted}
            />
            <span>
              I confirm that the information provided is accurate.
              <span className="required">*</span>
            </span>
          </label>

          {errors.termsAccepted && (
            <span className="field-error">
              {errors.termsAccepted.message}
            </span>
          )}
        </div>

        <button
          className="submit-button"
          type="submit"
          disabled={isSubmitting || !termsAccepted}
        >
          {isSubmitting ? "Submitting..." : "Apply now"}
        </button>
      </div>
    </form>
  );
};

export default ApplicationForm;