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
    visible: { x: 0, opacity: 1, rotate: -10 },
  });

  const fontStyle =
    "font-comebackHome text-7xl md:text-8xl lg:text-9xl -rotate-6";

  return (
    <div className="flex flex-col justify-center items-center -space-y-6 w-full px-6 md:px-36 lg:px-40 xl:px-80">
      <motion.h1
        variants={getNameVariants("left")}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6 }}
        className={cn(fontStyle, "text-yellow-500")}
      >
        Maulana
      </motion.h1>
      <motion.h1
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6 }}
        className={cn(fontStyle, "text-yellow-500 text-2xl py-2")}
      >
        &
      </motion.h1>
      <motion.h1
        variants={getNameVariants("right")}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.7 }}
        className={cn(fontStyle, "place-self-end text-yellow-500")}
      >
        Fenny
      </motion.h1>
    </div>
  );
};
