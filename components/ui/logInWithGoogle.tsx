"use client";
import React from "react";
import { Button } from "../../components/ui/button";
import { signInWithOAuth } from "../../app/actions";
import Image from "next/image";
import google from "../../public/icons/google.png"

const SignInWithGoogleButton = () => {
  return (
    <Button
      type="button"
      variant="default"
      className="relative w-full justify-center"
      onClick={(e) => {
        e.preventDefault();
        signInWithOAuth();
      }}
    >
      <div className="absolute left-4 top-1/2 -translate-y-1/2">
        <Image
          src={google}
          alt="Google Icon"
          width={24}
          height={24}
        />
      </div>
  
      <span className="w-full text-center">Login with Google</span>
    </Button>
  );
  
};

export default SignInWithGoogleButton;
