import { Heading } from '@chakra-ui/react';

import { motion } from 'framer-motion';

function IconAnimations({ children }) {
  return (
    <>
      <motion.div
        whileHover={{
          scale: 1.2,
          transition: {
            duration: 0.2,
            ease: 'easeInOut',
          },
          scale: [1, 1.4, 1.2],
          rotate: [0, 10, -10, 0],
          filter: [
            'hue-rotate(0) contrast(100%)',
            'hue-rotate(360deg) contrast(200%)',
            'hue-rotate(45deg) contrast(300%)',
            'hue-rotate(0) contrast(100%)'
          ]
        }}
      >
        {children}
      </motion.div>
    </>
  );
}

export default IconAnimations;
