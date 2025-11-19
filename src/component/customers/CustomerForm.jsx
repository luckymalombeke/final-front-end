import { useState, useEffect } from "react";

export default function CustomerForm({ onSubmit, editingData }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    vehicle: "",
    plate: "",
  });

  // Fill form when editing
  useEffect(() => {
    if (editingData) setForm(editingData);
  }, [editingData]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
    setForm({ name: "", phone: "", vehicle: "", plate: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" value={form.name} onChange={handleChange} />
      <input name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} />
      <input name="vehicle" placeholder="Vehicle" value={form.vehicle} onChange={handleChange} />
      <input name="plate" placeholder="Plate" value={form.plate} onChange={handleChange} />

      <button type="submit">
        {editingData ? "Update Customer" : "Add Customer"}
      </button>
    </form>
  );
}
