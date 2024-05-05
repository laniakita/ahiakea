'use client';
/* eslint-disable react/no-unknown-property -- jsx-eslint compatibility issues with r3f */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 bot_zun_animation_by_oscar_creativo.glb --types --shadows --transform --resolution 512 --debug 
Files: bot_zun_animation_by_oscar_creativo.glb [12.93MB] > /home/lani/Development/ahiakea/apps/laniakita-com/public/assets/tmp-gltf/assets/models/bot-zun/bz-x512.glb [1.4MB] (89%)
Author: OSCAR CREATIVO (https://sketchfab.com/oscar_creativo)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/bot-zun-animation-by-oscar-creativo-c0e0b640363345fa9ac0973d90537978
Title: BOT ZUN ANIMATION by Oscar Creativo
*/
import React, { useEffect, useRef } from 'react';
import type { Mesh, MeshStandardMaterial, AnimationClip, Group } from 'three';
import type { GLTF } from 'three-stdlib';
import { useGLTF, useAnimations } from '@react-three/drei';
import { GroupProps } from '@react-three/fiber';
import { useDeviceWidthStore } from '@/providers/device-width-store-provider';

type GLTFResult = GLTF & {
  nodes: {
    MANO_IZQ_MANO_IZQ_0: Mesh;
    MANO_DER_MANO_DER_0: Mesh;
    TORNILLO_CABEZA_TORNILLO_CABEZA_0: Mesh;
    HOMBRO_IZQ_HOMBRO_IZQ_0: Mesh;
    HOMNRO_DER_HOMNRO_DER_0: Mesh;
    OJO_OJO_0: Mesh;
    OJO_1_OJO_1_0: Mesh;
    CUERPO__CUERPO__0: Mesh;
    PISO_PISO_0: Mesh;
  };
  materials: {
    MANO_IZQ: MeshStandardMaterial;
    MANO_DER: MeshStandardMaterial;
    TORNILLO_CABEZA: MeshStandardMaterial;
    HOMBRO_IZQ: MeshStandardMaterial;
    HOMNRO_DER: MeshStandardMaterial;
    material: MeshStandardMaterial;
    OJO_1: MeshStandardMaterial;
    CUERPO: MeshStandardMaterial;
    PISO: MeshStandardMaterial;
  };
  animations: GLTFAction[];
};

type ActionName = 'CINEMA_4D_Principal';
interface GLTFAction extends AnimationClip {
  name: ActionName;
}

// I think this is really for instancing // type ContextType = Record<string, React.ForwardRefExoticComponent<JSX.IntrinsicElements['mesh']>>

const resFinder = (resolution?: number): string => {
  if (resolution === 1024) {
    return '/assets/models/bot-zun/bz-x1024.glb';
  } else if (resolution === 512) {
    return '/assets/models/bot-zun/bz-x512.glb';
  } else if (resolution === 256) {
    return '/assets/models/bot-zun/bz-x256.glb';
  }
  return '/assets/models/bot-zun/bz-x512.glb';
};



export function BotZun({res, ...props}:{res?:number, props?: GroupProps}) {
  useGLTF.preload(resFinder(res)) 
  
  const group = useRef<Group>(null!);
  const { nodes, materials, animations } = useGLTF(resFinder(res)) as GLTFResult;

  const { actions } = useAnimations(animations, group);
    
  

  useEffect(() => {
    actions.CINEMA_4D_Principal?.play();
  }, [actions]);

  return (
    <group ref={group} {...props} scale={0.09} dispose={null}>
      <group name='Sketchfab_Scene'>
        <group name='RootNode'>
          <group name='Nulo_' position={[0, -7.755, 3.109]}>
            <group name='MANO_IZQ' position={[-55.287, 34.915, -0.5]}>
              <mesh
                name='MANO_IZQ_MANO_IZQ_0'
                castShadow
                receiveShadow
                geometry={nodes.MANO_IZQ_MANO_IZQ_0.geometry}
                material={materials.MANO_IZQ}
              />
            </group>
            <group name='MANO_DER' position={[54.225, 35.376, -0.263]}>
              <mesh
                name='MANO_DER_MANO_DER_0'
                castShadow
                receiveShadow
                geometry={nodes.MANO_DER_MANO_DER_0.geometry}
                material={materials.MANO_DER}
              />
            </group>
            <group name='TORNILLO_CABEZA' position={[0, 70.112, 0.092]}>
              <mesh
                name='TORNILLO_CABEZA_TORNILLO_CABEZA_0'
                castShadow
                receiveShadow
                geometry={nodes.TORNILLO_CABEZA_TORNILLO_CABEZA_0.geometry}
                material={materials.TORNILLO_CABEZA}
              />
            </group>
            <group name='HOMBRO_IZQ' position={[-43.492, 35.439, -0.026]}>
              <mesh
                name='HOMBRO_IZQ_HOMBRO_IZQ_0'
                castShadow
                receiveShadow
                geometry={nodes.HOMBRO_IZQ_HOMBRO_IZQ_0.geometry}
                material={materials.HOMBRO_IZQ}
              />
            </group>
            <group name='HOMNRO_DER' position={[42.533, 34.02, -3.109]}>
              <mesh
                name='HOMNRO_DER_HOMNRO_DER_0'
                castShadow
                receiveShadow
                geometry={nodes.HOMNRO_DER_HOMNRO_DER_0.geometry}
                material={materials.HOMNRO_DER}
              />
            </group>
            <group name='OJO' position={[14.132, 34.19, 43.244]}>
              <mesh
                name='OJO_OJO_0'
                castShadow
                receiveShadow
                geometry={nodes.OJO_OJO_0.geometry}
                material={materials.material}
              />
            </group>
            <group name='OJO_1' position={[-17.524, 35.207, 41.548]}>
              <mesh
                name='OJO_1_OJO_1_0'
                castShadow
                receiveShadow
                geometry={nodes.OJO_1_OJO_1_0.geometry}
                material={materials.OJO_1}
              />
            </group>
            <group name='CUERPO_' position={[0, 0.52, -3.109]}>
              <mesh
                name='CUERPO__CUERPO__0'
                castShadow
                receiveShadow
                geometry={nodes.CUERPO__CUERPO__0.geometry}
                material={materials.CUERPO}
              />
            </group>
          </group>
          <group name='PISO' position={[0, -11.955, 0]}>
            <mesh
              name='PISO_PISO_0'
              castShadow
              receiveShadow
              geometry={nodes.PISO_PISO_0.geometry}
              material={materials.PISO}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

