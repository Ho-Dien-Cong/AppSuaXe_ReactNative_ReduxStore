import React, { useState, useEffect } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from 'react-native';

import { TextInput, Avatar, IconButton, Colors, Button } from 'react-native-paper';
import User from "../models/User"
const ProfileWorker=(route) => {
    const { idWorker} = route.params;  
    var userWork=User.getProfileWorker(idWorker)
    return(
        <View style={styles.container}>
            <View>

            </View>
            <View style={{justifyContent:'center', flexDirection:'row', padding:10}}>
               <texts label={userWork.luotXem}></texts>
               <texts label={userWork.sdt}></texts> 
            </View>
            <View>
                
            </View>
        </View>
    )
}
const renderAlert=(props)=>{
    const [check, setcheck] = useState(true)
    return(
        <View>
            
        </View>
    )
}
const texts=(props)=>{
    return(
        <View style={styles.itemDetail}>
            <Text>{props.label}</Text>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        flex: 1,
        padding:10,
        justifyContent:'center',
        alignItems:'center'
    },
    itemDetail:{
        paddingLeft:20,
        paddingRight:20
    }

})