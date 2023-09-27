import React from "react";
import allgetPostMetadata from "@/lib/allgetPostMetadata";
import PageContainer from "@/components/shared/pagecontainer/PageContainer";
// import ListFromDb from "@/components/dashboard/ListFromDb";



async function page() {
  const posts =await allgetPostMetadata();
  // const data =await  getCounter();
  // console.log(data.blogs.length)


  return (
    <PageContainer>
      <div className="flex items-start justify-center w-full gap-4 p-4 text-back bg-slate-100 text-md">
        <FileTable posts={posts} />
        {/* <ListFromDb   /> */}
      </div>
    </PageContainer>
  );
}

export default page;

const FileTable = ({ posts }) => {
  return (
    <div>
      <div className="bg-black text-white">File table</div>
      <div className=" flex  justify-evenly w-full items-center  mx-auto">
        <p className="bg-blue-600  px-4 text-md text-white">
          Blogs : {posts.length}
        </p>
        <p className="bg-blue-600  px-4  text-md text-white">
          English Blogs : {countLanguage(posts, "en")}
        </p>
        <p className="bg-blue-600  px-4  text-md text-white">
          Arabic Blogs : {countLanguage(posts, "ar")}
        </p>
        <p className="bg-red-500  px-4  text-md text-white cursor-pointer">
          Excute
        </p>
      </div>
      <table className="table-auto w-full text-left">
        <thead className="bg-green-200">
          <tr>
            <th>fileNAme</th>
            <th>title</th>
            <th>lang</th>
            <th>upload</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr className="border border-black" key={post.slug}>
              <td>{post.slug}</td>
              <td>{post.title}</td>
              <td>{getLanguage(post.slug)}</td>
              <td>
                <Upload />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const getLanguage = (filename) => {
  const firstTwoChars = filename.slice(0, 2);
  return firstTwoChars;
};

const countLanguage = (array, lang) => {
  const langArray = array.filter((item) => {
    return item.slug.slice(0, 2) === lang;
  });

  return langArray.length;
};

const Upload = ({ slug }) => {
  return (
    <div className="flex items-center">
      <input
        defaultChecked
        id={slug}
        type="checkbox"
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />
    </div>
  );
};
