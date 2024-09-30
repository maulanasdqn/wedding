import type { FC, ReactElement } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const Navbar: FC = (): ReactElement => {
  return (
    <nav className="flex items-center justify-between w-full h-16 bg-primary">
      <motion.div
        initial={{
          y: -100,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex items-center"
      >
        <span className="text-black text-2xl font-bold">M & F</span>
      </motion.div>
      <div className="md:flex hidden items-center font-normal cursor-pointer">
        <motion.span
          initial={{
            y: -100,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="hover:font-medium"
        >
          Home
        </motion.span>
        <motion.span
          initial={{
            y: -100,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mx-4"
        >
          |
        </motion.span>
        <motion.span
          initial={{
            y: -100,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="hover:font-medium"
        >
          Location
        </motion.span>
        <motion.span
          initial={{
            y: -100,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mx-4"
        >
          |
        </motion.span>
        <motion.span
          initial={{
            y: -100,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="hover:font-medium"
        >
          Detail
        </motion.span>
      </div>
      <motion.div
        initial={{
          y: -100,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="flex items-center"
      >
        <Button>Greeting</Button>
      </motion.div>
    </nav>
  );
};
