import { Box, Center } from '@chakra-ui/react'
import React from 'react'
import { NavTemplate } from './NavTemplate'

export const Template = () => {


    return (
        <Center>
            <Box w={"full"} p={"30px"}>
                <NavTemplate />
            </Box>
        </Center>

    )
}
