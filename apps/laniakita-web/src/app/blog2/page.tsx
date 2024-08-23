import { compareDesc } from 'date-fns';
import { allPosts } from 'contentlayer/generated';
import Sidebar from '@/components/sidebar/main';
import PostRollerV4 from './post-components';

export default function BlogPage2() {
  const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));
  //console.dir(posts, {depth: null})
  return (
    <main className='simple-color-trans flex size-full flex-col-reverse justify-center gap-2 bg-ctp-base p-2 dark:bg-ctp-midnight md:flex-row md:gap-4 md:p-6 pt-[4.75rem] md:pt-24 lg:p-10 lg:pt-20'>
      <PostRollerV4 posts={posts} />
      <Sidebar />
    </main>
  );
}
