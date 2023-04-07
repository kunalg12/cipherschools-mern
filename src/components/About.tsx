import { Flex, Text, Textarea } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react'
import profile_cover from '../../public/ProfileCover..png'
import Modal from './Modal';

function About() {
  return (
    <>
    <Flex>
        <Flex position='absolute'>
            <Image id='bg-cover' src={profile_cover} alt='img'  priority/>
        </Flex>
        <Text>About me</Text>
        {/* <Modal/> */}
    </Flex>
    </>
  )
}

export default About;