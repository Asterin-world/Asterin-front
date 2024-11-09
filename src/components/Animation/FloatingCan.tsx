"use client"
import React, { forwardRef, ReactNode } from "react";
import { Float } from '@react-three/drei';
import { SodaCan, SodaCanProps } from "./SodaCan";
import { Group } from "three";
type FloatingCanProps = {
    flavor?: SodaCanProps["flavor"];
    floatSpeed?: number;
    rotationIntensity?: number;
    floatIntensity?: number;
    floatingRange?: [number, number];
    children?: ReactNode;
}
const FloatingCan = forwardRef<Group, FloatingCanProps>(({
    flavor = "mojito",
floatSpeed= 1.5,
rotationIntensity= 1,
floatIntensity=0.2,
floatingRange=[-0.2, 0.2],
children,
...props
}, ref) => {
    return (
        <group ref={ref} {...props}>
            <Float
                speed={floatSpeed}
                rotationIntensity={rotationIntensity}
                floatIntensity={floatIntensity}
                floatingRange={floatingRange}
            >
                <SodaCan flavor={flavor}/>
            </Float>
        </group>
    )
})
FloatingCan.displayName = "FloatingCan";
export default FloatingCan;