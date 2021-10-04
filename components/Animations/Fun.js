import { motion } from 'framer-motion';
import { Heading } from '@chakra-ui/react';

function Fun() {
  return (
    <div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            scale: 0.8,
            opacity: 0,
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: 0.5,
              duration: 0.5,
            },
          },
        }}
        // animate={{ fontSize: '50', color: '#ff2994', x: '100' }}
      >
        <h1>Fun Animations</h1>
      </motion.div>
    </div>
  );
}

export default Fun;
