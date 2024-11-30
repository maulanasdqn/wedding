import type { FC, ReactElement } from "react";
import { Button } from "@/app/_components/ui/button";
import { motion } from "framer-motion";
import { CouplesName } from "./couple-name";
import { ImageBanner } from "./image-banner";
import { TheWeddingBar } from "./the-wedding-bar";
import { Greeting } from "./greeting";
import { Link } from "react-router-dom";

export const RootBanner: FC = (): ReactElement => {
  return (
    <section className="flex flex-col w-full h-screen py-12 bg-[url('/bg.svg')] bg-cover bg-center">
      <div className="flex flex-col justify-center items-center">
        <TheWeddingBar />
        <CouplesName />
        <ImageBanner />
        <Greeting />

        <motion.div
          initial={{
            y: 100,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{ duration: 1 }}
        >
          <Link to="/invitation">
            <Button>Buka Undangan</Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
