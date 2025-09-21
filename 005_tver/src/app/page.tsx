import clsx from "clsx";
import { MainCarousel } from "./_compoments/MainCarousel";
import { SubCarousel } from "./_compoments/SubCarousel";

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
      <div className={clsx("mt-8", "p-6")}>
        <div className={clsx("mt-6", "flex flex-col items-start gap-6")}>
          <SubCarousel
            items={[
              {
                imageSrc: "/avatar_image.png",
              },
              {
                imageSrc: "/avatar_image.png",
              },
              {
                imageSrc: "/avatar_image.png",
              },
              {
                imageSrc: "/avatar_image.png",
              },
              {
                imageSrc: "/avatar_image.png",
              },
              {
                imageSrc: "/avatar_image.png",
              },
            ]}
          />
        </div>
        <div className={clsx("mt-6", "flex flex-col items-start gap-6")}>
          <SubCarousel
            label="いよいよクライマックス！放送中ドラマ"
            items={[
              {
                imageSrc: "/avatar_image.png",
                information: {
                  title: "タイトル",
                  description: "説明".repeat(20),
                  subDescription: "9月17日放送分",
                },
              },
              {
                imageSrc: "/avatar_image.png",
                information: {
                  title: "タイトル",
                  description: "説明".repeat(20),
                  subDescription: "9月17日放送分",
                },
              },
              {
                imageSrc: "/avatar_image.png",
                information: {
                  title: "タイトル",
                  description: "説明".repeat(20),
                  subDescription: "9月17日放送分",
                },
              },
              {
                imageSrc: "/avatar_image.png",
                information: {
                  title: "タイトル",
                  description: "説明".repeat(20),
                  subDescription: "9月17日放送分",
                },
              },
              {
                imageSrc: "/avatar_image.png",
                information: {
                  title: "タイトル",
                  description: "説明".repeat(20),
                  subDescription: "9月17日放送分",
                },
              },
              {
                imageSrc: "/avatar_image.png",
                information: {
                  title: "タイトル",
                  description: "説明".repeat(20),
                  subDescription: "9月17日放送分",
                },
              },
            ]}
          />
          <SubCarousel
            label="再生数上位の名作ドラマ"
            items={[
              {
                imageSrc: "/avatar_image.png",
                information: {
                  title: "タイトル",
                },
              },
              {
                imageSrc: "/avatar_image.png",
                information: {
                  title: "タイトル",
                },
              },
              {
                imageSrc: "/avatar_image.png",
                information: {
                  title: "タイトル",
                },
              },
              {
                imageSrc: "/avatar_image.png",
                information: {
                  title: "タイトル",
                },
              },
              {
                imageSrc: "/avatar_image.png",
                information: {
                  title: "タイトル",
                },
              },
              {
                imageSrc: "/avatar_image.png",
                information: {
                  title: "タイトル",
                },
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
