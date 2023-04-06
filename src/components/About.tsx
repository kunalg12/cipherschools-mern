import { Flex, Textarea } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react'
import profile_cover from '../../public/ProfileCover..png'
import { relative } from 'path';

function About() {
  return (
    <>
    <Flex>
        <Flex position='relative'>
            <Image src={profile_cover} alt='img' width={1600} height={50}/>
                <h1>Kunal Gursal</h1>
        </Flex>
    </Flex>
    </>
  )
}

export default About;