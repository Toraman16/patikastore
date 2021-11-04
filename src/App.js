import React from "react";
import {Text, TextInput, StyleSheet, SafeAreaView, FlatList, Image, ScrollView, Dimensions, View} from 'react-native';
import AppCard from './AppCard';

import veriler from './AppCard/veriler.json';

function App () {
    const storeshow = ({item}) => <AppCard store={item} />;
    return (
        <SafeAreaView>
            <View>
            <Text style={mainstil.maintitle}>PATIKASTORE</Text>
            <TextInput 
            style={mainstil.input_title}>Ara..</TextInput>
            </View>
            <FlatList horizontal={false} numColumns='2'
         data= {veriler}
         renderItem={storeshow}
            />

        
        

        </SafeAreaView>
    );
}

const mainstil = StyleSheet.create({
    main: {
        flex:1,
        backgroundColor:'white',
        marginRight:5,

    },
    maintitle: {
        color:'purple',
        fontSize: 24,
        fontWeight:'bold',
        margin: 10,
    },
    input_title:{
        backgroundColor:'lightgray',
        color:'darkgray',
        fontSize: 16,
        margin:5,
        borderRadius: 10,

    }


});

export default App;