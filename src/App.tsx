import React, { Suspense } from 'react';
import { useRoutes, Link } from 'react-router-dom'
import routes from './router';
// import Download from './views/download';

function App() {
  return (
    <div className='App'>
      {/* HELLO(测试页面用) */}
      <div className='nav'>
        <Link to="/discover">发现音乐</Link>
        <Link to="/mine">我的音乐</Link>
        <Link to="/focus">关注</Link>
        <Link to="/download">下载客户端</Link>
      </div>
      <Suspense fallback="loading...">
      {/* 让 React 在加载期间显示一个“过渡 UI（loading）”，避免白屏 */}
        <div className='main'>{useRoutes(routes)}</div>
        {/* useRoutes() 是 React Router v6 提供的一个核心 Hook，
        用来根据传入的“路由配置表”动态生成 <Route /> 结构，并返回对应的要渲染的 UI 组件 */}
      </Suspense>
    </div>
  )
}

export default App;
