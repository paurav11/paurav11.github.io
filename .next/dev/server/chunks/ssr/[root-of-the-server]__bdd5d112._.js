module.exports = [
"[externals]/styled-jsx/style.js [external] (styled-jsx/style.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("styled-jsx/style.js", () => require("styled-jsx/style.js"));

module.exports = mod;
}),
"[externals]/@heroui/react [external] (@heroui/react, esm_import)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("@heroui/react");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[project]/pages/index.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

/**
 * Author: Paurav Shah
 * Date: 2025-12-14
 * Version: 1.0.0
 * License: MIT
 */ __turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/styled-jsx/style.js [external] (styled-jsx/style.js, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$head$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/head.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dynamic$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dynamic.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa6/index.mjs [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$heroui$2f$react__$5b$external$5d$__$2840$heroui$2f$react$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/@heroui/react [external] (@heroui/react, esm_import)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f40$heroui$2f$react__$5b$external$5d$__$2840$heroui$2f$react$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f40$heroui$2f$react__$5b$external$5d$__$2840$heroui$2f$react$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
;
;
;
// import {useRouter} from 'next/router';
// Dynamically import the ClientOnlyComponent with ssr: false
const Navbar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dynamic$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/components/navbar.js [ssr] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/components/navbar.js [client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
// Dynamically import the ClientOnlyComponent with ssr: false
const Scene = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dynamic$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/components/Scene.js [ssr] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/components/Scene.js [client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
// Download Resume
const downloadResume = ()=>{
    const pdfUrl = "Paurav_Shah_Resume.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Paurav_Shah_Resume.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};
function Home() {
    const [action, setAction] = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].useState(null);
    // const router = useRouter();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    const sectionRef1 = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    const sectionRef2 = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    const sectionRef3 = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    const sectionRef4 = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false); // Track visibility
    const [lastScrollTop, setLastScrollTop] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(0); // Track the last scroll position
    // Function to detect scroll direction and active section
    const handleScroll = ()=>{
        const currentScrollTop = window.scrollY || document.documentElement.scrollTop;
        const scrollDirection = currentScrollTop > lastScrollTop ? 'down' : 'up';
        // Update the last scroll position
        setLastScrollTop(currentScrollTop);
        // console.log(`Scrolling ${scrollDirection}`); // Log scroll direction (up or down)
        if (scrollDirection === 'down') {
        // Load more content, etc.
        // console.log('User is scrolling down');
        } else if (scrollDirection === 'up') {
        // Handle scrolling up actions
        // console.log('User is scrolling up');
        }
        if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight) {
        // console.log('You have reached the bottom!');
        // Trigger a function to load more content here
        } else if (window.scrollY === 0) {
        // console.log('You have reached the top!');
        // Trigger a function to load more content here
        }
    };
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        window.addEventListener('scroll', handleScroll);
        const observer = new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
                if (entry.isIntersecting) {
                    // Section is visible in the viewport
                    setIsVisible(true);
                    const links = document.getElementsByClassName('menuItem');
                    for(let i = 0; i < links.length; i++){
                        links[i].classList.remove('activeItem');
                    }
                    // console.log(entry.target.id + ' section is visible');
                    let sectionId = entry.target.id;
                    if (sectionId === 'about') {
                        let activeLink = document.getElementById('about-item');
                        if (activeLink) {
                            activeLink.classList.add('activeItem');
                        }
                    } else if (sectionId === 'services') {
                        let activeLink = document.getElementById('services-item');
                        if (activeLink) {
                            activeLink.classList.add('activeItem');
                        }
                    } else if (sectionId === 'portfolio') {
                        let activeLink = document.getElementById('portfolio-item');
                        if (activeLink) {
                            activeLink.classList.add('activeItem');
                        }
                    } else if (sectionId === 'contact') {
                        let activeLink = document.getElementById('contact-item');
                        if (activeLink) {
                            activeLink.classList.add('activeItem');
                        }
                    }
                } else {
                    // Section is not visible
                    setIsVisible(false);
                }
            });
        }, {
            threshold: 0.5
        });
        const section = sectionRef.current;
        if (section) {
            observer.observe(section);
        }
        const section1 = sectionRef1.current;
        if (section1) {
            observer.observe(section1);
        }
        const section2 = sectionRef2.current;
        if (section2) {
            observer.observe(section2);
        }
        const section3 = sectionRef3.current;
        if (section3) {
            observer.observe(section3);
        }
        const section4 = sectionRef4.current;
        if (section4) {
            observer.observe(section4);
        }
        // Cleanup observer on component unmount
        return ()=>{
            window.removeEventListener('scroll', handleScroll);
            if (section) {
                observer.unobserve(section);
            }
            if (section1) {
                observer.unobserve(section1);
            }
            if (section2) {
                observer.unobserve(section2);
            }
            if (section3) {
                observer.unobserve(section3);
            }
            if (section4) {
                observer.unobserve(section4);
            }
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "jsx-d8a5ff1f436883f0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$head$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("title", {
                        className: "jsx-d8a5ff1f436883f0",
                        children: "Paurav Shah | Portfolio"
                    }, void 0, false, {
                        fileName: "[project]/pages/index.js",
                        lineNumber: 173,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1.0",
                        className: "jsx-d8a5ff1f436883f0"
                    }, void 0, false, {
                        fileName: "[project]/pages/index.js",
                        lineNumber: 174,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("link", {
                        rel: "icon",
                        href: "./favicon_io/favicon.ico",
                        className: "jsx-d8a5ff1f436883f0"
                    }, void 0, false, {
                        fileName: "[project]/pages/index.js",
                        lineNumber: 175,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/index.js",
                lineNumber: 172,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("header", {
                id: "portfolio-header",
                className: "jsx-d8a5ff1f436883f0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Navbar, {}, void 0, false, {
                    fileName: "[project]/pages/index.js",
                    lineNumber: 179,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/pages/index.js",
                lineNumber: 178,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                id: "content-wrapper",
                className: "jsx-d8a5ff1f436883f0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("main", {
                        id: "main",
                        className: "jsx-d8a5ff1f436883f0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                                id: "intro",
                                ref: sectionRef,
                                className: "jsx-d8a5ff1f436883f0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    id: "intro-content",
                                    className: "jsx-d8a5ff1f436883f0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            id: "photo-div",
                                            className: "jsx-d8a5ff1f436883f0",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Scene, {}, void 0, false, {
                                                fileName: "[project]/pages/index.js",
                                                lineNumber: 187,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/pages/index.js",
                                            lineNumber: 186,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            id: "intro-div",
                                            className: "jsx-d8a5ff1f436883f0",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$heroui$2f$react__$5b$external$5d$__$2840$heroui$2f$react$2c$__esm_import$29$__["Card"], {
                                                id: "intro-card",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$heroui$2f$react__$5b$external$5d$__$2840$heroui$2f$react$2c$__esm_import$29$__["CardBody"], {
                                                        id: "intro-card-body",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                                id: "user-name",
                                                                className: "jsx-d8a5ff1f436883f0" + " " + "google-sans-code-regular",
                                                                children: "Paurav Shah"
                                                            }, void 0, false, {
                                                                fileName: "[project]/pages/index.js",
                                                                lineNumber: 192,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                                className: "jsx-d8a5ff1f436883f0",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("i", {
                                                                    className: "jsx-d8a5ff1f436883f0",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                        id: "user-role",
                                                                        className: "jsx-d8a5ff1f436883f0",
                                                                        children: "Full Stack Engineer | Cloud & AI Enthusiast | Creator"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/pages/index.js",
                                                                        lineNumber: 193,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/pages/index.js",
                                                                    lineNumber: 193,
                                                                    columnNumber: 24
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/pages/index.js",
                                                                lineNumber: 193,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                                className: "jsx-d8a5ff1f436883f0" + " " + "mt-5",
                                                                children: "Experienced software engineer with over 4 years of experience in designing, developing, and delivering robust and scalable enterprise solutions. Proficient in Java and Spring technologies with microservices architecture, leveraging strong problem-solving skills and agile methodologies, building RESTful APIs, and integrating with relational databases."
                                                            }, void 0, false, {
                                                                fileName: "[project]/pages/index.js",
                                                                lineNumber: 194,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                                className: "jsx-d8a5ff1f436883f0" + " " + "mt-5",
                                                                children: "Recognized for delivering innovative and tailored solutions that consistently exceed expectations, with a pragmatic approach to complex technical challenges. Driven by creativity and a commitment to excellence, thrives in leadership roles, ensuring timely deliverables with great attention to detail while actively contributing to team success."
                                                            }, void 0, false, {
                                                                fileName: "[project]/pages/index.js",
                                                                lineNumber: 195,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                                className: "jsx-d8a5ff1f436883f0" + " " + "mt-5",
                                                                children: "Kindly, go through my resume for more information and let me know if I'm the person that you might be looking for. Always looking forward to connect with innovative minds."
                                                            }, void 0, false, {
                                                                fileName: "[project]/pages/index.js",
                                                                lineNumber: 196,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/pages/index.js",
                                                        lineNumber: 191,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$heroui$2f$react__$5b$external$5d$__$2840$heroui$2f$react$2c$__esm_import$29$__["CardFooter"], {
                                                        id: "intro-card-footer",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            id: "intro-btns",
                                                            className: "jsx-d8a5ff1f436883f0",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$heroui$2f$react__$5b$external$5d$__$2840$heroui$2f$react$2c$__esm_import$29$__["Button"], {
                                                                    id: "resume-btn",
                                                                    className: "bordered-btn",
                                                                    title: "Download Resume",
                                                                    color: "primary",
                                                                    variant: "bordered",
                                                                    onPress: downloadResume,
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["FaFileArrowDown"], {}, void 0, false, {
                                                                            fileName: "[project]/pages/index.js",
                                                                            lineNumber: 201,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        " Resume"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/pages/index.js",
                                                                    lineNumber: 200,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$heroui$2f$react__$5b$external$5d$__$2840$heroui$2f$react$2c$__esm_import$29$__["Button"], {
                                                                    id: "email-btn",
                                                                    className: "bordered-btn",
                                                                    title: "Email",
                                                                    color: "primary",
                                                                    variant: "bordered",
                                                                    as: "a",
                                                                    target: "_blank",
                                                                    href: "mailto:dev.paurav@gmail.com",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["FaPaperPlane"], {}, void 0, false, {
                                                                            fileName: "[project]/pages/index.js",
                                                                            lineNumber: 204,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        " Message"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/pages/index.js",
                                                                    lineNumber: 203,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/pages/index.js",
                                                            lineNumber: 199,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/pages/index.js",
                                                        lineNumber: 198,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/pages/index.js",
                                                lineNumber: 190,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/pages/index.js",
                                            lineNumber: 189,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/pages/index.js",
                                    lineNumber: 185,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/pages/index.js",
                                lineNumber: 184,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                                id: "contact",
                                ref: sectionRef4,
                                className: "jsx-d8a5ff1f436883f0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                        id: "contact-title",
                                        className: "jsx-d8a5ff1f436883f0" + " " + "google-sans-code-regular title",
                                        children: "Contact."
                                    }, void 0, false, {
                                        fileName: "[project]/pages/index.js",
                                        lineNumber: 555,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        id: "contact-content",
                                        className: "jsx-d8a5ff1f436883f0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                className: "jsx-d8a5ff1f436883f0",
                                                children: "Get in touch to collaborate on innovative ideas that brings your vision to life."
                                            }, void 0, false, {
                                                fileName: "[project]/pages/index.js",
                                                lineNumber: 557,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                id: "contact-details",
                                                className: "jsx-d8a5ff1f436883f0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                        id: "map-location-div",
                                                        className: "jsx-d8a5ff1f436883f0",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("iframe", {
                                                            id: "google-map-location",
                                                            src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.56659724278!2d77.46612865633178!3d12.954280232591845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1764524730854!5m2!1sen!2sin",
                                                            width: "400",
                                                            height: "400",
                                                            frameborder: "0",
                                                            style: {
                                                                border: 0
                                                            },
                                                            allowfullscreen: "",
                                                            "aria-hidden": "false",
                                                            tabindex: "0",
                                                            className: "jsx-d8a5ff1f436883f0" + " " + "map"
                                                        }, void 0, false, {
                                                            fileName: "[project]/pages/index.js",
                                                            lineNumber: 560,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/pages/index.js",
                                                        lineNumber: 559,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                        id: "contact-form-div",
                                                        className: "jsx-d8a5ff1f436883f0",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$heroui$2f$react__$5b$external$5d$__$2840$heroui$2f$react$2c$__esm_import$29$__["Card"], {
                                                            id: "contact-form-card",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$heroui$2f$react__$5b$external$5d$__$2840$heroui$2f$react$2c$__esm_import$29$__["CardBody"], {
                                                                id: "contact-form-card-body",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$heroui$2f$react__$5b$external$5d$__$2840$heroui$2f$react$2c$__esm_import$29$__["Form"], {
                                                                    id: "contact-form",
                                                                    className: "w-full max-w-xs flex flex-col gap-4",
                                                                    validationBehavior: "native",
                                                                    onReset: ()=>setAction("reset"),
                                                                    onSubmit: (e)=>{
                                                                        e.preventDefault();
                                                                        let data = Object.fromEntries(new FormData(e.currentTarget));
                                                                        // Get form data
                                                                        var name = data.username;
                                                                        var email = data.email;
                                                                        var subject = data.subject;
                                                                        var message = data.message;
                                                                        const formData = {
                                                                            name,
                                                                            email,
                                                                            subject,
                                                                            message
                                                                        };
                                                                        const googleScriptURL = "https://script.google.com/macros/s/AKfycbw1jGWOzrBvIGc_S_ZBC4fmPQc9zY1INzSWvT82Emx9Bswd9nGFE5-HE__zZz0A_mY/exec"; // Replace with your Google Apps Script URL
                                                                        fetch(googleScriptURL, {
                                                                            method: "POST",
                                                                            mode: "no-cors",
                                                                            headers: {
                                                                                "Content-Type": "application/json"
                                                                            },
                                                                            body: JSON.stringify(formData)
                                                                        }).then(()=>{
                                                                            console.log("Success:");
                                                                        }).catch((error)=>{
                                                                            console.error("Error:", error);
                                                                        });
                                                                        document.getElementById("contact-form").reset();
                                                                        // Send draft to email client
                                                                        const receiver_email = 'dev.paurav@gmail.com';
                                                                        const subjectLine = 'Re: Paurav Shah | Portfolio  - ' + data.subject + ' | ' + data.username + ' (' + data.email + ')';
                                                                        const body = 'Hi Paurav,\n\n' + data.message + '\n\nRegards,\n\n' + data.username;
                                                                        const mailtoLink = `mailto:${receiver_email}?subject=${encodeURIComponent(subjectLine)}&body=${encodeURIComponent(body)}`;
                                                                        window.location.href = mailtoLink;
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$heroui$2f$react__$5b$external$5d$__$2840$heroui$2f$react$2c$__esm_import$29$__["Input"], {
                                                                            isRequired: true,
                                                                            id: "username",
                                                                            errorMessage: "Please enter a valid name",
                                                                            label: "Name",
                                                                            labelPlacement: "inside",
                                                                            name: "username",
                                                                            placeholder: "Enter your name",
                                                                            maxLength: 200,
                                                                            type: "text"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/pages/index.js",
                                                                            lineNumber: 618,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$heroui$2f$react__$5b$external$5d$__$2840$heroui$2f$react$2c$__esm_import$29$__["Input"], {
                                                                            id: "email",
                                                                            isRequired: true,
                                                                            errorMessage: "Please enter a valid email",
                                                                            label: "Email",
                                                                            labelPlacement: "inside",
                                                                            name: "email",
                                                                            placeholder: "Enter your email",
                                                                            maxLength: 200,
                                                                            type: "email"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/pages/index.js",
                                                                            lineNumber: 630,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$heroui$2f$react__$5b$external$5d$__$2840$heroui$2f$react$2c$__esm_import$29$__["Input"], {
                                                                            isRequired: true,
                                                                            id: "subject",
                                                                            errorMessage: "Please enter a valid subject",
                                                                            label: "Subject",
                                                                            labelPlacement: "inside",
                                                                            name: "subject",
                                                                            placeholder: "Enter your subject",
                                                                            maxLength: 200,
                                                                            type: "text"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/pages/index.js",
                                                                            lineNumber: 642,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$heroui$2f$react__$5b$external$5d$__$2840$heroui$2f$react$2c$__esm_import$29$__["Textarea"], {
                                                                            isRequired: true,
                                                                            id: "message",
                                                                            errorMessage: "Please enter a valid message",
                                                                            label: "Message",
                                                                            labelPlacement: "inside",
                                                                            name: "message",
                                                                            placeholder: "Enter your message",
                                                                            maxLength: 400,
                                                                            type: "text"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/pages/index.js",
                                                                            lineNumber: 654,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                            id: "contact-form-btns-div",
                                                                            className: "jsx-d8a5ff1f436883f0" + " " + "gap-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$heroui$2f$react__$5b$external$5d$__$2840$heroui$2f$react$2c$__esm_import$29$__["Button"], {
                                                                                    color: "transperant",
                                                                                    type: "submit",
                                                                                    className: "bordered-btn",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["FaEnvelope"], {}, void 0, false, {
                                                                                            fileName: "[project]/pages/index.js",
                                                                                            lineNumber: 668,
                                                                                            columnNumber: 29
                                                                                        }, this),
                                                                                        " Send"
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/pages/index.js",
                                                                                    lineNumber: 667,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$heroui$2f$react__$5b$external$5d$__$2840$heroui$2f$react$2c$__esm_import$29$__["Button"], {
                                                                                    color: "transperant",
                                                                                    type: "reset",
                                                                                    variant: "flat",
                                                                                    className: "bordered-btn",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["FaArrowsRotate"], {}, void 0, false, {
                                                                                            fileName: "[project]/pages/index.js",
                                                                                            lineNumber: 671,
                                                                                            columnNumber: 29
                                                                                        }, this),
                                                                                        " Reset"
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/pages/index.js",
                                                                                    lineNumber: 670,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/pages/index.js",
                                                                            lineNumber: 666,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/pages/index.js",
                                                                    lineNumber: 576,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/pages/index.js",
                                                                lineNumber: 575,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/pages/index.js",
                                                            lineNumber: 574,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/pages/index.js",
                                                        lineNumber: 573,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/pages/index.js",
                                                lineNumber: 558,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pages/index.js",
                                        lineNumber: 556,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/index.js",
                                lineNumber: 554,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/index.js",
                        lineNumber: 183,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("footer", {
                        id: "portfolio-footer",
                        className: "jsx-d8a5ff1f436883f0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                className: "jsx-d8a5ff1f436883f0",
                                children: "Copyright © 2025 Paurav Shah. All rights reserved."
                            }, void 0, false, {
                                fileName: "[project]/pages/index.js",
                                lineNumber: 684,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("br", {
                                className: "jsx-d8a5ff1f436883f0"
                            }, void 0, false, {
                                fileName: "[project]/pages/index.js",
                                lineNumber: 685,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$heroui$2f$react__$5b$external$5d$__$2840$heroui$2f$react$2c$__esm_import$29$__["Button"], {
                                id: "github-btn",
                                className: "bordered-btn",
                                title: "Paurav Shah | GitHub",
                                color: "primary",
                                variant: "bordered",
                                as: "a",
                                target: "_blank",
                                href: "https://github.com/paurav11",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["FaGithub"], {}, void 0, false, {
                                        fileName: "[project]/pages/index.js",
                                        lineNumber: 687,
                                        columnNumber: 13
                                    }, this),
                                    " paurav11"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/index.js",
                                lineNumber: 686,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("br", {
                                className: "jsx-d8a5ff1f436883f0"
                            }, void 0, false, {
                                fileName: "[project]/pages/index.js",
                                lineNumber: 689,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("br", {
                                className: "jsx-d8a5ff1f436883f0"
                            }, void 0, false, {
                                fileName: "[project]/pages/index.js",
                                lineNumber: 690,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("code", {
                                className: "jsx-d8a5ff1f436883f0",
                                children: "Crafted with ❤️ by Paurav Shah."
                            }, void 0, false, {
                                fileName: "[project]/pages/index.js",
                                lineNumber: 691,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/index.js",
                        lineNumber: 683,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/index.js",
                lineNumber: 182,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"], {
                id: "d8a5ff1f436883f0",
                children: "#navbar-item.jsx-d8a5ff1f436883f0{padding:2rem!important}#content-wrapper.jsx-d8a5ff1f436883f0{flex-flow:column wrap;display:flex}main.jsx-d8a5ff1f436883f0{flex-grow:1;width:100%;height:auto}#intro.jsx-d8a5ff1f436883f0,#about.jsx-d8a5ff1f436883f0,#services.jsx-d8a5ff1f436883f0,#portfolio.jsx-d8a5ff1f436883f0,#contact.jsx-d8a5ff1f436883f0{z-index:1;width:80vw;margin:auto;overflow:hidden}#intro.jsx-d8a5ff1f436883f0{margin:0 15%;padding:10% 0 0}#intro-content.jsx-d8a5ff1f436883f0{z-index:1;flex-flow:row;justify-content:center;align-items:center;width:66vw;display:flex;overflow:hidden}#photo-div.jsx-d8a5ff1f436883f0{text-align:right;width:50%;padding:0 3% 0 0}#profile-photo.jsx-d8a5ff1f436883f0{filter:drop-shadow(1px 1px 1px #fff);border-radius:50%;margin-left:auto;margin-right:0;height:500px!important}#intro-div.jsx-d8a5ff1f436883f0{text-align:left;width:50%;padding:0 0 0 3%}#user-name.jsx-d8a5ff1f436883f0,.title.jsx-d8a5ff1f436883f0{color:#ffc31f;font-size:2rem}.title.jsx-d8a5ff1f436883f0{text-align:center;margin:10% 0 0}#about-content.jsx-d8a5ff1f436883f0{z-index:1;text-align:center;width:66vw;margin:2% auto;overflow:hidden}#education.jsx-d8a5ff1f436883f0,#work-experience.jsx-d8a5ff1f436883f0{text-align:left;width:50%}#education-title.jsx-d8a5ff1f436883f0,#work-experience-title.jsx-d8a5ff1f436883f0{color:#ffc31f;padding:2% 0}.about-item.jsx-d8a5ff1f436883f0{border:1px solid #6e3a9d}#services-content.jsx-d8a5ff1f436883f0{z-index:1;text-align:center;width:66vw;margin:2% auto;overflow:hidden}#my-services.jsx-d8a5ff1f436883f0{flex-flow:row;justify-content:space-between;align-items:center;padding:5% 0 0;display:flex}#portfolio-content.jsx-d8a5ff1f436883f0{z-index:1;text-align:center;width:66vw;margin:2% auto;overflow:hidden}#my-portfolio.jsx-d8a5ff1f436883f0{text-align:center;margin-top:5%}#contact.jsx-d8a5ff1f436883f0{padding:0 0 5%}#contact-content.jsx-d8a5ff1f436883f0{z-index:1;text-align:center;width:66vw;margin:2% auto;overflow:hidden}#contact-details.jsx-d8a5ff1f436883f0{z-index:1;flex-flow:row;justify-content:center;align-items:center;margin:5% 0 0;display:flex;overflow:hidden}#map-location-div.jsx-d8a5ff1f436883f0{text-align:right;justify-content:end;width:50%;padding:0 3% 0 0;display:flex}.map.jsx-d8a5ff1f436883f0{border-radius:5%;width:25rem;height:25rem}#contact-form-div.jsx-d8a5ff1f436883f0{text-align:left;justify-content:start;width:50%;padding:0 0 0 3%;display:flex}#contact-form-btns-div.jsx-d8a5ff1f436883f0{justify-content:start;width:-webkit-fill-available;display:flex}footer.jsx-d8a5ff1f436883f0{text-align:center;z-index:1;background-color:#000;width:100%;padding:15px 0;position:relative;bottom:0;overflow:hidden}code.jsx-d8a5ff1f436883f0{border-radius:5px;padding:.75rem;font-family:Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace;font-size:.7rem}@media only screen and (width<=950px){main.jsx-d8a5ff1f436883f0{width:100%;height:auto;margin-bottom:5%;padding:15% 0 0}#intro.jsx-d8a5ff1f436883f0,#about.jsx-d8a5ff1f436883f0,#services.jsx-d8a5ff1f436883f0,#portfolio.jsx-d8a5ff1f436883f0,#contact.jsx-d8a5ff1f436883f0{z-index:1;width:80vw;height:auto;margin:auto;overflow:hidden}#intro.jsx-d8a5ff1f436883f0{margin:0 10%}#intro-content.jsx-d8a5ff1f436883f0{flex-flow:column;justify-content:center;align-items:center;width:100vw;display:flex;overflow:hidden}#photo-div.jsx-d8a5ff1f436883f0{text-align:center;width:100vw;margin:auto;padding:0 0 5%}#profile-photo.jsx-d8a5ff1f436883f0{height:auto;margin-left:auto;margin-right:auto}#intro-div.jsx-d8a5ff1f436883f0{text-align:center;width:100vw;padding:5% 0 0}.title.jsx-d8a5ff1f436883f0{text-align:center;margin:20% 0 0}#about-content.jsx-d8a5ff1f436883f0{z-index:1;text-align:center;width:100vw;margin:2% auto;overflow:hidden}#education.jsx-d8a5ff1f436883f0,#work-experience.jsx-d8a5ff1f436883f0{text-align:center;width:100%}#about-me.jsx-d8a5ff1f436883f0{flex-flow:column;justify-content:center;align-items:center;display:flex}#services-content.jsx-d8a5ff1f436883f0{z-index:1;text-align:center;width:100vw;margin:3% auto;overflow:hidden}#my-services.jsx-d8a5ff1f436883f0{flex-flow:column;justify-content:space-between;align-items:center;padding:5% 0 0;display:flex}#portfolio-content.jsx-d8a5ff1f436883f0{z-index:1;text-align:center;width:100vw;margin:2% auto;overflow:hidden}#my-portfolio.jsx-d8a5ff1f436883f0{text-align:center;margin-top:10%}.slider-container.jsx-d8a5ff1f436883f0{border-radius:10px;width:100%;height:auto;position:relative;overflow:hidden;box-shadow:0 4px 8px #0000001a}.image-deck.jsx-d8a5ff1f436883f0{grid-template-columns:repeat(1,1fr);display:grid}#contact-content.jsx-d8a5ff1f436883f0{z-index:1;text-align:center;width:100vw;margin:2% auto;overflow:hidden}#contact-details.jsx-d8a5ff1f436883f0{z-index:1;flex-flow:column;justify-content:center;align-items:center;margin:5% 0 0;display:flex;overflow:hidden}#map-location-div.jsx-d8a5ff1f436883f0{text-align:center;justify-content:center;width:100vw;padding:0 0 5%;display:flex}#contact-form-div.jsx-d8a5ff1f436883f0{text-align:center;justify-content:center;width:100vw;padding:5% 0 0;display:flex}#contact-form-btns-div.jsx-d8a5ff1f436883f0{justify-content:center;width:-webkit-fill-available;display:flex}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/pages/index.js",
        lineNumber: 171,
        columnNumber: 5
    }, this);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__bdd5d112._.js.map