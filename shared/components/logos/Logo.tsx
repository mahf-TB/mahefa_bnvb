import Image from "next/image";

export default function LogoMB() {
  return (
    <span className="text-green4 flex gap-2 items-center font-maven">
      <Image src="/images/logo_mb.webp" alt="Logo Mahefa" width={50} height={50} className="size-12.5 object-contain" />
    </span>
  );
}
