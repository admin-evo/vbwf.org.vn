import AboutUs from "@/components/sections/home/AboutUs";
import Banner from "@/components/sections/home/Banner";
import Incoming from "@/components/sections/home/Incoming";
import NFC from "@/components/sections/home/NFC";
import PrePosts from "@/components/sections/home/PrePosts";
import PreLecturers from "@/components/sections/home/PreLecturers";
import PrePartner from "@/components/sections/home/PrePartner";

export const metadata = {
  title: "Xem thông tin liên đoàn cử tạ thể hình việt nam VBWF",
  description: "Liên đoàn cử tạ thể hình việt nam VBWF",
};

export default function Page() {
  return (
    <div className="flex flex-col">
      <Banner />
      <AboutUs />
      <Incoming />
      <NFC />
      <PrePosts />
      <PreLecturers />
      <PrePartner />
    </div>
  );
}
