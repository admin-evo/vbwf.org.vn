import Link from "next/link";
import { ArrowDownIcon } from "../icons";
import React from "react";

export type NavItem = {
  leftIcon: React.ReactNode;
  label: string;
  path: string;
  subItems?: { label: string; path: string }[];
  options?: {
    rightIcon: {
      hide?: boolean;
    };
  };
};

export type Props = {
  data: NavItem[];
};

const NavDesktop = (props: Props) => {
  const { data } = props;
  return (
    <div className="flex flex-row h-full">
      {data.map((item, index) => (
        <Link key={index} href={item.path} className="h-full">
          <div className="flex flex-row items-center justify-center gap-1 px-[1.125rem] cursor-pointer hover:opacity-75 h-full">
            {item.leftIcon}
            <p className="text-sm uppercase">{item.label}</p>
            {!item.options?.rightIcon?.hide && <ArrowDownIcon />}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default NavDesktop;
