import { useState } from 'react';
import { View, ScrollView, SafeAreaView } from 'react-native';
import { Stack, useRouter } from 'expo-router';

import { COLORS, icons, images,  SIZES } from '../constants';
import {Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome} from '../components'

const Home = () => {
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
                    <ScreenHeaderBtn iconUrl={icons.notification} dimension="60%" />
                ),
                headerTitle: "PillBox"
                }}
            />

            <ScrollView showsVerticalScrollIndicator={false}>
                <View
                style={{
                    flex: 1,
                    padding: SIZES.medium
                }}>
                    <Welcome />
                    <Popularjobs />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;