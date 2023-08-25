import { Select, Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, Box, Stack, Text, Input, Button, useDisclosure } from '@chakra-ui/react'
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

                <DrawerContent style={{ height: '75vh', top: '25vh' }} borderRadius={"5px"}>

                    <Box display={"flex"} justifyContent={"space-between"} mr={"30px"} mt={"20px"}>
                        <Text ml={"20px"} fontSize={"16px"} fontWeight={"bold"}>Task</Text>
                        <FaAngleDoubleRight size={"20px"} onClick={onClose} />
                    </Box>


                    <DrawerBody>
                        <Box display={"flex"} gap={"10px"}>
                            <Text>Assignee</Text>
                            <Input border={"none"} _hover={{ backgroundColor: "gray.50" }} />
                        </Box>

                    </DrawerBody>

                    <DrawerFooter>
                        <Button colorScheme='green'>Save</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}


