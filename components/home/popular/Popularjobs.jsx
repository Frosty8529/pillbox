import React from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator, Image } from 'react-native'
import { useRouter } from 'expo-router'

import styles from './popularjobs.style'
import { COLORS, SIZES, icons, images } from '../../../constants'

const Popularjobs = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.header}>To take</Text>
      </View>

      <View style={styles.scheduleContainer}>
        <View style={styles.labelicon}>
          <View style={styles.icon}>
            <Image 
              source={icons.clock} 
              resizeMode = "contain"
              style={{ width: 24, height: 24 }}
            />
          </View>
          <Text style={styles.label}>09:00</Text>
        </View>

        <View style={styles.drugContainer}>
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
      </View>

      <View style={styles.scheduleContainer}>
        <View style={styles.labelicon}>
          <View style={styles.icon}>
            <Image 
              source={icons.clock} 
              resizeMode = "contain"
              style={{ width: 24, height: 24 }}
            />
          </View>
          <Text style={styles.label}>12:00</Text>
        </View>

        <View style={styles.drugContainer}>
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

        <View style={styles.drugContainer}>
          <Image 
            source={images.pills} 
            resizeMode = "cover"  
            style={{ width: 60, height: 60, borderRadius: 20 }}
          />
          <View style={styles.drugTextContainer}>
            <Text style={styles.labelBold}>Tylenol</Text>
            <Text style={styles.captionHint}>2 pills</Text>
          </View> 
        </View>
      </View>

      <View style={styles.scheduleContainer}>
        <View style={styles.labelicon}>
          <View style={styles.icon}>
            <Image 
              source={icons.clock} 
              resizeMode = "contain"
              style={{ width: 24, height: 24 }}
            />
          </View>
          <Text style={styles.label}>18:00</Text>
        </View>

        <View style={styles.drugContainer}>
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

        <View style={styles.drugContainer}>
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
      </View>

    </View>
  )
}

export default Popularjobs
