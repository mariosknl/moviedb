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
    y: "5vh",
  },
  visible: {
    y: "5vh",
    x: "20vw",
    opacity: 1,
  },
};

export const summaryVariants = {
  hidden: {
    x: "20vw",
    opacity: 0,
    y: "-25vh",
  },
  visible: {
    x: "20vw",
    opacity: 1,
    y: "-25vh",
  },
};

export const imgVariants = {
  hidden: {
    opacity: 0,
    x: "10%",
  },
  visible: {
    opacity: 1,
    x: "10%",
  },
};
