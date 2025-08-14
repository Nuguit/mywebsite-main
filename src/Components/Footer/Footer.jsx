import React from 'react';
import { Flex } from '@chakra-ui/react';
import github from "../../Pages/SobreMi/github.svg";

const Footer = () => {
  return (
    <Flex
      padding="15px 10px"
      backgroundColor="#78BCF0"
      flexWrap="wrap"
      justifyContent= "space-around"
      alignItems="center"
      textAlign="center"
      margin="0 10px"
    >
      <a href="https://github.com/Nuguit" style={{ marginBottom: "10px" }}>
        <img src={github} title="GitHub" alt="GitHub" width="80" height="80" />
      </a>

      <div className='name' style={{ color: "white", fontSize: "1.2rem", marginRight: "50px"}}>
        Contacto: <a href="mailto:nuria@nuriaguevarafuentes.com" style={{ color: 'inherit', transition: 'color 0.3s' }}>nuria@nuriaguevarafuentes.com</a>
      </div>
    </Flex>
  );
}

export default Footer;

