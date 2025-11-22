import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import DataTable from '../../components/ui/DataTable';

export default function ServiceList({ data, onEdit, onDelete, loading }) {
  const columns = [
    { header: 'Service Name', accessor: 'name' },
    {
      header: 'Price',
      accessor: 'price',
      render: (value) => (
        <span className="font-semibold text-accent-green">
          Rp {Number(value).toLocaleString('id-ID')}
        </span>
      ),
    },
  ];

  return (
    <Card
      title="Services List"
      description="Overview of all available carwash services and pricing."
    >
      {loading ? (
        <div className="flex items-center justify-center py-12">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-accent-blue"></div>
          <span className="ml-3 text-text-gray">Loading services...</span>
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
