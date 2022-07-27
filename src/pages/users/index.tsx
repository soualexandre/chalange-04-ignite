import { Box, Button, Flex, Heading, Icon, Table,Tr, Th, Checkbox, Thead, Tbody,Td, Text } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/sidebar";


export default function UserList(){
    return(
        <Box>
            <Header />
            <Flex w="100%" MY="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar/>

                <Box flex="1" borderRadius={8} by='gray.800' p="8">
                    <Flex mb="8" justify="space-between" align="center">
                        <Heading size="lg" fontWeight="normal">Usuários </Heading>
                        <Button 
                        as="a" size="sm" 
                        fontWeight="sm"
                        colorScheme="pink"
                        leftIcon={<Icon as={RiAddLine} 
                        fontSize="20"
                        />}
                        >
                            Criar novo
                        </Button>
                    </Flex>
                    <Table colorScheme="whiteAlpha">
                        <Thead>
                        <Tr>
                            <Th px="6" color="gray.300" width="8">
                                <Checkbox colorScheme="pink"/>
                            </Th>
                            <Th>
                                Usuário
                            </Th>
                            <Th>
                                Data de cadastro
                            </Th>
                            <Th width="8"></Th>
                        </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td px="6">
                                    <Checkbox colorScheme="pink"/>
                                </Td>
                                <Td px="6">
                                    <Box>
                                        <Text fontWeight="bold">Alexandre Souza</Text>
                                        <Text fontSize="small" color="gray.300">alexandreifto2@gmail.com</Text>
                                    </Box>
                                </Td>
                                <Td>
                                    04 de abril de 2022
                                </Td>
                                <Td>
                                <Button 
                                    as="a" size="sm" 
                                    fontWeight="sm"
                                    colorScheme="purple"
                                    leftIcon={<Icon as={RiPencilLine} 
                                    fontSize="16"
                                    />}
                                    >
                                        editar
                                    </Button>
                                </Td>

                            </Tr>
                        </Tbody>
                    </Table>
                    <Pagination/>
                </Box>
            </Flex>
        </Box>

    );
}