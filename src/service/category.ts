import { allPosts } from 'contentlayer/generated';

export type CategoryParams = {
  category: string;
  count: number;
};

export async function getTotalPostNumb(): Promise<number> {
  const posts = allPosts;
  const totalPosts = posts.length;
  return totalPosts;
}

//get Frequency for all categories
export async function getCategory(): Promise<CategoryParams[]> {
  const posts = allPosts;
  const categories = [...new Set(posts.map((post) => post.category))];

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
