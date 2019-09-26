import React from 'react';

import { StyleSheet, View, Text, Button, FlatList} from 'react-native';

import { CATEGORIES, MEALS } from '../data/dummy-data';


const CategoriesMealScreen = props => {

    const catId = props.navigation.getParam('categoryId');

    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

    const displayedMeals = MEALS.filter((meal)=>{
        return meal.categoryIds.indexOf(catId) !== -1
    });

    const renderMealItem =  (itemData)=> {
        return(
            <View>
                <Text>{itemData.item.title}</Text>
            </View>
        )
    }

    return(
        <View style={styles.screen}>
            <FlatList data={displayedMeals} keyExtractor={(item,index)=>{item.id}} renderItem={renderMealItem}/>
        
        </View>
    );
};

CategoriesMealScreen.navigationOptions = navigationData => {

    const catId = navigationData.navigation.getParam('categoryId')

    const selectedCategory = CATEGORIES.find(cat => cat.id === catId)

    return {
        headerTitle: selectedCategory.title,
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default CategoriesMealScreen