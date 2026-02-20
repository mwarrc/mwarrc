'use client';

import React, { useEffect, useRef } from 'react';

/**
 * InteractiveGrid Component
 * A canvas-based background that reacts to mouse movements with a "gravity" effect.
 * Uses brutalist colors and smooth physics for an astonishing experience.
 */
export default function InteractiveGrid() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouseRef = useRef({ x: -1000, y: -1000 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let dots: Dot[] = [];
        const spacing = 35; // Slightly wider spacing for cleaner look
        const mouseRadius = 300; // Expanded interaction area
        const gravityForce = 0.25; // Adjusted repel force
        const returnForce = 0.04; // Slower return for a "lasting" feel

        class Dot {
            x: number;
            y: number;
            originX: number;
            originY: number;
            size: number;
            color: string;
            opacity: number;

            constructor(x: number, y: number) {
                this.x = x;
                this.y = y;
                this.originX = x;
                this.originY = y;
                this.size = 2;
                this.color = '#000000';
                this.opacity = 0.1;
            }

            draw(context: CanvasRenderingContext2D) {
                context.beginPath();
                context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                context.fillStyle = this.color;
                context.globalAlpha = this.opacity;
                context.fill();
            }

            update(mouseX: number, mouseY: number) {
                const dmx = this.originX - mouseX;
                const dmy = this.originY - mouseY;
                const distance = Math.sqrt(dmx * dmx + dmy * dmy);

                let targetX = this.originX;
                let targetY = this.originY;
                let targetOpacity = 0.12;
                let targetSize = 2;
                let targetColor = '#000000';

                if (distance < mouseRadius) {
                    const power = Math.pow(1 - distance / mouseRadius, 1.5);
                    const pushDist = power * 35; // Max displacement from origin

                    targetX = this.originX + (dmx / (distance || 1)) * pushDist;
                    targetY = this.originY + (dmy / (distance || 1)) * pushDist;

                    targetOpacity = 0.12 + power * 0.6;
                    targetSize = 2 + power * 3;

                    if (distance < 100) targetColor = '#ff2a85';
                    else if (distance < 200) targetColor = '#00f0ff';
                    else targetColor = '#fff000';
                }

                // Smoothly move towards the target state
                const ease = 0.1; // Follow speed
                this.x += (targetX - this.x) * ease;
                this.y += (targetY - this.y) * ease;
                this.opacity += (targetOpacity - this.opacity) * ease;
                this.size += (targetSize - this.size) * ease;

                // Color update with threshold
                if (this.opacity > 0.2) {
                    this.color = targetColor;
                } else {
                    this.color = '#000000';
                }
            }
        }

        const init = () => {
            const dpr = window.devicePixelRatio || 1;
            const rect = canvas.getBoundingClientRect();

            canvas.width = window.innerWidth * dpr;
            canvas.height = window.innerHeight * dpr;
            ctx.scale(dpr, dpr);

            dots = [];
            for (let x = spacing / 2; x < window.innerWidth; x += spacing) {
                for (let y = spacing / 2; y < window.innerHeight; y += spacing) {
                    dots.push(new Dot(x, y));
                }
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

            dots.forEach(dot => {
                dot.update(mouseRef.current.x, mouseRef.current.y);
                dot.draw(ctx);
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };
        };

        const handleResize = () => {
            init();
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('resize', handleResize);

        init();
        animate();

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 -z-50 pointer-events-none opacity-50"
            style={{ mixBlendMode: 'multiply' }}
        />
    );
}
