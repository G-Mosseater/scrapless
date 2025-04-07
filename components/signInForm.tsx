
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { signInAction } from "@/app/actions";
import SignInWithGoogleButton from "./ui/logInWithGoogle";

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (


    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="border-none ">
        <CardHeader className='py-2'>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent className='p-0'>
          <form>
            <div className="flex flex-col gap-6 ">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <Link
                    href="/forgot-password"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </Link>
                </div>
                <Input id="password" name="password" type="password" required />
              </div>
              <div>
                
              </div>
              <Button
                type="submit"
                formAction={signInAction}
                className="w-full"
              >
                Log in
              </Button>
              <Link href="/sign-up">
                <Button type="button" className="w-full">
                  Sign up
                </Button>
              </Link>
              <SignInWithGoogleButton/>

            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
