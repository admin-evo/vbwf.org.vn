import Banner from "@/components/sections/courses/Banner";
import CommonQuestions from "@/components/sections/courses/CommonQuestions";
import ShortInfo from "@/components/sections/courses/ShortInfo";
import { appConfig } from "@/configs/appConfig";
import { notFound } from "next/navigation";

const Courses = () => {
  if (appConfig.isWebsiteBlocked) {
    notFound();
  }
  return (
    <div className="bg-white">
      <div className="bg-gradient-to-b from-white to-[#FFECD5]">
        <Banner />
      </div>
      <div className="bg-gradient-to-b from-[#DDE8EE] to-[#FFECD5]">
        <ShortInfo />
      </div>
      <div>
        <CommonQuestions />
      </div>
    </div>
  );
};

export default Courses;
