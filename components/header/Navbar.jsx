import { Button } from "@/components/ui/button";
import Link from "next/link";

import dynamic from "next/dynamic";

import { LoginBar } from "@/components/header/loginBar/LoginBar";
import { getDictionary } from "@/lib/dictionary";

const Profile = dynamic(() => import("../profile/Profile"), {
  loading: () => <p>Loading...</p>,
});

const Navbar = async ({ lang }) => {
  const { navigation } = await getDictionary(lang);
  return (
    <div className="sticky left-0 z-50 flex items-center justify-between w-full overflow-hidden top-4 bg-primary h-16 text-primary-foreground ">
      <MenuItems navigation={navigation} lang={lang} />
      <Profile />
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
