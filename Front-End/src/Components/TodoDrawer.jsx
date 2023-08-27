import { Select, Drawer, DrawerBody, DrawerFooter, Divider, Textarea, DrawerContent, DrawerCloseButton, Box, Stack, Text, Input, Button, useDisclosure } from '@chakra-ui/react'
import React, { useContext, useState } from 'react';
import { FaGripLines, FaAngleDoubleRight, FaEllipsisH } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { Context } from '../Redux/Context';
import { update_task } from '../Redux/TaskReducer/action';

export function TodoDrawer(el) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const dispatch = useDispatch()
    const { token } = useContext(Context)
    // const token = localStorage.getItem("token")

    const [data, setData] = useState(el)

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    console.log("My token", token)

    const handleUpdate = () => {
        onClose()
        dispatch(update_task(token, data.projectId, data._id, data))

    }

    return (
        <>
            <Button ref={btnRef} bgColor='gray.50' size={"sm"} onClick={onOpen} >
                <FaEllipsisH size={10} color='gray' />
            </Button >
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
                size={"md"}

            >

                <DrawerContent style={{ height: '75vh', top: '25vh' }} borderRadius={"5px"} fontSize={"15px"}>

                    <Box display={"flex"} justifyContent={"space-between"} mr={"30px"} mt={"20px"}>
                        <Text ml={"20px"} fontSize={"16px"} fontWeight={"bold"}>{el?.title}</Text>
                        <FaAngleDoubleRight size={"20px"} onClick={onClose} />
                    </Box>
                    <br />
                    <Divider w={"90%"} m={"auto"} />
                    <br />


                    <DrawerBody  >
                        <Box display={"flex"} gap={"10px"} alignItems={"center"} mb={"10px"}>
                            <Text w={"30%"}> Assignee :</Text>
                            <Input type='email' backgroundColor={"gray.50"} name="assignedTo" border={"none"} value={"assignee"} onChange={handleChange} />
                        </Box>

                        <Box display={"flex"} gap={"10px"} alignItems={"center"} mb={"10px"}>
                            <Text w={"30%"}>Status :</Text>
                            <Select placeholder='Change Status' backgroundColor={"gray.50"} name="status" border={"none"} value={data?.status} onChange={handleChange}>
                                <option value='todo'> To Do </option>
                                <option value='inprogress'> In Progress </option>
                                <option value='completed'> Completed </option>
                            </Select>
                        </Box>

                        <Box display={"flex"} gap={"10px"} alignItems={"center"} mb={"10px"}>
                            <Text w={"30%"}>Due Date :</Text>
                            <Input type='text' backgroundColor={"gray.50"} border={"none"} name="dueDate" value={data?.dueDate} onChange={handleChange} />
                        </Box>

                        <Box display={"flex"} gap={"10px"} alignItems={"center"} mb={"10px"}>
                            <Text w={"30%"}>Description :</Text>
                            <Textarea type='text' backgroundColor={"gray.50"} border={"none"} name="description" value={data?.description} onChange={handleChange} />
                        </Box>

                    </DrawerBody>


                    <DrawerFooter>
                        <Button colorScheme='green' onClick={handleUpdate}>Save</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}


