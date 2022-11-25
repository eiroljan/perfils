import { Flex, Heading, Text } from '@chakra-ui/layout'
import { Grid, GridItem , Box, Image, StarIcon, Badge, Spacer} from '@chakra-ui/react'
import React from 'react'
import { Layout } from '../../components/Layout'
import { Chart } from "react-google-charts";

export const cluster = [
  [
    "Month",
    "Male",
    "Female",
  ],

  ["2019", 30, 20,],
  ["2020", 50, 60,],
  ["2021", 50, 65,],
  ["2022", 60, 80,],
];

export const title = {
  title: "Number of Male and Female",
  vAxis: { title: "" },
  hAxis: { title: "Month" },
  seriesType: "bars",
  series: { 5: { type: "line" } },
};


export const data = [
    [
      "Month",
      "Positive",
      "Nagative",
      "Average",
    ],

    ["2019",  522, 998, 614.6],
    ["2020",  599, 1268, 682],
    ["2021",  587, 807, 623],
    ["2022",  615, 968, 609.4],
  ];
  
  export const options = {
    title: "",
    vAxis: { title: "" },
    hAxis: { title: "Month" },
    seriesType: "bars",
    series: { 5: { type: "line" } },
  };

  export const place = [
    ["Brgy", "Population",],
    ["Matina", 20],
    ["Toril", 10],
    ["Buhangin", 30],
    ["Bolivard", 40],
  ];
  
  export const area = {
    title: "Most Common area",
    chartArea: { width: "50%" },
    colors: ["#b0120a", "#ffab91"],
    hAxis: {
      title: "Total Population",
      minValue: 0,
    },
    // vAxis: {
    //   title: "City",
    // },
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
                data={cluster}
                options={title}
            />
            <Grid templateColumns='repeat(4, 1fr)' gap={6}>
              <GridItem w='100%' h='100'bg='#00E7FF' rounded='md'>
                <Text fontSize='3xl' m={6} as='b'>10</Text>
                <br />
                <Text as='b' m={5}>Age <span>{"<"}</span> 18</Text>
              </GridItem>
              <GridItem w='100%' h='100'bg='#00E7FF' rounded='md'>
                <Text fontSize='3xl' m={6} as='b'>80</Text>
                <br />
                <Text as='b' m={5}>Age <span>{">"}</span> 18</Text>
              </GridItem>
              <GridItem w='100%' h='100'bg='#00E7FF' rounded='md'>
                <Text fontSize='3xl' m={6} as='b'>30</Text>
                <br />
                <Text as='b' m={5}>Single</Text>
              </GridItem>
              <GridItem w='100%' h='100'bg='#00E7FF' rounded='md'>
                <Text fontSize='3xl' m={6} as='b'>20</Text>
                <br />
                <Text as='b' m={5}>Married</Text>
              </GridItem>
            </Grid>
              <Chart
                  chartType="ComboChart"
                  width="100%"
                  height="400px"
                  data={data}
                  options={options}
                />
             <Chart
                chartType="BarChart"
                width="100%"
                height="400px"
                data={place}
                options={area}
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
