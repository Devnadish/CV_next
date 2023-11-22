import Markdown from 'markdown-to-jsx';
import allgetPostMetadata from '@/lib/allgetPostMetadata';
import PageContainer from '@/components/shared/pagecontainer/PageContainer';

import { NEWSLUG } from '@/lib/slugWithLang';
import { getPostContent } from '@/lib/blog/getPostContent';
import Comments from '@/pagecomponent/blog/comments/Comments';
import {
    getBlogByslugfromDb,
    GETALLBLOG,
} from '@/pagecomponent/blog/dbAction/_action';
import { getTimeElapsed } from '@/lib/calculateTimeAndDate';
import { Blog } from '@/pagecomponent/blog/Blog';

export {
    Markdown,
    allgetPostMetadata,
    PageContainer,
    NEWSLUG,
    getPostContent,
    Comments,
    getBlogByslugfromDb,
    getTimeElapsed,
    Blog,
    GETALLBLOG,
};
