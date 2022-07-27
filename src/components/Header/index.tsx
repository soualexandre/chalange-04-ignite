import {Flex, useBreakpointValue,} from '@chakra-ui/react'
import { Logo } from './Logo';
import { Profile } from './Profile';
import { SearchBox } from './SearchBox';
export function Header(){

    const isWideVerdion = useBreakpointValue({
        base: false,
        lg: true
    })
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
           <Logo/>

           {isWideVerdion && (<SearchBox/>)}
            <Flex 
            align="center"
            ml="auto"
            >
              <Profile showProfileData={isWideVerdion} />
            </Flex>
        </Flex>
    );
}