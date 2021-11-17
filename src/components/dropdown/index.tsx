import React from 'react';
import { Menu, Dropdown as BaseDropdown } from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';
import { Props } from './interface';
import { Link } from 'react-router-dom';
import './styles.less';

const Dropdown: React.FC<Props> = ({items, title, trigger}) => {

    const menu: React.ReactElement = (
        <Menu>
            {items.map(({href, title}, key) => {
                return (
                    <Menu.Item key={key}>
                        <Link to={href}>{title}</Link>
                    </Menu.Item>
                );
            })}
        </Menu>
      );

    return ( 
        <BaseDropdown overlay={menu} trigger={trigger}>
            <a className="ant-dropdown-link proposify-dropdown-title" href="#" onClick={e => e.preventDefault()}>
                {title} <CaretDownOutlined />
            </a>
        </BaseDropdown> 
     );
}
 
export default Dropdown;