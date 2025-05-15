"use client";
import Image from "next/image";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import logo from "../../app/assets/logo.jpg";

const Navbar = () => {
  const router = useRouter();
  return (
    <div className="flex justify-between py-3 px-5 shadow-md items-center ">
      <div
        onClick={() => {
          router.push("/");
        }}
      >
        <Image src={logo} alt="logo" className="w-[20vh]" />
      </div>
      <div className="gap-3 flex">
        <Button
          className="w-[100px] "
          variant="outline"
          onClick={() => {
            router.push("/login");
          }}
        >
          Login
        </Button>

        <Button
          onClick={() => {
            router.push("/signup");
          }}
        >
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
