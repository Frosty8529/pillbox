import React from 'react'
import { Text, View, ScrollView, SafeAreaView, ActivityIndicator, RefreshControl } from 'react-native'
import { Stack, useRouter } from 'expo-router';

import { COLORS, icons, images, SIZES } from '../../constants'
import { Reminder, ScreenHeaderBtn, List, BottomNavigator } from '../../components'

import styles from '../../components/common/bottomnav/bottomnav.style';

const reminder = () => {
    const router = useRouter();

    const reminder = [
        {
            title: "Before breakfast",
            days: ["Mon", "Tue"],
            time: "09:30",
            slot: ["1", "2", "3"]
        },
        {
            title: "Afer breakfast",
            days: ["Mon"],
            time: "09:30",
            slot: ["1"]
        },
    ];

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
                    {reminder.map((item, index) => (
                        <Reminder item={item} key={index} />
                    ))}
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