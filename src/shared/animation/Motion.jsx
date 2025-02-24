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


//   export const fadeOut = (direction, type, delay, duration) => {
//     return {
//       hidden: {
//         x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
//         y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
//         opacity: 0,
//       },
//       show: {
//         x: 0,
//         y: 0,
//         opacity: 1,
//         transition: {
//           type: type,
//           delay: delay,
//           duration: duration,
//           ease: "easeOut",
//         },
// },
// };
// };