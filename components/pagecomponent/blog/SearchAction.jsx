"use client";
import { Badge } from "@/components/ui/badge";
import { useRouter, useSearchParams } from "next/navigation";
function SearchAction() {
  const router = useRouter();

  return (
    <div className="flex items-center justify-between w-[80%]">
      <div id="leftdiv" className="flex items-center justify-center gap-4">
        <Badge
          className="flex items-center justify-center gap-2 cursor-pointer"
          variant="default"
          onClick={() => router.push(`/blog/lookup/all`)}
        >
          Show All
        </Badge>
      </div>
    </div>
  );
}

export default SearchAction;
