import { type ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";
import { OutlinedField } from "./OutlinedField";
import { PATHS } from "../routes/paths";
import { areFieldsFilled } from "../utils/formValidation";   // ✅ reuse existing validation

type LoginForm = {
  email: string;
  password: string;
};

const INITIAL_LOGIN_DATA: LoginForm = {
  email: "",
  password: "",
};

export default function Login() {
  const [form, setForm] = useState<LoginForm>(INITIAL_LOGIN_DATA);

  const handleChange =
    <K extends keyof LoginForm>(field: K) =>
    (e: ChangeEvent<HTMLInputElement>) => {
      setForm((prev) => ({
        ...prev,
        [field]: e.target.value,
      }));
    };

  // ✅ validation – only email and password are required
  const isFormValid = areFieldsFilled({
    email: form.email,
    password: form.password,
  });

  // ✅ prevent navigation when form is invalid (same pattern as CreateAccount)
  const handleSubmit = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isFormValid) {
      e.preventDefault();
    } else {
      console.log("Login Data:", form);   // real auth logic goes here
    }
  };

  return (
    <section className="space-y-3.5 py-10">
      {/* Header – unchanged */}
      <div className="w-max space-y-3.5">
        <h1 className="text-28px font-medium leading-9 text-primary">
          Sign in to your <br /> PopX account
        </h1>
        <p className="text-18px leading-6.5 text-primary/60">
          Lorem ipsum dolor sit amet, <br />
          consectetur adipiscing elit,
        </p>
      </div>

      {/* Form – unchanged structure, only type="email" added for better UX */}
      <div className="mt-6.5 space-y-5.75">
        <OutlinedField
          label="Email Address"
          placeholder="Enter email address"
          value={form.email}
          required
          type="email"                   
          onChange={handleChange("email")}
        />

        <OutlinedField
          label="Password"
          placeholder="Enter password"
          value={form.password}
          required
          type="password"
          onChange={handleChange("password")}
        />
      </div>

      {/* Button – same <Link> element, now with dynamic colour & disabled behaviour */}
      <Link
        to={PATHS.PROFILE.SETTINGS}
        onClick={handleSubmit}
        aria-disabled={!isFormValid}
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
        Login
      </Link>
    </section>
  );
}