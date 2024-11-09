"use client";
import React from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";
useGLTF.preload("/111.glb");

const flavorTextures = {
  mojito: "/labels/mojito.jpg",
  classic: "/labels/classic.jpg",
};

const metalMaterial = new THREE.MeshStandardMaterial({
  roughness: 0.3,
  metalness: 1,
  color: "#bbbbbb",
});

export type SodaCanProps = {
  flavor?: keyof typeof flavorTextures;
  scale?: number;
};

export function SodaCan({
  flavor = "classic",
  scale = 2,
  ...props
}: SodaCanProps) {
  const { nodes } = useGLTF("/111.gltf");
  const labels = useTexture(flavorTextures);
  
  // Fixes upside down labels
  labels.classic.flipY = false;
  labels.mojito.flipY = false;
  const label = labels[flavor];

  return ( 
    <group {...props} dispose={null} scale={scale * 0.5} position={[0, 0, 0]} rotation={[0, Math.PI/2 + 0.45, 0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Center as THREE.Mesh).geometry}
        position={[0, 0.467, 0]}
        scale={0.006}>
        <meshStandardMaterial roughness={0.3} metalness={0.7} map={label} />
      </mesh>
      <group position={[0, 0.392, 0]} scale={0.006}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Mesh as THREE.Mesh).geometry}
          material={metalMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Mesh_1 as THREE.Mesh).geometry}
          material={metalMaterial}
        />
      </group>
    </group>
  );
}
