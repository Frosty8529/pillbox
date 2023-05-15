import React, { useState } from 'react'
import { Text, View, ScrollView, SafeAreaView, ActivityIndicator, RefreshControl, TextInput, FlatList, Pressable } from 'react-native'
import { Stack, useRouter } from 'expo-router';
import InputSpinner from "react-native-input-spinner";

import { COLORS, FONT, icons, images, SIZES } from '../../constants'
import { Reminder, ScreenHeaderBtn, List, BottomNavigator, Footer } from '../../components'
import RNDateTimeSelector from "react-native-date-time-scroll-picker";
import DatePicker from 'react-native-date-picker';
import styles from '../../components/reminder/reminder.style';

const addReminder = () => {
    const router = useRouter();

   const value = 1

    const dates = [
        { value: 'Sun', selected: false },
        { value: 'Mon', selected: false },
        { value: 'Tue', selected: false },
        { value: 'Wed', selected: false },
        { value: 'Thu', selected: false },
        { value: 'Fri', selected: false },
        { value: 'Sat', selected: false }];

    const [select, setSelect] = useState(dates);
    console.log("selectitem", select)
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
                        data={select}
                        contentContainerStyle={{ columnGap: SIZES.small }}
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

                <View style={styles.col}>
                    <Text style={styles.text}>onChange</Text>
                    <InputSpinner
                        value={this.state.value}
                        style={styles.spinner}
                        max={10}
                        onChange={(num) => {
                            alert("onChange new value: " + num);
                        }}
                    />
                </View>

            </View>

            <Footer />
        </SafeAreaView>
    )
}

export default addReminder;