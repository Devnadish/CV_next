import NewTagForm from '@/components/forms/tags/new/NewTagForm'
import PageContainer from '@/components/shared/pagecontainer/PageContainer'
import { getAllTags } from '@/dbcontrol/tag'
import React from 'react'

import Taglist from '@/components/tagcomponet/Taglist';


export const dynamic = 'force-dynamic'

async function page() {
  const tags=await getAllTags()
  console.log(tags)

  return (
    <>
      <PageContainer>
        <NewTagForm />
        <Taglist tags={tags} />
      </PageContainer>
    </>
  );
}

export default page