import { Box, Center } from '@chakra-ui/react'
import React from 'react'
import { NavTemplate } from './NavTemplate'

export const Template = () => {


    return (
        <Center>
            <Box w={{ base: "400px", sm: "350px", md: "650px", lg: "800px", xl: "1000px" }} border={"1px solid red"} p={"50px"}>
                <NavTemplate />
            </Box>
        </Center>

    )
}
