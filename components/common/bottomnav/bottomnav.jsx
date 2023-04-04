import React from 'react'
import { TouchableOpacity, Image, View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import styles from './bottomnav.style'

const Tab = createBottomTabNavigator();

const bottomNav = ({ iconUrlL, textL, iconUrlM, textM, iconUrlR, textR, dimension, borderRadius, handlePress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
        <Image 
          source={iconUrlL} 
          resizeMode = "cover"
          style={{ width: dimension, height: dimension, borderRadius: borderRadius }}
        />
        <Text style={styles.caption}>{textL}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
        <Image 
          source={iconUrlM} 
          resizeMode = "cover"
          style={{ width: dimension, height: dimension, borderRadius: borderRadius }}
        />
        <Text>{textM}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
        <Image 
          source={iconUrlR} 
          resizeMode = "cover"
          style={{ width: dimension, height: dimension, borderRadius: borderRadius }}
        />
        <Text>{textR}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default bottomNav