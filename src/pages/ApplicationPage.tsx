import { useState } from "react";
import { useForm } from "react-hook-form";

import bulbImage from "../assets/bulb.png"; 

export interface ApplicationFormData {
  fullName: string;
  email: string;
  phoneNumber: string;
  university: string;
  department: string;
  academicLevel: string;
  state: string;
  motivation: string;
  leadershipExperience: string;
  socialMediaLinks: string; 
  termsAccepted: boolean; 
}

type SubmissionStatus = "idle" | "loading" | "success" | "error";

const ApplicationPage = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [submissionStatus, setSubmissionStatus] =
    useState<SubmissionStatus>("idle");
  const [pendingData, setPendingData] =
    useState<ApplicationFormData | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<ApplicationFormData>({
    mode: "onBlur",
    defaultValues: {
      termsAccepted: false,
    },
  });

  const termsAccepted = watch("termsAccepted");

  // Runs after the form passes validation
  const onValidForm = (data: ApplicationFormData) => {
    console.log("Application ready for confirmation:", data);

    setPendingData(data);
    setShowConfirmation(true);
  };

  // Handles the final confirmation
  const handleConfirmSubmission = async () => {
    if (!pendingData) return;

    console.log("Submitting application:", pendingData);

    setShowConfirmation(false);
    setSubmissionStatus("loading");

    try {
      // Temporary mock API request.
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Temporary mock response.
      const response = {
        ok: true,
      };

      if (!response.ok) {
        throw new Error("Application submission failed");
      }

      console.log(
        "Application submitted successfully:",
        pendingData
      );

      // Clear the form after successful submission
      reset();
      setPendingData(null);
      setSubmissionStatus("success");
    } catch (error) {
      console.error("Application submission failed:", error);
      setSubmissionStatus("error");
    }
  };

  // Retry after an error
  const handleRetry = () => {
    setSubmissionStatus("idle");
    setShowConfirmation(false);
  };

  // ------------------------------------------
  // SUCCESS SCREEN
  // ------------------------------------------

  if (submissionStatus === "success") {
    return (
      <main className="application-page">
        <div className="application-container">
          <section className="success-page">
            <div className="success-icon" aria-hidden="true">
              ✓
            </div>

            <div className="success-content">
              <span className="success-label">
                Application Received
              </span>

              <h1>You're officially in the running!</h1>

              <p>
                Thank you for applying to become an EDSIP Student
                Ambassador. Your application has been submitted
                successfully.
              </p>

              <p>
                Our team will review your application and contact you
                with the next steps.
              </p>
            </div>

            <div className="success-actions">
              <button
                type="button"
                className="success-button"
                onClick={() => {
                  setSubmissionStatus("idle");
                  reset();
                }}
              >
                Submit Another Application
              </button>
            </div>
          </section>
        </div>
      </main>
    );
  }

  // ------------------------------------------
  // APPLICATION FORM
  // ------------------------------------------

  return (
    <main className="application-page">
      <div className="application-container">
        <header className="application-header">
          
          {/* ✅ 2. ADD THE IMAGE HERE */}
          <img 
            src={bulbImage} 
            alt="EDSIP Ambassador Bulb" 
            style={{ 
              width: "180px", 
              height: "auto", 
              marginBottom: "20px",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto"
            }} 
          />

          <h1>Become an EDSIP Student Ambassador</h1>

          <p>
            Complete the application below to join a community of student 
            leaders promoting career opportunities and making an impact on campus.
          </p>
        </header>

        {/* ERROR MESSAGE */}

        {submissionStatus === "error" && (
          <div
            className="submission-message"
            role="alert"
          >
            <h2>Something went wrong</h2>

            <p>
              We couldn't submit your application. Please try again.
            </p>

            <button
              type="button"
              className="retry-button"
              onClick={handleRetry}
            >
              Try Again
            </button>
          </div>
        )}

        <form
          className="application-form"
          onSubmit={handleSubmit(onValidForm)}
          noValidate
        >
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
                      value.trim().length > 0 ||
                      "Full name cannot be empty",
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
                      value.trim().length > 0 ||
                      "Email address cannot be empty",
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
                      value.trim().length > 0 ||
                      "Phone number cannot be empty",
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
                      value.trim().length > 0 ||
                      "University cannot be empty",
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
                      value.trim().length > 0 ||
                      "Department cannot be empty",
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
                      value.trim().length > 0 ||
                      "State cannot be empty",
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
              {/* Motivation */}

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
              <p>Share any leadership roles, volunteer work, campus activities, or community involvement.</p>
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
                    value.trim().length > 0 ||
                    "Leadership experience cannot be empty",
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
              disabled={submissionStatus === "loading" || !termsAccepted}
            >
              {submissionStatus === "loading"
                ? "Submitting..."
                : "Apply now"}
            </button>
          </div>
        </form>

        {/* =========================================
            CONFIRMATION MODAL
        ========================================= */}

        {showConfirmation && pendingData && (
          <div
            className="modal-overlay"
            role="presentation"
            onClick={() => setShowConfirmation(false)}
          >
            <div
              className="confirmation-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="confirmation-title"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="modal-header">
                <h2 id="confirmation-title">
                  Confirm Your Application
                </h2>

                <button
                  type="button"
                  className="modal-close"
                  onClick={() => setShowConfirmation(false)}
                  aria-label="Close confirmation dialog"
                >
                  ×
                </button>
              </div>

              <div className="modal-content">
                <p>
                  Please review your information before submitting your
                  application.
                </p>

                <div className="confirmation-summary">
                  <div>
                    <strong>Full Name</strong>
                    <span>{pendingData.fullName}</span>
                  </div>

                  <div>
                    <strong>Email</strong>
                    <span>{pendingData.email}</span>
                  </div>

                  <div>
                    <strong>Phone</strong>
                    <span>{pendingData.phoneNumber}</span>
                  </div>

                  <div>
                    <strong>University</strong>
                    <span>{pendingData.university}</span>
                  </div>

                  <div>
                    <strong>Department</strong>
                    <span>{pendingData.department}</span>
                  </div>

                  <div>
                    <strong>Academic Level</strong>
                    <span>
                      {pendingData.academicLevel} Level
                    </span>
                  </div>

                  <div>
                    <strong>State</strong>
                    <span>{pendingData.state}</span>
                  </div>
                </div>
              </div>

              <div className="modal-actions">
                <button
                  type="button"
                  className="modal-cancel"
                  onClick={() => setShowConfirmation(false)}
                  disabled={submissionStatus === "loading"}
                >
                  Go Back
                </button>

                <button
                  type="button"
                  className="modal-confirm"
                  onClick={handleConfirmSubmission}
                  disabled={submissionStatus === "loading"}
                >
                  {submissionStatus === "loading"
                    ? "Submitting..."
                    : "Confirm & Submit"}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default ApplicationPage;