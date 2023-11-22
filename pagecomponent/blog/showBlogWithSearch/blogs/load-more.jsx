/*eslint no-undef: 0*/
'use client';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Spinner } from '../../../../components/shared/loadmore/spinner';
// import BlogsWithSearch from '@/pagecomponent/blog/showBlogWithSearch/blogs/BlogsWithSearch';
import { getDataAfterSearch } from '@/pagecomponent/blog/dbAction/_action';
import { FileCard } from './FileCard';
export function LoadMore({ query, pageCount, key, postsData }) {
    const [posts, setPosts] = useState(postsData);
    const [page, setPage] = useState(1);
    const { ref, inView } = useInView();
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    const loadMoreData = async () => {
        if (page >= pageCount) {
            return;
        }
        // await delay(1000);
        const nextPage = page + 1;
        const blogs = await getDataAfterSearch(query, nextPage);
        setPosts((prevblog) => [...prevblog, ...blogs]);
        setPage(nextPage);
    };

    useEffect(() => {
        if (inView) {
            loadMoreData();
        }
    }, [inView]);

    return (
        <>
            {/* <BlogsWithSearch posts={posts} /> */}
            <div className='grid grid-cols-1 place-items-center  gap-6   md:grid-cols-1 lg:grid-cols-3'>
                {posts?.map((post, index) => {
                    return (
                        <div
                            key={post.id}
                            // key={`${post.id}_${index}`}
                            className='rounded-lg text-sm text-black'
                        >
                            <FileCard post={post} />
                        </div>
                    );
                })}
            </div>

            <div
                className='col-span-1 flex w-full items-center justify-center p-4 sm:col-span-2 md:col-span-3 '
                ref={ref}
            >
                {/* <Spinner /> */}
                {page >= pageCount ? (
                    <p className='flex  w-1/2  animate-pulse items-center justify-center rounded-md bg-destructive px-4 py-1'>
                        No more pages
                    </p>
                ) : (
                    <>
                        <Spinner page={page} />
                    </>
                )}
            </div>
        </>
    );
}
