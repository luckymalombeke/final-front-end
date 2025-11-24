import { NavLink } from 'react-router-dom';

const links = [
  { to: '/customers', label: 'Customers' },
  { to: '/employees', label: 'Employees' },
  { to: '/orders', label: 'Orders' },
  { to: '/services', label: 'Services' },
];

export default function Sidebar() {
  return (
    <aside className="hidden md:flex md:flex-col w-60 bg-dark-coffee text-coffee-white border-r border-mocca/40">
      <div className="px-6 py-5 border-b border-mocca/30">
        <p className="text-xs uppercase tracking-[0.2em] text-mocca/80">Dashboard</p>
        <p className="mt-1 text-sm text-coffee-white/80">Carwash Operations</p>
      </div>
      <nav className="flex-1 py-4">
        <ul className="space-y-1">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `flex items-center justify-between px-5 py-2.5 text-sm transition-colors ${
                    isActive
                      ? 'bg-mocca text-darkCoffee font-medium'
                      : 'text-coffee-white/80 hover:bg-mocca/15 hover:text-coffee-white'
                  }`
                }
              >
                <span>{link.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className="px-5 py-4 text-xs text-coffee-white/50 border-t border-mocca/30">
        MoccaWash &copy; {new Date().getFullYear()}
      </div>
    </aside>
  );
}


