import Image from "next/image";

export default function LogoOnirtech() {
  return (
    <span className="text-green4 flex gap-2 items-center font-maven">
      <Image src="/images/onirtech.webp" alt="Logo Onirtech" width={50} height={50} className="size-12.5 object-contain" />
    </span>
  );
}
