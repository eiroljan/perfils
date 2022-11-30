import { Heading, Grid, GridItem, Textarea, Button, Flex, Box, Text, Stack, HStack, VStack, Image, Tag, Spacer} from '@chakra-ui/react'
import React from 'react'
import { useEffect, useState } from 'react'
import { Layout } from '../../components/Layout'
import { db } from '../../utils/init-firebase'
import { collection, getDocs, addDoc } from 'firebase/firestore'
import { useAuth } from '../../contexts/AuthContext'


function Feature({ title, desc, ...rest }) {
    return (
      <Box p={5} shadow='md' borderWidth='1px' {...rest}>
        <Heading fontSize='xl'>{title}</Heading>
        <Text mt={4}>{desc}</Text>
      </Box>
    )
  }




function Anouncement() {
    const { currentUser } = useAuth()
    console.log(currentUser)
    const [posts,setPost] = useState([])
    const [createPost, setCreatepost] = useState("")
    const usersCollection = collection(db,"announcements")
    
    const createAnnouncement = async () => {
        await addDoc(usersCollection, { description: createPost })
    }

    useEffect(() => {
        const getPost = async () => {
            const data = await getDocs(usersCollection)
            setPost(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        }
        getPost()
    })
  return (
    <Layout>
        <Heading>
            Anouncement
        </Heading>
        <Textarea placeholder='Announcement......' w="85%" onChange={(event) => {setCreatepost(event.target.value)}}/>
        <Button onClick={createAnnouncement} m='20px'>Submit</Button>
        {posts.map((post) => {
                    return(

                        <Flex>
                            <Box >
                            <Box maxW="400px" bg="white" p="6" border='1px' borderColor='gray.200' >
                            {/* <Image
                                src='https://www.planetware.com/wpimages/2020/03/world-most-beautiful-waterfalls-iguazu-falls.jpg'
                                alt=''
                                borderRadius='xl'
                                objectFit='cover'
                                mx='auto'
                            /> */}
                        {/* <HStack mt='5' spacing='3'>
                            {["Waterfall", "Nature"].map((item) => (
                                <Tag key={item} variant='outline'>{item}</Tag>
                            ))}
                        </HStack> */}
                        <Heading my='4' size='lg'>
                             Establishment
                        </Heading>
                        <Text>
                            {post.description}
                        </Text>
                        <Button>
                                Button
                        </Button>
                    </Box>
                </Box>
                            </Flex>
                    )
                })}
    </Layout>
  )
}

export default Anouncement