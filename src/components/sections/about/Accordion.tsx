"use client";
import { motion, useReducedMotion } from "framer-motion";
import React from "react";

export type AccordionItem = {
  title: React.ReactNode;
  content: React.ReactNode;
};

type Props = {
  data: AccordionItem[];
  className?: string;
};

const Accordion = ({ data, className = "" }: Props) => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);
  const reduceMotion = useReducedMotion();

  return (
    <div className={`border-t border-[#D1D1D6] ${className}`}>
      {data.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className="border-b border-[#D1D1D6]">
            <button
              type="button"
              aria-expanded={isOpen}
              className="w-full flex flex-row items-center justify-between gap-6 py-6 text-left text-lg font-bold text-[#222222] hover:text-[#FF9F2C] transition-colors cursor-pointer"
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <span>{item.title}</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`flex-none transition-transform duration-300 ${
                  isOpen ? "rotate-45" : ""
                }`}
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8 0H6V6H0V8H6V14H8V8H14V6H8V0Z"
                  fill="#FF9F2C"
                />
              </svg>
            </button>
            {/* Luôn render nội dung (cho SEO), chỉ animate chiều cao khi mở/đóng */}
            <motion.div
              initial={false}
              animate={
                isOpen
                  ? { height: "auto", opacity: 1 }
                  : { height: 0, opacity: 0 }
              }
              transition={{
                duration: reduceMotion ? 0 : 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="overflow-hidden"
              aria-hidden={!isOpen}
            >
              <div className="pb-6 max-w-[68ch] flex flex-col gap-4 text-base text-[#222222]">
                {item.content}
              </div>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
