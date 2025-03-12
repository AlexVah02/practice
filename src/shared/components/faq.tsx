import { FAQ_ITEMS } from '@/shared/constants/faq';
import { Accordion, AccordionItem } from '@nextui-org/react';
import { Typography } from '@/shared/ui/typography';
import { Container } from '@/shared/ui/wrapppers/container';

export default function Faq({ flares = false }: { flares?: boolean }) {
  return (
    <Container flares={flares} className="py-24">
      <Typography className="text-center mb-10" tag="h2">
        Вопрос
        <span className="animate-pulse">/</span>
        Ответ
      </Typography>
      <Accordion defaultExpandedKeys={['1']}>
        {FAQ_ITEMS['ru'].map(({ id, title, description, content }) => (
          <AccordionItem
            key={id}
            aria-label={title}
            subtitle={description}
            title={title}
          >
            <Typography className="pb-10">{content}</Typography>
          </AccordionItem>
        ))}
      </Accordion>
    </Container>
  );
}
