import "../styles/global.css";

import { Slot } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { 
    useFonts,
    HindSiliguri_400Regular,
    HindSiliguri_500Medium,
    HindSiliguri_700Bold
} from "@expo-google-fonts/hind-siliguri";

import { Loading } from "../components/loading";

export default function Layout() {
    const [fontsLoaded] = useFonts({
        HindSiliguri_400Regular,
        HindSiliguri_500Medium,
        HindSiliguri_700Bold
    });

    if (!fontsLoaded) {
        return <Loading />
    }

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <StatusBar style="light"/>
            <Slot />
        </GestureHandlerRootView>
    )
}