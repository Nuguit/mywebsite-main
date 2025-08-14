import CustomLink from "../CustomLink/CustomLink"
import { Text } from "@chakra-ui/react"

const NavigationLink = ({ children, ...props }) => {
  return (
    <CustomLink {...props}>
      <Text >
        {children}
      </Text>
    </CustomLink>
  )
}

export default NavigationLink
