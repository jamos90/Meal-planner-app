import React from 'react';

import { ScrollView, StyleSheet, View, Text, Button, Image } from 'react-native';
import { MEALS }  from '../data/dummy-data';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/HeaderButton';
import DefaultText from '../components/defaultText';

const MealDetailScreen = props => {

    const mealId = props.navigation.getParam('mealId');

    const selectedMeal = MEALS.find(meal => meal.id === mealId);


    return(
        <ScrollView>
            <Image style={styles.image} source={{uri: selectedMeal.imageUrl}}/>
            <View style={styles.details}>
                <DefaultText>{selectedMeal.duration}</DefaultText>
                <DefaultText>{selectedMeal.complexity.toUpperCase()} </DefaultText>
                <DefaultText>{selectedMeal.affordability.toUpperCase()} </DefaultText>
            </View>
            <Text style={styles.title}>Ingredients</Text>
            <Text style={styles.content}>List of Ingredients</Text>

            <Text style={styles.title}>Steps</Text>
            <Text style={styles.content}>...list of steps</Text>
        </ScrollView>
    );
};

MealDetailScreen.navigationOptions = (navigationData)=> {
    const mealId = navigationData.navigation.getParam('mealId');
    const selectedMeal = MEALS.find(meal => meal.id === mealId);
    return {
        headerTitle: selectedMeal.title,
        headerRight: 
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item 
                title="Favorite" 
                iconName="ios-star" 
                onPress={console.log('Mark as favourite')} 
            />
        </HeaderButtons>
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default MealDetailScreen