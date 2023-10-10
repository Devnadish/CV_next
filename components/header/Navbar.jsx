import { Button } from "@/components/ui/button";
import Link from "next/link";

import dynamic from "next/dynamic";

import { LoginBar } from "@/components/header/loginBar/LoginBar";
import { getDictionary } from "@/lib/dictionary";
// import Profile from "./Profile";

const Profile = dynamic(() => import("../profile/Profile"), {
  loading: () => <p>Loading...</p>,
});

const Navbar = async ({ lang }) => {
  const { navigation } = await getDictionary(lang);
  return (
    <div className="sticky left-0 z-50 flex items-center justify-between w-full overflow-hidden rounded-t-lg top-4 bg-primary">
      {/* <LoginBar lang={lang} /> */}
      <MenuItems navigation={navigation} lang={lang} />
      <Profile />
    </div>
  );
};

export default Navbar;
function MenuItems({ navigation, lang }) {
  return (
    <div>
      <Button variant="ghost" className="rounded-none">
        <Link href={`/${lang}`} prefetch={false}>
          {navigation.home}
        </Link>
      </Button>
      <Button variant="ghost">
        <Link href={`/${lang}/price`} prefetch={false}>
          {navigation.price}
        </Link>
      </Button>
      {/* <Link
          href={`/${lang}/worksample`}
          className={`${navbarMenuItem}  bg-yellow-600 text-white`}
          prefetch={false}
        >
          <li>{navigation.sample}</li>
        </Link> */}
      <Button variant="ghost">
        <Link href={`/${lang}/blog`} as={`/${lang}/blog`} prefetch={false}>
          {navigation.blog}
        </Link>
      </Button>
    </div>
  );
}
