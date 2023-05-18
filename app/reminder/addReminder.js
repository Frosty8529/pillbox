import React, { useState } from 'react'
import { Text, View, ScrollView, SafeAreaView, ActivityIndicator, RefreshControl, TextInput, FlatList, Pressable, Image } from 'react-native'
import { Stack, useRouter } from 'expo-router';
import InputSpinner from "react-native-input-spinner";

import { COLORS, FONT, icons, images, SIZES } from '../../constants'
import { Reminder, ScreenHeaderBtn, List, BottomNavigator, Footer } from '../../components'
import RNDateTimeSelector from "react-native-date-time-scroll-picker";
import DatePicker from 'react-native-date-picker';
import styles from '../../components/reminder/reminder.style';

import { ref, set } from "firebase/database";
import db from "../../components/config";

import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const addReminder = () => {

    const firebaseConfig = {
        apiKey: "AIzaSyDTpEX1pSNYD4Hsge_3zStqqkgowIaNEpM",
        authDomain: "pillbox-58c1f.firebaseapp.com",
        databaseURL: "https://pillbox-58c1f-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "pillbox-58c1f",
        storageBucket: "pillbox-58c1f.appspot.com",
        messagingSenderId: "736164580415",
        appId: "1:736164580415:web:f92170d49fdbb7a921bc8a",
        measurementId: "G-1VKW54HW7W"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    const db = getDatabase(app);
    console.log(db)


    const router = useRouter();
    const [title, setTitle] = useState('');
    const value = 1
    const medicines = [
        { slot: '1', name: 'aaaaa' },
        { slot: '2', name: 'bbbbb' },
        { slot: '3', name: 'ccccc' },
        { slot: '4', name: 'ddddd' },
        { slot: '5', name: 'eeeee' }
    ]

    const schedule = [
        { id: '', title: '', date: [], slot1: '', slot2: '', slot3: '', slot4: '', slot5: '' }
    ]

    const dates = [
        { value: 'Sun', selected: false },
        { value: 'Mon', selected: false },
        { value: 'Tue', selected: false },
        { value: 'Wed', selected: false },
        { value: 'Thu', selected: false },
        { value: 'Fri', selected: false },
        { value: 'Sat', selected: false }];

    const [select, setSelect] = useState(dates);
    // console.log("selectitem", select)
    const selectDate = (item) => {
        const newItem = select.map((val) => {
            if (val.value === item.value) {
                return { ...val, selected: !val.selected }
            }
            else {
                return val;
            }
        })
        setSelect(newItem)
    }

    const addZeroToDigits = (digit) => {
        if (digit) {
            let zeroAdded = `0${digit}`;
            return zeroAdded.substring(zeroAdded.length - 2);
        } else {
            return `00`;
        }

    }

    const dataSet = {
        data: {
            firstColumn: [...Array(13).keys()].map((item, idx) => { return { value: addZeroToDigits(item), index: idx } }),
            secondColumn: [...Array(60).keys()].map((item, idx) => { return { value: addZeroToDigits(item), index: idx } }),
            thirdColumn: [
                { value: 'AM', index: 0 },
                { value: 'PM', index: 1 }
            ],
        },
        initials: [8, 25, 0]
    }

    const seperatorComponentRendererOne = () => {
        return <Text style={{ fontSize: SIZES.xxLarge, lineHeight: 80, fontFamily: FONT.regular }}>:</Text>
    }
    const seperatorComponentRendererTwo = () => {
        return <Text style={{ fontSize: SIZES.xxLarge, lineHeight: 80, fontFamily: FONT.regular }}></Text>
    }

    function create() {
        set(ref(db, 'users/' + title), {
            title: title,
        }).then(() => {
            alert('success')
        }).catch((error) => {
            alert(error)
        })
        setTitle('')
        console.log('db', db)
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen
                options={{
                    headerTitle: "Add reminder"
                }}
            />

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.addContainer}>
                    <RNDateTimeSelector
                        dataSet={dataSet}
                        onValueChange={(value) => {
                            console.log('data on users end :   ... ', value);
                        }}
                        containerStyle={{
                            alignSelf: 'center',
                            borderWidth: 0,
                            borderColor: 'transparent',
                            borderRadius: 0,
                            height: 80
                        }}
                        firstSeperatorComponent={seperatorComponentRendererOne}
                        secondSeperatorComponent={seperatorComponentRendererTwo}
                        seperatorContainerStyle={{
                            // width: wp(4)
                        }}
                        scrollPickerOptions={{
                            itemHeight: 40,
                            wrapperHeight: 80,
                            wrapperColor: COLORS.white,
                            highlightColor: COLORS.primary
                        }}
                        textStyle={{
                            fontSize: SIZES.xxLarge,
                            fontFamily: FONT.regular
                        }}
                        textColor={{
                            primary: COLORS.primary,
                            secondary: COLORS.textHint,
                            other: COLORS.textHint,
                        }}
                    />

                    <View style={styles.textInputContainer}>
                        <Text style={styles.inputLabel}>Title</Text>
                        <View style={styles.searchContainer}>

                            <View style={styles.searchWrapper}>
                                <TextInput
                                    style={styles.searchInput}
                                    value={title}
                                    onChangeText={(text) => setTitle(text)}
                                    placeholder='Enter title' />
                            </View>
                        </View>
                    </View>

                    <View style={styles.textInputContainer}>
                        <Text style={styles.inputLabel}>Repeat</Text>
                        <View style={styles.repeatContainer}>
                            <FlatList
                                data={select}
                                contentContainerStyle={{ columnGap: 4 }}
                                horizontal
                                renderItem={({ item }) => (
                                    <Pressable
                                        style={styles.dateContainer(item.selected)}
                                        onPress={() => selectDate(item)}>
                                        <Text style={styles.dateLabel(item.selected)}>{item.value}</Text>
                                    </Pressable>
                                )}
                            />
                        </View>
                    </View>

                    <View style={styles.medicineContainer}>
                        <Text style={styles.inputLabel}>Medicines</Text>
                        <View style={styles.stepperContainer}>
                            <View style={styles.stepperWrapper}>
                                <FlatList
                                    data={medicines}
                                    contentContainerStyle={{ rowGap: SIZES.small }}
                                    verticle
                                    style={{ display: 'flex' }}
                                    renderItem={({ item }) => (
                                        <View style={styles.slotStepper}>
                                            <Text style={styles.slotLabel}>Slot {item.slot} | {item.name}</Text>
                                            <InputSpinner
                                                value={value}
                                                style={styles.spinner}
                                                height={40}
                                                color={COLORS.opaprimary}
                                                background={COLORS.white}
                                                max={10}
                                                rounded={false}
                                                showBorder={true}
                                                onChange={(num2) => console.log(num2)}
                                            />
                                        </View>
                                    )}
                                />
                            </View>
                        </View>
                    </View>

                </View>
            </ScrollView>
            <Footer handlePress={create} />
        </SafeAreaView>
    )
}

export default addReminder;