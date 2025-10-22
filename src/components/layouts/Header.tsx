"use client";

import { SearchIcon } from "@/icons";
import { pathNames } from "@/utils/pathNames";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import IconBox from "../IconBox";
import ImageBox from "../ImageBox";
import Nav, { NavItem } from "../Nav";

const navItems: NavItem[] = [
  {
    label: "Trang chủ",
    path: pathNames.HOME_PAGE,
  },
  { label: "Khoá học", path: pathNames.COURSE_PAGE },
  { label: "Tin tức", path: pathNames.POSTS_PAGE },
  { label: "Sản phẩm", path: pathNames.PRODUCTS_PAGE },
];

const Header = () => {
  const controls = useAnimation();
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollY && currentScrollY > 100) {
        // scroll down
        controls.start({ y: "-100%", transition: { duration: 0.3 } });
      } else {
        // scroll up
        controls.start({ y: "0%", transition: { duration: 0.3 } });
      }

      setPrevScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollY, controls]);

  return (
    <motion.div
      animate={controls}
      initial={{ y: 0 }}
      className="flex flex-row items-center justify-around h-24 fixed z-50 left-0 right-0 top-0 bg-white shadow-md"
    >
      <Link href={pathNames.HOME_PAGE}>
        <ImageBox
          src="/assets/images/logo.png"
          alt="Logo VBWF"
          className="cursor-pointer size-[4.375rem]"
        />
      </Link>
      <Nav data={navItems} />
      <IconBox icon={<SearchIcon />} className="cursor-pointer" />
    </motion.div>
  );
};

export default Header;
