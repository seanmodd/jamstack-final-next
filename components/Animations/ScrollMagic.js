import { Heading } from '@chakra-ui/react';
import { useRef, useEffect, useState } from 'react';

function AnimeJS() {
  return (
    <>
      <Heading>SVG Text Path Animation with no libraries!</Heading>
      <svg id="demo-svg" width="1000" height="500">
        <path
          fill="none"
          stroke="#8400ff"
          d="M 0 0 Q 150 600 250 350 Q 400 50 450 250 C 550 600 600 550 1000 100 Z"
        />
      </svg>
    </>
  );
}

export default AnimeJS;
