"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Menu, Layout, theme, Button, Flex, List, Tabs } from "antd";
const { Sider, Content } = Layout;

const HotelPageComponent = ({ searchParams, items, hotelData }) => {
  const router = useRouter();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const [hotelType, setHotelType] = useState([]);
  const [mainHotel, setMainHotel] = useState([]);
  const [activeMenu, setActiveMenu] = useState("Taichung");
  const [activeTab, setActiveTab] = useState("0");

  useEffect(() => {
    if (JSON.stringify(searchParams) !== "{}") {
      setHotelType(hotelData[searchParams.type]);
    } else {
      setHotelType(hotelData[activeMenu]);
      setActiveMenu(activeMenu);
    }
  }, []);

  useEffect(() => {
    if (JSON.stringify(searchParams) !== "{}") {
      setActiveMenu(searchParams.type);
    }
  }, [searchParams]);

  useEffect(() => {
    if (hotelType && hotelType.length > 0) {
      setMainHotel([hotelType[0]]);
    }
  }, [hotelType]);

  const handleMenu = ({ item, key, keyPath, domEvent }) => {
    setHotelType(hotelData[key]);
    setMainHotel([]);
    setActiveTab("0");
    router.push(`/hotel?type=${key}`);
  };

  const handleChangeHotel = (index) => {
    setMainHotel([hotelType[index]]);
    setActiveTab(String(index));
  };
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
          margin: "16px",
          minHeight: 280,
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
        }}
      >
        {hotelType && (
          <Tabs
            activeKey={activeTab}
            tabPosition={"top"}
            style={{
              minHeight: "calc(100vh - 144px)",
            }}
            onChange={handleChangeHotel}
            items={hotelType.map((item, i) => {
              const id = String(i);
              return {
                label: item.title,
                key: id,
                children: mainHotel.length > 0 && (
                  <List
                    itemLayout="vertical"
                    bordered
                    dataSource={mainHotel}
                    renderItem={(item) => (
                      <List.Item
                        style={{
                          display: "flex",
                          justifyContent: "flex-start",
                          gap: "16px",
                          padding: "16px",
                        }}
                      >
                        <iframe
                          src={`https://www.google.com/maps/embed?pb=${item.mapLink}`}
                          width="100%"
                          height="581"
                          style={{
                            background: "white",
                            borderRadius: "3px",
                            border: "1px solid rgb(219, 219, 219)",
                            boxShadow: "none",
                            display: "block",
                            padding: "0px",
                            maxWidth: "300px",
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
};

export default HotelPageComponent;
