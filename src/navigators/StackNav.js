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
import RestaurantDetails from '../screens/Main/RestaurantDetails';
import Checkout from '../screens/Main/Checkout';
import FoodItem from '../screens/Main/FoodItem';
import History from '../screens/Main/History';
import OrderDetails from '../screens/Main/OrderDetails';
import TrackOrder from '../screens/Main/TrackOrder';
import Splash from '../screens/Auth/Splash';
import Login from '../screens/Auth/Login';
import ProfileSetup from '../screens/Auth/ProfileSetup';
import Otp from '../screens/Auth/Otp';
import PopularCuisines from '../screens/Main/PopularCuisines';
import UpdateProfile from '../screens/Main/UpdateProfile';
import SavedPlaces from '../screens/Main/SavedPlaces';
import HelpCenter from '../screens/Main/HelpCenter';

const Stack = createStackNavigator();

export default function StackNav() {
  const Screens = {
    // Splash,
    // Onboarding,
    // Login,
    // Otp,
    // ProfileSetup,
    BottomTab,
    RestuarantProfile,
    BookTable,
    BookingStatus,
    Search,
    FavoritedItems,
    RestaurantDetails,
    FoodItem,
    Checkout,
    History,
    OrderDetails,
    TrackOrder,
    PopularCuisines,
    UpdateProfile,
    HelpCenter,
    SavedPlaces,
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
