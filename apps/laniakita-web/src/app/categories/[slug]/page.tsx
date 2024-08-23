import { notFound } from 'next/navigation';
import { useMDXComponent } from 'next-contentlayer2/hooks';
import { allCategories, allPosts } from 'contentlayer/generated';
import PostRollerV4 from '@/app/blog2/post-components';

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = allCategories.find((catX) => catX.url.split('/').pop() === params.slug);
  const matchingPosts = allPosts.filter((postX) =>
    postX.categories?.some((cat) => (cat as unknown as { slug: string }).slug === params.slug),
  );

  if (!category) {
    return notFound();
  }

  return (
    <div className='simple-color-trans relative z-[5] -mb-1 flex flex-col gap-2 bg-ctp-base p-2 dark:bg-ctp-midnight md:gap-4 md:p-6'>
      <div className='flex items-center justify-center lg:pt-20'>
        <div className='flex w-full max-w-3xl flex-col gap-2 rounded-md border border-ctp-surface0 p-6 dark:border-ctp-base'>
          <div className=''>
            <h1 className='text-4xl font-black md:text-5xl'>{category.title}</h1>
          </div>
          <div className='h-px w-full rounded bg-ctp-base' />
          <div className='prose-protocol-omega w-full max-w-sm prose-p:my-0'>
            <MDXComponent content={category.body.code} />
          </div>
        </div>
      </div>
      {matchingPosts.length >= 1 ? (
        <PostRollerV4 posts={matchingPosts} />
      ) : (
        <div>
          <p>Oops no categorys founds. Hmm, somethings wrong here.</p>
        </div>
      )}
    </div>
  );
}

function MDXComponent({ content }: { content: string }) {
  const MDXContent = useMDXComponent(content);
  return <MDXContent />;
}
