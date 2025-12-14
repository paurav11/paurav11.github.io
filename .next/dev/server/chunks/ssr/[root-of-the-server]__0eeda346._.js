module.exports = [
"[externals]/react-dom/client [external] (react-dom/client, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("react-dom/client", () => require("react-dom/client"));

module.exports = mod;
}),
"[externals]/@nextui-org/react [external] (@nextui-org/react, esm_import)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("@nextui-org/react");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[project]/pages/navbar.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

/**
 * Author: Paurav Shah
 * Date: 2025-12-12
 * Version: 1.0.0
 * License: MIT
 */ __turbopack_context__.s([
    "Menu",
    ()=>Menu,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$dom$2f$client__$5b$external$5d$__$28$react$2d$dom$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react-dom/client [external] (react-dom/client, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$nextui$2d$org$2f$react__$5b$external$5d$__$2840$nextui$2d$org$2f$react$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/@nextui-org/react [external] (@nextui-org/react, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa6/index.mjs [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f40$nextui$2d$org$2f$react__$5b$external$5d$__$2840$nextui$2d$org$2f$react$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f40$nextui$2d$org$2f$react__$5b$external$5d$__$2840$nextui$2d$org$2f$react$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
function Menu() {
    const [isMenuOpen, setIsMenuOpen] = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].useState(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$nextui$2d$org$2f$react__$5b$external$5d$__$2840$nextui$2d$org$2f$react$2c$__esm_import$29$__["Navbar"], {
        onMenuOpenChange: setIsMenuOpen,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$nextui$2d$org$2f$react__$5b$external$5d$__$2840$nextui$2d$org$2f$react$2c$__esm_import$29$__["NavbarContent"], {
                id: "brand-logo-section",
                justify: "start",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$nextui$2d$org$2f$react__$5b$external$5d$__$2840$nextui$2d$org$2f$react$2c$__esm_import$29$__["NavbarMenuToggle"], {
                        "aria-label": isMenuOpen ? "Close menu" : "Open menu",
                        className: "sm:hidden"
                    }, void 0, false, {
                        fileName: "[project]/pages/navbar.js",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$nextui$2d$org$2f$react__$5b$external$5d$__$2840$nextui$2d$org$2f$react$2c$__esm_import$29$__["NavbarBrand"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$nextui$2d$org$2f$react__$5b$external$5d$__$2840$nextui$2d$org$2f$react$2c$__esm_import$29$__["Avatar"], {
                                size: "sm",
                                title: "Paurav",
                                color: "default",
                                src: "./paurav_shah_photo.jpg"
                            }, void 0, false, {
                                fileName: "[project]/pages/navbar.js",
                                lineNumber: 27,
                                columnNumber: 11
                            }, this),
                            "  ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$nextui$2d$org$2f$react__$5b$external$5d$__$2840$nextui$2d$org$2f$react$2c$__esm_import$29$__["Link"], {
                                id: "brand-logo",
                                className: "kumar-one-regular",
                                title: "Paurav",
                                color: "foreground",
                                href: "#",
                                children: "Paurav"
                            }, void 0, false, {
                                fileName: "[project]/pages/navbar.js",
                                lineNumber: 29,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/navbar.js",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/navbar.js",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$nextui$2d$org$2f$react__$5b$external$5d$__$2840$nextui$2d$org$2f$react$2c$__esm_import$29$__["NavbarContent"], {
                id: "brand-portfolio-section",
                className: "hidden sm:flex gap-10",
                justify: "center"
            }, void 0, false, {
                fileName: "[project]/pages/navbar.js",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$nextui$2d$org$2f$react__$5b$external$5d$__$2840$nextui$2d$org$2f$react$2c$__esm_import$29$__["NavbarContent"], {
                id: "brand-social-section",
                justify: "end",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$nextui$2d$org$2f$react__$5b$external$5d$__$2840$nextui$2d$org$2f$react$2c$__esm_import$29$__["NavbarItem"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$nextui$2d$org$2f$react__$5b$external$5d$__$2840$nextui$2d$org$2f$react$2c$__esm_import$29$__["Link"], {
                            color: "foreground",
                            title: "Paurav Shah | LinkedIn",
                            target: "_blank",
                            href: "https://github.com/paurav11",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["FaGithub"], {}, void 0, false, {
                                fileName: "[project]/pages/navbar.js",
                                lineNumber: 61,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/pages/navbar.js",
                            lineNumber: 60,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/pages/navbar.js",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$nextui$2d$org$2f$react__$5b$external$5d$__$2840$nextui$2d$org$2f$react$2c$__esm_import$29$__["NavbarItem"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$nextui$2d$org$2f$react__$5b$external$5d$__$2840$nextui$2d$org$2f$react$2c$__esm_import$29$__["Link"], {
                            color: "foreground",
                            title: "Paurav Shah | LinkedIn",
                            target: "_blank",
                            href: "https://linkedin.com/in/paurav11/",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["FaLinkedin"], {}, void 0, false, {
                                fileName: "[project]/pages/navbar.js",
                                lineNumber: 66,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/pages/navbar.js",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/pages/navbar.js",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$nextui$2d$org$2f$react__$5b$external$5d$__$2840$nextui$2d$org$2f$react$2c$__esm_import$29$__["NavbarItem"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$nextui$2d$org$2f$react__$5b$external$5d$__$2840$nextui$2d$org$2f$react$2c$__esm_import$29$__["Link"], {
                            color: "foreground",
                            title: "Paurav Shah | Instagram",
                            target: "_blank",
                            href: "https://instagram.com/paurav_11/",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["FaInstagram"], {}, void 0, false, {
                                fileName: "[project]/pages/navbar.js",
                                lineNumber: 71,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/pages/navbar.js",
                            lineNumber: 70,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/pages/navbar.js",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$nextui$2d$org$2f$react__$5b$external$5d$__$2840$nextui$2d$org$2f$react$2c$__esm_import$29$__["NavbarItem"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$nextui$2d$org$2f$react__$5b$external$5d$__$2840$nextui$2d$org$2f$react$2c$__esm_import$29$__["Link"], {
                            color: "foreground",
                            title: "Paurav Shah | Facebook",
                            target: "_blank",
                            href: "https://facebook.com/paurav.shah.11/",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["FaFacebook"], {}, void 0, false, {
                                fileName: "[project]/pages/navbar.js",
                                lineNumber: 76,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/pages/navbar.js",
                            lineNumber: 75,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/pages/navbar.js",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$nextui$2d$org$2f$react__$5b$external$5d$__$2840$nextui$2d$org$2f$react$2c$__esm_import$29$__["NavbarItem"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$nextui$2d$org$2f$react__$5b$external$5d$__$2840$nextui$2d$org$2f$react$2c$__esm_import$29$__["Link"], {
                            color: "foreground",
                            title: "Paurav Shah | X",
                            target: "_blank",
                            href: "https://x.com/PauravNShah",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["FaXTwitter"], {}, void 0, false, {
                                fileName: "[project]/pages/navbar.js",
                                lineNumber: 81,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/pages/navbar.js",
                            lineNumber: 80,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/pages/navbar.js",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/navbar.js",
                lineNumber: 58,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$nextui$2d$org$2f$react__$5b$external$5d$__$2840$nextui$2d$org$2f$react$2c$__esm_import$29$__["NavbarMenu"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$nextui$2d$org$2f$react__$5b$external$5d$__$2840$nextui$2d$org$2f$react$2c$__esm_import$29$__["NavbarMenuItem"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$nextui$2d$org$2f$react__$5b$external$5d$__$2840$nextui$2d$org$2f$react$2c$__esm_import$29$__["Link"], {
                        id: "contact-item",
                        className: "w-full",
                        title: "Contact",
                        color: "foreground",
                        href: "#contact",
                        size: "lg",
                        children: "Contact"
                    }, void 0, false, {
                        fileName: "[project]/pages/navbar.js",
                        lineNumber: 107,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/pages/navbar.js",
                    lineNumber: 106,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/pages/navbar.js",
                lineNumber: 90,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/pages/navbar.js",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
const navbar = ()=>{
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$dom$2f$client__$5b$external$5d$__$28$react$2d$dom$2f$client$2c$__cjs$29$__["default"].createRoot(document.getElementById("navbar-item")).render(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].StrictMode, {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$nextui$2d$org$2f$react__$5b$external$5d$__$2840$nextui$2d$org$2f$react$2c$__esm_import$29$__["NextUIProvider"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "w-screen flex items-start justify-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Menu, {}, void 0, false, {
                        fileName: "[project]/pages/navbar.js",
                        lineNumber: 122,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/pages/navbar.js",
                    lineNumber: 121,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/pages/navbar.js",
                lineNumber: 120,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/pages/navbar.js",
            lineNumber: 119,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0)));
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        id: "navbar-item"
    }, void 0, false, {
        fileName: "[project]/pages/navbar.js",
        lineNumber: 129,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = navbar;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/pages/navbar.js [ssr] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/pages/navbar.js [ssr] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0eeda346._.js.map