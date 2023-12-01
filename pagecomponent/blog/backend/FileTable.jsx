import { UploadFiles } from './UploadFiles';
import { Files } from './Files';

const FileTable = ({ posts, lang }) => {
    return (
        <>
            <div className='flex flex-col'>
                <UploadFiles files={posts} lang={lang} />
                {/* <Infomation posts={posts} /> */}
                <Files posts={posts} lang={lang} />
            </div>
        </>
    );
};
export default FileTable;
