import { useEffect, useState } from "react";

import ApplicationForm from "../components/application/ApplicationForm";
import ConfirmationModal from "../components/application/ConfirmationModal";
import SuccessPage from "../components/application/SuccessPage";
import ErrorState from "../components/application/ErrorState";

import type { ApplicationFormData } from "../types/application";

import bulbImage from "../assets/bulb.png";

type SubmissionStatus = "idle" | "loading" | "success" | "error";

/*
 * Formspark submission endpoint
 */
const FORMSPARK_ACTION_URL = "https://submit-form.com/iU6eqgNVe";

const ApplicationPage = () => {
  const navigate = useNavigate();
  const [showConfirmation, setShowConfirmation] = useState(false);

  const [submissionStatus, setSubmissionStatus] =
    useState<SubmissionStatus>("idle");

  const [pendingData, setPendingData] =
    useState<ApplicationFormData | null>(null);

  /*
   * Reset scroll after React has rendered the new
   * success/error state.
   */
  useEffect(() => {
    if (submissionStatus === "success" || submissionStatus === "error") {
      requestAnimationFrame(() => {
        window.scrollTo(0, 0);
      });
    }
  }, [submissionStatus]);

  const handleFormSubmit = (data: ApplicationFormData) => {
    console.log("Application ready for confirmation:", data);

    setPendingData(data);
    setShowConfirmation(true);
  };

  const handleConfirmSubmission = async () => {
    if (!pendingData) return;

    /*
     * Create a copy so we don't mutate the original
     * form data.
     */
    const fixedData = { ...pendingData };

    /*
     * Normalize the social media link.
     */
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
      /*
       * Submit application to Formspark.
       */
      const response = await fetch(FORMSPARK_ACTION_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...fixedData,

          /*
           * Email notification customization.
           */
          _email: {
            subject: "New EDSIP Student Ambassador Application",
            from: "EDSIP Student Ambassador Portal",
          },
        }),
      });

      /*
       * Treat any non-successful HTTP response
       * as a failed submission.
       */
      if (!response.ok) {
        throw new Error(
          `Formspark submission failed: HTTP ${response.status}`,
        );
      }

      console.log("Application submitted successfully:", fixedData);

      /*
       * Clear pending data and display the existing
       * success page.
       */
      setPendingData(null);
      setSubmissionStatus("success");
    } catch (error) {
      console.error("Application submission failed:", error);

      /*
       * Display the existing error state.
       */
      setSubmissionStatus("error");
    }
  };

  const handleRetry = () => {
    setSubmissionStatus("idle");
    setShowConfirmation(false);

    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
    });
  };

  /*
   * Return to the EDSIP homepage.
   */
  const handleBackToHome = () => {
    window.location.href =
      "https://edsip-student-ambassador-portal.vercel.app/";
  };

  /*
   * SUCCESS
   */
  if (submissionStatus === "success") {
    return <SuccessPage onBack={handleBackToHome} />;
  }

  /*
   * ERROR
   */
  if (submissionStatus === "error") {
    return <ErrorState onRetry={handleRetry} />;
  }

  /*
   * APPLICATION PAGE
   */
  return (
    <main className="box-border min-h-screen bg-[#f8f5ef] px-6 pb-24 pt-[72px] text-[#171717]">
      <div className="mx-auto w-full max-w-[1040px]">
        {/* Header / Hero */}
        <header className="mx-auto mb-[34px] max-w-[760px] text-center">
          {/* Bulb */}
          <div className="relative z-[1] mb-4 flex justify-center">
            <img
              src={bulbImage}
              alt="EDSIP Ambassador Bulb"
              className="mb-[-35px] h-auto w-[250px]"
            />
          </div>

          {/* Heading */}
          <h1 className="m-0 mb-3.5 font-serif text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.05] tracking-[-0.045em] text-[#171717]">
            <span className="text-[#f97316]">Become an EDSIP</span>
            <br />
            Student Ambassador
          </h1>
        </header>

        {/* Application Form */}
        <ApplicationForm
          onSubmit={handleFormSubmit}
          isSubmitting={submissionStatus === "loading"}
        />

        {/* Confirmation Modal */}
        {showConfirmation && pendingData && (
          <ConfirmationModal
            pendingData={pendingData}
            onConfirm={handleConfirmSubmission}
            onCancel={() => setShowConfirmation(false)}
            isSubmitting={submissionStatus === "loading"}
          />
        )}
      </div>
    </main>
  );
};

export default ApplicationPage;
