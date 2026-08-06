import { useState } from "react";
import { useForm } from "react-hook-form";

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
    formState: { errors },
  } = useForm<ApplicationFormData>({
    mode: "onBlur",
  });

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
      // Replace this with the real backend request later.
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Temporary mock response.
      // Change this to false if you want to test the error state.
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
          <h1>EDSIP Student Ambassador</h1>

          <p>
            Apply to become an EDSIP Student Ambassador and help empower
            other students.
          </p>
        </header>

        {/* ERROR MESSAGE */}

        {submissionStatus === "error" && (
          <div
            className="submission-message error-state"
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
              <p>Tell us a little about yourself.</p>
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
                  Department <span className="required">*</span>
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
              EXPERIENCE & MOTIVATION
          ========================================= */}

          <section className="form-section">
            <div className="form-section-header">
              <h2>Experience & Motivation</h2>
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
                  placeholder="Tell us why you want to become an ambassador..."
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

              {/* Leadership Experience */}

              <div className="form-group full-width">
                <label htmlFor="leadershipExperience">
                  Leadership Experience{" "}
                  <span className="required">*</span>
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
            </div>
          </section>

          {/* =========================================
              SOCIAL MEDIA
          ========================================= */}

          <section className="form-section">
            <div className="form-section-header">
              <h2>Social Media</h2>
              <p>Share your professional or social profiles.</p>
            </div>

            <div className="form-group">
              <label htmlFor="socialMediaLinks">
                Social Media Links{" "}
                <span className="required">*</span>
              </label>

              <textarea
                id="socialMediaLinks"
                placeholder="LinkedIn, X, Instagram, etc."
                {...register("socialMediaLinks", {
                  required:
                    "Please provide at least one social media link",
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
              SUBMIT
          ========================================= */}

          <div className="form-actions">
            <button
              className="submit-button"
              type="submit"
              disabled={submissionStatus === "loading"}
            >
              {submissionStatus === "loading"
                ? "Submitting..."
                : "Submit Application"}
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
                    <strong>Name</strong>
                    <span>{pendingData.fullName}</span>
                  </div>

                  <div>
                    <strong>Email</strong>
                    <span>{pendingData.email}</span>
                  </div>

                  <div>
                    <strong>University</strong>
                    <span>{pendingData.university}</span>
                  </div>

                  <div>
                    <strong>Academic Level</strong>
                    <span>
                      {pendingData.academicLevel} Level
                    </span>
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