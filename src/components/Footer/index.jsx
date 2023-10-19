import { IconButton, Text } from '@chakra-ui/react'
import React from 'react'
import { CgPassword } from "react-icons/cg"

export default function Footer() {
    return (
        <footer class="bg-black body-font">
            <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                <div class="w-64 flex justify-center items-center  gap-3 md:mx-0 mx-auto text-center md:text-left">
                    <IconButton>
                        <CgPassword />
                    </IconButton>
                    <Text fontSize={{ 'lg': 35, 'md': 33, 'sm': 31 }} color={'white'}>Ichec<span className='text-red-400'>k</span></Text>

                </div>
                <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                    <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">ICheck</h2>
                        <nav class="list-none mb-10 space-y-4">
                            <li>
                                <a class="text-white hover:text-[#FE3E57] transition-colors duration-500 cursor-pointer">Pricing</a>
                            </li>
                            <li>
                                <a class="text-white hover:text-[#FE3E57] transition-colors duration-500 cursor-pointer">Teams</a>
                            </li>
                            <li>
                                <a class="text-white hover:text-[#FE3E57] transition-colors duration-500 cursor-pointer">Businesses</a>
                            </li>
                            <li>
                                <a class="text-white hover:text-[#FE3E57] transition-colors duration-500 cursor-pointer">Enterprise</a>
                            </li>
                        </nav>
                    </div>
                    <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">Support</h2>
                        <nav class="list-none mb-10 space-y-4">
                            <li>
                                <a class="text-white hover:text-[#FE3E57] transition-colors duration-500 cursor-pointer">Support</a>
                            </li>
                            <li>
                                <a class="text-white hover:text-[#FE3E57] transition-colors duration-500 cursor-pointer">Forum</a>
                            </li>
                            <li>
                                <a class="text-white hover:text-[#FE3E57] transition-colors duration-500 cursor-pointer">Contact Us</a>
                            </li>
                        </nav>
                    </div>
                    <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">Locations</h2>
                        <nav class="list-none mb-10 space-y-4">
                            <li>
                                <a class="text-white hover:text-[#FE3E57] transition-colors duration-500 cursor-pointer">Asia</a>
                            </li>
                            <li>
                                <a class="text-white hover:text-[#FE3E57] transition-colors duration-500 cursor-pointer">Europe</a>
                            </li>

                        </nav>
                    </div>
                    <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">Resources</h2>
                        <nav class="list-none mb-10 space-y-4">
                            <li>
                                <a class="text-white hover:text-[#FE3E57] transition-colors duration-500 cursor-pointer">Resources Center</a>
                            </li>
                            <li>
                                <a class="text-white hover:text-[#FE3E57] transition-colors duration-500 cursor-pointer">Community</a>
                            </li>
                            <li>
                                <a class="text-white hover:text-[#FE3E57] transition-colors duration-500 cursor-pointer">NewsFeed</a>
                            </li>
                            <li>
                                <a class="text-white hover:text-[#FE3E57] transition-colors duration-500 cursor-pointer">Fourth Link</a>
                            </li>
                        </nav>
                    </div>
                </div>
            </div>

        </footer>
    )
}
