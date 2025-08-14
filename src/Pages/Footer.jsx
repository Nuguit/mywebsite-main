import React from 'react'

const Footer = () => {
  return (
    <Flex
    className="navbar"
      direction={{ base: "column", md: "row" }}
      padding={{ base: "20px", md: "34px 80px" }}
      backgroundColor={"white"}
      alignItems="center"
      justifyContent="space-between"
      paddingLeft={"50px"}
    ></Flex>
  )
}

export default Footer