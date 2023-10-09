"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { useRouter } from "next/navigation";

function MyWorkSample() {
  const router = useRouter();
  return (
    <div className="flex  justify-center w-full p-2 ">
      <Button
        className="w-full"
        variant="destructive"
        onClick={() => {
          router.push("/worksample");
        }}
      >
        Check My Work
      </Button>
    </div>
  );
}

export default MyWorkSample;
