import Head from 'next/head';
import { useEffect, useRef, useState } from 'react';
import NET from 'vanta/dist/vanta.net.min';
import * as THREE from 'three';
import { Box } from '@chakra-ui/react';
import styles from '../../styles/Home.module.css';

export default function Vanta({ children }) {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect();
      // NET({
      //   el: vantaRef.current,
      //   THREE,
      //   color: 0x14b679,

      //   // backgroundColor: '#fff',
      //   maxDistance: 34.0,
      // })
    }
    return () => {
      if (vantaEffect) vantaEffect.destory();
    };
  }, [vantaEffect]);
  return (
    <Box
      // backgroundColor="#fff"
      width="100%"
      height="100%"
      zIndex="0"
      position="fixed"
      ref={vantaRef}
    >
      {children}
    </Box>
  );
}
