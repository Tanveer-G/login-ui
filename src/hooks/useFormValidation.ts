import { useMemo } from "react";

export const useFormValidation = (
  values: Record<string, string>
) => {
  const isValid = useMemo(() => {
    return Object.values(values).every(
      (value) => value.trim() !== ""
    );
  }, [values]);

  return isValid;
};