"use client";
import { BiLogOut } from "@react-icons/all-files/bi/BiLogOut";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Moon, Sun } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { IoPersonCircleSharp } from "@react-icons/all-files/io5/IoPersonCircleSharp";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { usePathname } from "next/navigation";

export default function Profile() {
  const pathName = usePathname();
  const router = useRouter();
  const redirectedPathName = (locale) => {
    if (!pathName) return "/";
    // console.log(pathName)
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
    // return segments.join("/");
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost">
          <IoPersonCircleSharp size={24} />
        </Button>
      </SheetTrigger>

      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <div className="flex items-center justify-center w-full">
            <Image
              src={"/assets/locales/united-states.png"}
              alt="language selected"
              width={112}
              height={112}
            />
          </div>

          <SheetDescription></SheetDescription>
        </SheetHeader>

        <div className="grid gap-4 py-4 text-[.8rem]">
          <div className="flex flex-col gap-4">
            <Separator className="mb-2 w-full" />
            <div className="flex gap-4 items-center justify-evenly">
              <Button variant="ghost" className="flex items-center gap-4">
                <Sun className="h-[1.2rem] w-[1.2rem] mr-2 rotate-0 scale-100 transition-all  " />
                <h2>Darak</h2>
              </Button>
              <Button variant="ghost" className="flex items-center gap-4">
                <Moon className="h-[1.2rem] w-[1.2rem] mr-2 rotate-90 scale-100 transition-all dark:rotate-0 " />
                <h2>Ligth</h2>
              </Button>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <Separator className="mb-2 w-full" />
            <div className="flex gap-4 items-center justify-evenly">
              <Button
                onClick={() => {
                  router.push(redirectedPathName("ar"));
                  // redirectedPathName("en");
                }}
                variant="ghost"
                className="flex items-center gap-4"
              >
                <Image
                  src={"/assets/locales/saudi-arabia.png"}
                  alt="language selected"
                  width={24}
                  height={24}
                />
                {/* <Sun className="h-[1.2rem] w-[1.2rem] mr-2 rotate-0 scale-100 transition-all  " /> */}
                <h2>عربي</h2>
              </Button>
              <Button
                onClick={() => {
                  router.push(redirectedPathName("en"));
                  // redirectedPathName("en");
                }}
                className="flex items-center gap-4"
                variant="ghost"
              >
                <Image
                  src={"/assets/locales/united-states.png"}
                  alt="language selected"
                  width={24}
                  height={24}
                />

                {/* <Moon className="h-[1.2rem] w-[1.2rem] mr-2 rotate-90 scale-100 transition-all dark:rotate-0 " /> */}
                <h2>English</h2>
              </Button>
            </div>
          </div>

          <Separator className="mb-2 w-full" />
          <div className="flex justify-start items-center gap-4 ">
            <BiLogOut size={24} />
            <h2>Logout</h2>
          </div>
          <div className="grid grid-cols-4 items-center gap-4"></div>
        </div>
        <SheetFooter>
          {/* <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose> */}
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}