import Link from 'next/link';
import { allAuthors, type Post } from 'contentlayer/generated';
import ShareButton from '@/components/share-btn';
import type { FeaturedImageR1 } from '@/lib/image-process';
import { CatTagRoller } from '../../cat-tag-roller';
import { HeroBlur2 } from './hero-blur-2';
import PostDate from './post-date';

export function PostHeader2(post: Post) {
  const authorName = allAuthors.find((author) => author.url === `/authors/${post.author}`)?.name;
  return (
    <>
      <div className='pt-post-page flex w-full flex-col items-center justify-center gap-2 px-10 pb-6 md:pb-10'>
        <div className='w-full max-w-3xl font-mono'>
          <CatTagRoller cats={post.categories} tags={post.tags} />
        </div>
        <h1 className='w-full max-w-3xl text-3xl font-black supports-[text-wrap:balance]:text-balance md:text-4xl'>
          {post.headline}
        </h1>
        <h2 className='w-full max-w-3xl text-2xl font-light supports-[text-wrap:balance]:text-balance md:text-3xl'>
          {post.subheadline}
        </h2>

        <div className='flex w-full max-w-3xl flex-wrap items-center gap-x-2 font-mono'>
          <p className=''>
            <Link href='/about' className='font-semibold capitalize'>
              {authorName ?? 'Lani'}
            </Link>
          </p>
          <span className=''>|</span>
          {post.updated ? (
            <p className='flex flex-wrap gap-x-2'>
              <span className='font-semibold'>Updated:</span>
              <PostDate date={post.updated} />
            </p>
          ) : (
            <p>
              <PostDate date={post.date} />
            </p>
          )}
        </div>

        <div className='flex w-full max-w-3xl items-center justify-start pt-3 md:pt-7'>
          <ShareButton />
        </div>
      </div>

      <div className='flex size-full flex-col items-center justify-center'>
        {/* bg image + title */}

        {(post.featured_image as FeaturedImageR1).hasImage ? (
          <figure className='relative flex size-full flex-col items-center justify-center gap-10'>
            <HeroBlur2 {...post} />
            <p className='-mb-2 -mt-6 flex w-full flex-col items-center justify-center px-10 font-mono text-sm font-thin [font-style:_normal]'>
              <span className='w-full max-w-3xl'>{(post.featured_image as FeaturedImageR1).altText}</span>
            </p>
            <figcaption className='flex w-full items-center justify-center px-10 text-xl font-bold italic leading-tight md:text-2xl'>
              <span className='max-w-3xl'>{(post.featured_image as FeaturedImageR1).caption}</span>
            </figcaption>
          </figure>
        ) : post.caption ? (
          <div>
            <p className='flex w-full items-center justify-center px-10 text-xl font-bold italic leading-tight md:text-2xl'>
              <span className='max-w-3xl'>{post.caption}</span>
            </p>
          </div>
        ) : (
          ''
        )}

        <div className='flex size-full w-full items-center justify-center px-10'>
          <div className='mt-10 w-full max-w-3xl rounded bg-ctp-text py-px' />
        </div>
      </div>
    </>
  );
}
