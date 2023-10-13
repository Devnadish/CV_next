import { headers } from "next/headers";
const getData = async (host) => {
  try {
    const response = await fetch("/api/blog/blogvisitor");

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    //   setDbpost(response.json());
    return response.json();
  } catch (error) {
    console.error("An error occurred during the fetch request:", error);
    return null;
  }
};

const ListFromDb = async () => {
  const host = headers().get("host");
  const Dbpost = await getData(host);
  console.log(Dbpost);

  return (
    <div>
      {/* <Suspense fallback={<div>Loading...</div>}> */}
      <div className="text-white bg-black">Db table</div>
      <div className="flex items-center justify-between w-full mx-auto ">
        <p className="px-4 bg-blue-300 text-md">
          Blogs : {Dbpost.blogs.length}
        </p>
        <p className="px-4 bg-blue-300 text-md">
          {/* English Blogs : {countLanguage(Dbpost, "en")} */}
        </p>
        <p className="px-4 bg-blue-300 text-md">
          {/* Arabic Blogs : {countLanguage(Dbpost, "ar")} */}
        </p>
      </div>
      <table className="w-full text-left table-auto">
        <thead className="bg-green-200">
          <tr>
            <th>fileNAme</th>
            <th>title</th>
            <th>lang</th>
            <th>upload</th>
          </tr>
        </thead>
        <tbody>
          {Dbpost.blogs.map((post) => (
            <tr className="border border-black" key={post.slug}>
              <td>{post.slug}</td>
              <td>{post.blog}</td>
              <td>{post.counter}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* </Suspense> */}
    </div>
  );
};

export default ListFromDb;
