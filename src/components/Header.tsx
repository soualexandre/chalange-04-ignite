import {Flex, Text} from '@chakra-ui/react'

export function Header(){
    return(
        <Flex 
        w="100%" 
        as="header" 
        maxWidth={1480}
        h="28"
        mx="auto"
        mt="4"
        align="center"
        px="6"
        >
            <Text 
            fontSize="3xl" 
            fontWeight="bold"
            letterSpacing="tight"
            w="64"
            >
                DashGo
                <Text
                color="pink.500" 
                as="span"
                ml="1"
                >. </Text>
            </Text>


            <Flex
            as="label"
            flex="1"
            py="4"
            px="8"
            ml="6"
            maxWidth={480}
            alignSelf="center"
            color="gray.200"
            position="relative"
            bg="gray.800"
            borderRadius="full"
            >

            </Flex>

        </Flex>
    );
}