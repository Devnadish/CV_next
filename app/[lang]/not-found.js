import Link from 'next/link'

export default function NotFound({lang}) {
  return (
    <div className='flex flex-col items-center justify-center w-full h-full gap-4'>
      <h1 className="text-8xl">Not Found</h1>
      <p>Some thing  went rong</p>
      <p>Could not find requested resource</p>
      <Link href="/" >
        <div className="p-4 text-white bg-red-600 rounded-md hover:shadow-xl hover:ring-2 ring-inset">

        Return Home
        </div>

        </Link>
    </div>
  )
}