import { Flex, Text } from "@chakra-ui/react";
import NavigationLink from "../NavigationLink/NavigationLink";

const Navbar = () => {
  const NAVIGATION_LINK = [
    { link: "/about", text: "Sobre mí" },
    { link: "/curriculum", text: "Curriculum" },
    { link: "/safemap", text: "SafeMap" }
  ];

  return (
    <Flex
      className="navbar"
      direction={{ base: "column", md: "row" }}
      padding={{ base: "20px", md: "34px 80px" }}
      backgroundColor="white" // Fondo blanco
      borderBottom="2px solid #78BCF0" // Línea azul inferior
      alignItems="center"
      justifyContent="space-around"
      paddingLeft="50px"
    >
      <Flex gap="54px">
        {NAVIGATION_LINK.map(({ link, text }) => {
          return (
            <NavigationLink
              to={link}
              key={text}
              _hover={{ textDecoration: "underline" }} // Subrayado en hover
              textDecoration="none" // Sin subrayado por defecto
            >
              <Text color="#78BCF0" fontWeight="500">
                {text}
              </Text>
            </NavigationLink>
          );
        })}
      </Flex>
    </Flex>
  );
};

export default Navbar;
