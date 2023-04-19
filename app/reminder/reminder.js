import React from 'react'
import { Text, View, ScrollView, SafeAreaView, ActivityIndicator, RefreshControl} from 'react-native'
import { Stack, useRouter } from 'expo-router';

import { COLORS, icons, images,  SIZES } from '../../constants'
import { Reminder, ScreenHeaderBtn, List, BottomNavigator } from '../../components'

import styles from '../../components/common/bottomnav/bottomnav.style';

const reminder = () => {
    const router = useRouter();

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen 
            options={{ 
                headerStyle: { backgroundColor: COLORS.lightWhite},
                headerLeft: () => (
                    <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" borderRadius="100"  />
                ),
                headerRight: () => (
                    <ScreenHeaderBtn iconUrl={icons.plus} dimension="60%" />
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
                    <Reminder />
                    
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