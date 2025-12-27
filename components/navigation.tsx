'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/capabilities', label: 'Capabilities' },
    { href: '/projects', label: 'Projects' },
    { href: '/experience', label: 'Experience' },
  ];

  return (
    <nav className="fixed top-2 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl">
      <div className="bg-gray-50/80 backdrop-blur-md border border-gray-200/50 rounded-full shadow-sm px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-base font-bold text-gray-900 tracking-tight">
            Dionisius Bennett Andrianto©
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 text-sm font-medium transition-all rounded-lg ${
                  pathname === link.href
                    ? 'text-gray-900 bg-gray-900/5'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-900/5'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-900 hover:bg-gray-900/5 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-1 border-t border-gray-200/50 rounded-b-3xl">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2 text-sm font-medium transition-all rounded-lg ${
                  pathname === link.href
                    ? 'text-gray-900 bg-gray-900/5'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-900/5'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}