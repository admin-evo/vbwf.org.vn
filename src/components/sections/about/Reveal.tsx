"use client";

import { motion, useReducedMotion } from "framer-motion";
import React from "react";

const tags = {
  div: motion.div,
  p: motion.p,
  li: motion.li,
  article: motion.article,
  figure: motion.figure,
  h1: motion.h1,
  h2: motion.h2,
  a: motion.a,
};

type Props = {
  as?: keyof typeof tags;
  className?: string;
  delay?: number;
  // Khoảng trượt theo trục dọc (px), âm để trượt xuống
  y?: number;
  x?: number;
  children?: React.ReactNode;
  href?: string;
} & Omit<React.HTMLAttributes<HTMLElement>, "children" | "className">;

// Hiện dần + trượt nhẹ khi phần tử cuộn vào màn hình
const Reveal = ({
  as = "div",
  className,
  delay = 0,
  y = 32,
  x = 0,
  children,
  ...rest
}: Props) => {
  const reduceMotion = useReducedMotion();
  const MotionTag = tags[as] as typeof motion.div;

  return (
    <MotionTag
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      {...(rest as React.ComponentProps<typeof motion.div>)}
    >
      {children}
    </MotionTag>
  );
};

export default Reveal;
