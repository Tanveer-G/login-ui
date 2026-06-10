import { forwardRef, type InputHTMLAttributes, type ReactNode, useId } from "react";

type OutlinedFieldProps = Omit<InputHTMLAttributes<HTMLInputElement>, "size"> & {
  label: string;
  required?: boolean;
  error?: string;
  helperText?: string;
  leftSlot?: ReactNode;
  rightSlot?: ReactNode;
  wrapperClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
};

function cn(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(" ");
}

export const OutlinedField = forwardRef<HTMLInputElement, OutlinedFieldProps>(
  (
    {
      label,
      required = false,
      error,
      helperText,
      leftSlot,
      rightSlot,
      id,
      className,
      wrapperClassName,
      labelClassName,
      inputClassName,
      disabled,
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const inputId = id ?? generatedId;
    const helperId = helperText ? `${inputId}-helper` : undefined;
    const errorId = error ? `${inputId}-error` : undefined;
    const describedBy = [helperId, errorId].filter(Boolean).join(" ") || undefined;

    return (
      <div className={cn("w-full", wrapperClassName)}>
        <div className="relative">
          <label
            htmlFor={inputId}
            className={cn(
              "absolute left-3.25 top-0 z-10 -translate-y-1/2 bg-bg px-1 min-w-[17px]",
              "text-brand text-[13px] leading-4.25 ",
              disabled && "opacity-60",
              labelClassName
            )}
          >
            <span>{label}</span>
            {required && (
              <span className="ml-0.5 text-error" aria-hidden="true">
                *
              </span>
            )}
          </label>

          <div
            className={cn(
              "flex h-10 items-center rounded-md border bg-bg px-[17.22px] pt-4 pb-3 transition-colors",
              "border-border",
              "focus-within:border-brand focus-within:ring-2 focus-within:ring-brand-soft",
              error && "border-error focus-within:border-error focus-within:ring-error/15",
              disabled && "cursor-not-allowed bg-slate-50 opacity-70",
              className
            )}
          >
            {leftSlot && <span className="mr-2 shrink-0">{leftSlot}</span>}

            <input
              ref={ref}
              id={inputId}
              required={required}
              disabled={disabled}
              aria-invalid={!!error}
              aria-describedby={describedBy}
              className={cn(
                "w-full bg-transparent outline-none",
                "text-primary text-sm leading-4.25",
                "placeholder:text-secondary",
                "disabled:cursor-not-allowed",
                inputClassName
              )}
              {...props}
            />

            {rightSlot && <span className="ml-2 shrink-0">{rightSlot}</span>}
          </div>
        </div>

        {(helperText || error) && (
          <p
            id={error ? errorId : helperId}
            className={cn(
              "mt-1 text-sm",
              error ? "text-error" : "text-secondary"
            )}
          >
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);

OutlinedField.displayName = "OutlinedField";