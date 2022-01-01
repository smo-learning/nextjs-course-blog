import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDir = path.join(process.cwd(), 'posts');


export function getPostData(id) {

    const postSlug = id.replace(/\.md$/, '');
    const filePath = path.join(postsDir, `${postSlug}.md`);
    const fileContent = fs.readFileSync(filePath, 'utf-8');

    const { data, content } = matter(fileContent);

    const postData = { slug: postSlug, ...data, content };
    return postData;
}

export function getPostFiles() {
    const postsFiles = fs.readdirSync(postsDir);
    return postsFiles;
}
export function getAllPosts() {
    const postsFiles = getPostFiles();

    const allPosts = postsFiles.map(getPostData);
    return allPosts.sort((a, b) => a.date > b.date ? -1 : 1);
}

export function getFeaturedPosts() {
    const allPosts = getAllPosts();

    return allPosts.filter(p => p.isFeatured);
}