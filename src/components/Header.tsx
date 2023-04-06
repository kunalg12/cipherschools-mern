import React from "react";
import logo from "../../public/cipherschool-icon.png";
import profile from "../../public/ProfilePictureMaker.png";
import watchPoints from "../../public/watchPoints.svg";
import { Stack, Switch } from "@chakra-ui/react";
import {
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Icon } from "@chakra-ui/react";
import { AiOutlineCompass } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { GoSettings } from "react-icons/go";
import { MdNotificationsNone } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import Image from "next/image";

function Header() {
  return (
    <Flex justifyContent="space-between" mt={3} align="right">
      <Flex alignItems="center">
        {/* HAMBURGER */}
        <Icon as={GiHamburgerMenu} mr={5} fontSize={20} />
        <Flex cursor="pointer" textAlign="center" justifyItems="center">
          {/* CIPHER LOGO */}
          <Image src={logo} alt="icon" height={10} width={40} />
          <Text ml={2} fontSize="2xl" as="b">
            CipherSchools
          </Text>
        </Flex>

        <Menu>
          <Icon
            as={AiOutlineCompass}
            fontSize={28}
            ml={5}
            alignItems="center"
            cursor="pointer"
          />
          <MenuButton ml={5} as={Button} rightIcon={<ChevronDownIcon />}>
            Actions
          </MenuButton>
          <MenuList>
            <MenuItem>App development</MenuItem>
            <MenuItem>Web development</MenuItem>
            <MenuItem>Game development</MenuItem>
            <MenuItem>Data structures</MenuItem>
            <MenuItem>Programming</MenuItem>
            <MenuItem>Machine learning</MenuItem>
            <MenuItem>Data scienece</MenuItem>
            <MenuItem>Others</MenuItem>
          </MenuList>
        </Menu>
      </Flex>

      <Flex alignItems="center">
        <InputGroup>
          <InputLeftElement>
            <Icon
              as={AiOutlineSearch}
              fontSize={20}
              ml={5}
              alignItems="center"
              cursor="pointer"
            />
          </InputLeftElement>
          <InputRightElement>
            <Icon
              as={GoSettings}
              fontSize={20}
              ml={5}
              alignItems="center"
              cursor="pointer"
              mr={5}
            />
          </InputRightElement>
          <Input placeholder="Basic usage" rounded="full" />
        </InputGroup>
        {/* MENU ICON  */}
        <Icon ml={7} as={MdNotificationsNone} />
        {/* PROFILE MENU */}
        <Menu>
          <MenuButton ml={7}>
            <Image
              id="profile-pic"
              src={profile}
              alt="profile-pic"
              width={30}
              height={30}
            />
          </MenuButton>
          <MenuList>
            <MenuGroup title="Profile">
              <MenuItem>Dashboard</MenuItem>
              <MenuItem>My Profile</MenuItem>
              <MenuItem>Enroll Courses</MenuItem>
              <MenuItem>Wishlist</MenuItem>
              <MenuItem>Liked Videos</MenuItem>
            </MenuGroup>
          </MenuList>
        </Menu>
        <Flex ml={7}>
          <Image src={watchPoints} alt="point" />
        </Flex>
        <Stack ml={7} mr={10} align="center" direction="row">
            <Switch size="md" colorScheme='yellow'/>
          </Stack>
      </Flex>
    </Flex>
  );
}

export default Header;
