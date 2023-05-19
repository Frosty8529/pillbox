import React, { useState, useEffect } from 'react'
import { View, Text, Pressable, Switch, Image } from 'react-native'
import { Stack, useRouter, useLocalSearchParams } from 'expo-router';
import { COLORS, icons } from '../../constants'

import { getDatabase, ref, set, update, child, get, onValue, remove } from 'firebase/database';
import { app } from '../../components/config';

import styles from './reminder.style'
import { TouchableOpacity } from 'react-native-gesture-handler';

const Reminder = ({ item }) => {
  const router = useRouter();
  const [isEnabled, setIsEnabled] = useState(true);
  const db = getDatabase(app);
  // const [med, setMed] = useState('');

  // useEffect(() => {
  //   const db = getDatabase(app);
  //   const starCountRef = ref(db, 'medicine/');
  //   onValue(starCountRef, (snapshot) => {
  //     const reminderData = snapshot.val();
  //     console.log('og', reminderData)
  //     if (reminderData !== null) {
  //       setMed(reminderData)
  //     }
  //     // updateStarCount(postElement, data);
  //   });
  // }, [])

  // const medicine = Object.entries(med).map(([key, value]) => ({ key, value }))
  // console.log('teset', medicine[0])

  // reminder.map

  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState)

    // compareArrays = (medicine) => {
    //   for (var i = 0; i < medicine.length; i++) {
    //     for (var j = 1; j < medicine.length; j++) {
    //       medicine.map((item) => {
    //         if (item[i].value.slot !== item[j].value.slot) {
    //           if (item[i].value.status === item[j].value.status) {
    //             return alert('You already have medicine in this slot')
    //           }
    //         }
    //       })
    //     }
    //     j += 1;
    //   }
    // }

    // const db = getDatabase(app);
    const slotRef = ref(db, 'reminder/' + item.title);
    update(slotRef, { status: !isEnabled })
      .then(() => {
        console.log('Value updated in the database');
        console.log(item.title + " " + isEnabled)
      })
      .catch((error) => {
        console.log('Error updating value in the database:', error);
      });
  };


  const slot = [];

  if (item.slot1 !== "") {
    slot.push('1')
  }
  if (item.slot2 !== "") {
    slot.push('2')
  }
  if (item.slot3 !== "") {
    slot.push('3')
  }
  if (item.slot4 !== "") {
    slot.push('4')
  }
  slot.sort();

  console.log('time', item.time)

  const handlePress = () => {
    // const {additionalData} = router.params;
    router.push('/reminder/editReminder')
  }

  function deleteData () {
    remove(ref(db, 'reminder/' + item.title))
    alert('Remove')
  }

  return (
    <View>
      <Pressable style={styles.reminderList}>
        
        <View style={styles.details}>
          <Text style={styles.title} >{item.title}</Text>
          <Text style={styles.time}>{item.time[0]}:{item.time[1]} {item.time[2]} </Text>
          <View style={styles.days}>
            {item.days.map((value, index) => (
              <Text style={styles.caption}>{value}</Text>
            ))}
            <Text style={styles.caption}>| Slot</Text>
            {slot.map((value) => (
              <Text style={styles.caption}>{value}</Text>
            ))}
          </View>
        </View>

        <TouchableOpacity onPress={deleteData} >
          <Image
            source={icons.deleteAccent}
            resizeMode="contain"
            style={styles.icon}
          />
        </TouchableOpacity>

        {/* <Switch
          trackColor={{ false: COLORS.textHint, true: COLORS.primary }}
          thumbColor={COLORS.white}
          onValueChange={toggleSwitch}
          value={isEnabled}
        /> */}

      </Pressable>
    </View>
  )
}

export default Reminder