import EditTagForm from "@/components/forms/tags/upd/EditTag";
import { getTagbyId } from "@/dbcontrol/tag";

async function page({ params }) {
  const data = await getTagbyId(params.id);
  console.log(data.title);
  console.log(params.id);
  return (
    <div>
      <EditTagForm id={params.id} title={data.title} />
    </div>
  );
}

export default page;
