export const validators = {
  required: (value: string) =>
    value.trim().length > 0,

  email: (value: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),

  password: (value: string) =>
    value.length >= 6,
};