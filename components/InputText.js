import React, { useState } from "react";
import { Alert, Modal, StyleSheet,PureComponent, View } from 'react-native';

import { TextInput, Avatar, IconButton, Colors, Button } from 'react-native-paper';
const InputTexts = (props) => {
    return (
        <View>
            <TextInput
                style={styles.styleInput}
                underlineColorAndroid="transparent"
                label={props.label}
                icon="account"
                {...props}
            ></TextInput>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    styleImageLogin: {
        height: "20%",

    },
    styleInput: {
        padding: 0,
        backgroundColor: "blanchedalmond",
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderTopRightRadius: 20,
        marginTop: 15,
        borderColor: 'red',
        borderWidth: 2
    }
})
export default React.memo(InputTexts)
export default InputTextsCustom=(props)=>{
    const{
        type,
        text,
        numLine,
        style,
        holderLabel,
        icon
    }=props
    return (
        <TextInput
            {...props} 
        >
        </TextInput>

    )
}
class BaseInput extends PureComponent {
    constructor(props){
        super(props)
        this.state={
            isFocus:false
        }
    }
    get renderRight(){
        const{ rightIcon, rightAction, activeOpacityRight = 0.5, rightText }=this.props
        return(
            <View></View>

        )
    }
    get renderLeft () {
        const { leftIcon } = this.props
        return (
          <View>
            {leftIcon}
          </View>
        )
      }
}
class InputNormal extends BaseInput {
    constructor(props) {
        this.state={
            countString: props.maxNum ? props.maxNum - getLength(props.value) : 0
        }
    }
}