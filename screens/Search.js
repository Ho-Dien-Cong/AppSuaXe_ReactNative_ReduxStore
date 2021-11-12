import React, { useState, useEffect } from "react";
import { Alert, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import {  Avatar, IconButton, Colors, Button } from 'react-native-paper';
const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'Ho Dien Cong ',
        avatar: "https://robohash.org/eligendilaboreaspernatur.png?size=300x300&set=set1",
        sdt: "03922245045",
        add: "10a/1, Bình đáng, Bình Hòa, Thuận An, Bình Dương ",
        quality: "90"
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
        avatar: "https://robohash.org/eligendilaboreaspernatur.png?size=300x300&set=set1",
        sdt: "03922245045",
        add: "Bình Dương",
        quality: "90"
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
        avatar: "https://robohash.org/eligendilaboreaspernatur.png?size=300x300&set=set1",
        sdt: "03922245045",
        add: "Bình Dương",
        quality: "90"
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
        avatar: "https://robohash.org/eligendilaboreaspernatur.png?size=300x300&set=set1",
        sdt: "03922245045",
        add: "Bình Dương",
        quality: "90"
    },

]
const Search=()=>{
    const renderItem = ({ item }) => ( 
        <View style={styles.items}>
            <TouchableOpacity
                style={{justifyContent: 'center',flexDirection: "row"}}
            >
                <View style={{ justifyContent: 'center' }}>
                    <Avatar.Image
                        size={80}
                        source={require('../assets/tho.png')}
                        style={{ marginTop: 0 }}
                    />
                </View>

                <View style={{ width: '80%', paddingLeft: 15,paddingRight:10, justifyContent: 'center' }}>
                    <Text style={{ fontSize: 20, fontWeight:"bold", }}>{item.title}</Text> 
                     
                    <Text >{item.sdt}</Text>
                    <Text >{item.add}</Text>
                    <Text >Khoảng cách : {item.quality}  km</Text>
                </View>
                 
            </TouchableOpacity> 
        </View>
    );
    return(
        <View style={styles.container}>
            <Text>searh</Text>
            <View  >
                <FlatList 
                    vertical
                    contentContainerStyle={{
                        flexDirection: 'column',
                         
                    }}
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id} 
                >
                </FlatList>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor:'honeydew '
    },
    quality: {
        flexDirection: "row",

    },
    listQuantity: {
        marginTop: 5,
        height: '35%',
        backgroundColor:'beige'
    },
    items: {
        flexDirection: "row",
        padding: 15,
        margin: 10,
        /* backgroundColor:'green', */
        borderTopLeftRadius: 15,
        borderTopRightRadius: 40,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        height: 150,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,

    },
    view:{

    }
})
export default Search
