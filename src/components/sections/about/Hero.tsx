"use client";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Reveal from "./Reveal";
import TornEdge from "./TornEdge";

const Hero = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative grid place-items-center min-h-[calc(100svh-6rem)] overflow-hidden bg-[#002843] text-white px-6 pt-24 pb-[calc(clamp(22px,3.4vw,52px)+6rem)]">
      {/* Ảnh nền thu nhỏ dần khi tải trang */}
      <motion.div
        className="absolute inset-0"
        initial={reduceMotion ? false : { scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src="/assets/images/about/giai-vo-dich-the-hinh-2025.jpg"
          alt="Ban tổ chức và các đại biểu trên sân khấu Giải Vô địch Thể hình quốc gia năm 2025 tại Thành phố Hồ Chí Minh"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[50%_62%]"
        />
      </motion.div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_44%,rgba(0,16,32,.5),rgba(0,16,32,0)_70%),linear-gradient(180deg,rgba(0,16,32,.62)_0%,rgba(0,16,32,.32)_40%,rgba(0,16,32,.72)_100%)]" />

      <div className="relative z-[3] flex flex-col items-center text-center max-w-[920px]">
        <Reveal
          as="h1"
          delay={0.2}
          className="md:text-5xl text-4xl font-bold leading-tight [text-shadow:0_2px_32px_rgba(0,16,32,.45)]"
        >
          Chung tay phát triển <br className="hidden md:block" />
          Cử tạ và Thể hình Việt Nam
        </Reveal>
        <Reveal as="p" delay={0.4} className="mt-4 text-lg text-white/95">
          Chuyên nghiệp – bền vững – hội nhập quốc tế
        </Reveal>
        <Reveal
          as="a"
          delay={0.6}
          href="#gioi-thieu"
          className="mt-8 bg-[#FF9F2C] hover:bg-[#FFB256] w-fit px-4 py-2 rounded-md text-white text-sm"
        >
          Tìm hiểu về Liên đoàn
        </Reveal>
      </div>

      <TornEdge direction="up" />
    </section>
  );
};

export default Hero;
