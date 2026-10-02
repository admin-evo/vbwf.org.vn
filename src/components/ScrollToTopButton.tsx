"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300);

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Lên đầu trang"
      title="Lên đầu trang"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-6 right-5 z-50 w-12 h-12 flex items-center justify-center rounded-full bg-[#FF9F2C] hover:bg-[#FFB256] text-white cursor-pointer transition-all duration-300 ease-out hover:scale-110 active:scale-95 ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      style={{ boxShadow: "0 4px 14px rgba(0,0,0,0.18)" }}
    >
      <ArrowUp size={22} />
    </button>
  );
}
