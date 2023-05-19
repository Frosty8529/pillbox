import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView, Pressable, Image, Switch } from 'react-native'
import { Stack, useRouter, useLocalSearchParams } from 'expo-router';
import { useNavigation } from '@react-navigation/native';

import { COLORS, icons } from "../../../constants"
import styles from './medicineList.style'

import { getDatabase, ref, set, update, child, get, onValue, remove } from 'firebase/database';
import { app } from '../../../components/config';
import { TouchableOpacity } from 'react-native-gesture-handler';
import editMedicine from '../../../app/medicine/editMedicine';


const List = ({ item }) => {
  const router = useRouter();
  const navigation = useNavigation();
  const params = useLocalSearchParams();
  const [isEnabled, setIsEnabled] = useState(true);
  const [med, setMed] = useState('');
  const db = getDatabase(app);

  useEffect(() => {
    // const db = getDatabase(app);
    const starCountRef = ref(db, 'medicine/');
    onValue(starCountRef, (snapshot) => {
      const reminderData = snapshot.val();
      console.log('og', reminderData)
      if (reminderData !== null) {
        setMed(reminderData)
      }
      // updateStarCount(postElement, data);
    });
  }, [])

  const medicine = Object.entries(med).map(([key, value]) => ({ key, value }))
  // console.log('teset', medicine[0])

  // const compareArrays = (medicine) => {
  //   for (var i = 0; i < medicine.length; i++) {
  //     for (var j = 1; j < medicine.length; j++) {
  //       medicine.map((item) => {
  //         if (item[i].value.slot !== item[j].value.slot) {
  //           if (item[i].value.status === item[j].value.status) {
  //             alert('You already have medicine in this slot')
  //             return;
  //           }
  //         }
  //       })
  //     }
  //     j += 1;
  //   }
  //   toggleSwitch()
  // }

  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState)

    const db = getDatabase(app);
    const slotRef = ref(db, 'medicine/' + item.name);
    update(slotRef, { status: !isEnabled })
      .then(() => {
        console.log('Value updated in the database');
        console.log(item.title + " " + isEnabled)
      })
      .catch((error) => {
        console.log('Error updating value in the database:', error);
      });

    // compareArrays = (medicine) => {
    //   for (var i = 0; i < medicine.length; i++) {
    //     for (var j = 1; j < medicine.length; j++) {
    //       medicine.map((item) => {
    //         if (item[i].value.slot !== item[j].value.slot) {
    //           if (item[i].value.status === item[j].value.status) {
    //             alert('You already have medicine in this slot')
    //             return;
    //           }
    //         }
    //       })
    //     }
    //     j += 1;
    //   }
    // }
  };

  const handlePress = () => {
    // const {additionalData} = router.params;
    router.push('/medicine/editMedicine')
  }

  function deleteData () {
    remove(ref(db, 'medicine/' + item.name))
    alert('Remove')
  }

  return (
    <View>
      <Pressable style={styles.medicineList} >
        {/* <View style={styles.iconWrapper}> */}
        {/* <Link href={{
          pathname: '/medicine/editMedicine',
          params: { item }
        }}> */}
        
        {/* </Link> */}
        <View style={styles.details} >
          <Text style={styles.label}>{item.name}</Text>

          <View style={styles.captionLabel} >
            <Text style={styles.captionAccent}>Slot {item.slot}</Text>
            <Text style={styles.captionHint}>| {item.amount} pills</Text>
          </View>
          {/* </View> */}
        </View>

        <TouchableOpacity onPress={deleteData}>
          <Image
            source={icons.deleteAccent}
            resizeMode="contain"
            style={styles.icon}
          />
        </TouchableOpacity>

        {/* <Switch
          trackColor={{ false: COLORS.textHint, true: COLORS.primary }}
          thumbColor={COLORS.white}
          // ios_backgroundColor="#3e3e3e"
          onValueChange={compareArrays}
          value={isEnabled}
        /> */}




      </Pressable>
    </View>
  )
}

export default List