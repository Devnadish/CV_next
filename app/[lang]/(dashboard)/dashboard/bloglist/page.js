/*eslint no-undef: 0*/
import {
    allgetPostMetadata,
    PageContainer,
    FileTable,
    checkFileIsExistAction,
} from './export';
async function page({ params }) {
    const posts = allgetPostMetadata();
    const newData = await compareFiles(posts);
    return (
        <PageContainer>
            <div className='text-back text-md flex w-full items-start justify-center gap-4 p-4'>
                <FileTable posts={newData} lang={params.lang} />
            </div>
        </PageContainer>
    );
}
export default page;

async function compareFiles(arr1) {
    const diff = [];
    await Promise.all(
        arr1.map(async (slug) => {
            const isExist = await checkFileIsExistAction(slug.slug);
            if (isExist === undefined) {
                diff.push(slug);
            }
        }),
    );

    return diff;
}
