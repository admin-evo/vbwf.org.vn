import Banner from "@/components/sections/courses/Banner";
import CommonQuestions from "@/components/sections/courses/CommonQuestions";
import ShortInfo from "@/components/sections/courses/ShortInfo";

const Courses = () => {
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
