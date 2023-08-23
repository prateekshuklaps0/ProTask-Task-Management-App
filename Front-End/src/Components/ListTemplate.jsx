import { Box, HStack, Table, Thead, Tbody, TableContainer, Tr, Th, Td, TableCaption, Image, Text, FormLabel, FormControl, Input, useDisclosure, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from '@chakra-ui/react'
import React, { useState } from 'react'

export const ListTemplate = () => {
    const initData = {
        title: "",
        description: "",
        dueDate: ""
    }
    const [formData, setFormData] = useState(initData);

    function addData() {

        const { isOpen, onOpen, onClose } = useDisclosure()

        const handleChange = (e) => {
            setFormData({
                ...formData,
                [e.target.name]: e.target.value
            })
        }

        console.log(formData)

        const handleSubmit = (e) => {
            e.preventDefault()

        }

        return (
            <>
                <Button onClick={onOpen}>+</Button>

                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>{"ADD TASK"}</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody >

                            <FormControl isRequired mb="15px">
                                <FormLabel>Title</FormLabel>
                                <Input
                                    name="title"
                                    value={formData.title}
                                    onChange={handleChange}
                                    type="text" placeholder='title' />
                            </FormControl>

                            <FormControl isRequired mb="15px">
                                <FormLabel>Assign</FormLabel>
                                <Input
                                    name="title"
                                    value={formData.title}
                                    onChange={handleChange}
                                    type="text" placeholder='title' />
                            </FormControl>

                            <FormControl isRequired mb="15px">
                                <FormLabel>Due Date</FormLabel>
                                <Input
                                    name="birthDate"
                                    value={formData.dueDate}
                                    onChange={handleChange}
                                    type="date" placeholder='Due Date' />
                            </FormControl>
                        </ModalBody>

                        <ModalFooter>
                            <Button colorScheme='gray' variant={"outline"} mr={3} onClick={handleSubmit}>
                                Add
                            </Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </>
        )
    }

    return (
        <Box>
            <Box>
                <TableContainer>
                    <Table variant='simple'>
                        <Thead>
                            <Tr>
                                <Th>TASK NAME</Th>
                                <Th>ASSIGNEE</Th>
                                <Th>STATUS</Th>
                                <Th>DUE DATE</Th>
                            </Tr>
                        </Thead>
                        <Tbody>

                            {/* map all task here */}
                            <Tr _hover={{ backgroundColor: "#ECEFF1" }} color={'gray.600'}>
                                <Td >
                                    <HStack>
                                        <Box w="20px" h="20px">
                                            <Image
                                                src={"https://minehub.com/wp-content/uploads/2023/07/Chevron.svg"}
                                                alt=""
                                                w={"100%"}
                                                h={"100%"}
                                                objectFit="contain"
                                            />
                                        </Box>
                                        <Box>
                                            Name
                                        </Box>
                                    </HStack>
                                </Td>
                                <Td>assignee</Td>
                                <Td >In progress</Td>
                                <Td >25-5-2023</Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </TableContainer>
                <Box m={"10px"}>
                    <HStack>
                        <Box>{addData("Add new task...")}</Box>
                        <Text color={"gray.400"}>Add new task...</Text>
                    </HStack>
                </Box>
            </Box>
        </Box >
    )
}
