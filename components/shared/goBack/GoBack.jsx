'use client'
import { useRouter } from 'next/navigation'

export default function GoBack() {
  const router = useRouter()
  return (
    <button className="px-4 py-2 rounded-md text-black bg-slate-200 " type="button" onClick={() => router.back()}>
      Click here to go back
    </button>
  )
}