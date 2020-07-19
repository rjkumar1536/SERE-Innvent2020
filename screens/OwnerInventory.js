import { ListItem } from 'react-native-elements'
import { View } from 'react-native'
import AddEquipment from './AddEquipment';
import React from 'react'
const list = [
    {
      name: 'Crane XVW-1670',
      avatar_url: 'https://constructionreviewonline.com/wp-content/uploads/2015/06/cranes.jpg',
      subtitle: 'Total Equipments: 20',
      value : "21"
    },
    {
      name: 'Excavator',
      avatar_url: 'https://i.ytimg.com/vi/XN7CWdXrPto/maxresdefault.jpg',
      subtitle: 'Total Equipments : 61',
      value : "56"
    },
    {
      name: 'Bulldozer',
      avatar_url: 'https://i.ytimg.com/vi/XN7CWdXrPto/maxresdefault.jpg',
      subtitle: 'Total Equipments : 7',
      value : "5"
    }
  ]
const OwnerInventory = ({ navigation }) => {
    return (
        <View>
             {
            list.map((l, i) => (
            <ListItem
                key={i}
                leftAvatar={{ source: { uri: l.avatar_url } }}
                title={l.name}
                badge = {{ value: l.value, status : "warning", textStyle: { color: 'white', fontSize : 15 }, containerStyle: { marginTop: -20 } }}
                subtitle={l.subtitle}
                bottomDivider
                chevron
                onPress = {()=>navigation.navigate('AddEquipment', {name : l.name, spec : "telematics Enabled"})}
            />
            ))
        }
        </View>
    )
}

export default OwnerInventory;