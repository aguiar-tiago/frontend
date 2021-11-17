import * as React from 'react';
import { Props } from './interface';
import { Button as BaseButton } from 'antd';
import './styles.less';

const Button: React.FunctionComponent<Props> = ({ 
    children, 
    className = '', 
    id,
    href,
    size = 'middle',
    danger = false,
    ghost = false,
    info = false,
    warning = false,
    success = false,
    type,
    tabIndex,
    disabled = false,
    target,
    onClick,
    icon
}) => {
    const classNames: string = `${info ? 'info' : ''} ${warning? 'warning' : ''} ${success? 'success' : ''} ${className}`;
    return (
        <BaseButton 
            id={id} 
            className={classNames}
            href={href}
            target={target}
            onClick={onClick}
            icon={icon}
            size={size}
            danger={danger}
            ghost={ghost}
            type={type}
            tabIndex={tabIndex}
            disabled={disabled}
            >
                {children}
        </BaseButton>
     );
}
 
export default Button;