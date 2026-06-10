import { type ButtonHTMLAttributes } from "react";

interface FormSubmitButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function FormSubmitButton({
  children,
  disabled,
  className = "",
  ...props
}: FormSubmitButtonProps) {
  return (
    <button
      disabled={disabled}
      className={`
        flex h-11.5 w-full items-center justify-center rounded-md
        text-base font-medium leading-4.25 text-white
        transition-colors
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-brand
        focus-visible:ring-offset-2
        ${
          disabled
            ? "cursor-not-allowed bg-border"
            : "bg-brand hover:bg-brand/90"
        }
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}