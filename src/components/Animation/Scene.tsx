"use client"
import { Environment, OrbitControls } from "@react-three/drei";
import FloatingCan from "./FloatingCan";
import { useEffect, useRef, useState } from "react";
import { Group } from "three";
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import { useSelector } from "react-redux";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Scene() {
    const can1Ref = useRef<Group>(null);
    const can2Ref = useRef<Group>(null);
    const can1GroupRef = useRef<Group>(null);
    const can2GroupRef = useRef<Group>(null);
    const groupRef = useRef<Group>(null);
    const FLOAT_SPEED = 1.5;
    const { flavor } = useSelector((state: any) => state.flavor);
    const SPINS_ON_CHANGE = 8;
    const [currentFlavor, setCurrentFlavor] = useState(flavor);

    // useEffect(() => {
    //     const refreshScrollTrigger = () => {
    //         ScrollTrigger.refresh();
    //         requestAnimationFrame(refreshScrollTrigger);
    //     };
    
    //     requestAnimationFrame(refreshScrollTrigger);
    
    //     // return () => ScrollTrigger.killAll(); // Clean up when component unmounts
    // }, []);
    
    useEffect(() => {
        document.body.style.overflowY = "hidden";
        if (!can1Ref.current || !can2Ref.current) return;

        const t1 = gsap.timeline({
            onComplete: () => {
                document.body.style.overflowY = "auto";
            },
        });
        t1.to(
            can1Ref.current.rotation, {
            y: `+=${Math.PI * 2 * SPINS_ON_CHANGE}`,
            ease: "power2.inOut",
            duration: 1
        },
            0
        )
            .to(
                can2Ref.current.rotation, {
                y: `-=${Math.PI * 2 * SPINS_ON_CHANGE}`,
                ease: "power2.inOut",
                duration: 1
            },
                0
            )
            .to(
                {},
                { onStart: () => setCurrentFlavor(flavor) },
                0.5
            );

    }, [flavor]);

    useGSAP(() => {
        if (!can1Ref.current || !can2Ref.current || !can1GroupRef.current || !can2GroupRef.current || !groupRef.current) return;

        gsap.set([can1GroupRef.current.position], {
            x: 0,
            y: -3,
        });

        gsap.set([can2GroupRef.current.position], {
            x: 0,
            y: 3,
        });
        gsap.set([can1Ref.current.rotation, can2Ref.current.rotation], {
            z: 0,
        });

        const introTl = gsap.timeline({
            defaults: {
                duration: 4,
                ease: "back.out(0.1)",
            },
            onComplete: () => {
                // Re-enable scrolling after animation is done
                document.body.style.overflowY = "auto";
            },
        });

        introTl
            .to(
                can1GroupRef.current.position,
                { x: -1.4, y: -0.5 }, // Move to the left and upwards to the final position
                0
            )
            .to(
                can1GroupRef.current.rotation,
                { z: -0.5, y: Math.PI * 2, ease: "1.2" }, // Rotate can1
                0
            )
            .to(
                can2GroupRef.current.position,
                { x: 1.4, y: -0.5 }, // Move to the right and upwards to the final position
                0
            )
            .to(
                can2GroupRef.current.rotation,
                { z: 0.5, y: -Math.PI * 2, ease: "1.2" }, // Rotate can2
                0
            );

        const scrollTl = gsap.timeline({
            defaults: {
                duration: 2,
            },
            scrollTrigger: {
                trigger: ".asterin-hero", // Start animation when asterin-hero comes into view
                start: "top top",
                endTrigger: ".product-section", // End animation when product-section comes into view
                end: "center center", // Ends when product-section is in the center of viewport
                scrub: 1.5, // Smooth scroll effect
            },
        });

        // Move both cans to the center of the screen and set to fixed
        scrollTl
            .to(groupRef.current.rotation, { y: Math.PI * 2 }) // Rotate cans as you scroll


        const scrollTl1 = gsap.timeline({
            defaults: {
                duration: 2,
            },
            scrollTrigger: {
                trigger: ".product-section", // Start animation when asterin-hero comes into view
                start: "top bottom",
                endTrigger: ".product-section", // End animation when product-section comes into view
                end: "center center", // Ends when product-section is in the center of viewport
                scrub: 1.5, // Smooth scroll effect
            },
        });


        scrollTl1.to(
            can1GroupRef.current.position,
            {
                x: 0, y: -0.25, z: 0.3,
            },
            0
        ).to(can1GroupRef.current.rotation, { z: -0.2 })
            .to(
                can2GroupRef.current.position,
                {
                    x: 0, y: -0.25,
                },
                0
            )

        const scrollTl2 = gsap.timeline({
            defaults: {
                duration: 2,
            },
            scrollTrigger: {
                trigger: ".youtube-section",
                start: "top top",
                endTrigger: ".nutrition-section",
                end: "bottom center",
                scrub: 1.5,
                onEnter: () => {
                    // Hide can2 by toggling visibility
                    if (can2GroupRef.current) {
                        can2GroupRef.current.visible = false; // Instantly hide the entire group
                    }
                },
                onLeaveBack: () => {
                    // Show can2 when scrolling back
                    if (can2GroupRef.current) {
                        can2GroupRef.current.visible = true; // Instantly show the entire group
                    }
                },
            },
        });

        // Move both cans to the center of the screen and set to fixed (or other animations)
        scrollTl2.to(can1GroupRef.current.position, { y: 0.2 }).to(can1GroupRef.current?.rotation, { x: -Math.PI * 2 }); // Rotate can1 as you scroll
        
        const scrollTl3 = gsap.timeline({
            defaults: {
                duration: 2,
            },
            scrollTrigger: {
                trigger: ".testimonials-section",
                start: "top bottom",
                endTrigger: ".rolling-can",
                end: "bottom center",
                scrub: 1.5,
            },
        });

        // Move both cans to the center of the screen and set to fixed (or other animations)
        scrollTl3.to(can1GroupRef.current.position, { y: 0.2 }).to(can1GroupRef.current?.rotation, { x: -Math.PI * 2, z: -Math.PI * 2 });

        const scrollTl4 = gsap.timeline({
            defaults: {
                duration: 2,
            },
            scrollTrigger: {
                trigger: ".rolling-can", // Start animation when the youtube-section comes into view
                start: "top top", // Start hiding can2 when the top of youtube-section hits the center of the viewport
                end: "bottom bottom", // Ends when the bottom of testimonials-section hits the bottom of the viewport
                scrub: 1.5, // Smooth scroll effect
                // markers: true, // For debugging, you can remove this in production
                onEnter: () => {
                    // Hide can2 by toggling visibility
                    if (can1GroupRef.current) {
                        can1GroupRef.current.visible = false; // Instantly hide the entire group
                    }
                },
                onLeaveBack: () => {
                    // Show can2 when scrolling back
                    if (can1GroupRef.current) {
                        can1GroupRef.current.visible = true; // Instantly show the entire group
                    }
                },
            },
        });

        const scrollTl5 = gsap.timeline({
            defaults: {
                duration: 2,
            },
            scrollTrigger: {
                trigger: ".about-product-page", // Start animation when asterin-hero comes into view
                start: "top top",
                endTrigger: ".product-section", // End animation when product-section comes into view
                end: "center center", // Ends when product-section is in the center of viewport
                scrub: 1.5, // Smooth scroll effect
            },
        });

        // Move both cans to the center of the screen and set to fixed
        scrollTl5
            .to(groupRef.current.rotation, { y: Math.PI * 2 }) // Rotate cans as you scroll

    });

    return (
        <group ref={groupRef}>
            <group ref={can1GroupRef}>
                <FloatingCan ref={can1Ref} flavor={currentFlavor} floatSpeed={FLOAT_SPEED} />
            </group>
            <group ref={can2GroupRef}>
                <FloatingCan ref={can2Ref} flavor={currentFlavor} floatSpeed={FLOAT_SPEED} />
            </group>
            <OrbitControls />
            <Environment files="/hdr/field.hdr" environmentIntensity={1} environmentRotation={[0.5, 0.5, 0.5]} />
            <directionalLight intensity={3} position={[0, 1, 1]} />
        </group>
    );
}
