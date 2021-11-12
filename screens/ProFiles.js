import React, { useState, useEffect } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View } from 'react-native';

import {
    TextInput,
    Avatar,
    IconButton,
    Colors,
    Button,
} from 'react-native-paper';
import User from '../models/User';
//import Texts from '../components/TextThems'

const ProFile = () => {
    var users = User.getInstance();

    const [modalVisible, setModalVisible] = useState(false);
    const [content, setContent] = useState('');
    const [nameContent, setnameContent] = useState('');
    const [status, setstatus] = useState('');
    const [text, setText] = React.useState('');

    const dialog = ({ type, contents, nameContext }) => {
        setModalVisible(true);
        setContent(contents);
        setnameContent(nameContext);
    };

    const Edit = ({ contents }) => {
        setModalVisible(!modalVisible);
        if (status === '0') {
            setModalVisible(!modalVisible);
        }
    };
    const Texts = props => {
        return (
            <View style={styles.contentContainer}>
                <View style={styles.contentDetails}>
                    <View style={{ width: '30%' }}>
                        <Text>
                            {props.nameConent} : {props.name}
                        </Text>
                    </View>
                    <View
                        style={{
                            width: '70%',
                            flexDirection: 'row',
                            justifyContent: 'flex-end',
                        }}>
                        <Text
                            style={{
                                alignSelf: 'flex-end',
                                marginRight: 40,
                                fontSize: 20,
                            }}>
                            {props.txt}
                        </Text>
                        <IconButton
                            style={{
                                position: 'absolute',
                                zIndex: 1,
                                right: -16,
                                marginTop: -10,
                                marginBottom: 20,
                            }}
                            icon="arrow-right-bold"
                            color={Colors.red500}
                            size={30}
                            onPress={() =>
                                dialog({
                                    contents: props.txt,
                                    type: props.type,
                                    nameContext: props.nameConent,
                                })
                            }
                        />
                    </View>
                </View>
            </View>
        );
    };
    return (
        <View style={{ flex: 1, alignContent: 'center', padding: 20 }}>
            <View style={styles.ImageContainer}>
                <Avatar.Image
                    size={150}
                    source={require('../assets/tho.png')}
                    style={{ marginTop: 80 }}
                />
                <IconButton
                    style={{
                        position: 'absolute',
                        zIndex: 1,
                        right: -16,
                        marginRight: 90,
                        marginTop: 1000,
                    }}
                    icon="camera"
                    color={Colors.red500}
                    size={50}
                    onPress={() => console.log('Pressed')}
                />
            </View>
            <View style={{ marginTop: 30 }}>
                <Texts nameConent="Tên " txt={users.getName()} type="0" />
                <Texts nameConent="Tài khoản " txt={users.getSDT()} type="1" />
                <Texts nameConent="Mật khẩu " txt={users.getPass()} type="2" />
            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}>
                <View
                    style={{
                        flex: 1,
                        width: '100%',
                        height: '100%',
                        justifyContent: 'center',
                        alignContent: 'center',
                    }}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Mời bạn chỉnh sửa</Text>
                        <Text style={{ fontSize: 20, alignItems: 'flex-end' }}>
                            Tên cũ: {content} {status}
                        </Text>
                        <TextInput
                            style={{ height: '20%', width: '80%', backgroundColor: 'white' }}
                            placeholder="Mới"
                            value={text}
                            onChangeText={text => setText(text)}
                        />
                        <View
                            style={{
                                flexDirection: 'row',
                                marginTop: 40,
                                backgroundColor: 'red',
                            }}>
                            <Button onPress={() => Edit({ contents: text })}>Lưu lại</Button>
                            <Button onPress={() => setModalVisible(!modalVisible)}>
                                Thoát
                            </Button>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: '60%',
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: 'green',
    },
    ImageContainer: {
        height: '30%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconButtom: {
        backgroundColor: 'red',
        position: 'absolute',
        zIndex: 1,
        right: -16,
        marginRight: 90,
        marginTop: 1000,
    },
    contentContainer: {
        marginTop: 15,
        alignContent: 'center',
        justifyContent: 'center',
    },
    contentDetails: {
        backgroundColor: 'gainsboro',
        padding: 20,
        flexDirection: 'row',
        borderRadius: 15,
    },
    text: {
        fontSize: 25,
    },

    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 10,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
        fontSize: 30,
    },
});

export default ProFile;
