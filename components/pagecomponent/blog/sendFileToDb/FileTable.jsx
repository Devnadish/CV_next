import Infomation from "./Infomation";
import { UploadFiles } from "./UploadFiles";
import { Files } from "./Files";

const FileTable = ({ posts }) => {
  return (
    <>
      <div className="flex flex-col">
        <UploadFiles files={posts} />
        {/* <Infomation posts={posts} /> */}
        <Files posts={posts} />
      </div>
    </>
  );
};
export default FileTable;
