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
      className="text-center px-4 md:px-36 lg:px-40 xl:px-80"
    >
      <p className="text-sm md:text-base lg:text-lg xl:text-xl leading-5">
        Kami dengan tulus mengundang Bapak/Ibu/Saudara/i untuk menjadi saksi
        kebahagiaan kami di hari pernikahan.
      </p>
    </motion.div>
  );
};
