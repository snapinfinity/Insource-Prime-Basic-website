export const fadeIn = (direction, type = "tween", delay = 0, duration = 0.8) => ({
  hidden: {
    x: direction === 'left' ? 30 : direction === 'right' ? -30 : 0,
    y: direction === 'up' ? 30 : direction === 'down' ? -30 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type,
      delay,
      duration,
      ease: 'easeInOut', // Smoother ease effect
    },
  },
});

export const fadeOut = (direction, type = "tween", delay = 0, duration = 0.8) => ({
  hidden: {
    x: direction === "left" ? 30 : direction === "right" ? -30 : 0,
    y: direction === "up" ? 30 : direction === "down" ? -30 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type,
      delay,
      duration,
      ease: "easeInOut", // Smoother transition
    },
  },
});

  
  export const staggerContainer = (staggerChildren, delayChildren) => ({
    hidden: {},
    show: {
      transition: {
        staggerChildren,
        delayChildren,
      },
},
  });

 export const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3
        }
    }
};

export const serviceCardVariants = {
    hidden: { 
        opacity: 0,
        y: 50
    },
    visible: { 
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 15
        }
    }
};

export const benefitVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
        opacity: 1, 
        x: 0,
        transition: {
            type: "spring",
            stiffness: 100
        }
    }
};