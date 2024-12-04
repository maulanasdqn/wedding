import { motion } from "framer-motion";
import type { FC, ReactElement } from "react";

export const Greeting: FC = (): ReactElement => {
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
      transition={{ duration: 0.9 }}
      className="text-center px-4"
    >
      <p className="text-sm text-white leading-5">
        Dengan undangan ini kami ingin mengabarkan dan membagikan kabar
        kebahagiaan kami.
      </p>
    </motion.div>
  );
};
