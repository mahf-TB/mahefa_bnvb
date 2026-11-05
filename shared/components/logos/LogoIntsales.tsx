import Image from "next/image";

export default function LogoIntsales() {
  return (
    <span className="text-green4 flex gap-2 items-center font-maven">
      <Image src="/images/intsales.webp" alt="Logo Intsales" width={50} height={50} className="size-12.5 object-contain" />
    </span>
  );
}
