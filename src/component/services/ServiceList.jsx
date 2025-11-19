export default function ServiceList({ data, onEdit, onDelete }) {
  return (
    <div>
      {data.map((srv) => (
        <div key={srv.id}>
          <p>{srv.name} - Rp {srv.price}</p>

          <button onClick={() => onEdit(srv)}>Edit</button>
          <button onClick={() => onDelete(srv.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
