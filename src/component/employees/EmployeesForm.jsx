import { useState, useEffect } from "react";

export default function EmployeesForm({ onSubmit, editingData }) {
  const [form, setForm] = useState({
    name: "",
    role: "",
  });

  useEffect(() => {
    if (editingData) setForm(editingData);
  }, [editingData]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
    setForm({ name: "", role: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Employee Name" value={form.name} onChange={handleChange} />
      <input name="role" placeholder="Role" value={form.role} onChange={handleChange} />

      <button type="submit">
        {editingData ? "Update Employee" : "Add Employee"}
      </button>
    </form>
  );
}
