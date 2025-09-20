import clsx from "clsx";
import { MainCarousel } from "./_compoments/MainCarousel";

export default function Home() {
  return (
    <div className={clsx("w-full min-w-0 overflow-hidden")}>
      <MainCarousel
        items={[
          {
            title: "cat1",
            imageSrc: "/avatar_image.png",
            href: "/",
          },
          {
            title: "cat2",
            imageSrc: "/avatar_image.png",
            href: "/",
          },
          {
            title: "cat3",
            imageSrc: "/avatar_image.png",
            href: "/",
          },
          {
            title: "cat4",
            imageSrc: "/avatar_image.png",
            href: "/",
          },
          {
            title: "cat5",
            imageSrc: "/avatar_image.png",
            href: "/",
          },
          {
            title: "cat6",
            imageSrc: "/avatar_image.png",
            href: "/",
          },
          {
            title: "cat7",
            imageSrc: "/avatar_image.png",
            href: "/",
          },
        ]}
      />
      <div className={clsx("p-6")}></div>
    </div>
  );
}
