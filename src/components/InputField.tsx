import type { InputHTMLAttributes } from "react";

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  required?: boolean;
}

export function InputField({
  label,
  required = false,
  className = "",
  ...props
}: Readonly<InputFieldProps>) {
  return (
    <div className="flex flex-col gap-1">
      <label
        htmlFor={props.id}
        className="text-sm font-medium text-brand"
      >
        {label}
        {required && <span className="ml-1">*</span>}
      </label>

      <input
        {...props}
        className={`
          h-12 w-full rounded-md border border-border
          bg-white px-4
          text-text
          placeholder:text-secondary
          outline-none
          transition-colors
          focus:border-brand
          ${className}
        `}
      />
    </div>
  );
}