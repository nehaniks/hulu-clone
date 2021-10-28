import Image from "next/image";
import HeaderItem from "./headerItem";

import {
  BadegeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";

export default function Header() {
  return (
    <header className="">
      <div>
        <HeaderItem title="HOME" Icon={HomeIcon} />
      </div>
      <Image
        className="object-contain"
        src="https://links.papareact.com/ua6"
        alt="logo"
        width={200}
        height={100}
      />
    </header>
  );
}
