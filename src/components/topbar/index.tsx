import React from 'react';
import { Layout } from 'antd';
import { Props } from './interface';
import './styles.less';

const { Header } = Layout;
 
const Topbar: React.FC<Props> = ({children, theme = 'light'}) => {
    return (
        <Header className={`proposify-topbar proposify-topbar-${theme}`}>
            {children}
        </Header>
     );
}
 
export default Topbar;