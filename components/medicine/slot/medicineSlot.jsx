import React from 'react'
import { View, Text } from 'react-native'

import styles from './medicineSlot.style'

const Slot = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.headText}>Medicine Slot</Text>
        <View style={styles.slotContainer}>
            <View style={styles.slot1}>
                <Text style={styles.slotText}>Slot 1</Text>
            </View>
            <View style={styles.slot2}>
                <Text style={styles.slotText}>Slot 2</Text>
            </View>
            <View style={styles.slot3}>
                <Text style={styles.slotText}>Slot 3</Text>
            </View>
            <View style={styles.slot4}>
                <Text style={styles.slotText}>Slot 4</Text>
            </View>
            <View style={styles.slot5}>
                <Text style={styles.slotText}>Slot 5</Text>
            </View>
        </View>
    </View>
  )
}

export default Slot