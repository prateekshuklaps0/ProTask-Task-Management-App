import {
    Box, HStack, Text, VStack, Image, InputGroup, Select, Textarea,
    FormLabel, FormControl, Input, useDisclosure, Button, Modal, ModalOverlay,
    ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton,
    Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, Stack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { FaPlus, FaUserCircle, FaGripLines } from "react-icons/fa";
import { useMediaQuery } from '@chakra-ui/react'
import { TodoDrawer } from './TodoDrawer';


const initData = {
    title: "",
    description: "",
    dueDate: ""
}

export const BoardTemplate = () => {

    const [allTask, setAllTask] = useState([]);
    const [todoTask, setTodoTask] = useState([1]);
    const [inProgresTask, setInProgresTask] = useState([]);
    const [formData, setFormData] = useState(initData);
    const [isSmallerThanBreakpoint] = useMediaQuery('(max-width: 768px)')
    const { isOpen, onOpen, onClose } = useDisclosure()


    const handletodo = () => {
        todoDrawer()
    }

    function addData() {

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
                <Button onClick={onOpen} backgroundColor={"white"} >
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
        <Box p={"auto"} w={"full"} m={"auto"}>
            <Box display={isSmallerThanBreakpoint ? "block" : "flex"} p={"auto"} gap={"20px"} m={"auto"}>

                {/*================== To-do task #FEF5F4  ============*/}

                <Box borderRadius={"10px"} w={"30%"} backgroundColor={"red.100"} p={"10px"} >
                    <VStack>
                        <Text color={"red.600"} fontWeight={"bold"}  >To do</Text>

                        <Box w={"95%"} >
                            <VStack>
                                <Box m={"5px"} backgroundColor={"white"} p={"10px"} w={"95%"} borderRadius={"10px"}>
                                    <HStack>
                                        <Text textAlign={"left"} > task...</Text>
                                        <Box >{TodoDrawer()}</Box>
                                    </HStack>
                                </Box>

                            </VStack>
                            <Box m={"10px"}>
                                <HStack>
                                    <Box>{addData("Add new task...")}</Box>
                                    <Text color={"gray.400"}>Add new task...</Text>
                                </HStack>
                            </Box>
                        </Box>

                    </VStack>
                </Box >

                {/*================== In progress task  #EFF3FE============*/}

                < Box borderRadius={"10px"} w={"30%"} p={"10px"} backgroundColor={"blue.100"} >
                    <VStack>
                        <Text color={"blue.600"} fontWeight={"bold"}>Doing</Text>
                        <Box w={"95%"} >
                            <VStack>
                                <Box m={"5px"} backgroundColor={"white"} p={"10px"} w={"95%"} borderRadius={"10px"}>
                                    <Text textAlign={"left"} > task...</Text>
                                </Box>

                            </VStack>
                            <Box m={"10px"}>
                                <HStack>
                                    <Box>{addData("Add new task...")}</Box>
                                    <Text color={"gray.400"}>Add new task...</Text>
                                </HStack>
                            </Box>
                        </Box>
                    </VStack>
                </Box >

                {/*================== completed task   #F0FEEF ============*/}

                < Box borderRadius={"10px"} w={"30%"} p={"10px"} backgroundColor={"green.100"} >
                    <VStack>
                        <Text color={"green.600"} fontWeight={"bold"}>Done</Text>
                        <Box w={"95%"} >
                            <VStack>
                                <Box m={"5px"} backgroundColor={"white"} p={"10px"} w={"95%"} borderRadius={"10px"}>
                                    <Text textAlign={"left"} > task...</Text>
                                </Box>

                            </VStack>
                            <Box m={"10px"}>
                                <HStack>
                                    <Box>{addData("Add new task...")}</Box>
                                    <Text color={"gray.400"}>Add new task...</Text>
                                </HStack>
                            </Box>
                        </Box>
                    </VStack>
                </Box >
            </Box >
        </Box >
    )
}
