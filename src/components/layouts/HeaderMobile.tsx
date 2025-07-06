"use client";
import {
  ArrowDownIcon,
  BlogIcon,
  CloseIcon,
  ConferenceIcon,
  CourseIcon,
  EventIcon,
  HomeIcon,
  NavIcon,
  SearchIcon,
} from "@/icons";
import { pathNames } from "@/utils/pathNames";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import IconBox from "../IconBox";
import ImageBox from "../ImageBox";
import { NavItem } from "../Nav";

const navItems: NavItem[] = [
  { label: "Trang chủ", leftIcon: <HomeIcon />, path: pathNames.HOME_PAGE },
  { label: "Khoá học", leftIcon: <CourseIcon />, path: "/" },
  { label: "Tin tức", leftIcon: <BlogIcon />, path: "/" },
  { label: "Hội nghị", leftIcon: <ConferenceIcon />, path: "/" },
  { label: "Sự kiện", leftIcon: <EventIcon />, path: "/" },
];

const HeaderMobile = () => {
  const [showNav, setShowNav] = React.useState(false);
  const toggleNav = () => setShowNav((prev) => !prev);

  return (
    <>
      <div className="flex flex-row items-center px-3 justify-between h-24 relative overflow-hidden">
        <IconBox
          icon={<NavIcon />}
          className="cursor-pointer"
          onClick={toggleNav}
        />
        <Link href={pathNames.HOME_PAGE}>
          <ImageBox
            src="/assets/images/logo.png"
            alt="Logo VBWF"
            className="cursor-pointer size-[4.375rem]"
          />
        </Link>
        <IconBox icon={<SearchIcon />} className="cursor-pointer" />
      </div>
      <AnimatePresence>
        {showNav && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/40 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleNav}
            />
            <motion.div
              className="fixed top-0 right-0 h-full w-[75%] max-w-xs bg-white z-50 shadow-xl py-6 px-4"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">Menu</h2>
                <button onClick={toggleNav}>
                  <CloseIcon />
                </button>
              </div>

              <nav className="flex flex-col space-y-4">
                {navItems.map((item, index) => (
                  <Link key={index} href={item.path} className="h-full">
                    <div className="flex flex-row items-center justify-between cursor-pointer hover:opacity-75 h-full py-1">
                      <div className="flex flex-row gap-1">
                        {item.leftIcon}
                        <p className="text-sm uppercase">{item.label}</p>
                      </div>
                      <ArrowDownIcon />
                    </div>
                  </Link>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default HeaderMobile;
