import React from 'react'
import { TouchableOpacity, Image, View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Stack, useRouter } from 'expo-router';
import { COLORS, icons, images,  SIZES } from '../../../constants';

import styles from './bottomnav.style'

const Tab = createBottomTabNavigator();

const bottomNav = ({icon1, icon2, icon3, style1, style2, style3 }) => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.btnContainer} 
        onPress={() => router.push(`/`)}>
        <Image 
          source={icon1} 
          resizeMode = "contain"
          style={styles.icon}
        />
        <Text style={style1}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.btnContainer} 
        onPress={() => router.push(`/medicine/medicine`)}>
        <Image 
          source={icon2} 
          resizeMode = "contain"
          style={styles.icon}
        />
        <Text style={style2}>Medicine</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.btnContainer} 
        onPress={() => router.push(`/reminder/reminder`)}>
        <Image 
          source={icon3} 
          resizeMode = "contain"
          style={styles.icon}
        />
        <Text style={style3}>Reminder</Text>
      </TouchableOpacity>
    </View>
  )
}

export default bottomNav