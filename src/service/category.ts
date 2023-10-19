import { getAllPost } from './posts';
import { Post } from './posts';

type CategoryParams = {
  category: string;
};

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

export async function getCategoryCount({
  category,
}: CategoryParams): Promise<number> {
  const posts = await getAllPost();

  async function result(posts: Post[], category: string): Promise<number> {
    let count = 0;

    for (let i = 0; i < posts.length; i++) {
      if (posts[i].category === category) {
        count++;
      }
    }
    return count;
  }

  return result(posts, category);
}
