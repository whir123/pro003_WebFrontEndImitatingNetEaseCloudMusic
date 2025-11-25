import { memo } from "react";
import type { FC, ReactNode } from "react";
// FC 是 Function Component 的缩写（函数组件）

interface IProps{
    children?: ReactNode
}

const Mine: FC<IProps> = () => {
    return <div>Mine</div>
};

export default memo(Mine);