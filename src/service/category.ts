import { allPosts } from 'contentlayer/generated';
import { type Post } from 'contentlayer/generated';

export type CategoryParams = {
  category: string;
  count: number;
};

export async function getTotalPostNumb(): Promise<number> {
  const posts = allPosts.filter((item) => item.articleType === 'post');
  const totalPosts = posts.length;
  return totalPosts;
}

//get Frequency for all categories
export async function getCategory(): Promise<CategoryParams[]> {
  const posts: Post[] = allPosts;
  const filteredPosts = (): Post[] => {
    const result = posts.filter((post) => post.articleType === 'post');
    return result;
  };
  const categories = [...new Set(filteredPosts().map((post) => post.category))];

  function getCategoryCount() {
    let result = categories.map((category) => {
      return {
        category: category,
        count: 0,
      };
    });

    posts.forEach((post) => {
      categories.forEach((category) => {
        if (post.category === category) {
          const categoryObj = result.find((item) => item.category === category);
          if (categoryObj) {
            categoryObj.count++;
          }
        }
      });
    });
    return result;
  }

  const result = getCategoryCount();

  return result;
}
