import { Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';

function WaveLine() {
  return (
    <Box backgroundColor="#0000003d" width="100vw">
      269 bytes → 218 bytes 81.04%
      <svg
        width="1440"
        height="363"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1440 27.4774c-87.27-7.659-317.59 21.5782-540.669 199.7986-278.851 222.776-545.049 128.371-729.003-41.958C23.165 49.0556-4.2172 8.33.487 5"
          stroke="#D96ED4"
        />
      </svg>
    </Box>
  );
}

export default WaveLine;
