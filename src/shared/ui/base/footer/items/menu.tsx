import { Typography } from '@/shared/ui/typography';
import { MENU_ITEMS } from '@/shared/constants/navigation';
import { Link } from '@nextui-org/react';

export function FooterMenu() {
  return (
    <div className="flex flex-col gap-2">
      <Typography tag="h5">Меню</Typography>
      {MENU_ITEMS.map(({ label, href }) => (
        <Link key={href} className="text-inherit" href={href}>
          {label}
        </Link>
      ))}
    </div>
  );
}
