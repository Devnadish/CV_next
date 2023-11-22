import { getTimeElapsed } from '@/lib/calculateTimeAndDate';
import ViewerConter from '@/pagecomponent/dashboard/analitic/ViewerConter';
// import EditTitle from '@/pagecomponent/dashboard/analitic/EditTitle';
// import LangAndPublish from '@/pagecomponent/dashboard/analitic/LangAndPublish';
import { Separator } from '@/components/ui/separator';
// import DeleteBlog from '@/pagecomponent/dashboard/analitic/DeleteBlog';
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { PenSquare } from 'lucide-react';
import { PenLine } from 'lucide-react';
import { Tag } from 'lucide-react';
import SearchInput from '@/components/shared/inputSearch/InputSearch';

function ShowReusltBlog({ posts, tags, lang }) {
    return (
        <div className='flex h-full w-full flex-col items-center justify-start overflow-auto bg-background/25 p-4 '>
            <InputHeader length={posts.length} lang={lang} />

            <div className='mt-8 grid grid-cols-1 place-items-center gap-6 lg:grid-cols-3'>
                {posts.map(async (post) => {
                    return <FileCard post={post} key={post.slug} tags={tags} />;
                })}
            </div>
        </div>
    );
}

export default ShowReusltBlog;

function InputHeader({ length, lang }) {
    return (
        <div className='flex w-full items-center justify-between '>
            <div className='flex w-full flex-1 items-center justify-center gap-4'>
                <SearchInput lang={lang} />
                <p>{length} Blog</p>
            </div>
        </div>
    );
}

const FileCard = ({ post }) => {
    const borderColor =
        post.viewers === 0 ? 'border-red-500' : 'border-green-500';
    return (
        <>
            <Card
                className={`items-cener flex max-h-[250px]  min-h-[250px] min-w-[300px] flex-col   justify-between ${borderColor}`}
            >
                <CardHeader>
                    <CardTitle>
                        <div className='flex flex-col items-center justify-between p-4 font-normal'>
                            <p className='flex items-center justify-start text-lg font-normal '>
                                {post.title}
                            </p>
                            {/* <h5 className='font-tajawal text-md line-clamp-3 text-xs text-blue-100 hover:line-clamp-none'>
                                {post.description}
                            </h5> */}
                            <div className=' font-tajawal   flex items-center gap-2 self-start rounded-md  bg-accent/50 px-4 text-sm text-blue-100/30'>
                                <Tag size='15' />
                                {post.tag}
                            </div>
                            {/* <EditTitle
                                id={post.id}
                                title={post.title}
                                description={post.description}
                                tags={tags}
                            /> */}
                        </div>
                        {/* <Separator className='space-y-4' /> */}
                        {/* <LangAndPublish
                            lang={post.language}
                            published={post.published}
                            id={post.id}
                        /> */}
                    </CardTitle>
                    <Separator className='space-y-4' />
                </CardHeader>
                <CardContent>
                    <ViewerConter viewer={post.viewers} id={post.id} />
                </CardContent>
                <Separator className='my-1' />
                <CardFooter>
                    <Fotter
                        createdAt={getTimeElapsed(post.createdDate)}
                        updAt={getTimeElapsed(post.updatedDate)}
                        id={post.id}
                    />
                </CardFooter>
            </Card>
        </>
    );
};

function Fotter(props) {
    return (
        <div className='flex w-full items-center justify-between text-card-foreground'>
            {/* <div className='flex items-center justify-between text-white'>
                <DeleteBlog id={props.id} />
            </div> */}
            <div className='flex w-full   items-center justify-between'>
                <div className='flex items-center gap-2 text-xs font-normal'>
                    <PenSquare size={15} className='text-white/40' />
                    <span className='text-white/40'>{props.createdAt}</span>
                </div>
                <div className='flex items-center gap-2 text-xs font-light'>
                    <PenLine size={15} className='text-white/40' />
                    <span className='text-white/40'>{props.updAt}</span>
                </div>
            </div>
        </div>
    );
}
