"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="flex justify-center items-center h-[100vh] flex-col ">
      <div className="pb-3 text-[50px] font-bold">GEN QUOTE AI</div>{" "}
      <div className="flex flex-wrap w-[100vh] justify-center items-center text-center">
        <p className="max-w-xl text-[14px] pb-5">
          Unlock endless creativity with our AI-powered quote generator. Whether
          you're looking for motivational, romantic, or funny quotes, our tool
          crafts personalized, original quotes in seconds. Perfect for content
          creators, writers, social media posts, and more.
        </p>
      </div>
      <div>
        <Input
          placeholder=""
          className="w-[100vh] h-[12vh]  transition-all duration-200 shadow-sm focus:shadow-lg hover:shadow-md focus:outline-none "
        />
      </div>
      <div className="pt-5">
        <Button className="h-[8vh] w-[30vh]">Generate Quote</Button>
      </div>
    </div>
  );
}
