import { VStack, Box, Image, Text, HStack, Heading, Tabs, TabList, TabPanels, Tab, TabPanel, AvatarGroup, Avatar } from '@chakra-ui/react'
import React from 'react'
import { ListTemplate } from './ListTemplate'
import { BoardTemplate } from './BoardTemplate'


export const NavTemplate = () => {




    return (
        <VStack >
            <Box w={{ base: "400px", sm: "350px", md: "650px", lg: "800px", xl: "1000px" }}>
                {/* { base: "400px", sm: "350px", md: "600px", lg: "700px", xl: "800px" } */}
                <Box display={"flex"} justifyContent={'space-between'} w={{ base: "400px", sm: "350px", md: "650px", lg: "800px", xl: "1000px" }}>
                    <HStack>
                        <Box w="40px" h="40px" ml={"20px"}>
                            <Image
                                src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbTgThedKIwaCdOBY2NmhBXRbcBkodCVCwGw&usqp=CAU"}
                                alt=""
                                w={"100%"}
                                h={"100%"}
                                objectFit="contain"
                            />
                        </Box>
                        <Heading size={"md"} color="gray.700">PROJECT NAME</Heading>
                    </HStack>
                    <Box >
                        <AvatarGroup size='md' max={2} mr={"20px"}>
                            <Avatar name='Ryan Florence' src='https://bit.ly/broken-link' />
                            <Avatar name='Segun Adebayo' src='https://bit.ly/broken-link' />
                            <Avatar name='Kent Dodds' src='https://bit.ly/broken-link' />
                            <Avatar name='Prosper Otemuyiwa' src='https://bit.ly/broken-link' />
                            <Avatar name='Christian Nwamba' src='https://bit.ly/broken-link' />
                        </AvatarGroup>
                    </Box>
                </Box>
            </Box>
            <Box>
                <Tabs variant='enclosed' defaultIndex={1} w={{ base: "400px", sm: "350px", md: "650px", lg: "800px", xl: "1000px" }}>
                    <TabList>
                        <Tab>Overview</Tab>
                        <Tab>List</Tab>
                        <Tab>Board</Tab>
                        <Tab>Dashboard</Tab>
                    </TabList>

                    <TabPanels >
                        <TabPanel>
                            <p>Overview!</p>
                        </TabPanel>

                        <TabPanel>
                            <ListTemplate />
                        </TabPanel>

                        <TabPanel>
                            <BoardTemplate />
                        </TabPanel>

                        <TabPanel>
                            <p>Dashboard!</p>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
        </VStack>
    )
}
