import { MENU_ITEMS } from '@/shared/constants/navigation';
import { Link, NavbarContent, NavbarItem } from '@nextui-org/react';
import React from 'react';
import { usePathname } from 'next/navigation';

export function NavigationNavbarContent() {
  const pathname = usePathname();
  return (
    <NavbarContent className="hidden sm:flex gap-4" justify="center">
      {MENU_ITEMS.map(({ label, href }) => (
        <NavbarItem key={href} isActive={href === pathname}>
          <Link color="foreground" href={href}>
            {label}
          </Link>
        </NavbarItem>
      ))}
    </NavbarContent>
  );
}
