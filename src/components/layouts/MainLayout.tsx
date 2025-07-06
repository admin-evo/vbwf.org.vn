import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import HeaderMobile from "./HeaderMobile";

type Props = {
  children: React.ReactNode;
};

const MainLayout = (props: Props) => {
  const { children } = props;
  return (
    <div>
      <div className="hidden md:block">
        <Header />
      </div>
      <div className="block md:hidden">
        <HeaderMobile />
      </div>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
