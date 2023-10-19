"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { HiOutlineEye } from "@react-icons/all-files/hi/HiOutlineEye";
import { increaseBlogViewers } from "./sendFileToDb/_action";
import { revalidatePath } from "next/cache";
function LinkClick({ slug, id, children }) {
  const router = useRouter();
  const handleClick = async () => {
    router.push(`/blog/${slug}`);
    await increaseBlogViewers(id);
    // revalidatePath("/blog");
  };
  return (
    <Button
      onClick={handleClick}
      className="w-full bg-primary/70 text-foreground flex justify-between items-center"
    >
      {children}
      <HiOutlineEye className="w-4 h-4 text-foreground " />
    </Button>
  );
}
export default LinkClick;
