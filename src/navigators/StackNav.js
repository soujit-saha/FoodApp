import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import BottomTab from './BottomTab';
import {navigationRef} from '../utils/RootNavigation';
import RestuarantProfile from '../screens/RestuarantProfile';
import BookTable from '../screens/BookTable';
import BookingStatus from '../screens/BookingStatus';
import Onboarding from '../screens/Auth/Onboarding';
import Search from '../screens/Main/Search';
import FavoritedItems from '../screens/Main/FavoritedItems';

const Stack = createStackNavigator();

export default function StackNav() {
  const Screens = {
    BottomTab,
    RestuarantProfile,
    BookTable,
    BookingStatus,
    Onboarding,
    Search,
    FavoritedItems,
  };

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          //  gestureEnabled: false
        }}>
        {Object.entries({
          ...Screens,
        }).map(([name, component], index) => {
          return <Stack.Screen key={index} name={name} component={component} />;
        })}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
