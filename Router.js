import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen, DetailsScreen, CastandCrew } from "./src/screens";
import { MaterialIcons, MaterialCommunityIcons} from '@expo/vector-icons';

import constants from "./src/utils/constants";

const Stack = createStackNavigator();

const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator 
                initialRouteName={constants.SCREEN.HOME} 
                screenOptions={{
                    headerStyle: {
                        backgroundColor: constants.COLORS.LIGHT_GRAY,
                    },
                    headerLeft: (props) =>
						props.canGoBack && (
							<MaterialIcons
								name="arrow-back"
								size={24}
								color={constants.COLORS.LIGHT}
								{...props}
								style={{ marginLeft: 20 }}
							/>
						),
                
                }}
            >

                <Stack.Screen
                name={constants.SCREEN.HOME}
                component={HomeScreen}
                options={{
                    title:"MOVIES",
                    headerShown: false,
                }} />

                <Stack.Screen
                    name={constants.SCREEN.DETAILS}
                    component={DetailsScreen}
                    options={{ 
                        title: "", 
                        headerBackTitleVisible: false,
                        headerTransparent: true,
                    }}
                 />
                 
                <Stack.Screen
                    name={constants.SCREEN.CASTANDCREW}
                    component={CastandCrew}
                 />

            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Router;
