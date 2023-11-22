import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';

import html from 'remark-html';

// import { PostMetadata } from "./PostMetadata";

const allgetPostMetadata = () => {
    const folder = path.join(process.cwd(), 'posts');
    const files = fs.readdirSync(folder);

    const markdownPosts = files.filter((file) => file.endsWith('.md'));
    const posts = markdownPosts.map((fileName) => {
        const fileContents = fs.readFileSync(
            path.join(folder, fileName),
            'utf8',
        );
        const matterResult = matter(fileContents);
        const { content } = matter(fileContents);
        // const processedContent = remark().process(content).toString();
        const htmlContent = remark().use(html).processSync(content).toString();

        return {
            title: matterResult.data.title,
            date: matterResult.data.date,
            subtitle: matterResult.data.subtitle,
            description: matterResult.data.description,
            slug: fileName.replace('.md', ''),
            htmlContent,
        };
    });

    return posts;
};

export default allgetPostMetadata;
