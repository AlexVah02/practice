import { Container } from '@/shared/ui/wrapppers/container';
import { Card, CardFooter } from '@nextui-org/card';
import { Image } from '@nextui-org/image';
import { Button } from '@nextui-org/button';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Typography } from '@/shared/ui/typography';
import { Autoplay } from 'swiper/modules';

export default function OurTeam() {
  return (
    <Container flares={true} className="py-24">
      <Typography className="text-center mb-10" tag="h2">
        Наша команда
      </Typography>
      <Swiper
        modules={[Autoplay]}
        speed={1000}
        autoplay={{
          pauseOnMouseEnter: true,
          delay: 2500,
          disableOnInteraction: false,
        }}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {[...Array(10)].map((_, index) => (
          <SwiperSlide key={index}>
            <Card
              isFooterBlurred
              radius="lg"
              className="border-none aspect-[10/16]"
            >
              <Image
                alt="Woman listing to music"
                className="object-cover w-full h-full aspect-[10/16]"
                src="https://nextui.org/images/hero-card.jpeg"
              />
              <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <Typography className="text-tiny text-white/80 me-1 text-nowrap overflow-hidden overflow-ellipsis">
                  Иванов Иван
                  <br />
                  Front-end разработчик
                </Typography>
                <Button
                  className="text-tiny text-white bg-black/20"
                  variant="flat"
                  color="default"
                  radius="lg"
                  size="sm"
                >
                  Подробнее
                </Button>
              </CardFooter>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}
