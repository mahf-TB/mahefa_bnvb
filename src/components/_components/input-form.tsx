import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AtSign } from "@hugeicons/core-free-icons";
import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/react";
import { type InputHTMLAttributes, useId } from "react";

interface InputFormProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  icon?: IconSvgElement;
  type?: string;
  iconClassName?: string;
}

export default function InputForm({
  label,
  icon = AtSign,
  type = "email",
  placeholder = "Email",
  iconClassName = "size-4",
  className = "",
  ...inputProps
}: InputFormProps) {
  const id = useId();
  
  return (
    <div className="*:not-first:mt-2">
      {label && <Label htmlFor={id}>{label}</Label>}
      <div className="relative">
        <Input 
          className={`peer ps-9 ${className}`}
          id={id} 
          placeholder={placeholder} 
          type={type}
          {...inputProps}
        />
        <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50">
          <HugeiconsIcon icon={icon} className={iconClassName} />
        </div>
      </div>
    </div>
  );
}
