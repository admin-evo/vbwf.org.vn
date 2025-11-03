"use client";
import { ArrowDownIcon, CloseIcon, NavIcon, SearchIcon } from "@/icons";
import { pathNames } from "@/utils/pathNames";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import IconBox from "../IconBox";
import ImageBox from "../ImageBox";
import { NavItem } from "../Nav";
import { usePathname } from "next/navigation";

const navItems: NavItem[] = [
  {
    label: "Trang chủ",
    path: pathNames.HOME_PAGE,
  },
  { label: "Khoá học", path: pathNames.COURSE_PAGE },
  { label: "Tin tức", path: pathNames.POSTS_PAGE },
  { label: "Sản phẩm", path: pathNames.PRODUCTS_PAGE },
];

const HeaderMobile = () => {
  const [showNav, setShowNav] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const controls = useAnimation();
  const pathname = usePathname();

  const toggleNav = () => setShowNav((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollY && currentScrollY > 80) {
        controls.start({ y: "-100%", transition: { duration: 0.3 } });
      } else {
        controls.start({ y: "0%", transition: { duration: 0.3 } });
      }

      setPrevScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollY, controls]);

  return (
    <>
      <motion.div
        animate={controls}
        initial={{ y: 0 }}
        className="flex flex-row items-center px-4 justify-between h-24 fixed top-0 left-0 right-0 z-50 bg-white shadow-md"
      >
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
      </motion.div>

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
                {/* <h2 className="text-xl font-bold">Menu</h2> */}
                <button onClick={toggleNav}>
                  <CloseIcon />
                </button>
              </div>

              <nav className="flex flex-col space-y-4 ">
                {navItems.map((item, index) => (
                  <Link key={index} href={item.path} className={`h-full`}>
                    <div className="flex flex-row items-center justify-between cursor-pointer hover:opacity-75 h-full py-1">
                      <div className="flex flex-row gap-1">
                        {item.leftIcon}
                        <p
                          className={`text-sm uppercase ${
                            pathname === item.path && "font-bold"
                          }`}
                        >
                          {item.label}
                        </p>
                      </div>
                      <ArrowDownIcon
                        className={`transition-transform duration-300 ${
                          pathname === item?.path ? "rotate-180" : "rotate-0"
                        }`}
                      />
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
