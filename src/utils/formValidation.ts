export const isEmpty = (value: string) => {
  return value.trim() === "";
};

export const areFieldsFilled = <T extends object>(
  fields: T
): boolean =>
  Object.values(fields).every(
    (value) =>
      typeof value === "string" &&
      value.trim().length > 0
  );