import { Flex, Text, Link, Image } from '@chakra-ui/react';
import github from "../../Pages/SobreMi/github.svg";

const Footer = () => {
  return (
    <Flex
      as="footer"
      direction={{ base: "column", md: "row" }}
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      gap={{ base: "12px", md: "20px" }}
      py="20px"
      px="10px"
      backgroundColor="#78BCF0"
      flexWrap="wrap"
    >
      <Link href="https://github.com/Nuguit" isExternal display="inline-flex">
        <Image
          src={github}
          title="GitHub"
          alt="GitHub"
          boxSize="60px"
          cursor="pointer"
        />
      </Link>

      <Text color="white" fontSize="1.2rem" m={0}>
        Contacto:{" "}
        <Link
          href="mailto:nuria@nuriaguevarafuentes.com"
          color="white"
          _hover={{ color: "black" }}
        >
          nuria@nuriaguevarafuentes.com
        </Link>
      </Text>
    </Flex>
  );
};

export default Footer;


