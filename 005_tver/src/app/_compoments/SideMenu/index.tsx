"use client";
import clsx from "clsx";
import { SideMenuItem } from "../SideMenuItem";
import { IconGrid, IconHome, IconSearch, IconTV, IconUser } from "../Icons";
import { useState } from "react";

export const SideMenu = () => {
  const [activeMenuTitle, setActiveMenuTitle] = useState<string>("ホーム");

  return (
    <nav className={clsx("flex flex-col items-center w-[250px]")}>
      <SideMenuItem
        type="large"
        title="ホーム"
        icon={<IconHome />}
        active={activeMenuTitle === "ホーム"}
      />
      <SideMenuItem type="large" title="マイページ" icon={<IconUser />} />
      <SideMenuItem type="large" title="さがす" icon={<IconSearch />} />
      <SideMenuItem type="large" title="リアルタイム" icon={<IconTV />} />
      <SideMenuItem
        type="large"
        title="カテゴリ"
        icon={<IconGrid />}
        disabled
      />
      <SideMenuItem type="small" title="ドラマ" />
      <SideMenuItem type="small" title="バラエティ" />
      <SideMenuItem type="small" title="アニメ" />
      <SideMenuItem type="small" title="ニュース" />
      <SideMenuItem type="small" title="世界陸上" />
      <SideMenuItem type="small" title="スポーツ" />
      <SideMenuItem type="small" title="その他" />
    </nav>
  );
};
