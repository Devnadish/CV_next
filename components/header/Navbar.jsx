import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";

import { LoginBar } from "@/components/header/loginBar/LoginBar";
import { getDictionary } from "@/lib/dictionary";

const Profile = dynamic(() => import("../profile/Profile"), {
  loading: () => <p>Loading...</p>,
});

const Navbar = async ({ lang }) => {
  const { navigation } = await getDictionary(lang);
  return (
    <div className="sticky left-0 z-50 flex items-center justify-between w-full overflow-hidden top-4 bg-primary h-16 text-primary-foreground px-4">
      <div className="flex items-center">
        <Profile />
        <MenuItems navigation={navigation} lang={lang} />
      </div>
      <Logo />
    </div>
  );
};

export default Navbar;
function MenuItems({ navigation, lang }) {
  return (
    <div>
      <Button variant="menughost">
        <Link href={`/${lang}`} prefetch={false}>
          {navigation.home}
        </Link>
      </Button>
      <Button variant="menughost">
        <Link href={`/${lang}/price`} prefetch={false}>
          {navigation.price}
        </Link>
      </Button>

      <Button variant="menughost">
        <Link href={`/${lang}/blog`} as={`/${lang}/blog`} prefetch={false}>
          {navigation.blog}
        </Link>
      </Button>
    </div>
  );
}

const Logo = () => {
  return (
    <>
      <div className="bg-white/50 border border-green-300 shadow-2xl p-4 flex items-center justify-center rounded-lg  w-[100px] h-[50px]">
        <Image
          src={"/assets/logo.png"}
          alt={"خالد دبش khalid nadish مطور مبرمج مصمم مواقع"}
          width={129}
          height={129}
          style={{ objectFit: "cover" }}
          priority
        />
      </div>
    </>
  );
};
