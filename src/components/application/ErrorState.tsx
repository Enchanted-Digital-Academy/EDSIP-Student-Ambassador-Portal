interface ErrorStateProps {
  message?: string;
  onRetry: () => void;
}

const ErrorState = ({
  message = "Something went wrong while submitting your application. Please try again.",
  onRetry,
}: ErrorStateProps) => {
  return (
    <div className="flex min-h-[500px] w-full items-center justify-center px-6 py-16">
      <div className="w-full max-w-[560px] text-center">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-8 w-8 text-red-600"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </div>

        <h1 className="font-serif text-2xl font-bold text-[#171717] md:text-3xl">
          Submission Failed
        </h1>

        <p className="mx-auto mt-4 max-w-[480px] text-sm leading-[1.7] text-[#666666]">
          {message}
        </p>

        <button
          type="button"
          onClick={onRetry}
          className="mt-8 rounded-lg border border-[#f97316] bg-[#f97316] px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-px hover:border-[#ea580c] hover:bg-[#ea580c] hover:shadow-[0_8px_20px_rgba(249,115,22,0.2)]"
        >
          Try Again
        </button>
      </div>
    </div>
  );
};

export default ErrorState;