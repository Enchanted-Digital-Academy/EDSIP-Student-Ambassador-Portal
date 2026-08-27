interface ProgressBarProps {
  current: number;
  goal: number;
  label?: string;
}

export default function ProgressBar({ current, goal, label }: ProgressBarProps) {
  const percent = Math.min(100, Math.round((current / goal) * 100));

  return (
    <div>
      {label && (
        <div className="flex items-center justify-between mb-2 text-sm">
          <span className="font-medium text-gray-700">{label}</span>
          <span className="text-gray-400">
            {current}/{goal}
          </span>
        </div>
      )}
      <div className="h-2.5 w-full rounded-full bg-gray-100 overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{ width: `${percent}%`, backgroundColor: '#F8A825' }}
        />
      </div>
    </div>
  );
}