import React, { useEffect, useState } from 'react'
import { Text, View, ScrollView, SafeAreaView, ActivityIndicator, RefreshControl, Image } from 'react-native'
import { Stack, useRouter } from 'expo-router';

import { COLORS, icons, images, SIZES } from '../../constants'
import { Slot, ScreenHeaderBtn, List, BottomNavigator } from '../../components'

import styles from '../../components/common/bottomnav/bottomnav.style';

import { Client, Message } from 'react-native-paho-mqtt';

import { getDatabase, ref, set, update, child, get, onValue } from 'firebase/database';
import { app } from '../../components/config';
//import myStorage from '../..components/myStorage';


//Set up an in-memory alternative to global localStorage
const myStorage = {
    setItem: (key, item) => {
        myStorage[key] = item;
    },
    getItem: (key) => myStorage[key],
    removeItem: (key) => {
        delete myStorage[key];
    },
};

//export default myStorage;

// Create a client instance
const client = new Client({ uri: 'ws://broker.emqx.io:8083/mqtt', clientId: 'clientId', storage: myStorage });

// Set event handlers
client.on('messageReceived', (message) => {
    const topic = message.destinationName;
    const payload = message.payloadString;

    //console.log(topic + " " + payload)
    // Save the subscribed value to the database
    const db = getDatabase();
    const slotRef = ref(db, 'slot/' + topic);
    update(slotRef, { value: payload })
        .then(() => {
            console.log('Value updated in the database');
            console.log(topic + " " + payload)
        })
        .catch((error) => {
            console.log('Error updating value in the database:', error);
        });
});

client.on('connectionLost', (responseObject) => {
    if (responseObject.errorCode !== 0) {
      console.log('onConnectionLost:', responseObject.errorMessage);
    }
  });

// Connect the client
client.connect()
    .then(() => {
        // Once a connection has been made, make subscriptions for all four slots.
        console.log('onConnect');
        const subscriptionPromises = [];

        for (let i = 1; i <= 4; i++) {
            const slotName = 'slot' + i;
            subscriptionPromises.push(client.subscribe(slotName));
        }

        return Promise.all(subscriptionPromises);
    })
    .then(() => {
        console.log('Subscribed to all slots successfully');
        // You can now start receiving slot state updates for all four slots
    })
    .catch((responseObject) => {
        if (responseObject.errorCode !== 0) {
            console.log('onConnectionLost:' + responseObject.errorMessage);
        }
    });
    



const medicine = () => {
    const router = useRouter();
    const [med, setMed] = useState('');
    const [slot, setSlot] = useState('');

    useEffect(() => {
        const db = getDatabase(app);

        const starCountRef = ref(db, 'medicine/');
        onValue(starCountRef, (snapshot) => {
            const medicineData = snapshot.val();
            console.log('og', medicineData)
            if (medicineData !== null) {
                setMed(medicineData)
            }
            // updateStarCount(postElement, data);
        });

        const slotRef = ref(db, 'slot/');
        onValue(slotRef, (snapshot) => {
            const slotData = snapshot.val();
            console.log('og', slotData)
            setSlot(slotData)
            // updateStarCount(postElement, data);
        });
    }, [])

    // let medicineData;


    console.log('test', med)
    console.log('slootttt', slot)
    // Object.keys(med).map((x) => {
    //     console.log('object ' + x + ' value ' + med[x].slot)
    // })
    // const medicine = JSONArray(Object.values(med));
    const medicine = Object.entries(med).map(([key, value]) => ({ key, value }));
    console.log('please', medicine)

    const slotCheck = Object.entries(slot).map(([key, value]) => ({ key, value }));
    console.log('slot checl', slotCheck)

    const slotFinal = [];
    slotCheck.map((item) => slotFinal.push(item.value.value))
    console.log('slot final', slotFinal)

    // const arr = Object.entries(obj).map(([key, value]) => ({ key, value }));

    // console.log(arr);
    // const medicine = [
    //     {

    //         name: "Tylenol",
    //         desc: "Headache",

    //         slot: "1",

    //         amount: "https://images.albertsons-media.com/is/image/ABS/960242448-A1C1?$ng-ecom-pdp-mobile$&defaultImage=Not_Available"
    //     },
    //     {
    //         id: "2",
    //         name: "Zyrtec",
    //         displayName: "Allergy",
    //         pill: "12",
    //         slot: "2",
    //         status: "",
    //         image: "https://inwfile.com/s-cl/tmkmdi.jpg"
    //     }
    // ]

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
                            handlePress={() => router.push(`/medicine/addMedicine`)} />
                    ),
                    headerTitle: "Medicine"
                }}
            />
            <View
                style={{
                    // flex: 1,
                    paddingTop: SIZES.medium,
                    paddingRight: SIZES.medium,
                    paddingLeft: SIZES.medium
                }}>
                <Slot slot1={slotFinal[0]} slot2={slotFinal[1]} slot3={slotFinal[2]} slot4={slotFinal[3]} />
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                <View
                    style={{
                        flex: 1,
                        padding: SIZES.medium
                    }}>
                    {med ? <>
                        {medicine.map((item) => (
                            <List item={item.value} />
                            // console.log('check', item.value.name)
                        ))}
                    </>:<Text style={styles.defaultText}>Click + to add your medicine first!</Text>}


                </View>
            </ScrollView>

            <BottomNavigator
                icon1={icons.home} style1={styles.caption}
                icon2={icons.pillAccent} style2={styles.captionAccent}
                icon3={icons.reminder} style3={styles.caption}
            />
        </SafeAreaView>
    )
}

export default medicine;