import {
    Box, HStack, Table, Thead, Tbody, TableContainer, Tr, Th, Td, TableCaption, Image, Text,
    FormLabel, FormControl, Input, useDisclosure, Button, Modal, ModalOverlay,
    ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { FaPlus, FaUserCircle } from "react-icons/fa";


export const ListTemplate = () => {


    const initData = {
        title: "",
        description: "",
        dueDate: ""
    }
    const [formData, setFormData] = useState(initData);
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const showAllUsers = () => {
        onClose()
    }

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
            onClose()
        }

        return (
            <>
                <Button onClick={onOpen}>
                    <FaPlus size={10} color="gray" />
                </Button>


                <Modal isOpen={isOpen} onClose={onClose} >
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader textAlign={'center'} color={"#E57373"} fontWeight={"bold"}>{"ADD TASK"}</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody >

                            <FormControl isRequired mb="15px">
                                <FormLabel color={"gray.600"}>Task Name</FormLabel>
                                <Input
                                    name="title"
                                    value={formData.title}
                                    onChange={handleChange}
                                    type="text" placeholder='task' />
                            </FormControl>

                            {/* <FormControl isRequired mb="15px">
                                <FormLabel>Assignee</FormLabel>
                                <Input
                                    name="title"
                                    value={formData.title}
                                    onChange={handleChange}
                                    type="text" placeholder='title' />
                            </FormControl> */}

                            <FormControl isRequired mb="15px">
                                <FormLabel color={"gray.600"}>Due Date</FormLabel>
                                <Input
                                    name="birthDate"
                                    value={formData.dueDate}
                                    onChange={handleChange}
                                    type="date" placeholder='Due Date' />
                            </FormControl>
                        </ModalBody>

                        <ModalFooter>
                            <Button variant={"solid"} color={"gray.700"} _hover={{ backgroundColor: "#558B2F", color: "white" }} backgroundColor={"#DCEDC8"} mr={3} onClick={handleSubmit}  >
                                ADD
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
                                <Td _hover={{ border: "1px solid #BDBDBD" }}>
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
                                <Td _hover={{ border: "1px solid #BDBDBD" }}>assignee</Td>
                                <Td _hover={{ border: "1px solid #BDBDBD" }}>In progress</Td>
                                <Td _hover={{ border: "1px solid #BDBDBD" }}>25-5-2023</Td>
                            </Tr>

                            <Tr _hover={{ backgroundColor: "#ECEFF1" }} color={'gray.600'}>
                                <Td _hover={{ border: "1px solid #BDBDBD" }}>
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

                                <Td _hover={{ border: "1px solid #BDBDBD" }}  >

                                    <div
                                        onMouseEnter={handleMouseEnter}
                                        onMouseLeave={handleMouseLeave}
                                        style={{ display: 'inline-block', position: 'relative', marginLeft: '17px' }}
                                        onClick={showAllUsers}
                                    >
                                        <FaUserCircle size={24} color="gray" />
                                        {isHovered && (
                                            <div
                                                style={{
                                                    position: 'absolute',
                                                    top: '0%',
                                                    left: '80%',
                                                    transform: 'translateX(10%)',
                                                    backgroundColor: 'gray',
                                                    color: 'white',
                                                    padding: '4px',
                                                    borderRadius: '4px',
                                                    fontSize: '12px',
                                                }}
                                            >
                                                Assign this task
                                            </div>
                                        )}
                                    </div>

                                </Td>
                                <Td _hover={{ border: "1px solid #BDBDBD" }}>In progress</Td>
                                <Td _hover={{ border: "1px solid #BDBDBD" }}>25-5-2023</Td>
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
