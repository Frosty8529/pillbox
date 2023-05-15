import React from 'react'
import { Text, View, ScrollView, SafeAreaView, ActivityIndicator, RefreshControl, Image } from 'react-native'
import { Stack, useRouter } from 'expo-router';

import { COLORS, icons, images, SIZES } from '../../constants'
import { Slot, ScreenHeaderBtn, List, BottomNavigator } from '../../components'

import styles from '../../components/common/bottomnav/bottomnav.style';

import { Client, Message } from 'react-native-paho-mqtt';

x = 1

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

// Create a client instance
const client = new Client({ uri: 'ws://broker.emqx.io:8083/mqtt', clientId: 'clientId', storage: myStorage });

// set event handlers
client.on('connectionLost', (responseObject) => {
    if (responseObject.errorCode !== 0) {
        console.log(responseObject.errorMessage);
    }
});
client.on('messageReceived', (message) => {
    console.log(message.payloadString);
    x = message.payloadString
});



// connect the client
client.connect()
    .then(() => {
        // Once a connection has been made, make a subscription and send a message.
        console.log('onConnect');
        return client.subscribe('sensorIR');
    })
    .then(() => {
        const message = new Message('Hello');
        message.destinationName = 'sensorIR';
        client.send(message);
    })
    .catch((responseObject) => {
        if (responseObject.errorCode !== 0) {
            console.log('onConnectionLost:' + responseObject.errorMessage);
        }
    });


const medicine = () => {
    const router = useRouter();

    const medicine = [
        {
            id: "1",
            name: "Tylenol",
            displayName: "Headache",
            pill: "30",
            slot: "1",
            status: "",
            image: "https://images.albertsons-media.com/is/image/ABS/960242448-A1C1?$ng-ecom-pdp-mobile$&defaultImage=Not_Available"
        },
        {
            id: "2",
            name: "Zyrtec",
            displayName: "Allergy",
            pill: "12",
            slot: "2",
            status: "",
            image: "https://inwfile.com/s-cl/tmkmdi.jpg"
        }
    ]

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerLeft: () => (
                        <ScreenHeaderBtn
                            iconUrl={icons.editAccent}
                            dimension="60%" />
                    ),
                    headerRight: () => (
                        <ScreenHeaderBtn
                            iconUrl={icons.plusAccent}
                            dimension="60%" 
                            handlePress={() => router.push(`/medicine/addMedicine`)}/>
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
                <Slot slot1={x} />
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                <View
                    style={{
                        flex: 1,
                        padding: SIZES.medium
                    }}>
                    {medicine.map((item, index) => (
                        <List item={item} key={index} />
                    ))}
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