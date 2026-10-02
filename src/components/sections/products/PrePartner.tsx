import HomePrePartner from "@/components/sections/home/PrePartner";

const logos = [{ src: "/assets/images/pre-partners/4.png", alt: "EVO" }];

const PrePartner = () => {
  return (
    <div className="bg-white">
      <HomePrePartner logos={logos} className="lg:px-0 md:mx-56 mx-6 py-6" />
    </div>
  );
};

export default PrePartner;
