"use client";
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
            <div
              className={`${
                !isOpen && "hidden"
              } pb-6 max-w-[68ch] flex flex-col gap-4 text-base text-[#222222]`}
            >
              {item.content}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
