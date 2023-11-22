import { getAllBlog } from '@/pagecomponent/blog/dbAction/_action';
async function page() {
    const posts = await getAllBlog();

    return (
        <>
            <h1 className='my-4 ml-4 text-2xl font-semibold'>
                Blog Count:{posts?.length}
            </h1>
            <div className='flex w-full flex-wrap items-center justify-between gap-4 rounded-lg bg-card p-4  text-foreground'>
                {posts?.map((post) => {
                    let blogStyle;
                    post.viewers === 0
                        ? (blogStyle = 'bg-gray-400 border-gray-400')
                        : (blogStyle = 'bg-green-600  border-green-600');

                    let blogDivStyle;
                    post.viewers === 0
                        ? (blogDivStyle = 'border-gray-400')
                        : (blogDivStyle = 'border-green-600');
                    return (
                        <div
                            key={post.id}
                            className={`${blogDivStyle} flex flex-wrap items-center justify-between gap-2 rounded-md border bg-card px-4  py-2 text-sm text-foreground`}
                        >
                            <p
                                className={`${blogStyle}  rounded-md px-2 py-1 text-xs text-accent-foreground`}
                            >
                                {post.viewers}
                            </p>
                            <p>{post.title}</p>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default page;
