import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type AvatarUserProps = {
  alt?: string;
  src?: string;
  fallback: string;
  className?: string;
};
const AvatarUser = ({ alt, src, fallback  , className}: AvatarUserProps) => {
  return (
    <div>
      <Avatar className={`size-6 border rounded-full shadow-lg ring-4 ring-muted ${className}`}>
        <AvatarImage alt={alt} src={src} />
        <AvatarFallback>{fallback}</AvatarFallback>
      </Avatar>
    </div>
  );
};

export default AvatarUser;
