import {
    Box, HStack, Text, VStack, Image, InputGroup, Select, Textarea,
    FormLabel, FormControl, Input, useDisclosure, Button, Modal, ModalOverlay,
    ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton,
    Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, Stack,
} from '@chakra-ui/react';
import React, { useState, useEffect, useContext } from 'react';
import { FaPlus, FaUserCircle, FaGripLines } from "react-icons/fa";
import { useMediaQuery } from '@chakra-ui/react'
import { TodoDrawer } from './TodoDrawer';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useDispatch, useSelector } from 'react-redux';
import { add_task, get_tasks } from '../Redux/TaskReducer/action';
import { Context } from '../Redux/Context';
import { useParams } from 'react-router-dom';

const initData = {
    title: "",
    description: "",
    dueDate: "",
    status: "todo"
}

export const BoardTemplate = () => {

    const [formData, setFormData] = useState(initData);
    const [isSmallerThanBreakpoint] = useMediaQuery('(max-width: 768px)')
    const { isOpen, onOpen, onClose } = useDisclosure()
    const token = localStorage.getItem("token")
    const { id } = useParams()

    const dispatch = useDispatch()
    let tasks = useSelector(store => store.taskReducer.tasksbyProId)

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        onClose()
        console.log("formdata", formData)
        dispatch(add_task(token, id, formData))
        dispatch(get_tasks(token, id))
        setFormData(initData)
    }


    const onDragEnd = (result) => {
        const { source, destination } = result;

        if (!destination) {
            return
        }
        if (destination.draggableId === source.droppableId && destination.index === source.index) {
            return
        }

    }


    useEffect(() => {
        dispatch(get_tasks(token, id))
    }, [id])


    function addData(status) {

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

                            <FormControl isRequired mb="15px">
                                <FormLabel color={"gray.600"}>Task Name</FormLabel>
                                <Select name="status" value={status} onChange={handleChange} type="text" >
                                    <option value="todo">To Do</option>
                                    <option value="inprogress">In Progress</option>
                                    <option value="completed">Completed</option>
                                </Select>
                            </FormControl>

                            <FormControl isRequired mb="15px">
                                <FormLabel color={"gray.600"}>Due Date</FormLabel>
                                <Input
                                    name="dueDate"
                                    value={formData.dueDate}
                                    onChange={handleChange}
                                    type="date" placeholder='Due Date' />
                            </FormControl>
                        </ModalBody>

                        <ModalFooter>
                            <Button variant={"solid"} color={"gray.700"} _hover={{ backgroundColor: "#558B2F", color: "white" }}
                                backgroundColor={"#DCEDC8"} mr={3} onClick={handleSubmit}  >
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
            <DragDropContext onDragEnd={onDragEnd}>
                <Box display={isSmallerThanBreakpoint ? "block" : "flex"} p={"auto"} gap={"20px"} m={"auto"}>

                    {/*================== To-do task #FEF5F4  ============*/}

                    <Droppable droppableId='todolist'>
                        {
                            (provided) => (
                                <Box
                                    ref={provided.innerRef}
                                    {...provided.droppableProps}
                                    borderRadius={"10px"} w={isSmallerThanBreakpoint ? "70%" : "30%"} backgroundColor={"#FAFAFA"} p={"10px"}
                                >
                                    <VStack>
                                        <Text color={"red.600"} fontWeight={"bold"}  >To do</Text>

                                        <Box w={"95%"} >
                                            <VStack>
                                                {
                                                    tasks.map((el, index) => (
                                                        el.status == "todo" &&
                                                        (<Draggable key={el._id} draggableId={el._id.toString()} index={index}>
                                                            {(provided) => (
                                                                <Box
                                                                    {...provided.draggableProps}
                                                                    {...provided.dragHandleProps}
                                                                    ref={provided.innerRef}
                                                                    index={index} key={index} m={"5px"} backgroundColor={"white"} p={"10px"} w={"95%"} borderRadius={"10px"} border={"1px solid #E2E8F0"}>
                                                                    <HStack display={"flex"} justifyContent={"space-between"}>
                                                                        <Text > {el.title}</Text>
                                                                        <Box >{TodoDrawer(el)}</Box>
                                                                    </HStack>
                                                                </Box>
                                                            )}
                                                        </Draggable>)
                                                    ))
                                                }
                                            </VStack>
                                            <Box m={"10px"}>
                                                <HStack>
                                                    <Box>{addData("todo")}</Box>
                                                    <Text color={"gray.400"}>Add new task...</Text>
                                                </HStack>
                                            </Box>
                                        </Box>

                                    </VStack>
                                    {provided.placeholder}
                                </Box >
                            )
                        }

                    </Droppable>
                    {/*================== In progress task  #EFF3FE============*/}

                    <Droppable droppableId='doinglist'>
                        {
                            (provided) => (
                                <Box
                                    ref={provided.innerRef}
                                    {...provided.droppableProps}
                                    borderRadius={"10px"} w={isSmallerThanBreakpoint ? "70%" : "30%"} backgroundColor={"#FAFAFA"} p={"10px"}
                                >
                                    <VStack>
                                        <Text color={"blue.600"} fontWeight={"bold"}>Doing</Text>
                                        <Box w={"95%"} >
                                            <VStack>
                                                {
                                                    tasks.map((el, index) => (
                                                        el.status == "inprogress" &&
                                                        (<Draggable key={el._id} draggableId={el._id.toString()} index={index}>
                                                            {(provided) => (
                                                                <Box
                                                                    {...provided.draggableProps}
                                                                    {...provided.dragHandleProps}
                                                                    ref={provided.innerRef}
                                                                    index={index} key={index} m={"5px"} backgroundColor={"white"} p={"10px"} w={"95%"} borderRadius={"10px"} border={"1px solid #E2E8F0"}>
                                                                    <HStack display={"flex"} justifyContent={"space-between"}>
                                                                        <Text > {el.title}</Text>
                                                                        <Box >{TodoDrawer(el)}</Box>
                                                                    </HStack>
                                                                </Box>
                                                            )}
                                                        </Draggable>)
                                                    ))
                                                }
                                            </VStack>
                                            <Box m={"10px"}>
                                                <HStack>
                                                    <Box>{addData("inprogress")}</Box>
                                                    <Text color={"gray.400"}>Add new task...</Text>
                                                </HStack>
                                            </Box>
                                        </Box>
                                    </VStack>
                                    {provided.placeholder}
                                </Box >
                            )
                        }

                    </Droppable>
                    {/*================== completed task   #F0FEEF ============*/}
                    <Droppable droppableId='donelist'>
                        {
                            (provided) => (
                                <Box
                                    ref={provided.innerRef}
                                    {...provided.droppableProps}
                                    borderRadius={"10px"} w={isSmallerThanBreakpoint ? "70%" : "30%"} backgroundColor={"#FAFAFA"} p={"10px"}
                                >
                                    <VStack>
                                        <Text color={"green.600"} fontWeight={"bold"}>Done</Text>
                                        <Box w={"95%"} >
                                            <VStack>
                                                {
                                                    tasks.map((el, index) => (
                                                        el.status == "completed" &&
                                                        (<Draggable key={el._id} draggableId={el._id.toString()} index={index}>
                                                            {(provided) => (
                                                                <Box
                                                                    {...provided.draggableProps}
                                                                    {...provided.dragHandleProps}
                                                                    ref={provided.innerRef}
                                                                    index={index} key={index} m={"5px"} backgroundColor={"white"} p={"10px"} w={"95%"} borderRadius={"10px"} border={"1px solid #E2E8F0"}>
                                                                    <HStack display={"flex"} justifyContent={"space-between"}>
                                                                        <Text > {el.title}</Text>
                                                                        <Box >{TodoDrawer("completed")}</Box>
                                                                    </HStack>
                                                                </Box>
                                                            )}
                                                        </Draggable>)
                                                    ))
                                                }
                                            </VStack>
                                            <Box m={"10px"}>
                                                <HStack>
                                                    <Box>{addData()}</Box>
                                                    <Text color={"gray.400"}>Add new task...</Text>
                                                </HStack>
                                            </Box>
                                        </Box>
                                    </VStack>
                                    {provided.placeholder}
                                </Box >
                            )
                        }

                    </Droppable>
                </Box >
            </DragDropContext>
        </Box >
    )
}


