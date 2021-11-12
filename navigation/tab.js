import React, { useState, useEffect } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View, StyleSheet, Alert, Image } from 'react-native';

import Login from '../screens/Login';
import ProFile from "../screens/ProFiles";
import Message from "../screens/Message"
import Home from "../screens/Home";
import Search from "../screens/Search"


const Tab = createBottomTabNavigator();
const Tabs = ({route}) => {
    const { postId, otherParam } = route.params;  
    Alert.alert(postId)
     return ( 
            <Tab.Navigator 
                screenOptions={{ 
                    tabBarStyle:{ height:80, justifyContent:'center',paddingBottom:10},
                    showLabel: false,
                    unmountOnBlur:true

                }} 
            >
                <Tab.Screen 
                    name="Home"
                    component={Home}
                    options={{
                        tabBarIcon: () =>
                            <View style={{ padding: 20,marginTop:15 }}>
                                <Image
                                    source={require("../assets/icons/iconHome.png")}
                                    style={{ height: 30, width: 30 }}
                                >
                                </Image>
                            </View>
                    }}
                />
                <Tab.Screen
                    name="Tin nhắn"
                    component={Message}
                    options={{
                        tabBarIcon: () =>
                            <View style={{ padding: 20,marginTop:15 }}>
                                <Image
                                    source={require("../assets/icons/iconMess.png")}
                                    style={{ height: 30, width: 30 }}
                                >
                                </Image>
                            </View>
                    }}
                />
                <Tab.Screen
                    name="Tìm Kiếm"
                    component={Search}
                    options={{
                        tabBarIcon: () =>
                            <View style={{ padding: 20,marginTop:15 }}>
                                <Image
                                    source={require("../assets/icons/iconSearch.png")}
                                    style={{ height: 30, width: 30 }}
                                >
                                </Image>
                            </View>
                    }}
                />
                <Tab.Screen
                    name="Cá nhân"
                    component={ProFile}
                    options={{
                        tabBarIcon: () =>
                            <View style={{ padding: 20,marginTop:15 }}>
                                <Image
                                    source={require("../assets/icons/iconProfile.png")}
                                    style={{ height: 30, width: 30 }}
                                >
                                </Image>
                            </View>
                    }}
                />
                
            </Tab.Navigator> 
         
    );
}
const styles = StyleSheet.create({
    tab: {
        padding: 50
    }
})
function SettingsScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings!</Text>
        </View>
    );
}
export default Tabs
