import React, {useState} from 'react'
import { View, Text, ScrollView, Pressable, Image, Switch } from 'react-native'

import { COLORS } from "../../../constants"
import styles from './medicineList.style'

const List = ({ item }) => {
  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState)
  };

  return (
    <View>
      <Pressable style={styles.medicineList} >
        <View>
          <Image
            style={styles.image}
            resizeMode="cover"
            source={{ uri: item.image }} />
        </View>

        <View style={styles.details} >
          <View style={styles.captionLabel} >
            <Text style={styles.captionAccent}>Slot {item.slot}</Text>
            <Text style={styles.captionHint}>| {item.pill} pills</Text>
          </View>

          <Text style={styles.label}>{item.name}</Text>
        </View>

        <Switch
          trackColor={{ false: COLORS.textHint, true: COLORS.primary }}
          thumbColor={COLORS.white}
          // ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
        

        

      </Pressable>
    </View>
  )
}

export default List