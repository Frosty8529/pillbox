import React from 'react'
import { Text, View, ScrollView, SafeAreaView, ActivityIndicator, RefreshControl, TextInput, Pressable, Image, TouchableOpacity } from 'react-native'
import { Stack, useRouter } from 'expo-router';
import { SelectList } from 'react-native-dropdown-select-list';

import { COLORS, FONT, icons, images, SIZES } from '../../constants'
import { ScreenHeaderBtn, Footer } from '../../components'

import styles from '../../components/medicine/list/medicineList.style';

const addMedicine = () => {
    const router = useRouter();

    const [selected, setSelected] = React.useState("");

    const data = [
        { key: '1', value: 'Slot 1' },
        { key: '2', value: 'Slot 2' },
        { key: '3', value: 'Slot 3' },
        { key: '4', value: 'Slot 4' },
        { key: '5', value: 'Slot 5' },
    ]

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen
                options={{
                    headerTitle: "Add medicine"
                }}
            />

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.container}>

                    <View style={styles.textInputContainer}>
                        <Text style={styles.inputLabel}>Pills name</Text>
                        <View style={styles.searchContainer}>

                            <View style={styles.searchWrapper}>
                                <TextInput
                                    style={styles.searchInput}
                                    // value=""
                                    placeholder='something' />
                            </View>
                            {/* <Text>Add medicine</Text> */}
                        </View>
                    </View>

                    <View style={styles.textInputContainer}>
                        <Text style={styles.inputLabel}>Display name</Text>
                        <View style={styles.searchContainer}>

                            <View style={styles.searchWrapper}>
                                <TextInput
                                    style={styles.searchInput}
                                    onChange={() => { }}
                                    placeholder='something' />
                            </View>
                        </View>
                    </View>

                    <View style={styles.textInputContainer}>
                        <Text style={styles.inputLabel}>Amount of pill</Text>
                        <View style={styles.stepperContainer}>
                            <TouchableOpacity style={styles.stepperLeft}>
                                <Image
                                    source={icons.minus}
                                    resizeMode="contain"
                                    style={{ width: 40, height: 40 }}
                                />
                            </TouchableOpacity>
                            <View style={styles.stepperWrapper}>
                                <TextInput
                                    style={styles.stepperInput}
                                    keyboardType='numeric'
                                    onChange={() => { }}
                                    placeholder='0' />
                            </View>
                            <TouchableOpacity style={styles.stepperRight}>
                                <Image
                                    source={icons.plus}
                                    resizeMode="contain"
                                    style={{ width: 40, height: 40 }}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.textInputContainer}>
                        <Text style={styles.inputLabel}>Medicine slot</Text>
                        <SelectList
                            setSelected={(val) => setSelected(val)}
                            fontFamily= {FONT.regular}
                            data={data}
                            save="value"
                            placeholder='Select slot'
                            arrowicon={<Image source={icons.chevronDownHint} style={{ width: 24, height: 24 }} />}
                            search={false}
                            boxStyles={{ borderRadius: 4, borderColor: COLORS.outline, backgroundColor: COLORS.white, paddingHorizontal: 10, height: 44, width: 361, justifyContent: 'space-between', alignItems: 'center' }} 
                            dropdownStyles={{ borderRadius: 8, borderColor: COLORS.outline, gap: 10 }}
                        />
                    </View>

                </View>
            </ScrollView>

            <Footer />

        </SafeAreaView>
    )
}

export default addMedicine