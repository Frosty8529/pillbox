import React from 'react'
import { Text, View, ScrollView, SafeAreaView, ActivityIndicator, RefreshControl } from 'react-native'
import { Stack, useRouter } from 'expo-router';

import { COLORS, icons, images, SIZES } from '../../constants'
import { Reminder, ScreenHeaderBtn, List, BottomNavigator } from '../../components'

import styles from '../../components/common/bottomnav/bottomnav.style';

const addReminder = () => {
    const router = useRouter()

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen
                options={{
                    headerTitle: "Add medicine"
                }}
            />

            <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                    <Text>Add medicine</Text>
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

export default addReminder;