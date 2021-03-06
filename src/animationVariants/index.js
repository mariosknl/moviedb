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
    y: "0",
  },
  visible: {
    x: "20vw",
    opacity: 1,
    y: "0",
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

export const dateVariants = {
  hidden: {
    x: "20vw",
    y: "0",
  },
  visible: {
    x: "20vw",
    y: "0",
    textShadow: "0px 0px 10px rgb(0,0,0)",
    boxShadown: "0px 0px 10px rgb(0,0,0)",
    transition: {
      duration: 1.5,
      repeat: Infinity,
    },
  },
};

export const detailsVariants = {
  hidden: {
    opacity: 0,
    x: "20vw",
    y: "0",
  },
  visible: {
    opacity: 1,
    x: "20vw",
    y: "0",
  },
};
