import { mockProfile, mockReferralProgress, mockStats } from '../../data/mockDashboard';
import StatCard from '../../components/dashboard/Cards';
import ProgressBar from '../../components/dashboard/ProgressBar';

export default function DashboardHome() {
  return (
    <div className="space-y-6">
      {/* Welcome Card */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_4px_20px_-6px_rgba(0,0,0,0.06)] p-6">
        <p className="text-sm text-gray-400 mb-1">Welcome back,</p>
        <h2 className="text-xl font-semibold text-gray-900">{mockProfile.name}</h2>
        <p className="text-sm text-gray-500 mt-1">
          {mockProfile.department} · {mockProfile.university}
        </p>
      </div>

      {/* Referral Progress */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_4px_20px_-6px_rgba(0,0,0,0.06)] p-6">
        <ProgressBar
          label="Referral Progress"
          current={mockReferralProgress.current}
          goal={mockReferralProgress.goal}
        />
        <p className="text-xs text-gray-400 mt-3">
          {mockReferralProgress.goal - mockReferralProgress.current} more referrals to hit this month's goal.
        </p>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {mockStats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>
    </div>
  );
}