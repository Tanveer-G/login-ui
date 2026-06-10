import { Link } from "react-router-dom";
import { PATHS } from "../routes/paths";

export default function Home() {
  return (
    <div className="flex min-h-full w-full items-end">
      <div className="w-full space-y-7.25 pb-10.25">
        <div className="space-y-2.5">
          <h1 className="text-28px font-medium text-primary">
            Welcome to PopX
          </h1>

          <p className="text-18px text-primary/60">
            Lorem ipsum dolor sit amet,
            <br />
            consectetur adipiscing elit,
          </p>
        </div>

        <div className="flex flex-col space-y-2.5">
          <Link
            to={PATHS.AUTH.REGISTER}
            className="flex h-11.5 items-center justify-center rounded-md bg-brand text-white"
          >
            Create Account
          </Link>

          <Link
            to={PATHS.AUTH.LOGIN}
            className="flex h-11.5 items-center justify-center rounded-md bg-brand-soft"
          >
            Already Registered? Login
          </Link>
        </div>
      </div>
    </div>
  );
}