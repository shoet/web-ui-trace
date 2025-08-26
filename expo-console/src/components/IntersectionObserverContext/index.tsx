"use client";
import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

type IntersectionObserverContextType = {
  registerIds: (ids: string[]) => void;
};
const IntersectionObserverContext =
  createContext<IntersectionObserverContextType>({
    registerIds: () => {},
  });

export const useIntersectionObserver = () =>
  useContext(IntersectionObserverContext);

export const IntersectionObserverContextProvider = (
  props: PropsWithChildren,
) => {
  const { children } = props;
  const [observerIds, setObserverIds] = useState<string[]>([]);

  const registerIds = (ids: string[]) => {
    setObserverIds(ids);
  };

  const [intersections, setIntersections] = useState<Intersections>({});
  const observersRef = useRef<Record<string, IntersectionObserver>>({});

  const cleanupObservers = () => {
    if (observersRef.current) {
      Object.values(observersRef.current).forEach((o) => o.disconnect());
    }
  };

  useEffect(() => {
    cleanupObservers();

    observerIds.forEach((i) => {
      const observer = createObserver(i);
      if (observer) {
        observersRef.current[i] = observer;
      }
    });

    setIntersections(
      observerIds.reduce<Intersections>((all, current) => {
        return { ...all, [current]: undefined };
      }, {}),
    );

    return () => {
      cleanupObservers();
    };
  }, [observerIds]);

  const updateIntersections = (
    id: string,
    dom: DOMRectReadOnly | undefined,
  ) => {
    setIntersections((prev) => ({ ...prev, [id]: dom }));
  };

  const createObserver = useCallback(
    (id: string) => {
      let element = document.getElementById(id);
      if (!element) {
        return;
      }
      //   entry.target, // 対象要素
      //   entry.boundingClientRect, // 対象要素の外接矩形
      //   entry.intersectionRect, // 表示領域の矩形。画面から見切れていたら表示されている分の高さで反映される。
      //   entry.intersectionRatio, // intersectionRatio と boundingClientRect の比率。何%表示されているかを判別できる
      //   entry.isIntersecting, // 交差交差常態か。rootがnullで領域がビューポートの場合、その中に入っているか。
      //   entry.time, // 交差されたタイミング
      //   entry.rootBounds, // 交差しているルート矩形。rootがnullだったらビューポートの領域になる
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              updateIntersections(entry.target.id, entry.intersectionRect);
            } else {
              updateIntersections(entry.target.id, undefined);
            }
          });
        },
        {
          root: null,
          threshold: 0,
        },
      );
      observer.observe(element);
      return observer;
    },
    [updateIntersections],
  );

  // 交差状態に変化があったら発火する
  useEffect(() => {
    observerIds.forEach((id) => {
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

  return (
    <IntersectionObserverContext
      value={{
        registerIds,
      }}
    >
      {children}
    </IntersectionObserverContext>
  );
};

type Intersections = Record<string, DOMRectReadOnly | undefined>;

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

export const IntersectionObserverContainer = (
  props: { ids: string[] } & PropsWithChildren,
) => {
  const { ids, children } = props;

  const { registerIds } = useIntersectionObserver();
  useEffect(() => {
    registerIds(ids);
  }, [ids]);

  return <>{children}</>;
};
