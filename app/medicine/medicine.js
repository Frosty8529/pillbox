import React from 'react'
import { Text, View, ScrollView, SafeAreaView, ActivityIndicator, RefreshControl} from 'react-native'
import { Stack, useRouter } from 'expo-router';

import { COLORS, icons, images,  SIZES } from '../../constants'
import { Slot, ScreenHeaderBtn, List, BottomNavigator } from '../../components'

import styles from '../../components/common/bottomnav/bottomnav.style';

const medicine = () => {
    const router = useRouter();

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen 
            options={{ 
                headerStyle: { backgroundColor: COLORS.lightWhite},
                headerLeft: () => (
                    <ScreenHeaderBtn iconUrl={icons.editAccent} dimension="60%" />
                ),
                headerRight: () => (
                    <ScreenHeaderBtn iconUrl={icons.plus} dimension="60%" />
                ),
                headerTitle: "Medicine"
                }}
            />

            <ScrollView showsVerticalScrollIndicator={false}>
                <View
                style={{
                    flex: 1,
                    padding: SIZES.medium
                }}>
                    <Slot />
                    <List />
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