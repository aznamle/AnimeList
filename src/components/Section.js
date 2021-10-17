import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Section = ( {children }) => {

    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
          controls.start('visible');
        }
        if (!inView) {
          controls.start('hidden');
        }
    }, [controls, inView]);

    return (
        <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={{
          hidden: {
            y: 30,
            opacity: 0,
          },
          visible: {
            y: 0,
            opacity: 1,
          },
        }}
        transition={{
          delay: 0.4,
          duration: 0.5,
          damping: 10,
          mass: 1,
        }}
      > 
        {children}
    </motion.div>
    )
}

export default Section