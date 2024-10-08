'use client';
import { OrthographicCamera, Preload } from '@react-three/drei';
import { Canvas, useThree, type CanvasProps } from '@react-three/fiber';
import { type ReactNode, Suspense, useRef } from 'react';

export function Common2DCanvasExperimental({ children, ...props }: { children: Readonly<ReactNode> } & CanvasProps) {
  const ref = useRef(null!);

  return (
    <div ref={ref} className='relative size-full'>
      <Suspense>
        <Canvas
          eventSource={ref}
          orthographic
          style={{
            height: '100%',
            width: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            overflow: 'hidden',
            pointerEvents: 'none',
          }}
          {...props}
        >
          <OrthoCam />
          {children}
          <Preload all />
        </Canvas>
      </Suspense>
    </div>
  );
}

function OrthoCam() {
  const frustum = 100;
  const { size } = useThree();
  const aspectRatio = size.height / size.width;
  const horizontal = aspectRatio < 1 ? frustum / aspectRatio : frustum;
  const vertical = aspectRatio < 1 ? frustum : frustum * aspectRatio;

  return (
    <OrthographicCamera
      makeDefault
      position={[0, 0, 10]}
      zoom={frustum}
      left={-horizontal}
      right={horizontal}
      top={vertical}
      bottom={-vertical}
      manual
    />
  );
}

export default function Common2DCanvas({ children, ...props }: { children: Readonly<ReactNode> } & CanvasProps) {
  const ref = useRef(null!);

  return (
    <div ref={ref} className='relative size-full'>
      <Suspense>
        <Canvas
          eventSource={ref}
          orthographic
          style={{
            height: '100%',
            width: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            overflow: 'hidden',
            pointerEvents: 'none',
          }}
          {...props}
        >
          <OrthographicCamera
            makeDefault
            manual
            left={-0.5}
            right={0.5}
            top={0.5}
            bottom={-0.5}
            near={-1000}
            far={1000}
            position={[0, 0, 1]}
          />
          {children}
          <Preload all />
        </Canvas>
      </Suspense>
    </div>
  );
}

/* possibly useful resizing algs
 *
 * 01:
 * // resizing code based on Greg Rauhöft solution https://github.com/pmndrs/react-three-fiber/discussions/2867
 * const frustum = 100;
 * const aspectRatio = size.height / size.width
 * const horizontal = aspectRatio < 1 ? frustum / aspectRatio : frustum;
 * const vertical = aspectRatio < 1 ? frustum : frustum * aspectRatio;
 *
 * return <OrthographicCamera makeDefault position={[0,0,10]} zoom={frustum} left={-horizontal} right={horizontal} top={vertical} bottom={-vertical}  manual />
 * */
