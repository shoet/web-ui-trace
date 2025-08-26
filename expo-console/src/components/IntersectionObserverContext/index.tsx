"use client";
import { PropsWithChildren, useEffect, useState } from "react";

export const IntersectionObserverContainer = (props: PropsWithChildren) => {
  const { children, ...rest } = props;

  const ids = [
    "about-you",
    "email",
    "change-password",
    "two-factor-authentication",
    "connections",
  ];

  type Intersections = Record<string, DOMRectReadOnly | undefined>;

  const [intersections, setIntersections] = useState(
    ids.reduce<Intersections>((all, current) => {
      return { ...all, [current]: undefined };
    }, {}),
  );

  const updateIntersections = (
    id: string,
    dom: DOMRectReadOnly | undefined,
  ) => {
    setIntersections((prev) => ({ ...prev, [id]: dom }));
  };

  const isDefinedIntersection = (
    entry: [string, DOMRectReadOnly | undefined],
  ): entry is [string, DOMRectReadOnly] => {
    return entry[1] !== undefined;
  };

  const getTopIntersection = (
    intersections: Intersections,
  ): [string, DOMRectReadOnly] | undefined => {
    const entries = Object.entries(intersections)
      .filter(isDefinedIntersection)
      .sort(([, a], [, b]) => a.top - b.top);
    return entries[0];
  };

  let observers: Record<string, IntersectionObserver> = {};
  const registerObserver = (id: string) => {
    let element = document.getElementById(id);
    if (!element) {
      return;
    }
    let observerOptions = {
      root: null,
      threshold: 0,
    };
    //   entry.target, // 対象要素
    //   entry.boundingClientRect, // 対象要素の外接矩形
    //   entry.intersectionRect, // 表示領域の矩形。画面から見切れていたら表示されている分の高さで反映される。
    //   entry.intersectionRatio, // intersectionRatio と boundingClientRect の比率。何%表示されているかを判別できる
    //   entry.isIntersecting, // 交差交差常態か。rootがnullで領域がビューポートの場合、その中に入っているか。
    //   entry.time, // 交差されたタイミング
    //   entry.rootBounds, // 交差しているルート矩形。rootがnullだったらビューポートの領域になる
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          updateIntersections(entry.target.id, entry.intersectionRect);
        } else {
          updateIntersections(entry.target.id, undefined);
        }
      });
    }, observerOptions);
    observer.observe(element);
    observers[id] = observer;
  };

  useEffect(() => {
    ids.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        element.style.backgroundColor = "";
      }
    });
    const top = getTopIntersection(intersections);
    if (top) {
      const d = document.getElementById(top[0]);
      if (d) {
        d.style.backgroundColor = "red";
      }
    }
  }, [intersections]);

  useEffect(() => {
    ids.forEach((i) => registerObserver(i));

    return () => {
      Object.values(observers).forEach((o) => {
        o.disconnect();
      });
    };
  }, []);

  return <div {...rest}>{children}</div>;
};
