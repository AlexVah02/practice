import { Container } from '@/shared/ui/wrapppers/container';
import { Typography } from '@/shared/ui/typography';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Card } from '@nextui-org/card';
import { Image } from '@nextui-org/image';


export default function PartnersClients() {
  return (
    <Container flares={true} className="py-24">
      <Typography className="text-center mb-10" tag="h2">
        Партнёры
        <span className="animate-pulse">/</span>
        Клиенты
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
        {[...Array(4)].map((_, index) => (
          <SwiperSlide key={index}>
            <Card className="aspect-[4/3]">
              <Image
                removeWrapper
                alt="Card background"
                className="z-0 w-full h-full object-cover"
                src="https://nextui.org/images/card-example-2.jpeg"
              />
            </Card>
            
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}
