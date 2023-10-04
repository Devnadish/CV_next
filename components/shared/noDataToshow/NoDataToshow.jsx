"use client";
import PageContainer from "@/components/shared/pagecontainer/PageContainer";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

function NoDataToshow() {
  const router = useRouter();
  return (
    <>
      <PageContainer>
        <div className="flex flex-col items-center justify-center w-full gap-4 p-4 mx-auto my-auto">
          <p className="text-3xl font-semibold font-tajawal">
            No Data To Show{" "}
          </p>
          <h2 className="text-4xl font-semibold font-tajawal">&#128513;</h2>
          <Button onClick={() => router.back()}>Back</Button>
        </div>
      </PageContainer>
    </>
  );
}

export default NoDataToshow;
