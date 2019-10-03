import React from 'react';

import { FlatList, StyleSheet, View } from 'react-native';

import MealItem from './MealItem';

const MealList = props => {

    const renderMealItem =  (itemData)=> {
        return <MealItem 
                    title={itemData.item.title} 
                    duration={itemData.item.duration}
                    complexity={itemData.item.complexity.toUpperCase()} 
                    affordability={itemData.item.affordability}
                    image={itemData.item.imageUrl}
                    onSelectMeal={()=> {
                        props.navigation.navigate({routeName: 'MealDetail', params: {
                            mealId: itemData.item.id
                        }})
                    }}
                />    
        
    }

    return (
        <View style={styles.list}>
            <FlatList 
                data={props.listData} 
                keyExtractor={(item,index)=>{item.id}} 
                renderItem={renderMealItem}
                style={styles.listStyle}
            />
            
    
        </View>
    )
};

const styles = StyleSheet.create({
    list: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    listStyle: {
        width: '100%'
    }
});


export default MealList;

