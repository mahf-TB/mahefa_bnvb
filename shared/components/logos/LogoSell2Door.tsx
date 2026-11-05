import Image from "next/image";

export default function LogoSell2Door() {
  return (
    <span className="text-green4 flex gap-2 items-center font-maven">
      <Image src="/images/sell2door.webp" alt="Logo Sell2Door" width={50} height={50} className="size-12.5 object-contain" />
    </span>
  );
}
