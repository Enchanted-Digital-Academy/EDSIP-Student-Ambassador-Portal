import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  CheckCircle2,
  Hourglass,
  ArrowRight,
} from "lucide-react";

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
    setValue,
    formState: { errors },
  } = useForm<ApplicationFormData>({
    mode: "onBlur",
    defaultValues: {
      termsAccepted: false,
      academicLevel: "",
    },
  });

  const termsAccepted = watch("termsAccepted");

  const onValidForm = (data: ApplicationFormData) => {
    console.log("Application ready for confirmation:", data);

    setPendingData(data);
    setShowConfirmation(true);
  };

  const handleConfirmSubmission = async () => {
    if (!pendingData) return;

    const fixedData = { ...pendingData };
    const trimmedLink = fixedData.socialMediaLinks.trim();

    if (trimmedLink.startsWith("@")) {
      fixedData.socialMediaLinks = `https://${trimmedLink.substring(1)}`;
    } else if (
      !trimmedLink.startsWith("http://") &&
      !trimmedLink.startsWith("https://")
    ) {
      fixedData.socialMediaLinks = `https://${trimmedLink}`;
    }

    console.log("Submitting application:", fixedData);

    setShowConfirmation(false);
    setSubmissionStatus("loading");

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      const response = { ok: true };

      if (!response.ok) {
        throw new Error("Application submission failed");
      }

      console.log("Application submitted successfully:", fixedData);

      reset();
      setPendingData(null);
      setSubmissionStatus("success");
    } catch (error) {
      console.error("Application submission failed:", error);
      setSubmissionStatus("error");
    }
  };

  const handleRetry = () => {
    setSubmissionStatus("idle");
    setShowConfirmation(false);
  };

  const handleSubmitAnother = () => {
    reset();
    setPendingData(null);
    setSubmissionStatus("idle");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // =========================================================
  // SUCCESS SCREEN
  // =========================================================

  if (submissionStatus === "success") {
    return (
      <main className="success-screen">

        {/* =================================================
            HERO
        ================================================= */}

        <section className="success-hero">
          <div className="success-hero-decoration success-dot" />
          <div className="success-hero-decoration success-diamond" />
          <div className="success-hero-decoration success-hexagon" />

          <div className="success-hero-content">
            <div className="success-hero-copy">
              <span className="success-eyebrow">
                Application Submitted
              </span>

              <h1>
                Successfully!
              </h1>

              <p>
                Thank you for applying to become an EDSIP Student Ambassador.
                Your application has been received and is now under review.
              </p>
            </div>

            <div className="success-hero-image">
              <img
                src={bulbImage}
                alt="EDSIP Student Ambassador"
              />
            </div>
          </div>
        </section>

        {/* =================================================
            CONFIRMATION
        ================================================= */}

        <section className="success-confirmation-section">
          <div className="success-confirmation-card">

            <div className="success-check-icon">
              <CheckCircle2 size={58} strokeWidth={1.8} />
            </div>

            <h2>
              We've received your
              <br />
              application
            </h2>

            <p>
              Your application has been submitted successfully.
              We'll carefully review your information and contact you
              if you're selected for the next stage.
            </p>

          </div>
        </section>

        {/* =================================================
            WHAT HAPPENS NEXT
        ================================================= */}

        <section className="success-next-section">

          <div className="success-section-heading">
            <h2>What Happens Next?</h2>
          </div>

          <div className="success-timeline">

            {/* STEP 1 */}

            <div className="success-timeline-item">

              <div className="timeline-number">
                1
              </div>

              <div className="timeline-content">
                <h3>Application Review</h3>

                <p>
                  Our team reviews all submitted applications.
                </p>
              </div>

            </div>

            {/* STEP 2 */}

            <div className="success-timeline-item">

              <div className="timeline-number">
                2
              </div>

              <div className="timeline-content">
                <h3>Selection</h3>

                <p>
                  Shortlisted applicants will receive an email invitation.
                </p>
              </div>

            </div>

            {/* STEP 3 */}

            <div className="success-timeline-item">

              <div className="timeline-number">
                3
              </div>

              <div className="timeline-content">
                <h3>Onboarding</h3>

                <p>
                  Selected ambassadors will attend onboarding and begin
                  representing EDSIP.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* =================================================
            REVIEW TIMELINE
        ================================================= */}

        <section className="success-review-section">

          <div className="success-review-card">

            <div className="review-icon">
              <Hourglass size={58} strokeWidth={1.8} />
            </div>

            <h2>
              Application Review
              <br />
              Timeline
            </h2>

            <p>
              You can expect to hear from us within
              <strong> 5–7 business days.</strong>
            </p>

            <button
              type="button"
              className="success-home-button"
              onClick={handleSubmitAnother}
            >
              Return to Homepage
              <ArrowRight size={16} />
            </button>

          </div>

        </section>

      </main>
    );
  }

  // =========================================================
  // APPLICATION FORM
  // =========================================================

  return (
    <main className="application-page">

      <div className="application-container">

        {/* =================================================
            HEADER
        ================================================= */}

        <header className="application-header">

          <div className="bulb-image-wrapper">

            <img
              src={bulbImage}
              alt="EDSIP Ambassador Bulb"
              className="bulb-img"
            />

          </div>

          <h1>
            <span className="highlight-orange">
              Become an EDSIP
            </span>
            <br />
            Student Ambassador
          </h1>

        </header>

        {/* =================================================
            ERROR MESSAGE
        ================================================= */}

        {submissionStatus === "error" && (
          <div className="submission-message" role="alert">

            <h2>
              Something went wrong
            </h2>

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

        {/* =================================================
            FORM
        ================================================= */}

        <form
          className="application-form"
          onSubmit={handleSubmit(onValidForm)}
          noValidate
        >

          <div className="application-form-intro">

            <h2 className="application-form-title">
              Application Form
            </h2>

            <p className="application-form-subtitle">
              Fill in your details below. Fields marked with * are required.
            </p>

          </div>

          {/* =================================================
              PERSONAL INFORMATION
          ================================================= */}

          <section className="form-section">

            <div className="form-section-header">
              <h2>Personal Information</h2>
            </div>

            <div className="form-grid">

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

          {/* =================================================
              ACADEMIC INFORMATION
          ================================================= */}

          <section className="form-section">

            <div className="form-section-header">
              <h2>Academic Information</h2>
            </div>

            <div className="form-grid">

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
                  style={{ display: "none" }}
                >
                  <option value="">
                    Select your level
                  </option>

                  <option value="100">100 Level</option>
                  <option value="200">200 Level</option>
                  <option value="300">300 Level</option>
                  <option value="400">400 Level</option>
                  <option value="500">500 Level</option>

                </select>

                <CustomDropdown
                  value={watch("academicLevel")}
                  onChange={(value) =>
                    setValue("academicLevel", value, {
                      shouldValidate: true,
                    })
                  }
                  options={[
                    {
                      value: "",
                      label: "Select your level",
                    },
                    {
                      value: "100",
                      label: "100 Level",
                    },
                    {
                      value: "200",
                      label: "200 Level",
                    },
                    {
                      value: "300",
                      label: "300 Level",
                    },
                    {
                      value: "400",
                      label: "400 Level",
                    },
                    {
                      value: "500",
                      label: "500 Level",
                    },
                  ]}
                  error={!!errors.academicLevel}
                />

                {errors.academicLevel && (
                  <span className="field-error">
                    {errors.academicLevel.message}
                  </span>
                )}

              </div>

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

          {/* =================================================
              ABOUT YOURSELF
          ================================================= */}

          <section className="form-section">

            <div className="form-section-header">
              <h2>Tell Us About Yourself</h2>
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

          {/* =================================================
              LEADERSHIP
          ================================================= */}

          <section className="form-section">

            <div className="form-section-header">
              <h2>Leadership Experience</h2>
            </div>

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

          </section>

          {/* =================================================
              SOCIAL MEDIA
          ================================================= */}

          <section className="form-section">

            <div className="form-section-header">
              <h2>Social Media Links</h2>
            </div>

            <div className="form-group">

              <label htmlFor="socialMediaLinks">
                Social Media Links{" "}
                <span className="required">*</span>
              </label>

              <input
                id="socialMediaLinks"
                type="text"
                placeholder="@username or https://linkedin.com/in/..."
                {...register("socialMediaLinks", {
                  required:
                    "Please provide at least one social media link",

                  validate: (value) => {

                    const trimmed = value.trim();

                    if (/^@[A-Za-z0-9_]+$/.test(trimmed)) {
                      return true;
                    }

                    if (/^https?:\/\//.test(trimmed)) {
                      return true;
                    }

                    if (
                      /^[A-Za-z0-9.-]+\.[A-Za-z]{2,}/.test(trimmed)
                    ) {
                      return true;
                    }

                    return "Please enter a valid social handle or profile URL";
                  },
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

          {/* =================================================
              TERMS
          ================================================= */}

          <div className="form-actions">

            <div className="terms-group">

              <label className="terms-label">

                <input
                  type="checkbox"
                  {...register("termsAccepted", {
                    required:
                      "You must confirm that the information is accurate",
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
              disabled={
                submissionStatus === "loading" ||
                !termsAccepted
              }
            >
              {submissionStatus === "loading"
                ? "Submitting..."
                : "Apply now"}
            </button>

          </div>

        </form>

        {/* =================================================
            CONFIRMATION MODAL
        ================================================= */}

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
              onClick={(event) =>
                event.stopPropagation()
              }
            >

              <div className="modal-header">

                <h2 id="confirmation-title">
                  Confirm Your Application
                </h2>

                <button
                  type="button"
                  className="modal-close"
                  onClick={() =>
                    setShowConfirmation(false)
                  }
                  aria-label="Close confirmation dialog"
                >
                  ×
                </button>

              </div>

              <div className="modal-content">

                <p>
                  Please review your information before
                  submitting your application.
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

                  <div>
                    <strong>Social Profile</strong>
                    <span>
                      {pendingData.socialMediaLinks}
                    </span>
                  </div>

                </div>

              </div>

              <div className="modal-actions">

                <button
                  type="button"
                  className="modal-cancel"
                  onClick={() =>
                    setShowConfirmation(false)
                  }
                  disabled={
                    submissionStatus === "loading"
                  }
                >
                  Go Back
                </button>

                <button
                  type="button"
                  className="modal-confirm"
                  onClick={handleConfirmSubmission}
                  disabled={
                    submissionStatus === "loading"
                  }
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

// =========================================================
// CUSTOM DROPDOWN
// =========================================================

interface CustomDropdownProps {
  value: string;
  onChange: (value: string) => void;
  options: {
    value: string;
    label: string;
  }[];
  error?: boolean;
}

const CustomDropdown = ({
  value,
  onChange,
  options,
  error,
}: CustomDropdownProps) => {

  const [isOpen, setIsOpen] = useState(false);

  const selectedLabel =
    options.find((option) => option.value === value)?.label ||
    "Select your level";

  return (
    <div className="custom-dropdown">

      <button
        type="button"
        className={`custom-dropdown-trigger ${
          error ? "custom-dropdown-error" : ""
        }`}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >

        <span>{selectedLabel}</span>

        <span
          className={`custom-dropdown-arrow ${
            isOpen ? "open" : ""
          }`}
        >
          ▼
        </span>

      </button>

      {isOpen && (
        <div className="custom-dropdown-menu">

          {options.map((option) => (

            <button
              type="button"
              key={option.value}
              className={`custom-dropdown-option ${
                option.value === value
                  ? "selected"
                  : ""
              }`}
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
              }}
            >
              {option.label}
            </button>

          ))}

        </div>
      )}

    </div>
  );
};