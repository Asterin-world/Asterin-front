"use client"
import { Canvas } from "@react-three/fiber";
import AboutScene from "./AboutScene";

const ViewAboutCanvas = () => {
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
                <AboutScene />
        </Canvas>
    );
};
export default ViewAboutCanvas