'use client'
import React, { useEffect, useState } from 'react';
import { Layout, Menu } from 'antd';
import { useRouter, usePathname } from 'next/navigation';

const { Header } = Layout;

const LayoutComponents = ({auth, menuData, children}) => {
    const router = useRouter()
    const pathname = usePathname()

    const [activeMenu, setActiveMenu] = useState();
    const [menuItem, setMenuData] = useState([]);

    useEffect(() => {
        setActiveMenu(pathname.replace('/', ''));
    }, [pathname]);

    useEffect(() => {
        console.log('auth', auth);
        const updatedMenuData = [...menuData];
        if (auth) {
        updatedMenuData.push({ title: 'CMS', link: 'cms' });
        }
        const menuItem = updatedMenuData.map((item) => ({
        key: item.link,
        label: item.title,
        }));
        setMenuData(menuItem);
    }, [auth]);

    const handleMenu = ({ key }) => {
        router.push(`/${key}`);
    };

    return (
        <Layout>
            <Header style={{ display: 'flex', alignItems: 'center' }}>
              <Menu
                theme="dark"
                mode="horizontal"
                selectedKeys={[activeMenu]}
                items={menuItem}
                onClick={handleMenu}
                style={{ flex: 1, minWidth: 0 }}
              />
            </Header>
                {children}
          </Layout>
    )
}

export default LayoutComponents;