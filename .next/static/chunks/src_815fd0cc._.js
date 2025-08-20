(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/shared/api/index.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "AxiosInstance": ()=>AxiosInstance
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
const AxiosInstance = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: "/api",
    withCredentials: true
});
AxiosInstance.interceptors.request.use(async (config)=>{
    let token;
    const raw = document.cookie.split("; ").find((c)=>c.startsWith("accessToken="));
    token = raw ? decodeURIComponent(raw.split("=")[1]) : undefined;
    if (token) {
        config.headers.Authorization = "Bearer ".concat(token);
    }
    config.headers["Content-Type"] = "application/json";
    config.headers["Access-Control-Allow-Origin"] = "localhost:3000/*";
    config.headers["Access-Control-Allow-Credentials"] = true;
    config.headers["Access-Control-Allow-Origin"] = "localhost:3000/*";
    return config;
}, (error)=>{
    return Promise.reject(error);
});
AxiosInstance.interceptors.response.use((response)=>{
    return response;
}, async (error)=>{
    var _error_response;
    const originalRequest = error.config;
    if (((_error_response = error.response) === null || _error_response === void 0 ? void 0 : _error_response.status) === 401 && !originalRequest.url.includes("/api/auth/login") && !originalRequest.url.includes("/api/auth/refresh") && !originalRequest.url.includes("/api/auth/register") && !originalRequest._retry) {
        originalRequest._retry = true;
        try {
            const refreshRes = await AxiosInstance.post("/api/auth/refresh", {
                refreshToken: localStorage.getItem("refreshToken")
            });
            const newToken = refreshRes.data.accessToken;
            sessionStorage.setItem("accessToken", newToken);
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
"[project]/src/widgets/TicketList/api/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "approoveTicket": ()=>approoveTicket,
    "declineTicket": ()=>declineTicket,
    "getTicketList": ()=>getTicketList
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$api$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/api/index.ts [app-client] (ecmascript)");
;
const getTicketList = async (payload)=>{
    return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$api$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AxiosInstance"].get("/api/tickets", {
        params: payload
    });
};
const approoveTicket = async (id)=>{
    return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$api$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AxiosInstance"].post("/api/tickets/".concat(id, "/approve"), {}).then((response)=>{
        return response.data;
    }).catch((error)=>{
        console.error("Error fetching tickets:", error);
        return error;
    });
};
const declineTicket = async (id)=>{
    return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$api$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AxiosInstance"].post("/api/tickets/".concat(id, "/decline"), {}).then((response)=>{
        return response.data;
    }).catch((error)=>{
        console.error("Error fetching tickets:", error);
        return error;
    });
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/shared/entities/Ticket/StatusEnum.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "StatusEnum": ()=>StatusEnum
});
var StatusEnum = /*#__PURE__*/ function(StatusEnum) {
    StatusEnum["PENDING"] = "PENDING";
    StatusEnum["APPROVED"] = "APPROVED";
    StatusEnum["REJECTED"] = "REJECTED";
    return StatusEnum;
}({});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/features/FilterForm/utils/index.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "setParams": ()=>setParams
});
function setParams(param) {
    let { userName, startDate, endDate } = param;
    const params = new URLSearchParams();
    if (userName) params.set("userName", userName);
    if (startDate) params.set("startDate", startDate.toString());
    if (endDate) params.set("endDate", endDate.toString());
    window.location.pathname = "".concat(window.location.href, "?").concat(params.toString());
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/features/FilterForm/ui/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "FilterForm": ()=>FilterForm
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$form$2f$hooks$2f$useForm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useForm$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/form/hooks/useForm.js [app-client] (ecmascript) <export default as useForm>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$date$2d$picker$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DatePicker$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/date-picker/index.js [app-client] (ecmascript) <export default as DatePicker>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/form/index.js [app-client] (ecmascript) <export default as Form>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$input$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Input$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/input/index.js [app-client] (ecmascript) <export default as Input>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$FilterForm$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/FilterForm/utils/index.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function FilterForm(param) {
    let { userName, startDate, endDate, limit, offset } = param;
    _s();
    const [form] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$form$2f$hooks$2f$useForm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useForm$3e$__["useForm"])();
    const handleChange = (_, changedValues)=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$FilterForm$2f$utils$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setParams"])(changedValues);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$form$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Form$3e$__["Form"], {
        form: form,
        onValuesChange: handleChange,
        initialValues: {
            userName: userName || "",
            startDate: startDate || "",
            endDate: endDate || ""
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$input$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Input$3e$__["Input"], {
                placeholder: "ФИО",
                style: {
                    width: 120
                }
            }, void 0, false, {
                fileName: "[project]/src/features/FilterForm/ui/index.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$date$2d$picker$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DatePicker$3e$__["DatePicker"], {
                placeholder: "Начало"
            }, void 0, false, {
                fileName: "[project]/src/features/FilterForm/ui/index.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$date$2d$picker$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DatePicker$3e$__["DatePicker"], {
                placeholder: "Конец"
            }, void 0, false, {
                fileName: "[project]/src/features/FilterForm/ui/index.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/FilterForm/ui/index.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_s(FilterForm, "rI7DrJIrFu7YmlGWYiMFTzs8jF0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$form$2f$hooks$2f$useForm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useForm$3e$__["useForm"]
    ];
});
_c = FilterForm;
var _c;
__turbopack_context__.k.register(_c, "FilterForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/widgets/TicketList/ui/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>TicketList
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$table$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Table$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/table/index.js [app-client] (ecmascript) <export default as Table>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/button/index.js [app-client] (ecmascript) <locals> <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$image$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/image/index.js [app-client] (ecmascript) <export default as Image>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$flex$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flex$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/flex/index.js [app-client] (ecmascript) <export default as Flex>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$tooltip$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tooltip$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/tooltip/index.js [app-client] (ecmascript) <export default as Tooltip>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$widgets$2f$TicketList$2f$api$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/widgets/TicketList/api/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$AppTag$2f$ui$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/AppTag/ui/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$entities$2f$Ticket$2f$StatusEnum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/entities/Ticket/StatusEnum.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CheckCircleOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircleOutlined$3e$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons/es/icons/CheckCircleOutlined.js [app-client] (ecmascript) <export default as CheckCircleOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$DeleteOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DeleteOutlined$3e$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons/es/icons/DeleteOutlined.js [app-client] (ecmascript) <export default as DeleteOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$FilterForm$2f$ui$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/FilterForm/ui/index.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
async function TicketList(param) {
    let { searchParams } = param;
    _s();
    const { userName, startDate, endDate, limit, offset } = searchParams || {};
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$widgets$2f$TicketList$2f$api$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTicketList"])({
        userName,
        startDate,
        endDate,
        limit: limit ? Number(limit) : 10,
        offset: offset ? Number(offset) : 0
    }).then((response)=>{
        setData(response.data);
    }).catch((error)=>{
        console.error("Error fetching tickets:", error);
    });
    // Example columns, adjust as needed
    const columns = [
        {
            title: "Студент",
            dataIndex: "user.name",
            key: "userName"
        },
        {
            title: "По дату",
            dataIndex: "startDate",
            key: "startDate"
        },
        {
            title: "с даты",
            dataIndex: "endDate",
            key: "endDate"
        },
        {
            title: "Статус",
            dataIndex: "endDate",
            key: "endDate",
            renderItem: (text)=>{
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$AppTag$2f$ui$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppTag"], {
                    variant: text === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$entities$2f$Ticket$2f$StatusEnum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StatusEnum"].PENDING ? "default" : text === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$entities$2f$Ticket$2f$StatusEnum$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StatusEnum"].APPROVED ? "success" : "danger",
                    children: text
                }, void 0, false, {
                    fileName: "[project]/src/widgets/TicketList/ui/index.tsx",
                    lineNumber: 45,
                    columnNumber: 11
                }, this);
            }
        },
        {
            title: "Причина",
            dataIndex: "endDate",
            key: "endDate",
            renderItem: (text)=>{
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$AppTag$2f$ui$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppTag"], {
                    variant: "info",
                    children: text
                }, void 0, false, {
                    fileName: "[project]/src/widgets/TicketList/ui/index.tsx",
                    lineNumber: 58,
                    columnNumber: 16
                }, this);
            }
        },
        {
            title: "Подтверждения",
            dataIndex: "prooves",
            key: "prooves",
            renderItem: (prooves)=>{
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: prooves.map((item)=>{
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$image$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"], {
                            preview: true,
                            style: {
                                width: 50,
                                height: 50
                            },
                            src: item.path,
                            alt: "empty"
                        }, item.id, false, {
                            fileName: "[project]/src/widgets/TicketList/ui/index.tsx",
                            lineNumber: 70,
                            columnNumber: 17
                        }, this);
                    })
                }, void 0, false);
            }
        },
        {
            title: "Действия",
            dataIndex: "actions",
            key: "actions",
            renderItem: (param)=>{
                let { id } = param;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$flex$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flex$3e$__["Flex"], {
                    justify: "center",
                    gap: "12px",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$tooltip$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tooltip$3e$__["Tooltip"], {
                            title: "Быстрое подтверждение",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                                onClick: ()=>console.log("Approve ticket with id: ".concat(id)),
                                type: "primary",
                                size: "small",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$CheckCircleOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircleOutlined$3e$__["CheckCircleOutlined"], {}, void 0, false, {
                                    fileName: "[project]/src/widgets/TicketList/ui/index.tsx",
                                    lineNumber: 99,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/widgets/TicketList/ui/index.tsx",
                                lineNumber: 94,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/widgets/TicketList/ui/index.tsx",
                            lineNumber: 93,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$tooltip$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tooltip$3e$__["Tooltip"], {
                            title: "Быстрое отклонение",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$button$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Button$3e$__["Button"], {
                                onClick: ()=>console.log("Approve ticket with id: ".concat(id)),
                                color: "danger",
                                type: "primary",
                                size: "small",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$DeleteOutlined$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DeleteOutlined$3e$__["DeleteOutlined"], {}, void 0, false, {
                                    fileName: "[project]/src/widgets/TicketList/ui/index.tsx",
                                    lineNumber: 109,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/widgets/TicketList/ui/index.tsx",
                                lineNumber: 103,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/widgets/TicketList/ui/index.tsx",
                            lineNumber: 102,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/widgets/TicketList/ui/index.tsx",
                    lineNumber: 89,
                    columnNumber: 11
                }, this);
            }
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$FilterForm$2f$ui$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FilterForm"], {
                userName: userName,
                startDate: startDate,
                endDate: endDate,
                limit: limit ? Number(limit) : 10,
                offset: offset ? Number(offset) : 0
            }, void 0, false, {
                fileName: "[project]/src/widgets/TicketList/ui/index.tsx",
                lineNumber: 120,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$table$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Table$3e$__["Table"], {
                columns: columns,
                dataSource: result,
                rowKey: "id",
                pagination: false
            }, void 0, false, {
                fileName: "[project]/src/widgets/TicketList/ui/index.tsx",
                lineNumber: 127,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/widgets/TicketList/ui/index.tsx",
        lineNumber: 119,
        columnNumber: 5
    }, this);
}
_s(TicketList, "hhQqYsxLIv1exGOzUvDGOVv6fXw=");
_c = TicketList;
var _c;
__turbopack_context__.k.register(_c, "TicketList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_815fd0cc._.js.map