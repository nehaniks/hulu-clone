import Image from "next/image";

export default function Header() {
  return (
    <header className="">
      <Image
        className="object-contain bg-black"
        src="https://links.papareact.com/ua6"
        alt="logo"
        width={200}
        height={100}
      />
    </header>
  );
}
