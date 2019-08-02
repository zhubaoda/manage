import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import Demo from './pages/demo/demo';
import Demo2 from './pages/demo2/demo2';
import Demo3 from './pages/demo3/demo3';
import Nav from './components/nav/nav';
import Login from './pages/user/login/login';
import * as serviceWorker from './serviceWorker';
import { HashRouter, HashRouter as Router, Route, Switch } from 'react-router-dom';
import { createHashHistory } from 'history'; // 哈希路由
import PropTypes from "prop-types";
const history = createHashHistory();
const { Content, Footer } = Layout;


// 头组件
class Headers extends React.Component {
    state = {
        loginUser: 'XXX',
        loginFlat:false,
        router: PropTypes.object,
    } 

    render() {
        return (
            <div className="header">
                <span className="header_title">长龙财务报表</span>
                <span className="login_user">登录人：{this.state.loginUser}</span>
            </div>
        );
    }
    async componentWillMount () {
       if (!this.state.loginFlat) {     
//       history.push('/login');
       }
    }
}


// 子路由配置
ReactDOM.render(
    <HashRouter>
        <Switch>
            <Route exact path="/login" component={Login} />
            <Router>
                <Layout className="contain flex-cl">
                    <Headers />
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
            </Router>
        </Switch>
    </HashRouter>, document.getElementById('root'));
serviceWorker.unregister();
