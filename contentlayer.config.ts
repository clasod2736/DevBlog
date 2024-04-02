import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import GithubSlugger from 'github-slugger';
import remarkGfm from 'remark-gfm';

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  schemaType: 'object',
  fields: {
    title: { type: 'string', required: true },
    category: { type: 'string', required: true },
    tag: { type: 'string', required: true },
    date: { type: 'date', required: true },
    featured: { type: 'boolean', required: true },
    image: { type: 'string', required: true },
    articleType: { type: 'string', required: true },
    description: { type: 'string', required: true },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (post) => `/posts/${post._raw.flattenedPath}`,
    },
    headings: {
      type: 'json',
      resolve: async (doc) => {
        const regXHeader = /\n(?<flag>#{2,3})\s+(?<content>.+)/g;
        const slugger = new GithubSlugger();
        const headings = Array.from(doc.body.raw.matchAll(regXHeader)).map(
          ({ groups }) => {
            const flag = groups?.flag;
            const content = groups?.content;
            return {
              level:
                flag?.length == 1 ? 'one' : flag?.length == 2 ? 'two' : 'three',
              text: content,
              slug: content ? slugger.slug(content) : undefined,
            };
          }
        );
        return headings;
      },
    },
  },
}));

/** @type {import('rehype-pretty-code').Options} */
const options = {
  theme: {
    dark: 'one-dark-pro',
  },
  defaultLang: 'js',
};

export default makeSource({
  contentDirPath: 'posts',
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [[rehypePrettyCode, options], [rehypeSlug]],
  },
});
