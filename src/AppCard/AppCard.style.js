import { StyleSheet, Dimensions } from "react-native";

export default  StyleSheet.create( {
    container:{
        flex:4,
        backgroundColor:'lightgray',
        borderRadius: 5,

    },

    image:{
        height: Dimensions.get('window').height /3,
        width: Dimensions.get('window').width /2,
        borderRadius:5,
        paddingRight:5,
        marginRight:10,
        margin:10,
    },
    title:{
        color:'black',
        fontSize: 14,
        fontWeight:'bold',
        margin:10,
    },
    price:{
        color:'darkgray',
        fontSize: 16,
        fontWeight:'bold',
        margin:10,
    },
    stock:{
        color:'red',
        fontSize:12,
        fontWeight:'bold',
    },



});