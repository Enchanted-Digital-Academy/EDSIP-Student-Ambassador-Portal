import { FileText, LayoutTemplate, Link2, ExternalLink, FolderOpen } from 'lucide-react';
import { mockResources } from '../../data/mockDashboard';
import EmptyState from '../../components/dashboard/EmptyState';
import type { Resource } from '../../types/dashboard';

const typeIcon: Record<Resource['type'], typeof FileText> = {
  guide: FileText,
  template: LayoutTemplate,
  link: Link2,
};

export default function Resources() {
  const resources = mockResources;

  if (resources.length === 0) {
    return (
      <EmptyState
        icon={FolderOpen}
        title="No resources yet"
        description="Check back soon — new guides and templates will show up here."
      />
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold text-gray-900">Resources</h2>
        <p className="text-sm text-gray-500 mt-1">
          Guides, templates, and assets to help you as an ambassador.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {resources.map((r) => {
          const Icon = typeIcon[r.type];
          return (
            <a
              key={r.id}
              href={r.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-2xl border border-gray-100 shadow-[0_4px_20px_-6px_rgba(0,0,0,0.06)] p-5 flex flex-col gap-3 hover:shadow-[0_8px_28px_-6px_rgba(0,0,0,0.1)] transition-shadow"
            >
              <div className="flex items-start justify-between">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: '#FDF0DA' }}
                >
                  <Icon size={18} style={{ color: '#F8A825' }} />
                </div>
                <ExternalLink size={15} className="text-gray-300" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900">{r.title}</h3>
                <p className="text-xs text-gray-500 mt-1 leading-relaxed">{r.description}</p>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}