import React from 'react';

import { StyleSheet, View, Text, Button} from 'react-native';

import { CATEGORIES } from '../data/dummy-data';


const CategoriesMealScreen = props => {

    const catId = props.navigation.getParam('categoryId');

    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);


    return(
        <View style={styles.screen}>
            <Text>{selectedCategory.title}</Text>
            <Button title="go to details" onPress={()=>props.navigation.navigate({routeName: "MealDetail"})}></Button>
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