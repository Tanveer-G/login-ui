import { type ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";

import createAccountFields from "../constants/formFields";
import { PATHS } from "../routes/paths";
import { areFieldsFilled } from "../utils/formValidation";

import { OutlinedField } from "./OutlinedField";
import RadioGroupField from "./RadioGroupField";

export interface CreateAccountForm {
  name: string;
  number: string;
  email: string;
  password: string;
  companyName: string;
  agency: "yes" | "no";
}

const INITIAL_FORM_DATA: CreateAccountForm = {
  name: "",
  number: "",
  email: "",
  password: "",
  companyName: "",
  agency: "yes",
};

const AGENCY_OPTIONS = [
  {
    label: "Yes",
    value: "yes",
  },
  {
    label: "No",
    value: "no",
  },
] as const;

export default function CreateAccount() {
  const [formData, setFormData] =
    useState<CreateAccountForm>(INITIAL_FORM_DATA);

  const updateField = <K extends keyof CreateAccountForm>(
    field: K,
    value: CreateAccountForm[K]
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleInputChange =
    <K extends keyof CreateAccountForm>(field: K) =>
    (event: ChangeEvent<HTMLInputElement>) => {
      updateField(field, event.target.value as CreateAccountForm[K]);
    };

  const handleAgencyChange = (
    value: CreateAccountForm["agency"]
  ) => {
    updateField("agency", value);
  };

  const isFormValid = areFieldsFilled({
    name: formData.name,
    number: formData.number,
    email: formData.email,
    password: formData.password,
    companyName: formData.companyName,
  });

  const handleCreateAccount = (
    event: React.MouseEvent<HTMLAnchorElement>
  ) => {
    if (!isFormValid) {
      event.preventDefault();
    }
  };

  return (
    <section className="flex h-full flex-col justify-between pt-10 pb-7.5">
      <div>
        <div className="mb-7.75">
          <h1 className="text-28px font-medium leading-9 text-primary">
            Create your
            <br />
            PopX account
          </h1>
        </div>

        <ul className="space-y-7.25">
          {createAccountFields.map((field) => (
            <li key={field.name}>
              <OutlinedField
                label={field.label}
                placeholder={field.placeholder}
                required={field.required}
                type={field.type}
                value={formData[field.name]}
                onChange={handleInputChange(field.name)}
              />
            </li>
          ))}
        </ul>

        <div className="mt-4.5">
          <RadioGroupField
            label="Are you an Agency?"
            name="agency"
            required
            value={formData.agency}
            onChange={handleAgencyChange}
            options={AGENCY_OPTIONS}
          />
        </div>
      </div>

      <Link
        to={PATHS.PROFILE.SETTINGS}
        aria-disabled={!isFormValid}
        onClick={handleCreateAccount}
        className={`
          mt-6 flex h-11.5 w-full items-center justify-center rounded-md
          text-base font-medium leading-4.25 text-white transition-colors
          ${
            isFormValid
              ? "bg-brand hover:bg-brand/90"
              : "cursor-not-allowed bg-border"
          }
        `}
      >
        Create Account
      </Link>
    </section>
  );
}