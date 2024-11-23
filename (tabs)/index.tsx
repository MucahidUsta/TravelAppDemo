import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Stack } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import { useHeaderHeight } from "@react-navigation/elements";
import CategoryButtons from "../components/CategoryButtons";
import Listings from "../components/Listings";
import listingData from "../data/destinations.json";
import GroupListings from "../components/GroupListings";
import groupData from "../data/groups.json"
const Page = () => {
    
    const headerHeight = useHeaderHeight();
    const [category, setCategory] = useState("All")
    const onCatChanged = (category: string) => {
        console.log("Category: ", category)
        setCategory(category)
    }
    return (
        <>
            <Stack.Screen
                options={{
                    headerTransparent: true,
                    headerTitle: "",
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => { }} style={{ marginLeft: 20 }}>
                            <Image
                                source={{
                                    uri: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/4f/7d/fc/caption.jpg?w=1200&h=1200&s=1",
                                }}
                                style={{ width: 40, height: 40, borderRadius: 10 }}
                            />
                        </TouchableOpacity>
                    ),
                    headerRight: () => (
                        <TouchableOpacity
                            onPress={() => { }}
                            style={{
                                marginRight: 20,
                                backgroundColor: "white",
                                padding: 10,
                                borderRadius: 10,
                                shadowColor: "#171717",
                                shadowOffset: { width: 2, height: 4 },
                                shadowOpacity: 0.2,
                                shadowRadius: 3,
                            }}
                        >
                            <Ionicons name="notifications" size={20} color={Colors.black} />
                        </TouchableOpacity>
                    ),
                }}
            />
            <View style={[styles.container, { paddingTop: headerHeight }]}>
                <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.headingTxt}>Explore The Beautiful World!</Text>

                <View style={styles.searchSectionWrapper}>
                    <View style={styles.searchBar}>
                        <Ionicons name="search" size={18} style={{ marginRight: 5, color: Colors.black }} />
                        <TextInput
                            placeholder="Search..."
                            style={{ flex: 1 }}
                        />
                    </View>
                    <TouchableOpacity onPress={() => { }} style={styles.filterBtn}>
                        <Ionicons name="options" size={28} color="white"/>
                    </TouchableOpacity>
                </View>
                <CategoryButtons onCategoryChanged={onCatChanged}/>
                <Listings listings = {listingData} category={category}/>
                <GroupListings listings = {groupData} />
                </ScrollView>
            </View>

        </>
    );
};

export default Page;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: Colors.bgColor,
    },
    headingTxt: {
        fontSize: 28,
        fontWeight: "800",
        color: Colors.black,
        marginTop: 10,
    },
    searchSectionWrapper: {
        flexDirection: "row", // Yatay düzen
        alignItems: "center", // Dikey ortalama
        marginVertical: 20,
    },
    searchBar: {
        flex: 1, // Yatayda genişleme
        flexDirection: "row",
        alignItems: "center", // Dikey içerik ortalama
        backgroundColor: "white",
        paddingHorizontal: 16, // Yanlardan boşluk
        paddingVertical: 10,   // Üst ve alt boşluk
        borderRadius: 10,
    },
    filterBtn:{
        backgroundColor:Colors.primaryColor,
        padding:12,
        borderRadius:10,
        marginLeft:20
    }
});

