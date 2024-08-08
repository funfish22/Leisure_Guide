"use client";
import React from "react";

import { Breadcrumb, Layout, theme } from "antd";
const { Content } = Layout;

const Travel = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Content
        style={{
          padding: 24,
          margin: "16px 0",
          minHeight: 280,
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
        }}
      >
        旅遊內容
      </Content>
    </Layout>
  );
};
export default Travel;
