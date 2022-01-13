import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import main from "../../public/images/head_main.png";
import orange from "../../public/images/head_orange.png";
import pink from "../../public/images/head_pink.png";

const ITEMS = [
  {
    id: "orange",
    src: orange,
    styleProps: {
      "offset-x": -24,
      "offset-y": -12,
      "translate-x": 10,
      "translate-y": 10,
      "offset-z": -5,
    },
    shadows: [-5],
  },
  {
    id: "pink",
    src: pink,
    styleProps: {
      "offset-x": 24,
      "offset-y": 12,
      "translate-x": 5,
      "translate-y": -15,
      "offset-z": 0,
    },
    shadows: [-5],
  },
  {
    id: "main",
    src: main,
    styleProps: {
      "offset-x": 0,
      "offset-y": 0,
      "translate-x": 10,
      "translate-y": 2,
      "offset-z": 5,
    },
    shadows: [-5, 0],
  },
];

const mapRange = (inputLower, inputUpper, outputLower, outputUpper) => {
  const INPUT_RANGE = inputUpper - inputLower;
  const OUTPUT_RANGE = outputUpper - outputLower;
  return (value) =>
    outputLower + (((value - inputLower) / INPUT_RANGE) * OUTPUT_RANGE || 0);
};

const BobbleHead = ({ bounds = 100, proximity = 200 }) => {
  const containerRef = useRef(null);
  const [imagesLoadedCount, setImagesLoadedCount] = useState(0);
  console.log(imagesLoadedCount);

  useEffect(() => {
    const UPDATE = ({ x, y }) => {
      // Create coefficient ranges
      const containerBounds = containerRef.current.getBoundingClientRect();
      const centerX = containerBounds.left + containerBounds.width / 2;
      const centerY = containerBounds.top + containerBounds.height / 2;
      const MAPPED_X = mapRange(
        centerX - proximity,
        centerX + proximity,
        -bounds,
        bounds
      )(x);
      const MAPPED_Y = mapRange(
        centerY - proximity,
        centerY + proximity,
        -bounds,
        bounds
      )(y);
      containerRef.current.style.setProperty(
        "--x",
        `clamp(-1, ${MAPPED_X / 100}, 1)`
      );
      containerRef.current.style.setProperty(
        "--y",
        `clamp(-1, ${MAPPED_Y / 100}, 1)`
      );
    };
    document.addEventListener("pointermove", UPDATE);
    return () => {
      document.removeEventListener("pointermove", UPDATE);
    };
  }, []);

  const containerMotion = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
      },
    },
  };

  return (
    <>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        variants={containerMotion}
        initial="hidden"
        animate="show"
        ref={containerRef}
        className="select-none h-64 w-64 sm:h-96 sm:w-96 mx-auto md:mx-0 md:h-full md:w-full relative parallax"
      >
        <div className="h-full w-full relative parallax-container">
          {ITEMS.map(({ id, src, styleProps, shadows }) => {
            const styles = {};
            Object.keys(styleProps).forEach(
              (key) => (styles[`--${key}`] = styleProps[key])
            );
            return (
              <div
                className="absolute parallax-item h-3/4 w-3/4 top-1/2 left-1/2 z-20"
                key={id}
                style={styles}
              >
                <Image
                  layout="fill"
                  objectFit="contain"
                  src={src}
                  onLoad={() =>
                    setImagesLoadedCount((currentCount) => currentCount + 1)
                  }
                />
                {shadows.map((shadow) => (
                  <motion.img
                    key={id + shadow}
                    animate={{
                      opacity:
                        imagesLoadedCount >= ITEMS.length
                          ? shadow >= 0
                            ? 0.75
                            : 0.5
                          : 0,
                    }}
                    tansition
                    style={{
                      "--offset-z":
                        (Math.abs(shadow) +
                          (Math.abs(styleProps["offset-z"]) || 0)) *
                        -1,
                    }}
                    className={`object-contain h-full w-full absolute parallax-shadow blur-${
                      shadow >= 0 ? "md" : "lg"
                    } brightness-0`}
                    src={src.src}
                    onLoad={() =>
                      setImagesLoadedCount((currentCount) => currentCount + 1)
                    }
                  />
                ))}
              </div>
            );
          })}
        </div>
      </motion.div>
    </>
  );
};

export default BobbleHead;
