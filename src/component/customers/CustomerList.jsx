export default function CustomerList({ data, onEdit, onDelete }) {
  return (
    <div>
      {data.map((cust) => (
        <div key={cust.id}>
          <p>{cust.name} - {cust.vehicle} ({cust.plate})</p>

          <button onClick={() => onEdit(cust)}>Edit</button>
          <button onClick={() => onDelete(cust.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
