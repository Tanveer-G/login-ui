export interface CreateAccountForm {
  name: string;
  number: string;
  email: string;
  password: string;
  companyName: string;
  agency: "yes" | "no";
}