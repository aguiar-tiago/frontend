import { useState } from 'react';
import { Layout, Menu } from 'antd';
import { 
  PieChartOutlined, 
  CodepenOutlined, 
  CopyOutlined, 
  TeamOutlined, 
  ExperimentOutlined, 
  ApartmentOutlined, 
  SettingOutlined 
} from '@ant-design/icons';
import { Props } from './interface';
import './sidebar.less';

const { Sider } = Layout;

const Sidebar = ({className, theme = "light",  menuItems}: Props) => {

  const [ collapsed, setCollapsed ] = useState(false);

  // Todo: Switch each menu to a loop with the internacionalization library key
  // the interface is already being accountable in Props interface.
  // Todo: replace icons below with new Icon component (and tweak style to fit)
  return (
      <Sider 
        collapsible 
        collapsed={collapsed} 
        onCollapse={collapsed => setCollapsed(collapsed)}
        className={className}
        data-testid="sidebar-component"
      >
        <div className="logo" />
          <Menu theme={theme} defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              Pipeline
            </Menu.Item>
            <Menu.Item key="2" icon={<CodepenOutlined />}>
              Content Library
            </Menu.Item>
            <Menu.Item key="3" icon={<CopyOutlined />}>
              Users
            </Menu.Item>
            <Menu.Item key="4" icon={<TeamOutlined />}>
              Clients
            </Menu.Item>
            <Menu.Item key="5" icon={<ApartmentOutlined />}>
              Integrations
            </Menu.Item>
            <Menu.Item key="6" icon={<SettingOutlined />}>
              Settings
            </Menu.Item>
            <Menu.Item key="7" icon={<ExperimentOutlined />}>
              Admin
            </Menu.Item>
          </Menu>
      </Sider>
  );
}

export default Sidebar;