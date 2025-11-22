export default function Card({ title, description, children, className = '' }) {
  return (
    <section
      className={`bg-gray/50 backdrop-blur-sm rounded-2xl border border-gray/50 p-6 lg:p-8 shadow-2xl hover:shadow-accent-blue/10 transition-all duration-300 ${className}`}
    >
      {(title || description) && (
        <header className="mb-6 pb-4 border-b border-gray/50">
          {title && (
            <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-text-light bg-clip-text text-transparent">
              {title}
            </h2>
          )}
          {description && <p className="mt-2 text-sm text-text-gray leading-relaxed">{description}</p>}
        </header>
      )}
      <div>{children}</div>
    </section>
  );
}
