import Link from "next/link";
import { GoLinkExternal } from "@react-icons/all-files/go/GoLinkExternal";

export function CardLink({ link = "googl.com", linkText = "test" }) {
  return (
    <div className="flex items-center justify-center flex-grow h-full p-2 text-primary-foreground bg-primary/60 hover:bg-primary">
      <Link className="text-white" href={link}>
        <GoLinkExternal className="text-white hover:bg-primary hover:text-accent-foreground" />
      </Link>
    </div>
  );
}
