"use client";
import "swiper/css";
import "swiper/css/navigation";

import clsx from "clsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ArchivementCard } from "../ArchivementCard";
import { CSSProperties } from "react";

export const AchievementsCarousel = () => {
  return (
    <div className={clsx("w-full flex justify-center h-[500px]")}>
      <div
        className={clsx("flex justify-center items-center w-[1800px] h-full")}
      >
        <Swiper
          style={
            {
              "--swiper-navigation-size": "50px", // prev/nextボタンのサイズ
              "--swiper-navigation-sides-offset": "565px", // prev/nextボタンのX位置
            } as CSSProperties
          }
          className={clsx(
            "h-full",
            // "bg-purple-500",
            "[&>.swiper-wrapper]:items-center", // wrapperの中央揃え
            "[&_.swiper-slide-active]:scale-110", // swiper-slideが中心に来たときの装飾
            "[&_.swiper-slide]:!transition-transform [&_.swiper-slide]:!duration-150 [&_.swiper-slide]:!ease-in-out", // swiper-slideの拡大縮小をなめらかにするためのアニメーション
            "[&_.swiper-slide]:!flex [&_.swiper-slide]:!justify-center [&_.swiper-slide]:!h-auto", // 上下中央寄せにする措置
            "[&_.swiper-button-prev]:rounded-full [&_.swiper-button-prev]:bg-blue-300 [&_.swiper-button-prev]:p-2", // prevボタンの装飾
            "[&_.swiper-button-next]:rounded-full [&_.swiper-button-next]:bg-blue-300 [&_.swiper-button-next]:p-2", // nextボタンの装飾
          )}
          slidesPerView={3}
          // centeredSlides
          // https://swiperjs.com/swiper-api#param-loop
          // https://qiita.com/takopitto/questions/c9e4268742358d8eeef8
          // loop: trueを使用する場合、要素数 >= slidesPerView * 2である必要がある
          loop={true}
          centeredSlides
          initialSlide={0}
          modules={[Navigation]}
          navigation={{
            enabled: true,
          }}
          pagination={{
            clickable: true,
          }}
        >
          <SwiperSlide>
            <ArchivementCard className={clsx("w-[500px]")} />
          </SwiperSlide>
          <SwiperSlide>
            <ArchivementCard className={clsx("w-[500px]")} />
          </SwiperSlide>
          <SwiperSlide>
            <ArchivementCard className={clsx("w-[500px]")} />
          </SwiperSlide>
          <SwiperSlide>
            <ArchivementCard className={clsx("w-[500px]")} />
          </SwiperSlide>
          <SwiperSlide>
            <ArchivementCard className={clsx("w-[500px]")} />
          </SwiperSlide>
          <SwiperSlide>
            <ArchivementCard className={clsx("w-[500px]")} />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
