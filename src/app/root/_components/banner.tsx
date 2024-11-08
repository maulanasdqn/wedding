import { Button } from "@/components/ui/button";
import type { FC, ReactElement } from "react";
import { motion } from "framer-motion";
import { CouplesName } from "./couple-name";
import { ImageBanner } from "./image-banner";
import { TheWeddingBar } from "./the-wedding-bar";
import { Greeting } from "./greeting";
import { Link } from "react-router-dom";

export const RootBanner: FC = (): ReactElement => {
  return (
    <section className="flex flex-col w-full py-12 bg-red-600">
      <div className="flex flex-col justify-center items-center gap-y-6">
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
