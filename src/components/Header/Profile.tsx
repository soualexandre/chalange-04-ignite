import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface proleProps {
    showProfileData: Boolean
}

export function Profile({showProfileData = true} :proleProps){
    return(
        <Flex align="center">
        { showProfileData &&(
        <Box mr="4" textAlign="right">
            <Text>Alexandre souza dos Santos</Text>
            <Text color="gray.300" fontSize="small">alexandreifto2@gmail.com</Text>    
             </Box>
        )}
        <Avatar size="md" names="Alexandre Souza" src="https://github.com/soualexandre.png"/>
        </Flex> 
    );
}