import React from 'react'
import { SafeAreaView, StyleSheet, Dimensions, View} from 'react-native'
import constants from '../utils/constants';
import { MaterialIcons, MaterialCommunityIcons} from '@expo/vector-icons';


const {height} = Dimensions.get("window"); 

export const ProfileScreen = () => {
    return (
        <View style={styles.container}>
            <MaterialCommunityIcons name="face-profile" size={150} color={constants.COLORS.LIGHT_GRAY} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height,
        justifyContent: "center",
        alignItems: "center",
    },
});

