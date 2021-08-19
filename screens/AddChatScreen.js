import React, { useLayoutEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { Icon } from 'react-native-elements';
import { db } from '../firebase';

const AddChat = ({ navigation }) => {
    const [input, setInput] = useState('');

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Add a New Chat',
            headerBackTitle: 'Chats',
        });
    }, [navigation]);

    const createChat = async () => {
        await db
            .collection('chats')
            .add({
                chatName: input,
            })
            .then(() => navigation.goBack())
            .catch((error) => alert(error));
    };

    return (
        <View style={styles.container}>
            <Input
                placeholder="Enter a chat name"
                value={input}
                onChangeText={(text) => setInput(text)}
                leftIcon={<Icon name="wechat" type="antdesign" color="black" size={24} />}
            />
            <Button disabled={!input} onPress={createChat} title="Create new Chat" />
        </View>
    );
};

export default AddChat;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 30,
        height: '100%',
    },
});
