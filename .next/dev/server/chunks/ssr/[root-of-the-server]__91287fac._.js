module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/components/InteractiveGrid.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>InteractiveGrid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
function InteractiveGrid() {
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mouseRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({
        x: -1000,
        y: -1000
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        let animationFrameId;
        let dots = [];
        const spacing = 35; // Slightly wider spacing for cleaner look
        const mouseRadius = 300; // Expanded interaction area
        const gravityForce = 0.25; // Adjusted repel force
        const returnForce = 0.04; // Slower return for a "lasting" feel
        class Dot {
            x;
            y;
            originX;
            originY;
            size;
            color;
            opacity;
            constructor(x, y){
                this.x = x;
                this.y = y;
                this.originX = x;
                this.originY = y;
                this.size = 2;
                this.color = '#000000';
                this.opacity = 0.1;
            }
            draw(context) {
                context.beginPath();
                context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                context.fillStyle = this.color;
                context.globalAlpha = this.opacity;
                context.fill();
            }
            update(mouseX, mouseY) {
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
                    targetX = this.originX + dmx / (distance || 1) * pushDist;
                    targetY = this.originY + dmy / (distance || 1) * pushDist;
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
        const init = ()=>{
            const dpr = window.devicePixelRatio || 1;
            const rect = canvas.getBoundingClientRect();
            canvas.width = window.innerWidth * dpr;
            canvas.height = window.innerHeight * dpr;
            ctx.scale(dpr, dpr);
            dots = [];
            for(let x = spacing / 2; x < window.innerWidth; x += spacing){
                for(let y = spacing / 2; y < window.innerHeight; y += spacing){
                    dots.push(new Dot(x, y));
                }
            }
        };
        const animate = ()=>{
            ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
            dots.forEach((dot)=>{
                dot.update(mouseRef.current.x, mouseRef.current.y);
                dot.draw(ctx);
            });
            animationFrameId = requestAnimationFrame(animate);
        };
        const handleMouseMove = (e)=>{
            mouseRef.current = {
                x: e.clientX,
                y: e.clientY
            };
        };
        const handleResize = ()=>{
            init();
        };
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('resize', handleResize);
        init();
        animate();
        return ()=>{
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
        ref: canvasRef,
        className: "fixed inset-0 -z-50 pointer-events-none opacity-50",
        style: {
            mixBlendMode: 'multiply'
        }
    }, void 0, false, {
        fileName: "[project]/components/InteractiveGrid.tsx",
        lineNumber: 146,
        columnNumber: 9
    }, this);
}
}),
"[project]/components/CustomCursor.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CustomCursor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
/**
 * CustomCursor Component
 * Ultra-lightweight custom cursor using direct DOM manipulation only.
 * No React state re-renders — zero lag, zero broken hovers.
 * Cycles brutalist neon colors on fast movement.
 */ const COLORS = [
    '#ff2a85',
    '#00f0ff',
    '#fff000'
];
function CustomCursor() {
    const cursorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const pathRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const lastX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const lastTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const colorIdx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const el = cursorRef.current;
        const path = pathRef.current;
        if (!el || !path) return;
        const onMove = (e)=>{
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
        return ()=>window.removeEventListener('mousemove', onMove);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ref: cursorRef,
        xmlns: "http://www.w3.org/2000/svg",
        width: "20",
        height: "24",
        viewBox: "0 0 20 24",
        fill: "none",
        className: "fixed top-0 left-0 z-[9999] pointer-events-none",
        style: {
            willChange: 'transform',
            transform: 'translate(-200px,-200px)',
            filter: 'drop-shadow(2px 2px 0px #000)'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            ref: pathRef,
            d: "M2 1 L2 18 L7 13 L11 22 L14 21 L10 12 L17 12 Z",
            fill: "#ff2a85",
            stroke: "#000",
            strokeWidth: "2",
            strokeLinejoin: "miter",
            strokeLinecap: "square"
        }, void 0, false, {
            fileName: "[project]/components/CustomCursor.tsx",
            lineNumber: 63,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/CustomCursor.tsx",
        lineNumber: 48,
        columnNumber: 9
    }, this);
}
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else //TURBOPACK unreachable
            ;
        } else //TURBOPACK unreachable
        ;
    }
} //# sourceMappingURL=module.compiled.js.map
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__91287fac._.js.map