import { cn } from "@/utils/clsx";
import { motion } from "framer-motion";
import type { FC, ReactElement } from "react";

export const ImageBanner: FC = (): ReactElement => {
  const decorationBaseStyle = "absolute rounded-full h-10 w-10 md:h-14 md:w-14";
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
      {/* Decoration */}
      <div className={cn(decorationBaseStyle, "bg-gray-400 -top-4 right-0")} />
      <div className={cn(decorationBaseStyle, "bg-gray-800 -right-5")} />
      <div className="bg-gray-700 h-56 w-52 md:h-72 md:w-64 lg:h-96 lg:w-72">
        image
      </div>
    </motion.div>
  );
};
