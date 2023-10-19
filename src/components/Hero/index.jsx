import React, { useState } from 'react'
import "./index.scss"
import { Box, Flex, IconButton, Slider, SliderFilledTrack, SliderThumb, SliderTrack, Text } from '@chakra-ui/react'
import { CgPassword } from "react-icons/cg"
import { BsClipboardCheck } from "react-icons/bs"
import { toast } from 'react-toastify'
import CopyToClipboard from 'react-copy-to-clipboard'


export default function Hero() {

    const [isNumber, setIsNumber] = useState(false);
    const [isString, setIsString] = useState(false);
    const [isSymbols, setIsSymbols] = useState(false);
    const [isLetter, setIsLetter] = useState(false);
    const [lengthValue, setLenghtValue] = useState(8)
    const [password, setPassword] = useState();
    const [isCopied, setCopied] = useState(false)

    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const symbols = '!@#$%^&*()_-+=<>?';
    const numbers = '0123456789';


    const GeneratePassword = () => {
        let validChars = '';
        if (isLetter) validChars += letters;
        if (isSymbols) validChars += symbols;
        if (isNumber) validChars += numbers;

        if (validChars.length === 0) {
            toast('Please Add Some Valid Characters')
            return;
        }

        let newPassword = '';
        const passwordLength = lengthValue;
        console.log(validChars)

        for (let i = 0; i < passwordLength; i++) {
            const randomIndex = Math.floor(Math.random() * validChars.length);
            newPassword += validChars[randomIndex];
        }

        setPassword(newPassword)


    }



    return (
        <Box
            className='PasswordHeroBox'
        >
            <Text maxWidth={{ 'lg': '50%', 'md': '70%', 'sm': '90%' }} textAlign={'center'} fontSize={{ 'lg': 40, 'md': 30, 'sm': 30 }} color={'white'}>
                Need a password? Try the 1Password Strong Password Generator.
            </Text>
            <Text color={'#fff'}>Generate secure, random passwords to stay safe online.</Text>
            <Box className='PassWordGenerate mb-2'>
                <p>{password && password}</p>
                <Flex justifyContent={'center'} alignItems={'center'} gap={3}>
                    <CopyToClipboard text={password} onCopy={()=>{
                        setCopied(true)
                        toast('Copied Success')
                    }}>
                        <IconButton>
                            <BsClipboardCheck />
                        </IconButton>
                    </CopyToClipboard>

                    <IconButton onClick={GeneratePassword}>
                        <CgPassword />
                    </IconButton>

                </Flex>

            </Box>

            <Flex
                width={{ 'lg': '50%', 'md': '70%', 'sm': '90%' }}
                mb={2}
                position={'relative'}
            >
                <Slider aria-label='slider-ex-1' onChange={(number) => setLenghtValue(number)} defaultValue={lengthValue}>
                    <SliderTrack>
                        <SliderFilledTrack />
                    </SliderTrack>
                    <SliderThumb />
                </Slider>

                <Text position={'absolute'} color={'white'} right={0} top={3}>{lengthValue}</Text>


            </Flex>

            <Box className='PasswordChoices'>


                <Flex justifyContent={'space-between'} alignItems={'center'} px={10} width={{ 'lg': '200px', 'md': '400px', 'sm': '95%' }} py={1} rounded={'md'} height={'60px'} bgColor={'white'}>

                    <input

                        type='checkbox'
                        onChange={() => setIsNumber(!isNumber)}
                    />

                    <Text>Numbers</Text>
                </Flex>

                <Flex justifyContent={'space-between'} alignItems={'center'} px={10} width={{ 'lg': '200px', 'md': '400px', 'sm': '95%' }} py={1} rounded={'md'} height={'60px'} bgColor={'white'}>

                    <input

                        type='checkbox'
                        onChange={() => setIsString(!isString)}
                    />

                    <Text>String</Text>
                </Flex>

                <Flex justifyContent={'space-between'} alignItems={'center'} px={10} width={{ 'lg': '200px', 'md': '400px', 'sm': '95%' }} py={1} rounded={'md'} height={'60px'} bgColor={'white'}>

                    <input

                        type='checkbox'
                        onChange={() => setIsSymbols(!isSymbols)}
                    />

                    <Text>Symbols</Text>
                </Flex>
                <Flex justifyContent={'space-between'} alignItems={'center'} px={10} width={{ 'lg': '200px', 'md': '400px', 'sm': '95%' }} py={1} rounded={'md'} height={'60px'} bgColor={'white'}>

                    <input

                        type='checkbox'
                        onChange={() => setIsLetter(!isLetter)}
                    />

                    <Text>Letters</Text>
                </Flex>



            </Box>

        </Box>
    )
}
