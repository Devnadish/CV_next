

import { headers } from "next/headers";
const getData = async (host) => {
    try {
      const response = await fetch("/api/blog/blogvisitor");
      console.log(response)

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


const ListFromDb = async() => {
    const host =  headers().get("host");
    const Dbpost=await getData(host)
    console.log(Dbpost)


    return (
      <div>
        {/* <Suspense fallback={<div>Loading...</div>}> */}
        <div className="bg-black text-white">Db table</div>
        <div className=" flex  justify-between w-full items-center  mx-auto">
          <p className="bg-blue-300  px-4  text-md">
            Blogs : {Dbpost.blogs.length}
          </p>
          <p className="bg-blue-300  px-4  text-md">
            {/* English Blogs : {countLanguage(Dbpost, "en")} */}
          </p>
          <p className="bg-blue-300  px-4 text-md">
            {/* Arabic Blogs : {countLanguage(Dbpost, "ar")} */}
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

  export default ListFromDb