import AnimateWaves from '@/shared/ui/animate-waves';
import { Container } from '@/shared/ui/wrapppers/container';
import { Typography } from '@/shared/ui/typography';
import { Image } from '@nextui-org/image';
import phoneImage from '@/shared/assets/images/hero/phone.png';
import { Button, ButtonGroup } from '@nextui-org/button';
import AnimateBackgroundParticles from '@/shared/ui/animate-background-particles';
import { BsWhatsapp } from 'react-icons/bs';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { LiaTelegramPlane } from 'react-icons/lia';
import { RiShakeHandsLine } from 'react-icons/ri';
import { Tooltip } from '@nextui-org/tooltip';

export default function HeroSection() {
  return (
    <section className="relative mb-32 bg-blend-difference">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <AnimateBackgroundParticles className="absolute top-0 left-0 w-full h-full" />
      </div>
      <Container flares={true} className="relative -mb-32 z-[2]">
        <div className="flex items-start justify-between">
          <div>
            <Typography tag="h1">
            "IT-решения для роста и эффективности"
            </Typography>
            <Typography className="text-foreground bg-blend-difference mix-blend-difference my-5 mr-5">
            "Technicorn" — это IT-аутсорсинговая компания с многолетним опытом разработки цифровых продуктов. 
            Мы создаем: веб-сайты, интернет-магазины, мобильные приложения, CRM-системы, а также занимаемся SEO-оптимизацией, 
            UX/UI дизайном и графическим оформлением. Наши услуги помогут вашему бизнесу стать современным и эффективным.
            </Typography>
            <div className="flex flex-col justify-center items-center gap-1">
              <ButtonGroup className="shadow-xl">
                <Button className="pointer-events-none" disabled={true}>
                  Связь с нами
                </Button>
                <Tooltip placement="bottom" content="Написать нам на WhatsApp">
                  <Button className="bg-green-400 color-white fill-white">
                    <BsWhatsapp className="h-5 w-5 color-inherit fill-inherit" />
                  </Button>
                </Tooltip>
                <Tooltip placement="bottom" content="Написать нам в Telegram">
                  <Button className="bg-blue-400 color-white fill-white">
                    <LiaTelegramPlane className="h-5 w-5 color-inherit fill-inherit" />
                  </Button>
                </Tooltip>
                <Tooltip placement="bottom" content="Написать нам на почту">
                  <Button className="bg-orange-400 color-white fill-white">
                    <MdOutlineAlternateEmail className="h-5 w-5 color-inherit fill-inherit" />
                  </Button>
                </Tooltip>
                <Tooltip placement="bottom" content="Оставить заявку">
                  <Button className="bg-purple-400 color-white fill-white">
                    <RiShakeHandsLine className="h-5 w-5 color-inherit fill-inherit" />
                  </Button>
                </Tooltip>
              </ButtonGroup>
            </div>
          </div>
          <Image className="animate-flying" src={phoneImage.src} />
        </div>
      </Container>
      <AnimateWaves className="absolute bottom-0 left-0 w-full bg-blend-difference z-[1]" />
    </section>
  );
}
