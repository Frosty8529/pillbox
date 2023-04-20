import React from 'react'
import { View, Text, Image } from 'react-native'
import { icons } from '../../../constants'

import styles from './medicineSlot.style'

const Slot = ({slot1}, {slot2}) => {
    // const slot1 = 0
    // const slot2 = 1
    const slot3 = 1
    const slot4 = 0
    const slot5 = 0

    return (
        <View style={styles.container}>
            <Text style={styles.headText}>Medicine Slot</Text>
            <View style={styles.slotContainer}>
                <View style={styles.slot1}>
                    <Text style={styles.slotText}>Slot 1</Text>
                    <View style={styles.pillCheck}>
                        <Image
                            source={slot1 === 0 ? icons.xMarkRed:icons.checkMarkSuccess}
                            resizeMode="contain"
                            style={styles.icon}
                        />
                        <Text style={styles.caption}>{slot1 === 0 ? "Empty":"Available"}</Text>
                    </View>
                </View>
                <View style={styles.slot2}>
                    <Text style={styles.slotText}>Slot 2</Text>
                    <View style={styles.pillCheck}>
                        <Image
                            source={slot2 === 0 ? icons.xMarkRed:icons.checkMarkSuccess}
                            resizeMode="contain"
                            style={styles.icon}
                        />
                        <Text style={styles.caption}>{slot2 === 0 ? "Empty":"Available"}</Text>
                    </View>
                </View>
                <View style={styles.slot3}>
                    <Text style={styles.slotText}>Slot 3</Text>
                    <View style={styles.pillCheck}>
                        <Image
                            source={slot3 === 0 ? icons.xMarkRed:icons.checkMarkSuccess}
                            resizeMode="contain"
                            style={styles.icon}
                        />
                        <Text style={styles.caption}>{slot3 === 0 ? "Empty":"Available"}</Text>
                    </View>
                </View>
                <View style={styles.slot4}>
                    <Text style={styles.slotText}>Slot 4</Text>
                    <View style={styles.pillCheck}>
                        <Image
                            source={slot4 === 0 ? icons.xMarkRed:icons.checkMarkSuccess}
                            resizeMode="contain"
                            style={styles.icon}
                        />
                        <Text style={styles.caption}>{slot4 === 0 ? "Empty":"Available"}</Text>
                    </View>
                </View>
                <View style={styles.slot5}>
                    <Text style={styles.slotText}>Slot 5</Text>
                    <View style={styles.pillCheck}>
                        <Image
                            source={slot5 === 0 ? icons.xMarkRed:icons.checkMarkSuccess}
                            resizeMode="contain"
                            style={styles.icon}
                        />
                        <Text style={styles.caption}>{slot5 === 0 ? "Empty":"Available"}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Slot