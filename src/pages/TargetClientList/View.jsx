//Temporary Modal To Display Client Information
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    Tooltip,
    Text, Heading, HStack, Box, Center, Flex, Spacer, Stack, Wrap, WrapItem, Avatar
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { ViewIcon } from '@chakra-ui/icons'
import DisplayField from '../components/Fields/DisplayField'




export default function ViewPatient({ works }) {
    const [data, setData] = useState([works]);
    console.log(setData)

    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Tooltip
                label="View Details"
                aria-label='A tooltip'
            >
                <Button
                    colorScheme='teal'
                    onClick={() => { onOpen() }}
                >
                    <ViewIcon />
                </Button>
            </Tooltip>
            <Modal isOpen={isOpen} onClose={onClose} size="6xl" scrollBehavior='inside'>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Account Details</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        {data.map(obj => (
                            <Stack spacing={5}>
                                <Center>
                                    <Wrap>
                                        <WrapItem>
                                        <Avatar size='2xl' src='https://bit.ly/broken-link' />
                                        </WrapItem>
                                    </Wrap>
                                </Center>
                                <Flex>
                                    {/* <Box>
                                        <DisplayField label='Date of Registration' value={obj.firstname} />
                                    </Box>
                                    <Spacer />
                                    <Box>
                                        <DisplayField label='Family Serial No.' value={obj.first} />
                                    </Box>
                                    <Spacer /> */}
                                    <Box>
                                        <Heading as='h4' size='md' color='grey'>
                                            Name
                                        </Heading>
                                        <Text fontSize='md' color="blue.500">{obj.firstName} {obj.middleName} {obj.lastName}</Text>
                                    </Box>
                                    <Spacer />
                                    <Box>
                                        <DisplayField label='Address' value="test"/>
                                    </Box>
                                    <Spacer />
                                    <Box>
                                        <DisplayField label='Eductaional Attainment' value='College'/>
                                    </Box>
                                    <Spacer />
                                    <Box>
                                        <DisplayField label='Ethnic' value='??????????'/>
                                    </Box>
                                </Flex>
                                <Flex>
                                    <Box>
                                        <DisplayField label='Date of Registration' value="mm/dd/yy" />
                                    </Box>
                                    <Spacer />
                                    <Box>
                                        <DisplayField label='Identification No.' value="123813991" />
                                    </Box>
                                    <Spacer />
                                    <Box>
                                        <DisplayField label='Gender' value="male"/>
                                    </Box>
                                    <Spacer />
                                    <Box>
                                        <DisplayField label='Religion' value="Catholic"/>
                                    </Box>
                                </Flex>
                                <Flex>
                                    <Box>
                                        <DisplayField label='Status' value="Active"/>
                                    </Box>
                                    <Spacer />
                                    <Box>
                                        <DisplayField label='Civil Status'/>
                                    </Box>
                                    <Spacer/>
                                    <Box>
                                        <DisplayField label='Nationality'/>
                                    </Box>
                                </Flex>
                            </Stack>
                        ))}
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}