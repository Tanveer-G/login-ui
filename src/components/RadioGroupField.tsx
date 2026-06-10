import React from "react";

export interface RadioOption {
  label: string;
  value: string;
}

export interface RadioGroupFieldProps {
  label: string;
  name: string;
  value: string;
  options: RadioOption[];
  required?: boolean;
  disabled?: boolean;
  error?: string;
  className?: string;
  onChange: (value: string) => void;
}



const RadioGroupField: React.FC<RadioGroupFieldProps> = ({
  label,
  name,
  value,
  options,
  required = false,
  disabled = false,
  error,
  className = "",
  onChange,
}) => {
  return (
    <fieldset className={`w-full ${className}`}>
      <legend className="mb-2.5 text-[13px] leading-4.25 font-medium text-primary">
        {label}{""}
        {required && (
          <span className="ml-1 text-error">*</span>
        )}
      </legend>

      <div
        role="radiogroup"
        aria-invalid={!!error}
        className="flex items-center gap-5.75"
      >
        {options.map((option) => {
          const checked = value === option.value;

          return (
            <label
              key={option.value}
              className={`
                flex cursor-pointer items-center gap-3
                ${disabled ? "cursor-not-allowed opacity-50" : ""}
              `}
            >
              <input
                type="radio"
                name={name}
                value={option.value}
                checked={checked}
                disabled={disabled}
                onChange={(e) =>
                  onChange(e.target.value)
                }
                className="sr-only peer"
              />

              <div
                className={`
                  flex size-5.5 items-center justify-center
                  rounded-full border transition-all duration-200
                  ${
                    checked
                      ? "border-brand"
                      : "border-border"
                  }
                `}
              >
                <div
                  className={`
                    size-3 rounded-full transition-all duration-200
                    ${
                      checked
                        ? "bg-brand"
                        : "bg-transparent"
                    }
                  `}
                />
              </div>

              <span className="text-sm leading-4.25 text-primary">
                {option.label}
              </span>
            </label>
          );
        })}
      </div>

      {error && (
        <p className="mt-2 text-sm text-red-500">
          {error}
        </p>
      )}
    </fieldset>
  );
};

export default RadioGroupField;