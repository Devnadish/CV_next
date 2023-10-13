"use client";
import { useRouter } from "next/navigation";
import { AiOutlineRollback } from "@react-icons/all-files/ai/AiOutlineRollback";
import { revalidatePath } from "next/cache";
export default function GoBack() {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };

  return (
    <button
      className="p-1 text-white bg-red-500 rounded-md "
      type="button"
      onClick={handleBack}
    >
      <AiOutlineRollback />
    </button>
  );
}
