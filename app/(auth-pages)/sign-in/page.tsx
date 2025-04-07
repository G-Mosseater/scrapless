import { LoginForm } from "../../../components/signInForm";
import loginBanana from "/public/loginBanana.gif";
import Image from "next/image";

export default function Page() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center  md:p-10 ">
      <div className="w-full max-w-sm">
        <div className="flex justify-center items-center ">
          <h1 className="text-center text-[34px] font-changa font-bold">Scrapless</h1>
        </div>{" "}
        <Image src={loginBanana} alt="Banana Gif" unoptimized></Image>
        <LoginForm />
      </div>
    </div>
  );
}
