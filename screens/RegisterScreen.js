import { NavigationHelpersContext } from '@react-navigation/native';
import React, { useLayoutEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Input, Text, Button } from 'react-native-elements';
import { auth } from '../firebase';

const RegisterScreen = ({ navigation }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    useLayoutEffect(() => {
        navigation.setOptions({
            headerBackTitle: 'Back to Login',
        });
    }, [navigation]);

    const register = () => {
        auth.createUserWithEmailAndPassword(email, password)
            .then((authuser) => {
                authuser.user.updateProfile({
                    displayName: name,
                    photoURL:
                        imageUrl ||
                        'http://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png',
                });
                navigation.replace('Home');
            })
            .catch((error) => {
                alert(error.message);
            });
    };

    return (
        <View style={styles.container}>
            <View>
                <Text h3 style={{ marginBottom: 50 }}>
                    Create a Signal account
                </Text>
            </View>
            <View style={styles.inputContainer}>
                <Input
                    placeholder="Full Name"
                    autofocus
                    type="text"
                    value={name}
                    onChangeText={(text) => setName(text)}
                />
                <Input
                    placeholder="Email"
                    type="email"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
                <Input
                    placeholder="Password"
                    type="password"
                    secureTextEntry
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                />
                <Input
                    placeholder="Profile Picture URL (optional)"
                    type="text"
                    value={imageUrl}
                    onChangeText={(text) => setImageUrl(text)}
                    onSubmitEditing={register}
                />
            </View>

            <Button title="Register" onPress={register} raised containerStyle={styles.button} />
        </View>
    );
};

export default RegisterScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: 'white',
    },
    inputContainer: {
        width: 300,
    },
    button: {
        width: 200,
        marginTop: 10,
    },
});
