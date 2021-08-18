import { StatusBar } from 'expo-status-bar';
import React, { useLayoutEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView, ScrollView } from 'react-native';
import { Avatar } from 'react-native-elements';
import CustomListItem from '../components/CustomListItem';
import { auth, db } from '../firebase';

const HomeScreen = ({ navigation }) => {
    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Signal',
            headerStyle: {
                backgroundColor: 'white',
            },
            headerTitleStyle: {
                color: 'black',
            },
            headerTintColor: 'black',
            headerLeft: () => (
                <View style={{ marginLeft: 20 }}>
                    <TouchableOpacity>
                        <Avatar
                            rounded
                            source={{
                                uri: auth?.currentUser?.photoURL,
                            }}
                        />
                    </TouchableOpacity>
                </View>
            ),
        });
    }, []);

    return (
        <SafeAreaView>
            <StatusBar style="dark" />
            <ScrollView>
                <CustomListItem />
            </ScrollView>
        </SafeAreaView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({});
