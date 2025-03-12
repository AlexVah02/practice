import { ROUTES } from '@/shared/constants/routes';

export const MENU_ITEMS = [
  {
    label: 'home',
    href: ROUTES.HOME,
  },
  {
    label: 'our_works',
    href: ROUTES.OUR_WORKS,
  },
  {
    label: 'prices',
    href: ROUTES.PRICES,
  },
  {
    label: 'about_us',
    href: ROUTES.ABOUT,
  },
] as const;

export const CONTACTS_ITEMS = [
  {
    label: '8 (700) 000-00-00',
    href: 'tel:+77000000000',
  },
  {
    label: 'support@technicorn.kz',
    href: 'mailto:support@technicorn.kz',
  },
] as const;

export const HELP_ITEMS = [
  {
    label: 'Отзывы',
    href: ROUTES.TESTIMONIALS,
  },
  {
    label: 'FAQ',
    href: ROUTES.FAQ,
  },
  {
    label: 'Наша команда',
    href: ROUTES.OUR_TEAM,
  },
  {
    label: 'Правовые документы',
    href: ROUTES.DOCUMENTS,
  },
] as const;

export const SOCIAL_ITEMS = [
  {
    label: 'Instagram',
    href: ROUTES.HOME,
  },
  {
    label: 'YouTube',
    href: ROUTES.HOME,
  },
  {
    label: 'VK',
    href: ROUTES.HOME,
  },
  {
    label: 'Tweeter',
    href: ROUTES.HOME,
  },
] as const;
