import React, { useState } from 'react'
import { View, Text, Pressable, Switch } from 'react-native'
import { COLORS } from '../../constants'

import styles from './reminder.style'

const Reminder = ({ item }) => {
  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState)
  };

  return (
    <View>
      <Pressable style={styles.reminderList}>
        <View style={styles.details}>
          <Text style={styles.title} >{item.title}</Text>
          <Text style={styles.time}>{item.time}</Text>
          <View style={styles.days}>
            {item.days.map((value, index) => (
              <Text style={styles.caption}>{value}</Text>
            ))}
            <Text style={styles.caption}>| Slot</Text>
            {item.slot.map((value, index) => (
              <Text style={styles.caption}>{value}</Text>
            ))}
          </View>
        </View>

        <Switch
          trackColor={{ false: COLORS.textHint, true: COLORS.primary }}
          thumbColor={COLORS.white}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />

      </Pressable>
    </View>
  )
}

export default Reminder