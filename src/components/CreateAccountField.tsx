import type { HTMLInputTypeAttribute } from "react";

export type CreateAccountFieldName =
  | "name"
  | "number"
  | "email"
  | "password"
  | "companyName";

export interface CreateAccountField {
  name: CreateAccountFieldName;
  label: string;
  placeholder: string;
  required: boolean;
  type?: HTMLInputTypeAttribute;
  autoComplete?: string;
}

const createAccountFields: CreateAccountField[] = [
  {
    name: "name",
    label: "Full Name",
    placeholder: "Enter full name",
    required: true,
  },
  {
    name: "number",
    label: "Phone number",
    placeholder: "Enter phone number",
    required: true,
  },
  {
    name: "email",
    label: "Email Address",
    placeholder: "Enter email address",
    required: true,
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter password",
    required: true,
    type: "password",
  },
  {
    name: "companyName",
    label: "Company Name",
    placeholder: "Enter company name",
    required: true,
  },
];

export default createAccountFields;