"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { HiOutlineEye } from "@react-icons/all-files/hi/HiOutlineEye";
import { increaseBlogViewers } from "./sendFileToDb/_action";
import { revalidatePath } from "next/cache";
function LinkClick(props) {
  const router = useRouter();
  const handleClick = async () => {
    router.push(`/blog/${props.slug}`);
    await increaseBlogViewers(props.id);
    revalidatePath("/blog");
  };
  return (
    <Button onClick={handleClick} size="xs">
      <HiOutlineEye className="w-4 h-4 text-black/80 dark:text-white/80 " />
    </Button>
  );
}
export default LinkClick;
