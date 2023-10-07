import { Children } from "react";

function PageContainer({ children }) {
  return (
    <main
      id="pagecontainer"
      className="flex flex-col items-center
       h-full justify-start w-full
        gap-10  px-4 py-1  overflow-auto bg-muted"

      // className="flex flex-col items-center
      // h-[calc(100vh_-_170px)] justify-start w-full
      //  gap-10  px-4 py-1  overflow-auto bg-background/25"
    >
      {children}
    </main>
  );
}

export default PageContainer;
