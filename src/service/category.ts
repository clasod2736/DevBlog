import { getAllPost } from './posts';

export type Categories = [
  {
    name: string;
    count: number;
  }
];

export async function getAllPosts(): Promise<number> {
  const posts = await getAllPost();
  const totalPosts = posts.length;
  return totalPosts;
}

export async function getCategory(): Promise<string[]> {
  const posts = await getAllPost();
  const categories = [...new Set(posts.map((post) => post.category))];

  return categories;
}

// export async function getCategoryCount(): Promise<Categories[]> {
//   const categories = await getCategory();
//   const posts = await getAllPost();
// }
