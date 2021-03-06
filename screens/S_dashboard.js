import React,{useState,useEffect} from "react";
import { SearchBar, Badge } from 'react-native-elements';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  Button,
  ScrollView,
} from "react-native";
import NumericInput from 'react-native-numeric-input'

const S_dashboard = ({ navigation }) => {
    const [value, setValue] =  useState(1)
    const [search, updateSearch] = useState('');
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView >
      <SearchBar
       containerStyle={{backgroundColor: 'white', borderWidth: 1, borderRadius: 5}}
        placeholder="Type Here..."
        onChangeText={(e)=>updateSearch(e)}
        value={search}
        showLoading = "true"
      />
        <View style={styles.Details}>
          <Image
            style={styles.image}
            source={{
              uri:
                "https://constructionreviewonline.com/wp-content/uploads/2015/06/cranes.jpg",
            }}
          />
        <View style={styles.desc}>
          <Text style={styles.text}>Crane</Text>
          <Text style={styles.text}>Waiting for Transport</Text>
          <Text style={styles.text}>01-08-2020</Text>
          <View style={styles.qty}>
          <Text style={styles.text}>Quantity </Text>
          <Text> 1</Text>
          </View>
          <View style={styles.qty}>
          <Text style={styles.text}>Health Indicator </Text>
          <Text style = {{height : 15 , width : 15, borderRadius: 15, backgroundColor : "red", lineHeight : 10}}/>
          </View>

        </View>
        </View>
        <View style={styles.Details}>
          <Image
            style={styles.image}
            source={{uri:'https://media.stokker.com/prod/l/853/144736853'}}
          />
        <View style={styles.desc}>
          <Text style={styles.text}>Excavator</Text>
          <Text style={styles.text}>In Transit</Text>
          <Text style={styles.text}>01-08-2020</Text>
          <View style={styles.qty}>
          <Text style={styles.text}>Quantity </Text>
          <Text> 5</Text>
          </View>
          <View style={styles.qty}>
          <Text style={styles.text}>Health Indicator </Text>
          <Text style = {{height : 15 , width : 15, borderRadius: 15, backgroundColor : "green", lineHeight : 10}}/>
          </View>
        </View>
        </View>
        <View style={styles.Details}>
          <Image
            style={styles.image}
            source={{uri:'https://i.ytimg.com/vi/XN7CWdXrPto/maxresdefault.jpg'}}
          />
        <View style={styles.desc}>
          <Text style={styles.text}>Bulldozer</Text>
          <Text style={styles.text}>Rented</Text>
          <Text style={styles.text}>01-08-2020</Text>
          <View style={styles.qty}>
          <Text style={styles.text}>Quantity </Text>
          <Text> 2</Text>
          </View>
          <View style={styles.qty}>
          <Text style={styles.text}>Health Indicator </Text>
          <Text style = {{height : 15 , width : 15, borderRadius: 15, backgroundColor : "yellow", lineHeight : 10}}/>
          </View>
        </View>
        </View>
      
      </ScrollView>
  
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
  },
  image: {
    width: 100,
    height: 100,
    margin: 10,
  },
  Details: {
    flexDirection: "row",
  },

  desc: {
    flexDirection: "column",
    margin:10
  },
  qty:{
      flexDirection:'row'
  },
  footer:{
    position:'absolute',
    bottom:0,
    left:0,
    right:0,
    
}
});

export default S_dashboard;
