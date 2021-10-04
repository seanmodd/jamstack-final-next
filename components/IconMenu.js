import React from 'react';
import { useColorMode, useColorModeValue as mode } from '@chakra-ui/react';
import IconAnimations from './Animations/IconAnimations';

function IconMenu() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <IconAnimations>
        {colorMode === 'dark' ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50.117"
            height="126.973"
            viewBox="-1 -10 48 48"
          >
            <path
              d="M2 2h42.117M2 13.486h42.117M2 24.973h42.117"
              fill="none"
              stroke="#8344ff"
              strokeLinecap="round"
              width="100px"
              height="100px"
              strokeMiterlimit="10"
              strokeWidth="4"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50.117"
            height="126.973"
            viewBox="-1 -10 48 48"
          >
            <path
              d="M2 2h42.117M2 13.486h42.117M2 24.973h42.117"
              fill="none"
              width="100px"
              height="100px"
              stroke="#8344ff"
              strokeLinecap="round"
              strokeMiterlimit="10"
              strokeWidth="4"
            />
          </svg>
        )}
      </IconAnimations>
    </>
  );
}

export default IconMenu;
