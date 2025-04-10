import { forgotPasswordAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import ForgotPassword from "@/components/forgot-password-form";

export default async function ForgotPasswordPage(props: {
  searchParams: Promise<Message>;
}) {
  const searchParams = props.searchParams;

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-4 md:p-10">
      <ForgotPassword searchParams={searchParams} />
    </div>
  );
}
