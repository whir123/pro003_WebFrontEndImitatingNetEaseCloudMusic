import React, { lazy } from "react";
import { Navigate } from "react-router-dom"; // ⚠️ Navigate 是一个 React 组件 把用户自动重定向到指定路径
import type { RouteObject } from "react-router-dom";

// ⬇️ 这些页面组件会在浏览器第一次加载时全部被打包进主bundle.js，即使用户只访问/discover，也会把其他几个大页面一起加载
// import Discover from "@/views/discover";
// import Mine from "@/views/mine";
// import Focus from "@/views/focus";
// import Download from "@/views/download";

// ⚠️ React.lazy() 的核心作用：让路由组件按需加载（代码分割），从而大幅减少首屏体积，提高页面加载速度
// ⚠️ 动态 import，打包器（Vite / Webpack）会自动把每个页面单独拆成一个 chunk
const Discover = lazy(() => import("@/views/discover"));
const Mine = lazy(() => import("@/views/mine"));
const Focus = lazy(() => import("@/views/focus"));
const Download = lazy(() => import("@/views/download"));

const routes:RouteObject[] = [
    {
        path: '/',
        element: <Navigate to="/discover" /> // 默认重定向路径
    },
    {
        path: '/discover',
        element: <Discover/>
    },
    {
        path: '/mine',
        element: <Mine/>
    },
    {
        path: '/focus',
        element: <Focus/>
    },
    {
        path: '/download',
        element: <Download/>
    },
];

export default routes;