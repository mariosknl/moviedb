import { motion } from "framer-motion";

export const containerVariants = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

export const childVariants = {
  hidden: {
    x: "100vw",
    opacity: 0,
  },
  visible: {
    x: "50%",
    opacity: 1,
  },
};

export const imgVariants = {
  hidden: {
    x: "-30%",
    opacity: 0,
  },
  visible: {
    x: "-30%",
    opacity: 1,
  },
};
