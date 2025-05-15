"use client";
import React from "react";
import Image from "next/image";
import logo from "../assets/logo.jpg";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import google from "../assets/google.png";
import Link from "next/link";
const Login = () => {
  return (
    <div>
      <div className="flex justify-center items-center flex-col h-[100vh] ">
        <div className="border p-10 rounded-lg">
          {" "}
          <div>
            <Image src={logo} alt="logo" className="w-[50vh]" />
          </div>
          <div className="flex flex-col text-center  justify-center">
            <div className="py-3 font-semibold">Sign In or Create Account</div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Input
                type="email"
                id="email"
                placeholder="Email"
                className="w-[50vh]"
              />
            </div>
            <div className="py-4">
              <Button className=" w-[50vh]">Continue</Button>
            </div>
            <div></div>
            <div>
              <Button variant="outline" className=" w-[50vh]">
                {" "}
                <div className="flex gap-2 items-center ">
                  <div>
                    <Image src={google} alt="google" className="w-[18px]" />
                  </div>
                  <div>Login with Google</div>
                </div>
              </Button>
            </div>
          </div>
        </div>
        <div className="flex gap-2 text-[15px] py-5">
          <div className="text-[#525252]">Don't have an account?</div>
          <Link href="/signup" className="font-semibold">
            SignUp
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
