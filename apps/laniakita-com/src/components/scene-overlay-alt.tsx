'use client';
import dynamic from 'next/dynamic';
import { useState, useRef, useEffect } from 'react';
import SocialIconNavSplitterUltra from '@/components/social-splitter-ultra';
import { socialItems } from './footer/footer';
import Link from 'next/link';

const TextSplitterUltra = dynamic(() => import('@/components/text-splitter-v2'), {
  ssr: true,
});

export default function SceneOverlayV3() {
  const windowRef = useRef<number>();
  const [mobileVis, setMobileVis] = useState(false);
  const [tabVis, setTabVis] = useState(false);
  useEffect(() => {
    const updateRef = () => {
      windowRef.current = window.innerWidth;
      if (windowRef.current < 768) {
        setMobileVis(true);
        setTabVis(false);
      } else if (windowRef.current >= 768) {
        setMobileVis(false);
        setTabVis(true);
      }
    };

    updateRef();

    window.addEventListener('resize', updateRef);
    return () => {
      window.removeEventListener('resize', updateRef);
    };
  });
  return (
    <>
      <div className='ctp-mocha absolute left-6 top-6 z-[2] w-fit md:left-10 md:top-10 lg:top-24'>
        <div className='flex w-fit flex-col gap-4 '>
          <div className='flex w-fit flex-col  -space-y-1 text-4xl font-black text-ctp-text md:space-y-0'>
            <h1 className='max-w-max motion-safe:hidden'>I create web app & digital experiences that delight.</h1>
            <div className={mobileVis ? 'visible h-40' : 'hidden h-40'}>
              <h1 className='overflow-hidden'>
                <TextSplitterUltra
                  className='inline-flex'
                  textIn='I create web'
                  spanRole='heading'
                  level={1}
                  charClass='motion-safe:animate-upDog [transform:_translateY(100%)] inline-block'
                />
              </h1>
              <h1 className='overflow-hidden'>
                <TextSplitterUltra
                  className='inline-flex'
                  textIn='apps & digital'
                  spanRole='heading'
                  level={1}
                  charClass='motion-safe:animate-upDog [transform:_translateY(100%)] inline-block'
                />
              </h1>
              <h1 className='overflow-hidden'>
                <TextSplitterUltra
                  className='inline-flex'
                  textIn='experiences'
                  spanRole='heading'
                  level={1}
                  charClass='motion-safe:animate-upDog [transform:_translateY(100%)] inline-block'
                />
              </h1>
              <h1 className='overflow-hidden'>
                <TextSplitterUltra
                  className='inline-flex'
                  textIn='that delight.'
                  spanRole='heading'
                  level={1}
                  charClass='motion-safe:animate-upDog [transform:_translateY(100%)] inline-block'
                />
              </h1>
            </div>

            <div className={tabVis ? 'visible' : 'hidden'}>
              <h1 className='overflow-hidden'>
                <TextSplitterUltra
                  className='inline-flex'
                  textIn='I create web apps &'
                  spanRole='heading'
                  level={1}
                  charClass='motion-safe:animate-upDog [transform:_translateY(100%)] inline-block'
                />
              </h1>
              <h1 className='overflow-hidden'>
                <TextSplitterUltra
                  className='inline-flex'
                  textIn='digital experiences'
                  spanRole='heading'
                  level={1}
                  charClass='motion-safe:animate-upDog [transform:_translateY(100%)] inline-block'
                />
              </h1>
              <h1 className='overflow-hidden'>
                <TextSplitterUltra
                  className='inline-flex'
                  textIn='that delight'
                  spanRole='heading'
                  level={1}
                  charClass='motion-safe:animate-upDog [transform:_translateY(100%)] inline-block'
                />
              </h1>
            </div>
          </div>
          <Link
            href='/about'
            className='rounded-full border border-ctp-surface0 bg-black/80 p-2 text-center font-mono text-lg opacity-0  backdrop-blur-md hover:border-ctp-mauve motion-safe:animate-fade-in-down motion-safe:[animation-delay:_4s]'
          >
            Learn More
          </Link>

          <Link
            href='/blog'
            className='rounded-full border border-ctp-surface0 bg-black/80 p-2 text-center font-mono text-lg opacity-0  backdrop-blur-md hover:border-ctp-mauve motion-safe:animate-fade-in-down motion-safe:[animation-delay:_4.5s]'
          >
            Read the Blog
          </Link>

          <Link
            href='/contact'
            className='rounded-full border border-ctp-mauve bg-ctp-mauve/80 p-2 text-center font-mono text-lg text-ctp-base opacity-0 backdrop-blur-md  hover:border-ctp-surface0 hover:bg-ctp-mauve hover:text-black motion-safe:animate-fade-in-down motion-safe:[animation-delay:_5s]'
          >
            Contact Me
          </Link>
        </div>
      </div>

      <div className='ctp-mocha absolute bottom-6 right-6 z-[2] flex flex-row overflow-hidden pb-4 text-ctp-text opacity-0 motion-safe:animate-fade-in motion-reduce:opacity-100 md:bottom-10 md:right-10'>
        <SocialIconNavSplitterUltra
          boxItems={socialItems}
          hxw='basis-1/5 min-h-14 min-w-14'
          animClass=' motion-safe:animate-upDog motion-safe:[transform:_translateY(140%)]'
        />
      </div>
    </>
  );
}
