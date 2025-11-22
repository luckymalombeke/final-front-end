export default function DataTable({ columns, data, actions }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-gray/50 bg-gray/30 backdrop-blur-sm shadow-xl">
      <table className="min-w-full text-left text-sm">
        <thead className="bg-black/50 border-b border-gray/50">
          <tr>
            {columns.map((col) => (
              <th key={col.accessor} className="px-6 py-4 font-bold text-white uppercase text-xs tracking-wider">
                {col.header}
              </th>
            ))}
            {actions && (
              <th className="px-6 py-4 text-right font-bold text-white uppercase text-xs tracking-wider">
                Actions
              </th>
            )}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray/30">
          {data.length === 0 ? (
            <tr>
              <td
                colSpan={columns.length + (actions ? 1 : 0)}
                className="px-6 py-12 text-center text-text-gray"
              >
                <div className="flex flex-col items-center gap-2">
                  <svg
                    className="w-12 h-12 text-gray"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                    />
                  </svg>
                  <p className="text-base">No records found.</p>
                </div>
              </td>
            </tr>
          ) : (
            data.map((row, index) => (
              <tr
                key={row.id}
                className="hover:bg-gray/40 transition-colors duration-150 border-b border-gray/20"
              >
                {columns.map((col) => (
                  <td key={col.accessor} className="px-6 py-4 align-middle text-text-light whitespace-nowrap">
                    {col.render ? col.render(row[col.accessor], row) : row[col.accessor]}
                  </td>
                ))}
                {actions && (
                  <td className="px-6 py-4 text-right align-middle space-x-2 whitespace-nowrap">
                    {actions(row)}
                  </td>
                )}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
