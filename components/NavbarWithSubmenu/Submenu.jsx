import {
  Box,
  Collapse,
  useColorModeValue as mode,
  SimpleGrid,
  useDisclosure,
} from '@chakra-ui/react';

import * as React from 'react';

import { FaChevronDown } from 'react-icons/fa';

import { NavLink } from './NavLink';
import { NavMenu } from './NavMenu';
import { SubmenuItem as DesktopMenuItem } from './SubmenuItem';
import { useNavMenu } from './useNavMenu';

const DesktopSubmenu = (props) => {
  const { link } = props;
  const { isOpen, getMenuProps, getTriggerProps } = useNavMenu();
  return (
    <>
      <NavLink.Desktop
        display="flex"
        alignItems="center"
        as="button"
        type="button"
        zIndex="9"
        px="4"
        fontWeight="semibold"
        {...getTriggerProps()}
      >
        <Box>{link.label}</Box>
        <Box marginStart="2" as={FaChevronDown} fontSize="xs" />
      </NavLink.Desktop>

      <NavMenu
        {...getMenuProps()}
        zIndex="9"
        animate={isOpen ? 'open' : 'closed'}
      >
        <Box maxW="7xl" zIndex="9" mx="auto" px="8">
          <SimpleGrid zIndex="9" spacing="10" columns={2}>
            {link.children?.map((item, idx) => (
              <DesktopMenuItem
                key={idx}
                title={item.label}
                href={item.href}
                zIndex="9"
                icon={item.icon}
              >
                {item.description}
              </DesktopMenuItem>
            ))}
          </SimpleGrid>
        </Box>
      </NavMenu>
    </>
  );
};

const MobileSubMenu = (props) => {
  const { link } = props;
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Box>
      <NavLink.Mobile
        as="button"
        textAlign="start"
        type="button"
        borderRadius="0px"
        w="100%"
        cursor="pointer"
        bg={mode('gray.50', 'gray.900')}
        onClick={onToggle}
        // paddingEnd="4"
      >
        <Box flex="1">{link.label}</Box>
        <Box
          as={FaChevronDown}
          transform={`rotate(${isOpen ? '180deg' : '0deg'})`}
        />
      </NavLink.Mobile>
      <Collapse in={isOpen}>
        <Box pl="5">
          {link.children?.map((item, idx) => (
            <NavLink.Mobile key={idx} href={item.href}>
              {item.label}
            </NavLink.Mobile>
          ))}
        </Box>
      </Collapse>
    </Box>
  );
};

export const Submenu = {
  Mobile: MobileSubMenu,
  Desktop: DesktopSubmenu,
};
