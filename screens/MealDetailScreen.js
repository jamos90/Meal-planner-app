import React from 'react';

import { StyleSheet, View, Text, Button } from 'react-native';
import { MEALS }  from '../data/dummy-data';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/HeaderButton';

const MealDetailScreen = props => {

    const mealId = props.navigation.getParam('mealId');

    const selectedMeal = MEALS.find(meal => meal.id === mealId);


    return(
        <View style={styles.screen}>
            <Text>{selectedMeal.title}</Text>
            <Button title="take me back to detaisl" onPress={()=>props.navigation.popToTop()}></Button>
        </View>
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