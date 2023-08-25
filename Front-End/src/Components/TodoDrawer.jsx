import {
    Box, HStack, Text, VStack, Image, InputGroup, Select, Textarea,
    FormLabel, FormControl, Input, useDisclosure, Button, Modal, ModalOverlay,
    ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton,
    Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, Stack,
} from '@chakra-ui/react';
import React, { useState } from 'react';

export const todoDrawer = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const firstField = React.useRef()

    console.log("opening")
    return (
        <>
            <Button colorScheme='teal' onClick={onOpen}>
                Create user
            </Button>
            <Drawer
                isOpen={isOpen}
                placement='right'
                initialFocusRef={firstField}
                onClose={onClose}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader borderBottomWidth='1px'>
                        Task Name
                    </DrawerHeader>

                    <DrawerBody>
                        <Stack spacing='24px'>
                            <Box>
                                <FormLabel htmlFor='username'>Task Name</FormLabel>
                                <Input
                                    ref={firstField}
                                    id='username'
                                    placeholder='Please enter user name'
                                />
                            </Box>

                            <Box>
                                <FormLabel htmlFor='url'>Url</FormLabel>
                                <InputGroup>

                                    <Input
                                        type='url'
                                        id='url'
                                        placeholder='Please enter domain'
                                    />

                                </InputGroup>
                            </Box>

                            <Box>
                                <FormLabel htmlFor='owner'>Select Owner</FormLabel>
                                <Select id='owner' defaultValue='segun'>
                                    <option value='segun'>Segun Adebayo</option>
                                    <option value='kola'>Kola Tioluwani</option>
                                </Select>
                            </Box>

                            <Box>
                                <FormLabel htmlFor='desc'>Description</FormLabel>
                                <Textarea id='desc' />
                            </Box>
                        </Stack>
                    </DrawerBody>

                    <DrawerFooter borderTopWidth='1px'>
                        <Button variant='outline' mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button colorScheme='blue'>Submit</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}