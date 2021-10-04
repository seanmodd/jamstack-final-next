import { Heading, Box } from '@chakra-ui/react';
import { useRef, Test, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import IconAnimation from './IconAnimations';

function AnimeJS() {
  const mymaxwidth = '50vw';
  return (
    <>
      <Heading>SVG Text Path Animation with no libraries!</Heading>
      <Box
        zIndex="0"
        position="fixed"
        style={{ contain: 'content', maxWidth: '100vw' }}
      >
        {/* <div> */}

        <motion.svg
          initial={{ strokeOpacity: 0 }}
          animate={{ strokeOpacity: 0.1 }}
          transition={{ duration: 0.5 }}
          id="demo-svg"
          width="100vw"
          height="900"
        >
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2 }}
            whileHover={{
              scale: 1.2,
              transition: {
                duration: 0.8,
                ease: 'easeInOut',
              },
              // scale: [1, 1.4, 1.2],
              rotate: [3, 8, -8, 3],
              filter: [
                'hue-rotate(0) contrast(100%)',
                'hue-rotate(360deg) contrast(200%)',
                'hue-rotate(45deg) contrast(300%)',
                'hue-rotate(0) contrast(100%)',
              ],
            }}
            fill="none"
            stroke="#8344ff"
            strokeWidth="10px"
            // strokeOpacity="0.1"
            d="M -400 -400 -400 200 Q 150 150 250 300 Q 500 600 670 380 C 780 200 1000 600 1100 420 C 1200 150 1250 650 3800 200 "
          />
        </motion.svg>
      </Box>
    </>
  );
}

export default AnimeJS;
