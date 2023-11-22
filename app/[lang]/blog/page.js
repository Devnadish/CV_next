/*eslint no-undef: 0*/
import {
    showAllTag,
    showFreqBlog,
    getDataAfterSearch,
    GETBLOGPAGECOUNT,
    PageContainer,
    LoadMore,
    SearchOnLink,
} from './export';
import ShowTag from '@/pagecomponent/blog/tag/ShowTag';
import ShowFreqy from '@/pagecomponent/blog/showBlogWithSearch/ShowFreqy';
async function Blogs({ params, searchParams }) {
    const query = {
        text: searchParams?.text || '',
        body: searchParams?.body || '',
        tag: searchParams?.tag || '',
        description: searchParams?.description || '',
        sortDirection: 'asc',
        lang: params.lang,
        limit: 6,
    };
    const page = 1;
    const lookupposts = getDataAfterSearch(query, page);
    const freqData = showFreqBlog(params.lang);
    const tagData = showAllTag(params.lang);
    const pageSize = GETBLOGPAGECOUNT(query.limit);
    const [posts, tags, freq, pageCount] = await Promise.all([
        lookupposts,
        tagData,
        freqData,
        pageSize,
    ]);
    return (
        <PageContainer>
            {posts.length === 0 ? (
                <Nopost />
            ) : (
                <div className='flex '>
                    {/* Sidebar */}
                    <div
                        className='sticky top-0 w-1/5 overflow-y-auto md:w-1/4'
                        style={{ height: '80vh' }}
                    >
                        <SideBar
                            dataLength={posts?.length}
                            tags={tags}
                            freq={freq}
                        />
                    </div>

                    {/* Main content */}
                    <div className='flex w-full flex-col '>
                        {/* Navbar */}
                        <div className='sticky top-0 z-10 shadow'>
                            <SearchHeader
                                lang={query.lang}
                                Postlength={posts?.length}
                                tags={tags}
                                freq={freq}
                                pageCount={pageCount}
                                text={query.text}
                            />
                        </div>

                        {/* Scrollable body */}
                        <div
                            className='min-h-screen flex-grow overflow-y-auto p-4'
                            // key={Math.random()}
                        >
                            {/* <div className=' bg-blue-500'> */}
                            {/* <BlogsWithSearch
                            posts={posts}
                            tags={tags}
                            blogCont={posts.length}
                            freq={freq}
                            pageCount={pageCount}
                        /> */}
                            <LoadMore
                                tags={tags}
                                blogCont={posts.length}
                                freq={freq}
                                pageCount={posts?.length}
                                query={query}
                                postsData={posts}
                            />
                            {/* </div> */}
                        </div>
                    </div>
                </div>
            )}
        </PageContainer>
    );
}
export default Blogs;

const SearchHeader = ({ lang, Postlength, tags, freq, pageCount }) => {
    return (
        <div
            id='topbar'
            className=' flex w-full  flex-col items-center justify-between border-b border-foreground/40 bg-accent shadow-lg'
        >
            <div id='searchtopbar' className='w-full'>
                <SearchOnLink
                    lang={lang}
                    length={Postlength}
                    tags={tags}
                    freq={freq}
                    blogCont={pageCount}
                />
            </div>
        </div>
    );
};

const SideBar = ({ dataLength, tags, freq }) => {
    const mainDivStyle =
        'relative max-h-[48%] min-h-[45%] overflow-y-auto rounded-lg border border-foreground/30  shadow-xl';
    const subMainDivStyle =
        'sticky left-0 top-0 border-b border-foreground/30  bg-background  px-4  py-1 text-sm shadow-xl  ';
    return (
        <div
            className='hidden  flex-col  overflow-y-auto border-r border-foreground/40 bg-accent  p-4  sm:flex  md:gap-8 '
            style={{ height: '80vh' }}
        >
            <div className={mainDivStyle}>
                <div className={subMainDivStyle}>Tags</div>
                <div className='py-4'>
                    <ShowTag tags={tags} blogCont={dataLength} />
                </div>
            </div>
            <div className={mainDivStyle}>
                <div className={subMainDivStyle}>Freqantly</div>
                <div className='py-4'>
                    <ShowFreqy freq={freq} />
                </div>
            </div>
        </div>
    );
};

//   <div className='flex gap-6 '>
//                     <p>description:{query.description}</p>
//                     <p>body: {query.body}</p>
//                     <p>text: {query.text}</p>
//                 </div>
//             <div className='relative flex flex-col gap-4'>
//                     <div className='flex items-start gap-4'>
//                         <div className='sticky top-[0px] z-50  w-[20%] '>
//                             <SideBar
//                                 dataLength={posts?.length}
//                                 tags={tags}
//                                 freq={freq}
//                             />
//                         </div>

//                         <div className='sticky top-[0px] z-50  flex-col items-center gap-4'>
//                             <SearchHeader
//                                 lang={query.lang}
//                                 Postlength={posts?.length}
//                                 tags={tags}
//                                 freq={freq}
//                                 pageCount={pageCount}
//                                 text={query.text}
//                             />
//                             <div className=' bg-blue-500'>
//                                 <BlogsWithSearch
//                                     posts={posts}
//                                     tags={tags}
//                                     blogCont={posts.length}
//                                     freq={freq}
//                                     pageCount={pageCount}
//                                 />
//                                 <LoadMore
//                                     tags={tags}
//                                     blogCont={posts.length}
//                                     freq={freq}
//                                     pageCount={pageCount}
//                                     query={query}
//                                 />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//              <div className='relative top-1 z-30  flex h-full w-full   bg-yellow-400 '>
//                     <div className='sticky left-0 top-0 z-40 min-h-[90%]  w-[20%] bg-blue-400'>
//                         sidebar
//                     </div>
//                     <div className='relative  w-[80%]'>
//                         <div className='sticky left-0 top-[0px] z-50 h-[100px] w-full bg-blue-800 shadow-xl'>
//                             nafbar
//                         </div>
//                         <div className='h-[200%] w-full  bg-red-400'>cards</div>
//                     </div>
//                 </div>

const Nopost = () => {
    return (
        <PageContainer>
            <div className='flex h-full w-full items-center justify-center'>
                <div className='flex  h-1/2 w-1/2 items-center justify-center  rounded-xl bg-white/10  text-2xl outline-dashed outline-2 outline-offset-8 outline-white/20 '>
                    Sorry .. No Online Post For Now
                </div>
            </div>
        </PageContainer>
    );
};
