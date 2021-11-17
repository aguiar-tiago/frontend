import { ReactNode } from "react";
import { ButtonProps } from 'antd/lib/button'

export interface Props extends ButtonProps {
    size?: Size,
    className?: string,
    href?: string,
    danger?: boolean,
    ghost?: boolean,
    info?: boolean,
    warning?: boolean,
    success?: boolean,
    target?: string,
    children?: any,
    id?: string,
    disabled? : boolean,
    icon?: ReactNode,
}

type Size = "large" | "middle" | "small";

