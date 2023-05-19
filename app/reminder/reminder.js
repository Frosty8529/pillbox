import React, { useState, useEffect } from 'react'
import { Text, View, ScrollView, SafeAreaView, ActivityIndicator, RefreshControl, Pressable } from 'react-native'
import { Stack, useRouter } from 'expo-router';

import { COLORS, icons, images, SIZES } from '../../constants'
import { Reminder, ScreenHeaderBtn, List, BottomNavigator } from '../../components'

import styles from '../../components/common/bottomnav/bottomnav.style';

import { Client, Message } from 'react-native-paho-mqtt';
import { getDatabase, ref, set, update, child, get, onValue } from 'firebase/database';
import { app } from '../../components/config';
import { TouchableOpacity } from 'react-native-gesture-handler';

// realtime = reminder.map((item) => console.log(item.value.realtime))
/*
const myStorage = {
    setItem: (key, item) => {
        myStorage[key] = item;
    },
    getItem: (key) => myStorage[key],
    removeItem: (key) => {
        delete myStorage[key];
    },
};

// Create a client instance
const client = new Client({ uri: 'ws://broker.emqx.io:8083/mqtt', clientId: 'clientId', storage: myStorage });
*/

// client.on('connectionLost', (responseObject) => {
//     if (responseObject.errorCode !== 0) {
//         console.log(responseObject.errorMessage);
//     }
// });
/*
client.connect()
  .then(() => {
    console.log('Connected to MQTT broker');
    // Start publishing mock data in a loop
    setInterval(() => {
      const currentTime = new Date(); // Get the current time
      const currentHours = currentTime.getHours().toString().padStart(2, '0');
      const currentMinutes = currentTime.getMinutes().toString().padStart(2, '0');
      const currentPeriod = (currentHours >= 12) ? 'PM' : 'AM';
      const currentTimeString = `${currentHours}:${currentMinutes} ${currentPeriod}`;
      
      reminder.forEach(({ value }) => {
        const [hours, minutes, period] = value.realtime;
        const timeString = `${hours}:${minutes} ${period}`;
        if (timeString === currentTimeString) {
          const message = new Message('Time to take pill');
          message.destinationName = 'Date_Time';
          client.send(message);
          console.log(message);
        }
      });
    }, 5000); // Adjust the interval (in milliseconds) between each publication as needed
  })
  .catch((error) => {
    console.log('Connection failed:', error);
  });
*/
/*
// Connect the client
client.connect()
  .then(() => {
    console.log('Connected to MQTT broker');
    // Start publishing mock data in a loop
      setInterval(() => {
        message = new Message("Time to take pill");
        message.destinationName = "Date_Time";
        client.send(message);
        console.log(message);
    }, 5000); // Adjust the interval (in milliseconds) between each publication as needed
  })
  .catch((error) => {
    console.log('Connection failed:', error);
  });
 */

const reminder = () => {
    const router = useRouter();
    const [schedule, setSchedule] = useState('');

    useEffect(() => {
        const db = getDatabase(app);
        const starCountRef = ref(db, 'reminder/');
        onValue(starCountRef, (snapshot) => {
            const reminderData = snapshot.val();
            console.log('og', reminderData)
            if (reminderData !== null) {
                setSchedule(reminderData)
            }
            // updateStarCount(postElement, data);
        });
    }, [])

    console.log('test', schedule)

    // const arr = Object.entries(schedule);

    const reminder = Object.entries(schedule).map(([key, value]) => ({ key, value }))
    reminder.map((item) => console.log('realtime', item.value.time) )

    // days = reminder.map((item) => console.log(item.value.days))
    // console.log("TESTING" + days)
    // reminder.map((item) => console.log(item.value.days))

    // useEffect(() => {
    //     const db = getDatabase(app);
    //     const starCountRef = ref(db, 'reminder/');
    //     onValue(starCountRef, (snapshot) => {
    //         const reminderData = snapshot.val();
    //         console.log('TEST', reminderData)
    //         setMed(reminderData)
    //         // updateStarCount(postElement, data);
    //     });

    //     const slotRef = ref(db, 'slot/');
    //     onValue(slotRef, (snapshot) => {
    //         const slotData = snapshot.val();
    //         console.log('og', slotData)
    //         setSlot(slotData)
    //         // updateStarCount(postElement, data);
    //     });
    // }, [])

    // const reminder = [
    //     {
    //         title: "Before breakfast",
    //         days: ["Mon", "Tue"],
    //         time: "09:30",
    //         slot: ["1", "2", "3"]
    //     },
    //     {
    //         title: "Afer breakfast",
    //         days: ["Mon"],
    //         time: "09:30",
    //         slot: ["1"]
    //     },
    // ];

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerLeft: () => (''),
                    headerRight: () => (
                        <ScreenHeaderBtn
                            iconUrl={icons.plusAccent}
                            dimension="60%"
                            handlePress={() => router.push(`/reminder/addReminder`)} />
                    ),
                    headerTitle: "Reminder"
                }}
            />

            <ScrollView showsVerticalScrollIndicator={false}>
                <View
                    style={{
                        flex: 1,
                        padding: SIZES.medium
                    }}>
                    {schedule ? <>
                        {reminder.map((item) => (
                            <Reminder item={item.value} />
                            // console.log('check', item.value.days)
                        ))}</> : <Text style={styles.defaultText}>Click + to add your medicine first!</Text>}

                </View>
            </ScrollView>

            <BottomNavigator
                icon1={icons.home} style1={styles.caption}
                icon2={icons.pill} style2={styles.caption}
                icon3={icons.reminderAccent} style3={styles.captionAccent}
            />
        </SafeAreaView>
    )
}

export default reminder;