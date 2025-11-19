import { useState, useEffect } from "react";

export default function ServiceForm({ onSubmit, editingData }) {
  const [form, setForm] = useState({
    name: "",
    price: "",
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
    setForm({ name: "", price: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Service Name" value={form.name} onChange={handleChange} />
      <input name="price" placeholder="Price" value={form.price} onChange={handleChange} />

      <button type="submit">
        {editingData ? "Update Service" : "Add Service"}
      </button>
    </form>
  );
}
