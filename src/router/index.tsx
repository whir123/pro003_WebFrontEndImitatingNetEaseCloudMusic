import React from "react";
import { Navigate } from "react-router-dom"; // ⚠️ Navigate 是一个 React 组件 把用户自动重定向到指定路径
import type { RouteObject } from "react-router-dom";

import Discover from "@/views/discover";
import Mine from "@/views/mine";
import Focus from "@/views/focus";
import Download from "@/views/download";

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