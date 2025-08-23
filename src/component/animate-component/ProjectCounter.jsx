"use client";

import {
  animate,
  motion,
  useMotionValue,
  useMotionValueEvent,
} from "motion/react";
import { useEffect, useState } from "react";

const ProjectCounter = () => {
  const count = useMotionValue(0);
  const [displayCount, setDisplayCount] = useState(0);

  useEffect(() => {
    const controls = animate(count, 100, { duration: 1 });
    return () => controls.stop();
  }, []);

  // Listen to changes and round the value for display
  useMotionValueEvent(count, "change", (latest) => {
    setDisplayCount(Math.round(latest));
  });

  return (
    <motion.pre className="inline text-xl sm:text-2xl md:text-4xl lg:text-5xl font-extrabold text-violet-500 tracking-wide">
      {displayCount}
    </motion.pre>
  );
};

export default ProjectCounter;
