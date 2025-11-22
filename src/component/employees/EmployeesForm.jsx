import { useEffect, useState } from 'react';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import Input from '../../components/ui/Input';

export default function EmployeesForm({ onSubmit, editingData }) {
  const [form, setForm] = useState({
    name: '',
    role: '',
  });

  useEffect(() => {
    if (editingData) {
      setForm({
        name: editingData.name || '',
        role: editingData.role || '',
      });
    } else {
      setForm({ name: '', role: '' });
    }
  }, [editingData]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
    if (!editingData) {
      setForm({ name: '', role: '' });
    }
  };

  return (
    <Card
      title={editingData ? 'Edit Employee' : 'New Employee'}
      description="Register and manage your operational team."
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid gap-4 md:grid-cols-2">
          <Input
            label="Employee Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter employee name"
            required
          />
          <Input
            label="Role"
            name="role"
            value={form.role}
            onChange={handleChange}
            placeholder="e.g. Washer, Cashier, Manager"
          />
        </div>

        <div className="flex justify-end gap-3 pt-4 border-t border-gray/50">
          <Button type="submit" variant="primary">
            {editingData ? 'Update Employee' : 'Add Employee'}
          </Button>
        </div>
      </form>
    </Card>
  );
}
