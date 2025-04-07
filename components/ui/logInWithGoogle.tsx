"use client";
import React from "react";
import { Button } from "../../components/ui/button";
import { signInWithOAuth } from "../../app/actions";
import Image from "next/legacy/image";

const SignInWithGoogleButton = () => {
  return (
    <>
      <Button
        type="button"
        variant="default"
        className="w-full"
        onClick={(e) => {
          e.preventDefault();
          signInWithOAuth();
        }}
      >
        <Image
          src="/public/icons/googleIcon.svg"
          alt="Google Icon"
          width={24}
          height={24}
          className="hover:fill-current hover:text-white"
        />
        Login with Google
      </Button>
    </>
  );
};

export default SignInWithGoogleButton;
