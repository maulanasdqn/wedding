import type { FC, ReactElement } from "react";
import { motion } from "framer-motion";

export const HomeBanner: FC = (): ReactElement => {
  return (
    <section className="flex flex-col py-20">
      <div className="flex flex-col gap-y-6">
        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="font-medium text-6xl max-w-3xl  text-gray-800"
        >
          Join us, as we begin our forever Journey
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          className="font-normal text-4xl max-w-xl text-gray-700"
        >
          Save the date and celebrate our special day!
        </motion.h1>
      </div>
    </section>
  );
};
