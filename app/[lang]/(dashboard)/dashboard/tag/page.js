import NewTagForm from "@/components/pagecomponent/tag/new/NewTagForm";
import PageContainer from "@/components/shared/pagecontainer/PageContainer";
import { getAllTags } from "@/components/pagecomponent/tag/helper/tag";
import React from "react";

import Taglist from "@/components/pagecomponent/tag/home/Taglist";

export const dynamic = "force-dynamic";

async function page() {
  const tags = await getAllTags();
  console.log(tags);

  return (
    <>
      <PageContainer>
        <NewTagForm />
        <Taglist tags={tags} />
      </PageContainer>
    </>
  );
}

export default page;
