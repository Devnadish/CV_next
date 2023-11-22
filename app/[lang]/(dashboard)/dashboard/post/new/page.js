import { collectTagWithPost, Editor } from './export';
async function page({ params }) {
    const tagData = await collectTagWithPost();
    return (
        <div id='newpostDiv' className='w-full p-4'>
            <Editor lang={params.lang} tagData={tagData} />
        </div>
    );
}
export default page;
