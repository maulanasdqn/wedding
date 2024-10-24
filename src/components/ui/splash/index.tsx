import type { FC, ReactElement } from "react";
import { motion } from "framer-motion";

export const SplashScreen: FC<{ loadTimeOut: number }> = ({ loadTimeOut }): ReactElement => {
  return (
    <motion.div
      transition={{
        duration: loadTimeOut,
        ease: "easeInOut",
      }}
      className="flex items-center fixed bottom-0 top-0 right-0 w-full h-screen justify-center bg-red-400">
      <motion.div
        animate={{
          scale: [1, 2, 1, 2, 1, 20, 40, 60, 80, 100],
          opacity: [1, 1, 1, 1, 1, 1, 1, 1, 1, 0]
        }}
        transition={{
          duration: loadTimeOut,
          ease: "easeInOut",
        }}
        className="text-4xl font-bold w-[100px] h-[100px] bg-[#ffff] rounded-full" />
    </motion.div>
  )
}
