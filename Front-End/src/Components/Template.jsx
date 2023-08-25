import { Box, Center } from '@chakra-ui/react'
import React from 'react'
import { NavTemplate } from './NavTemplate'
import SideBar from './SideBar'

export const Template = () => {

const Bgcolor = localStorage.getItem("bg-color")
    return (

        <div className="flex ">
        <div>
          <SideBar
           />
        </div>
  
        <div className={`flex-1 ${Bgcolor}`}>
        <Center>
            <Box w={"full"} p={"30px"}>
                <NavTemplate />
            </Box>
        </Center>
        </div>
      </div>
        

    )
}
