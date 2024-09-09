import React from "react";
import {
    SafeAreaView,
    Text,
    View,
    StyleSheet,
} from "react-native";

function Main() : React.JSX.Element {
    return (
        <SafeAreaView style={style.container}>
            <View style={style.headingArea}>
                <Text style={style.headingTxt}>
                    Hey Sir!!
                </Text>
            </View>

            <View style={style.card}>
                <Text style={style.cardTxt}>
                    Card
                </Text>
            </View>


        </SafeAreaView>
    );
}

const style = StyleSheet.create({

    container : {
        backgroundColor: '#C4DAD2',
        justifyContent: 'center',
        alignItems: 'center',
        flex : 1
    },

    headingTxt : {
        fontSize: 50,
        fontWeight: 'bold',
    },

    headingArea : {
        alignItems: 'center',
        marginTop: 10,
        justifyContent : 'flex-start'
    },

    card : {
        backgroundColor: '#FADFA1',
        padding: 10,
        borderRadius : 10,
        borderWidth : 2,
        borderColor : 'black',
        height : 100,
        width : 100,
        marginTop: 30,
        justifyContent: 'center',
        alignItems:'center'
    },

    cardTxt: {
        fontSize: 20,
        color: '#16423C',
        fontWeight: 'bold'
    }
});

export default Main;