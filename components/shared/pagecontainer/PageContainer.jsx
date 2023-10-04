import { Children } from "react";

function PageContainer({ children }) {
  return (
    <main
      id="pagecontainer"
      className="flex flex-col items-center
       h-[calc(100vh_-_170px)] justify-start w-full
        gap-10  px-4 py-1  overflow-auto bg-zinc-200 dark:bg-zinc-800  "
    >
      {children}
    </main>
  );
}

export default PageContainer;
