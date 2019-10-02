import React from 'react';

import { FlatList, StyleSheet, View } from 'react-native';

const MealList = props => {
    return (
        <View style={styles.list}>
            <FlatList 
                data={displayedMeals} 
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

