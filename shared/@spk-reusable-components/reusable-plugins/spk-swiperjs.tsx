import React from 'react';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
// Import Swiper modules
import { Navigation, Pagination, Autoplay, Thumbs, EffectFade, EffectCube, EffectFlip, EffectCoverflow, Mousewheel } from 'swiper/modules';
import { AutoplayOptions, CoverflowEffectOptions, CubeEffectOptions, SwiperModule, SwiperOptions, ThumbsOptions } from 'swiper/types';



interface SwiperComponentProps {
  slides: React.ReactNode[]; // Array of slide components or elements
  navigation?: boolean;
  pagination?: boolean;
  scrollbar?: boolean;
  autoplay?: AutoplayOptions | boolean;
  loop?: boolean;
  spaceBetween?: number;
  slidesPerView?: number;
  centeredSlides?: boolean;
  mousewheel?: boolean;
  grabCursor?: boolean;
  onSlideChange?: (swiper: SwiperClass) => void; // Callback for slide change
  onInit?: (swiper: SwiperClass) => void // Callback for initialization
  className?: string; // Custom class name for the Swiper
  style?: React.CSSProperties; // Custom styles for the Swiper\
  modules?: SwiperModule[];
  customModules?: SwiperModule[];
  breakpoint?: {
    [width: number]: SwiperOptions;
    [ratio: string]: SwiperOptions;
  };
  mainClass?: string;
  onswiper?: (swiper: SwiperClass) => void;
  keyboard?: boolean;
  thumb?: ThumbsOptions
  watchslide?: boolean;
  freemode?: boolean;
  effect?: string;
  direction?: 'horizontal' | 'vertical';
  cubeEffect?: CubeEffectOptions
  coverflowEffect?: CoverflowEffectOptions
  initialSlide?: number;
}

const SpkSwiperJs: React.FC<SwiperComponentProps> = ({
  slides,
  navigation = false,
  pagination = false,
  scrollbar = false,
  autoplay = false,
  loop = false,
  keyboard = false,
  mousewheel = false,
  spaceBetween,
  breakpoint,
  slidesPerView,
  initialSlide,
  centeredSlides = false,
  grabCursor = true,
  watchslide = false,
  freemode = false,
  onSlideChange,
  onInit,
  className,
  mainClass,
  direction,
  onswiper,
  effect,
  cubeEffect,
  coverflowEffect,
  thumb,
  style,
  customModules = [],
  ...rest
}) => {
  const modules = [Navigation, Pagination, Autoplay, Thumbs, EffectFade, EffectCube, EffectFlip, EffectCoverflow, Mousewheel, ...customModules];
  return (
    <Swiper
      modules={modules}
      navigation={navigation}
      pagination={pagination}
      scrollbar={scrollbar}
      autoplay={autoplay === true ? { delay: 2500, disableOnInteraction: false } : autoplay} // Set autoplay options
      loop={loop}
      thumbs={thumb}
      onSwiper={onswiper}
      effect={effect}
      watchSlidesProgress={watchslide}
      freeMode={freemode}
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      initialSlide={initialSlide}
      centeredSlides={centeredSlides}
      grabCursor={grabCursor}
      onSlideChange={onSlideChange}
      onInit={onInit}
      className={className}
      mousewheel={mousewheel}
      keyboard={keyboard}
      direction={direction}
      cubeEffect={cubeEffect}
      coverflowEffect={coverflowEffect}
      breakpoints={breakpoint}
      style={style}
      {...rest}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index} className={mainClass}>{slide}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SpkSwiperJs;
