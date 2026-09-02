import type { ApplicationFormData } from "../../types/application";

interface ConfirmationModalProps {
  pendingData: ApplicationFormData;
  onConfirm: () => void;
  onCancel: () => void;
  isSubmitting: boolean;
}

const ConfirmationModal = ({
  pendingData,
  onConfirm,
  onCancel,
  isSubmitting,
}: ConfirmationModalProps) => {
  return (
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-[rgba(23,23,23,0.55)] p-6 backdrop-blur-[5px] max-sm:p-[14px]"
      role="presentation"
      onClick={() => {
        if (!isSubmitting) {
          onCancel();
        }
      }}
    >
      <div
        className="max-h-[90vh] w-full max-w-[540px] overflow-y-auto rounded-[20px] border border-[#d9d4cc] bg-white shadow-[0_30px_80px_rgba(0,0,0,0.2)]"
        role="dialog"
        aria-modal="true"
        aria-labelledby="confirmation-title"
        onClick={(event) => event.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-[#eeeae3] px-6 py-[22px]">
          <div>
            <p className="mb-1 text-[0.72rem] font-bold uppercase tracking-[0.08em] text-[#f97316]">
              Final Review
            </p>

            <h2
              id="confirmation-title"
              className="m-0 font-serif text-[1.2rem] font-bold text-[#171717]"
            >
              Confirm Your Application
            </h2>
          </div>

          <button
            type="button"
            onClick={onCancel}
            disabled={isSubmitting}
            aria-label="Close confirmation dialog"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-transparent bg-transparent text-[1.5rem] leading-none text-[#666666] transition-all duration-200 hover:border-[#eeeae3] hover:bg-[#f7f5f1] hover:text-[#171717] disabled:cursor-not-allowed disabled:opacity-60"
          >
            ×
          </button>
        </div>

        {/* Modal Content */}
        <div className="px-6 py-6">
          <p className="m-0 text-[0.9rem] leading-[1.6] text-[#666666]">
            Please review your information carefully before submitting your
            application.
          </p>

          {/* Application Summary */}
          <div className="mt-5 grid gap-0 overflow-hidden rounded-[12px] border border-[#e8e3dc] bg-[#faf9f7]">
            <div className="grid gap-1 border-b border-[#eeeae3] px-[18px] py-3.5">
              <strong className="text-[0.72rem] font-bold uppercase tracking-[0.06em] text-[#888888]">
                Full Name
              </strong>

              <span className="text-[0.94rem] font-medium text-[#171717]">
                {pendingData.fullName}
              </span>
            </div>

            <div className="grid gap-1 border-b border-[#eeeae3] px-[18px] py-3.5">
              <strong className="text-[0.72rem] font-bold uppercase tracking-[0.06em] text-[#888888]">
                Email
              </strong>

              <span className="break-words text-[0.94rem] font-medium text-[#171717]">
                {pendingData.email}
              </span>
            </div>

            <div className="grid gap-1 border-b border-[#eeeae3] px-[18px] py-3.5">
              <strong className="text-[0.72rem] font-bold uppercase tracking-[0.06em] text-[#888888]">
                Phone
              </strong>

              <span className="text-[0.94rem] font-medium text-[#171717]">
                {pendingData.phoneNumber}
              </span>
            </div>

            <div className="grid gap-1 border-b border-[#eeeae3] px-[18px] py-3.5">
              <strong className="text-[0.72rem] font-bold uppercase tracking-[0.06em] text-[#888888]">
                University
              </strong>

              <span className="text-[0.94rem] font-medium text-[#171717]">
                {pendingData.university}
              </span>
            </div>

            <div className="grid gap-1 border-b border-[#eeeae3] px-[18px] py-3.5">
              <strong className="text-[0.72rem] font-bold uppercase tracking-[0.06em] text-[#888888]">
                Department
              </strong>

              <span className="text-[0.94rem] font-medium text-[#171717]">
                {pendingData.department}
              </span>
            </div>

            <div className="grid gap-1 border-b border-[#eeeae3] px-[18px] py-3.5">
              <strong className="text-[0.72rem] font-bold uppercase tracking-[0.06em] text-[#888888]">
                Academic Level
              </strong>

              <span className="text-[0.94rem] font-medium text-[#171717]">
                {pendingData.academicLevel} Level
              </span>
            </div>

            <div className="grid gap-1 border-b border-[#eeeae3] px-[18px] py-3.5">
              <strong className="text-[0.72rem] font-bold uppercase tracking-[0.06em] text-[#888888]">
                State
              </strong>

              <span className="text-[0.94rem] font-medium text-[#171717]">
                {pendingData.state}
              </span>
            </div>

            <div className="grid gap-1 px-[18px] py-3.5">
              <strong className="text-[0.72rem] font-bold uppercase tracking-[0.06em] text-[#888888]">
                Social Profile
              </strong>

              <span className="break-words text-[0.94rem] font-medium text-[#171717]">
                {pendingData.socialMediaLinks}
              </span>
            </div>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="flex justify-end gap-2.5 border-t border-[#eeeae3] px-6 py-[18px] max-sm:flex-col-reverse">
          <button
            type="button"
            onClick={onCancel}
            disabled={isSubmitting}
            className="rounded-[10px] border border-[#d8d3cb] bg-white px-[18px] py-3 text-[0.9rem] font-semibold text-[#171717] transition-all duration-200 hover:border-[#c8c1b7] hover:bg-[#f7f5f1] disabled:cursor-not-allowed disabled:opacity-60 max-sm:w-full"
          >
            Go Back
          </button>

          <button
            type="button"
            onClick={onConfirm}
            disabled={isSubmitting}
            className="rounded-[10px] border border-[#f97316] bg-[#f97316] px-[18px] py-3 text-[0.9rem] font-semibold text-white transition-all duration-200 hover:-translate-y-px hover:border-[#ea580c] hover:bg-[#ea580c] hover:shadow-[0_8px_20px_rgba(249,115,22,0.2)] disabled:cursor-not-allowed disabled:opacity-60 disabled:shadow-none max-sm:w-full"
          >
            {isSubmitting ? "Submitting..." : "Confirm & Submit"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;