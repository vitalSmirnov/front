(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/shared/stores/userStore.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "createUserStore": ()=>createUserStore,
    "defaultInitState": ()=>defaultInitState
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/vanilla.mjs [app-client] (ecmascript)");
;
const defaultInitState = {
    user: null
};
const createUserStore = function() {
    let initState = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : defaultInitState;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createStore"])()((set)=>({
            ...initState,
            setUser: (payload)=>set(()=>({
                        user: payload
                    }))
        }));
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/shared/providers/userProvider.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "UserStoreContext": ()=>UserStoreContext,
    "UserStoreProvider": ()=>UserStoreProvider,
    "useUserStore": ()=>useUserStore
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$stores$2f$userStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/stores/userStore.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
const UserStoreContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const UserStoreProvider = (param)=>{
    let { children } = param;
    _s();
    const storeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    if (storeRef.current === null) {
        storeRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$stores$2f$userStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createUserStore"])();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(UserStoreContext.Provider, {
        value: storeRef.current,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/shared/providers/userProvider.tsx",
        lineNumber: 22,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
_s(UserStoreProvider, "EtiU7pDwGhTDZwMnrKEqZbxjqXE=");
_c = UserStoreProvider;
const useUserStore = (selector)=>{
    _s1();
    const userStoreContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(UserStoreContext);
    if (!userStoreContext) {
        throw new Error("useUserStore must be used within UserStoreProvider");
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])(userStoreContext, selector);
};
_s1(useUserStore, "vcRX5Zo+OQICgvz9V9HmHEGhcIc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"]
    ];
});
var _c;
__turbopack_context__.k.register(_c, "UserStoreProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/shared/entities/RoleEnum/UserRoleEnum.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "UserRoleEnum": ()=>UserRoleEnum
});
var UserRoleEnum = /*#__PURE__*/ function(UserRoleEnum) {
    UserRoleEnum["ADMIN"] = "ADMIN";
    UserRoleEnum["STUDENT"] = "STUDENT";
    UserRoleEnum["PROFESSOR"] = "PROFESSOR";
    return UserRoleEnum;
}({});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/shared/router/routesEnum.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "RoutesEnum": ()=>RoutesEnum
});
var RoutesEnum = /*#__PURE__*/ function(RoutesEnum) {
    RoutesEnum["HOME"] = "/";
    RoutesEnum["LOGIN"] = "/auth/login";
    RoutesEnum["REGISTRATION"] = "/auth/register";
    RoutesEnum["TICKETS"] = "/home/tickets";
    RoutesEnum["REQUESTS"] = "/requests";
    return RoutesEnum;
}({});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/widgets/Sidebar/types/items.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "MenuItems": ()=>MenuItems
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$router$2f$routesEnum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/router/routesEnum.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$HeartOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HeartOutlined$3e$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons/es/icons/HeartOutlined.js [app-client] (ecmascript) <export default as HeartOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$FileAddOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileAddOutlined$3e$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons/es/icons/FileAddOutlined.js [app-client] (ecmascript) <export default as FileAddOutlined>");
;
;
;
;
const MenuItems = [
    {
        key: "tickets",
        label: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$router$2f$routesEnum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoutesEnum"].TICKETS,
            children: "Больничные"
        }, void 0, false, {
            fileName: "[project]/src/widgets/Sidebar/types/items.tsx",
            lineNumber: 8,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0)),
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$HeartOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HeartOutlined$3e$__["HeartOutlined"], {}, void 0, false, {
            fileName: "[project]/src/widgets/Sidebar/types/items.tsx",
            lineNumber: 9,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        key: "requests",
        label: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$router$2f$routesEnum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoutesEnum"].REQUESTS,
            children: "Заявки"
        }, void 0, false, {
            fileName: "[project]/src/widgets/Sidebar/types/items.tsx",
            lineNumber: 13,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0)),
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$FileAddOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileAddOutlined$3e$__["FileAddOutlined"], {}, void 0, false, {
            fileName: "[project]/src/widgets/Sidebar/types/items.tsx",
            lineNumber: 14,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0))
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/shared/api/index.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "AxiosInstance": ()=>AxiosInstance
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
// Read a cookie value by name (browser-only)
const getCookie = (name)=>{
    if (typeof document === "undefined") return undefined;
    const match = document.cookie.split("; ").find((row)=>row.startsWith("".concat(name, "=")));
    const value = match === null || match === void 0 ? void 0 : match.split("=")[1];
    return value ? decodeURIComponent(value) : undefined;
};
const AxiosInstance = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: "/api",
    withCredentials: true
});
AxiosInstance.interceptors.request.use(async (config)=>{
    if (config.headers) config.headers["Content-Type"] = "application/json";
    return config;
}, (error)=>{
    return Promise.reject(error);
});
AxiosInstance.interceptors.response.use((response)=>{
    return response;
}, async (error)=>{
    var _error_response, _originalRequest_url, _originalRequest_url1, _originalRequest_url2;
    const originalRequest = error.config;
    if (((_error_response = error.response) === null || _error_response === void 0 ? void 0 : _error_response.status) === 401 && !((_originalRequest_url = originalRequest.url) === null || _originalRequest_url === void 0 ? void 0 : _originalRequest_url.includes("/auth/login")) && !((_originalRequest_url1 = originalRequest.url) === null || _originalRequest_url1 === void 0 ? void 0 : _originalRequest_url1.includes("/auth/refresh")) && !((_originalRequest_url2 = originalRequest.url) === null || _originalRequest_url2 === void 0 ? void 0 : _originalRequest_url2.includes("/auth/register")) && !originalRequest._retry) {
        originalRequest._retry = true;
        try {
            // Call refresh without body; let server read refresh token from HttpOnly cookie
            const refreshRes = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("/api/auth/refresh", undefined, {
                withCredentials: true
            });
            const newToken = refreshRes.data.accessToken;
            if (typeof sessionStorage !== "undefined") {
                sessionStorage.setItem("accessToken", newToken);
            }
            // ensure headers before mutation
            if (!originalRequest.headers) originalRequest.headers = {};
            originalRequest.headers.Authorization = "Bearer ".concat(newToken);
            return AxiosInstance(originalRequest);
        } catch (refreshError) {
            console.error("Failed to refresh token", refreshError);
            return Promise.reject(refreshError);
        }
    }
    return Promise.reject(error);
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/widgets/Sidebar/api/index.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "getUserInfo": ()=>getUserInfo
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$api$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/api/index.ts [app-client] (ecmascript)");
;
const getUserInfo = async ()=>{
    return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$api$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AxiosInstance"].get("/auth/user/info");
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/widgets/Sidebar/ui/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "TopBarMenu": ()=>TopBarMenu
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$menu$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/menu/index.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$providers$2f$userProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/providers/userProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$entities$2f$RoleEnum$2f$UserRoleEnum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/entities/RoleEnum/UserRoleEnum.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$widgets$2f$Sidebar$2f$types$2f$items$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/widgets/Sidebar/types/items.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$widgets$2f$Sidebar$2f$api$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/widgets/Sidebar/api/index.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const TopBarMenu = ()=>{
    _s();
    const { user, setUser } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$providers$2f$userProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserStore"])({
        "TopBarMenu.useUserStore": (state)=>state
    }["TopBarMenu.useUserStore"]);
    const fetchUserInfo = async ()=>{
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$widgets$2f$Sidebar$2f$api$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUserInfo"])();
    };
    const MenuItemsRoles = (user === null || user === void 0 ? void 0 : user.role) === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$entities$2f$RoleEnum$2f$UserRoleEnum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserRoleEnum"].ADMIN ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$widgets$2f$Sidebar$2f$types$2f$items$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MenuItems"] : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$widgets$2f$Sidebar$2f$types$2f$items$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MenuItems"].slice(0, 0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "TopBarMenu.useLayoutEffect": ()=>{
            fetchUserInfo().then({
                "TopBarMenu.useLayoutEffect": (response)=>{
                    const data = response.data;
                    if ("error" in data) {
                        return;
                    }
                    setUser({
                        ...data
                    });
                }
            }["TopBarMenu.useLayoutEffect"]);
        }
    }["TopBarMenu.useLayoutEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$menu$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
        mode: "horizontal",
        items: MenuItemsRoles
    }, void 0, false, {
        fileName: "[project]/src/widgets/Sidebar/ui/index.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(TopBarMenu, "KfOHaGU09pYF+XPMpET8kFBigl0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$providers$2f$userProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserStore"]
    ];
});
_c = TopBarMenu;
var _c;
__turbopack_context__.k.register(_c, "TopBarMenu");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_6ebdf36f._.js.map