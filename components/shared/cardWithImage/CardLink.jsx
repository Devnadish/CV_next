import Link from "next/link";
import { GoLinkExternal } from "@react-icons/all-files/go/GoLinkExternal";

export function CardLink({ link = "googl.com", linkText = "test", lang }) {
  return (
    <div className="flex items-center justify-center flex-grow h-full p-2 text-primary-foreground bg-primary/70 hover:bg-primary rounded-md">
      <Link className="text-white" href={link} as={`/${lang}/${link}`}>
        <GoLinkExternal className="text-white hover:bg-primary hover:text-accent-foreground" />
      </Link>
    </div>
  );
}
