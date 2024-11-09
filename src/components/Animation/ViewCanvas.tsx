"use client"
import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";

const ViewCanvas = () => {
    return (
        <Canvas style={{
            position:'fixed',
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            overflow: 'hidden',
            pointerEvents: 'none',
            zIndex: 0,
            height: "120vh"
        }} 
        shadows={true}
        dpr={[1, 1.5]}
        gl={{ antialias: true }}
        camera={{
            fov: 22
        }}>
                <Scene />
        </Canvas>
    );
};
export default ViewCanvas