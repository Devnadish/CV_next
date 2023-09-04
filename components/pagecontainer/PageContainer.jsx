import { Children } from "react"

function PageContainer({children}) {
  return (
    <main className='flex flex-col items-center
       h-[calc(100vh_-_170px)] justify-start w-full
        gap-10 p-4  overflow-auto bg-zinc-600  dark:bg-zinc-900 '>
        {children}
    </main>
  )
}

export default PageContainer