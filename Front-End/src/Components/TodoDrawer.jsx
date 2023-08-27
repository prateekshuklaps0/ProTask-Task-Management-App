import { Select, Drawer, DrawerBody, DrawerFooter, Divider, Textarea, DrawerContent, DrawerCloseButton, Box, Stack, Text, Input, Button, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react';
import { FaGripLines, FaAngleDoubleRight, FaEllipsisH } from 'react-icons/fa';
import { useDispatch } from 'react-redux';

export function TodoDrawer(el) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const dispatch = useDispatch()

    const handleChange = () => {

    }

    const handleUpdate = () => {
        onClose()
        dispatch()
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
                            <Input type='email' backgroundColor={"gray.50"} border={"none"} value={"assignee"} onChange={handleChange} />
                        </Box>

                        <Box display={"flex"} gap={"10px"} alignItems={"center"} mb={"10px"}>
                            <Text w={"30%"}>Status :</Text>
                            <Select placeholder='Change Status' backgroundColor={"gray.50"} border={"none"} value={el?.status} onChange={handleChange}>
                                <option value='todo'> To Do </option>
                                <option value='inprogress'> In Progress </option>
                                <option value='completed'> Completed </option>
                            </Select>
                        </Box>

                        <Box display={"flex"} gap={"10px"} alignItems={"center"} mb={"10px"}>
                            <Text w={"30%"}>Due Date :</Text>
                            <Input type='date' backgroundColor={"gray.50"} border={"none"} value={el?.dueDate} onChange={handleChange} />
                        </Box>

                        <Box display={"flex"} gap={"10px"} alignItems={"center"} mb={"10px"}>
                            <Text w={"30%"}>Description :</Text>
                            <Textarea type='text' backgroundColor={"gray.50"} border={"none"} value={el?.description} onChange={handleChange} />
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


