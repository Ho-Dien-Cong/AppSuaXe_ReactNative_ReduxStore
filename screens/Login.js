/* eslint-disable prettier/prettier */
import React, { useState, useEffect,Component  } from "react";
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';

import { Avatar, IconButton, Colors,Button , TextInput } from 'react-native-paper';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import User from "../models/User"
import firestore from '@react-native-firebase/firestore'; 
const Stack = createNativeStackNavigator();

import InputTexts from "../components/InputText"
const Login = ({navigation, route}) => {
    var users =  User.getInstance();
    const [txtAcount, settxtAcount] = useState('')
    const [txtPass, settxtPass] = useState('');
    const submit =async ({routnavigation, route}) => {  
            var kt =await users.Login(txtAcount,txtPass);  
            if(kt==1){
                Alert.alert("id KH : " + users.getID());
                navigation.navigate("Tabs",{ postId: users.getID(),
                    otherParam: 'Pass whatever you want here'});
            }        
    }
    return ( 
        <View style={styles.container}>
            <View style={{ height:'30%', justifyContent:'center' }}>
                <Image
                    style={styles.imageLogin}
                    source={require('../assets/tho.png')}
                />
            </View>
            <View style={{ paddingLeft:30, paddingRight:30, height:300  }}>
                <InputTexts
                    label="Mời bạn nhập tài khoản"
                    onChangeText={(text) => settxtAcount(text)}
                />
                <InputTexts
                    label="Mời bạn nhập mật khẩu"
                    onChangeText={(text) => settxtPass(text)}
                />
                <TouchableOpacity 
                    style={styles.appButtonContainer}
                    onPress={submit}
                >
                    <Text style={styles.appButtonText}>Đăng nhập</Text>
                </TouchableOpacity>
                <View style={{alignSelf:'flex-end',flexDirection: 'row', ajustifyContent: 'flex-end', marginTop:20, marginRight:20}}>
                    <Text>Bạn có tài khoản chưa ? </Text>
                    <TouchableOpacity
                        style={{fontSize:30}}  
                        onPress={submit}
                    >
                        <Text style={{color:'green'}} > Đăng ký</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
        </View> 
    );
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignContent:'center',
    },
    imageLogin: {
        marginTop:10,
        height:'70%',
        width:'30%',
        marginLeft:'33%',
    },
    appButtonContainer: {
        marginTop:20,
        elevation: 8,
        backgroundColor: "#009688",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12
      },
    appButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
      }
})
export default Login;