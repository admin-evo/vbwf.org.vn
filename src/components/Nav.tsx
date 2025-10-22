"use client";
import Link from "next/link";
import { ArrowDownIcon } from "../icons";
import React from "react";
import { usePathname } from "next/navigation";

export type NavItem = {
  leftIcon?: React.ReactNode;
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
  const pathname = usePathname();

  return (
    <div className="flex flex-row h-full">
      {data.map((item, index) => (
        <Link key={index} href={item.path} className="h-full">
          <div className="flex flex-row items-center justify-center gap-1 px-[1.125rem] cursor-pointer hover:opacity-75 h-full">
            <div
              className={`flex items-center justify-between gap-1 py-2 px-4 ${
                pathname === item?.path && "bg-[#F1F5F9]"
              }`}
            >
              {item.leftIcon}
              <p className="text-sm uppercase">{item.label}</p>
              {!item.options?.rightIcon?.hide && (
                <ArrowDownIcon
                  className={`transition-transform duration-300 ${
                    pathname === item?.path ? "rotate-180" : "rotate-0"
                  }`}
                />
              )}{" "}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default NavDesktop;
