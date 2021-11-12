import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from 'react-native';

import { TextInput ,Avatar, IconButton, Colors, Button } from 'react-native-paper';
const Texts=(props)=>{
    return(
        <View>
            <Text>{props.name} {props.txt}</Text>
        </View>
    )
}
export default Texts
