import { View, Text, ListRenderItem, FlatList, Image, StyleSheet } from 'react-native';
import React from 'react';
import { GroupType } from '../types/groupType'; 
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';

const GroupListings = ({ listings }: { listings: GroupType[] }) => {
  const renderItem: ListRenderItem<GroupType> = ({ item }) => {
    return (
    <View style={styles.item}>
        <Image source={{uri:item.image}} style={styles.image}/>
        <View>
            
            <Text style={styles.itemTxt}>{item.name}</Text>
            <View style={{flexDirection:"row", alignItems:"center"}}>
                <Ionicons name='star' size={20} color={Colors.primaryColor} />
                <Text style={styles.itemRating}>{item.rating}</Text>
                <Text style={styles.itemReviews}> ({item.reviews})</Text>
            </View>
        
        
        </View>
    </View>
    ) 
  };

  return (
    <View style={{marginVertical:20}} >
      <Text style={styles.title}>Top Travel Groups</Text>
     
      <FlatList
        data={listings}  
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}  
        horizontal
        showsHorizontalScrollIndicator={false}
      />
     
    </View>
  );
};

export default GroupListings;

const styles = StyleSheet.create(
    {
        image:{
            width:80,
            height:100,
            borderRadius:10,
            marginRight:10
        },
        item:{
            flexDirection:"row",
            backgroundColor:"white",
            padding:10,
            borderRadius:10,
            marginRight:14, 
            alignItems:"center"              
        },
        title: {
            fontSize:22,
            fontWeight:"600",
            color:"black",
            marginBottom:10
        },
        itemTxt:{
            fontSize:14,
            fontWeight:"600",
            color:"black",
            marginBottom:8
        },
        itemRating:{
            fontSize:14,
            fontWeight:"600",
            color:"black",
            marginLeft:5
        },
        itemReviews:{
            fontSize:14,
            color:"#999"
        }
    }
)
