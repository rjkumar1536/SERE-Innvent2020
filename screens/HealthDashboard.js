import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";
  import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
  import React from 'react';
  import {View, Text, StyleSheet, Dimensions, Image, ScrollView } from 'react-native';
  const screenWidth = Dimensions.get("window").width;
  const tableHead =  ['KPIs', 'Exacavator', 'ForkLifter', 'Loader', 'Crane', 'Road Roller']
  const widthArr =  [150, 120, 120, 120, 120,120];
  const tableData = [['DRIVE TIME', '235:14:25', '178:15:47', '180:18:56','567:28:36','400:56:45'],
                     ['Pending HOS', '4', '3', '5', '12', '14' ],
                     ['DISTANCE TRAVELED', '58.16 Miles', '4.23 Miles', '24.77 Miles', '90.00 Miles', '78.67 Miles'],
                     ['IDLING', '67:35:47','45:77:23', '13:33:12', '07:00:00', '01:09:17'],
                     ['SPEEDING', '33 Incidents', '14 Incidents', '88 Incidents', '1800 Incidents', '800 Incidents'],
                     ['HARD BREAKING', '56 Incidents', '110 Incidents', '23 Incidents', '39 Incidents', '11 Incidents'],
                     ['ACCELERATION', '28 Incidents', '67 Incidents', '78 Incidents', '170 Incidents', '33 Incidents'],
                     ['Fuel Economy', '8 Litre/Hour', '15 Litre/Hour', '7 Litre/Hour', '8 Litre/Hour', '2 Litre/Hour'],
                     ['Engine Efficiency', '58%', '67%','34%', '66%', '45%']
                    ]

  const data = [
    {
      name: "Seoul",
      population: 21500000,
      color: "rgba(131, 167, 234, 1)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Toronto",
      population: 2800000,
      color: "#F00",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Beijing",
      population: 527612,
      color: "red",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "New York",
      population: 8538000,
      color: "#ffffff",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Moscow",
      population: 11920000,
      color: "rgb(0, 0, 255)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    }
  ];

  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  };

  const HealthDashboard = ({navigation})=>{
      return (
        <View style={styles.container}>
        <ScrollView horizontal = {true} scrollEnabled={true}>
        <View style = {styles.line}> 
            <Text style = {{fontWeight : 'bold', fontSize : 30, marginBottom: 10}}>Total Revenue  </Text>
            <LineChart
            data={{
                labels: ["January", "February", "March", "April", "May", "June"],
                datasets: [
                {
                    data: [
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100
                    ]
                }
                ]
            }}
            width={600} // from react-native
            height={220}
            yAxisLabel="$"
            yAxisSuffix="k"
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                borderRadius: 16
                },
                propsForDots: {
                r: "6",
                strokeWidth: "2",
                stroke: "#ffa726"
                }
            }}
            bezier
            style={{
                marginVertical: 8,
                borderRadius: 16,
                fontSize : 100
            }}
            />
        </View>
        {/* <PieChart
            data={data}
            width={screenWidth}
            height={220}
            chartConfig={chartConfig}
            accessor="population"
            backgroundColor="transparent"
            paddingLeft="15"
            absolute
            inner
            /> */}
          </ScrollView>
      </View>
      )
    }

  export default HealthDashboard;

  const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff', alignItems: 'center', justifyContent : 'center' },
    header: { height: 50, backgroundColor: '#537791' },
    text: { textAlign: 'center', fontWeight: '100' },
    dataWrapper: { marginTop: -1 },
    row: { height: 40, backgroundColor: '#E7E6E1' },
    table : {width:{screenWidth}, margin : 'auto'},
    line : {width : 600, margin : 'auto', marginTop : 100}
    
  });