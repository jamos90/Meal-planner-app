import React from 'react';

import { StyleSheet, View, Text, Button, FlatList, TouchableOpacity} from 'react-native';
import { CATEGORIES } from '../data/dummy-data';

import CategoryGridTile from '../components/categoryGridTile';




const CategoriesScreen = props => {

    const renderGridItem  = (itemData) => {
        return ( 
        <CategoryGridTile 
            color={itemData.item.color} 
            title={itemData.item.title} 
            onSelect={()=> props.navigation.navigate({routeName:'CategoriesMeals', params:{
            categoryId: itemData.item.id
            }})}/>
        )
    
    }

    return(
      <FlatList keyExtractor={(item, index)=> item.id} data={CATEGORIES} renderItem={renderGridItem} numColumns={2}>

      </FlatList>
    );
};

CategoriesScreen.navigationOptions = {
    headerTitle: 'Meal Categories',
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default CategoriesScreen