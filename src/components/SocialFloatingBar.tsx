/* eslint-disable @next/next/no-img-element */
"use client";

import { Phone } from "lucide-react";
import { useState } from "react";

export default function SocialFloatingBar() {
  const [hovered, setHovered] = useState<string | null>(null);

  const socials = [
    {
      id: "facebook",
      href: "https://www.facebook.com/vbwf.org.vn",
      label: "Facebook",
      bg: "bg-[#1877F2]",
      shadow: "shadow-blue-500/50",
      icon: <img src="/assets/svgs/facebook.svg" alt="Facebook" />,
    },
    {
      id: "zalo",
      href: "https://zalo.me/0342753753",
      label: "Zalo",
      bg: "bg-[#0068FF]",
      shadow: "shadow-sky-400/50",
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
      shadow: "shadow-green-400/50",
      icon: (
        <div className="size-6 rounded-full">
          <Phone />
        </div>
      ),
    },
  ];

  return (
    <>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        @keyframes pulse-ring {
          0% { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(1.6); opacity: 0; }
        }
        @keyframes slide-in {
          from { opacity: 0; transform: translateX(12px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .social-bar {
          animation: float 4s ease-in-out infinite;
        }
        .pulse-ring {
          animation: pulse-ring 1.8s ease-out infinite;
        }
        .tooltip-label {
          animation: slide-in 0.18s ease-out forwards;
        }
      `}</style>

      <section className="fixed bottom-6 right-5 z-50 flex flex-col items-end gap-4 social-bar">
        {socials.map(({ id, href, label, bg, shadow, icon }) => (
          <div key={id} className="relative flex items-center">
            {hovered === id && (
              <span className="tooltip-label absolute right-14 bg-gray-900 text-white text-xs font-medium px-2.5 py-1 rounded-lg whitespace-nowrap pointer-events-none select-none shadow-md">
                {label}
                <span className="absolute right-[-5px] top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-900" />
              </span>
            )}

            <span
              className={`pulse-ring absolute inset-0 rounded-full ${bg} pointer-events-none`}
              style={{ animationDelay: id === "zalo" ? "0.9s" : "0s" }}
            />

            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHovered(id)}
              onMouseLeave={() => setHovered(null)}
              className={`
                relative w-12 h-12 flex items-center justify-center rounded-full
                ${bg} text-white
                shadow-lg ${shadow}
                transition-all duration-200 ease-out
                hover:scale-110 hover:shadow-xl active:scale-95
              `}
              style={{
                boxShadow:
                  hovered === id
                    ? "0 8px 24px rgba(0,0,0,0.25)"
                    : "0 4px 14px rgba(0,0,0,0.18)",
              }}
            >
              {icon}
            </a>
          </div>
        ))}
      </section>
    </>
  );
}
