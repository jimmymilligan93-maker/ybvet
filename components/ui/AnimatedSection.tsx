"use client";
import { motion, useReducedMotion } from "framer-motion";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
}

export default function AnimatedSection({
  children,
  className = "",
  style,
  delay = 0,
  direction = "up",
}: AnimatedSectionProps) {
  const shouldReduce = useReducedMotion();

  const initial =
    shouldReduce
      ? { opacity: 0 }
      : {
          opacity: 0,
          y: direction === "up" ? 32 : 0,
          x: direction === "left" ? -32 : direction === "right" ? 32 : 0,
        };

  return (
    <motion.div
      className={className}
      style={style}
      initial={initial}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}

/* Staggered container — wraps children that animate in sequence */
export function StaggerContainer({
  children,
  className = "",
  stagger = 0.1,
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
}) {
  const shouldReduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: shouldReduce ? 0 : stagger } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const shouldReduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      variants={{
        hidden:  { opacity: 0, y: shouldReduce ? 0 : 28 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
      }}
    >
      {children}
    </motion.div>
  );
}
