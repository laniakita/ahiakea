'use client';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import LoadingSpinner from '@/components/loading-spinner';

const SceneOverlay = dynamic(
 () => import('@/components/scene-overlay'), 
  {
    ssr: false,
  }
 );

const MinComputerShork = dynamic(
  () => import('@/components/canvas/scenes/computers-and-fren').then((mod) => mod.MinComputerShork),
  {
    ssr: false,
  },
);
const LightsCameraActionShork = dynamic(
  () => import('@/components/canvas/scenes/computers-and-fren').then((mod) => mod.LightsCameraActionShork),
  {
    ssr: false,
  },
);

const View = dynamic(() => import('@/components/canvas/view'), {
  ssr: false,
  loading: () => <LoadingSpinner />
});

export default function Page() {
  return (
    <div className='h-screen'>
      <SceneOverlay />
      <View className='flex size-full items-center justify-center'>
        <Suspense fallback={<LoadingSpinner />}>
          <MinComputerShork />
          <LightsCameraActionShork />
        </Suspense>
      </View>
    </div>
  );
}

/*    <div className='flex h-screen w-full flex-col items-center justify-center'>
      <svg className='-ml-1 mr-3 size-5 animate-spin text-black' fill='none' viewBox='0 0 24 24'>
        <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' />
        <path
          className='opacity-75'
          fill='currentColor'
          d='M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
        />
      </svg>
    </div>
 * */