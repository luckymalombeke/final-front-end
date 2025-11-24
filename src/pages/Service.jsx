import { useState } from 'react';
import useFetchData from '../hooks/usefetchData';
import ServiceForm from '../component/services/ServiceForm';
import ServiceList from '../component/services/ServiceList';

export default function Service() {
  const { data, loading, error, createData, updateData, deleteData } = useFetchData('services');
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
    if (window.confirm('Are you sure you want to delete this service?')) {
      await deleteData(id);
    }
  };

  return (
    <div className="space-y-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-white via-text-light to-text-gray bg-clip-text text-transparent mb-2">
          Services
        </h1>
        <p className="text-text-gray">
          Manage your service offerings and pricing with ease.
        </p>
      </div>
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)]">
        <ServiceForm onSubmit={handleSubmit} editingData={editing} />
        <ServiceList data={data} loading={loading} onEdit={handleEdit} onDelete={handleDelete} />
      </div>
      {error && (
        <div className="mt-4 p-4 rounded-lg bg-red-500/10 border border-red-500/50 text-red-400 text-sm">
          Failed to load services. Please make sure JSON Server is running on port 3000.
        </div>
      )}
    </div>
  );
}
