import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import Demo from './pages/demo/demo';
import Demo2 from './pages/demo2/demo2';
import Demo3 from './pages/demo3/demo3';
import Nav from './components/nav/nav';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
const { Header, Content, Footer } = Layout;

ReactDOM.render(<Router>
    <Layout className="contain flex-cl">
        <Header className="header">
            <div className="header_title">长龙财务报表</div>
        </Header>
        <Content style={{ padding: '0', flex: 1 }}>
            <Layout style={{ padding: '24px 0', height: '100%', background: '#fff' }}>
                <Nav />
                <Content style={{ padding: '0 24px', minHeight: 280 }}>
                    <Route exact path="/" component={Demo} />
                    <Route path="/Demo2" component={Demo2} />
                    <Route path="/Demo3" component={Demo3} />
                </Content>
            </Layout>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Loongair ©2019 Created by E-commerce Center</Footer>
    </Layout>
</Router>, document.getElementById('root'));
serviceWorker.unregister();
