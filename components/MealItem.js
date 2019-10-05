import React from 'react';
import { FlatList, View, Text, StyleSheet, TouchableOpacity, TouchableNativeFeedback, ImageBackground } from 'react-native';
import DefaultText from '../components/defaultText';

const MealItem = props =>{
    return (
        <View style={styles.mealItem}>
        <TouchableOpacity onPress={props.onSelectMeal}>
            <View>
                <View style={{...styles.mealRow, ...styles.mealHeader}}>
                    <ImageBackground source={{uri: props.image}} style={styles.bgImage}>
                        <Text numberOfLines={1} style={styles.title}>{props.title}</Text>
                    </ImageBackground>
                </View>
                <View style={{...styles.mealRow,...styles.mealDetail}}>
                    <DefaultText>{props.duration}</DefaultText>
                    <DefaultText>{props.complexity.toUpperCase()} </DefaultText>
                    <DefaultText>{props.affordability.toUpperCase()} </DefaultText>
                </View>
            </View>
        </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    mealItem: {
        width: '100%',
        height: 200,
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        overflow: 'hidden'
    },
    bgImage: {
        width: '100%',
        height: '100%',
        justifyContent:'flex-end'
    },
    title: {
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0.5)',
        fontSize: 20,
        fontFamily: 'open-sans-bold',
        paddingVertical: 5,
        textAlign: 'center'
    },  
    mealRow: {
        flexDirection: 'row'
    },
    mealHeader: {
        height: '85%'
    },
    mealDetail: {
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '15%'
    }
});

export default MealItem;