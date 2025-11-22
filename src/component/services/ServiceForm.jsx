import { useEffect, useState } from 'react';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import Input from '../../components/ui/Input';

export default function ServiceForm({ onSubmit, editingData }) {
  const [form, setForm] = useState({
    name: '',
    price: '',
  });

  useEffect(() => {
    if (editingData) {
      setForm({
        name: editingData.name || '',
        price: editingData.price || '',
      });
    } else {
      setForm({ name: '', price: '' });
    }
  }, [editingData]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
    if (!editingData) {
      setForm({ name: '', price: '' });
    }
  };

  return (
    <Card
      title={editingData ? 'Edit Service' : 'New Service'}
      description="Define service packages and their pricing."
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid gap-4 md:grid-cols-2">
          <Input
            label="Service Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="e.g. Full Wash, Quick Wash"
            required
          />
          <Input
            label="Price"
            type="number"
            name="price"
            value={form.price}
            onChange={handleChange}
            placeholder="e.g. 50000"
            required
          />
        </div>

        <div className="flex justify-end gap-3 pt-4 border-t border-gray/50">
          <Button type="submit" variant="primary">
            {editingData ? 'Update Service' : 'Add Service'}
          </Button>
        </div>
      </form>
    </Card>
  );
}
