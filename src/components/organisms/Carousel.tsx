import { TECK_STACK } from '@constants/index';
import '@css/swiper.css';
import { Chip } from '@mui/material';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Mousewheel } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function Carousel() {
  return (
    <Swiper
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
        reverseDirection: true,
      }}
      direction={'horizontal'}
      slidesPerView={1}
      spaceBetween={1}
      mousewheel={false}
      modules={[Mousewheel, Autoplay]}
      className="mySwiper"
    >
      {TECK_STACK.map((list, index) => (
        <SwiperSlide key={index}>
          {list.map((step) => (
            <Chip
              key={step.id}
              label={step.tech}
              variant="outlined"
              sx={{ margin: '16px 16px 0px 0' }}
            />
          ))}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
