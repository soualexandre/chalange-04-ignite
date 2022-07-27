import { Box, Button, Flex, Heading, Icon, Table,Tr, Th, Checkbox, Thead, Tbody,Td, Text, Divider, VStack, SimpleGrid, Input, HStack } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/sidebar";


export default function CreateUser(){
    return(
        <Box>
            <Header />
            <Flex w="100%" MY="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar/>
                <Box flex="1" borderRadius={8} by='gray.800' p="8">
                    <Heading size="lg" fontWeight="normal">Criar usuário</Heading>
                    <Divider my="6" borderColor="gray-700"/>
                    <VStack spacing="8">
                        <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
                            <Input name="nome" type="text" placeholder="Nome completo"/>
                            <Input name="email" type="email" placeholder="E-mail"/>
                        </SimpleGrid>
                        <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
                            <Input name="password" type="password" placeholder="Senha"/>
                            <Input name="password_confimation" type="password"  placeholder="Confimação de senha"/>
                        </SimpleGrid>
                    </VStack>
                    <Flex mt="8" justify="flex-end">
                        <HStack spacing="4">
                            <Button colorScheme="whiteAlpha">Cancelar</Button>
                            <Button colorScheme="pink">Salvar</Button>
                        </HStack>
                    </Flex> 
                </Box>
            </Flex>
        </Box>

    );
}