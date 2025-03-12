import { MENU_ITEMS } from '@/shared/constants/navigation';
import { Link, NavbarMenu, NavbarMenuItem } from '@nextui-org/react';
import React from 'react';

export function MenuNavbarContent() {
  return (
    <NavbarMenu>
      {MENU_ITEMS.map(({ label, href }, index) => (
        <NavbarMenuItem key={`${href}-${index}`}>
          <Link
            color={
              index === 2
                ? 'primary'
                : index === MENU_ITEMS.length - 1
                  ? 'danger'
                  : 'foreground'
            }
            className="w-full"
            href="#"
            size="lg"
          >
            {label}
          </Link>
        </NavbarMenuItem>
      ))}
    </NavbarMenu>
  );
}
