import './App.less';
import React from 'react';
import { Sidebar, Logo, Topbar } from './components';
import { Admin } from './pages';
import { Layout } from 'antd';
import logo from './images/proposify-logo.png';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const { Content } = Layout;

class App extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout>
        <Sidebar 
          className="dashboard-left-sidebar"
          theme="light"
        />
        <Layout className="site-layout">
          <Topbar theme="light">
            <Logo title="Proposify Logo" href="#" background={logo}/>
          </Topbar>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            <Router>
              <Switch>
                <Route path="/admin" component={Admin} />
              </Switch>
            </Router>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default App;
