import { useEffect, useState } from 'react';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import Input from '../../components/ui/Input';

export default function OrderForm({ onSubmit, editingData }) {
  const [form, setForm] = useState({
    customer: '',
    service: '',
    status: 'pending',
    date: new Date().toISOString().split('T')[0],
  });

  useEffect(() => {
    if (editingData) {
      setForm({
        customer: editingData.customer || '',
        service: editingData.service || '',
        status: editingData.status || 'pending',
        date: editingData.date || new Date().toISOString().split('T')[0],
      });
    } else {
      setForm({
        customer: '',
        service: '',
        status: 'pending',
        date: new Date().toISOString().split('T')[0],
      });
    }
  }, [editingData]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
    if (!editingData) {
      setForm({
        customer: '',
        service: '',
        status: 'pending',
        date: new Date().toISOString().split('T')[0],
      });
    }
  };

  return (
    <Card
      title={editingData ? 'Edit Order' : 'New Order'}
      description="Create and track service orders for each customer visit."
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid gap-4 md:grid-cols-2">
          <Input
            label="Customer"
            name="customer"
            value={form.customer}
            onChange={handleChange}
            placeholder="Customer name"
            required
          />
          <Input
            label="Service"
            name="service"
            value={form.service}
            onChange={handleChange}
            placeholder="e.g. Full Wash, Quick Wash"
            required
          />
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-white">Status</label>
            <select
              name="status"
              value={form.status}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray/50 bg-dark-gray/50 px-4 py-3 text-sm text-text-light focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-accent-blue transition-all duration-200"
              required
            >
              <option value="pending">Pending</option>
              <option value="in-progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
          </div>
          <Input
            label="Date"
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex justify-end gap-3 pt-4 border-t border-gray/50">
          <Button type="submit" variant="primary">
            {editingData ? 'Update Order' : 'Add Order'}
          </Button>
        </div>
      </form>
    </Card>
  );
}
