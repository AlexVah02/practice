import { Typography } from '@/shared/ui/typography';
import { HELP_ITEMS } from '@/shared/constants/navigation';
import { Link } from '@nextui-org/react';

export function FooterHelp() {
  return (
    <div className="flex flex-col gap-2">
      <Typography tag="h5">Помощь</Typography>
      {HELP_ITEMS.map(({ label, href }) => (
        <Link key={label} className="text-inherit" href={href}>
          {label}
        </Link>
      ))}
    </div>
  );
}
