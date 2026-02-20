'use client';

import { useEffect, useRef } from 'react';

/**
 * CustomCursor Component
 * Ultra-lightweight custom cursor using direct DOM manipulation only.
 * No React state re-renders — zero lag, zero broken hovers.
 * Cycles brutalist neon colors on fast movement.
 */

const COLORS = ['#ff2a85', '#00f0ff', '#fff000'];

export default function CustomCursor() {
    const cursorRef = useRef<SVGSVGElement>(null);
    const pathRef = useRef<SVGPathElement>(null);
    const lastX = useRef(0);
    const lastTime = useRef(0);
    const colorIdx = useRef(0);

    useEffect(() => {
        const el = cursorRef.current;
        const path = pathRef.current;
        if (!el || !path) return;

        const onMove = (e: MouseEvent) => {
            // Instant position — no lag
            el.style.transform = `translate(${e.clientX}px,${e.clientY}px)`;

            // Color change on fast horizontal movement
            const now = performance.now();
            const speed = Math.abs(e.clientX - lastX.current) / Math.max(now - lastTime.current, 1);
            if (speed > 0.8) {
                colorIdx.current = (colorIdx.current + 1) % COLORS.length;
                const c = COLORS[colorIdx.current];
                path.setAttribute('fill', c);
                el.style.filter = `drop-shadow(2px 2px 0px #000)`;
            }
            lastX.current = e.clientX;
            lastTime.current = now;
        };

        window.addEventListener('mousemove', onMove);
        return () => window.removeEventListener('mousemove', onMove);
    }, []);

    return (
        <svg
            ref={cursorRef}
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="24"
            viewBox="0 0 20 24"
            fill="none"
            className="fixed top-0 left-0 z-[9999] pointer-events-none"
            style={{
                willChange: 'transform',
                transform: 'translate(-200px,-200px)',
                filter: 'drop-shadow(2px 2px 0px #000)',
            }}
        >
            {/* Arrow cursor path — compact, brutalist */}
            <path
                ref={pathRef}
                d="M2 1 L2 18 L7 13 L11 22 L14 21 L10 12 L17 12 Z"
                fill="#ff2a85"
                stroke="#000"
                strokeWidth="2"
                strokeLinejoin="miter"
                strokeLinecap="square"
            />
        </svg>
    );
}
