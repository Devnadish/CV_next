import { getAllBlog, NewTargetLink } from './export';
async function page({ params }) {
    const posts = await getAllBlog(params.lang);

    return (
        <>
            <h1 className='my-4 ml-4 text-center text-2xl font-semibold'>
                Blog Count:{posts.length}
            </h1>
            <div className='flex w-full flex-wrap items-center   justify-between gap-4 rounded-lg bg-card px-4 py-4 text-foreground'>
                {posts.map((post) => {
                    let blogStyle;
                    post.viewers === 0
                        ? (blogStyle =
                              'bg-secondary text-primary-foreground  border-gray-400')
                        : (blogStyle =
                              'bg-primary text-primary-foreground  border-primary');

                    let blogDivStyle;
                    post.viewers === 0
                        ? (blogDivStyle = 'border-primary')
                        : (blogDivStyle = 'border-secondary');
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
                className={`${props.blogDivStyle} m-auto flex  max-w-[350px] flex-wrap items-center justify-between gap-4 rounded-md border bg-primary/20  p-4  text-sm text-primary-foreground`}
            >
                <div className='flex w-full items-center justify-between border-b  border-primary pb-2'>
                    <p
                        className={`${props.blogStyle} flex  h-[25px] w-[25px] items-center justify-center rounded-md text-accent-foreground `}
                    >
                        {props.post.viewers}
                    </p>
                    <p className='text-foreground'>{props.post.title}</p>
                    <p className='text-foreground'>
                        {props.post.language === 'en' ? 'English' : 'عربي'}
                    </p>
                </div>
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
