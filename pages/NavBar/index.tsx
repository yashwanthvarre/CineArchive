import { Flex, Input, Text } from "@chakra-ui/react";

const NavBar = () => {
  return (
    <Flex backgroundColor="black" height={70}>
      <Flex justifyContent="space-between" width={900} p={4}>
        <Text color="white" fontWeight="bold" fontSize={25}>
          Movie Database
        </Text>
        <Input
          placeholder="Search Movie Name"
          height={30}
          width={60}
          color="black"
          backgroundColor="white"
        />
      </Flex>
    </Flex>
  );
};

export default NavBar;
