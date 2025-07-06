import {
  BlogIcon,
  ConferenceIcon,
  CourseIcon,
  EventIcon,
  HomeIcon,
  SearchIcon,
} from "@/icons";
import { pathNames } from "@/utils/pathNames";
import Link from "next/link";
import IconBox from "../IconBox";
import ImageBox from "../ImageBox";
import Nav, { NavItem } from "../Nav";

const navItems: NavItem[] = [
  { label: "Trang chủ", leftIcon: <HomeIcon />, path: pathNames.HOME_PAGE },
  { label: "Khoá học", leftIcon: <CourseIcon />, path: "/" },
  { label: "Tin tức", leftIcon: <BlogIcon />, path: "/" },
  { label: "Hội nghị", leftIcon: <ConferenceIcon />, path: "/" },
  { label: "Sự kiện", leftIcon: <EventIcon />, path: "/" },
];

const Header = () => {
  return (
    <div className="flex flex-row items-center justify-around !h-24 relative">
      <Link href={pathNames.HOME_PAGE}>
        <ImageBox
          src="/assets/images/logo.png"
          alt="Logo VBWF"
          className="cursor-pointer size-[4.375rem]"
        />
      </Link>
      <Nav data={navItems} />
      <IconBox icon={<SearchIcon />} className="cursor-pointer" />
    </div>
  );
};

export default Header;
