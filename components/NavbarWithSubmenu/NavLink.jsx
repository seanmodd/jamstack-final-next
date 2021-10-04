import { chakra, useColorModeValue as mode } from '@chakra-ui/react';

import * as React from 'react';
import Link from 'next/link';
const DesktopNavLink = React.forwardRef((props, ref) => {
  const { active, ...rest } = props;
  return (
    <chakra.a
      ref={ref}
      // display="inline-block"
      px="1"
      py="6"
      textAlign="center"
      justifyContent="center"
      fontWeight="semibold"
      aria-current={active ? 'page' : undefined}
      // bg={mode('gray.50', 'gray.900')}
      bg="none"
      color={mode('gray.600', 'gray.400')}
      transition="all 0.2s"
      {...rest}
      _hover={{
        color: 'gray.500',
      }}
      _active={{
        color: 'blue.600',
        zIndex: '99999',
      }}
      _activeLink={{
        color: 'blue.600',
        zIndex: '99999',
        fontWeight: 'bold',
      }}
    />
  );
});
DesktopNavLink.displayName = 'DesktopNavLink';

export const MobileNavLink = (props) => {
  const { active, ...rest } = props;
  return (
    <chakra.a
      aria-current={active ? 'page' : undefined}
      w="full"
      display="flex"
      textDecoration="none"
      alignItems="center"
      color={mode('gray.900', 'gray.50')}
      height="14"
      fontWeight="semibold"
      borderBottomWidth="1px"
      {...rest}
    />
  );
};
export const NavLink = {
  Mobile: MobileNavLink,
  Desktop: DesktopNavLink,
};
