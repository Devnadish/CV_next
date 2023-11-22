/*eslint no-undef: 0*/
import { getBlogByIdfromDb, Editor, collectTagWithPost } from './export';
async function page({ params }) {
    const postDataDB = getBlogByIdfromDb(params.id);
    const tagDataDB = collectTagWithPost();
    // const tagDataDB = showAllTag();
    const [postData, tagData] = await Promise.all([postDataDB, tagDataDB]);

    return (
        // <div className='mt-2'>
        <Editor
            lang={params.lang}
            tagData={tagData}
            updpost={postData}
            updateMode
        />
        // </div>
    );
}

export default page;
