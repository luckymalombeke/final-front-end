import { useEffect, useState } from 'react';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import Input from '../../components/ui/Input';

export default function CustomerForm({ onSubmit, editingData }) {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    vehicle: '',
    plate: '',
  });

  useEffect(() => {
    if (editingData) {
      setForm({
        name: editingData.name || '',
        phone: editingData.phone || '',
        vehicle: editingData.vehicle || '',
        plate: editingData.plate || '',
      });
    } else {
      setForm({ name: '', phone: '', vehicle: '', plate: '' });
    }
  }, [editingData]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
    if (!editingData) {
      setForm({ name: '', phone: '', vehicle: '', plate: '' });
    }
  };

  return (
    <Card
      title={editingData ? 'Edit Customer' : 'New Customer'}
      description="Capture key details to manage your loyal carwash customers."
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid gap-4 md:grid-cols-2">
          <Input
            label="Customer Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter customer name"
            required
          />
          <Input
            label="Phone Number"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="e.g. 0812-xxxx-xxxx"
          />
          <Input
            label="Vehicle"
            name="vehicle"
            value={form.vehicle}
            onChange={handleChange}
            placeholder="e.g. Toyota Avanza"
          />
          <Input
            label="License Plate"
            name="plate"
            value={form.plate}
            onChange={handleChange}
            placeholder="e.g. B 1234 CD"
          />
        </div>

        <div className="flex justify-end gap-3 pt-4 border-t border-gray/50">
          <Button type="submit" variant="primary">
            {editingData ? 'Update Customer' : 'Add Customer'}
          </Button>
        </div>
      </form>
    </Card>
  );
}
