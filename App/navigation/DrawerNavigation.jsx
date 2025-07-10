import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AddBusinessScreen from '../screen/FormScreens/AddBusinessScreen';
import AddArticleScreen from '../screen/FormScreens/AddArticleScreen';
import { Ionicons } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator
      initialRouteName="AddBusiness"
      drawerPosition="right"
      screenOptions={({ navigation }) => ({
        headerShown: true,
        headerLeft: () => null,
        headerRight: () => (
          <Ionicons
            name="menu"
            size={24}
            color="black"
            style={{ marginRight: 15 }}
            onPress={() => navigation.toggleDrawer()}
          />
        ),
        drawerStyle: {
          backgroundColor: '#f8f9fa',
          width: 260,
        },
        drawerLabelStyle: {
          fontSize: 16,
          fontWeight: '600',
          color: '#333',
        },
        drawerActiveTintColor: 'tomato',
        drawerInactiveTintColor: '#555',
      })}
    >
      <Drawer.Screen
        name="AddBusiness"
        component={AddBusinessScreen}
        options={{
          title: 'Add New Business',
          drawerLabel: 'Add Business',
        }}
      />
      <Drawer.Screen
        name="AddArticle"
        component={AddArticleScreen}
        options={{
          title: 'Add New Article',
          drawerLabel: 'Add Article',
        }}
      />
    </Drawer.Navigator>
  );
}
