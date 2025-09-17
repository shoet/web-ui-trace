"use client";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { CSSProperties, useMemo, useState } from "react";
import clsx from "clsx";
import { SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper } from "swiper/react";

// https://swiperjs.com/react

/**
 * 3秒おきに境目ありでスクロールするカルーセル
 */
export const Carousel = () => {
  return (
    <Swiper
      className={clsx("w-[500px] h-[300px]")}
      loop={true}
      pagination={true}
      modules={[Pagination, Autoplay]}
      autoplay={{ delay: 3000 }}
    >
      <SwiperSlide className={clsx("bg-red-500")}>hoge</SwiperSlide>
      <SwiperSlide className={clsx("bg-blue-500")}>hoge</SwiperSlide>
      <SwiperSlide className={clsx("bg-yellow-500")}>hoge</SwiperSlide>
      <SwiperSlide className={clsx("bg-green-500")}>hoge</SwiperSlide>
      <SwiperSlide className={clsx("bg-purple-500")}>hoge</SwiperSlide>
    </Swiper>
  );
};

/**
 * 自動で境目なしにスクロールするカルーセル
 */
export const CarouselContinues = () => {
  return (
    <Swiper
      style={
        {
          "--swiper-wrapper-transition-timing-function": "linear",
        } as CSSProperties
      }
      // className={clsx("w-[500px] h-[300px]")}
      className={clsx("[&>.swiper-wrapper]:items-center")} // 子要素の.swiper-wrapperに対してスタイルを当てる
      speed={3000}
      autoplay={{ delay: 0 }}
      slidesPerView={2}
      spaceBetween={30}
      loop={true}
      freeMode={true}
      modules={[Pagination, Autoplay]}
    >
      <SwiperSlide className={clsx("bg-red-500")}>
        <div className={clsx("w-[200px] h-[100px]")}>hoge</div>
      </SwiperSlide>
      <SwiperSlide className={clsx("bg-blue-500")}>
        <div className={clsx("w-[200px] h-[150px]")}>hoge</div>
      </SwiperSlide>
      <SwiperSlide className={clsx("bg-yellow-500")}>hoge</SwiperSlide>
      <SwiperSlide className={clsx("bg-green-500")}>hoge</SwiperSlide>
      <SwiperSlide className={clsx("bg-purple-500")}>hoge</SwiperSlide>
    </Swiper>
  );
};

/**
 * 中央だけズームされるカルーセル
 */
export const CarouselWithCenterZoom = () => {
  const [activeIndex, setActiveIndex] = useState<number>();

  const currentIndex = useMemo(() => {
    return activeIndex || 0;
  }, [activeIndex]);

  return (
    <Swiper
      style={
        {
          "--swiper-navigation-size": "50px", // prev/nextボタンのサイズ
          "--swiper-navigation-sides-offset": "100px", // prev/nextボタンのX位置
        } as CSSProperties
      }
      className={clsx(
        "[&>.swiper-wrapper]:items-center", // wrapperの中央揃え
        "[&_.swiper-slide-active]:border-2 [&_.swiper-slide-active]:border-yellow-300 [&_.swiper-slide-active]:scale-150", // swiper-slideが中心に来たときの装飾
        "[&_.swiper-button-prev]:rounded-full [&_.swiper-button-prev]:bg-blue-300 [&_.swiper-button-prev]:p-2", // prevボタンの装飾
        "[&_.swiper-button-next]:rounded-full [&_.swiper-button-next]:bg-blue-300 [&_.swiper-button-next]:p-2", // nextボタンの装飾
        // "[&_.swiper-slide]:!w-[200px]", // swiper-slideの幅
      )} // 子要素の.swiper-wrapperに対してスタイルを当てる
      slidesPerView={3}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      centeredSlides // アクティブなスライドを中心に
      navigation={{
        enabled: true,
      }}
      modules={[Navigation]}
    >
      <SwiperSlide className={clsx("bg-red-500")}>
        <div className={clsx("h-[100px]")}>0</div>
      </SwiperSlide>
      <SwiperSlide className={clsx("bg-blue-500")}>
        <div className={clsx("h-[150px]")}>1</div>
      </SwiperSlide>
      <SwiperSlide className={clsx("bg-yellow-500")}>2</SwiperSlide>
      <SwiperSlide className={clsx("bg-green-500")}>3</SwiperSlide>
      <SwiperSlide className={clsx("bg-purple-500")}>4</SwiperSlide>
    </Swiper>
  );
};
