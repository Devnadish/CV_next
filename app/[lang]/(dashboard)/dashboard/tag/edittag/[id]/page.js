import { EditTagForm, getTagbyId, PageContainer } from './export';
async function page({ params }) {
    const data = await getTagbyId(params.id);
    return (
        <PageContainer>
            <div className='mx-auto mt-14 flex flex-col items-center justify-center bg-zinc-700/50 p-4 '>
                <EditTagForm id={params.id} title={data?.title} />
            </div>
        </PageContainer>
    );
}
export default page;
