import { Post } from 'contentlayer/generated';
const readingTime = require('reading-time');

type Props = {
  post: Post;
};

export function getReadingTime({ post }: Props) {
  const time = readingTime(post.body.code);
  return time.text;
}
