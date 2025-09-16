"use client";
import clsx from "clsx";
import Image from "next/image";
import { CSSProperties } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const AppPreviewImage = (props: { src: string; size: number }) => {
  return (
    <div
      style={{ "--size": `${props.size}px` } as CSSProperties}
      className={clsx("h-[var(--size)] w-[var(--size)] relative")}
    >
      <Image
        alt="app_preview"
        src={props.src}
        fill
        className={clsx("object-fit object-center")}
      />
    </div>
  );
};

export const IntroductionCarousel = () => {
  return (
    <div className={clsx("max-w-[600px]")}>
      <Swiper loop autoplay={{ delay: 3000 }} modules={[Autoplay]}>
        <SwiperSlide className={clsx("flex flex-col items-center")}>
          <AppPreviewImage src="/app_preview/app_preview_1.png" size={600} />
        </SwiperSlide>
        <SwiperSlide className={clsx("flex flex-col items-center")}>
          <AppPreviewImage src="/app_preview/app_preview_1.png" size={600} />
        </SwiperSlide>
        <SwiperSlide className={clsx("flex flex-col items-center")}>
          <AppPreviewImage src="/app_preview/app_preview_1.png" size={600} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
