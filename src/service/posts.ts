const readingTime = require('reading-time');
import { allPosts, type Post } from 'contentlayer/generated';
import { format, parseISO } from 'date-fns';

export type PostData = {
  title: string;
  date: string;
  category: string;
  featured: boolean;
  image: string;
  time: string;
  description: string;
};

export async function getAllPosts(): Promise<Post[]> {
  const articles = allPosts;
  return articles.filter((item) => item.articleType === 'post');
}

//Is this function really need to have?? figure it out later.
export async function getPostData(slug: string): Promise<any> {
  const posts = await getAllPosts();
  const post = posts.find((post) => post.title === slug);
  // const date = format(parseISO(post.date), 'LLLL d, yyyy');

  // const time = readingTime(post.body.code);

  // return {
  //   title: post.title,
  //   date: date,
  //   category: post.category,
  //   featured: post.featured,
  //   image: post.image,
  //   time: time,
  //   description: post.description,
  // };
  return post;
}

export async function sortAllPost(): Promise<Post[]> {
  const posts = await getAllPosts();
  return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export async function getPostTitles(): Promise<string[]> {
  const posts = await getAllPosts();
  return posts.map((post) => post.title);
}

export async function getFeaturedPosts(): Promise<Post[]> {
  const posts = await getAllPosts();
  return posts.filter((post) => post.featured === true);
}
