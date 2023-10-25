import { Post } from 'contentlayer/generated';

type Props = {
  posts: Post[];
  post: Post;
};

export function getIndexOfPost({ posts, post }: Props) {
  const sortedPosts = posts.sort((a, b) => (a.date > b.date ? -1 : 1));

  const current = posts.findIndex((p) => p.title === post.title);
  const prev = current > 0 ? sortedPosts[current - 1] : null;
  const next =
    current < sortedPosts.length - 1 ? sortedPosts[current + 1] : null;

  return { next, prev, current };
}
