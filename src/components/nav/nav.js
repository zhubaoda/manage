import React from 'react';
import { NavLink } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';

const { SubMenu } = Menu;
const { Sider } = Layout;
export default class Nav extends React.Component {
    state = {
        MenuList: [{
            key: 'sub1',
            title: '财务报表',
            MenuItem: [{
                title: 'option1',
                path: '/'
            }, {
                title: 'option2',
                path: '/demo2'
            }, {
                title: 'option3',
                path: '/demo3'
            }]
        }]
    }
    render() {
        let SubMenuList = this.state.MenuList.map(d => {
            return (<SubMenu
                key={d.key}
                title={
                    <span>
                        <Icon type="user" />
                        {d.title}
                    </span>
                }
            >
                {d.MenuItem.map((item, k) => {
                    return (
                        <Menu.Item key={item.title}><NavLink to={item.path}>{item.title}</NavLink></Menu.Item>
                    )
                })}
            </SubMenu>
            )
        })
        return (
            <Sider width={200} style={{ background: '#fff' }}>
                <Menu
                    mode="inline"
                    defaultSelectedKeys={this.state.defaultSelectedKeys}
                    defaultOpenKeys={this.state.defaultOpenKeys}
                    style={{ height: '100%' }}
                >
                    {SubMenuList}

                </Menu>
            </Sider>
        );
    }
}