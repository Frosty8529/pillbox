import React from 'react'
import { TouchableOpacity, Image, View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Stack, useRouter } from 'expo-router';
import { COLORS, icons, images, SIZES } from '../../../constants';

import styles from './footer.style'

const Tab = createBottomTabNavigator();

const Footer = ({handlePress}) => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <TouchableOpacity 
      style={styles.saveBtn}
      onPress={handlePress}>
        <Text style={styles.btnText}>Save</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Footer