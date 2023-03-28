import { Stack } from 'expo-router'; 
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

const Layout = () => {
    const [fontsLoaded] = useFonts({
        PoppinBold: require('../assets/fonts/Poppins-SemiBold.ttf'),
        PoppinMedium: require('../assets/fonts/Poppins-Medium.ttf'),
        PoppinRegular: require('../assets/fonts/Poppins-Regular.ttf')
    })

    const onLayoutRootView = useCallback(async () => {
        if(fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded])

    if(!fontsLoaded) return null;

    return <Stack onLayout={onLayoutRootView} />;
}

export default Layout;