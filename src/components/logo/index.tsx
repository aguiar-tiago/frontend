import React from 'react';
import { Props } from './interface';
import './styles.less';
 
const Logo: React.FunctionComponent<Props> = ({href, title, className = '', background}) => {
    return (
        <a data-testid="logo-component" href={href} aria-label={title} className={`${className} proposify-logo`} style={{backgroundImage: `url(${background})`}}>
        </a>
     );
}
 
export default Logo;
