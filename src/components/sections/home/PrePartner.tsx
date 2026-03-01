"use client";
/* eslint-disable @next/next/no-img-element */
import React, { useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const logos = [
  { src: "/assets/images/pre-partners/1.png", alt: "01" },
  { src: "/assets/images/pre-partners/2.png", alt: "02" },
  { src: "/assets/images/pre-partners/3.png", alt: "03" },
  { src: "/assets/images/pre-partners/4.png", alt: "04" },
  { src: "/assets/images/pre-partners/5.png", alt: "05" },
  { src: "/assets/images/pre-partners/6.png", alt: "06" },
  { src: "/assets/images/pre-partners/7.png", alt: "07" },
  { src: "/assets/images/pre-partners/8.png", alt: "08" },
  { src: "/assets/images/pre-partners/9.png", alt: "09" },
];

const PrePartner = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  // Check trạng thái scroll
  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;

    const { scrollLeft, scrollWidth, clientWidth } = el;

    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
  };

  // Easing function (trượt mềm)
  const smoothScroll = (
    element: HTMLElement,
    target: number,
    duration: number,
  ) => {
    const start = element.scrollLeft;
    const distance = target - start;
    let startTime: number | null = null;

    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    const animation = (currentTime: number) => {
      if (!startTime) startTime = currentTime;

      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);

      element.scrollLeft = start + distance * easeOutCubic(progress);

      if (progress < 1) {
        requestAnimationFrame(animation);
      } else {
        checkScroll();
      }
    };

    requestAnimationFrame(animation);
  };

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;

    const scrollAmount = el.clientWidth * 0.8; // scroll 80% width
    const target =
      direction === "left"
        ? el.scrollLeft - scrollAmount
        : el.scrollLeft + scrollAmount;

    smoothScroll(el, target, 600); // 600ms mượt
  };

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    if (!el) return;

    el.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll);

    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  return (
    <div className="lg:px-0 md:mx-56 mx-6 mb-11 md:mt-20 mt-12">
      <h3 className="text-[#222222] font-bold text-[1.75rem] text-center mb-6">
        Đối tác liên kết
      </h3>

      <div className="relative">
        <button
          onClick={() => scroll("left")}
          disabled={!canScrollLeft}
          className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 
          bg-white shadow-md rounded-full p-2 transition
          ${canScrollLeft ? "opacity-100" : "opacity-40 cursor-not-allowed"}`}
        >
          <ChevronLeft size={24} />
        </button>

        <div
          ref={scrollRef}
          className="flex gap-10 overflow-x-hidden no-scrollbar"
        >
          {logos.map((item, index) => (
            <img
              key={index}
              src={item.src}
              alt={item.alt}
              className="sm:w-[18.75rem] w-[12rem] h-auto flex-shrink-0"
            />
          ))}
        </div>

        <button
          onClick={() => scroll("right")}
          disabled={!canScrollRight}
          className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 
          bg-white shadow-md rounded-full p-2 transition
          ${canScrollRight ? "opacity-100" : "opacity-40 cursor-not-allowed"}`}
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default PrePartner;
