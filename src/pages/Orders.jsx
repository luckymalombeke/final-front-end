import { useState } from 'react';
import useFetchData from '../hooks/usefetchData';
import OrderForm from '../component/Orders/OrderForm';
import OrderList from '../component/Orders/OrderList';

export default function Orders() {
  const { data, loading, error, createData, updateData, deleteData } = useFetchData('orders');
  const [editing, setEditing] = useState(null);

  const handleSubmit = async (formData) => {
    if (editing) {
      await updateData(editing.id, { ...editing, ...formData });
      setEditing(null);
    } else {
      await createData(formData);
    }
  };

  const handleEdit = (item) => setEditing(item);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this order?')) {
      await deleteData(id);
    }
  };

  return (
    <div className="space-y-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-white via-text-light to-text-gray bg-clip-text text-transparent mb-2">
          Orders
        </h1>
        <p className="text-text-gray">
          Create and follow up service orders from check-in to completion.
        </p>
      </div>
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)]">
        <OrderForm onSubmit={handleSubmit} editingData={editing} />
        <OrderList data={data} loading={loading} onEdit={handleEdit} onDelete={handleDelete} />
      </div>
      {error && (
        <div className="mt-4 p-4 rounded-lg bg-red-500/10 border border-red-500/50 text-red-400 text-sm">
          Failed to load orders. Please make sure JSON Server is running on port 3000.
        </div>
      )}
    </div>
  );
}
