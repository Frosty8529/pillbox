import React from 'react'
import { render } from 'react-dom'
import { View, Text, Image } from 'react-native'
import { icons } from '../../../constants'
import ReactDOM from 'react-dom';

import styles from './medicineSlot.style'

const Slot = (props) => {
    // const slot1 = 0
    // const slot2 = 1
    // const slot3 = 1
    // const slot4 = 0

    console.log(props.slot1);

    return (
        <View style={styles.container}>
            <Text style={styles.headText}>Medicine Slot</Text>
            <View style={styles.slotContainer}>
                <View style={styles.slot1}>
                    <Text style={styles.slotText}>Slot 1</Text>
                    <View style={styles.pillCheck}>
                        <Image
                            source={props.slot1 === "0" ? icons.xMarkRed:icons.checkMarkSuccess}
                            resizeMode="contain"
                            style={styles.icon}
                        />
                        <Text style={styles.caption}>{props.slot1 === "0" ? "Empty":"Available"}</Text>
                    </View>
                </View>
                <View style={styles.slot2}>
                    <Text style={styles.slotText}>Slot 2</Text>
                    <View style={styles.pillCheck}>
                        <Image
                            source={props.slot2 === "0" ? icons.xMarkRed:icons.checkMarkSuccess}
                            resizeMode="contain"
                            style={styles.icon}
                        />
                        <Text style={styles.caption}>{props.slot2 === "0" ? "Empty":"Available"}</Text>
                    </View>
                </View>
                <View style={styles.slot3}>
                    <Text style={styles.slotText}>Slot 3</Text>
                    <View style={styles.pillCheck}>
                        <Image
                            source={props.slot3 === "0" ? icons.xMarkRed:icons.checkMarkSuccess}
                            resizeMode="contain"
                            style={styles.icon}
                        />
                        <Text style={styles.caption}>{props.slot3 === "0" ? "Empty":"Available"}</Text>
                    </View>
                </View>
                <View style={styles.slot4}>
                    <Text style={styles.slotText}>Slot 4</Text>
                    <View style={styles.pillCheck}>
                        <Image
                            source={props.slot4 === "0" ? icons.xMarkRed:icons.checkMarkSuccess}
                            resizeMode="contain"
                            style={styles.icon}
                        />
                        <Text style={styles.caption}>{props.slot4 === "0" ? "Empty":"Available"}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Slot