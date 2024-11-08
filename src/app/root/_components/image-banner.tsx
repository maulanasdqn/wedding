import { motion } from "framer-motion";
import type { FC, ReactElement } from "react";

export const ImageBanner: FC = (): ReactElement => {
  return (
    <motion.div
      initial={{
        y: 100,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{ duration: 0.8 }}
      className="relative"
    >
      <img src="/animasi.png" alt="animasi" />
    </motion.div>
  );
};
