import {
    Box, HStack, Table, Thead, Tbody, TableContainer, Tr, Th, Td, TableCaption, Image, Text,
    FormLabel, FormControl, Input, useDisclosure, Button, Modal, ModalOverlay,
    ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Select, SkeletonCircle, SkeletonText
} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { FaAngleRight, FaPlus, FaUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { add_task, get_tasks, update_task } from '../Redux/TaskReducer/action';
import { useParams } from 'react-router-dom';


export const ListTemplate = () => {
    const initData = {
        title: "",
        description: "",
        dueDate: "",
        status: "todo",
    };

    const [formData, setFormData] = useState(initData);
    const dispatch = useDispatch()
    let todosList = useSelector((store) => store.taskReducer.tasksbyProId)
    const loading = useSelector((store) => store.taskReducer.loading)
    const token = localStorage.getItem("token")
    const { id } = useParams()


    const [hoveredRow, setHoveredRow] = useState(null);

    const handleMouseEnter = (taskId) => {
        setHoveredRow(taskId);
    };

    const handleMouseLeave = () => {
        setHoveredRow(null);
    };


    const showAllUsers = () => {
        onClose();
    };

    useEffect(() => {
        dispatch(get_tasks(token, id))
    }, [id])


    const handleStatusChange = (value, el) => {
        dispatch(update_task(token, id, el._id, { status: value }))
        dispatch(get_tasks(token, id))


        console.log(el)
    }


    function addData() {
        const { isOpen, onOpen, onClose } = useDisclosure();

        const handleChange = (e) => {
            setFormData({
                ...formData,
                [e.target.name]: e.target.value,
            });
        };



        const handleSubmit = (e) => {
            e.preventDefault();
            onClose();
            console.log(formData);
            dispatch(add_task(token, id, formData))
            dispatch(get_tasks(token, id))


        };

        return (
            <>
                <Button onClick={onOpen}>
                    <FaPlus size={10} color="gray" />
                </Button>

                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader
                            textAlign={"center"}
                            color={"#E57373"}
                            fontWeight={"bold"}
                        >
                            {"ADD TASK"}
                        </ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <FormControl isRequired mb="15px">
                                <FormLabel color={"gray.600"}>Task Name</FormLabel>
                                <Input
                                    name="title"
                                    value={formData.title}
                                    onChange={handleChange}
                                    type="text"
                                    placeholder="task"
                                />
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

        <Box w={"full"} bgColor={"white"} p="10px" borderRadius={"10px"} boxShadow="md" >
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
                            {todosList?.map((el, index) => (
                                <Tr key={index} _hover={{ backgroundColor: "#ECEFF1" }} color={'gray.600'}>
                                    <Td _hover={{ border: "1px solid #BDBDBD" }}>
                                        <HStack>
                                            <Box>
                                                <FaAngleRight color='pink' size={"20px"} />
                                            </Box>
                                            <Box>
                                                {el.title}
                                            </Box>
                                        </HStack>
                                    </Td>
                                    <Td _hover={{ border: "1px solid #BDBDBD" }}
                                        onMouseEnter={() => handleMouseEnter(el._id)}
                                        onMouseLeave={handleMouseLeave}
                                    >

                                        <div

                                            style={{ display: 'inline-block', position: 'relative', marginLeft: '17px' }}
                                            onClick={showAllUsers}
                                        >
                                            <FaUserCircle size={24} color="gray" />
                                            {hoveredRow === el._id && (
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
                                    <Td _hover={{ border: "1px solid #BDBDBD" }}>
                                        <Select w={"150px"} placeholder='Change Status' backgroundColor={"gray.50"} border={"none"} value={el.status} onChange={(e) => handleStatusChange(e.target.value, el)}>
                                            <option value='todo'> To Do </option>
                                            <option value='inprogress'> In Progress </option>
                                            <option value='completed'> Completed </option>
                                        </Select>
                                    </Td>
                                    <Td _hover={{ border: "1px solid #BDBDBD" }}>{el.dueDate ? el.dueDate : "-"}</Td>
                                </Tr>

                            ))}

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

