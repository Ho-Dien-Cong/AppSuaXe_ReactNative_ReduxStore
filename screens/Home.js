/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from "react";
import {
  Image,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
  ScrollView,
} from 'react-native';

import {Avatar, IconButton, Colors} from 'react-native-paper';
import User from "../models/User.js"
import firestore from '@react-native-firebase/firestore';
import { Icon } from "react-native-paper/lib/typescript/components/List/List";
/* const { width, height } = Dimensions.get('screen'); */
const SPACING = 20;
const AVATAR_SIZE = 70;
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
const Home = () => { 
    const Item = ({ title }) => (
        <View style={styles.item}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
    const renderItem = ({ item }) => (
        <View style={styles.items}>
            <TouchableOpacity
                style={{ justifyContent: 'center', flexDirection: "row" }}
            >
                <View style={{ justifyContent: 'center' }}>
                    <Avatar.Image
                        size={60}
                        source={require('../assets/tho.png')}
                        style={{ marginTop: 0 }}
                    />
                </View>

                <View style={{ width: '65%', paddingLeft: 10, paddingRight: 10, justifyContent: 'center' }}>
                    <Text style={{ fontSize: 20, fontWeight: "bold" }}>{item.title}</Text>

                    <Item title={item.sdt}></Item>
                    <Item title={item.add}></Item>
                </View>
                <View style={{ justifyContent: 'center', alignContent: 'center' }}>
                    <Item title={"Lượt xem "}></Item>
                    <Text style={{ alignSelf: 'center', fontWeight: "bold" }}>{item.quality + "%"}</Text>

                </View>
            </TouchableOpacity>
        </View>
    );
    const renderItemQuality = ({ item }) => (
        <View style={styles.items}>
            <TouchableOpacity
                style={{ justifyContent: 'center', flexDirection: "row" }}
            >
                <View style={{ justifyContent: 'center' }}>
                    <Avatar.Image
                        size={55}
                        source={require('../assets/tho.png')}
                        style={{ marginTop: 0 }}
                    />
                </View>

                <View style={{ width: 180, paddingLeft: 10, paddingRight: 10, justifyContent: 'center' }}>
                    <Text style={{ fontSize: 20, fontWeight: "bold" }}>{item.title}</Text>

                    <Item title={item.sdt}></Item>
                    <Item title={item.add}></Item>
                </View>
                <View style={{ justifyContent: 'center', alignContent: 'center' }}>
                    <Item title={"Uy Tín "}></Item>
                    <Text style={{ alignSelf: 'center', fontWeight: "bold" }}>{item.quality + "%"}</Text>

                </View>
            </TouchableOpacity>
        </View>
    );
    return ( 
        <View style={styles.container}>
            <View>
                <Text>Dịch vụ tiện ích</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignContent: 'center',paddingBottom:20 }}>
                    <TouchableOpacity style={{ marginRight: 50 }}>
                        <Image
                            style={{ height: 60, width: 60 }}
                            source={require('../assets/icons/iconBaoTri.png')}
                        />
                        <Text style={{alignSelf:'center', fontWeight: "bold"  }}>Bảo trì</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ marginLeft: 50 }}
                    >
                        <Image
                            style={{ height: 60, width: 60 }}
                            source={require('../assets/icons/iconCall.png')}
                        />
                        <Text style={{alignSelf:'center', fontWeight: "bold" }}>Gọi ngay</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.quality}>
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>BXH chất lượng</Text>
                <View style={{ justifyContent: 'flex-end', width: '60%' }}>

                    <TouchableOpacity
                    >
                        <Text style={{ alignSelf: "flex-end", marginRight: 30, fontSize: 20 }}>Chi tiết </Text>
                        <IconButton
                            style={{
                                position: 'absolute',
                                zIndex: 1,
                                right: -16,
                                marginTop: -10,
                                marginBottom: 20
                            }}
                            icon="arrow-right-bold"
                            color={Colors.red500}
                            size={30}
                            onPress={() => dialog({
                                contents: props.txt,
                                type: props.type,
                                nameContext: props.nameConent
                            })}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.listQuantity}>
                <FlatList
                    scrollToEnd
                    horizontal
                    contentContainerStyle={{
                        flexDirection: 'row',
                    }}
                    data={DATA}
                    renderItem={renderItemQuality}
                    keyExtractor={item => item.id}
                >
                </FlatList>
            </View>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Danh sách xem nhiều nhất</Text>
            <View style={{ height: '50%' }}>
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
        backgroundColor: 'honeydew '
    },
    quality: {
        flexDirection: "row",

    },
    listQuantity: {
        marginTop: 5,
        height: '35%',
        backgroundColor: 'beige'
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
    view: {

    }
})
export default Home