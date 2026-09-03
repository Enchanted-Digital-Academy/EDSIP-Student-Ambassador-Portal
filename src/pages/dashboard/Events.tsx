import { CalendarDays, MapPin } from 'lucide-react';
import Table from '../../components/dashboard/Table';
import EmptyState from '../../components/dashboard/EmptyState';
import { mockEvents } from '../../data/mockDashboard';
import type { EventItem } from '../../types/dashboard';

function StatusBadge({ status }: { status: EventItem['status'] }) {
  const isUpcoming = status === 'upcoming';
  return (
    <span
      className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium"
      style={{
        backgroundColor: isUpcoming ? '#FDF0DA' : '#F3F4F6',
        color: isUpcoming ? '#B9770E' : '#6B7280',
      }}
    >
      {isUpcoming ? 'Upcoming' : 'Past'}
    </span>
  );
}

export default function Events() {
  const events = mockEvents;

  if (events.length === 0) {
    return (
      <EmptyState
        icon={CalendarDays}
        title="No events yet"
        description="Upcoming ambassador events will show up here once scheduled."
      />
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold text-gray-900">Events</h2>
        <p className="text-sm text-gray-500 mt-1">
          Ambassador events you're attending or have attended.
        </p>
      </div>

      <Table<EventItem>
        keyField="id"
        rows={events}
        columns={[
          {
            header: 'Event',
            render: (e) => <span className="font-medium text-gray-800">{e.title}</span>,
          },
          {
            header: 'Date',
            render: (e) => (
              <span className="flex items-center gap-1.5 text-gray-500">
                <CalendarDays size={14} />
                {e.date}
              </span>
            ),
          },
          {
            header: 'Location',
            render: (e) => (
              <span className="flex items-center gap-1.5 text-gray-500">
                <MapPin size={14} />
                {e.location}
              </span>
            ),
          },
          {
            header: 'Status',
            render: (e) => <StatusBadge status={e.status} />,
          },
        ]}
      />
    </div>
  );
}