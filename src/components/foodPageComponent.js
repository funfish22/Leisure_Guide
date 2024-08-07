'use client'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'
import { Menu, Layout, theme, Button, Flex, List, Tabs } from 'antd';
const { Sider, Content } = Layout;

const FoodPageComponent = ({searchParams, items, foodData}) => {
  const router = useRouter();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const [foodType, setFoodType] = useState([]);
  const [mainFood, setMainFood] = useState([]);
  const [activeMenu, setActiveMenu] = useState()

  useEffect(() => {
    if(JSON.stringify(searchParams) !== '{}') {
      setFoodType(foodData[searchParams.type])
    } else {
      setFoodType(foodData[items[0].key])
      setActiveMenu(items[0].key)
    }
  }, [])

  useEffect(() => {
    if(JSON.stringify(searchParams) !== '{}') {
      setActiveMenu(searchParams.type)
    }
  }, [searchParams])

  useEffect(() => {
    if (foodType && foodType.length > 0) {
      setMainFood([foodType[0]])
    }
  }, [foodType])

  const handleMenu = ({ item, key, keyPath, domEvent }) => {
    setFoodType(foodData[key])
    setMainFood([])
    router.push(`/food?type=${key}`)
  }

  const handleChangeFood = (index) => {
    setMainFood([foodType[index]])
  }

  return (
    <Layout>
      <Sider
        width={200}
        style={{
          background: colorBgContainer,
        }}
      >
        <Menu
          selectedKeys={[activeMenu]}
          mode="inline"
          items={items}
          onClick={handleMenu}
        />
      </Sider>
      <Content
        style={{
          padding: 24,
          margin: '16px',
          minHeight: 280,
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
        }}
      >
        {foodType && (
          <Tabs
          defaultActiveKey="1"
          tabPosition={'top'}
          style={{
            minHeight: 'calc(100vh - 144px)',
          }}
          onChange={handleChangeFood}
          items={foodType.map((item, i) => {
            const id = String(i);
            return {
              label: item.title,
              key: id,
              children: mainFood.length > 0 && (
                <List
                    itemLayout="vertical"
                    bordered
                    dataSource={mainFood}
                    renderItem={(item) => (
                      <List.Item style={{ display: 'flex', justifyContent: 'flex-start', gap: '16px', padding: '16px' }}>
                        {item.igLink !== '' && <iframe
                          className="instagram-media instagram-media-rendered"
                          id="instagram-embed-0"
                          src={`${item.igLink}/embed`}
                          frameBorder="0"
                          height="581"
                          width="100%"
                          data-instgrm-payload-id="instagram-media-payload-0"
                          scrolling="no"
                          style={{
                            background: 'white',
                            borderRadius: '3px',
                            border: '1px solid rgb(219, 219, 219)',
                            boxShadow: 'none',
                            display: 'block',
                            padding: '0px',
                            maxWidth: '300px'
                          }}
                        ></iframe>}
                        <iframe
                          src={`https://www.google.com/maps/embed?pb=${item.mapLink}`}
                          width="100%"
                          height="581"
                          style={{
                            background: 'white',
                            borderRadius: '3px',
                            border: '1px solid rgb(219, 219, 219)',
                            boxShadow: 'none',
                            display: 'block',
                            padding: '0px',
                            maxWidth: '300px'
                          }}
                          allowFullScreen=""
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                        />
                      </List.Item>
                    )}
                  />
              ),
            };
          })}
        />
        )}
      </Content>
    </Layout>
  );
}

export default FoodPageComponent;