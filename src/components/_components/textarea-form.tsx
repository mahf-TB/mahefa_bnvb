import { type TextareaHTMLAttributes, useId } from "react";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface TextareaFormProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  textareaClassName?: string;
}

export default function TextareaForm({
  label,
  placeholder = "Leave a comment",
  textareaClassName = "resize-none",
  className = "",
  ...textareaProps
}: TextareaFormProps) {
  const id = useId();

  return (
    <div className={`*:not-first:mt-2 ${className}`}>
      {label && <Label htmlFor={id}>{label}</Label>}
      <Textarea
        className={textareaClassName}
        id={id}
        placeholder={placeholder}
        {...textareaProps}
      />
    </div>
  );
}
