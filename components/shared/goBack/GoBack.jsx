'use client'
import { useRouter } from 'next/navigation'
import {AiOutlineRollback} from "@react-icons/all-files/ai/AiOutlineRollback"

export default function GoBack() {
  const router = useRouter()
  return (
    <button className="p-1 text-white bg-red-500 rounded-md " type="button" onClick={() => router.back()}>
      <AiOutlineRollback/>
    </button>
  )
}