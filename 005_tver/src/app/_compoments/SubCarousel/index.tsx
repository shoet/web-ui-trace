"use client";
import clsx from "clsx";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import "swiper/css";

type SubCarouselItem = {
  imageSrc: string;
  information?: {
    title: string;
    description?: string;
    subDescription?: string;
  };
};

type Props = {
  items: SubCarouselItem[];
  label?: string;
};

export const SubCarousel = (props: Props) => {
  const { items, label } = props;
  return (
    <section>
      {props.label && <h1 className={clsx("font-bold text-2xl")}>{label}</h1>}
      <Swiper
        className={clsx(
          "relative z-[1]",
          "overflow-hidden",
          "[&_.swiper-slide]:cursor-pointer",
        )}
        loop={true}
        slidesPerView={4.5}
        width={1500}
        spaceBetween={10}
        mousewheel={{
          forceToAxis: true,
        }}
        modules={[Mousewheel]}
      >
        {items.map((i, idx) => (
          <SwiperSlide>
            <div className={clsx("text-sm")}>
              <div className={clsx("relative aspect-video max-w-full")}>
                <Image
                  className={clsx("object-cover object-center rounded-md")}
                  src={i.imageSrc}
                  alt={idx.toString()}
                  fill
                />
              </div>
              {i.information && (
                <div className={clsx("break-words z-[9999]")}>
                  <div className={clsx("font-bold")}>
                    {i.information?.title}
                  </div>
                  {i.information.description && (
                    <div>{i.information.description}</div>
                  )}
                  {i.information.subDescription && (
                    <div className={clsx("text-gray-500")}>
                      {i.information.subDescription}
                    </div>
                  )}
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
