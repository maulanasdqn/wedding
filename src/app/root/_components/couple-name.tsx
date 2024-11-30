import { cn } from "@/utils/clsx";
import { motion, Variants } from "framer-motion";
import type { FC, ReactElement } from "react";

export const CouplesName: FC = (): ReactElement => {
  const getNameVariants = (from: "left" | "right"): Variants => ({
    hidden: {
      x: from == "left" ? -100 : 100,
      opacity: 0,
      rotate: -10,
    },
    visible: { x: 0, opacity: 1, rotate: 0 },
  });
  const fontStyle = "font-comebackHome text-5xl ";

  return (
    <div className="flex flex-col justify-center items-center py-4 w-full px-2">
      <motion.h1
        variants={getNameVariants("left")}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6 }}
        className={cn(fontStyle, "text-yellow-500")}
      >
        Maulana & Fenny
      </motion.h1>
    </div>
  );
};
