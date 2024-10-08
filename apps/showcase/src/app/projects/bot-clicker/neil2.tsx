'use client';
/* eslint-disable no-multi-assign -- it's easier this way  */
import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import { useSearchParams } from 'next/navigation';
import { A11y, useUserPreferences } from '@react-three/a11y';
import { useFrame, useThree } from '@react-three/fiber';
import type { LOD } from 'three';
import { MathUtils, AudioLoader, Audio, AudioListener, Cache } from 'three';
import { Detailed } from '@react-three/drei';
import { useHajClickerStore } from '@/providers/hajclicker-store-provider';

const Neilx128 = dynamic(() => import('@/components/canvas/models/bot-neil/x128').then((mod) => mod.Neilx128), {
  ssr: false,
});
const Neilx256 = dynamic(() => import('@/components/canvas/models/bot-neil/x256').then((mod) => mod.Neilx256), {
  ssr: false,
});
const Neilx512 = dynamic(() => import('@/components/canvas/models/bot-neil/x512').then((mod) => mod.Neilx512), {
  ssr: false,
});

export default function Zuns({
  speed = 7,
  count = 80,
  depth = 80,
  viewMobile,
}: {
  speed?: number;
  count?: number;
  depth?: number;
  viewMobile: boolean;
}) {
  const easing = (x: number) => Math.sqrt(1 - Math.pow(x - 1, 2));
  return (
    <>
      {Array.from({ length: count }, (_, i) => (
        <ZunSetup key={i} index={i} z={Math.round(easing(i / count) * depth)} speed={speed} viewMobile={viewMobile} />
      ))}
    </>
  );
}

let canSound = false;

const listener = new AudioListener();
const audioLoader = new AudioLoader();
Cache.enabled = true;

function ZunSetup({ z, speed, index, viewMobile }: { z: number; speed: number; index: number; viewMobile: boolean }) {
  const searchParams = useSearchParams();
  const { addClickToCount } = useHajClickerStore((state) => state);
  const ref = useRef<LOD>(null);
  const { a11yPrefersState } = useUserPreferences();
  const [hovered, setHovered] = useState(false);
  const [isAnimate, setIsAnimate] = useState(false);
  const { viewport, camera } = useThree((state) => state);
  const { width, height } = viewport.getCurrentViewport(camera, [0, 0, -z]);

  // eslint-disable-next-line -- don't need setData
  const [data] = useState({
    y: MathUtils.randFloatSpread(height * 2),
    x: MathUtils.randFloatSpread(2),
    spin: MathUtils.randFloat(8, 12),
    rX: Math.random() * Math.PI,
    rZ: Math.random() * Math.PI,
  });
  if (canSound) camera.add(listener);
  const handleBotClick = (/*e: ThreeEvent<MouseEvent>*/): void => {
    if (!searchParams.get('play')) {
      return;
    }
    if (!hovered) {
      addClickToCount();
    }
    setHovered(true);

    canSound = true;
    const sound = new Audio(listener);
    const randInt = Math.floor(Math.random() * 10);

    enum BotSounds {
      Friendly = '/assets/audio/Pixel_54.wav',
      FriendlyCool = '/assets/audio/Pixel_57.wav',
      FriendlyLong = '/assets/audio/Pixel_64.wav',
    }

    const randSound = (): string => {
      if (randInt >= 8) {
        return BotSounds.Friendly;
      } else if (randInt >= 6) {
        return BotSounds.FriendlyCool;
      }
      return BotSounds.FriendlyLong;
    };

    enum FilmCowSounds {
      BlehBlehBleh = '/assets/audio/voice_-_bleh_bleh_bleh_blah.wav',
      Hmm = '/assets/audio/voice_-_hmm_3.wav',
      OhNo = '/assets/audio/voice_-_oh_no_4.wav',
      ThankYou = '/assets/audio/voice_-_thank_you_2.wav',
      Wow = '/assets/audio/voice_-_wow_4.wav',
    }
    const randFilmCowSound = (): string => {
      if (randInt >= 8) {
        return FilmCowSounds.Hmm;
      } else if (randInt >= 6) {
        return FilmCowSounds.OhNo;
      } else if (randInt >= 4) {
        return FilmCowSounds.BlehBlehBleh;
      } else if (randInt >= 2) {
        return FilmCowSounds.Wow;
      }
      return FilmCowSounds.ThankYou;
    };

    const audioDecider = () => {
      if (Math.floor(Math.random() * 10) > 5) {
        return randFilmCowSound();
      }
      return randSound();
    };

    audioLoader.load(audioDecider(), (buffer) => {
      sound.setBuffer(buffer);
      sound.setLoop(false);
      sound.setVolume(1);
      sound.play();
    });
    setTimeout(() => {
      setHovered(false);
    }, 1500);
  };

  useFrame((state, delta) => {
    // stops if not current tab
    if (delta < 0.1) {
      // neil go up
      ref.current?.position.set(
        index === 0 ? 0 : data.x * width,
        (data.y += a11yPrefersState.prefersReducedMotion ? 0 : delta * speed),
        -z,
      );
    }

    // rotate neil
    if (!a11yPrefersState.prefersReducedMotion) {
      ref.current?.rotation.set(
        (data.rX += delta / data.spin),
        Math.sin(index * 1000 + state.clock.elapsedTime / 10) * Math.PI,
        (data.rZ += delta / data.spin),
      );
    }

    // reset neil to bottom of viewport
    if (data.y > height * (index === 0 ? 4 : 1)) {
      data.y = -(height * (index === 0 ? 4 : 1));
    }

    if (ref.current && !a11yPrefersState.prefersReducedMotion) {
      ref.current.scale.x =
        ref.current.scale.y =
        ref.current.scale.z =
          MathUtils.lerp(ref.current.scale.z, hovered ? 0.07 : 0.05, 0.1);
    } else if (ref.current) {
      ref.current.scale.x = ref.current.scale.y = ref.current.scale.z = hovered ? 0.07 : 0.05;
    }
  });

  useEffect(() => {
    if (searchParams.get('play') === 'true') {
      setIsAnimate(true);
    } else {
      setIsAnimate(false);
    }
  }, [searchParams]);

  return (
    <>
      {/* eslint-disable-next-line -- react-three a11y only gives a few roles */}
      <A11y role='image' description="Oscar Creativo's Bot Neil on a spacewalk">
        {!viewMobile ? (
          <Detailed ref={ref} distances={[0, 65, 80]} onClick={handleBotClick} scale={0.001}>
            <Neilx512 isPlay={isAnimate} />
            <Neilx256 isPlay={isAnimate} />
            <Neilx128 isPlay={isAnimate} />
          </Detailed>
        ) : (
          <Detailed ref={ref} distances={[0, 65]} onClick={handleBotClick} scale={0.001}>
            <Neilx256 isPlay={isAnimate} />
            <Neilx128 isPlay={isAnimate} />
          </Detailed>
        )}
      </A11y>
    </>
  );
}
