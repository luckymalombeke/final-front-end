export default function Input({ label, className = '', ...props }) {
  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-semibold text-white">
          {label}
        </label>
      )}
      <input
        className={`w-full rounded-lg border border-gray/50 bg-dark-gray/50 px-4 py-3 text-sm text-text-light placeholder:text-text-gray/50 focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-accent-blue transition-all duration-200 ${className}`}
        {...props}
      />
    </div>
  );
}

