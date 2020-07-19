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

  const Utilization = ({navigation})=>{
      return (
        <View style={styles.container}>
        <ScrollView horizontal={true} scrollEnabled={true}>
            <View style = {styles.table}>
                <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
                <Row data={tableHead} widthArr={widthArr} style={styles.header} textStyle={styles.text}/>
                </Table>
                <ScrollView style={styles.dataWrapper}>
                <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
                    {
                    tableData.map((rowData, index) => (
                        <Row
                        key={index}
                        data={rowData}
                        widthArr={widthArr}
                        style={[styles.row, index%2 && {backgroundColor: '#f2f2f2'}]}
                        textStyle={styles.text}
                        />
                    ))
                    }
                </Table>
                </ScrollView>
            </View>
          </ScrollView>
      </View>
      )
    }

  export default Utilization;

  const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff', alignItems: 'center', justifyContent : 'center' },
    header: { height: 50, backgroundColor: '#FEB12C'},
    text: { textAlign: 'center', fontWeight: '100' },
    dataWrapper: { marginTop: -1 },
    row: { height: 40},
    table : {width:{screenWidth}, margin : 'auto'},
    line : {width : 600, margin : 'auto', marginTop : 100}
    
  });