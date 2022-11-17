import { Flex, Heading, Text } from '@chakra-ui/layout'
import { Grid, GridItem , Box, Image, StarIcon, Badge} from '@chakra-ui/react'
import React from 'react'
import { Layout } from '../../components/Layout'
import { Chart } from "react-google-charts";

export const cluster = [
  [
    "Month",
    "Positive Male",
    "Negative Male",
    "Positive Female",
    "Negative Female",
    "Average",
  ],

  ["2019", 120, 138, 122, 123, 100],
  ["2020", 135, 112, 110, 122, 110],
  ["2021", 125, 116, 157, 110, 120],
  ["2022", 110, 111, 125, 121, 100],
];

export const title = {
  title: "Number of positive and negative",
  vAxis: { title: "" },
  hAxis: { title: "Month" },
  seriesType: "bars",
  series: { 5: { type: "line" } },
};


export const data = [
    [
      "Month",
      "Male",
      "Female",
      "Positive",
      "Nagative",
      "Average",
    ],

    ["2019", 165, 938, 522, 998, 614.6],
    ["2020", 135, 1120, 599, 1268, 682],
    ["2021", 157, 1167, 587, 807, 623],
    ["2022", 139, 1110, 615, 968, 609.4],
  ];
  
  export const options = {
    title: "Tested",
    vAxis: { title: "" },
    hAxis: { title: "Month" },
    seriesType: "bars",
    series: { 5: { type: "line" } },
  };

  


export default function Index() {

   



    return (
        <Layout>
            <Flex>
                <Heading pb={5}>
                    REPORTS
                </Heading>
            </Flex>
            <Chart
                chartType="ComboChart"
                width="100%"
                height="400px"
                data={data}
                options={options}
            />
             <Chart
                chartType="ComboChart"
                width="100%"
                height="400px"
                data={cluster}
                options={title}
            />

            {/* <Grid templateColumns='repeat(5, 1fr)' gap={6} mt={10}>
            <GridItem w='100%' h='10' bg='blue.500' />
            <GridItem w='100%' h='10' bg='blue.500' />
            <GridItem w='100%' h='10' bg='blue.500' />
            <GridItem w='100%' h='10' bg='blue.500' />
            <GridItem w='100%' h='10' bg='blue.500' />
            </Grid>
            <Grid
                h='200px'
                templateRows='repeat(2, 1fr)'
                templateColumns='repeat(5, 1fr)'
                gap={4}
                mt={10}
            >
                <GridItem rowSpan={2} colSpan={1} bg='tomato' />
                <GridItem colSpan={2} bg='papayawhip' />
                <GridItem colSpan={2} bg='papayawhip' />
                <GridItem colSpan={4} bg='tomato' />
            </Grid> */}
            
        </Layout>
    )
}
