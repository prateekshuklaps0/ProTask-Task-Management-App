import { Select, Drawer, DrawerBody, DrawerFooter, Divider, Textarea, DrawerContent, DrawerCloseButton, Box, Stack, Text, Input, Button, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react';
import { FaGripLines, FaAngleDoubleRight } from 'react-icons/fa';

export function TodoDrawer() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    return (
        <>
            <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
                <FaGripLines size={10} />
            </Button>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
                size={"md"}

            >

                <DrawerContent style={{ height: '75vh', top: '25vh' }} borderRadius={"5px"} fontSize={"15px"}>

                    <Box display={"flex"} justifyContent={"space-between"} mr={"30px"} mt={"20px"}>
                        <Text ml={"20px"} fontSize={"16px"} fontWeight={"bold"}>Task</Text>
                        <FaAngleDoubleRight size={"20px"} onClick={onClose} />
                    </Box>
                    <br />
                    <Divider w={"90%"} m={"auto"} />
                    <br />


                    <DrawerBody  >
                        <Box display={"flex"} gap={"10px"} alignItems={"center"} mb={"10px"}>
                            <Text w={"30%"}> Assignee :</Text>
                            <Input type='email' backgroundColor={"gray.50"} border={"none"} value={"name"} />
                        </Box>

                        <Box display={"flex"} gap={"10px"} alignItems={"center"} mb={"10px"}>
                            <Text w={"30%"}>Status :</Text>
                            <Select placeholder='Change Status' backgroundColor={"gray.50"} border={"none"}>
                                <option value='todo'> To Do </option>
                                <option value='doing'> Doing </option>
                                <option value='done'> Done </option>
                            </Select>
                        </Box>

                        <Box display={"flex"} gap={"10px"} alignItems={"center"} mb={"10px"}>
                            <Text w={"30%"}>Due Date :</Text>
                            <Input type='date' backgroundColor={"gray.50"} border={"none"} value={"name"} />
                        </Box>

                        <Box display={"flex"} gap={"10px"} alignItems={"center"} mb={"10px"}>
                            <Text w={"30%"}>Priority :</Text>
                            <Input backgroundColor={"gray.50"} border={"none"} value={"priority"} />
                        </Box>

                        <Box display={"flex"} gap={"10px"} alignItems={"center"} mb={"10px"}>
                            <Text w={"30%"}>Description :</Text>
                            <Textarea type='text' backgroundColor={"gray.50"} border={"none"} value={"This task needs to be completed in 1 week"} />
                        </Box>

                    </DrawerBody>


                    <DrawerFooter>
                        <Button colorScheme='green' onClick={onClose}>Save</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}


