import { memo } from "react";
import type { FC, ReactNode } from "react";

interface IProps{
    children?: ReactNode,
    // name: string,
    // age: number,
    // height?: number
}

const Download: FC<IProps> = (props) => {
    return (
        <div>Download
            {/* <div>name:{props.name}</div>
            <div>age:{props.age}</div>
            <div>height:{props.height}</div>
            <div>{props.children}</div> */}
        </div>
    )
};

export default memo(Download);
// ⚠️ memo 的核心作用是对函数组件进行“浅比较”
// ⚠️ 只有当组件的 props 发生变化时才会重新渲染，否则会复用上一次渲染的结果，从而避免不必要的重新渲染