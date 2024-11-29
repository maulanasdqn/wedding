import type { FC, ReactElement } from "react";
import { motion } from "framer-motion";

export const SplashScreen: FC<{ loadTimeOut: number }> = ({
  loadTimeOut,
}): ReactElement => {
  return (
    <motion.div
      transition={{
        duration: loadTimeOut,
        ease: "easeInOut",
      }}
      className="flex items-center fixed bottom-0 top-0 right-0 w-full h-screen justify-center bg-red-600"
    >
      <motion.div
        animate={{
          scale: [1, 2, 1, 2, 1, 20, 40, 60, 80, 100],
          opacity: [1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        }}
        transition={{
          duration: loadTimeOut,
          ease: "easeInOut",
        }}
        className="text-4xl font-bold w-[100px] h-[100px] bg-[#ffff] rounded-full"
      />
    </motion.div>
  );
};

export const InvitationFormSkeleton: FC = (): ReactElement => {
  return (
    <section className="flex flex-col bg-gray-50 p-4 rounded-lg w-full animate-pulse">
      <div className="flex flex-col gap-y-4">
        <div className="flex flex-col gap-y-1">
          <div className="h-5 w-1/4 bg-gray-300 rounded-md"></div>
          <div className="h-10 w-full bg-gray-300 rounded-md"></div>
        </div>
        <div className="flex flex-col gap-y-1">
          <div className="h-5 w-1/4 bg-gray-300 rounded-md"></div>
          <div className="h-10 w-full bg-gray-300 rounded-md"></div>
        </div>
        <div className="flex flex-col gap-y-1">
          <div className="h-5 w-1/4 bg-gray-300 rounded-md"></div>
          <div className="h-20 w-full bg-gray-300 rounded-md"></div>
        </div>
        <div className="flex flex-col gap-y-1">
          <div className="h-5 w-1/4 bg-gray-300 rounded-md"></div>
          <div className="h-10 w-full bg-gray-300 rounded-md"></div>
        </div>
        <div className="h-10 w-full bg-gray-300 rounded-md"></div>
      </div>
      <div className="mt-6 p-4 border border-gray-300 rounded-md">
        <div className="h-5 w-1/3 bg-gray-300 rounded-md mb-2"></div>
        <div className="h-5 w-2/3 bg-gray-300 rounded-md mb-2"></div>
        <div className="h-5 w-1/2 bg-gray-300 rounded-md"></div>
      </div>
    </section>
  );
};
