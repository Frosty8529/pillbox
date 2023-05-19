import React, { useState, useEffect } from 'react'
import { Text, View, ScrollView, SafeAreaView, ActivityIndicator, RefreshControl, Pressable, Image, TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { SelectList } from 'react-native-dropdown-select-list';
import InputSpinner from "react-native-input-spinner";

import { COLORS, FONT, icons, images, SIZES } from '../../constants'
import { Footer } from '../../components'

import styles from '../../components/medicine/list/medicineList.style';

import { getDatabase, ref, set } from "firebase/database"
import app from "../../components/config"

const editMedicine = (item) => {
    // const router = useRouter();
    // const { editMed } = router.params;
    console.log('edit test', item)
    // useEffect(() => {
    //     console.log('edit test', item)
    // })


    const db = getDatabase(app);
    const settle = 1;
    var pillAmount = '';
    var pillSlot = '';

    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');

    const handleInputChange = (text) => {
        setName(text);
    };

    const handleInputChange2 = (text) => {
        setDesc(text);
    };

    const data = [
        { key: '1', value: 'Slot 1' },
        { key: '2', value: 'Slot 2' },
        { key: '3', value: 'Slot 3' },
        { key: '4', value: 'Slot 4' }
    ]

    const amountPill = (pills) => {
        pillAmount = pills
        console.log('amount', pillAmount)
        return pillAmount
    }

    const status = false;

    const slotPill = (slot) => {
        pillSlot = slot.slice(-1)
        // console.log(pillSlot)
        return pillSlot
    }

    function create() {
        if (!name.trim()) {
            alert('Please Enter Name');
            return;
        } else if (!pillSlot.trim()) {
            alert('Please choose medicine slot')
        } else {
            set(ref(db, 'medicine/' + name), {
                name: name,
                desc: desc,
                amount: pillAmount,
                slot: pillSlot,
                status: status
            }).then(() => {
                router.back()
                // alert('success')
            }).catch((error) => {
                alert(error)
            })
            setName('');
            setDesc('');
        }
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen
                options={{
                    headerTitle: "Edit medicine"
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
                                    value={name}
                                    onChangeText={handleInputChange}
                                    placeholder='Enter name' />
                            </View>
                        </View>
                    </View>

                    <View style={styles.textInputContainer}>
                        <Text style={styles.inputLabel}>Description name</Text>
                        <View style={styles.searchContainer}>

                            <View style={styles.searchWrapper}>
                                <TextInput
                                    style={styles.searchInput}
                                    value={desc}
                                    onChangeText={handleInputChange2}
                                    placeholder='Enter description' />
                            </View>
                        </View>
                    </View>

                    <View style={styles.textInputContainer}>
                        <Text style={styles.inputLabel}>Amount of pill</Text>
                        <InputSpinner
                            value={settle}
                            style={styles.spinner}
                            height={40}
                            color={COLORS.opaprimary}
                            background={COLORS.white}
                            rounded={false}
                            showBorder={true}
                            onChange={(num2) => amountPill(num2)}
                        />
                    </View>

                    <View style={styles.textInputContainer}>
                        <Text style={styles.inputLabel}>Medicine slot</Text>
                        <SelectList
                            setSelected={(val) => slotPill(val)}
                            fontFamily={FONT.regular}
                            data={data}
                            save="value"
                            placeholder='Select slot'
                            arrowicon={<Image source={icons.chevronDownHint} style={{ width: 24, height: 24 }} />}
                            search={false}
                            boxStyles={{ borderRadius: 4, borderColor: COLORS.outline, backgroundColor: COLORS.white, paddingHorizontal: 10, height: 44, width: 361, justifyContent: 'space-between', alignItems: 'center' }}
                            dropdownStyles={{ borderRadius: 8, borderColor: COLORS.outline, gap: 10, backgroundColor: COLORS.white }}
                        />
                    </View>

                </View>
            </ScrollView>

            <Footer handlePress={create} />

        </SafeAreaView>
    )
}

export default editMedicine;