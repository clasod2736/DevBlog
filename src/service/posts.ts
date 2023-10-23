import { metadata } from './../app/layout';
import path from 'path';
import { readFile } from 'fs/promises';

//type alias for below function
export type Post = {
  title: string;
  description: string;
  date: string;
  image: string;
  category: string;
  featured: boolean;
};

export type PostData = Post & { content: string };

//function that load MOCK Posts and check featured make new array
export async function getAllPost(): Promise<Post[]> {
  const filePath = path.join(process.cwd(), 'src', 'data', 'posts.json');
  return readFile(filePath, 'utf-8')
    .then<Post[]>(JSON.parse)
    .then((posts) => posts.sort((a, b) => (a.date > b.date ? -1 : 1)));
}

export async function getPostTitles(): Promise<string[]> {
  return getAllPost().then((posts) => posts.map((post) => post.title));
}

export async function getFeaturedPosts(): Promise<Post[]> {
  return getAllPost()
    .then((posts) => posts.filter((post) => post.featured))
    .then((posts) => posts.splice(0, 4));
}

export async function getPostData(fileName: string): Promise<PostData> {
  const filePath = path.join(
    process.cwd(),
    'src',
    'markdown',
    `${fileName}.md`
  );
  const metadata = await getAllPost().then((posts) =>
    posts.find((post) => post.title === fileName)
  );
  if (!metadata) throw new Error(`${fileName} Not Exist.`);
  const content = await readFile(filePath, 'utf-8');

  return { ...metadata, content };
}
