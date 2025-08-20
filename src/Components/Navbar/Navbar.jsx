import {
  Flex,
  Text,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure, Image
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import NavigationLink from "../NavigationLink/NavigationLink";
import logo from "./logo.png"

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const NAVIGATION_LINK = [
    { link: "/about", text: "Sobre mí" },
    { link: "/curriculum", text: "Curriculum" },
    { link: "/safemap", text: "SafeMap" },
    { link: "/otrosproyectos", text: "Otros proyectos" }
  ];

  return (
    <Flex
      className="navbar"
      padding={{ base: "15px 20px", md: "34px 80px" }}
      backgroundColor="white"
      borderBottom="2px solid #78BCF0"
      alignItems="center"
      justifyContent="space-between"
      width="100%"
      overflow="hidden"
    >

      <a href="https://www.nuriaguevarafuentes.com">
        <Image
          src={logo}
          alt="Logo"
          boxSize="50px"
          objectFit="contain"
          cursor="pointer"
        />
      </a>


      <Flex
        gap="40px"
        display={{ base: "none", md: "flex" }}
        alignItems="center"
      >
        {NAVIGATION_LINK.map(({ link, text }) => (
          <NavigationLink
            to={link}
            key={text}
            _hover={{ textDecoration: "underline" }}
            textDecoration="none"
          >
            <Text color="#78BCF0" fontWeight="500">
              {text}
            </Text>
          </NavigationLink>
        ))}
      </Flex>


      <IconButton
        display={{ base: "flex", md: "none" }}
        icon={<HamburgerIcon />}
        aria-label="Abrir menú"
        variant="outline"
        onClick={onOpen}
      />


      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <Flex
              direction="column"
              gap="20px"
              mt="60px"
              alignItems="flex-start"
            >
              {NAVIGATION_LINK.map(({ link, text }) => (
                <NavigationLink
                  to={link}
                  key={text}
                  onClick={onClose}
                  _hover={{ textDecoration: "underline" }}
                  textDecoration="none"
                >
                  <Text color="#78BCF0" fontWeight="500" fontSize="lg">
                    {text}
                  </Text>
                </NavigationLink>
              ))}
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default Navbar;
