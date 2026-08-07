import type { ReactNode } from 'react';

interface TableColumn<T> {
  header: string;
  render: (row: T) => ReactNode;
}

interface TableProps<T> {
  columns: TableColumn<T>[];
  rows: T[];
  keyField: keyof T;
}

export default function Table<T>({ columns, rows, keyField }: TableProps<T>) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_4px_20px_-6px_rgba(0,0,0,0.06)] overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[560px] text-sm">
          <thead>
            <tr className="border-b border-gray-100 text-left text-xs text-gray-400">
              {columns.map((col) => (
                <th key={col.header} className="px-5 py-3 font-medium whitespace-nowrap">
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr
                key={String(row[keyField])}
                className="border-b border-gray-50 last:border-0 hover:bg-gray-50/60 transition-colors"
              >
                {columns.map((col) => (
                  <td key={col.header} className="px-5 py-4 align-middle whitespace-nowrap">
                    {col.render(row)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}