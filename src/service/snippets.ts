import { allPosts, type Post } from 'contentlayer/generated';

export type Snippet = {
  title: string;
  date: string;
  tag: string;
  image: string;
};

export async function getAllSnippets(): Promise<Snippet[]> {
  const posts = allPosts;
  return posts.filter((post) => post.articleType === 'snippet');
}

export async function getAllTags(): Promise<string[]> {
  const snippets = await getAllSnippets();
  const tags = [...new Set(snippets.map((snippet) => snippet.tag))];
  return tags;
}

export function getFilteredSnippets(
  arr: Snippet[],
  val: string
): Snippet[] | null {
  const lowercasedVal = val.toLowerCase();

  const filteredSnippet = arr.filter((snippet) =>
    snippet.title.toLowerCase().includes(lowercasedVal)
  );

  return val === '' ? null : filteredSnippet;
}
