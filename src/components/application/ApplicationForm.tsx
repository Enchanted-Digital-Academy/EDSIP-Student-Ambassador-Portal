import { useForm } from "react-hook-form";
import type { ApplicationFormData } from "../../types/application";

const ApplicationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ApplicationFormData>();

  const onSubmit = async (data: ApplicationFormData) => {
    console.log("Application submitted:", data);

    // Temporary mock API request.
    // This will be replaced with the real backend API later.
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Application processed successfully");
  };

  return (
    <form className="application-form" onSubmit={handleSubmit(onSubmit)}>
      {/* Personal Information */}
      <section className="form-section">
        <h2>Personal Information</h2>

        <div className="form-grid">
          <div className="form-field">
            <label htmlFor="fullName">Full Name</label>

            <input
              id="fullName"
              type="text"
              placeholder="Enter your full name"
              {...register("fullName", {
                required: "Full name is required",
              })}
            />

            {errors.fullName && (
              <span className="form-error">
                {errors.fullName.message}
              </span>
            )}
          </div>

          <div className="form-field">
            <label htmlFor="email">Email Address</label>

            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Please enter a valid email address",
                },
              })}
            />

            {errors.email && (
              <span className="form-error">
                {errors.email.message}
              </span>
            )}
          </div>

          <div className="form-field">
            <label htmlFor="phoneNumber">Phone Number</label>

            <input
              id="phoneNumber"
              type="tel"
              placeholder="Enter your phone number"
              {...register("phoneNumber", {
                required: "Phone number is required",
              })}
            />

            {errors.phoneNumber && (
              <span className="form-error">
                {errors.phoneNumber.message}
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Academic Information */}
      <section className="form-section">
        <h2>Academic Information</h2>

        <div className="form-grid">
          <div className="form-field">
            <label htmlFor="university">University</label>

            <input
              id="university"
              type="text"
              placeholder="Enter your university"
              {...register("university", {
                required: "University is required",
              })}
            />

            {errors.university && (
              <span className="form-error">
                {errors.university.message}
              </span>
            )}
          </div>

          <div className="form-field">
            <label htmlFor="department">Department</label>

            <input
              id="department"
              type="text"
              placeholder="Enter your department"
              {...register("department", {
                required: "Department is required",
              })}
            />

            {errors.department && (
              <span className="form-error">
                {errors.department.message}
              </span>
            )}
          </div>

          <div className="form-field">
            <label htmlFor="academicLevel">Academic Level</label>

            <select
              id="academicLevel"
              {...register("academicLevel", {
                required: "Academic level is required",
              })}
            >
              <option value="">Select your level</option>
              <option value="100">100 Level</option>
              <option value="200">200 Level</option>
              <option value="300">300 Level</option>
              <option value="400">400 Level</option>
              <option value="500">500 Level</option>
            </select>

            {errors.academicLevel && (
              <span className="form-error">
                {errors.academicLevel.message}
              </span>
            )}
          </div>

          <div className="form-field">
            <label htmlFor="state">State</label>

            <input
              id="state"
              type="text"
              placeholder="Enter your state"
              {...register("state", {
                required: "State is required",
              })}
            />

            {errors.state && (
              <span className="form-error">
                {errors.state.message}
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Experience & Motivation */}
      <section className="form-section">
        <h2>Experience & Motivation</h2>

        <div className="form-grid">
          <div className="form-field full-width">
            <label htmlFor="motivation">
              Why do you want to become an EDSIP Student Ambassador?
            </label>

            <textarea
              id="motivation"
              placeholder="Tell us why you want to become an ambassador..."
              {...register("motivation", {
                required: "Motivation is required",
                minLength: {
                  value: 50,
                  message: "Please provide at least 50 characters",
                },
              })}
            />

            {errors.motivation && (
              <span className="form-error">
                {errors.motivation.message}
              </span>
            )}
          </div>

          <div className="form-field full-width">
            <label htmlFor="leadershipExperience">
              Leadership Experience
            </label>

            <textarea
              id="leadershipExperience"
              placeholder="Tell us about any leadership experience you have..."
              {...register("leadershipExperience", {
                required: "Please describe your leadership experience",
              })}
            />

            {errors.leadershipExperience && (
              <span className="form-error">
                {errors.leadershipExperience.message}
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="form-section">
        <h2>Social Media</h2>

        <div className="form-grid">
          <div className="form-field full-width">
            <label htmlFor="socialMediaLinks">
              Social Media Links
            </label>

            <textarea
              id="socialMediaLinks"
              placeholder="LinkedIn, X, Instagram, etc."
              {...register("socialMediaLinks")}
            />
          </div>
        </div>
      </section>

      <button
        className="submit-button"
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting..." : "Submit Application"}
      </button>
    </form>
  );
};

export default ApplicationForm;