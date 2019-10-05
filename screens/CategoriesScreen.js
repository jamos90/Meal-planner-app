import React from 'react';

import { StyleSheet, View, Text, Button, FlatList, TouchableOpacity} from 'react-native';
import { CATEGORIES } from '../data/dummy-data';

import CategoryGridTile from '../components/categoryGridTile';
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import HeaderButton from '../components/HeaderButton';




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

CategoriesScreen.navigationOptions = (navData) => {
    return {
        headerTitle: 'Meal Categories',
        headerLeft:
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title="Menu" iconName="ios-menu" onPress={()=>{navData.navigation.toggleDrawer()}}></Item>
        </HeaderButtons>
        }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default CategoriesScreen