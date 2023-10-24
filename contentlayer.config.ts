import { unified } from 'unified';
import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import rehypeHighlight from 'rehype-highlight';
import rehypePrettyCode from 'rehype-pretty-code';
import remarkGfm from 'remark-gfm';

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  schemaType: 'object',
  fields: {
    title: { type: 'string', required: true },
    category: { type: 'string', required: true },
    date: { type: 'date', required: true },
    featured: { type: 'boolean', required: true },
    image: { type: 'string', required: true },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (post) => `/posts/${post._raw.flattenedPath}`,
    },
  },
}));

/** @type {import('rehype-pretty-code').Options} */
const options = {
  theme: 'one-dark-pro',
  keepBackground: false,
  showLineNumbers: true,
};

export default makeSource({
  contentDirPath: 'posts',
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [[rehypePrettyCode, options]],
  },
});