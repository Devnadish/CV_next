import { getLanguage } from './helper';
import { checkFileIsExistAction } from './_action';

import { FileCard } from './FileCard';

export function Files(props) {
    return (
        <>
            <div className='mt-8 grid grid-cols-1 place-items-center gap-6 lg:grid-cols-3'>
                {props.posts.map(async (post) => {
                    const isExist = await checkFileIsExistAction(post.slug);
                    let clsName;
                    let dbExist;
                    isExist === undefined
                        ? (dbExist = 'No')
                        : (dbExist = 'Yes');
                    isExist === undefined
                        ? (clsName = 'bg-orange-200')
                        : (clsName = 'bg-gray-200');
                    return (
                        <div
                            key={post.slug}
                            className={`rounded-lg text-sm text-black ${clsName}`}
                        >
                            <FileCard
                                key={post.slug}
                                slug={post.slug}
                                title={post.title}
                                subtitle={post.subtitle}
                                description={post.description}
                                crDate={post.date}
                                lang={getLanguage(post.slug)}
                                isAvlibal={dbExist}
                                htmlContent={post.htmlContent}
                            />
                        </div>
                    );
                })}
            </div>
        </>
    );
}
