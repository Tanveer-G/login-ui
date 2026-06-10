const createAccountFields = [
  {
    name: "name",
    label: "Full Name",
    placeholder: "Enter full name",
    type: "text",
    required: true,
  },
  {
    name: "number",
    label: "Phone Number",
    placeholder: "Enter phone number",
    type: "tel",
    required: true,
  },
  {
    name: "email",
    label: "Email Address",
    placeholder: "Enter email address",
    type: "email",
    required: true,
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter password",
    type: "password",
    required: true,
  },
  {
    name: "companyName",
    label: "Company Name",
    placeholder: "Enter company name",
    type: "text",
    required: false,
  },
];

export default createAccountFields;