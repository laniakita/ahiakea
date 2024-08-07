/* eslint-disable no-console -- doesn't run in the browser, so this is fine */
import { batchPushMain } from './mdx-db/push-mdx';

// use for testing
/*
const testConfig = {
  contentFolder: './__tests__/test_content',
  foldersToExclude: ['./assets'],
  filesToExclude: ['README.md'],
  imageKey: 'fileLocation',
  publicPath: 'tests/assets/images/featured',
  priorityConfig: {
    authors: 1,
    tags: 2,
    featuredImages: 3,
    posts: 4,
  },
  dbFunctionModules: {
    insert: {
      authors: { insertAuthors: '@/lib/bun-db-funcs' },
      tags: { insertTags: '@/lib/bun-db-funcs' },
      featuredImages: { insertFeaturedImages: '@/lib/bun-db-funcs' },
      posts: { insertPosts: '@/lib/bun-db-funcs' },
    },
  },
  debug: true,
};
*/

const laniConfig = {
  contentFolder: './content',
  foldersToExclude: ['./assets'],
  filesToExclude: ['README.md', 'LICENSE'],
  imageKey: 'fileLocation',
  publicPath: 'assets/images/featured',
  priorityConfig: {
    authors: 1,
    tags: 2,
    featuredImages: 3,
    posts: 4,
  },
  dbFunctionModules: {
    insert: {
      authors: { insertAuthors: '@/lib/bun-db-funcs' },
      tags: { insertTags: '@/lib/bun-db-funcs' },
      featuredImages: { insertFeaturedImages: '@/lib/bun-db-funcs' },
      posts: { insertPosts: '@/lib/bun-db-funcs' },
    },
  },
  debug: false,
};

const dbGen = async (): Promise<void> => {
  try {
    console.log('trying to create db')
    await batchPushMain(laniConfig);
    console.log('db-gen successful');
  } catch (err) {
    console.error(err);
  }
};

export default dbGen;
