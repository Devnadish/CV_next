import PageContainer from "@/components/shared/pagecontainer/PageContainer";
import { getCounter } from "@/lib/getCouners";
import { headers } from "next/headers";
import Link from "next/link";
import { FcTodoList } from "@react-icons/all-files/fc/FcTodoList";
import { AiFillEdit } from "@react-icons/all-files/ai/AiFillEdit";
import { MdDelete } from "@react-icons/all-files/md/MdDelete";
import { getTimeElapsed } from "@/lib/calculateTimeAndDate";
import dbConnect from "@/dbconfig/dbConfig";
import { Blog } from "@/models/blog/blog";
import db from "@/lib/prisma";
import { getAllBlogs } from "@/dbcontrol/blog";

export async function getData() {
  try {
    dbConnect()
    const blogs = await Blog.find({}, { _id: 0, __v: 0, ip: 0 });
    // console.log(blogs)
    return blogs
  } catch (error) {
    // return NextResponse.json({
    //   error: "Error from get All blogs : " + error.message,
    // });
  }
}



//  import { getCounter } from "@/lib/getCouners";

async function page() {

  const allblogs=await getAllBlogs()
  console.log(allblogs)
// const data=await getData()
// console.log(data);


  // const response = await fetch("http://localhost:3000/backend/blog/visitor", {  cache: "no-store"});
  // const data = await response.json();
  // console.log(data.allblogs);

  // console.log(headers().get("host"));
  // console.log(headers().get("url"));
  // const headersList = headers();
  // console.log(headersList);
  // headersList.forEach((value, key) => {
  //   console.log(`${key} ==> ${value}`);
  // });
  // const data = await getCounter();
  // console.log(data);

  // // const referer = headersList.get('referer')

  return (
    <>
      {/* <PageContainer>
        <div className="flex flex-wrap items-center gap-4 justify-evenly">
          {data.map((el, idx) => {
            return (
              <div
                key={idx}
                className="flex flex-col items-center min-w-[250px] gap-4 p-4 border rounded-md bg-slate-100 shadow-md dark:bg-zinc-700 "
              >
                <div className="flex flex-col justify-start w-full">
                  <p className="text-lg "> {el.blog}</p>
                  <p className="self-center text-lg">{el.title}</p>
                  <p className="self-center text-2xl text-green-600 ">
                    {el.counter}
                  </p>
                  <div className="flex justify-between w-full">
                    <p className="self-end text-sm">
                      {getTimeElapsed(el.createdAt)}
                    </p>
                    <p className="flex items-center gap-2 text-sm">
                      <AiFillEdit /> {getTimeElapsed(el.updatedAt)}
                    </p>
                  </div>
                </div>
                <div className="flex justify-around w-full">
                  <Link href={`/blog/${el.slug}`}>
                    <div className="px-3 py-1 text-blue-700 rounded-md hover:shadow-xl hover:ring-2 ring-inset">
                      <FcTodoList />
                    </div>
                  </Link>
                  <Link href={`/blog/${el.slug}`}>
                    <div className="px-3 py-1 text-white bg-green-400 rounded-md hover:shadow-xl hover:ring-2 ring-inset">
                      <AiFillEdit />
                    </div>
                  </Link>
                  <Link href={`/blog/${el.slug}`}>
                    <div className="px-3 py-1 text-white bg-red-400 rounded-md hover:shadow-xl hover:ring-2 ring-inset">
                      <MdDelete />
                    </div>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </PageContainer> */}
    </>
  );
}

export default page;
