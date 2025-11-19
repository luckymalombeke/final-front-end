export default function OrderList({ data, onEdit, onDelete }) {
  return (
    <div>
      {data.map((ord) => (
        <div key={ord.id}>
          <p>Order #{ord.id} – Status: {ord.status} – Date: {ord.date}</p>

          <button onClick={() => onEdit(ord)}>Edit</button>
          <button onClick={() => onDelete(ord.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
