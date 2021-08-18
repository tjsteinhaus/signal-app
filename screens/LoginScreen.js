import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Input, Image } from 'react-native-elements';
import { auth } from '../firebase';

const LoginScreen = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            console.log(authUser);
            if (authUser) {
                navigation.replace('Home');
            }
        });

        return unsubscribe;
    }, []);

    const signIn = () => {
        auth.signInWithEmailAndPassword(email, password).catch((error) => alert(error.message));
    };

    return (
        <View style={styles.container}>
            <Image
                source={{
                    uri: 'https://blog.mozilla.org/internetcitizen/files/2018/08/signal-logo.png',
                }}
                style={{ width: 200, height: 200 }}
            />
            <View style={styles.inputContainer}>
                <Input
                    autofocus
                    type="Email"
                    placeholder="Email"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
                <Input
                    type="password"
                    secureTextEntry
                    placeholder="Password"
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    onSubmitEditing={signIn}
                />
            </View>
            <Button containerStyle={styles.button} title="Login" onPress={signIn} />
            <Button
                containerStyle={styles.button}
                type="outline"
                title="Register"
                onPress={() => navigation.navigate('Register')}
            />
            <View style={{ height: 100 }} />
        </View>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    inputContainer: {
        width: 300,
    },
    button: {
        width: 200,
        marginTop: 10,
    },
});
