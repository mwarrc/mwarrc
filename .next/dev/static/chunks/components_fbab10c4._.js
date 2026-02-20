(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/InteractiveGrid.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>InteractiveGrid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function InteractiveGrid() {
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mouseRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: -1000,
        y: -1000
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InteractiveGrid.useEffect": ()=>{
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
            const init = {
                "InteractiveGrid.useEffect.init": ()=>{
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
                }
            }["InteractiveGrid.useEffect.init"];
            const animate = {
                "InteractiveGrid.useEffect.animate": ()=>{
                    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
                    dots.forEach({
                        "InteractiveGrid.useEffect.animate": (dot)=>{
                            dot.update(mouseRef.current.x, mouseRef.current.y);
                            dot.draw(ctx);
                        }
                    }["InteractiveGrid.useEffect.animate"]);
                    animationFrameId = requestAnimationFrame(animate);
                }
            }["InteractiveGrid.useEffect.animate"];
            const handleMouseMove = {
                "InteractiveGrid.useEffect.handleMouseMove": (e)=>{
                    mouseRef.current = {
                        x: e.clientX,
                        y: e.clientY
                    };
                }
            }["InteractiveGrid.useEffect.handleMouseMove"];
            const handleResize = {
                "InteractiveGrid.useEffect.handleResize": ()=>{
                    init();
                }
            }["InteractiveGrid.useEffect.handleResize"];
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('resize', handleResize);
            init();
            animate();
            return ({
                "InteractiveGrid.useEffect": ()=>{
                    window.removeEventListener('mousemove', handleMouseMove);
                    window.removeEventListener('resize', handleResize);
                    cancelAnimationFrame(animationFrameId);
                }
            })["InteractiveGrid.useEffect"];
        }
    }["InteractiveGrid.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
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
_s(InteractiveGrid, "Qimi1+XRgPM/xwIviNOompZCtaA=");
_c = InteractiveGrid;
var _c;
__turbopack_context__.k.register(_c, "InteractiveGrid");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/CustomCursor.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CustomCursor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
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
    _s();
    const cursorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const pathRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const lastX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const lastTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const colorIdx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CustomCursor.useEffect": ()=>{
            const el = cursorRef.current;
            const path = pathRef.current;
            if (!el || !path) return;
            const onMove = {
                "CustomCursor.useEffect.onMove": (e)=>{
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
                }
            }["CustomCursor.useEffect.onMove"];
            window.addEventListener('mousemove', onMove);
            return ({
                "CustomCursor.useEffect": ()=>window.removeEventListener('mousemove', onMove)
            })["CustomCursor.useEffect"];
        }
    }["CustomCursor.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
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
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
_s(CustomCursor, "UN0s16Lj/QFbIAEXrfh+hGduIOU=");
_c = CustomCursor;
var _c;
__turbopack_context__.k.register(_c, "CustomCursor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_fbab10c4._.js.map