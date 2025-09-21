"use client";
import clsx from "clsx";
import Image from "next/image";
import { useRef, useState } from "react";
import "swiper/css";
import { Swiper, SwiperClass, SwiperSlide, useSwiper } from "swiper/react";
import { Autoplay, Mousewheel } from "swiper/modules";
import Link from "next/link";
import { IconArrowLeft, IconArrowRight } from "../Icons";

type MainCarouselItem = {
  imageSrc: string;
  title: string;
  href: string;
};

type Props = {
  items: MainCarouselItem[];
};

export const MainCarousel = (props: Props) => {
  const { items } = props;
  const [currentSlide, setCurrentSlide] = useState<MainCarouselItem>();
  const swiperRef = useRef<SwiperClass>(null);
  const [showNavigateButton, setShowNavigateButton] = useState(false);

  return (
    <div
      onMouseOver={() => setShowNavigateButton(true)}
      onMouseOut={() => setShowNavigateButton(false)}
    >
      <Swiper
        className={clsx(
          "relative z-[1]",
          "w-full max-w-full overflow-hidden",
          // "[&_.swiper-slide]:w-[500px]",
        )}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onInit={(swiper) => {
          setCurrentSlide(items[swiper.activeIndex]);
        }}
        loop={true}
        onRealIndexChange={(swiper) => {
          setCurrentSlide(items[swiper.realIndex]);
        }}
        slidesPerView={2}
        initialSlide={0}
        centeredSlides
        spaceBetween={10}
        watchOverflow
        autoplay={{
          delay: 3000,
        }}
        modules={[Autoplay, Mousewheel]}
        mousewheel={{
          forceToAxis: true,
        }}
      >
        {items.map((i) => (
          <SwiperSlide>
            <Link href="/" className={clsx("cursor-pointer")}>
              <div className={clsx("aspect-video")}>
                <Image
                  alt={i.title}
                  src={i.imageSrc}
                  fill
                  className={clsx("object-cover object-center")}
                />
              </div>
            </Link>
          </SwiperSlide>
        ))}
        {showNavigateButton && (
          <>
            <button
              className={clsx(
                "absolute z-[9999] top-1/2 translate-y-[-50%] left-0",
                "w-[70px] h-[70px] bg-sky-500 opacity-70 rounded-r-full cursor-pointer",
                "flex justify-center items-center",
              )}
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <IconArrowLeft className={clsx("text-white")} size={40} />
            </button>
            <button
              className={clsx(
                "absolute z-[9999] top-1/2 translate-y-[-50%] right-0",
                "w-[70px] h-[70px] bg-sky-500 opacity-70 rounded-l-full cursor-pointer",
                "flex justify-center items-center",
              )}
              onClick={() => swiperRef.current?.slideNext()}
            >
              <IconArrowRight className={clsx("text-white")} size={40} />
            </button>
          </>
        )}
      </Swiper>
      <div className={clsx("w-full flex justify-center")}>
        <div className={clsx("w-[50%] font-bold")}>{currentSlide?.title}</div>
        {/* 表示スライド枚数2の割合に合わせて幅を設定 */}
      </div>
    </div>
  );
};
