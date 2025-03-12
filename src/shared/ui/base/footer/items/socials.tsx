import { Typography } from '@/shared/ui/typography';
import { SOCIAL_ITEMS } from '@/shared/constants/navigation';
import { Link } from '@nextui-org/react';

export function FooterSocials() {
  return (
    <div className="flex flex-col gap-2">
      <Typography tag="h5">Соц. сети</Typography>
      {SOCIAL_ITEMS.map(({ label, href }) => (
        <Link key={label} className="text-inherit" href={href}>
          {label}
        </Link>
      ))}
    </div>
  );
}
