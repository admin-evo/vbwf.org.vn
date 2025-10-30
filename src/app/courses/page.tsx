import Banner from "@/components/sections/courses/Banner";
import CommonQuestions from "@/components/sections/courses/CommonQuestions";
import ShortInfo from "@/components/sections/courses/ShortInfo";

const Courses = () => {
  return (
    <div>
      <div className="bg-gradient-to-b from-white to-[#FFECD5]">
        <Banner />
      </div>
      <div className="bg-gradient-to-b from-[#DDE8EE] to-[#FFECD5]">
        <ShortInfo />
      </div>
      <div className="bg-[#F2F2F7]">
        <CommonQuestions />
      </div>
    </div>
  );
};

export default Courses;
