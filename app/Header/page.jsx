"use client";

import { useState, useEffect } from "react";

import {
  useCycle,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";

const itemVariants = {
  closed: {
    opacity: 0,
  },
  open: { opacity: 1 },
};

const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: 1,
    },
  },
};

const ButtonVariant = {
  closed: {
    height: "4rem",
    transition: { duration: 0.1 },
  },

  open: {
    height: "25rem",
    transition: { when: "beforeChildren", duration: 0.1 },
  },
};

function Headpage() {
  const [open, cycleOpen] = useCycle(false, true);
  const [isOpen, setIsOpen] = useState(false);
  const [checked, setChecked] = useState(false);

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0); // going to set this value on mouse move

  // rotate the tooltip
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );

  // translate the tooltip
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 20]),
    springConfig
  );

  const handleMouseMove = (event) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth); // set the x value, which is then used in transform and rotate
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
    cycleOpen(!open);
  };

  return (
    <>
      <div className="flex justify-between md:max-w-5xl max-w-lg mx-auto lg:mt-16 mt-11 md:px-8 px-9">
        <div className="flex gap-x-3 items-center">
          {/* <Switch checked={checked} setChecked={setChecked} /> */}
        </div>
      </div>
    </>
  );
}

export default Headpage;  