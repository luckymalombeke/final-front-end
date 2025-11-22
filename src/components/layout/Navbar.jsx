import { NavLink } from 'react-router-dom';

const links = [
  { to: '/customers', label: 'Customers' },
  { to: '/employees', label: 'Employees' },
  { to: '/orders', label: 'Orders' },
  { to: '/services', label: 'Services' },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 h-20 flex items-center justify-between px-6 lg:px-12 border-b border-gray/50 bg-black/95 backdrop-blur-lg">
      <div className="flex items-center gap-3">
        <div className="relative">
          <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-accent-blue to-accent-purple flex items-center justify-center shadow-lg">
            <span className="text-white text-sm font-bold">CW</span>
          </div>
          <div className="absolute -top-1 -right-1 h-4 w-4 bg-accent-green rounded-full border-2 border-black animate-pulse"></div>
        </div>
        <div>
          <h1 className="text-xl font-bold bg-gradient-to-r from-white to-text-light bg-clip-text text-transparent">
            CarWash Pro
          </h1>
          <p className="hidden md:block text-xs text-text-gray">Management System</p>
        </div>
      </div>

      <nav className="hidden lg:flex items-center gap-1">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                isActive
                  ? 'bg-accent-blue text-white shadow-lg shadow-accent-blue/30'
                  : 'text-text-gray hover:text-white hover:bg-gray/50'
              }`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <button className="lg:hidden p-2 text-text-gray hover:text-white hover:bg-gray/50 rounded-lg transition-colors">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </header>
  );
}
