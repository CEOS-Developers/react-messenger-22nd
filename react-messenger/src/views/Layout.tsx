import { Outlet } from "react-router-dom";
import Container from "../components/layout/Container";
import Content from "../components/layout/Content";
import Navbar from "../components/layout/Navbar";
import StatusBar from "../assets/statusBar/StatusBar.svg?react";

const Layout = () => {
  return (
    <Container>
      <StatusBar className="absolute inset-x-0 w-full h-[43px] z-10 pointer-events-none" />
      <Content>
        <div className="pt-[44px] pb-[84px]">
          <Outlet />
        </div>
      </Content>
      <div className="absolute bottom-0 left-0 right-0">
        <Navbar />
      </div>
    </Container>
  );
};

export default Layout;
