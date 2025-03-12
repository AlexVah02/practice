import { Container } from '@/shared/ui/wrapppers/container';
import { Typography } from '@/shared/ui/typography';
import { Input } from '@nextui-org/input';
import { Autocomplete, AutocompleteItem } from '@nextui-org/autocomplete';
import { Card } from '@nextui-org/card';
import { Button } from '@nextui-org/button';
import { useState } from 'react';
import { toast } from 'sonner';
import { Slider } from '@nextui-org/slider';
import { Tooltip } from '@nextui-org/tooltip';
import { InfoIcon } from '@nextui-org/shared-icons';

const servicesList = [
  {
    label: 'Создание web-приложения',
    value: 'web-app',
    description: '',
  },
  {
    label: 'Создание telegram-mini app',
    value: 'tg-mini-app',
    description: '',
  },
];

export default function GetAdvice() {
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmitForm = (e) => {
    e.preventDefault();
    setIsLoading((prevState) => !prevState);
    toast.success(
      'Ваша заявка отправлена, мы свяжемся с вами в ближайшее время',
    );
    console.log(e.target.values);
  };
  return (
    <div className="bg-primary/10 -mb-10 py-24">
      <Container>
        <Card className="max-w-xl mx-auto p-7">
          <form onSubmit={handleSubmitForm} className="flex flex-col gap-5">
            <Typography className="text-center mb-10" tag="h3">
              Оставьте заявку и мы свяжемся с вами
            </Typography>
            <Input
              required={true}
              type="email"
              name="email"
              label="E-mail"
              size="sm"
            />
            <Autocomplete
              required={true}
              name="service"
              size="md"
              label="Выберите услугу"
            >
              {servicesList.map((service) => (
                <AutocompleteItem key={service.value} value={service.value}>
                  {service.label}
                </AutocompleteItem>
              ))}
            </Autocomplete>

            <Slider
              label="Бюджет"
              step={100}
              maxValue={20000}
              minValue={0}
              defaultValue={[0, 8000]}
              showSteps={true}
              showTooltip={true}
              showOutline={true}
              disableThumbScale={true}
              formatOptions={{ style: 'currency', currency: 'USD' }}
              renderLabel={({ children, ...props }) => (
                <label
                  {...props}
                  className="text-medium flex gap-2 items-center"
                >
                  {children}
                  <Tooltip
                    className="w-[200px] px-1.5 text-tiny text-default-600 rounded-small cursor-help"
                    content="Выберите примерный бюджет проекта для более точного формирования предложения"
                    placement="right"
                  >
                    <span className="transition-opacity opacity-80 hover:opacity-100">
                      <InfoIcon className="cursor-help" />
                    </span>
                  </Tooltip>
                </label>
              )}
              tooltipValueFormatOptions={{
                style: 'currency',
                currency: 'USD',
                maximumFractionDigits: 0,
              }}
              classNames={{
                base: 'w-full',
                filler: 'bg-gradient-to-r from-primary-500 to-secondary-400',
                labelWrapper: 'mb-2',
                label: 'font-medium text-default-700 text-medium',
                value: 'font-medium text-default-500 text-small',
                thumb: [
                  'transition-size',
                  'bg-gradient-to-r from-secondary-400 to-primary-500',
                  'data-[dragging=true]:shadow-lg data-[dragging=true]:shadow-black/20',
                  'data-[dragging=true]:w-7 data-[dragging=true]:h-7 data-[dragging=true]:after:h-6 data-[dragging=true]:after:w-6',
                ],
                step: 'data-[in-range=true]:bg-black/30 dark:data-[in-range=true]:bg-white/50',
              }}
              tooltipProps={{
                offset: 10,
                placement: 'bottom',
                classNames: {
                  base: [
                    'before:bg-gradient-to-r before:from-secondary-400 before:to-primary-500',
                  ],
                  content: [
                    'py-2 shadow-xl',
                    'text-white bg-gradient-to-r from-secondary-400 to-primary-500',
                  ],
                },
              }}
            />

            <Button
              isLoading={isLoading}
              className="mt-5"
              type="submit"
              color="primary"
            >
              Отправить
            </Button>
          </form>
        </Card>
      </Container>
    </div>
  );
}
