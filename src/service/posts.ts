import path from 'path';
import { readFile } from 'fs/promises';
import { allPosts, type Post } from 'contentlayer/generated';

// type alias for below function
export type PostData = {
  title: string;
  date: string;
  category: string;
  featured: boolean;
  image: string;
};

// export type PostData = Post & { content: string };

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
    return {
      title: post.title,
      date: post.date,
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

// export async function getPostData(fileName: string): Promise<PostData> {
//   const filePath = path.join(
//     process.cwd(),
//     '.contentLayer',
//     'markdown',
//     `${fileName}.md`
//   );
//   const metadata = await getAllPost().then((posts) =>
//     posts.find((post) => post.title === fileName)
//   );
//   if (!metadata) throw new Error(`${fileName} Not Exist.`);
//   const content = await readFile(filePath, 'utf-8');

//   return { ...metadata, content };
// }
