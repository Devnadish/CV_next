import {
    NewTagForm,
    PageContainer,
    Taglist,
    collectTagWithPost,
} from './export';
async function page() {
    // const tags = await getAllTags();
    const tags = await collectTagWithPost();
    return (
        <>
            <PageContainer>
                <div className='flex flex-col items-center justify-center gap-8 '>
                    <NewTagForm />
                    <Taglist tags={tags} />
                </div>
            </PageContainer>
        </>
    );
}
export default page;
