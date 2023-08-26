import { Box, Center } from '@chakra-ui/react'
import React from 'react'
import { NavTemplate } from './NavTemplate'
import SideBar from './SideBar'

export const Template = () => {

const Bgcolor = localStorage.getItem("bg-color")
    return (

        <div className="flex h-screen ">
        <div className='fixed'>
          <SideBar
           />
        </div>
  
        <div className={`flex-1 pl-0 sm:pl-0 md:pl-0 lg:pl-48 xl:pl-48 ${Bgcolor}`}>
        <Center>
            <Box w={"full"} p={"30px"}>
                <NavTemplate />
            </Box>
        </Center>
        </div>
      </div>
        

    )
}
