import React from 'react'
import { Text, View, ScrollView, SafeAreaView, ActivityIndicator, RefreshControl, Image} from 'react-native'
import { Stack, useRouter } from 'expo-router';

import { COLORS, icons, images,  SIZES } from '../../constants'
import { Slot, ScreenHeaderBtn, List, BottomNavigator } from '../../components'

import styles from '../../components/common/bottomnav/bottomnav.style';

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
            <View
            style={{
                // flex: 1,
                paddingTop: SIZES.medium,
                paddingRight: SIZES.medium,
                paddingLeft: SIZES.medium
            }}>
                <Slot />
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