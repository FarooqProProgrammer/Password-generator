import React, { useState } from 'react'
import "./index.scss"
import { Box, Button, IconButton, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react'
import { BsChevronDown } from "react-icons/bs"
import { useMediaQuery } from 'react-responsive'
import { AiOutlineMenu } from "react-icons/ai"
import { ImCross } from "react-icons/im"

export default function Header() {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 990px)' })
    const [isNavOpen,setIsNavOpen] = useState(false);


    return (
        <>
            <Box className='PasswordGeneratorHeader'>
                <Text fontSize={{ 'lg': 35, 'md': 33, 'sm': 31 }} color={'white'}>Ichec<span className='text-red-400'>k</span></Text>

                {
                    !isTabletOrMobile && <Box display={'flex'} justifyContent={'center'} alignItems={'center'} gap={4}>
                        <Text color={'white'} fontSize={{ 'lg': 22, 'md': 21, 'sm': 19 }} _hover={{ color: '#f7f7f7', cursor: 'pointer' }} >Personal</Text>
                        <Text color={'white'} fontSize={{ 'lg': 22, 'md': 21, 'sm': 19 }} _hover={{ color: '#f7f7f7', cursor: 'pointer' }} >Pricing</Text>
                        <Text color={'white'} fontSize={{ 'lg': 22, 'md': 21, 'sm': 19 }} _hover={{ color: '#f7f7f7', cursor: 'pointer' }} >Business</Text>
                        <Menu>
                            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                                Resources
                            </MenuButton>
                            <MenuList>
                                <MenuItem>Security</MenuItem>
                                <MenuItem>Blog</MenuItem>
                                <MenuItem>Resource Library</MenuItem>
                            </MenuList>
                        </Menu>
                    </Box>
                }

                {
                    isTabletOrMobile && <IconButton onClick={()=>setIsNavOpen(true)}>
                        <AiOutlineMenu />
                    </IconButton>
                }



            </Box>



                {
                    isNavOpen && isTabletOrMobile && <Box
                    width={'100%'}
                    height={'100%'}
                    bgColor={'white'}
                    position={'absolute'}
                    top={0}
                    left={0}
                >
    
    
                    <Box
                        width={'100%'}
                        py={3}
                        display={'flex'}
                        justifyContent={'end'}
                        alignItems={'center'}
                        px={2}
                    >
    
                            <IconButton onClick={()=>setIsNavOpen(false)}>
                                <ImCross />
                            </IconButton>
    
                    </Box>
    
                    <Box display={'flex'} justifyContent={'center'} flexDirection={'column'} alignItems={'center'} gap={20}>
                            <Text color={'#000'} fontSize={{ 'lg': 22, 'md': 21, 'sm': 19 }} _hover={{ color: '#999', cursor: 'pointer' }} >Personal</Text>
                            <Text color={'#000'} fontSize={{ 'lg': 22, 'md': 21, 'sm': 19 }} _hover={{ color: '#999', cursor: 'pointer' }} >Pricing</Text>
                            <Text color={'#000'} fontSize={{ 'lg': 22, 'md': 21, 'sm': 19 }} _hover={{ color: '#999', cursor: 'pointer' }} >Business</Text>
                            <Menu>
                                <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                                    Resources
                                </MenuButton>
                                <MenuList>
                                    <MenuItem>Security</MenuItem>
                                    <MenuItem>Blog</MenuItem>
                                    <MenuItem>Resource Library</MenuItem>
                                </MenuList>
                            </Menu>
                        </Box>
                </Box>
                }
            


        </>

    )
}
