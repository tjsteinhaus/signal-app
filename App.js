import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';

export default function App() {
    const Stack = createStackNavigator();
    const globalScreenOptions = {
        headerStyle: {
            backgroundColor: '#2C6BED',
        },
        headerTitleStyle: { color: 'white' },
        headerTintColor: 'white',
    };

    return (
        <NavigationContainer>
            <StatusBar style="light" />
            <SafeAreaProvider>
                <KeyboardAvoidingView
                    style={styles.container}
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                >
                    <Stack.Navigator screenOptions={globalScreenOptions} initialRouteName="Login">
                        <Stack.Screen name="Login" component={LoginScreen} />
                        <Stack.Screen name="Register" component={RegisterScreen} />
                        <Stack.Screen name="Home" component={HomeScreen} />
                    </Stack.Navigator>
                </KeyboardAvoidingView>
            </SafeAreaProvider>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
});
