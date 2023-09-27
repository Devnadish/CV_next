'use client'
import { createTag } from '@/dbcontrol/tag'
import React from 'react'


import { useRef } from 'react'
import { createTagAction } from './_actions'
// import { createTodoAction } from '@/app/_actions'

const NewTagForm = () => {
  const formRef = useRef (null)

  async function action(data) {
    const title = data.get('title')
    if (typeof title !== 'string' || !title) return

    await createTagAction(title)
    formRef.current?.reset()
  }

  return (
    <form ref={formRef} action={action}>
      <h2 className='mb-2 font-medium'>Create a New Tag</h2>
      <input
        type='text'
        name='title'
        className='rounded border border-slate-400 px-2 py-0.5'
      />
      <button
        type='submit'
        className='px-2 py-1 ml-2 text-sm text-white rounded bg-slate-700 disabled:bg-opacity-50'
      >
        Add Tag
      </button>
    </form>
  )
}

export default NewTagForm


