/* eslint-disable prettier/prettier */
import {
    HiOutlineEye,
    getTimeElapsed,
    Separator,
    Badge,
    LinkClick,
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
    CardDescription,
} from './export';

export const FileCard = ({ post }) => {
    return (
        <>
            <Card className='items-cener flex min-h-[200px] min-w-[300px] flex-col  justify-between   overflow-hidden bg-card'>
                <CardHeader className='p-2'>
                    <CardTitle
                        className='flex items-center justify-between text-lg font-normal '
                        style={{ lineClamp: 1, textWarp: 'balance' }}
                    >
                        <LinkClick slug={post.slug} id={post.id}>
                            {post.title}
                        </LinkClick>
                    </CardTitle>
                    <CardDescription> {post.subtitle}</CardDescription>
                </CardHeader>
                <Separator />
                <CardContent className='mt-4 line-clamp-1 flex items-center justify-start text-sm font-light hover:line-clamp-none'>
                    <h5 className='font-tajawal text-md line-clamp-3 text-xs text-foreground hover:line-clamp-none'>
                        {post.description}
                    </h5>
                </CardContent>
                <Separator />
                <CardFooter className='py-2'>
                    <div className='mb-1 mt-2 flex w-full items-center justify-between text-card-foreground'>
                        <div className='flex w-full items-center justify-between '>
                            <Badge
                                className='flex items-center justify-between gap-2 '
                                variant='secondary'
                            >
                                <HiOutlineEye className='h-4 w-4 text-primary/50 ' />
                                <p className='text-primary/70'>
                                    {post.viewers}
                                </p>
                            </Badge>

                            <Badge
                                className='flex items-center justify-between gap-2 '
                                variant='secondary'
                            >
                                <p className='text-primary/70'>
                                    {getTimeElapsed(post.updatedDate)}
                                </p>
                            </Badge>
                            <Badge
                                className='flex items-center justify-between gap-2 bg-primary/40 '
                                variant='secondary'
                            >
                                <p className='text-foreground'>{post.tag}</p>
                            </Badge>
                        </div>
                    </div>
                </CardFooter>
            </Card>
        </>
    );
};
