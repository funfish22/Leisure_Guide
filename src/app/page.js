"use client";
import React from "react";

import { Breadcrumb, Layout, theme } from "antd";
const { Content } = Layout;

const App = () => {
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
        首頁內容
      </Content>
    </Layout>
  );
};
export default App;
