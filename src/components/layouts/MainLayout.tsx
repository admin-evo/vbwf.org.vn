import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import HeaderMobile from "./HeaderMobile";
import QueryProvider from "@/providers/QueryProvider";

type Props = {
  children: React.ReactNode;
};

const MainLayout = (props: Props) => {
  const { children } = props;
  return (
    <QueryProvider>
      <div className="bg-[#f2f2f7]">
        <div className="hidden lg:block">
          <Header />
        </div>
        <div className="block lg:hidden">
          <HeaderMobile />
        </div>
        <main className="mt-24">{children}</main>
        <Footer />
      </div>
    </QueryProvider>
  );
};

export default MainLayout;
