import path from 'path';
import { readFile } from 'fs/promises';
import { allPosts, type Post } from 'contentlayer/generated';
import { format, parseISO } from 'date-fns';

// type alias for below function
export type PostData = {
  title: string;
  date: string;
  category: string;
  featured: boolean;
  image: string;
};

//function that load MOCK Posts and check featured make new array
export async function getAllPost(): Promise<Post[]> {
  const filePath = path.join(process.cwd(), 'src', 'data', 'posts.json');
  return readFile(filePath, 'utf-8')
    .then<Post[]>(JSON.parse)
    .then((posts) => posts.sort((a, b) => (a.date > b.date ? -1 : 1)));
}

export async function getPostData(): Promise<PostData[]> {
  const posts = await getAllPost();
  return posts.map((post) => {
    const date = format(parseISO(post.date), 'LLLL d, yyyy');

    return {
      title: post.title,
      date: date,
      category: post.category,
      featured: post.featured,
      image: post.image,
    };
  });
}

export async function getPostTitles(): Promise<string[]> {
  const posts = allPosts;
  return posts.map((post) => post.title);
}

export async function getFeaturedPosts(): Promise<Post[]> {
  const posts = allPosts;
  return posts.filter((post) => post.featured === true);
}
