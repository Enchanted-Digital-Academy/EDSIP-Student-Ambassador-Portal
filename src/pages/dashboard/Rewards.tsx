import { Star, Gift, Lock } from 'lucide-react';
import { mockBadges, mockRewards, mockPoints } from '../../data/mockDashboard';

export default function Rewards() {
  return (
    <div className="space-y-6">
      {/* Points summary */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_4px_20px_-6px_rgba(0,0,0,0.06)] p-6 flex items-center gap-5">
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
          style={{ backgroundColor: '#FDF0DA' }}
        >
          <Star size={24} style={{ color: '#F8A825' }} />
        </div>
        <div>
          <p className="text-2xl font-semibold text-gray-900">{mockPoints} pts</p>
          <p className="text-sm text-gray-400">Your current balance</p>
        </div>
      </div>

      {/* Badges */}
      <div>
        <h3 className="text-sm font-semibold text-gray-900 mb-3">Badges Earned</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {mockBadges.map((b) => {
            const Icon = b.icon;
            return (
              <div
                key={b.id}
                className={`bg-white rounded-2xl border p-4 flex flex-col items-center text-center gap-2 ${
                  b.earned
                    ? 'border-gray-100 shadow-[0_4px_20px_-6px_rgba(0,0,0,0.06)]'
                    : 'border-dashed border-gray-200 opacity-50'
                }`}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: b.earned ? '#FDF0DA' : '#F3F4F6' }}
                >
                  {b.earned ? (
                    <Icon size={18} style={{ color: '#F8A825' }} />
                  ) : (
                    <Lock size={16} className="text-gray-400" />
                  )}
                </div>
                <p className="text-xs font-medium text-gray-800">{b.title}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Redeemable rewards */}
      <div>
        <h3 className="text-sm font-semibold text-gray-900 mb-3">Redeem Rewards</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {mockRewards.map((r) => {
            const affordable = mockPoints >= r.pointsCost;
            return (
              <div
                key={r.id}
                className="bg-white rounded-2xl border border-gray-100 shadow-[0_4px_20px_-6px_rgba(0,0,0,0.06)] p-5 flex items-start gap-4"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: '#FDF0DA' }}
                >
                  <Gift size={18} style={{ color: '#F8A825' }} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-gray-900">{r.title}</p>
                  <p className="text-xs text-gray-500 mt-1">{r.description}</p>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-xs font-medium text-gray-400">{r.pointsCost} pts</span>
                    <button
                      disabled={!affordable}
                      className={`text-xs font-medium px-3 py-1.5 rounded-lg transition-colors ${
                        affordable ? 'text-white' : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      }`}
                      style={affordable ? { backgroundColor: '#F8A825' } : undefined}
                    >
                      Redeem
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}