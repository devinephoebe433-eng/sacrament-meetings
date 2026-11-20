'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/meetings', label: 'All meetings' },
  { href: '/meetings/current', label: 'Current Sunday' },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <nav aria-label="Planner navigation" className="flex flex-wrap items-center gap-2">
      {links.map((link) => {
        const active = link.href === '/meetings' ? pathname === '/meetings' : pathname.startsWith(link.href);
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`rounded-full px-4 py-2 text-sm font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cobalt focus-visible:ring-offset-2 ${
              active ? 'bg-cobalt text-white shadow-sm' : 'text-slate-500 hover:bg-blue-pale hover:text-cobalt'
            }`}
            aria-current={active ? 'page' : undefined}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
