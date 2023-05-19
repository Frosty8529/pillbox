import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator, Image } from 'react-native'
import { useRouter } from 'expo-router'

import styles from './popularjobs.style'
import { COLORS, SIZES, icons, images } from '../../../constants'

import { getDatabase, ref, set, update, child, get, onValue } from 'firebase/database';
import { app } from '../../../components/config';

const Popularjobs = ({ item }) => {


  // console.log('testt', tdTake)

  return (
    <View style={styles.container}>

      <View style={styles.boxContainer}>
        {/* <View stty */}
        <Text style={styles.header}>{item.title} | {item.time[0]}:{item.time[1]} {item.time[2]}</Text>
        {/* <View style={{flexDirection: 'row'}}> */}
        <Text style={styles.label}>{item.slot1 !== "" ? `Slot 1 takes ${item.slot1} pills\n` : null} {item.slot2 !== "" ? `Slot 2 takes ${item.slot2} pills\n` : null} {item.slot3 !== "" ? `Slot 3 takes ${item.slot3} pills\n` : null} {item.slot4 !== "" ? `Slot 4 takes ${item.slot4} pills\n` : null}</Text>
        {/* // <Text>{item.slot2 !== "" ? `Slot 2 takes ${item.slot2} pills` : null}</Text> || */}
        {/* // <Text>{item.slot3 !== "" ? `Slot 3 takes ${item.slot3} pills` : null}</Text> || */}
        {/* // <Text>{item.slot4 !== "" ? `Slot 4 takes ${item.slot4} pills` : null}</Text>} */}
        {/* </View> */}
        {/* <View style={styles.repeatContainer}>
          <FlatList
            data={select}
            contentContainerStyle={{ columnGap: 4 }}
            horizontal
            renderItem={({ item }) => (
              <Pressable
                style={styles.dateContainer(item.selected)}
                onPress={() => selectDate(item)}>
                <Text style={styles.dateLabel(item.selected)}>{item.value}</Text>
              </Pressable>
            )}
          />
        </View> */}
      </View>



      {/* <View style={styles.scheduleContainer}>
        <View style={styles.labelicon}>
          <View style={styles.icon}>
            <Image
              source={icons.clock}
              resizeMode="contain"
              style={{ width: 24, height: 24 }}
            />
          </View>
          <Text style={styles.label}>09:00</Text>
        </View> */}

      {/* <View style={styles.drugContainer}>
          <Image 
            source={images.pills} 
            resizeMode = "cover"  
            style={{ width: 60, height: 60, borderRadius: 8 }}
          />
          <View style={styles.drugTextContainer}>
            <Text style={styles.labelBold}>Tylenol</Text>
            <Text style={styles.captionHint}>2 pills</Text>
          </View>
        </View>
      </View> */}

      {/* <View style={styles.scheduleContainer}>
        <View style={styles.labelicon}>
          <View style={styles.icon}>
            <Image
              source={icons.clock}
              resizeMode="contain"
              style={{ width: 24, height: 24 }}
            />
          </View>
          <Text style={styles.label}>12:00</Text>
        </View> */}

      {/* <View style={styles.drugContainer}>
          <Image
            source={images.pills}
            resizeMode="cover"
            style={{ width: 60, height: 60, borderRadius: 8 }}
          />
          <View style={styles.drugTextContainer}>
            <Text style={styles.labelBold}>Tylenol</Text>
            <Text style={styles.captionHint}>2 pills</Text>
          </View>
        </View> */}

      {/* <View style={styles.drugContainer}>
          <Image
            source={images.pills}
            resizeMode="cover"
            style={{ width: 60, height: 60, borderRadius: 20 }}
          />
          <View style={styles.drugTextContainer}>
            <Text style={styles.labelBold}>Tylenol</Text>
            <Text style={styles.captionHint}>2 pills</Text>
          </View>
        </View> */}

      {/* </View> */}

    </View>
  )
}

export default Popularjobs
