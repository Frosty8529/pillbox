import React, { useState } from 'react'
import { Text, View, ScrollView, SafeAreaView, ActivityIndicator, RefreshControl, TextInput, FlatList, Pressable } from 'react-native'
import { Stack, useRouter } from 'expo-router';

import { COLORS, FONT, icons, images, SIZES } from '../../constants'
import { Reminder, ScreenHeaderBtn, List, BottomNavigator, Footer } from '../../components'
import RNDateTimeSelector from "react-native-date-time-scroll-picker";
import DatePicker from 'react-native-date-picker';
import styles from '../../components/reminder/reminder.style';

const addReminder = () => {
    const router = useRouter()

    const [activeDate, setactiveDate] = useState([false, false, false, false, false, false, false]);

    const addZeroToDigits = (digit) => {
        if (digit) {
            let zeroAdded = `0${digit}`;
            return zeroAdded.substring(zeroAdded.length - 2);
        } else {
            return `00`;
        }

    }

    // const date = [
    //     { value: 'Sun', index: 0 },
    //     { value: 'Mon', index: 1 },
    //     { value: 'Tue', index: 2 },
    //     { value: 'Wed', index: 3 },
    //     { value: 'Thu', index: 4 },
    //     { value: 'Fri', index: 5 },
    //     { value: 'Sat', index: 6 }
    // ]

    const date = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

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

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen
                options={{
                    headerTitle: "Add reminder"
                }}
            />

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
                                onChange={() => { }}
                                placeholder='Enter title' />
                        </View>
                    </View>
                </View>

                <View style={styles.textInputContainer}>
                    <Text style={styles.inputLabel}>Repeat</Text>
                    <FlatList
                        data={date}
                        contentContainerStyle={{ columnGap: SIZES.small }}
                        horizontal
                        renderItem={({ item }) => (
                            <Pressable
                                style={styles.dateContainer(activeDate, item)}
                                onPress={() => setactiveDate(item)}>
                                <Text style={styles.dateLabel(activeDate, item)}>{item}</Text>
                            </Pressable>
                        )}
                    />
                </View>

            </View>

            <Footer />
        </SafeAreaView>
    )
}

export default addReminder;