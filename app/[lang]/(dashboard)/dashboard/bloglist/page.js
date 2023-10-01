import React from "react";
import allgetPostMetadata from "@/lib/allgetPostMetadata";
import PageContainer from "@/components/shared/pagecontainer/PageContainer";
import FileTable from "@/components/pagecomponent/blog/sendFileToDb/FileTable";
import {
  checkFileIsExistAction,
  getAllBlog,
} from "@/components/pagecomponent/blog/sendFileToDb/_action";

async function page() {
  const posts = await allgetPostMetadata();
  const dbPost = await getAllBlog();

  const newData = await compareFiles(posts);

  return (
    <PageContainer>
      <div className="flex items-start justify-center w-full gap-4 p-4 text-back text-md">
        <FileTable posts={newData} />
      </div>
    </PageContainer>
  );
}
export default page;

async function compareFiles(arr1) {
  // console.log(arr1);
  const diff = [];
  const x = true;
  await Promise.all(
    arr1.map(async (slug) => {
      // console.log(slug.slug);
      const isExist = await checkFileIsExistAction(slug.slug);
      if (isExist === undefined) {
        // console.log(isExist);
        console.log(slug);
        diff.push(slug);
      }
    })
  );

  console.log({ diff });
  return diff;
}
