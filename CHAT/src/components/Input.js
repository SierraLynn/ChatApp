import React, {useState} from 'react';
import { StyleSheet, View, TouchableOpacity, Platform } from 'react-native';
import {Item, Input as InputNB, Icon} from "native-base";

export default function Input (props) {
    const {sendMessage} = props;
    const [message, setMessage]= useState("");

    const onSubmit = () =>{
        if(message.length > 0){
            sendMessage(message);
            setMessage("");
        }
    }

    return (
        <View style={styles.container}>
            <Item style={styles.itemInput}>
                <InputNB
                 placeholder= "Mensaje..."
                 placeholderTextColor= "grey"
                 style={styles.input}
                 value={message}
                 onChange={(e) => setMessage(e.nativeEvent.text)}
                />

                <TouchableOpacity onPress={onSubmit}>
                    <Icon name= "send" type= "FontAwesome" style={{color:"#663399"}} />
                </TouchableOpacity>
            </Item>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#F5F5F5",
        paddingBottom: 0,
        paddingHorizontal: 20,
    },

    itemInput:{
        borderColor: "#663399",
    },

    input:{
        color:"#000000",
    },
})
