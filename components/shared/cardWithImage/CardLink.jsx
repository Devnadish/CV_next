"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
// import Router from "next/router";
import { GoLinkExternal } from "@react-icons/all-files/go/GoLinkExternal";
import { UseBlogLinkHook } from "@/lib/hooks/UseBlogLinkHook";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { getSearchPath } from "@/components/shared/cardWithImage/_action";

const Loading = () => (
  <div>
    <div className="w-4 h-4 rounded-full border-2 border-b-transparent animate-spin border-[inherit]" />
  </div>
);

export function CardLink({
  link = "googl.com",
  linkText = "test",
  lang,
  searchPath,
}) {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const linking = async () => {
    const linkpath = await getSearchPath(searchPath);
    if (linkpath === false) {
      toast({
        title: `No Data about:  ${searchPath}`,
        description:
          "If You Intrest on this topic you can send me Email An  I will help you as soon as i can",
        variant: "destructive",
        action: (
          <ToastAction altText="Goto schedule to undo">Requiest</ToastAction>
        ),
      });
      return;
    }
  };

  return (
    <div>
      <Button
        className="text-white hover:bg-primary hover:text-accent-foreground"
        onClick={() => {
          linking();
        }}
      >
        <GoLinkExternal />
      </Button>
    </div>
  );
}
