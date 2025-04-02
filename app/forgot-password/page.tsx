import { forgotPasswordAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";

import ForgotPassword from "@/components/forgot-password-form";




export default async function ForgotPasswordPage(props: {
  searchParams: Promise<Message>;
}) {
  const searchParams =  props.searchParams;
  console.log('smari')
  return (
    <>
    <ForgotPassword searchParams={searchParams}/>
    
    </>
  );
}
