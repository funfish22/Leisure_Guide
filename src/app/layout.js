import { AntdRegistry } from "@ant-design/nextjs-registry";
import "antd/dist/reset.css";
import LayoutComponents from "@/components/layoutComponent";

const menuData = [
  { title: "首頁", link: "" },
  { title: "旅遊", link: "travel" },
  { title: "美食", link: "food" },
  { title: "飯店", link: "hotel" },
];

const auth = false;

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <AntdRegistry>
          <LayoutComponents auth={auth} menuData={menuData}>
            {children}
          </LayoutComponents>
        </AntdRegistry>
      </body>
    </html>
  );
};

export default RootLayout;
