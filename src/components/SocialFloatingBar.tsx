/* eslint-disable @next/next/no-img-element */
"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { MessageCircle, Phone, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const socials = [
  {
    id: "facebook",
    href: "https://www.facebook.com/vbwf.org.vn",
    label: "Facebook",
    bg: "bg-[#1877F2]",
    icon: <img src="/assets/svgs/facebook.svg" alt="Facebook" />,
  },
  {
    id: "zalo",
    href: "https://zalo.me/0342753753",
    label: "Zalo",
    bg: "bg-[#0068FF]",
    icon: (
      <img
        src="https://page.widget.zalo.me/static/images/2.0/Logo.svg"
        alt="Zalo"
      />
    ),
  },
  {
    id: "phone",
    href: "tel:0971090094",
    label: "Gọi ngay",
    bg: "bg-green-500",
    // Render svg trực tiếp (block) để luôn nằm giữa nút, tránh lệch baseline
    icon: <Phone className="block size-6" />,
  },
];

export default function SocialFloatingBar() {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  // Đóng khi bấm ra ngoài hoặc nhấn Esc
  useEffect(() => {
    if (!open) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <>
      <style>{`
        @keyframes pulse-ring {
          0% { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(1.6); opacity: 0; }
        }
        .pulse-ring {
          animation: pulse-ring 1.8s ease-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .pulse-ring { animation: none; }
        }
      `}</style>

      <section
        ref={containerRef}
        className="fixed bottom-6 left-5 z-50 flex flex-col items-start gap-3"
      >
        <AnimatePresence>
          {open && (
            <motion.ul
              id="social-fab-menu"
              className="flex flex-col items-start gap-3"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                visible: {
                  transition: { staggerChildren: 0.05, staggerDirection: -1 },
                },
                hidden: {
                  transition: { staggerChildren: 0.03 },
                },
              }}
            >
              {socials.map(({ id, href, label, bg, icon }) => (
                <motion.li
                  key={id}
                  variants={{
                    hidden: reduceMotion
                      ? { opacity: 0 }
                      : { opacity: 0, y: 16, scale: 0.6 },
                    visible: { opacity: 1, y: 0, scale: 1 },
                  }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                    className="group flex items-center gap-3"
                  >
                    <span
                      className={`w-12 h-12 flex items-center justify-center rounded-full ${bg} text-white transition-transform duration-200 ease-out group-hover:scale-110 group-active:scale-95`}
                      style={{ boxShadow: "0 4px 14px rgba(0,0,0,0.18)" }}
                    >
                      {icon}
                    </span>
                    <span className="bg-gray-900 text-white text-xs font-medium px-2.5 py-1 rounded-lg whitespace-nowrap shadow-md">
                      {label}
                    </span>
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>

        <div className="relative">
          {!open && (
            <span className="pulse-ring absolute inset-0 rounded-full bg-[#FF9F2C] pointer-events-none" />
          )}
          <button
            type="button"
            aria-label={open ? "Đóng liên hệ" : "Liên hệ"}
            aria-expanded={open}
            aria-controls="social-fab-menu"
            onClick={() => setOpen((prev) => !prev)}
            className="relative w-14 h-14 flex items-center justify-center rounded-full bg-[#FF9F2C] hover:bg-[#FFB256] text-white cursor-pointer transition-transform duration-200 ease-out hover:scale-105 active:scale-95"
            style={{ boxShadow: "0 6px 18px rgba(0,0,0,0.22)" }}
          >
            <motion.span
              key={open ? "close" : "open"}
              className="block"
              initial={reduceMotion ? false : { rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              {open ? (
                <X className="block size-6" />
              ) : (
                <MessageCircle className="block size-6" />
              )}
            </motion.span>
          </button>
        </div>
      </section>
    </>
  );
}
