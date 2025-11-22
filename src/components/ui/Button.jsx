export default function Button({ variant = 'primary', className = '', children, ...props }) {
  const base =
    'inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-black disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0';

  const variants = {
    primary:
      'bg-gradient-to-r from-accent-blue to-accent-purple text-white hover:from-accent-blue/90 hover:to-accent-purple/90 focus-visible:ring-accent-blue',
    success:
      'bg-gradient-to-r from-accent-green to-accent-green/80 text-white hover:from-accent-green/90 hover:to-accent-green/70 focus-visible:ring-accent-green',
    outline:
      'border-2 border-gray text-white hover:bg-gray hover:border-light-gray focus-visible:ring-gray bg-transparent',
    ghost: 'text-text-gray hover:text-white hover:bg-gray/50 focus-visible:ring-gray',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-600',
  };

  const classes = `${base} ${variants[variant] || variants.primary} ${className}`;

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
