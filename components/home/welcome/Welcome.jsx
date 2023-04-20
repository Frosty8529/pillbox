import React from 'react'
import { 
  View, 
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList
 } from 'react-native'
 import { useRouter } from 'expo-router'

import styles from './welcome.style'
import { icons, SIZES } from '../../../constants'

const date = [{ num: "23", day: "Thu" }, { num: "24", day: "Fri" }, { num: "25", day: "Sat" }, { num: "26", day: "Sun" }, { num: "27", day: "Mon" }, { num: "28", day: "Tue" }, { num: "29", day: "Wed" }]

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

const d = new Date();
let dayy = days[d.getDay()]
const dayyy = new Date(d).setDate(18)

const tdMonth = new Date().toLocaleString("en-US", { month: "long" })
const tdDate = new Date().toLocaleString("en-US", { day : '2-digit'})
const tdYear = new Date().getFullYear()

const Welcome = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.headericon}>
        <Text style={styles.header}>{tdMonth} {tdYear}</Text>
        <TouchableOpacity style={styles.btnicon}>
          <Image 
            source={icons.chevronDown} 
            resizeMode = "contain"
            style={{ width: 24, height: 24 }}
         />
        </TouchableOpacity>
      </View>

      <View style={styles.dateContainer}>
        <FlatList
          data={date}
          contentContainerStyle={{ columnGap: SIZES.small}}
          horizontal
          renderItem={({ item }) => (
            <View style={item.num === tdDate ? styles.dateBlockAccent:styles.dateBlock}>
              <Text style={ item.num === tdDate ? styles.h3Accent:styles.h3}>{item.num}</Text>
              <Text style={ item.num === tdDate ? styles.labelAccent:styles.label}>{item.day}</Text>
            </View>
          )}
        />
      </View>

    </View>
  )
}

export default Welcome