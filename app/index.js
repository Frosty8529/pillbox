import { useState, useEffect } from 'react';
import { View, ScrollView, SafeAreaView } from 'react-native';
import { Stack, useRouter } from 'expo-router';

import { COLORS, icons, images, SIZES } from '../constants';
import { Popularjobs, ScreenHeaderBtn, Welcome, BottomNavigator } from '../components'
import { BorderlessButton } from 'react-native-gesture-handler';
import styles from '../components/common/bottomnav/bottomnav.style'

import { app } from '../components/config'
import { getDatabase, ref, set, update, child, get, onValue, query, orderByChild, equalTo } from 'firebase/database';

const Home = () => {
    const router = useRouter();

    const [totake, setTotake] = useState('');
    // const [tdTake, setTdtake] = useState('')

    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

    const d = new Date();
    const dayy = days[d.getDay()]
    // dayy = "Mon"

    useEffect(() => {
        const db = getDatabase(app);
        const dataRef = ref(db, 'reminder');
        onValue(dataRef, (snapshot) => {
            const totakeData = snapshot.val();
            console.log('oggg', totakeData)
            if (totakeData !== null) {
                setTotake(totakeData)
            }
            // updateStarCount(postElement, data);
        });
    }, [])

    const reminder = Object.entries(totake).map(([key, value]) => ({ key, value }))
    const tdTake = [];
    reminder.map((item) => {if (item.value.days.includes(dayy) === true) {tdTake.push(item)}})

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    // headerLeft: () => (
                    //     <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" borderRadius="100"  />
                    // ),
                    // headerRight: () => (
                    //     <ScreenHeaderBtn iconUrl={icons.notification} dimension="60%" />
                    // ),
                    headerTitle: "PillBox"
                }}
            />

            <ScrollView showsVerticalScrollIndicator={false}>
                <View
                    style={{
                        flex: 1,
                        padding: SIZES.medium,
                        // gapping: SIZES.sm
                    }}>
                    <Welcome />
                    { tdTake ? <>
                        {tdTake.map((item) => (<Popularjobs item={item.value}/>))}
                    </>: alert('No medicine today :)')}
                    
                </View>
            </ScrollView>

            <BottomNavigator
                icon1={icons.homeAccent} style1={styles.captionAccent}
                icon2={icons.pill} style2={styles.caption}
                icon3={icons.reminder} style3={styles.caption}
            />
        </SafeAreaView>
    )
}

export default Home;