/**
 * Author: Paurav Shah
 * Date: 2025-12-14
 * Version: 1.0.0
 * License: MIT
 */

"use client";

import { Canvas, useThree } from "@react-three/fiber";
import {
  OrbitControls,
  useGLTF,
  useAnimations,
  Center,
} from "@react-three/drei";
import { useEffect, useRef } from "react";

/* ---------------- MODEL ---------------- */

function Model() {
  const group = useRef();
  const { scene, animations } = useGLTF("/models/model.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    // ✅ Enable shadow casting on model meshes
    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = false;
      }
    });

    const action = Object.values(actions || {})[0];
    action?.reset().fadeIn(0.5).play();
  }, [scene, actions]);

  return (
    <primitive
      ref={group}
      object={scene}
      scale={2.0}
      position={[0, -0.9, 0]}
    />
  );
}

/* -------- CAMERA FIX -------- */

function CameraFix() {
  const { camera } = useThree();

  useEffect(() => {
    camera.lookAt(0, 0, 0);
    camera.updateProjectionMatrix();
  }, [camera]);

  return null;
}

/* ---------------- SCENE ---------------- */

export default function Scene() {
  return (
    <div
      style={{
        width: "100%",
        maxHeight: "50vw",
        height: "100vh",
        maxHeight: "500px",
        position: "relative",
        overflow: "hidden",
        flexShrink: 0,
      }}
    >
      <Canvas
        // shadows                      // ✅ ENABLE SHADOWS
        resize={{ scroll: false }}
        camera={{ position: [0, 1, 5], fov: 45 }}
        style={{ position: "absolute", inset: 0 }}
      >
        {/* CAMERA SYNC */}
        <CameraFix />

        {/* LIGHTS */}
        <ambientLight intensity={0.5} />

        <directionalLight
          position={[5, 8, 5]}
          intensity={1.5}
          castShadow               // ✅ LIGHT CASTS SHADOW
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />

        {/* MODEL */}
        <Center>
          <Model />
        </Center>

        {/* SHADOW RECEIVER (GROUND) */}
        <mesh
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -2, 0]}
          receiveShadow             // ✅ RECEIVES SHADOW
        >
          <planeGeometry args={[20, 20]} />
          <shadowMaterial opacity={0.25} />
        </mesh>

        {/* CONTROLS */}
        <OrbitControls
          target={[0, 0, 0]}
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
          enableDamping
          dampingFactor={0.08}
        />
      </Canvas>
    </div>
  );
}
