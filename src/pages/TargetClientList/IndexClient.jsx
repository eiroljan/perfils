import {
    Flex,
    Spacer,
    HStack,
    Heading,
    Input, Box
} from '@chakra-ui/react'
import { Layout } from '../../components/Layout'
import React, { useEffect, useState, useMemo } from 'react'
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../utils/init-firebase";
import View from "./View";
import UpdateClient from "./UpdateClient";
import Update from "./Update";
import Create from "./Create";
import DataTable from "react-data-table-component";
import moment from "moment";


export default function IndexClient() {
    const [filterText, setFilterText] = useState("");
    const [targetClient, setTargetClient] = useState([]);
    const Data = () => {
        const usersCollectionRef = collection(db, "workers");
        onSnapshot(usersCollectionRef, (snapshot) => {
            let userData = []
            snapshot.docs.forEach(doc => {
                userData.push({ ...doc.data(), id: doc.id })
            })
            setTargetClient(userData)
        })
    };

    useEffect(() => {
        Data();
    }, []);

    const columns = useMemo(
        () => [
            {
                name: "Identification Number",
                selector: (row) => row.identification,
                sortable: true,
            },
            {
                name: "First Name",
                selector: (row) => row.firstName,
                sortable: true,
            },
            {
                name: "Middle Name",
                selector: (row) => row.middleName,
                sortable: true,
            },
            {
                name: "Last Name",
                selector: (row) => row.lastName,
                sortable: true,
            },
            {
                name: "Sex",
                selector: (row) => row.sex,
                sortable: true,
            },
            {
                name: "Civil Status",
                selector: (row) => row.civilStatus,
                sortable: true,
            },
            {
                name: "Establishment",
                selector: (row) => row.establishment,
                sortable: true,
            },
            {
                name: "Phone",
                selector: (row) => row.phone,
                sortable: true,
            },
        //    {
        //         name: "Appointment",
        //         selector: (row) => moment(row.FormOneA.physicalExamination.lmp.seconds*1000 ).add(1, 'day').add(255, 'days').format('LLL'),
        //         selector: (row) => moment(row.createdAt.seconds*1000).add(1, 'day').add(360, 'days').format('LL'),
        //         sortable: true,
        //     },
            {
                name: "Update",
                cell: (works) => <HStack>
                    <View works={works} />
                    <Update works={works} />

                </HStack>
            },
        ],
        []
    );


    return (

        <Layout>
            <Flex pb={5}>
                <Heading >
                    Workers
                </Heading>
            </Flex>
            <Box borderWidth='1px' p={10} borderRadius='lg'>
                <Flex pb={5}>
                    {/* <Box>
                        <Create />
                    </Box> */}
                    <Spacer />
                    <Box>
                        <Input
                            type="text"
                            placeholder="Search List"
                            onChange={(e) => setFilterText(e.target.value)}
                        />
                    </Box>
                </Flex>
                <DataTable
                    highlightOnHover
                    pagination
                    direction="ltr"
                    responsive
                    striped
                    columns={columns}
                    data={
                        targetClient.filter((value) => {
                            if (filterText === "") {
                                return value;
                            } else if (
                                value.firstName && value.firstName
                                    .toLowerCase()
                                    .includes(filterText.toLowerCase())
                            ) {
                                return value;
                            } else if (
                                value.middleName && value.middleName
                                    .toLowerCase()
                                    .includes(filterText.toLowerCase())
                            ) {
                                return value;
                            } else if (
                                value.lastname && value.lastname
                                    .toLowerCase()
                                    .includes(filterText.toLowerCase())
                            ) {
                                return value;
                            }
                        })
                    }

                />
            </Box>
        </Layout>
    )
}
