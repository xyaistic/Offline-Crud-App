import React from 'react';
import { View, Text, FlatList, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const dummyBusinesses = [
    { id: 1, name: 'AutoFix Garage' },
    { id: 2, name: 'QuickServe Auto' },
    { id: 3, name: 'Speedy Repairs' },
    { id: 4, name: 'Urban Auto Hub' },
];

export default function BusinessScreen() {
    const navigation = useNavigation();
    const renderItem = ({ item }) => (
        <Pressable onPress={() => navigation.navigate('Article', { businessId: item.id })} className="flex-row border justify-between border-gray-200 items-center bg-white rounded-xl p-4 mb-3 shadow-sm">
            <View className="flex-row items-center">
                <Ionicons name="business" size={24} color="#4b7bec" className="" />
                <Text className="text-gray-500 text-sm mx-4">#{item.id}</Text>
                <Text className="text-lg font-semibold text-gray-800">{item.name}</Text>
            </View>
            <Ionicons name="chevron-forward" size={24} color="black" className="ml-auto" />
        </Pressable>
    );

    return (
        <View className="flex-1 bg-white p-4">
            <FlatList
                data={dummyBusinesses}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
                contentContainerStyle={{ paddingBottom: 20 }}
            />
        </View>
    );
}
