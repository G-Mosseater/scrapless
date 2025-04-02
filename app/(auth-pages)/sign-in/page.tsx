import { LoginForm } from "../../../components/signInForm";
import NavBar from "../../../components/nav-bar";

export default function Page() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">

        <LoginForm/>
        <NavBar/>
      </div>
      
    </div>
  )
}
