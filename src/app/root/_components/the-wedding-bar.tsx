import { cn } from "@/utils/clsx";
import { motion } from "framer-motion";
import type { FC, ReactElement } from "react";

export const TheWeddingBar: FC = (): ReactElement => {
  const fontStyle = "font-bold text-xl";

  return (
    <motion.div
      initial={{
        y: -100,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-center"
    >
      <div className="flex items-center space-x-1">
        <div
          className={cn(
            fontStyle,
            "bg-gray-500 text-white px-4 py-3 tracking-wide",
          )}
        >
          INTIMATE
        </div>
        <div className="flex flex-col items-center">
          <div className="w-full h-1 bg-gray-500 mb-2"></div>
          <div className={cn(fontStyle, "text-gray-500 tracking-wider")}>
            WEDDING
          </div>
          <div className="w-full h-1 bg-gray-500 mt-2"></div>
        </div>
      </div>
    </motion.div>
  );
};
