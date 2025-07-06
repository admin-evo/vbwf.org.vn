import AboutUs from "@/components/sections/home/AboutUs";
import Banner from "@/components/sections/home/Banner";
import Incoming from "@/components/sections/home/Incoming";

export const metadata = {
  title: "Xem thông tin liên đoàn cử tạ thể hình việt nam VBWF",
  description: "Liên đoàn cử tạ thể hình việt nam VBWF",
};

export default function Page() {
  return (
    <div className="flex flex-col md:gap-[3.75rem] gap-10">
      <Banner />
      <AboutUs />
      <Incoming />
    </div>
  );
}
