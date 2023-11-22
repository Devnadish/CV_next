import { FileCard } from './FileCard';

function BlogsWithSearch({ posts }) {
    return (
        // <div className='flex flex-col md:w-[80%] md:flex-row'>
        <div className='grid grid-cols-1 place-items-center  gap-6   md:grid-cols-1 lg:grid-cols-3'>
            {posts?.map((post) => {
                return (
                    <div
                        key={post.id}
                        className='rounded-lg text-sm text-black'
                    >
                        <FileCard post={post} key={post.slug} />
                    </div>
                );
            })}
        </div>
        // </div>
    );
}

export default BlogsWithSearch;
