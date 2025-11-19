export default function EmployeesList({ data, onEdit, onDelete }) {
  return (
    <div>
      {data.map((emp) => (
        <div key={emp.id}>
          <p>{emp.name} - {emp.role}</p>

          <button onClick={() => onEdit(emp)}>Edit</button>
          <button onClick={() => onDelete(emp.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
