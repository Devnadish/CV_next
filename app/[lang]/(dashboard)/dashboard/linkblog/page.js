import { getAllBlog, Separator, NewTargetLink } from './export';
async function page({ params }) {
    const posts = await getAllBlog(params.lang);

    return (
        <>
            <h1 className='my-4 ml-4 text-2xl font-semibold'>
                Blog Count:{posts.length}
            </h1>
            <div className='flex w-full flex-wrap items-center justify-between gap-4 rounded-lg bg-card px-4 py-4 text-foreground'>
                {posts.map((post) => {
                    let blogStyle;
                    post.viewers === 0
                        ? (blogStyle = 'bg-gray-400 border-gray-400')
                        : (blogStyle = 'bg-green-600  border-green-600');

                    let blogDivStyle;
                    post.viewers === 0
                        ? (blogDivStyle = 'border-gray-400')
                        : (blogDivStyle = 'border-green-600');
                    return (
                        <BlogData
                            key={post.id}
                            blogStyle={blogStyle}
                            blogDivStyle={blogDivStyle}
                            post={post}
                        />
                    );
                })}
            </div>
        </>
    );
}

export default page;

function BlogData(props) {
    return (
        <>
            <div
                className={`${props.blogDivStyle} flex max-w-[250px] flex-wrap items-center justify-between gap-4 rounded-md border bg-card p-4  text-sm text-foreground`}
            >
                <div
                    className={`${props.blogStyle}  mansory-2  h-[25px] w-[25px] items-center justify-center rounded-full text-accent-foreground`}
                >
                    <p className='text-md flex w-full items-center justify-center text-accent-foreground'>
                        {props.post.viewers}
                    </p>
                </div>
                <p>{props.post.title}</p>
                <p>{props.post.language}</p>
                <Separator />
                <NewTargetLink id={props.post.id} />
                <div className='w-full'>
                    {props.post.targetlinks.map((link) => {
                        return <p key={link.id}>{link}</p>;
                    })}
                </div>
            </div>
        </>
    );
}
