import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import DataTable from '../../components/ui/DataTable';

export default function OrderList({ data, onEdit, onDelete, loading }) {
  const columns = [
    { header: 'Customer', accessor: 'customer' },
    { header: 'Service', accessor: 'service' },
    {
      header: 'Status',
      accessor: 'status',
      render: (value) => {
        const statusColors = {
          pending: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50',
          'in-progress': 'bg-blue-500/20 text-blue-400 border-blue-500/50',
          completed: 'bg-green-500/20 text-green-400 border-green-500/50',
        };
        const statusClass = statusColors[value] || statusColors.pending;
        return (
          <span
            className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold border ${statusClass}`}
          >
            {value.charAt(0).toUpperCase() + value.slice(1).replace('-', ' ')}
          </span>
        );
      },
    },
    { header: 'Date', accessor: 'date' },
  ];

  return (
    <Card title="Orders List" description="Monitor all service orders, their status, and schedule.">
      {loading ? (
        <div className="flex items-center justify-center py-12">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-accent-blue"></div>
          <span className="ml-3 text-text-gray">Loading orders...</span>
        </div>
      ) : (
        <DataTable
          columns={columns}
          data={data}
          actions={(row) => (
            <div className="flex justify-end gap-2">
              <Button variant="outline" className="px-4 py-1.5 text-xs" onClick={() => onEdit(row)}>
                Edit
              </Button>
              <Button
                variant="danger"
                className="px-4 py-1.5 text-xs"
                onClick={() => onDelete(row.id)}
              >
                Delete
              </Button>
            </div>
          )}
        />
      )}
    </Card>
  );
}
