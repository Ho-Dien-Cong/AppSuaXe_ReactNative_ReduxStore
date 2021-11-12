import React, { useState } from 'react';
import {
    Alert,
    Text,
    StyleSheet,
    TouchableHighlight,
    View,
    ScrollView,
    CheckBox
} from 'react-native';

import { TextInput } from 'react-native-paper';
import InputTexts from "../components/InputText"
import User from "../models/User"
const Regitster = () => {
    var l = User.ListWorkerQualyity();

    const [isSelected, setSelection] = useState(false);
    const [txtSDT, settxtAcount] = useState(null)
    const [txtPass, settxtPass] = useState(null)
    const [txtpass2, settxtpass2] = useState(null)
    const [txtAdress, settxtAdress] = useState(null)
    const [txtHoTen, settxtHoTen] = useState(null)
    const submit = async () => {
        if (txtPass == null || txtSDT == null || txtAdress == null || txtHoTen == null) {
            Alert.alert("Chưa đúng hoặc sai thông tin" + txtPass + " : " + txtpass2 + ";" + txtAdress)
        }
        else {
            var users = User.getInstance();
            if (txtSDT.toString().trim().length < 10 || txtSDT.toString().trim().length > 11)
                Alert.alert("Số điện thoại từ 10 đến 11 số ! :")
            else {
                if (txtPass != txtpass2)
                    Alert.alert("Mật khẩu nhập lại không khớp ?")
                else {
                    await User.Regitster(txtHoTen, txtSDT, txtPass,isSelected)

                }
            }
        }
    }
    const kt = (txtSDT) => {

    }
    return (
        <View style={styles.container}>
            <ScrollView>
                <InputTexts
                    label="Mời bạn nhập số điện thoại"
                    onChangeText={(text) => settxtAcount(text)}
                >
                </InputTexts>
                <TextInput
                    style={styles.styleInput}
                    label="Họ tên người dùng"
                    onChangeText={(text) => settxtHoTen(text)}
                >
                </TextInput>
                <TextInput
                    secureTextEntry={true}
                    style={styles.styleInput}
                    label="Mời bạn nhập mật khẩu"
                    onChangeText={(text) => settxtPass(text)}
                >
                </TextInput>
                <TextInput
                    secureTextEntry={true}
                    style={styles.styleInput}
                    label="Mời bạn nhập lại mật khẩu"
                    onChangeText={(text) => settxtpass2(text)}
                >
                </TextInput>
                <TextInput
                    keyboardType='numeric'
                    style={styles.styleInput}
                    label="Địa chỉ mặc định"
                    onChangeText={(text) => settxtAdress(text)}
                >
                </TextInput>
                <View style={styles.checkboxContainer}>
                    <CheckBox
                        value={isSelected}
                        onValueChange={setSelection}
                        style={styles.checkbox}
                    />
                    <Text style={styles.label}>Bạn có phải là thợ?</Text>
                </View>
                <TouchableHighlight
                    style={styles.btnRegister}
                    onPress={submit}
                    underlayColor='#fff'>
                    <Text style={{ fontSize: 15, fontWeight: 'bold' }} >Đăng ký</Text>
                </TouchableHighlight>
                <View style={{ alignSelf: 'flex-end', flexDirection: 'row', marginTop: 10 }}>
                    <Text style={{ fontSize: 15, fontWeight: 'bold' }} >Bạn đã có tài khoản ? </Text>
                    <TouchableHighlight
                        onPress={submit}
                        underlayColor='#fff'>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'red' }} >Đăng nhập</Text>
                    </TouchableHighlight>
                </View>
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20
    },
    styleInput: {
        backgroundColor: "blanchedalmond",
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderTopRightRadius: 20,
        marginTop: 15,
        borderColor: 'red',
        borderWidth: 2
    },
    btnRegister: {
        marginTop: 10,
        borderRadius: 20,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 40,
        paddingRight: 40,
        backgroundColor: 'red',
        alignSelf: 'center',
    },
    checkboxContainer: {
        flexDirection: "row",
        marginBottom: 20,
    },
    checkbox: {
        alignSelf: "center",
    },

})
export default Regitster