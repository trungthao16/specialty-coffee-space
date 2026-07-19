import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumbs({ items = [] }) {
  return (
    <nav className="flex items-center space-x-2 text-sm text-stone-400 py-4 font-sans bg-transparent">
      {/* Home link */}
      <Link
        href="/"
        className="flex items-center gap-1 hover:text-amber-500 transition-colors"
      >
        <Home className="h-3.5 w-3.5" />
        <span>Trang chủ</span>
      </Link>

      {/* Breadcrumb Items */}
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <div key={index} className="flex items-center space-x-2">
            <ChevronRight className="h-3.5 w-3.5 text-stone-600 shrink-0" />
            {isLast ? (
              <span className="text-stone-300 font-medium line-clamp-1">{item.name}</span>
            ) : (
              <Link
                href={item.href}
                className="hover:text-amber-500 transition-colors whitespace-nowrap"
              >
                {item.name}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
}
