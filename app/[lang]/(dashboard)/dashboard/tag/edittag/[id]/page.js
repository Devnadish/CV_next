import EditTagForm from "@/components/pagecomponent/tag/upd/EditTag";
import { getTagbyId } from "@/components/pagecomponent/tag/helper/tag";
import PageContainer from "@/components/shared/pagecontainer/PageContainer";

async function page({ params }) {
  const data = await getTagbyId(params.id);
  console.log(data.title);
  console.log(params.id);
  return (
    <PageContainer>
      <div className="flex flex-col items-center justify-center p-4 mx-auto mt-14 bg-zinc-700/50 ">
        <EditTagForm id={params.id} title={data.title} />
      </div>
    </PageContainer>
  );
}

export default page;
