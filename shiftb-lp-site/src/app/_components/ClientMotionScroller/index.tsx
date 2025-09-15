"use client";

import { PropsWithChildren } from "react";
import { motion } from "motion/react";

export const ClientScrollFramerMotion = (props: {} & PropsWithChildren) => {
  const { children } = props;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        delay: 0.2,
        duration: 0.3,
        ease: "easeOut",
      }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};
